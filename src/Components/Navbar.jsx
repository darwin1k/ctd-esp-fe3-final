import React from 'react'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      {/* Links para la navegación */}
      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/favs">Destacados</Link>
      </div>
      
      {/* Botón para cambiar tema (lo implementaremos después) */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar