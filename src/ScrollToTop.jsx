import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Restaura el scroll al inicio de la página en cada cambio de ruta.
// Sin esto, React Router conserva la posición de scroll anterior
// (por ejemplo, si vienes del footer) al navegar a otra página.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
