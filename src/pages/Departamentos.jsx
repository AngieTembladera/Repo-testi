import "../styles/Departamentos.css"
import { Navbar3 } from "../components/navegador3/Navbar3";

export function Departamentos() {
  return (
    <div>
      <Navbar3/>
      <h1>¡BIENVENIDO A HELPTECSUP!</h1>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <a href="/cursos">Tecnología Digital</a>
          <img src={require("../assets/img/imagenSoftware.jpg")} className="d-block tamaño " alt="Slide 1" />
        </div>
        <div className="carousel-item">
        <a href="/cursos">Mecánica y Aviación</a>
          <img src={require("../assets/img/maquinariaPesada.png")} className="d-block tamaño" alt="Slide 2" />
        </div>
        <div className="carousel-item">
        <a href="/cursos">Minería, Procesos Químicos y Metalúrgicos</a>
          <img src={require("../assets/img/procesosQuimicos.png")} className="d-block tamaño" alt="Slide 3" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    
    </div>
  );
}