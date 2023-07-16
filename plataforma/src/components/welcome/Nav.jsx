//Pendiente de ruta
import React, { useState } from 'react';
import iconNE from '../../img/icon/N.png'
import DW from '../../img/icon/1DW.png';
import RD from '../../img/icon/2RD.png';
import DB from '../../img/icon/3DB.png';
import SI from '../../img/icon/4SI.png';
import BD from '../../img/icon/BD5.png';
import CE from '../../img/icon/CE6.png';
import DM from '../../img/icon/DM7.png';
import SV from '../../img/icon/SV8.png';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className={`menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="left-section">
          <div className="logo">
            <Link to="/">
            <img src={iconNE} alt={iconNE} />
            </Link>
          </div>


          
          <ul className='ul-nav'>
          <ul>
        <li className="dropdown">
          <a href="2">Explorar</a>
          <ul className="dropdown-menu">
            <h2 className='title-drop-nav'>Categorías</h2>
            <li><img src={DW} alt="" /><a href="2">Desarrollo web</a></li>
            <li><img src={RD} alt="" /><a href="2">Arquitectura de Redes</a></li>
            <li><img src={DB} alt="" /><a href="2">Administración de base de datos</a></li>
            <li><img src={SI} alt="" /><a href="2">Protección de sistemas</a></li>
            <li><img src={BD} alt="" /><a href="2">Analisis de big data</a></li>
            <li><img src={CE} alt="" /><a href="2">Comercio electrónicos</a></li>
            <li><img src={DM} alt="" /><a href="2">Desarrollo de apps moviles</a></li>
            <li><img src={SV} alt="" /><a href="2">Implementación de servidores</a></li>
          </ul>
        </li>
          </ul>
            <li>
            <Link to="/cursos/Cursos">
            Cursos
            </Link>

              </li>
            <li><a href="3">Profesores</a></li>
          </ul>


          <div className="search">
            <input type="text" placeholder="Busca un nuevo curso..." />
            <button type="button">Buscar</button>
          </div>
        </div>
        <div className="right-section">
          <div className="user-actions">
            <Link to="/profile/Profile">
            <button type="button">Iniciar sesión</button>
            </Link>
            <button type="button">Registrarse</button>
          </div>
        </div>
        <div className="toggle-menu" onClick={toggleMenu}></div>
      </nav>
    </header>
  );
};

export default Nav;
