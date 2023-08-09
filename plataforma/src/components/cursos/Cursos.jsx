import Nav from "../welcome/Nav";
import Filters from "./filter/Filters";
/*import CursoTendencia from "./CursoTendencia";
import CursoDestacado from "./CursoDestacado";*/
import CourseCat from "./CourseCat";
import TeacherView from "./featured-teachers/TeacherOjb";
import Footer from "./../welcome/Footer";

function Cursos() {
    
    return(
        <div>
            <Nav/>
            <div className="container-course-alive">
            <div className="cont-left-cat">
            <Filters/>
            <h1>Cursos en tendencia</h1>
            <CourseCat/>
            <br />
            <h1>Profesores destacados</h1>
            <br />
            <TeacherView/>
            <br />
            <h1>Cursos actualizados
            </h1>
            <br />
            <CourseCat/>
            </div>
            </div>
            <Footer/>
        </div>
    )
}


export default Cursos