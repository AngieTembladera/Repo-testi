import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Registro.css";
import { Navbar1 } from "../components/navegador1/Navbar1";
import { Footer } from "../components/navegador1/Footer/Footer";

export function Registro() {
  return (
    <div className="container-fluid main-container">
      <Navbar1></Navbar1>
      <div className="row content-container">
        {/* Formulario de Registro */}
        <div className="col-md-6 form-section">
          <h2>Atrae y gestiona nuevos clientes a tu restaurante</h2>
          <p>
            ¿Deseas aumentar los ingresos de tu restaurante y optimizar tu actividad? Comienza a recibir nuevas reservas de comensales locales y de todas partes del mundo.
          </p>
          <p>¡Tu restaurante forma parte de un grupo o quieres registrar a varios restaurantes al mismo tiempo? Haz clic aquí.</p>
          
          <form className="register-form">
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" className="form-control" id="nombre" placeholder="Nombre" />
            </div>
            <div className="form-group">
              <label htmlFor="apellido">Apellido</label>
              <input type="text" className="form-control" id="apellido" placeholder="Apellido" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <p>¿Ya tienes una cuenta en Caserito? <a href="/">Inicia sesión</a></p>
            </div>
            <button type="submit" className="btn btn-primary">Regístrate</button>
          </form>
        </div>

        {/* Información del lado derecho */}
        <div className="col-md-6 info-section verde">
          <h2>¿Qué puedes esperar de Caserito?</h2>
          <ul className="info-list">
            <li><i className="icon-placeholder"></i>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
            <li><i className="icon-placeholder"></i>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
            <li><i className="icon-placeholder"></i>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
            <li><i className="icon-placeholder"></i>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}
