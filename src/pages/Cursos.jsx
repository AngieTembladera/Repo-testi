import { Navbar3 } from "../components/navegador3/Navbar3";
import "../styles/Cursos.css"

export function Cursos(){
  return(
    <div>
      <Navbar3 />
      <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-8 " >
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control "
                            placeholder="Buscar..."
                            aria-label="Buscar"
                            aria-describedby="button-search"
                        />
                        <div className="input-group-append">
                            <button className="btn" type="button" id="button-search">
                                <img src={require("../assets/img/search-alt-2-regular-24.png")} alt="Buscar" className="search-icon"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* EJEMPLOOOOOOOOOOO de como se vería una tarjeta  */}
        <div className="container mt-3">
  <div className="row">
    <div className="col-md-6">
      <div className="card p-3 card-custom">
        <div className="d-flex justify-content-between ">
          <div className="d-flex flex-column">
            <span >Gustavo Ramirez</span>
            <span>Inicio: 12/05/24 - 31/05/24</span>
            <span>Multimedia: Meet</span>
            <span>Tema: Base de datos</span>
            <span>Calificación:</span>
            <div>
              <span className="text-warning"></span>
              <span className="text-warning"></span>
              <span className="text-warning"></span>
              <span className="text-warning"></span>
              <span className="text-warning"></span>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <img src={require("../assets/img/Vector.png")} alt="Profile" className="rounded-circle profile-img"/>
            <button className="btn mt-2 btn-custom">Inscribirme</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        {/* aquí termina el ejemplo */}
    </div>
  )
}