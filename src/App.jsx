import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import PaymentModal from "./PaymentModal";
import ReviewsSection from "./ReviewsSection";
import CookieBanner from "./components/CookieBanner";

// Importar páginas legales
import AvisoLegal from "./pages/AvisoLegal";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import PoliticaCookies from "./pages/PoliticaCookies";
import TerminosCondiciones from "./pages/TerminosCondiciones";

// ============================================
// COMPONENTE HOME (PÁGINA PRINCIPAL)
// ============================================
function Home() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPayment, setShowPayment] = useState(false);

  const planPrices = {
    basic: 200,
    professional: 350,
    premium: 500,
  };

  const plans = {
    basic: {
      name: "Plan Básico",
      price: "200€",
      description: "Página web de presentación para tu negocio",
      features: [
        "✔️ Página web de presentación",
        "✔️ Información de tu negocio",
        "✔️ Sección de contacto",
        "✔️ Formulario de contacto",
        "✔️ Diseño responsive (móvil y tablet)",
        "✔️ Enlaces a redes sociales",
        "✔️ Mapa de ubicación",
        "✔️ 1 mes de soporte gratuito",
      ],
    },
    professional: {
      name: "Plan Profesional",
      price: "350€",
      description: "Página web con tienda online para vender tus productos",
      features: [
        "✔️ Tienda online completa",
        "✔️ Catálogo de productos",
        "✔️ Carrito de compra",
        "✔️ Pasarela de pago",
        "✔️ Gestión de pedidos",
        "✔️ Panel de administración",
        "✔️ Diseño personalizado",
        "✔️ SEO avanzado",
        "✔️ 3 meses de soporte gratuito",
        "✔️ Mantenimiento mensual: 5€/mes",
      ],
    },
    premium: {
      name: "Plan Premium",
      price: "500€",
      description: "Página web completa con mantenimiento incluido",
      features: [
        "✔️ Página web completa a medida",
        "✔️ Tienda online (si la necesitas)",
        "✔️ Dominio .com GRATIS (1 año)",
        "✔️ Hosting GRATIS (1 año)",
        "✔️ Mantenimiento GRATIS (1 año)",
        "✔️ Soporte técnico 24/7",
        "✔️ Resolución de incidencias",
        "✔️ Actualizaciones de seguridad",
        "✔️ Copias de seguridad automáticas",
        "✔️ Sin necesidad de ayuda externa",
        "✔️ Yo soy tu técnico personal",
      ],
    },
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePlanSelect = (planKey, plan) => {
    setSelectedPlan({
      key: planKey,
      name: plan.name,
      price: planPrices[planKey],
    });
    setShowPayment(true);
  };

  return (
    <>
      {/* Header con navegación */}
      <header className="header">
        <div className="header-content">
          <div className="logo" onClick={() => scrollToSection("hero")}>
            <img
              src="/logo.svg"
              alt="Estudio Web Logo"
              className="logo-image"
            />
            <span className="logo-text">Estudio Web</span>
          </div>
          <nav className="nav-menu">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero");
              }}
            >
              Inicio
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("services");
              }}
            >
              Servicios
            </a>
            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("pricing");
              }}
            >
              Precios
            </a>
            <a
              href="#reviews"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("reviews");
              }}
            >
              Opiniones
            </a>
            <a
              href="#why-me"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("why-me");
              }}
            >
              Ventajas
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              Contacto
            </a>
          </nav>
          <button
            className="menu-toggle"
            onClick={() => {
              const nav = document.querySelector(".nav-menu");
              nav.classList.toggle("active");
            }}
          >
            ☰
          </button>
        </div>
      </header>

      {/* Hero Section - Presentación */}
      <section id="hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="badge">🚀 Desarrollo Web Profesional</div>
            <h1>
              Hola, soy <span className="highlight">Ayoub</span>
            </h1>
            <h2>+5 años creando experiencias digitales</h2>
            <p className="hero-description">
              Transformo tus ideas en páginas web profesionales. Desde webs de
              presentación hasta tiendas online completas.
              <br />
              <br />
              <strong>¿Sin conocimientos técnicos? No te preocupes,</strong>
              <br />
              yo me encargo de todo: diseño, desarrollo, hosting, dominio y
              mantenimiento.
              <br />
              <br />
              <span className="highlight-text">
                Tú solo preocúpate de tu negocio, yo del resto.
              </span>
            </p>
            <div className="hero-buttons">
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("services");
                }}
                className="btn-primary"
              >
                Ver servicios
              </a>
              <a
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("pricing");
                }}
                className="btn-secondary"
              >
                📋 Ver precios
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Años de experiencia</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Proyectos completados</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Satisfacción garantizada</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-placeholder">
              <span className="profile-emoji">👨‍💻</span>
            </div>
            <div className="floating-badge">
              <span>💻</span>
              <span>+5 años de experiencia</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <div className="section-header">
          <span className="section-tag">🛠️ Servicios</span>
          <h2>¿Qué puedo hacer por ti?</h2>
          <p>Soluciones web personalizadas para cada necesidad</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🌐</div>
            <h3>Webs de Presentación</h3>
            <p>
              Páginas web profesionales para mostrar tu negocio, con toda la
              información de contacto y presencia online.
            </p>
            <div className="service-price-tag">Desde 200€</div>
          </div>
          <div className="service-card">
            <div className="service-icon">🛒</div>
            <h3>Tiendas Online</h3>
            <p>
              Vende tus productos en internet con una tienda online completa,
              fácil de gestionar y segura.
            </p>
            <div className="service-price-tag">Desde 350€</div>
          </div>
          <div className="service-card">
            <div className="service-icon">🔧</div>
            <h3>Mantenimiento Web</h3>
            <p>
              Olvídate de problemas técnicos. Yo me encargo del mantenimiento,
              actualizaciones y soporte continuo.
            </p>
            <div className="service-price-tag">Desde 5€/mes</div>
          </div>
          <div className="service-card">
            <div className="service-icon">🚀</div>
            <h3>Dominio y Hosting</h3>
            <p>
              Consigue tu dominio .com y hosting incluidos en los planes
              premium. Sin complicaciones técnicas.
            </p>
            <div className="service-price-tag">¡Gratis en Plan Premium!</div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing">
        <div className="section-header">
          <span className="section-tag">💰 Precios</span>
          <h2>Elige el plan perfecto para ti</h2>
          <p>Precios claros y sin sorpresas</p>
        </div>
        <div className="pricing-grid">
          {Object.entries(plans).map(([key, plan]) => {
            const isFeatured = key === "premium";

            return (
              <div
                key={key}
                className={`pricing-card ${isFeatured ? "featured" : ""}`}
              >
                {isFeatured && (
                  <div className="popular-badge">⭐ Mejor oferta</div>
                )}
                <h3>{plan.name}</h3>
                <div className="price">
                  <span className="amount">{plan.price}</span>
                  <span className="period">/ proyecto</span>
                </div>
                <p className="plan-description">{plan.description}</p>
                <ul className="features-list">
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button
                  className="btn-plan"
                  onClick={() => handlePlanSelect(key, plan)}
                >
                  Contratar plan
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Reviews Section - COMENTARIOS */}
      <ReviewsSection />

      {/* Why choose me */}
      <section id="why-me">
        <div className="section-header">
          <span className="section-tag">💪 Ventajas</span>
          <h2>¿Por qué elegir Estudio Web?</h2>
          <p>Te ofrezco más que una página web</p>
        </div>
        <div className="advantages-grid">
          <div className="advantage-card">
            <div className="advantage-icon">🎯</div>
            <h3>Enfoque personalizado</h3>
            <p>
              Cada proyecto es único y lo adapto a tus necesidades específicas.
            </p>
          </div>
          <div className="advantage-card">
            <div className="advantage-icon">🔒</div>
            <h3>Sin preocupaciones</h3>
            <p>
              Olvídate de técnicos, hosting o dominios. Yo me encargo de todo.
            </p>
          </div>
          <div className="advantage-card">
            <div className="advantage-icon">💎</div>
            <h3>Calidad garantizada</h3>
            <p>
              Diseños modernos, responsive y optimizados para los buscadores.
            </p>
          </div>
          <div className="advantage-card">
            <div className="advantage-icon">🔄</div>
            <h3>Soporte continuo</h3>
            <p>
              Estoy disponible para resolver cualquier incidencia que pueda
              surgir.
            </p>
          </div>
          <div className="advantage-card">
            <div className="advantage-icon">📈</div>
            <h3>Resultados reales</h3>
            <p>
              Ayudo a tu negocio a crecer en el mundo digital con estrategias
              efectivas.
            </p>
          </div>
          <div className="advantage-card">
            <div className="advantage-icon">💬</div>
            <h3>Comunicación directa</h3>
            <p>
              Hablamos directamente, sin intermediarios. Siempre disponible para
              ti.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="contact-content">
          <h2>¿Listo para tener tu página web?</h2>
          <p>Hablemos y hagamos realidad tu proyecto</p>
          <div className="contact-buttons">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ayoub2004.bensaid.123@gmail.com"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              📧 Contáctame por email
            </a>
            <a
              href="https://wa.me/34612553268"
              className="btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Escríbeme por WhatsApp
            </a>
          </div>
          <div className="contact-info">
            <p>📞 Respuesta en menos de 24 horas</p>
            <p>💯 Sin compromiso, consulta gratuita</p>
            <p>📧 ayoub2004.bensaid.123@gmail.com</p>
            <p>📱 +34 612 553 268</p>
          </div>
        </div>
      </section>

      {/* Footer con enlaces a páginas legales usando Link de React Router */}
      <footer>
        <div className="footer-content">
          <p>© 2026 Estudio Web - +5 años creando páginas web profesionales</p>
          <p style={{ fontSize: "0.9rem", marginTop: "5px" }}>
            📧 ayoub2004.bensaid.123@gmail.com | 📱 +34 612 553 268
          </p>
          <div className="footer-links">
            <Link to="/aviso-legal">Aviso Legal</Link>
            <span>|</span>
            <Link to="/politica-privacidad">Política de Privacidad</Link>
            <span>|</span>
            <Link to="/politica-cookies">Política de Cookies</Link>
            <span>|</span>
            <Link to="/terminos-condiciones">Términos y Condiciones</Link>
          </div>
        </div>
      </footer>

      {/* Modal de pago */}
      {selectedPlan && (
        <PaymentModal
          isOpen={showPayment}
          amount={selectedPlan.price}
          planName={selectedPlan.name}
          onClose={() => {
            setShowPayment(false);
            setSelectedPlan(null);
          }}
        />
      )}

      {/* ============================================ */}
      {/* BANNER DE COOKIES */}
      {/* ============================================ */}
      <CookieBanner />
    </>
  );
}

// ============================================
// APP PRINCIPAL CON RUTAS
// ============================================
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aviso-legal" element={<AvisoLegal />} />
      <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
      <Route path="/politica-cookies" element={<PoliticaCookies />} />
      <Route path="/terminos-condiciones" element={<TerminosCondiciones />} />
    </Routes>
  );
}

export default App;
