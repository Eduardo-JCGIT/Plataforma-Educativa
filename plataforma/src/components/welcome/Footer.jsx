import React from 'react';
import LogoNE from '../../img/icon/N.png';
import ST from '../../img/icon/DownloadST.png'

const Footer = () => {
  return (
    <footer >
        <div className="footer">
      <div className="footer-left">
        <img src={LogoNE} alt="Logo" className="footer-logo" />
        <p>"Descubre tu potencial tecnológico, aprende con Next Education"</p>
        <img className='icon-download' src={ST} alt="" />
      </div>
      <div className="footer-right">
        <div className="footer-column">
            <h2>Secciones</h2>
          <ul>
            <a href="2"><li>Inicio</li></a>
            <a href="2"><li>Cursos</li></a>
            <a href="3"><li>Destacados</li></a>
            <a href="4"><li>Especializaciones</li></a>
          </ul>
        </div>
        <div className="footer-column">
            <h2>Cursos</h2>
          <ul>
            <a href="1"><li>Programación</li></a>
            <a href="2"><li>Modelos y Negocios</li></a>
            <a href="3"><li>Lenguas Internacionales</li></a>
            <a href="4"><li>Matemáticas</li></a>
            <a href="5"><li>Lógica</li></a>
          </ul>
        </div>
        <div className="footer-column">
            <h2>Ayuda</h2>
          <ul>
          <a href="1"><li>Soporte</li></a>
          <a href="2"><li>Sobre nosotros</li></a>
          <a href="1"><li>Cuenta de estudiante</li></a>
          <a href="2"><li>Sobre nosotros</li></a>
          </ul>
          <p></p>
        </div>
      </div>
            </div>
      <p className="footer-text">
        Todos las tecnologías presentadas son gratuitas para uso estudiantil y practicas, para uso comercial y laboral tienen costo, todos lo cursos cuentan con derechos de autor a sus respectivo titulares como Next Education Company.
      </p>
    </footer>
  );
}

export default Footer;
