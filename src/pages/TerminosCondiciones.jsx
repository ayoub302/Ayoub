import { Link } from "react-router-dom";

const TerminosCondiciones = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <Link to="/" className="legal-back">
          ← Volver al inicio
        </Link>

        <h1>Términos y Condiciones</h1>
        <span className="legal-date">
          Última actualización: 20 de julio de 2026
        </span>

        <section>
          <h2>1. Aceptación de los términos</h2>
          <p>
            Al utilizar el sitio web de <strong>Estudio Web</strong> y contratar
            nuestros servicios, aceptas los presentes Términos y Condiciones. Si
            no estás de acuerdo, por favor, no utilices nuestro sitio web ni
            nuestros servicios.
          </p>
          <p>
            Estos Términos y Condiciones constituyen un acuerdo legal entre tú y{" "}
            <strong>Estudio Web</strong>. Al acceder y utilizar nuestro sitio
            web, aceptas cumplir con todas las disposiciones aquí establecidas.
          </p>
        </section>

        <section>
          <h2>2. Descripción de los servicios</h2>
          <p>
            <strong>Estudio Web</strong> ofrece los siguientes servicios de
            desarrollo web:
          </p>

          <h3>Plan Básico (200€)</h3>
          <ul>
            <li>Página web de presentación de 1 a 3 páginas</li>
            <li>Diseño responsive adaptable a móviles y tablets</li>
            <li>Formulario de contacto básico</li>
            <li>Enlaces a redes sociales</li>
            <li>SEO básico</li>
            <li>1 mes de soporte gratuito</li>
          </ul>

          <h3>Plan Profesional (350€)</h3>
          <ul>
            <li>Página web de 5 a 10 páginas</li>
            <li>Tienda online completa con catálogo de productos</li>
            <li>Carrito de compra y pasarela de pago (Stripe)</li>
            <li>Gestión de pedidos y panel de administración</li>
            <li>Diseño personalizado</li>
            <li>SEO avanzado</li>
            <li>3 meses de soporte gratuito</li>
            <li>Mantenimiento mensual: 5€/mes</li>
          </ul>

          <h3>Plan Premium (500€)</h3>
          <ul>
            <li>Página web completa y personalizada a medida</li>
            <li>Tienda online integrada (opcional)</li>
            <li>Dominio .com GRATIS (1 año)</li>
            <li>Hosting GRATIS (1 año)</li>
            <li>Mantenimiento GRATIS (1 año)</li>
            <li>Soporte técnico 24/7</li>
            <li>Resolución de incidencias</li>
            <li>Copias de seguridad automáticas</li>
          </ul>
        </section>

        <section>
          <h2>3. Proceso de contratación</h2>
          <ol>
            <li>
              <strong>Selección del plan:</strong> El cliente selecciona el plan
              que mejor se adapte a sus necesidades
            </li>
            <li>
              <strong>Realización del pago:</strong> El cliente realiza el pago
              a través de Stripe
            </li>
            <li>
              <strong>Confirmación:</strong> El cliente recibe un correo
              electrónico de confirmación
            </li>
            <li>
              <strong>Inicio del desarrollo:</strong>{" "}
              <strong>Estudio Web</strong> inicia el desarrollo del proyecto
            </li>
            <li>
              <strong>Entrega:</strong> El proyecto se entrega en el plazo
              establecido
            </li>
          </ol>
        </section>

        <section>
          <h2>4. Precios y pagos</h2>
          <ul>
            <li>
              Todos los precios están expresados en euros (€) e incluyen el IVA
            </li>
            <li>
              Los pagos se procesan a través de Stripe (tarjetas de crédito y
              débito)
            </li>
            <li>
              El pago se realiza en un único pago al momento de la contratación
            </li>
            <li>Una vez realizado el pago, el pedido es firme y vinculante</li>
          </ul>
        </section>

        <section>
          <h2>5. Plazos de entrega</h2>
          <ul>
            <li>
              <strong>Plan Básico:</strong> 5 a 7 días hábiles
            </li>
            <li>
              <strong>Plan Profesional:</strong> 10 a 14 días hábiles
            </li>
            <li>
              <strong>Plan Premium:</strong> 14 a 21 días hábiles
            </li>
          </ul>
          <p>
            Los plazos pueden variar en función de la complejidad del proyecto y
            de la disponibilidad de los materiales proporcionados por el
            cliente.
          </p>
        </section>

        <section>
          <h2>6. Garantía y soporte</h2>
          <ul>
            <li>
              Todos los servicios incluyen una garantía de funcionamiento
              durante el período de soporte especificado
            </li>
            <li>
              Todos los planes incluyen soporte técnico para resolver
              incidencias
            </li>
            <li>
              Las incidencias se resolverán en un plazo máximo de 48 horas
            </li>
            <li>
              Se realizarán actualizaciones de seguridad de forma periódica
            </li>
          </ul>
        </section>

        <section>
          <h2>7. Propiedad intelectual</h2>
          <p>
            El código fuente, el diseño y todos los elementos creados por{" "}
            <strong>Estudio Web</strong> pasan a ser propiedad del cliente una
            vez finalizado el proyecto y realizado el pago completo.
          </p>
          <p>
            El cliente garantiza que los textos, imágenes y contenido
            proporcionado no infringe derechos de propiedad intelectual de
            terceros.
          </p>
        </section>

        <section>
          <h2>8. Cancelación y reembolsos</h2>
          <ul>
            <li>
              El cliente puede solicitar la cancelación dentro de los primeros 7
              días
            </li>
            <li>
              Se aplicará una penalización del 20% por gastos administrativos
            </li>
            <li>No se aplicarán reembolsos una vez iniciado el desarrollo</li>
          </ul>
        </section>

        <section>
          <h2>9. Responsabilidad</h2>
          <p>
            <strong>Estudio Web</strong> no se hace responsable por:
          </p>
          <ul>
            <li>Pérdidas indirectas o daños consecuentes</li>
            <li>Interrupciones del servicio por causas ajenas</li>
            <li>Contenido proporcionado por el cliente</li>
          </ul>
        </section>

        <section>
          <h2>10. Modificaciones</h2>
          <p>
            <strong>Estudio Web</strong> se reserva el derecho de modificar
            estos términos en cualquier momento. Las modificaciones serán
            comunicadas a través del sitio web. El uso continuado del sitio web
            después de la publicación de modificaciones constituirá tu
            aceptación de dichos cambios.
          </p>
        </section>

        <section>
          <h2>11. Ley aplicable</h2>
          <p>
            Estos términos se rigen por la legislación española. Cualquier
            disputa será resuelta en los Juzgados y Tribunales de la ciudad de
            residencia del usuario.
          </p>
        </section>

        <section>
          <h2>12. Contacto</h2>
          <p>Para cualquier consulta sobre estos términos, contáctanos en:</p>
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

export default TerminosCondiciones;
