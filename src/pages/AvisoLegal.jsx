import { Link } from "react-router-dom";

const AvisoLegal = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <Link to="/" className="legal-back">
          ← Volver al inicio
        </Link>

        <h1>Aviso Legal</h1>
        <span className="legal-date">
          Última actualización: 20 de julio de 2026
        </span>

        <section>
          <h2>1. Identificación del titular</h2>
          <p>
            En cumplimiento con el deber de información establecido en la Ley
            34/2002, de 11 de julio, de Servicios de la Sociedad de la
            Información y de Comercio Electrónico (LSSI-CE), se facilitan los
            siguientes datos del prestador de servicios:
          </p>
          <ul>
            <li>
              <strong>Nombre:</strong> Ayoub Bensaid
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
          <h2>2. Objeto del sitio web</h2>
          <p>
            El sitio web <strong>Estudio Web</strong> tiene como objeto
            principal la prestación de servicios de diseño, desarrollo y
            mantenimiento de páginas web, así como la comercialización de planes
            de creación de sitios web y tiendas online. A través de este portal,
            los usuarios pueden conocer los servicios ofrecidos, contratar
            planes de desarrollo web, contactar con el titular y acceder a
            información legal y de privacidad.
          </p>
        </section>

        <section>
          <h2>3. Condiciones de uso</h2>
          <p>
            El acceso y uso de este sitio web atribuye la condición de usuario,
            lo que implica la aceptación plena y sin reservas de todas las
            disposiciones incluidas en este Aviso Legal. El usuario se obliga a
            hacer un uso diligente del sitio web y de los servicios accesibles
            desde el mismo, con sujeción a la legalidad vigente, a la moral y a
            las buenas costumbres.
          </p>
          <p>
            Queda prohibida la utilización del sitio web con fines ilícitos o
            que puedan lesionar los derechos de terceros. El usuario será
            responsable de los daños y perjuicios que pudiera ocasionar por el
            incumplimiento de estas obligaciones.
          </p>
        </section>

        <section>
          <h2>4. Propiedad intelectual e industrial</h2>
          <p>
            Todos los contenidos del sitio web, incluyendo textos, imágenes,
            gráficos, logotipos, iconos, software, código fuente, bases de datos
            y diseños, son propiedad de <strong>Estudio Web</strong> o de
            terceros que han autorizado su uso, y están protegidos por las leyes
            de propiedad intelectual e industrial.
          </p>
          <p>
            Queda terminantemente prohibida la reproducción, distribución,
            comunicación pública, transformación o cualquier otra forma de
            explotación de los contenidos sin la autorización expresa del
            titular.
          </p>
          <p>
            El usuario podrá visualizar y descargar los contenidos
            exclusivamente para su uso personal y privado, siempre que respete
            los derechos de propiedad intelectual e industrial.
          </p>
        </section>

        <section>
          <h2>5. Protección de datos personales</h2>
          <p>
            En cumplimiento del Reglamento General de Protección de Datos (RGPD)
            y de la Ley Orgánica de Protección de Datos (LOPDGDD), se informa a
            los usuarios de que los datos personales facilitados a través de
            este sitio web serán tratados de acuerdo con lo establecido en
            nuestra{" "}
            <Link to="/politica-privacidad">Política de Privacidad</Link>.
          </p>
          <p>
            El usuario podrá ejercer sus derechos de acceso, rectificación,
            supresión, oposición, limitación del tratamiento y portabilidad
            mediante comunicación escrita dirigida a{" "}
            <a href="mailto:ayoub2004.bensaid.123@gmail.com">
              ayoub2004.bensaid.123@gmail.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2>6. Enlaces externos</h2>
          <p>
            Este sitio web puede contener enlaces a otros sitios web de
            terceros. <strong>Estudio Web</strong> no asume ninguna
            responsabilidad sobre el contenido, las políticas de privacidad o
            las prácticas de dichos sitios externos. El usuario accede a dichos
            enlaces bajo su propia responsabilidad.
          </p>
        </section>

        <section>
          <h2>7. Limitación de responsabilidad</h2>
          <p>
            <strong>Estudio Web</strong> no garantiza la disponibilidad y
            continuidad del funcionamiento del sitio web, ni que el mismo esté
            libre de errores o virus. En consecuencia, no se responsabiliza de
            los daños y perjuicios que puedan derivarse de la falta de
            disponibilidad o de la existencia de errores o virus.
          </p>
          <p>
            La información contenida en este sitio web tiene carácter meramente
            informativo, por lo que <strong>Estudio Web</strong> no asume
            responsabilidad alguna por las decisiones tomadas por los usuarios
            basadas en dicha información.
          </p>
        </section>

        <section>
          <h2>8. Legislación aplicable y jurisdicción</h2>
          <p>
            Las presentes condiciones se rigen por la legislación española. Para
            la resolución de cualquier controversia que pudiera surgir del
            acceso, uso o contenido de este sitio web, las partes se someten a
            los Juzgados y Tribunales de la ciudad de residencia del usuario. En
            caso de que el usuario resida fuera de España, las partes se someten
            a los Juzgados y Tribunales de Madrid.
          </p>
        </section>

        <section>
          <h2>9. Contacto</h2>
          <p>
            Para cualquier consulta, solicitud de información o comunicación
            relacionada con este sitio web, el usuario puede dirigirse a:
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
            <li>
              <strong>Horario de atención:</strong> Lunes a viernes de 9:00 a
              18:00 horas
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

export default AvisoLegal;
