import { Navbar2 } from "../components/navegador2/Navbar2";
import { Link } from "react-router-dom";
import "../styles/Login.css";

export function Login() {
  return (
    <div>
      <Navbar2 />
      <div className="Cajas">
        <div className="photo">
          <img
            src={require("../assets/img/authentication-5 1.png")}
            alt=""
          ></img>
        </div>
        <div class="Datos">
          <form action="">
            
          <div class="fila">
            <span>Correo:</span>
            <input type="email" />
          </div>
          <div class="fila">
            <span>Contraseña:</span>
            <input type="password" />
          </div>
          <div class="fila">
            <p>Continuar con Google</p>
            <p>Olvidé mi contraseña</p>
          </div>
          <div>
            <button  class="click"><a href="/pagina3">Ingresar</a></button>
          </div>
          </form>
        </div>

        {/* --------------------------------- */}
      </div>
      <Link to={"/"}>Ir pagina 1</Link>
    </div>
  );
}
