import { NextResponse } from "next/server";
import { formatDisplayPhone, toE164 } from "@/lib/leads/phone";
import {
  formatLeadTelegramMessage,
  sendTelegramMessage,
} from "@/lib/leads/telegram";
import {
  leadAutoReplyText,
  leadOwnerAlertText,
  sendQuoSms,
} from "@/lib/leads/quo";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX = {
  name: 120,
  email: 200,
  phone: 40,
  street: 200,
  city: 80,
  zip: 12,
  need: 40,
  material: 40,
  property: 40,
  message: 2000,
};

function clip(value, max) {
  return String(value ?? "")
    .trim()
    .slice(0, max);
}

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

/**
 * POST /api/leads
 * Body JSON: lead fields from quote wizard (+ optional bot-field honeypot)
 *
 * Delivers:
 *  1) Telegram alert to team
 *  2) Quo SMS auto-reply to lead
 *  3) Optional Quo SMS to QUO_OWNER_NOTIFY_NUMBER
 *
 * Returns 200 when lead is accepted; channel failures are logged but
 * do not block the thank-you flow (unless validation fails).
 */
export async function POST(request) {
  try {
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    // Honeypot — bots fill this
    if (body["bot-field"] || body.botField) {
      return NextResponse.json({ ok: true, skipped: true });
    }

    const lead = {
      name: clip(body.name, MAX.name),
      email: clip(body.email, MAX.email),
      phone: clip(body.phone, MAX.phone),
      street: clip(body.street, MAX.street),
      city: clip(body.city, MAX.city),
      zip: clip(body.zip, MAX.zip),
      need: clip(body.need, MAX.need),
      material: clip(body.material, MAX.material),
      property: clip(body.property, MAX.property),
      notes: clip(body.message || body.notes, MAX.message),
    };

    if (!lead.name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }
    if (!lead.email || !isEmail(lead.email)) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }

    const phoneE164 = toE164(lead.phone);
    if (!phoneE164) {
      return NextResponse.json(
        { error: "Valid US phone is required" },
        { status: 400 },
      );
    }

    if (!lead.street || !lead.city || !lead.zip) {
      return NextResponse.json(
        { error: "Project address is required" },
        { status: 400 },
      );
    }

    lead.phoneE164 = phoneE164;
    lead.phoneDisplay = formatDisplayPhone(phoneE164);

    const channels = {
      telegram: null,
      quoLead: null,
      quoOwner: null,
    };

    // 1) Telegram team alert
    try {
      channels.telegram = await sendTelegramMessage(
        formatLeadTelegramMessage(lead),
      );
    } catch (err) {
      console.error("telegram threw", err);
      channels.telegram = { ok: false, reason: err.message };
    }

    // 2) Quo auto-reply to lead
    try {
      channels.quoLead = await sendQuoSms({
        to: phoneE164,
        content: leadAutoReplyText(lead),
      });
    } catch (err) {
      console.error("quo lead threw", err);
      channels.quoLead = { ok: false, reason: err.message };
    }

    // 3) Optional owner SMS
    const ownerTo = toE164(process.env.QUO_OWNER_NOTIFY_NUMBER || "");
    if (ownerTo) {
      try {
        channels.quoOwner = await sendQuoSms({
          to: ownerTo,
          content: leadOwnerAlertText(lead),
        });
      } catch (err) {
        console.error("quo owner threw", err);
        channels.quoOwner = { ok: false, reason: err.message };
      }
    } else {
      channels.quoOwner = { ok: false, skipped: true, reason: "No owner number" };
    }

    const anyConfigured =
      channels.telegram?.skipped !== true ||
      channels.quoLead?.skipped !== true ||
      (channels.quoOwner && channels.quoOwner.skipped !== true);

    // If nothing is configured in production, still accept the lead but warn
    if (!anyConfigured) {
      console.warn(
        "Lead accepted but no delivery channels configured (Telegram/Quo env missing)",
        { name: lead.name, phone: lead.phoneDisplay },
      );
    }

    console.info("lead received", {
      name: lead.name,
      phone: lead.phoneDisplay,
      city: lead.city,
      need: lead.need,
      material: lead.material,
      channels: {
        telegram: channels.telegram?.ok || channels.telegram?.skipped,
        quoLead: channels.quoLead?.ok || channels.quoLead?.skipped,
        quoOwner: channels.quoOwner?.ok || channels.quoOwner?.skipped,
      },
    });

    return NextResponse.json({
      ok: true,
      channels: {
        telegram: Boolean(channels.telegram?.ok),
        sms: Boolean(channels.quoLead?.ok),
        ownerSms: Boolean(channels.quoOwner?.ok),
      },
    });
  } catch (err) {
    console.error("leads route error", err);
    return NextResponse.json(
      { error: "Unable to submit lead" },
      { status: 500 },
    );
  }
}
