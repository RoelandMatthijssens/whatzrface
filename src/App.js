import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import { HomePage, AboutPage } from './pages'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact strict path="/">
          <HomePage />
        </Route>
        <Route exact strict path="/home">
          <HomePage />
        </Route>
        <Route exact strict path="/about">
          <AboutPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
