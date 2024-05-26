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
        <Route path="/pagina2" element={<Login/>}/>
        <Route path="/pagina3" element={<Departamentos/>}/>
        <Route path="/pagina4" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  );
}