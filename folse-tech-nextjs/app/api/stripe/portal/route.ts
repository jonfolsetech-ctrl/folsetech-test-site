import Stripe from "stripe";

export async function POST() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");
  
  if (!process.env.STRIPE_SECRET_KEY) {
    return Response.json(
      { error: "Stripe API key not configured" },
      { status: 500 }
    );
  }

  return Response.json({ url: "https://billing.stripe.com" });
}
