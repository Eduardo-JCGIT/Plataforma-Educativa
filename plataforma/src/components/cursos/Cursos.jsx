import Nav from "../welcome/Nav"
import Filters from "./filter/Filters"
import CursoImgCard from "./CursoImgCard"

function Cursos() {
    
    return(
        <div>
            <Nav/>
            <div className="cont-left-cat">
            <Filters/>
            <CursoImgCard/>
            </div>
        </div>
    )
}


export default Cursos