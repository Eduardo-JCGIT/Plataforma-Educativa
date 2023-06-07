import React, { useState } from 'react';
import CursoCard from './CursoCard';

const CursoCardSlider = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="card-slider-curso">
      <button
        className="card-slider-button-curso card-slider-button-previous-curso"
        disabled={currentIndex === 0}
        onClick={handlePrevious}
      >
        &lt;
      </button>
      <div className="card-slider-container-curso">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card-slider-item-curso ${
              index === currentIndex ? 'active' : ''
            }`}
          >
            <CursoCard {...card} />
          </div>
        ))}
      </div>
      <button
        className="card-slider-button-curso card-slider-button-next-curso"
        disabled={currentIndex === cards.length - 1}
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
  );
};

export default CursoCardSlider;
