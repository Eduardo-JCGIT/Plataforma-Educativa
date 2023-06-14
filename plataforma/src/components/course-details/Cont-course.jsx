import Cirlce from "../../img/icon/circleArrow.png"
import Play from "../../img/icon/play.png"

const ContCourse = () =>{

    return(

        <div className="marg-cour-pad-flx">
            <div className="bar-course-back-cont">
                <div className="left-section-bar-course">
                <img src={Cirlce} alt={Cirlce} />
                <p>Introducción</p>
                </div>
                <div className="right-section-bar-course">
                <p>3 módulos</p>
                <p>15 minutos</p>
                </div>
            </div>
            <div className="displ-course-back-count">
                 <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>¿Qué es Laravel?</p>
                </div>
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Conociendo Laravel</p>
                </div>
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>PHP,Composer y base de datos</p>
                </div>
            </div>


            <div className="bar-course-back-cont">
                <div className="left-section-bar-course">
                <img src={Cirlce} alt={Cirlce} />
                <p>Componentes esenciales de Laravel</p>
                </div>
                <div className="right-section-bar-course">
                <p>5 módulos</p>
                <p>20 minutos</p>
                </div>
            </div>
            <div className="displ-course-back-count">
                 <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Rutas en Laravel, según sus preferencias</p>
                </div>
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Archivos de rutas y cómo funcionan las rutas de Laravel</p>
                </div>
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Creando múltiples tipos de rutas y acciones en Laravel</p>
                </div>
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Usando controladores en Laravel para mejorar la lógica del negocio</p>
                </div>
                <div className="left-section-bar-course sep-det-cour">
                <img src={Play} alt={Play} />
                <p>Mostrando vistas y resultados de operaciones en Laravel</p>
                </div>
            </div>
        </div>
    )
}

export default ContCourse