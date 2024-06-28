import React, { useState } from 'react';
import { Navbar2 } from "../components/navegador2/Navbar2";
import "../styles/Register.css";

export function Register() {

  const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const image = URL.createObjectURL(event.target.files[0]);
            setSelectedImage(image);
        }
    };

    const triggerFileInput = () => {
        document.getElementById('fileInput').click();
    };

  return (
    <div>
      <Navbar2 />
      <div className="cuadrados">
        {/* ---------------imagen de perfil---------------- */}
        <div className="contaner">
            <div className="circle">
                {selectedImage && (
                    <img src={selectedImage} alt="Seleccionada" className="uploaded-image" />
                )}
                <button type="button" className="send-button" onClick={triggerFileInput}>
                    Foto
                </button>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: 'none' }}
                    onChange={handleImageChange}
                />
            </div>
        </div>
        {/* ---------------imagen de perfil---------------- */}
        <div className="form-container">
          <div className="input-container">
          <img src={require("../assets/img/user-solid-24.png")} alt=""></img>
          <input type="text" className="input-field" placeholder="Ingrese su nombre" />
          </div>
          <div className="input-container">
            <img src={require("../assets/img/lock-regular-24.png")} alt=""></img>
          <input type="password" className="input-field" placeholder="Ingrese su contraseña" />
          </div>
          <div className="input-container">
            <img src={require("../assets/img/gmail-logo-24.png")} alt=""></img>
          <input type="email" className="input-field" placeholder="Ingrese su correo" />
          </div>
          <div className="input-container">
            <img src={require("../assets/img/phone-regular-24.png")} alt=""></img>
          <input type="tel" className="input-field" placeholder="Ingrese su telefono" />
          </div>
          <div className="input-container">
            <img src={require("../assets/img/edit-alt-solid-24.png")} alt=""></img>
          <input type="text" className="input-field" placeholder="Ingrese su ciclo" />
          </div>
          <div className="input-container">
            <img src={require("../assets/img/school-solid-24.png")} alt=""></img>
          <input type="email" className="input-field" placeholder="Ingrese su departamento" />
          </div>
        </div>
      </div>
      <div className="boton">
        <button><a href="/profesor">Registrarse</a></button>
      </div>
    </div>
  );
}
