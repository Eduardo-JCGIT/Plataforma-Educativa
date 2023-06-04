import Tec3 from "../../img/main/tec3.png";   
import Tec4 from "../../img/main/tec4.png";   
import AWS from "../../img/carrusel/tec-bussines/AWS.png";
import Cisco from "../../img/carrusel/tec-bussines/Cisco.png";
import GH from "../../img/carrusel/tec-bussines/GitHub.png";
import IBM from "../../img/carrusel/tec-bussines/IMB.png";
import MC from "../../img/carrusel/tec-bussines/Microsoft.png";
import OR from "../../img/carrusel/tec-bussines/Oracle.png";
import Unity from "../../img/carrusel/tec-bussines/Unity.png";
import ML from "../../img/carrusel/tec-bussines/MicrosoftL.png";
import LK from "../../img/carrusel/tec-bussines/Likendin.png";
import GoogleA from "../../img/carrusel/tec-bussines/GoogleA.png";
import Vid from "./Vid";
import Cards from "./Card-teachers";
import BackgroundTec from "./Bk-as";

function Main() {
    
    return(
    <div>

        <div className="sec-col-bk">
        <div className="flex">
        <div className="sec1">
        <h3>Aprender nuevas tecnologías</h3>
        <br/>
        <br />
        <p>Existen numerosos recursos disponibles para aprender nuevas tecnologías, desde cursos en línea hasta tutoriales y comunidades en línea. Aprovecha estos recursos y encuentra el enfoque de aprendizaje que mejor se adapte a ti</p>
        </div>
        <div className="sec2">
        <img src={Tec3} alt="Tec2"/>
        </div>

        </div>

        <div className="flex">
        <div className="sec2">
        <img src={Tec4} alt="Tec2"/>
        </div>
        <div className="sec1">
        <h3>Explora proyectos prácticos</h3>
        <br/>
        <br />
        <p>No temas hacer preguntas y buscar la ayuda de la comunidad. La colaboración y el intercambio de conocimientos son fundamentales en el aprendizaje de nuevas tecnologías</p>
        </div>
        </div>
        </div>

        <div>
          <h1 className="text-center-title">Empresas asosiados con nosotros</h1>
        </div>
        <div>
        <div className="slider">
        <div className="slide-track">
        <div className="slide"><img src={AWS} alt="AWS"/>
        </div>
        <div className="slide"><img src={Cisco} alt="Cisco"/>
        </div>
        <div className="slide"><img src={GH} alt="GH"/>
        </div>
        <div className="slide"><img src={IBM} alt="IBM"/>
        </div>
        <div className="slide"><img src={MC} alt="MC"/>
        </div>
        <div className="slide"><img src={OR} alt="OR"/>
        </div>
        <div className="slide"><img src={Unity} alt="Unity"/>
        </div>
        <div className="slide"><img src={ML} alt="MC"/>
        </div>
        <div className="slide"><img src={LK} alt="OR"/>
        </div>
        <div className="slide"><img src={GoogleA} alt="Unity"/>
        </div>
        <div className="slide"><img src={AWS} alt="AWS"/>
        </div>
        <div className="slide"><img src={Cisco} alt="Cisco"/>
        </div>
        </div>
        </div>
      </div>

      <div>
    <Vid/>
      </div>

      <div>
      <h1 className="text-center-title">Porfesores destacados</h1>
      <Cards/>
      </div>
      
      <div>
        <BackgroundTec/>
      </div>
    </div>

    )   
}

export default Main