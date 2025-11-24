import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

export const handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);

    if (!amount || amount < 1) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid donation amount." }),
      };
    }

    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      mode: "payment",
      line_items: [
        {
          price_data: {
            product: "prod_TTcO1psEJXhk6o", // your actual Stripe product
            currency: "usd",
            unit_amount: amount * 100, // Convert dollars → cents
          },
          quantity: 1,
        },
      ],

      return_url: `${process.env.SITE_URL}/donate/complete?session_id={CHECKOUT_SESSION_ID}`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        clientSecret: session.client_secret,
      }),
    };
  } catch (error) {
    console.error("STRIPE ERROR:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
