import "./NavbarProfesor.css"

export function NavbarProfesor(){
  return (
    <div>
       <nav>
        <ul>
        <img src={require("../../assets/img/logo-helptec-removebg-preview.png")} alt=""></img>
        <li><button ><a href="/">Home</a></button></li>
        <li><button ><a href="">Conocenos</a></button></li>
        <li><button ><a href="/profesor">Mi perfil</a></button></li>
        <li><button ><a href="/cursosProfesor">Mis cursos</a></button></li>
        </ul>
       </nav>
    </div>
  )
}