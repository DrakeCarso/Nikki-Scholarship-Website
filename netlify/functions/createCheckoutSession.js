import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

export const handler = async (event) => {
  try {
    console.log("EVENT BODY:", event.body);
    console.log("SECRET:", process.env.STRIPE_SECRET_KEY);
    console.log("SITE_URL:", process.env.SITE_URL);

    const { amount } = JSON.parse(event.body);

    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: "Nikki Cozzi-Carso Donation" },
            unit_amount: amount * 100,
          },
          quantity: 1,
        },
      ],
      return_url: `${process.env.SITE_URL}/donate/complete?session_id={CHECKOUT_SESSION_ID}`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ clientSecret: session.client_secret }),
    };
  } catch (err) {
    console.error("STRIPE ERROR:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
