import Headerdg from "../../img/header/Headerdg.png";
function Header() {

    return(
        <div>
        <div className="flex">
        <img src={Headerdg} alt="Headerdg" className="headerdg"/>
        <h1 className="title-header">Inicia y prepárate en tu vida profesional con <div className="drg">Next Education</div></h1>
        </div>
        </div>
    )
    
}


export default Header