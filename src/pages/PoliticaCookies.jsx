import { Link } from "react-router-dom";

const PoliticaCookies = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <Link to="/" className="legal-back">
          ← Volver al inicio
        </Link>

        <h1>Política de Cookies</h1>
        <span className="legal-date">
          Última actualización: 20 de julio de 2026
        </span>

        <section>
          <h2>1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en tu
            dispositivo (ordenador, tableta, teléfono móvil) cuando visitas un
            sitio web. Estos archivos contienen información que se utiliza para
            recordar tus preferencias, mejorar la experiencia de navegación,
            analizar el uso del sitio y, en algunos casos, mostrar publicidad
            personalizada.
          </p>
          <p>
            Las cookies son ampliamente utilizadas en internet y permiten que
            los sitios web funcionen de manera más eficiente.
          </p>
        </section>

        <section>
          <h2>2. Tipos de cookies que utilizamos</h2>
          <p>
            En <strong>Estudio Web</strong> utilizamos diferentes tipos de
            cookies:
          </p>

          <h3>2.1 Cookies técnicas (necesarias)</h3>
          <p>
            Son cookies esenciales para el funcionamiento del sitio web y no se
            pueden desactivar. Se utilizan para:
          </p>
          <ul>
            <li>
              <strong>Gestionar la sesión del usuario:</strong> Mantener tu
              identificación mientras navegas
            </li>
            <li>
              <strong>Seguridad:</strong> Proteger el sitio web contra ataques
            </li>
            <li>
              <strong>Personalización:</strong> Recordar tus preferencias de
              navegación (idioma, región)
            </li>
          </ul>
          <ul>
            <li>
              <strong>Session ID:</strong> Para mantener la sesión del usuario
            </li>
            <li>
              <strong>CSRF Token:</strong> Para proteger los formularios
            </li>
            <li>
              <strong>Preferencias de idioma:</strong> Para recordar el idioma
              seleccionado
            </li>
          </ul>

          <h3>2.2 Cookies de análisis</h3>
          <p>
            Nos ayudan a entender cómo los usuarios interactúan con nuestro
            sitio web, permitiéndonos mejorar nuestros servicios.
          </p>
          <ul>
            <li>
              <strong>Google Analytics:</strong> Para analizar el tráfico y
              comportamiento de los usuarios. Puedes obtener más información en{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                policies.google.com/privacy
              </a>
            </li>
          </ul>

          <h3>2.3 Cookies de pago</h3>
          <p>Utilizadas por Stripe para procesar pagos de forma segura.</p>
          <ul>
            <li>
              <strong>Stripe Cookies:</strong> Para procesar transacciones de
              pago. Puedes obtener más información en{" "}
              <a
                href="https://stripe.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                stripe.com/privacy
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2>3. Finalidad de las cookies</h2>
          <ul>
            <li>
              <strong>Cookies técnicas:</strong> Garantizar el funcionamiento
              básico del sitio web
            </li>
            <li>
              <strong>Cookies de análisis:</strong> Mejorar nuestros servicios
              basándonos en el comportamiento de los usuarios
            </li>
            <li>
              <strong>Cookies de pago:</strong> Procesar pagos de forma segura
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Gestión y configuración de cookies</h2>
          <p>
            Puedes gestionar y configurar las cookies desde la configuración de
            tu navegador:
          </p>

          <h3>Google Chrome</h3>
          <ol>
            <li>
              Haz clic en el icono de los tres puntos (esquina superior derecha)
            </li>
            <li>Selecciona "Configuración"</li>
            <li>Haz clic en "Privacidad y seguridad"</li>
            <li>Haz clic en "Cookies y otros datos de sitios"</li>
            <li>Gestiona las cookies según tus preferencias</li>
          </ol>

          <h3>Mozilla Firefox</h3>
          <ol>
            <li>
              Haz clic en el icono de las tres líneas (esquina superior derecha)
            </li>
            <li>Selecciona "Opciones"</li>
            <li>Selecciona "Privacidad y seguridad"</li>
            <li>En "Cookies y datos de sitios", gestiona las cookies</li>
          </ol>

          <h3>Safari</h3>
          <ol>
            <li>Haz clic en "Safari" en la barra de menú</li>
            <li>Selecciona "Preferencias"</li>
            <li>Haz clic en "Privacidad"</li>
            <li>Gestiona las cookies y los datos de sitios web</li>
          </ol>

          <h3>Microsoft Edge</h3>
          <ol>
            <li>
              Haz clic en el icono de los tres puntos (esquina superior derecha)
            </li>
            <li>Selecciona "Configuración"</li>
            <li>Selecciona "Cookies y permisos del sitio"</li>
            <li>Haz clic en "Administrar y eliminar cookies"</li>
          </ol>

          <p>
            Ten en cuenta que si desactivas ciertas cookies, algunas
            funcionalidades del sitio web pueden no estar disponibles.
          </p>
        </section>

        <section>
          <h2>5. Cookies de terceros</h2>
          <p>
            Utilizamos servicios de terceros que pueden establecer cookies en tu
            dispositivo:
          </p>
          <ul>
            <li>
              <strong>Stripe:</strong> Para procesar pagos. Política:{" "}
              <a
                href="https://stripe.com/cookies"
                target="_blank"
                rel="noopener noreferrer"
              >
                stripe.com/cookies
              </a>
            </li>
            <li>
              <strong>Google Analytics:</strong> Para análisis de tráfico.
              Política:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                policies.google.com/privacy
              </a>
            </li>
          </ul>
          <p>
            No tenemos control sobre las cookies establecidas por estos
            terceros.
          </p>
        </section>

        <section>
          <h2>6. Consentimiento</h2>
          <p>
            Al utilizar nuestro sitio web, aceptas el uso de cookies según esta
            política. Puedes retirar tu consentimiento en cualquier momento
            desde la configuración de tu navegador.
          </p>
        </section>

        <section>
          <h2>7. Modificaciones de la Política de Cookies</h2>
          <p>
            <strong>Estudio Web</strong> se reserva el derecho de modificar esta
            Política de Cookies en cualquier momento. Las modificaciones serán
            comunicadas a través del sitio web. Te recomendamos revisar
            periódicamente esta página para estar informado de cualquier cambio.
          </p>
        </section>

        <section>
          <h2>8. Contacto</h2>
          <p>
            Si tienes preguntas sobre esta Política de Cookies, contáctanos en:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:ayoub2004.bensaid.123@gmail.com">
                ayoub2004.bensaid.123@gmail.com
              </a>
            </li>
            <li>
              <strong>Teléfono:</strong> +34 612 553 268
            </li>
          </ul>
        </section>

        <div className="legal-footer">
          <Link to="/" className="legal-back">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PoliticaCookies;
