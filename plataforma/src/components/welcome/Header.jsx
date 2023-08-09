import Headerdg from "../../img/header/Headerdg3.png";
import TextChanger from "./TextChanguer";

function Header() {

    return(
        <div className="margin-hedaer-2">
        <div className="flex background-color-header">
        <img src={Headerdg} alt="Headerdg" className="headerdg"/>
        <div className="cont-tx-btn-flx">
        <h1 className="title-header">Inicia y prepárate en tu vida profesional con <div className="drg">Next Education</div></h1>
        <br/>
        <TextChanger/>
        <br/>
            <button className="btn-des-hea">Ver todos los cursos</button>
            <button className="btn-des-hea">Registrarse ahora</button>
        </div>
        </div>
        </div>
    )
    
}


export default Header