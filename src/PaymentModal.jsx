import { useState } from "react";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// ⚠️ USA TU CLAVE PUBLICABLE REAL
const stripePromise = loadStripe(
  "pk_live_51QNI8iJorWYrmdsBXkxHHD7ib9sy7SkErxiob8I8pSYIV7v8NR5AIPSJliFCaZnhnrzMslMhehZXqjp36VVRa1qX00aS8XHikP",
);

const CheckoutForm = ({ amount, planName, onClose }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    setError("");

    const { error: submitError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.origin + "/payment-success",
      },
    });

    if (submitError) {
      setError(submitError.message);
      setLoading(false);
    }
  };

  return (
    <div className="payment-modal-overlay" onClick={onClose}>
      <div className="payment-modal" onClick={(e) => e.stopPropagation()}>
        <button className="payment-modal-close" onClick={onClose}>
          ×
        </button>
        <h2>Contratar {planName}</h2>
        <p className="payment-amount">Total: {amount}€</p>

        <form onSubmit={handleSubmit} className="payment-form">
          <PaymentElement />
          {error && <p className="payment-error">{error}</p>}
          <button
            type="submit"
            className="btn-plan-pay"
            disabled={!stripe || loading}
          >
            {loading ? "Procesando..." : `Pagar ${amount}€`}
          </button>
        </form>
      </div>
    </div>
  );
};

const PaymentModal = ({ isOpen, amount, planName, onClose }) => {
  const [clientSecret, setClientSecret] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchClientSecret = async () => {
    setLoading(true);
    setError("");

    try {
      console.log("📤 Enviando petición al backend...");
      const response = await fetch(
        "https://estudio-web-backend.onrender.com/api/create-payment-intent",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: amount,
            currency: "eur",
          }),
        },
      );

      const data = await response.json();
      console.log("📥 Respuesta del backend:", data);

      if (response.ok && data.clientSecret) {
        setClientSecret(data.clientSecret);
      } else {
        setError(data.error || "Error al iniciar el pago");
      }
    } catch (err) {
      console.error("❌ Error:", err);
      setError(
        "Error de conexión con el servidor. Asegúrate de que el backend está corriendo en http://localhost:3000",
      );
    } finally {
      setLoading(false);
    }
  };

  if (isOpen && !clientSecret && !loading) {
    fetchClientSecret();
  }

  if (!isOpen) return null;

  if (loading) {
    return (
      <div className="payment-modal-overlay">
        <div className="payment-modal">
          <div className="payment-loading">Cargando formulario de pago...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="payment-modal-overlay" onClick={onClose}>
        <div className="payment-modal" onClick={(e) => e.stopPropagation()}>
          <button className="payment-modal-close" onClick={onClose}>
            ×
          </button>
          <div className="payment-error-box">
            <p>⚠️ {error}</p>
            <button
              className="btn-plan-pay"
              onClick={() => {
                setClientSecret(null);
                setError("");
                fetchClientSecret();
              }}
            >
              Intentar de nuevo
            </button>
            <button className="btn-modal-cancel" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!clientSecret) return null;

  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance: {
          theme: "stripe",
          variables: {
            colorPrimary: "#aa3bff",
            colorBackground: "#ffffff",
            colorText: "#08060d",
            colorDanger: "#ff4444",
            fontFamily: "system-ui, sans-serif",
            borderRadius: "8px",
          },
        },
      }}
    >
      <CheckoutForm amount={amount} planName={planName} onClose={onClose} />
    </Elements>
  );
};

export default PaymentModal;
