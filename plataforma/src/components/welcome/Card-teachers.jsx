import Teacher1 from '../../img/teachers/Teacher1.png';
import Teacher2 from '../../img/teachers/Teacher2.png';
import Teacher3 from '../../img/teachers/Teacher3.png';
import Teacher4 from '../../img/teachers/Teacher4.png';
const cardsData = [

  {
    id: 1,
    image: Teacher1,
    title: 'Ingeniero en sistemas computacioneles de Oracle',
    name: 'Josue Gibran Can Kantún',
    text: 'Soy un ingeniero en sistemas computacionales con experiencia en Oracle. Durante mi tiempo en la empresa, desempeñé un papel clave como responsable de la arquitectura y desarrollo de sistemas backend.',
  },
  {
    id: 2,
    image: Teacher2,
    title: 'Ingeniero de software de Microsoft',
    name: 'Maria Fernanda Ancona Zapata',
    text: 'He trabajado en emocionantes proyectos de desarrollo para el sistema operativo Windows. Participé en el diseño e implementación de nuevas características y mejoras que han llegado a millones de usuarios en todo el mundo.',
  },
  {
    id: 3,
    image: Teacher3,
    title: 'Ingeniero en seguridad informática en Cisco',
    name: 'Rafael Armando González Pech',
    text: 'Implementé medidas de seguridad para proteger la infraestructura y los sistemas de la organización contra amenazas cibernéticas. Realicé pruebas de penetración, auditorías de seguridad y participé en la respuesta a incidentes de seguridad. ',
  },
  {
    id: 4,
    image: Teacher4,
    title: 'Ingeniero en tecnologías de la información de Amco',
    name: 'Ana López',
    text: 'Participé en el diseño e implementación de la arquitectura de datos para el procesamiento y análisis eficiente de grandes volúmenes de información. Utilicé tecnologías como MongoDB y Cassandra para implementar soluciones de bases de datos NoSQL.',
  },
  
];

const Cards = () => {
  return (
    <div className="cards-container">
      {cardsData.map((card) => (
        <div className="card" key={card.id}>
          <img src={card.image} alt="Imagen de la carta"/>
          <h2>{card.title}</h2>
          <h3>{card.name}</h3>
          <p>{card.text}</p>
  
        </div>
      ))}
    </div>
  )
};

export default Cards;