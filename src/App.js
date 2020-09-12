import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import { HomePage, AboutPage } from './pages'
import { SparqlClient, sample, levenshteinDistance } from './utils';

function App() {
  const client = new SparqlClient()
  const [currentActor, setCurrentActor] = useState(null)
  const [guessCount, setGuessCount] = useState(0)
  const [guessResult, setGuessResult] = useState('')
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
  const makeGuess = ({ guess }, { setSubmitting }) => {
    setSubmitting(true)
    setGuessCount(guessCount => guessCount + 1)
    setGuessResult(getGuessResult(guess))
    setSubmitting(false)
  }
  const next = () => {
    setAllActors(allActors => {
      console.log(allActors)
      allActors[currentActor.actorLabel].guessed = true
      console.log(allActors)
      return allActors
    })
    setNextActor(allActors)
  }

  const getGuessResult = (guess) => {
    const distance = levenshteinDistance(currentActor.actorLabel.toLowerCase(), guess.toLowerCase())
    if (distance === 0) {
      return "EXACT"
    } else if (distance <= Math.ceil(currentActor.actorLabel.length * 0.1)) {
      return "CLOSE_ENOUGH"
    } else if ((new RegExp(`\\b${guess.toLowerCase()}\\b`, 'i')).test(currentActor.actorLabel.toLowerCase())) {
      return "PARTIAL"
    } else if (distance <= Math.ceil(currentActor.actorLabel.length * 0.15)) {
      return "CLOSE"
    } else {
      return "WRONG"
    }
  }
  return (
    <Router>
      <Switch>
        <Route exact strict path="/">
          <HomePage currentActor={currentActor} chooseInitialActor={chooseInitialActor} makeGuess={makeGuess} next={next} guessCount={guessCount} guessResult={guessResult} />
        </Route>
        <Route exact strict path="/home">
          <HomePage currentActor={currentActor} chooseInitialActor={chooseInitialActor} makeGuess={makeGuess} next={next} guessCount={guessCount} guessResult={guessResult} />
        </Route>
        <Route exact strict path="/about">
          <AboutPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
