import React from "react";
import LogoNX from '../../img/icon/N.png';


function Login() {

    return(
        <div>
            <div className="cen-logo-from">
            <img src={LogoNX} alt="NX" />
            <h2>¡Hola mucho gusto! Crea tu cuenta y empieza con Next Education</h2>
            </div>

            <div className="from-cent">
            <form action="" >
                <p>Nombre</p>
               <input type="text" placeholder="Jesús Eduardo"/> 
               <br />
               <p>Apellidos</p>
               <input type="text" placeholder="Jiménez Cruz" />
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

export default Login