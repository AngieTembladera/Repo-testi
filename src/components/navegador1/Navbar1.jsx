import "bootstrap/dist/css/bootstrap.min.css";

export function Navbar1({ onModeChange }) {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#f8f5f5" }}>
      <div className="container-fluid">
        {/* Logo y Título */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={require("../../assets/img/LOGO (1).png")} alt="" />
        </a>

        {/* Links y Botón */}
        <div className="d-flex align-items-center">
          <a
            href="#registrar"
            className="nav-link"
            style={{ color: "#000", marginRight: "15px" }}
          >
            Registrar mi restaurante
          </a>
          <button className="btn" style={{ backgroundColor: "#cce8d8" }}>
            Inicia sesión
          </button>
        </div>
      </div>
    </nav>
  );
}

