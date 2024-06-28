import "../styles/CursosProfesor.css"
import { NavbarProfesor } from "../components/navegador4/NavbarProfesor"

export function CursosProfesor(){
  return(
    <div>
      <NavbarProfesor/>
      <div className="courses-list">
      <tr>
            <thead>
              <td>Acciones: editar/eliminar</td>
              <td>Nombre del curso</td>
              <td>Fecha de Inicio: dd/mm/yyyy</td>
              <td>Medio de comunicación</td>
            </thead>
          </tr>
    </div>
    </div>
  )
}