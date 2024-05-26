import "./Navbar3.css"

export function Navbar3(){
  return (
    <div>
       <nav>
        <ul>
        <img src={require("../../assets/img/logo-helptec-removebg-preview.png")} alt=""></img>
        <li><button ><a href="">Home</a></button></li>
        <li><button ><a href="">Conocenos</a></button></li>
        <li><button ><a href="">Cursos</a></button></li>
        <li><button ><a href="">Mis cursos</a></button></li>
        </ul>
       </nav>
    </div>
  )
}