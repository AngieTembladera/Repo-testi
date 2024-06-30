import "./Navbar1.css";

export function Navbar1({ onModeChange }) {
  return (
    <div>
      <nav>
        <ul>
          <img src={require("../../assets/img/logo-helptec-removebg-preview.png")} alt="logo" />
          <li>
            <button className="boton2" onClick={() => onModeChange('register')}>
              Registrarse
            </button>
          </li>
          <li>
            <button className="boton1" onClick={() => onModeChange('login')}>
              Iniciar Sesión
            </button>
          </li>
          <li>
            <button className="no">Conócenos</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
