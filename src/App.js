import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import { HomePage, AboutPage } from './pages'
import celebs from './data/celebs';


const people = celebs

function App() {
  return (
    <Router>
      <Switch>
        <Route exact strict path="/">
          <HomePage people={people} />
        </Route>
        <Route exact strict path="/home">
          <HomePage people={people} />
        </Route>
        <Route exact strict path="/about">
          <AboutPage people={people} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
