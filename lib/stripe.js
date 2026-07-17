import Stripe from "stripe";

let stripeClient;

export function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("Missing STRIPE_SECRET_KEY");
  }
  if (!stripeClient) {
    stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY);
  }
  return stripeClient;
}

export function getSiteUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.URL ||
    "http://localhost:3000"
  ).replace(/\/$/, "");
}

/** Default job deposit in cents */
export function getDepositAmountCents() {
  const n = Number(process.env.STRIPE_DEPOSIT_AMOUNT_CENTS || 15000);
  return Number.isFinite(n) && n > 0 ? Math.round(n) : 15000;
}
