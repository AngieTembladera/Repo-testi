import "../styles/Departments.css";
import { Navbar3 } from "../components/navegador3/Navbar3";
import { useNavigate } from 'react-router-dom';

export function Departments() {
  const navigate = useNavigate();

  const handleDepartmentClick = (departmentName) => {
    navigate(`/cursos?department=${encodeURIComponent(departmentName)}`);
  };

  return (
    <div>
      <Navbar3 />
      <h1>¡BIENVENIDO A HELPTECSUP!</h1>
      <div className="container-fluid text-center">
        <div className="carousel slide" id="carouselExampleControls" data-bs-ride="carousel" style={{ maxWidth: '80%', margin: 'auto' }}>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="carousel-caption" onClick={() => handleDepartmentClick("Tecnología Digital")}>
                Tecnología Digital
              </div>
              <img src={require("../assets/img/software.png")} className="d-block tamaño mx-auto" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <div className="carousel-caption" onClick={() => handleDepartmentClick("Mecánica y Aviación")}>
                Mecánica y Aviación
              </div>
              <img src={require("../assets/img/maquinaria.png")} className="d-block tamaño mx-auto" alt="Slide 2" />
            </div>
            <div className="carousel-item">
              <div className="carousel-caption" onClick={() => handleDepartmentClick("Minería, Procesos Químicos y Metalúrgicos")}>
                Minería, Procesos <br /> Químicos y Metalúrgicos
              </div>
              <img src={require("../assets/img/quimica.png")} className="d-block tamaño mx-auto" alt="Slide 3" />
            </div>
            <div className="carousel-item">
              <div className="carousel-caption" onClick={() => handleDepartmentClick("Mecatrónica")}>
                Mecatrónica
              </div>
              <img src={require("../assets/img/mecatronica.png")} className="d-block tamaño mx-auto" alt="Slide 3" />
            </div>
            <div className="carousel-item">
              <div className="carousel-caption" onClick={() => handleDepartmentClick("Electricidad y Electrónica")}>
                Electricidad y Electrónica
              </div>
              <img src={require("../assets/img/electricidad.png")} className="d-block tamaño mx-auto" alt="Slide 3" />
            </div>
            <div className="carousel-item">
              <div className="carousel-caption" onClick={() => handleDepartmentClick("Gestión y Producción")}>
                Gestión y Producción
              </div>
              <img src={require("../assets/img/gestion.png")} className="d-block tamaño mx-auto" alt="Slide 3" />
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
    </div>
  );
}
