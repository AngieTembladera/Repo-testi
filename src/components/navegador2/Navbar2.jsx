import "./Navbar2.css"

export function Navbar2(){
  return (
    <div>
       <nav>
        <ul>
        <img src={require("../../assets/img/logo-helptec-removebg-preview.png")} alt=""></img>
        <li><button ><a >Home</a></button></li>
        <li><button ><a >Conocenos</a></button></li>
        </ul>
       </nav>
    </div>
  )
}