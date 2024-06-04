import { Navbar1 } from "../components/navegador1/Navbar1";
import "../styles/Home.css";
export function Home() {
  return (
    <div>
      <Navbar1 />
      <div className="centro">
        <div className="uno">
          <p>
            Bienvenido a nuestra plataforma de aprendizaje por alumnos para
            alumnos
          </p>
        </div >
        <div className="one-dos">
          <p>Comparte y reafirma las bases de tu conocimiento adquirido, demostrando tus habilidades</p>
          <img src={require("../assets/img/image 21.png")} alt=""></img>
        </div>
      </div>
      <div id="Eleccion" className="picture">
        <p className="student"><a href="/login">Alumno</a></p>
        <p className="teacher"><a href="/login">Profesor</a></p>
        </div>
    </div>
  );
}