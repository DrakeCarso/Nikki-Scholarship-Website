import { useState, useEffect } from "react";
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_live_51SWJ7mPwKZNm4GlbtFUJI2867EmIkuMZn4IGatQ7f3XBScUhURJ8dj0mEpGmQby6829g8YcT1Ys53RRiSWu0yzVg00vDJrDdCv");

export default function Donate() {
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    fetch("/.netlify/functions/createCheckoutSession", {
      method: "POST",
      body: JSON.stringify({ amount: 25 }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("CLIENT SECRET:", data);
        setClientSecret(data.clientSecret);
      })
      .catch((err) => console.error("FETCH ERROR:", err));
  }, []);

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto" }}>
      {!clientSecret && <p>Loading donation checkout…</p>}

      {clientSecret && (
        <EmbeddedCheckoutProvider stripe={stripePromise} options={{ clientSecret }}>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )}
    </div>
  );
}