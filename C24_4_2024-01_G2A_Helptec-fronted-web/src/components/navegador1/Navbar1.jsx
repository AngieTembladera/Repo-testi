import "./Navbar1.css"

export function Navbar1(){
  return (
    <div>
       <nav>
        
        <ul>
        <img src={require("../../assets/img/logo-helptec-removebg-preview.png")} alt=""></img>
        <li><button className="boton2"><a href="#Eleccion">Resgistrarse</a></button></li>
        <li><button className="boton1"><a href="#Eleccion">Iniciar Sesión</a></button></li>
        <li><button className="no">Conocenos</button></li>
        </ul>
       </nav>
    </div>
  )
}