import { useState } from "react";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_live_51SWJ7mPwKZNm4GlbtFUJI2867EmIkuMZn4IGatQ7f3XBScUhURJ8dj0mEpGmQby6829g8YcT1Ys53RRiSWu0yzVg00vDJrDdCv"
);

export default function Donate() {
  const [amount, setAmount] = useState("");
  const [clientSecret, setClientSecret] = useState(null);

  const startCheckout = () => {
    fetch("/.netlify/functions/createCheckoutSession", {
      method: "POST",
      body: JSON.stringify({ amount: Number(amount) }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  };

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto" }}>
      {!clientSecret && (
        <>
          <h2>Enter Donation Amount</h2>
          <input
            type="number"
            placeholder="25"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ padding: "10px", width: "200px", fontSize: "16px" }}
          />
          <button onClick={startCheckout} style={{ marginLeft: "10px" }}>
            Continue
          </button>
        </>
      )}

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
