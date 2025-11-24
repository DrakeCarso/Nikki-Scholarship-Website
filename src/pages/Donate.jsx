import { useState, useEffect } from "react";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_live_51SWJ7mPwKZNm4GlbtFUJI2867EmIkuMZn4IGatQ7f3XBScUhURJ8dj0mEpGmQby6829g8YcT1Ys53RRiSWu0yzVg00vDJrDdCv"); // publishable key only

export default function Donate() {
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    fetch("/.netlify/functions/createCheckoutSession", {
      method: "POST",
      body: JSON.stringify({ amount: 25 }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  return (
    <div>
      {clientSecret && (
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{ clientSecret }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )}
    </div>
  );
}
