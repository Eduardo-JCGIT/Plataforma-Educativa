import React, { useState } from 'react';

const Filters = () => {
  const [categoria, setCategoria] = useState('');
  const [orden, setOrden] = useState('');

  const handleCategoriaChange = (event) => {
    setCategoria(event.target.value);
  };

  const handleOrdenChange = (event) => {
    setOrden(event.target.value);
  };

  return (
    <div className="container-filter">
      <h1>Filtro de Cursos</h1>
      <div className="filter-curso">
        <select value={categoria} onChange={handleCategoriaChange}>
          <option value="">Seleccionar categoría</option>
          <option value="desarrollo-web">Desarrollo Web</option>
          <option value="arquitectura-redes">Arquitectura de Redes</option>
          <option value="administracion-bd">Administración de Bases de Datos</option>
        </select>
        <select value={orden} onChange={handleOrdenChange}>
          <option value="">Seleccionar orden</option>
          <option value="cursos-populares">Cursos Populares</option>
          <option value="recomendados">Recomendados</option>
          <option value="mas-valorados">Más Valorados</option>
        </select>
      </div>
      <div className="course-list-filter">
        {/* Aquí puedes mostrar la lista de cursos filtrados */}
      </div>
    </div>
  );
};

export default Filters;
