import Nav from "../welcome/Nav"
import Filters from "./filter/Filters"
import CursoTendencia from "./CursoTendencia"
import CursoDestacado from "./CursoDestacado"
import TeacherView from "./featured-teachers/TeacherOjb"
import Footer from "../welcome/Footer"

function Cursos() {
    
    return(
        <div>
            <Nav/>
            <div className="container-gen">
            <Filters/>
            <h1 className="title-name-curso">Cursos en tendencias</h1>
            <CursoTendencia/>
            <h1 className="title-name-curso">Cursos destacados</h1>
            <CursoDestacado/>
            <h1 className="title-name-curso">Profesores mejores calificados</h1>
            <TeacherView/>
            </div>
            <Footer/>
        </div>
    )
}


export default Cursos