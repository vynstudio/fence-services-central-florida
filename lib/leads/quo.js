/**
 * Quo (formerly OpenPhone) SMS helpers.
 * Docs: POST https://api.quo.com/v1/messages
 * Auth: Authorization: <API_KEY>
 *
 * Env:
 *   QUO_API_KEY
 *   QUO_FROM_NUMBER   (+1… business number)
 *   QUO_USER_ID       optional — send as specific workspace user
 *   QUO_OWNER_NOTIFY_NUMBER  optional — SMS lead summary to owner
 */

const QUO_BASE = "https://api.quo.com/v1";

export async function sendQuoSms({ to, content }) {
  const apiKey = process.env.QUO_API_KEY;
  const from = process.env.QUO_FROM_NUMBER;
  const userId = process.env.QUO_USER_ID;

  if (!apiKey || !from) {
    return { ok: false, skipped: true, reason: "Quo env not configured" };
  }
  if (!to) {
    return { ok: false, reason: "Missing recipient" };
  }

  const payload = {
    content: String(content).slice(0, 1600),
    from,
    to: [to],
  };
  if (userId) payload.userId = userId;

  const res = await fetch(`${QUO_BASE}/messages`, {
    method: "POST",
    headers: {
      Authorization: apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const body = await res.json().catch(() => ({}));
  // Quo returns 202 on success
  if (!res.ok && res.status !== 202) {
    const reason =
      body?.message || body?.error || body?.title || `Quo HTTP ${res.status}`;
    console.error("quo sms error", res.status, body);
    return { ok: false, reason };
  }

  return { ok: true, id: body?.data?.id || body?.id };
}

export function leadAutoReplyText(lead) {
  const first = (lead.name || "there").trim().split(/\s+/)[0];
  const biz = process.env.QUO_FROM_NUMBER
    ? formatSoft(process.env.QUO_FROM_NUMBER)
    : "(see website)";
  return [
    `Hi ${first}, this is FenceLine Florida.`,
    `We received your fence quote request.`,
    `A representative from our team will contact you soon.`,
    `Reply here anytime, or call ${biz}.`,
  ].join(" ");
}

export function leadOwnerAlertText(lead) {
  return [
    `New FenceLine lead: ${lead.name}`,
    lead.phoneDisplay || lead.phone,
    `${lead.need || "?"} / ${lead.material || "?"} / ${lead.city || "?"}, FL`,
  ].join(" · ");
}

function formatSoft(e164) {
  const d = String(e164).replace(/\D/g, "").slice(-10);
  if (d.length !== 10) return e164;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}
