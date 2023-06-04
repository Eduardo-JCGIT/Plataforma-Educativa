import Teacher1 from '../../img/teachers/Teacher1.png';
import Teacher2 from '../../img/teachers/Teacher2.png';
import Teacher3 from '../../img/teachers/Teacher3.png';
import Teacher4 from '../../img/teachers/Teacher4.png';
const cardsData = [

  {
    id: 1,
    image: Teacher1,
    title: 'Ingeniero de programación de Amazon',
    name: 'Juan Pérez',
    text: 'Fui responsable de la arquitectura y desarrollo de sistemas backend utilizando lenguajes como Python y frameworks como Django. Trabajé en la integración de APIs y en la optimización del rendimiento del sistema.',
  },
  {
    id: 2,
    image: Teacher2,
    title: 'Ingeniero de big data de Oracle',
    name: 'Laura Gómez',
    text: 'Diseñé y construí pipelines de datos para procesar y analizar grandes volúmenes de datos utilizando tecnologías como Hadoop, Spark y SQL. Desarrollé soluciones de extracción, transformación y carga de datos para mejorar la eficiencia y la calidad de los análisis.',
  },
  {
    id: 3,
    image: Teacher3,
    title: 'ingeniero de seguridad informática de Microsoft',
    name: 'Carlos Ramírez',
    text: 'Implementé medidas de seguridad para proteger la infraestructura y los sistemas de la organización contra amenazas cibernéticas. Realicé pruebas de penetración, auditorías de seguridad y participé en la respuesta a incidentes de seguridad. ',
  },
  {
    id: 4,
    image: Teacher4,
    title: 'Ingeniero de base de datos de AMCO',
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