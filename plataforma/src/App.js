import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './components';
import Cursos from './components/cursos/Cursos';
import CourseDetail from './components/course-details/CourseDetails';
import PlayCourse from './components/course-vid-play/PlayCourse';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/cursos" component={Cursos} />
          <Route path="/CourseDetail" component={CourseDetail}></Route>
          <Route path="/PlayCourse" component={PlayCourse}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

