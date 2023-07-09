//Generacion de 35 id (dependiendo del curso), este archivo generara las url por id de cada contenido de curso, usnado logica para no
// generar componentes basuras //Queda pendiende cuando haya más videos o mas de 2 cursos


import { useParams } from 'react-router-dom';

function ComponenteGenerico() {
  const { id } = useParams();

  // Lógica específica para cada id

  return (
    // Contenido del componente
    <div>
        
    </div>
  );
}


export default ComponenteGenerico