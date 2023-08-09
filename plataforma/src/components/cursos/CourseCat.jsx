import React from 'react';
import { Link } from 'react-router-dom';
import Course1 from '../../img/card-curso/React-JS.jpg';
import Course2 from '../../img/card-curso/Git-GitHub.jpg';
import Course3 from '../../img/card-curso/Javascript.jpg';
import Course4 from '../../img/card-curso/Laravel.jpg';
import Course5 from '../../img/card-curso/mysql.jpg';
import Course6 from '../../img/card-curso/Phyton.jpg';

const CourseObj = [
  {
    id: 1,
    image: Course1,
    title: 'Introducción a HTML',
    description: 'Impartido por: Eduardo Jiménez',
  },
  {
    id: 2,
    image: Course2,
    title: 'Profesional Git A GitHub',
    description: 'Impartido por: María Fernanda',
  },
  {
    id: 3,
    image: Course3,
    title: 'Curso Básico de Javascript',
    description: 'Impartido por: Rafael Armando',
  },
  {
    id: 4,
    image: Course4,
    title: 'Introdución a Laravel',
    description: 'Impartido por: Josue Gibran',
  },
  {
    id: 5,
    image: Course5,
    title: 'Aprende MySQL básico',
    description: 'Impartido por: María Fernanda',
  },
  {
    id: 6,
    image: Course6,
    title: 'Introdución a Laravel',
    description: 'Impartido por: Jennifer Martínez',
  },
];

const CourseCat = () => {
  return (
    <div className="course-container-cat">
      {CourseObj.map((card) => (
        <div className="course-pri-cat" key={card.id}>
          <img src={card.image} alt={card.title} />
          <div className="card-content">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <Link to="/CourseDetail">
            <button>Ver curso</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseCat;
