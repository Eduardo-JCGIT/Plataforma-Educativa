import React from 'react';
import CursoCardSlider from './CursoCardSlider';
import Curso1 from '../../img/card-curso/React-JS.jpg'
import Curso2 from '../../img/card-curso/Laravel.jpg'
import Curso3 from '../../img/card-curso/Git-GitHub.jpg'
import Curso4 from '../../img/card-curso/Javascript.jpg'

const CursoTendencia = () => {
  const cards = [
    {
      image: Curso1,
      title: 'Introducción a HTML',
      rating: 4,
      teacher: 'Eduardo Jiménez',
    },
    {
      image: Curso2,
      title: 'Introducción a Laravel 9',
      rating: 3,
      teacher: 'Josue Kantun',
    },
    {
      image: Curso3,
      title: 'Profesional Git a Git Hub',
      rating: 5,
      teacher: 'Alejandra García',
    },
    {
        image: Curso4,
        title: 'Curso básico de Javascritp',
        rating: 4,
        teacher: 'Valeria Rodríguez',
      },
  ];

  return <CursoCardSlider cards={cards} />;
  
};

export default CursoTendencia;
