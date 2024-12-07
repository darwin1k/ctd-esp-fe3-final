import React from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context';
import { useContext } from 'react';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  }

  return (
    <nav className= {`navbar ${state.theme}`}>
      {/* Links para la navegación */}
      <div>
        <img src="/DH.ico" alt="DH-logo" className="navbar-logo" />
      </div>
      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/favs">Destacados</Link>
      </div>
      
      {/* Botón para cambiar tema (lo implementaremos después) */}
      <button onClick={toggleTheme} className="theme-button">
        {state.theme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  )
}

export default Navbar
