import { useEffect } from "react";

const PaymentSuccess = () => {
  useEffect(() => {
    // Redirigir al inicio después de 5 segundos
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div style={{ fontSize: "4rem", marginBottom: "20px" }}>🎉</div>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
        ¡Pago completado con éxito!
      </h1>
      <p style={{ fontSize: "1.2rem", color: "var(--text)" }}>
        Gracias por confiar en Estudio Web. En breve recibirás un email con los
        detalles.
      </p>
      <p style={{ fontSize: "1rem", color: "var(--text)", marginTop: "20px" }}>
        Serás redirigido en unos segundos...
      </p>
    </div>
  );
};

export default PaymentSuccess;
