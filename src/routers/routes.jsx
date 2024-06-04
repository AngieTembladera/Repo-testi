import { BrowserRouter,Routes, Route } from "react-router-dom"

import {Home} from "../pages/Home"
import {Login} from "../pages/Login"
import { Departamentos } from "../pages/Departamentos";
import { Register } from "../pages/Register";

export function MyRoutes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Departamentos/>}/>
        <Route path="/register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  );
}