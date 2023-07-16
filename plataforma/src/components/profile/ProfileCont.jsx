import React from 'react'
import iconNX from '../../img/icon/N.png';

const ProfileCont = () => {
  return (
    <div>
        <div className='cont-inf-user-nx'>
      <h1>Mis cursos</h1>
      <p>HTML (HyperText Markup Language) es el lenguaje de marcado estándar utilizado para crear y 
        estructurar el contenido de las páginas web. Es el lenguaje fundamental en la construcción 
        de sitios web y se utiliza para describir la estructura y el contenido de una página.</p>
        <div className='sep-cour-pen-user'>
        <h1>En curso</h1>
        <br />
        <div className='cont-cour-pen-user-nx'>
  <div class="columna columna-1">
    <img src={iconNX} alt={iconNX} class="marg-cour"/>
  </div>
  <div class="columna columna-2">
    <h2 class="marg-cour">Introducción a HTML</h2>
    <p>Desarrollo web</p>
    <p>15/35</p>
  </div>
  <div class="columna columna-3">
    <button class="btn marg-cour">Continuar curso</button>
  </div>
</div>

        </div>
        </div>
    </div>
  )
}

export default ProfileCont
