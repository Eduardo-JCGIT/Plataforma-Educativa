import React from "react";
import icon from "../../../img/icon/N.png"
import cursos from "../../../img/icon/cursos.png"
import estudiantes from "../../../img/icon/estudiantes.png"
import profesores from "../../../img/icon/profesores.png"
import admin from "../../../img/icon/administradores.png"
import pagos from "../../../img/icon/pagos.png";
import perfil from "../../../img/profile/perfil.jpeg";

const NavAdmin = () =>{

    return(
        <div>
            <div className="nav-admin">
                    <div className="sid-icon-admin">
                    <img src={icon} alt={icon} />
                    <h2>Next Education</h2>
                    </div>
                <ul className="list-link-admin">
                <li>
                    <a href="1">
                    <img src={cursos} alt={cursos} />
                    <span className="link-admin"> Cursos</span>
                    </a>
                </li>
                <li>
                    <a href="1">
                    <img src={estudiantes} alt={estudiantes} />
                    <span className="link-admin">Estudiantes</span>
                    </a>
                </li>
                <li>
                    <a href="1">
                    <img src={profesores} alt={profesores} />
                    <span className="link-admin">Profesores</span>
                    </a>
                </li>
                <li>
                    <a href="1">
                    <img src={admin} alt={admin} />
                    <span className="link-admin">Administradores</span>
                    </a>
                </li>
                <li>
                    <a href="1">
                    <img src={pagos} alt={pagos} />
                    <span className="link-admin">Pagos</span>
                    </a>
                </li>
            </ul>

            <div className="profile-admin-nx">
            <div className="profile-cont">
                <img src={perfil} alt={perfil}/>
            </div>
            <div className="user-nx">
            <div className="profile-name"></div>
            <div className="rol-nx"></div>
            </div>
            </div>

            </div>
        </div>
    )
}

export default NavAdmin;