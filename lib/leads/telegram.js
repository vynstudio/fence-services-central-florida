/**
 * Send a lead alert to Telegram via Bot API.
 * Env: TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID
 */

export async function sendTelegramMessage(text) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return { ok: false, skipped: true, reason: "Telegram env not configured" };
  }

  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      disable_web_page_preview: true,
    }),
  });

  const body = await res.json().catch(() => ({}));
  if (!res.ok || body.ok === false) {
    const reason =
      body?.description || body?.error || `Telegram HTTP ${res.status}`;
    console.error("telegram error", reason);
    return { ok: false, reason };
  }

  return { ok: true };
}

export function formatLeadTelegramMessage(lead) {
  const lines = [
    "🪵 New FenceLine Florida lead",
    "",
    `Name: ${lead.name}`,
    `Phone: ${lead.phoneDisplay || lead.phone}`,
    lead.email ? `Email: ${lead.email}` : null,
    "",
    `Need: ${lead.need || "—"}`,
    `Material: ${lead.material || "—"}`,
    `Property: ${lead.property || "—"}`,
    "",
    `Address: ${lead.street}, ${lead.city}, FL ${lead.zip}`,
    lead.notes ? `Notes: ${lead.notes}` : null,
    "",
    "— fencelineflorida.com",
  ].filter((l) => l !== null);

  return lines.join("\n");
}
