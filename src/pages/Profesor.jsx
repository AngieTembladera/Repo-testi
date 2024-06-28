import { NavbarProfesor } from "../components/navegador4/NavbarProfesor"
import  "../styles/Profesor.css";
import React, { useState } from 'react';

export function Profesor(){
  
    const [profileImage, setProfileImage] = useState(null);
  
    const handleImageChange = (e) => {
      if (e.target.files && e.target.files[0]) {
        let img = e.target.files[0];
        setProfileImage(URL.createObjectURL(img));
      }
    };
  return(
    <div>
      <NavbarProfesor/>
     {/* aquí comienza el contenido */}
     <div className="profile-container">
        <div className="profile-info">
            <img src={require("../assets/img/Vector.png")} alt="Foto de Perfil" className="profile-picture"/>
            <h2>Nombre del Profesor</h2>
            <h3>Especialidad</h3>
            <div className="stars">
                ⭐⭐⭐⭐⭐ (4.5)
            </div>
            <p className="bio">Breve biografía del profesor...</p>
            <div className="statistics">
                <p>Total de Cursos: 10</p>
                <p>Total de Estudiantes: 200</p>
                <p>Promedio de Calificaciones: 4.5</p>
            </div>
        </div>

        <div className="course-publication">
            <h2>Publicar Nuevo Curso</h2>
            <form>
                <label for="course-name">Nombre del curso:</label>
                <input type="text" id="course-name" name="course-name"/>

                <label for="start-date">Fecha de inicio:</label>
                <input type="date" id="start-date" name="start-date"/>

                <label for="communication-method">Medio de comunicación:</label>
                <select id="communication-method" name="communication-method">
                    <option value="presencial">Presencial</option>
                    <option value="online">Online</option>
                    <option value="mixto">Mixto</option>
                </select>

                <label for="course-description">Descripción del curso:</label>
                <textarea id="course-description" name="course-description"></textarea>

                <button type="submit">Publicar Curso</button>
            </form>
        </div>
    </div>
     {/* aquí termina */}
    </div>
  )
}