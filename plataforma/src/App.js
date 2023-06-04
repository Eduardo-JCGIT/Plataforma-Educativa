//Pendiente de ruta
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Importacion de ruta de componentes
import Cursos from "./components/cursos/Cursos";

function App() {
  return (
    <div className='App'>
    <div>
    <BrowserRouter>
    <Routes>  
      <Route path='/cursos' element={ <Cursos/> } />
    </Routes>
    </BrowserRouter>
  </div>
  </div>
  );
}

export default App;
