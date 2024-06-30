import { BrowserRouter,Routes, Route } from "react-router-dom"

import {Home} from "../pages/Home"
import {Login} from "../pages/Login"
import { Departments } from "../pages/Departments";
import { Register } from "../pages/Register";
import { Cursos } from "../pages/Cursos";
import { MisCursos } from "../pages/MisCursos";
import { Profesor } from "../pages/Profesor";
import { CursosProfesor } from "../pages/CursosProfesor";

export function MyRoutes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Departments/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/cursos" element={<Cursos/>}/>
        <Route path="/misCursos" element={<MisCursos/>}/>
        <Route path="/profesor" element={<Profesor/>}/>
        <Route path="/cursosprofesor" element={<CursosProfesor/>} />
    </Routes>
    </BrowserRouter>
  );
}