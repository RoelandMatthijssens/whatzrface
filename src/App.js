import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import { HomePage, AboutPage } from './pages'
import celebs from './data/celebs';
import { SparqlClient, sample } from './utils';


const people = celebs

function App() {
  const client = new SparqlClient()
  const [currentActor, setCurrentActor] = useState(null)
  const [allActors, setAllActors] = useState([])
  const chooseInitialActor = (actor) => {
    client.getRelatedActors(actor.actorLabel)
      .then((actors) => {
        setAllActors(actors)
        setNextActor(actors)
      })
  }
  const setNextActor = (actors) => {
    const unguessed = Object.values(actors).filter((v) => !v.guessed);
    const nextActor = sample(unguessed)
    setCurrentActor(nextActor)
  }
  return (
    <Router>
      <Switch>
        <Route exact strict path="/">
          <HomePage currentActor={currentActor} chooseInitialActor={chooseInitialActor} />
        </Route>
        <Route exact strict path="/home">
          <HomePage currentActor={currentActor} chooseInitialActor={chooseInitialActor} />
        </Route>
        <Route exact strict path="/about">
          <AboutPage people={people} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
