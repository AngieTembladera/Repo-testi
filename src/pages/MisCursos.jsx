import "../styles/MisCursos.css";
import { Navbar3 } from "../components/navegador3/Navbar3";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function MisCursos() {
  const [cursos, setCursos] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    estado: '',
    profesor: '',
    plataforma: 'webex',
    fechaInscripcion: ''
  });

  useEffect(() => {
    fetchCursos();
  }, []);

  const fetchCursos = () => {
    axios.get('http://localhost:8000/mis-cursos')
      .then(response => {
        setCursos(response.data);
      })
      .catch(error => {
        console.error("Error al obtener los cursos", error);
      });
  };

  const handleEdit = (curso) => {
    setEditingCourse(curso.id);
    setFormData({
      nombre: curso.nombre,
      estado: curso.estado,
      profesor: curso.profesor,
      plataforma: curso.plataforma,
      fechaInscripcion: curso.fechaInscripcion
    });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/mis-cursos/${id}`)
      .then(response => {
        fetchCursos();
      })
      .catch(error => {
        console.error("Error al eliminar el curso", error);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingCourse !== null) {
      axios.put(`http://localhost:8000/mis-cursos/${editingCourse}`, formData)
        .then(response => {
          fetchCursos();
          setEditingCourse(null);
          resetForm();
        })
        .catch(error => {
          console.error("Error al actualizar el curso", error);
        });
    }
  };

  const resetForm = () => {
    setFormData({
      nombre: '',
      estado: '',
      profesor: '',
      plataforma: 'webex',
      fechaInscripcion: ''
    });
  };

  return (
    <div>
      <Navbar3 />
      <div className="courses-list">
        <h2>Mis Cursos</h2>
        <table>
          <thead>
            <tr>
              <td>Acciones: editar/eliminar</td>
              <td>Nombre del curso</td>
              <td>Estado</td>
              <td>Profesor</td>
              <td>Plataforma multimedia</td>
              <td>Fecha.Inscripción</td>
            </tr>
          </thead>
          <tbody>
            {cursos.map(curso => (
              <tr key={curso.id}>
                <td>
                  <button onClick={() => handleEdit(curso)}>Editar</button>
                  <button onClick={() => handleDelete(curso.id)}>Eliminar</button>
                </td>
                <td>{curso.nombre}</td>
                <td>{curso.estado}</td>
                <td>{curso.profesor}</td>
                <td>{curso.plataforma}</td>
                <td>{new Date(curso.fechaInscripcion).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingCourse !== null && (
        <div className="course-edit-form">
          <h2>Editar Curso</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre del curso:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />

            <label htmlFor="estado">Estado:</label>
            <input
              type="text"
              id="estado"
              name="estado"
              value={formData.estado}
              onChange={handleChange}
              required
            />

            <label htmlFor="profesor">Profesor:</label>
            <input
              type="text"
              id="profesor"
              name="profesor"
              value={formData.profesor}
              onChange={handleChange}
              required
            />

            <label htmlFor="plataforma">Plataforma multimedia:</label>
            <select
              id="plataforma"
              name="plataforma"
              value={formData.plataforma}
              onChange={handleChange}
              required
            >
              <option value="webex">Webex</option>
              <option value="meet">Meet</option>
              <option value="zoom">Zoom</option>
              <option value="otro">Otro</option>
            </select>

            <label htmlFor="fechaInscripcion">Fecha de Inscripción:</label>
            <input
              type="date"
              id="fechaInscripcion"
              name="fechaInscripcion"
              value={formData.fechaInscripcion}
              onChange={handleChange}
              required
            />

            <button type="submit">Actualizar Curso</button>
            <button type="button" onClick={() => setEditingCourse(null)}>Cancelar</button>
          </form>
        </div>
      )}
    </div>
  );
}
