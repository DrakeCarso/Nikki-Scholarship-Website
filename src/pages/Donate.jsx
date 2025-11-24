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
  const [loading, setLoading] = useState(false);

  const startCheckout = async () => {
    if (!amount || isNaN(amount) || amount < 1) {
      alert("Please enter a valid donation amount.");
      return;
    }

    setLoading(true);

    const res = await fetch("/.netlify/functions/createCheckoutSession", {
      method: "POST",
      body: JSON.stringify({ amount: Number(amount) }),
    });

    const data = await res.json();
    setClientSecret(data.clientSecret);

    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", textAlign: "center" }}>
      <h2>Enter Donation Amount</h2>

      {/* Donation input form */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="number"
          value={amount}
          placeholder="25"
          onChange={(e) => setAmount(e.target.value)}
          style={{
            padding: "10px",
            width: "120px",
            marginRight: "10px",
            fontSize: "16px",
          }}
        />
        <button onClick={startCheckout} disabled={loading}>
          {loading ? "Loading…" : "Continue"}
        </button>
      </div>

      {/* Stripe checkout appears AFTER Continue is pressed */}
      {clientSecret && (
        <div style={{ marginTop: "30px" }}>
          <EmbeddedCheckoutProvider stripe={stripePromise} options={{ clientSecret }}>
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        </div>
      )}
    </div>
  );
}
