import React from 'react';
import '../styles/Login.css'; // Importa tus estilos personalizados
import googleLogo from '../assets/img/google.png';

export function Login() {
  return (
    <div className="login-container">
      <div className="image-section">
      <img
            src={require("../assets/img/authentication-5 1.png")}
            alt=""
          ></img>
      </div>

      <div className="form-section">
        <div className="logo">
          <img src="..../asset" alt="Caserito Logo" /> {}
          <h2>CASERITO</h2>
        </div>

        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Nombre de Usuario o Dirección de correo electrónico</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Nombre de usuario"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Contraseña"
            />
          </div>

          <div className="form-group forgot-password">
            <a href="/">¿Has olvidado tu contraseña?</a>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Iniciar Sesión
          </button>

          <div className="register-link">
            ¿Aún no eres miembro? <a href="/">Regístrate ahora</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
