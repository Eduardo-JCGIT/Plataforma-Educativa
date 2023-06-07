import React from 'react';
import CursoCardSlider from './CursoCardSlider';
import Curso1 from '../../img/card-curso/React-JS.jpg'
import Curso2 from '../../img/card-curso/Laravel.jpg'
import Curso3 from '../../img/card-curso/Git-GitHub.jpg'
import Curso4 from '../../img/card-curso/Javascript.jpg'

const CursoImgCard = () => {
  const cards = [
    {
      image: Curso1,
      title: 'Introducción en React JS',
      rating: 4,
      description: 'Crea estados independientes o compuestos, imperativos o declarativos, con funciones o clases',
    },
    {
      image: Curso2,
      title: 'Introducción a Laravel 9',
      rating: 3,
      description: 'Aprende los fundamentos del framework más popular de PHP.',
    },
    {
      image: Curso3,
      title: 'Git a Git Hub',
      rating: 5,
      description: 'Usa Git, el sistema de control de versiones por excelencia que utiliza la industria tecnológica.',
    },
    {
        image: Curso4,
        title: 'Curso básico de Javascritp',
        rating: 4,
        description: 'Conoce los conceptos clave del lenguaje de programación que se está comiendo al mundo. Aprende qué es una variable, una función, un objeto',
      },
  ];

  return <CursoCardSlider cards={cards} />;
};

export default CursoImgCard;
