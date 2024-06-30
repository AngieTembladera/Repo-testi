import "../styles/CursosProfesor.css";
import { NavbarProfesor } from "../components/navegador4/NavbarProfesor";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function CursosProfesor() {
  const [cursos, setCursos] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    fechaInicio: '',
    plataforma: 'webex',
    descripcion: ''
  });

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

  const handleEdit = (curso) => {
    setEditingCourse(curso.id);
    setFormData({
      nombre: curso.nombre,
      fechaInicio: curso.fechaInicio,
      plataforma: curso.plataforma,
      descripcion: curso.descripcion
    });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/cursos/${id}`)
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
      axios.put(`http://localhost:8000/cursos/${editingCourse}`, formData)
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
      fechaInicio: '',
      plataforma: 'webex',
      descripcion: ''
    });
  };

  return (
    <div>
      <NavbarProfesor />
      <div className="courses-list">
        <table>
          <thead>
            <tr>
              <td>Acciones: editar/eliminar</td>
              <td>Nombre del curso</td>
              <td>Fecha de Inicio: dd/mm/yyyy</td>
              <td>Plataforma multimedia</td>
              <td>Descripción del curso</td>
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
                <td>{new Date(curso.fechaInicio).toLocaleDateString()}</td>
                <td>{curso.plataforma}</td>
                <td>{curso.descripcion}</td>
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

            <label htmlFor="fechaInicio">Fecha de inicio:</label>
            <input
              type="date"
              id="fechaInicio"
              name="fechaInicio"
              value={formData.fechaInicio}
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

            <label htmlFor="descripcion">Descripción del curso:</label>
            <textarea
              id="descripcion"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Actualizar Curso</button>
            <button type="button" onClick={() => setEditingCourse(null)}>Cancelar</button>
          </form>
        </div>
      )}
    </div>
  );
}
