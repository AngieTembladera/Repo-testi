import { NavbarProfesor } from "../components/navegador4/NavbarProfesor";
import "../styles/Profesor.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function Profesor() {
  const [nombreCurso, setNombreCurso] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [plataforma, setPlataforma] = useState('webex');
  const [descripcion, setDescripcion] = useState('');
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    fetchCursos();
  }, []);

  const fetchCursos = () => {
    axios.get('http://localhost:8000/cursos')
      .then(response => {
        setCursos(response.data);
      })
      .catch(error => {
        console.error("Error al obtener los cursos", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoCurso = {
      nombre: nombreCurso,
      fechaInicio,
      plataforma,
      descripcion
    };
    axios.post('http://localhost:8000/cursos', nuevoCurso)
      .then(response => {
        fetchCursos();
        resetForm();
      })
      .catch(error => {
        console.error("Error al publicar el curso", error);
      });
  };

  const resetForm = () => {
    setNombreCurso('');
    setFechaInicio('');
    setPlataforma('webex');
    setDescripcion('');
  };

  return (
    <div>
      <NavbarProfesor />
      {/* aquí comienza el contenido */}
      <div className="profile-container">
        <div className="profile-info">
          <img src={require("../assets/img/Vector.png")} alt="Foto de Perfil" className="profile-picture" />
          <h2>Nombre del Profesor</h2>
          <h3>Especialidad</h3>
          <div className="stars">
            ⭐⭐⭐⭐⭐ (4.5)
          </div>
          <p className="bio">Breve biografía del profesor...</p>
          <div className="statistics">
            <p>Total de Cursos: {cursos.length}</p>
            <p>Total de Estudiantes: 200</p>
            <p>Promedio de Calificaciones: 4.5</p>
          </div>
        </div>

        <div className="course-publication">
          <h2>Publicar Nuevo Curso</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="course-name">Nombre del curso:</label>
            <input 
              type="text" 
              id="course-name" 
              name="course-name"
              value={nombreCurso}
              onChange={(e) => setNombreCurso(e.target.value)}
              required 
            />

            <label htmlFor="start-date">Fecha de inicio:</label>
            <input 
              type="date" 
              id="start-date" 
              name="start-date"
              value={fechaInicio}
              onChange={(e) => setFechaInicio(e.target.value)}
              required 
            />

            <label htmlFor="communication-method">Plataforma multimedia:</label>
            <select 
              id="communication-method" 
              name="communication-method"
              value={plataforma}
              onChange={(e) => setPlataforma(e.target.value)}
              required
            >
              <option value="webex">Webex</option>
              <option value="meet">Meet</option>
              <option value="zoom">Zoom</option>
              <option value="otro">Otro</option>
            </select>

            <label htmlFor="course-description">Descripción del curso:</label>
            <textarea 
              id="course-description" 
              name="course-description"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              required 
            ></textarea>

            <button type="submit">Publicar Curso</button>
          </form>
        </div>
      </div>
      {/* aquí termina */}
    </div>
  );
}
