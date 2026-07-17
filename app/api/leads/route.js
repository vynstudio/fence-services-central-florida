import { NextResponse } from "next/server";
import { formatDisplayPhone, toE164 } from "@/lib/leads/phone";
import {
  formatLeadTelegramMessage,
  sendTelegramMessage,
} from "@/lib/leads/telegram";
import { leadAutoReplyText, sendQuoSms } from "@/lib/leads/quo";

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
 *
 * 1) Telegram — full lead alert to the team
 * 2) Quo SMS  — confirmation text to the client only
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

    const channels = { telegram: null, quoLead: null };

    // 1) Telegram — you receive the lead
    try {
      channels.telegram = await sendTelegramMessage(
        formatLeadTelegramMessage(lead),
      );
    } catch (err) {
      console.error("telegram threw", err);
      channels.telegram = { ok: false, reason: err.message };
    }

    // 2) Quo — client confirmation only
    try {
      channels.quoLead = await sendQuoSms({
        to: phoneE164,
        content: leadAutoReplyText(lead),
      });
    } catch (err) {
      console.error("quo lead threw", err);
      channels.quoLead = { ok: false, reason: err.message };
    }

    console.info("lead received", {
      name: lead.name,
      phone: lead.phoneDisplay,
      city: lead.city,
      need: lead.need,
      material: lead.material,
      telegram: channels.telegram,
      quoSms: channels.quoLead,
    });

    return NextResponse.json({
      ok: true,
      channels: {
        telegram: Boolean(channels.telegram?.ok),
        sms: Boolean(channels.quoLead?.ok),
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
