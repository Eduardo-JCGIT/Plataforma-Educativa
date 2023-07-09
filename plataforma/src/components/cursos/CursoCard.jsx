import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const CursoCard = ({ image, title, rating, teacher }) => {
  return (
    <div className="card-curso">
      <img src={image} alt={title} className="card-image-curso" />
      <div className="card-content-curso">
        <h1 className="card-title-curso">{title}</h1>
        <div className="card-rating-curso">Valoración: {rating} estrellas</div>
        <p className="card-description-curso">Impartido por: {teacher}</p>
        <button className="btn"><Link to="/CourseDetail">Vamos</Link> </button>
      </div>
    </div>
  );
};

export default CursoCard;
