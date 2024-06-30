import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar1 } from "../components/navegador1/Navbar1";
import "../styles/Home.css";

export function Home() {
  // esta es la logica de los botones para que al presionarlos te envie primero a las opciones pero que el boton ya se dirija a lo que eligiste ya sea iniciar sesión o registrarse
  const [mode, setMode] = useState(null);
  const navigate = useNavigate();
  const buttonSectionRef = useRef(null);

  const handleModeChange = (selectedMode) => {
    setMode(selectedMode);
    buttonSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleRoleSelection = (role) => {
    if (mode === 'login') {
      navigate('/login');
    } else if (mode === 'register') {
      navigate('/register');
    }
  };

  return (
    <div>
      <Navbar1 onModeChange={handleModeChange} />
      {/* Aquí va el contenido */}
      <div className="container-fluid p-0">
        {/* Banner Section */}
        <div className="banner-section">
          <img src={require("../assets/img/tecsup.png")} className="img-fluid" alt="Banner" />
          <div className="banner-text">
            <h1>Bienvenido a nuestra plataforma de aprendizaje por alumnos para alumnos</h1>
          </div>
        </div>

        {/* Tecsup Section */}
        <div className="tecsup-section text-center my-5">
          <p>Comparte y reafirma las bases de tu conocimiento adquirido, demostrando tus habilidades.</p>
          <img src={require("../assets/img/image 21.png")} alt="Tecsup Logo" className="tecsup-logo" />
        </div>

        {/* Options Section */}
        <div className="options-section text-center my-5" ref={buttonSectionRef}>
          {mode ? (
            <div className="row">
              <div className="col-md-6">
                <button className="btn btn-danger btn-lg" onClick={() => handleRoleSelection('student')}>
                  ALUMNO
                </button>
              </div>
              <div className="col-md-6">
                <button className="btn btn-primary btn-lg" onClick={() => handleRoleSelection('teacher')}>
                  PROFESOR
                </button>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-md-6">
                <button className="btn btn-danger btn-lg" onClick={() => handleModeChange('register')}>
                  ESTUDIANTES
                </button>
              </div>
              <div className="col-md-6">
                <button className="btn btn-primary btn-lg" onClick={() => handleModeChange('register')}>
                  PROFESORES
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Aquí termina */}
    </div>
  );
}
