import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
export async function POST() {
  return Response.json({ url: "https://billing.stripe.com" });
}
