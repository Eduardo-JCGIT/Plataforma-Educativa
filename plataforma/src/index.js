import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import Index from './components';
import Cursos from './components/cursos/Cursos';
import Login from './components/login/Login';
import reportWebVitals from './reportWebVitals';
import Account from './components/create-account/CreateAccount';
import CursoCard from './components/cursos/CursoCard';
import CourseDetail from './components/course-details/Course-details';
import ContCourse from './components/course-details/Cont-course';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <CursoCard/> */}
    {/* <Cursos/> */}
    {/* <Account/> */}
    {/* <Login/> */}
    {/* <Index/> */}
    {/* <CourseDetail/> */}
    <ContCourse/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
