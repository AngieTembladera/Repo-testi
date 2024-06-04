import { Navbar2 } from "../components/navegador2/Navbar2";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { useState } from "react";
import axios from 'axios';

export function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const login = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.post('http://localhost:8080/login', {
                email: email,
                password: password
        });
        const token = response.data.token;
        setError('');
        localStorage.setItem('authToken', token);
        navigate('/home');  
    } catch (error) {
      setError('Email o Password inválido');
    }
  };

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
        <div className="Datos">
          <form onSubmit={login}>
            <div className="fila">
              <span>Correo:</span>
              <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="fila">
              <span>Contraseña:</span>
              <input type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="fila">
              <p>Continuar con Google</p>
              <p>Olvidé mi contraseña</p>
            </div>
            <p style={{color: 'red'}}>{error}</p>
            <div>
              <button type="submit" className="click">Ingresar</button>
            </div>
          </form>
        </div>

        {/* --------------------------------- */}
      </div>
      <Link to={"/"}>Ir pagina 1</Link>
    </div>
  );
}
