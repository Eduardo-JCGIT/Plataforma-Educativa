import Nav from "../welcome/Nav";
import IntHTML from "../../img/teachers/Curso-detalles/Int-HTML.jpg";
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
import ContCourse from "./Cont-course";


const CourseDetail = () =>{

    return(
        <div>
        <Nav/>
            <div className="img-course-det-cont">
            <img className="img-course-det-cont-font" src={IntHTML} alt="" />
            <div className="texto-superpuesto">
                <h1 className="title-course-tx-col">Introducción a HTML</h1>
                <p>HTML (HyperText Markup Language) es el lenguaje de marcado estándar utilizado para 
                    crear y estructurar el contenido de las páginas web. Es el lenguaje fundamental en 
                    la construcción de sitios web y se utiliza para describir la estructura y el 
                    contenido de una página.</p>
                    <br />
                    <h2 className="title-course-tx-col">¿Que verás en este curso?</h2>
                    <br />
                <ul>
                    <li>- Web Developer Fundamentals</li>
                    <li>- HTML</li>
                    <li>- Etiquetas multimedia</li>
                    <li>- Formularios</li>
                    <li>- CSS</li>
                    <li>- Responsive Desing</li>
                    <li>- Accesibilidad</li>
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
                <p><img src={check} alt={check} className="icon-check"/>Dominar HTML</p>
                <br />
                <p><img src={check} alt={check} className="icon-check"/>Crear páginas web desde cero</p>
                <br />
                <p><img src={check} alt={check} className="icon-check"/>Aprender a usar todas las etiquetas más importantes en profundidad</p>
                <br />
                <p><img src={check} alt={check} className="icon-check"/>HTML moderno en profundidad</p>
                </div>
                <div className="cour-colu-flx">
                <p><img src={check} alt={check} className="icon-check"/>Aumentar las posibilidades laborales como desarrollador</p>
                <br />
                <p><img src={check} alt={check} className="icon-check"/>Dominar HTML5</p>
                <br />
                <p><img src={check} alt={check} className="icon-check"/>Primeros pasos en el desarrollo web</p>
                <br />
                <p><img src={check} alt={check} className="icon-check"/>¡Y mucho más!</p>
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
                <p><img src={code} alt={code} className="icon-check"/>9 Modulos</p>
                </div>
                <div className="cour-colu-flx">
                <p><img src={certificado} alt={certificado} className="icon-check"/> Certificado de finalización</p>
                <br />
                <p><img src={mobile} alt={mobile} className="icon-check"/>Acceso en dispositivos móviles y TV</p>
                </div>
            </div>
        <br />
      
      {/* Acordeon de cursos */}
        <br />
        <br />
        <h2>Contenido del curso</h2>
        <div className="cont-cour-text-mod">
            <p><img src={check} alt={check} className="icon-check"/>9 Módulos</p>
            <p><img src={check} alt={check} className="icon-check"/>25 Clases</p>
            <p><img src={check} alt={check} className="icon-check"/>17 Horas</p>
        </div>
        <div>
        <ContCourse/>
        </div>

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