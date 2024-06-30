import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Navbar3 } from "../components/navegador3/Navbar3";
import "../styles/Cursos.css";

export function Cursos() {
  const [courses, setCourses] = useState([]);
  const location = useLocation();
  const department = new URLSearchParams(location.search).get('department');

  useEffect(() => {
    if (department) {
      fetchCourses(department);
    }
  }, [department]);

  const fetchCourses = (department) => {
    axios.get(`http://localhost:8000/courses?department=${encodeURIComponent(department)}`)
      .then(response => {
        setCourses(response.data);
      })
      .catch(e => {
        console.error('No se encontraron cursos', e);
      });
  };

  return (
    <div>
      <Navbar3 />
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar..."
                aria-label="Buscar"
                aria-describedby="button-search"
              />
              <div className="input-group-append">
                <button className="btn" type="button" id="button-search">
                  <img src={require("../assets/img/search-alt-2-regular-24.png")} alt="Buscar" className="search-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          {courses.length > 0 ? (
            courses.map(course => (
              <div key={course.id} className="col-md-6 mb-3">
                <div className="card p-3 card-custom">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column">
                      <span>{course.professor}</span>
                      <span>Inicio: {course.startDate} - {course.endDate}</span>
                      <span>Multimedia: {course.media}</span>
                      <span>Tema: {course.topic}</span>
                      <span>Calificación:</span>
                      <div>
                        {[...Array(course.rating)].map((_, i) => (
                          <span key={i} className="text-warning">★</span>
                        ))}
                      </div>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <img src={require("../assets/img/Vector.png")} alt="Profile" className="rounded-circle profile-img" />
                      <button className="btn mt-2 btn-custom">Inscribirme</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <p>No se encontraron cursos para el departamento seleccionado.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
