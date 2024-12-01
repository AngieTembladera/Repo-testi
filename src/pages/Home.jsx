import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/Home.css'; // Archivo CSS para estilos personalizados
import { Footer } from "../components/navegador1/Footer/Footer";
import { Navbar1 } from "../components/navegador1/Navbar1";

export function Home() {
  return (
    <div className="main-container">
      <Navbar1></Navbar1>
      {/* Sección de búsqueda */}
      <div className="hero-section py-5" style={{ backgroundColor: "#cce8d8" }}>
        <div className="container text-center">
          <h1>Descubre el mejor Restaurante de tu zona</h1>
          <div className="input-group mt-4 w-50 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar restaurante"
              aria-label="Buscar restaurante"
            />
            <button className="btn btn-success" type="button">
              Búsqueda
            </button>
          </div>
        </div>
      </div>

      {/* Sección de destacados */}
      <div className="container mt-5">
        <div className="box mb-4 p-4">
          <h2>Seleccionados para ti</h2>
          <div className="row mt-4">
            {/* Cards de destacados */}
            <div className="col-6 col-md-3 mb-4">
              <div className="card h-100"></div>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <div className="card h-100"></div>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <div className="card h-100"></div>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <div className="card h-100"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de restaurantes populares */}
      <div className="container mt-5">
        <div className="box mb-4 p-4">
          <h2>Restaurantes populares</h2>
          <div className="row mt-4">
            {/* Cards de populares */}
            <div className="col-6 col-md-4 mb-4">
              <div className="card h-100"></div>
            </div>
            <div className="col-6 col-md-4 mb-4">
              <div className="card h-100"></div>
            </div>
            <div className="col-6 col-md-4 mb-4">
              <div className="card h-100"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de acerca de */}
      <div className="container mt-5">
        <div className="box mb-4 p-4">
          <h2>Acerca de Caserita</h2>
          <p className="mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
      </div>

      {/* Sección de unirse */}
      <div className="join-section text-center py-5 mt-5" style={{ backgroundColor: "#cce8d8" }}>
        
          <h2>ÚNETE A CASERITA</h2>
          <p>COME, AHORRA Y DISFRUTA</p>
          <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-outline-success me-3">Opción 1</button>
            <button className="btn btn-outline-success">Opción 2</button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
