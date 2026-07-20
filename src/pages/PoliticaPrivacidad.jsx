import { Link } from "react-router-dom";

const PoliticaPrivacidad = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <Link to="/" className="legal-back">
          ← Volver al inicio
        </Link>

        <h1>Política de Privacidad</h1>
        <span className="legal-date">
          Última actualización: 20 de julio de 2026
        </span>

        <section>
          <h2>1. Introducción</h2>
          <p>
            En <strong>Estudio Web</strong> nos tomamos muy en serio la
            privacidad de nuestros usuarios. Esta Política de Privacidad explica
            cómo recopilamos, utilizamos, almacenamos y protegemos la
            información personal que nos proporcionas a través de nuestro sitio
            web y servicios.
          </p>
          <p>
            Esta política se aplica a todos los datos personales que nos
            facilitas al visitar nuestro sitio web, contactar con nosotros,
            contratar nuestros servicios o interactuar con nosotros de cualquier
            otra forma.
          </p>
        </section>

        <section>
          <h2>2. Responsable del tratamiento</h2>
          <p>
            De acuerdo con el Reglamento General de Protección de Datos (RGPD) y
            la Ley Orgánica de Protección de Datos (LOPDGDD), te informamos que
            el responsable del tratamiento de tus datos personales es:
          </p>
          <ul>
            <li>
              <strong>Titular:</strong> Ayoub Bensaid
            </li>
            <li>
              <strong>Nombre comercial:</strong> Estudio Web
            </li>
            <li>
              <strong>Email:</strong> ayoub2004.bensaid.123@gmail.com
            </li>
            <li>
              <strong>Teléfono:</strong> +34 612 553 268
            </li>
          </ul>
        </section>

        <section>
          <h2>3. Datos personales que recopilamos</h2>
          <p>
            En <strong>Estudio Web</strong> recopilamos los siguientes datos
            personales, dependiendo de la interacción que tengas con nosotros:
          </p>

          <h3>3.1 Datos de contacto</h3>
          <ul>
            <li>
              <strong>Nombre completo:</strong> Para identificarte y dirigirnos
              a ti de manera personalizada
            </li>
            <li>
              <strong>Dirección de correo electrónico:</strong> Para enviarte
              comunicaciones, confirmaciones y responder a tus consultas
            </li>
            <li>
              <strong>Número de teléfono:</strong> Para contactarte en caso de
              necesidad
            </li>
          </ul>

          <h3>3.2 Datos de pago</h3>
          <ul>
            <li>
              <strong>Información de pago:</strong> Cuando contratas nuestros
              servicios, los datos de pago son procesados directamente por
              Stripe. No almacenamos datos de tarjetas de crédito o débito en
              nuestros servidores
            </li>
            <li>
              <strong>Datos de facturación:</strong> Dirección de facturación,
              NIF/CIF, razón social (si corresponde)
            </li>
          </ul>

          <h3>3.3 Datos de navegación</h3>
          <ul>
            <li>
              <strong>Dirección IP:</strong> Para analizar tendencias y
              administrar el sitio
            </li>
            <li>
              <strong>Tipo de navegador:</strong> Para optimizar la
              visualización del sitio web
            </li>
            <li>
              <strong>Páginas visitadas:</strong> Para analizar el
              comportamiento de los usuarios y mejorar nuestros servicios
            </li>
            <li>
              <strong>Cookies:</strong> Para personalizar tu experiencia
              (consulta nuestra{" "}
              <Link to="/politica-cookies">Política de Cookies</Link>)
            </li>
          </ul>

          <h3>3.4 Datos de comentarios y reseñas</h3>
          <ul>
            <li>
              <strong>Nombre y email:</strong> Cuando dejas un comentario o
              reseña
            </li>
            <li>
              <strong>Contenido del comentario:</strong> El texto que escribes
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Finalidad del tratamiento</h2>
          <p>
            Utilizamos tus datos personales para las siguientes finalidades:
          </p>

          <h3>4.1 Gestión de servicios contratados</h3>
          <ul>
            <li>Procesar y gestionar la contratación de nuestros servicios</li>
            <li>Gestionar los pagos realizados a través de Stripe</li>
            <li>
              Mantener comunicación con los clientes durante el desarrollo del
              proyecto
            </li>
            <li>
              Realizar el seguimiento y control de los servicios prestados
            </li>
          </ul>

          <h3>4.2 Comunicaciones y atención al cliente</h3>
          <ul>
            <li>
              Responder a consultas, solicitudes de información y reclamaciones
            </li>
            <li>
              Enviar comunicaciones relacionadas con los servicios contratados
            </li>
            <li>Gestionar el soporte técnico y resolver incidencias</li>
          </ul>

          <h3>4.3 Mejora de nuestros servicios</h3>
          <ul>
            <li>
              Analizar el comportamiento de los usuarios en nuestro sitio web
            </li>
            <li>
              Evaluar la satisfacción de los clientes a través de reseñas y
              comentarios
            </li>
            <li>
              Mejorar la experiencia de usuario y la calidad de nuestros
              servicios
            </li>
          </ul>

          <h3>4.4 Cumplimiento de obligaciones legales</h3>
          <ul>
            <li>Dar cumplimiento a las obligaciones fiscales y contables</li>
            <li>
              Atender requerimientos de autoridades judiciales o administrativas
            </li>
          </ul>
        </section>

        <section>
          <h2>5. Base legal del tratamiento</h2>
          <p>
            La base legal para el tratamiento de tus datos personales se
            fundamenta en:
          </p>
          <ul>
            <li>
              <strong>Ejecución de un contrato:</strong> Cuando contratas
              nuestros servicios
            </li>
            <li>
              <strong>Consentimiento explícito:</strong> Cuando aceptas nuestra
              política de privacidad y cookies
            </li>
            <li>
              <strong>Interés legítimo:</strong> Para mejorar nuestros servicios
              y la experiencia de usuario
            </li>
            <li>
              <strong>Cumplimiento de obligaciones legales:</strong> Para dar
              cumplimiento a las obligaciones fiscales, contables y legales
            </li>
          </ul>
        </section>

        <section>
          <h2>6. Plazo de conservación de los datos</h2>
          <p>
            Los datos personales se conservarán durante el tiempo necesario para
            cumplir con las finalidades para las que fueron recogidos y para
            cumplir con las obligaciones legales que nos sean aplicables.
          </p>
          <ul>
            <li>
              <strong>Datos de clientes:</strong> Se conservarán durante la
              relación contractual y hasta 6 años según el Código de Comercio
            </li>
            <li>
              <strong>Datos de contacto:</strong> Se conservarán mientras se
              mantenga la relación con el usuario
            </li>
            <li>
              <strong>Datos de navegación:</strong> Se conservarán durante el
              tiempo necesario para analizar el comportamiento de los usuarios
            </li>
            <li>
              <strong>Datos de comentarios:</strong> Se conservarán
              indefinidamente a menos que el usuario solicite su eliminación
            </li>
          </ul>
        </section>

        <section>
          <h2>7. Cesión de datos a terceros</h2>
          <p>
            Tus datos personales no serán cedidos a terceros, excepto en los
            siguientes casos:
          </p>
          <ul>
            <li>
              <strong>Stripe:</strong> Para procesar los pagos. Puedes consultar
              su política en{" "}
              <a
                href="https://stripe.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                stripe.com/privacy
              </a>
            </li>
            <li>
              <strong>Proveedores de hosting:</strong> Para alojar el sitio web
            </li>
            <li>
              <strong>Obligación legal:</strong> Cuando sea requerido por ley
            </li>
          </ul>
          <p>
            No realizamos transferencias internacionales de datos fuera del
            Espacio Económico Europeo.
          </p>
        </section>

        <section>
          <h2>8. Tus derechos</h2>
          <p>
            Como titular de los datos personales, tienes los siguientes
            derechos:
          </p>
          <ul>
            <li>
              <strong>Acceso:</strong> Conocer qué datos personales tenemos
              sobre ti
            </li>
            <li>
              <strong>Rectificación:</strong> Corregir datos inexactos o
              incompletos
            </li>
            <li>
              <strong>Supresión:</strong> Solicitar la eliminación de tus datos
            </li>
            <li>
              <strong>Oposición:</strong> Oponerte al tratamiento de tus datos
            </li>
            <li>
              <strong>Limitación:</strong> Solicitar la limitación del
              tratamiento
            </li>
            <li>
              <strong>Portabilidad:</strong> Recibir tus datos en un formato
              estructurado
            </li>
          </ul>
          <p>
            Para ejercer estos derechos, envía un correo a{" "}
            <a href="mailto:ayoub2004.bensaid.123@gmail.com">
              ayoub2004.bensaid.123@gmail.com
            </a>{" "}
            indicando el derecho que deseas ejercer y adjuntando copia de tu
            documento de identidad.
          </p>
          <p>
            También tienes derecho a presentar una reclamación ante la Agencia
            Española de Protección de Datos (AEPD) en{" "}
            <a
              href="https://www.aepd.es"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.aepd.es
            </a>
            .
          </p>
        </section>

        <section>
          <h2>9. Seguridad de los datos</h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas
            adecuadas para proteger tus datos personales contra accesos no
            autorizados, pérdidas, destrucción o alteración.
          </p>
          <p>Entre las medidas de seguridad implementadas se incluyen:</p>
          <ul>
            <li>Uso de conexiones HTTPS para la transmisión segura de datos</li>
            <li>
              Almacenamiento de datos en servidores seguros con control de
              acceso
            </li>
            <li>Copias de seguridad periódicas de los datos almacenados</li>
          </ul>
        </section>

        <section>
          <h2>10. Modificaciones de la Política de Privacidad</h2>
          <p>
            <strong>Estudio Web</strong> se reserva el derecho de modificar esta
            Política de Privacidad en cualquier momento. Las modificaciones
            serán comunicadas a través del sitio web, publicando la nueva
            versión con la fecha de actualización correspondiente. Te
            recomendamos revisar periódicamente esta página para estar informado
            de cualquier cambio.
          </p>
        </section>

        <section>
          <h2>11. Contacto</h2>
          <p>
            Si tienes preguntas sobre esta Política de Privacidad, puedes
            contactarnos a través de:
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

export default PoliticaPrivacidad;
