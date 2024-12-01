import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css"; // Archivo CSS para estilos personalizados

export function Footer() {
  return (
    <footer className="footer py-4" style={{ backgroundColor: "#83b09B" }}>
      <div className="container">
        <div className="row">
          {/* Columna 1 */}
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">¿Quiénes somos?</a></li>
              <li><a href="/" className="footer-link">Información de contacto</a></li>
              <li><a href="/" className="footer-link">¿Tienes restaurante?</a></li>
              <li><a href="/" className="footer-link">Preguntas frecuentes</a></li>
              <li><a href="/" className="footer-link">Trabaja con nosotros</a></li>
            </ul>
          </div>
          {/* Columna 2 */}
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Legal</a></li>
              <li><a href="/" className="footer-link">Términos y Condiciones (Usuarios)</a></li>
              <li><a href="/" className="footer-link">Términos y Condiciones (Negocios)</a></li>
              <li><a href="/" className="footer-link">Política de privacidad</a></li>
            </ul>
          </div>
          {/* Columna 3: Redes sociales */}
          <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon me-3"
            >
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>
        {/* Línea inferior */}
        <div className="footer-line mt-4" style={{ borderTop: "1px solid #000" }}></div>
      </div>
    </footer>
  );
}
