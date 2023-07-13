import Cirlce from "../../img/icon/circleArrow.png"
import Play from "../../img/icon/play.png"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

const ContCourse = () =>{

    return(

        <div className="marg-cour-pad-flx">
            <div className="bar-course-back-cont">
                <div className="left-section-bar-course">
                <img src={Cirlce} alt={Cirlce} />
                <p>Módulo 1: Web Developer Fundamentals</p>
                </div>
                <div className="right-section-bar-course">
                <p>5 módulos</p>
                <p>15 minutos</p>
                </div>
            </div>
            <div className="displ-course-back-count">
                <Link to="/video1">
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Bienvenido</p>
                </div>
                </Link>
                <Link to="/video2">
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>¿Qué es el frontend?</p>
                </div>
                </Link>
                <Link to="/video3">
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>¿Qué es el backend?</p>
                </div>
                </Link>
                <Link to="/video4">
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>¿Qué es Full Stack?</p>
                </div>
                </Link>
                <Link to="/video5">
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Páginas Estáticas vs. Dinámicas</p>
                </div>
                </Link>
            </div>


            <div className="bar-course-back-cont">
                <div className="left-section-bar-course">
                <img src={Cirlce} alt={Cirlce} />
                <p>Módulo 2: HTML</p>
                </div>
                <div className="right-section-bar-course">
                <p>5 módulos</p>
                <p>20 minutos</p>
                </div>
            </div>
            <div className="displ-course-back-count">
                 <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>HTML: anatomía de una página web</p>
                </div>
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Index y su estructura básica: head</p>
                </div>
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Index y su estructura básica: body</p>
                </div>
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Reto: crea tu lista de compras del supermercado</p>
                </div>
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Anatomía de una etiqueta de HTML</p>
                </div>
            </div>
        

            <div className="bar-course-back-cont">
                <div className="left-section-bar-course">
                <img src={Cirlce} alt={Cirlce} />
                <p>Módulo 3: Etiquetas multimedia</p>
                </div>
                <div className="right-section-bar-course">
                <p>5 módulos</p>
                <p>20 minutos</p>
                </div>
            </div>
            <div className="displ-course-back-count">
                 <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Tipos de imágenes</p>
                </div>
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Optimización de imágenes</p>
                </div>
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Etiqueta img</p>
                </div>
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Etiqueta figure</p>
                </div>
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Etiqueta video</p>
                </div>
            </div>


            <div className="bar-course-back-cont">
                <div className="left-section-bar-course">
                <img src={Cirlce} alt={Cirlce} />
                <p>Módulo 4: Formularios</p>
                </div>
                <div className="right-section-bar-course">
                <p>5 módulos</p>
                <p>20 minutos</p>
                </div>
            </div>
            <div className="displ-course-back-count">
                 <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Etiqueta form e input</p>
                </div>
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Calendar</p>
                </div>
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Autocomplete y require</p>
                </div>
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Select</p>
                </div>
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Input type submit vs. Button tag</p>
                </div>
            </div>

            <div className="bar-course-back-cont">
                <div className="left-section-bar-course">
                <img src={Cirlce} alt={Cirlce} />
                <p>Módulo 5: CSS</p>
                </div>
                <div className="right-section-bar-course">
                <p>5 módulos</p>
                <p>20 minutos</p>
                </div>
            </div>
            <div className="displ-course-back-count">
                 <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>¿Qué es CSS?</p>
                </div>
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>¿Cómo utilizamos CSS?: por etiqueta, selector, class y por ID</p>
                </div>
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Pseudo clases y pseudo elementos</p>
                </div>
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Anatomía de una regla de CSS</p>
                </div>
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Modelo de caja Input type submit vs. Button tag</p>
                </div>
            </div>

            <div className="bar-course-back-cont">
                <div className="left-section-bar-course">
                <img src={Cirlce} alt={Cirlce} />
                <p>Módulo 6: Responsive Design</p>
                </div>
                <div className="right-section-bar-course">
                <p>5 módulos</p>
                <p>20 minutos</p>
                </div>
            </div>
            <div className="displ-course-back-count">
                 <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p> Responsive design: media queries</p>
                </div>
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Estrategias de responsive: mostly fluid</p>
                </div>
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p> Implementando mostly fluid</p>
                </div>
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p> Layout shifter CSS</p>
                </div>
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Column drop</p>
                </div>
            </div>

            <div className="bar-course-back-cont">
                <div className="left-section-bar-course">
                <img src={Cirlce} alt={Cirlce} />
                <p>Módulo 7: Accesibilidad</p>
                </div>
                <div className="right-section-bar-course">
                <p>3 módulos</p>
                <p>30 minutos</p>
                </div>
            </div>
            <div className="displ-course-back-count">
                 <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Semántica</p>
                </div>
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Textos</p>
                </div>
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Labels, alt y title</p>
                </div>
            </div>

            <div className="bar-course-back-cont">
                <div className="left-section-bar-course">
                <img src={Cirlce} alt={Cirlce} />
                <p>Módulo 8: Accesibilidad</p>
                </div>
                <div className="right-section-bar-course">
                <p>2 módulos</p>
                <p>10 minutos</p>
                </div>
            </div>
            <div className="displ-course-back-count">
                 <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p> Próximos pasos como Web Developer</p>
                </div>
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p> Bonus: tabla de etiquetas HTML</p>
                </div>
            </div>

            <div className="bar-course-back-cont">
                <div className="left-section-bar-course">
                <img src={Cirlce} alt={Cirlce} />
                <p>Módulo: Examen final</p>
                </div>
                <div className="right-section-bar-course">
                <p>7 módulos</p>
                <p>35 minutos</p>
                </div>
            </div>
            <div className="displ-course-back-count">
                 <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Estructura básica de un documento HTML</p>
                </div>
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Etiquetas HTML</p>
                </div>
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Tablas en HTML</p>
                </div>
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Formularios HTML</p>
                </div>
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Selectores CSS</p>
                </div>
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Propiedades CSS básicas</p>
                </div>
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Modelo de caja CSS</p>
                </div>
            </div>
            
        </div>
    )
}

export default ContCourse