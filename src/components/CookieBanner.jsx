import { useState } from "react";
import "./CookieBanner.css";

const CookieBanner = () => {
  // ✅ Calculamos el estado inicial sin necesidad de useEffect
  const [showBanner, setShowBanner] = useState(() => {
    const consent = localStorage.getItem("cookieConsent");
    return consent === null; // Mostrar solo si no hay consentimiento guardado
  });

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner-overlay">
      <div className="cookie-banner">
        <div className="cookie-banner-content">
          <div className="cookie-icon">🍪</div>
          <div className="cookie-text">
            <h3>Uso de cookies</h3>
            <p>
              Utilizamos cookies propias y de terceros para mejorar tu
              experiencia de navegación, analizar el tráfico y personalizar el
              contenido. Puedes obtener más información en nuestra{" "}
              <a href="/politica-cookies">Política de Cookies</a>.
            </p>
          </div>
          <div className="cookie-buttons">
            <button
              className="cookie-btn cookie-btn-reject"
              onClick={rejectCookies}
            >
              Rechazar
            </button>
            <button
              className="cookie-btn cookie-btn-accept"
              onClick={acceptCookies}
            >
              Aceptar todas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
