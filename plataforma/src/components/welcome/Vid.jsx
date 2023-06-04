

function Vid() {
    
    return(
    <div className="video-container">
      <video autoPlay loop muted className="video-bg">
        <source src={require("../../vid/VID-FOND-NE.mp4")} type="video/mp4" />
      </video>
      <div className="content-tx">
        <h1>Entra al mundo de programación</h1>
        <a href="1" className="btn">Más cursos</a>
      </div>
    </div>
    )
}


export default Vid