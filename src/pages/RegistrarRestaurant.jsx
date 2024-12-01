import React from 'react';
import '../styles/RegistrarRestaurant.css' // Importamos el archivo CSS personalizado
import { Navbar1 } from '../components/navegador1/Navbar1';
import { Footer } from '../components/navegador1/Footer/Footer';

export function RegistrarRestaurant() {
  return (
    <div className="container-fluid main-container">
    <Navbar1></Navbar1>
    <div className="row content-container">
      {/* Formulario de Registro */}
      <div className="col-md-6 form-section px-5">
        <h2>Tu restaurante</h2>
        <p>Comparte más detalles sobre tu restaurante. Esta información ayudará a nuestros expertos a evaluar tus necesidades y comprender tus problemáticas.</p>
        
        <form className="register-form px-5">
          <div className="form-group ">
            <label htmlFor="nombre">Nombre del restaurante</label>
            <input type="text" className="form-control" id="nombre" placeholder="Nombre del restaurante" />
          </div>
          <div className="form-group">
            <label htmlFor="calle">Calle</label>
            <input type="text" className="form-control" id="calle" placeholder="Calle, Código postal, ciudad" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Telefono</label>
            <input type="number" className="form-control" id="email" placeholder="Email" />
          </div>
          <button type="submit" className="btn btn-primary">Regístrate</button>
        </form>
      </div>

      {/* Información del lado derecho */}
      <div className="col-md-6 info-section px-5 verde">
        <h2 className='fw-bold'>Genera felicidad con <br /> experiencias <br /> gastronómicas <br /> inolvidables</h2>
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
