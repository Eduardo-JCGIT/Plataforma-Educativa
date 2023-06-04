import Tec5 from "../../img/main/tec5.png";
import Tec7 from "../../img/main/tec7.png";


const BackgroundTec = () => {
    return (
      <div className="blue-div">
        <img className="left-image" src={Tec5} alt="Imagen izquierda" />
        <p className="center-text">
        La curiosidad y el deseo de aprender son motores poderosos para el crecimiento personal y profesional. ¡Descubre nuevas tecnologías y expande tus horizontes!
        </p>
        <img className="right-image" src={Tec7} alt="Imagen derecha" />
      </div>
    );
  }
  
  export default BackgroundTec