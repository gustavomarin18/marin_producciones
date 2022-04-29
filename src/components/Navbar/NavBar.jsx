import React from 'react';
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import "../styles/NavBar.css"

const navbar = () => {
  return (
  <div className='container'>
    <div className='navbar'>
        <img className='logo'  src= {logo} alt= "Main Logo"/>

<ul>
  <li>
  <Link to="#"> Sobre nosotros</Link>
  </li>
  <li>
  <Link to="#"> Eventos</Link>
  </li>
  <li>
  <Link to="#"> Fotos Escolares</Link>
  </li>
  <li>
  <Link to="#"> Contacto</Link>
  </li>
  
  




</ul>


    



</div>
<h1 className='hola animate__flash '>holaaaaa</h1>
</div>
  )
}

export default navbar