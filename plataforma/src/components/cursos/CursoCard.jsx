import React from 'react';


const CursoCard = ({ image, title, rating, teacher }) => {
  return (
    <div className="card-curso">
      <img src={image} alt={title} className="card-image-curso" />
      <div className="card-content-curso">
        <h1 className="card-title-curso">{title}</h1>
        <div className="card-rating-curso">Valoración: {rating} estrellas</div>
        <p className="card-description-curso">Impartido por: {teacher}</p>
        <button className="btn">Vamos</button>
      </div>
    </div>
  );
};

export default CursoCard;
