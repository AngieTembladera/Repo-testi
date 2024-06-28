import "../styles/MisCursos.css"
import { Navbar3 } from "../components/navegador3/Navbar3"

export function MisCursos(){
  return(
    <div>
      <Navbar3 />
      <div className="courses-list">
        <h2>Mis Cursos </h2>
        <div className="course-item">
        <thead>
          <tr>
            <td>Acciones: editar/eliminar</td>
            <td>Tema</td>
            <td>Estado</td>
            <td>Profesor</td>
            <td>Departamento</td>
            <td>Fecha.Inscripción</td>
          </tr>
        </thead>
        </div>
    </div>
    </div>
  )
}