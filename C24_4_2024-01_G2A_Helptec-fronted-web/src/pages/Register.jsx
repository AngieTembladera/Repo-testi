import { Navbar2 } from "../components/navegador2/Navbar2";
import "../styles/Register.css";

export function Register() {
  return (
    <div>
      <Navbar2 />
      <div className="cuadrados">
        <div class="contaner">
          <div class="circle">
            <button type="submit" class="send-button">Enviar</button>
          </div>
        </div>
        <div className="form-container">
          <input type="text" className="input-field" placeholder="Ingrese su nombre" />
          <input type="password" className="input-field" placeholder="Ingrese su contraseña" />
          <input type="email" className="input-field" placeholder="Ingrese su correo" />
          <input type="tel" className="input-field" placeholder="Ingrese su telefono" />
          <input type="text" className="input-field" placeholder="Ingrese su ciclo" />
          <input type="email" className="input-field" placeholder="Ingrese su departamento" />
        </div>
        
      </div>
    </div>
  );
}
