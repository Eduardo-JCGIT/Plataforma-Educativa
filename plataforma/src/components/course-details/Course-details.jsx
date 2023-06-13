import Nav from "../welcome/Nav";
import IntLaravel from "../../img/teachers/Curso-detalles/Int-Laravel2.jpg";
import Footer from "../welcome/Footer";
import check from "../../img/icon/check.png"
import clock from "../../img/icon/clock.png";
import code from "../../img/icon/code.png";
import mobile from "../../img/icon/mobile.png";
import download from "../../img/icon/download.png";
import certificado from "../../img/icon/certificado.png";
/*ICONO RESEÑA*/
import user from "../../img/icon/user.png";
import trend from "../../img/icon/trend.png";
import star from "../../img/icon/star.png";
import BusiCont from "./Busi-cont";


const CourseDetail = () =>{

    return(
        <div>
        <Nav/>
            <div className="img-course-det-cont">
            <img className="img-course-det-cont-font" src={IntLaravel} alt="" />
            <div className="texto-superpuesto">
                <h1>Introducción a Laravel</h1>
                <p>Laravel es un framework PHP (Preprocesador de Hipertexto) de código abierto que los 
                    desarrolladores utilizan para construir sitios web. Un framework PHP proporciona a 
                    los desarrolladores una biblioteca de módulos preprogramados que pueden utilizar 
                    para crear aplicaciones web rápidamente</p>
                    <br />
                    <h3>¿Que verás en este curso?</h3>
                    <br />
                <ul>
                    <li>- ¿Que es Laravel?</li>
                    <li>- Instalación de Laravel</li>
                    <li>- Conoce tu espacio de trabajo</li>
                    <li>- Frontend</li>
                    <li>- PHP & Blade</li>
                    <li>- Livewire</li>
                    <li>- Using Vue / React</li>
                    <li>- Inertia</li>
                    <li>- Starter Kits</li>
                </ul>
            </div>
            </div>

            <div className="cont-course-detail-speci">

            <div className="cour-cont-flx">
            <div className="dec-ref-bord">
            <p><img src={trend} alt={trend} className="icon-check"/>En tendencia</p>
            <p><img src={user} alt={user} className="icon-check"/> 6906 estudiantes</p>
            <p><img src={star} alt={star} className="icon-check"/>Calificación de 4.5</p>
            <p>Creado el 13/06/2023</p>
            </div>
            </div>


               {/* Para aprender */}
            <h2>¿Que aprenderás en este curso?</h2>
            <br/>
            <div className="cour-cont-flx">
                <div className="cour-colu-flx">
                <p><img src={check} alt={check} className="icon-check"/>Laravel es el framework estrella de la plataforma PHP</p>
                <br />
                <p><img src={check} alt={check} className="icon-check"/>Veremos cómo funciona su potente motor de plantillas Blade</p>
                <br />
                <p><img src={check} alt={check} className="icon-check"/>También aprenderás a crear APIs Rest con Laravel 9</p>
                </div>
                <div className="cour-colu-flx">
                <p><img src={check} alt={check} className="icon-check"/> el framework Laravel 9 por dentro</p>
                <br />
                <p><img src={check} alt={check} className="icon-check"/>Conocerás el framework Laravel 9 por dentro</p>
                <br />
                <p><img src={check} alt={check} className="icon-check"/>Abre las puertas a múltiples empleos y proyectos gracias a la popularidad de Laravel</p>
                </div>
            </div>
            <br/>


        {/* Lo que incluye el curso */}
            <h2>Este curso incluye:</h2>
            <br />
            <div className="cour-cont-flx">
                <div className="cour-colu-flx">
                <p><img src={clock} alt={clock} className="icon-check"/>17 horas de vídeo bajo demanda</p>
                <br/>
                <p><img src={download} alt={download} className="icon-check"/>4 recursos descargables</p>
                <br />
                <p><img src={code} alt={code} className="icon-check"/>6 artículos</p>
                </div>
                <div className="cour-colu-flx">
                <p><img src={certificado} alt={certificado} className="icon-check"/> Certificado de finalización</p>
                <br />
                <p><img src={mobile} alt={mobile} className="icon-check"/>Acceso en dispositivos móviles y TV</p>
                </div>
            </div>
        <br />
      
        {/* Contenido de cursos */}
        <h2>Herramientas de trabajo</h2>
        <br />
            <div className="cour-cont-flx">
            <div className="cour-colu-flx">
            <p><img src={download} alt={download} className="icon-check"/>Descarga Laravel</p>
            <button className="btn"><a href="https://laravel.com/docs/4.2" target="_blank" rel="noopener noreferrer">Vamos</a></button>
            <br/>
            <br/>
            <p><img src={download} alt={download} className="icon-check"/>Descarga Visual Studio</p>
            <button className="btn"><a href="https://code.visualstudio.com/download" target="_blank" rel="noopener noreferrer">Vamos</a></button>
            </div>
            <div className="cour-colu-flx">
            <p><img src={download} alt={download} className="icon-check"/>Documentación de Laravel</p>
            <button className="btn"><a href="https://laravel.com/docs/10.x" target="_blank" rel="noopener noreferrer">Vamos</a></button>
            <br/>
            <br/>
            <p><img src={download} alt={download} className="icon-check"/>Si gustas tomar nota te prestamos nuestras herramientas</p>
            <button className="btn"><a href="https://docs.google.com/document" target="_blank" rel="noopener noreferrer">Vamos</a></button>
            </div>
            </div>


            <div>

            </div>
            <BusiCont/>
            </div>

            <Footer/>
        </div>
    )
}

export default CourseDetail