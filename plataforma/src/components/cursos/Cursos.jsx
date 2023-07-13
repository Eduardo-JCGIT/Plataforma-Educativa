import Nav from "../welcome/Nav";
import Filters from "./filter/Filters";
import CursoTendencia from "./CursoTendencia";
import CursoDestacado from "./CursoDestacado";
import TeacherView from "./featured-teachers/TeacherOjb";

function Cursos() {
    
    return(
        <div>
            <Nav/>
            <div className="cont-left-cat">
            <Filters/>
            <h1>Cursos en tendencia</h1>
            <CursoTendencia/>
            <h1>Cursos Destacados</h1>
            <CursoDestacado/>
            <h1>Profesores destacados</h1>
            <TeacherView/>
            </div>
        </div>
    )
}


export default Cursos