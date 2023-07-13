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

        <Route path="/video1" component={() => <PlayCourse video="video1" />} />
        <Route path="/video2" component={() => <PlayCourse video="video2" />} />
        <Route path="/video3" component={() => <PlayCourse video="video3" />} />
        <Route path="/video4" component={() => <PlayCourse video="video4" />} />
        <Route path="/video5" component={() => <PlayCourse video="video5" />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

