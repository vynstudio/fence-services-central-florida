# Stripe integration plan — Meridian Fence Group

> Generated from Stripe best practices + business context (fence install/repair deposits).  
> Stripe CLI authenticated as **Toro Movers** (`acct_1TAYG72N2TArLBqS`).  
> Prefer a **separate Stripe account** (or Connect) for Meridian Fence when going live.

## Recommended product shape

| Need | Stripe product | Why |
|------|----------------|-----|
| Job deposit to reserve crew | **Checkout Sessions** (one-time) | Hosted, PCI-safe, dynamic payment methods |
| Full balance later | Checkout or Invoice | After measure/quote |
| Recurring maintenance (future) | Billing + Checkout | Not needed day one |

**Do not use:** Charges API, Sources, Card Element, hardcoded `payment_method_types`.

## Phase 1 (scaffolded now)

1. Test-mode keys in `.env.local` (from Stripe CLI login).
2. `POST /api/checkout` creates Checkout Session for a **$150 deposit** (configurable via `STRIPE_DEPOSIT_AMOUNT_CENTS`).
3. `/deposit` page collects name/email/phone/city → redirects to Stripe Checkout.
4. `/deposit/success` confirmation page.

## Phase 2 (next)

1. Webhook `checkout.session.completed` → store lead + payment status (Netlify function or Next route).
2. Link lead form popup → optional “Pay deposit” after submit.
3. Stripe Tax only after Dashboard tax registration is active.
4. Live keys via Netlify env (never commit).

## Phase 3 (scale)

1. Separate Meridian Stripe account or Connect.
2. Product/Price objects in Dashboard instead of `price_data`.
3. Customer Portal if retainers/subscriptions appear.

## Env vars

```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_DEPOSIT_AMOUNT_CENTS=15000
NEXT_PUBLIC_SITE_URL=https://fenceline-florida.netlify.app
```

## Local test

```bash
npm run dev
# open /deposit and pay with test card 4242 4242 4242 4242
stripe listen --forward-to localhost:3000/api/webhooks/stripe  # when webhook exists
```

## Security

- Secret keys only on server (`STRIPE_SECRET_KEY`).
- Prefer restricted keys (`rk_`) in production.
- Never log full PANs or secret keys.
- Webhook signature verification required before trusting events.
