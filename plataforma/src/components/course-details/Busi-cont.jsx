import Git from "../../img/carrusel/tec-bussines/GitHub.png";
import GoogleA from "../../img/carrusel/tec-bussines/GoogleA.png";
import Cisco from "../../img/carrusel/tec-bussines/Cisco.png";
import Microsoft from "../../img/carrusel/tec-bussines/Microsoft.png";

const BusiCont = () =>{


    return(
        <div>
            <div className="tex-cent-busi-cont">
            <h2>Empresas trabajando con nosotros</h2>
            </div>
        <div className="icon-busi-cont1">
            <img className="icon-busi-cont2" src={Git} alt={Git} />
            <img className="icon-busi-cont2" src={GoogleA} alt={GoogleA} />
            <img className="icon-busi-cont2" src={Cisco} alt={Cisco} />
            <img className="icon-busi-cont2" src={Microsoft} alt={Microsoft} />
        </div>
        </div>
    )
}

export default BusiCont;
