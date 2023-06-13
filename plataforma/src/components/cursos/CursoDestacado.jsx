import React from 'react';
import CursoCardSlider from './CursoCardSlider';
import Curso5 from '../../img/card-curso/mysql.jpg'
import Curso6 from '../../img/card-curso/Phyton.jpg'
import Curso7 from '../../img/card-curso/Redes.jpg'
import Curso8 from '../../img/card-curso/Seguridad-informatica.jpg'

const CursoDestacado = () => {
  const cards = [
    {
      image: Curso5,
      title: 'Introducción en React JS',
      rating: 4,
      teacher: 'Rafael Armando Pech',
    },
    {
      image: Curso6,
      title: 'Introducción a Laravel 9',
      rating: 3,
      teacher: 'Josue Kantun',
    },
    {
      image: Curso7,
      title: 'Profesional Git a Git Hub',
      rating: 5,
      teacher: 'Alejandra García',
    },
    {
        image: Curso8,
        title: 'Curso básico de Javascritp',
        rating: 4,
        teacher: 'Valeria Rodríguez',
      },
  ];

  return <CursoCardSlider cards={cards} />;
  
};

export default CursoDestacado;