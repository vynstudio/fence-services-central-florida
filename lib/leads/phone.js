/**
 * Normalize US phone input to E.164 (+1XXXXXXXXXX).
 * Returns null if not a valid 10-digit US number.
 */
export function toE164(input) {
  if (!input) return null;
  const digits = String(input).replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("1")) {
    return `+${digits}`;
  }
  if (digits.length === 10) {
    return `+1${digits}`;
  }
  if (String(input).trim().startsWith("+") && digits.length >= 10) {
    return `+${digits}`;
  }
  return null;
}

export function formatDisplayPhone(input) {
  const e164 = toE164(input);
  if (!e164) return String(input || "").trim();
  const d = e164.replace(/\D/g, "").slice(-10);
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}
