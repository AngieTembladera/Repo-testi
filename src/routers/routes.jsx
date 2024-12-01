import { BrowserRouter,Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home";
import {Registro} from "../pages/Registro";
import {Login} from "../pages/Login"
import { RegistrarRestaurant } from "../pages/RegistrarRestaurant";

export function MyRoutes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/registro" element={<Registro/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/RestaurantLogin" element={<RegistrarRestaurant/>}/>
    </Routes>
    </BrowserRouter>
  );
}