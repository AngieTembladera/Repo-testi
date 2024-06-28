import "./Navbar2.css"

export function Navbar2(){
  return (
    <div>
       <nav>
        <ul>
        <img src={require("../../assets/img/logo-helptec-removebg-preview.png")} alt=""></img>
        <li><button ><a href="/">Home</a></button></li>
        <li><button ><a >Conocenos</a></button></li>
        </ul>
       </nav>
    </div>
  )
}