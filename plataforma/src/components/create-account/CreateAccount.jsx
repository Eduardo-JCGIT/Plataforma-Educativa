import React from "react";
import LogoNX from '../../img/icon/N.png';


function Account() {

    return(
        <div>
            <div className="cen-logo-from">
            <img src={LogoNX} alt="NX" />
            <h2>Inicia sesión con Next Education</h2>
            </div>

            <div className="from-cent">
            <form action="" >
               <p>Correo Electrónico</p>
               <input type="text" placeholder="ejemplo32@gmail.com"/>
               <p>Contraseña</p>
               <input type="password"/>
               <br/>
               <div className="cent-row">
               <button>Crear</button>
               <a href="1">Olvidé mi contraseña</a>
               </div>
            </form>
            </div>

        </div>
    )
}

export default Account