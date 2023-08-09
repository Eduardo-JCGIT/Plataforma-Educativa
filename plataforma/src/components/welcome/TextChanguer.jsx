import React, { useState, useEffect } from 'react';

const TextChanger = () => {
  const [phrases, setPhrases] = useState([
    'Descubre tu potencial y despierta tu pasión por el aprendizaje con Next Education. Cada curso está diseñado para inspirarte y llevarte más allá de tus límites.',
    '¡El futuro es tuyo para conquistarlo! En Next Education, te ofrecemos cursos que te prepararán para los desafíos del mañana. ¡Inicia tu viaje hacia el éxito ahora!',
    'No hay límite para lo que puedes lograr. Con nuestros cursos en Next Education, cada paso te acerca a tus metas y te impulsa hacia un futuro brillante',
    'Aprender es crecer, y en Next Education creemos en tu potencial infinito. Permítenos acompañarte en tu camino hacia el conocimiento y el empoderamiento.',
    'Explora nuevos horizontes y desafía tus habilidades en Next Education. Nuestros cursos te brindan las herramientas para ser líder en cualquier campo que elijas.',
    'Cada curso en Next Education es una oportunidad de transformación. Atrévete a reinventarte y desbloquear un mundo lleno de posibilidades.',
  ]);

  const [shownIndex, setShownIndex] = useState(0); // Índice de frase actualmente mostrada
  const [nextIndex, setNextIndex] = useState(1); // Índice de siguiente frase

  useEffect(() => {
    const interval = setInterval(() => {
      setNextIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 5000);

    return () => clearInterval(interval); // Limpieza: detener el intervalo al desmontar el componente
  }, [phrases]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShownIndex(nextIndex); // Cambiar la frase actual después de que finalice la animación
    }, 1000);

    return () => clearTimeout(timeout); // Limpieza: cancelar el timeout si cambia la frase antes de que se ejecute
  }, [nextIndex]);

  return (
    <div className="text-container-animation-phrase">
      {phrases.map((phrase, index) => (
        <p
          key={index}
          className={`fade ${index === shownIndex ? 'fade-in' : 'fade-out'}`}
          style={{ display: index === shownIndex ? 'block' : 'none' }}
        >
          {phrase}
        </p>
      ))}
    </div>
  );
};

export default TextChanger;
