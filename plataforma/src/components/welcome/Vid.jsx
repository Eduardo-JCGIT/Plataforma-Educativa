

function Vid() {
    
    return(
    <div className="video-container">
      <video autoPlay loop muted className="video-bg">
        <source src={require("../../vid/VID-FOND-NE.mp4")} type="video/mp4" />
      </video>
      <div className="content-tx">
        <h1>Entra al mundo de la educación</h1>
        <div className="vid-btn-mar">
        <a href="1" className="btn">Más cursos</a>
        </div>
      </div>
    </div>
    )
}


export default Vid