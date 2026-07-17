import { getDepositAmountCents, getSiteUrl, getStripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

/**
 * Create a Stripe Checkout Session for a fence job deposit.
 * Body (JSON): { name?, email?, phone?, need?, material?, property?, street?, city?, zip?, notes? }
 */
export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const stripe = getStripe();
    const siteUrl = getSiteUrl();
    const amount = getDepositAmountCents();

    const metadata = {
      source: "fenceline-florida",
      brand: "FenceLine Florida",
      legal_entity: "Diler Dynamics Group LLC",
      customer_name: String(body.name || "").slice(0, 200),
      customer_email: String(body.email || "").slice(0, 200),
      customer_phone: String(body.phone || "").slice(0, 40),
      need: String(body.need || "").slice(0, 40),
      material: String(body.material || "").slice(0, 40),
      property: String(body.property || "").slice(0, 40),
      city: String(body.city || "").slice(0, 80),
      zip: String(body.zip || "").slice(0, 12),
    };

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: body.email || undefined,
      // Omit payment_method_types → dynamic payment methods (Stripe best practice)
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: amount,
            product_data: {
              name: "Fence project deposit",
              description:
                "Refundable deposit to reserve your FenceLine Florida install/repair date. Applied to the final invoice.",
            },
          },
        },
      ],
      success_url: `${siteUrl}/deposit/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/deposit?canceled=1`,
      metadata,
      payment_intent_data: {
        metadata,
        description: "FenceLine Florida — project deposit",
      },
      // Tag for Dashboard analytics (best practice)
      // integration_identifier not on older API — skip if unsupported
    });

    return NextResponse.json({ url: session.url, id: session.id });
  } catch (err) {
    console.error("checkout error", err);
    return NextResponse.json(
      { error: err.message || "Unable to create checkout session" },
      { status: 500 },
    );
  }
}
