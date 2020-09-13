import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import { HomePage, AboutPage } from './pages'
import { SparqlClient, sample, levenshteinDistance } from './utils';

function App() {
  const maxUnencounteredActors = 1000
  const client = new SparqlClient()
  const [currentActor, setCurrentActor] = useState(null)
  const [guessCount, setGuessCount] = useState(0)
  const [guessResult, setGuessResult] = useState('')
  const [allActors, setAllActors] = useState([])
  const chooseInitialActor = (actor) => {
    client.getRelatedActors(actor)
      .then((actors) => {
        setAllActors(actors)
        setNextActor(actors)
      })
  }
  const unencounteredActors = (actors) => {
    return Object.values(actors).filter((v) => !v.encountered);
  }
  const setNextActor = (actors) => {
    const nextActor = sample(unencounteredActors(actors))
    console.log(`next to guess: ${nextActor.actorLabel}`)
    setCurrentActor(nextActor)
  }
  const makeGuess = ({ guess }, { setSubmitting }) => {
    setSubmitting(true)
    setGuessCount(guessCount => guessCount + 1)
    setGuessResult(getGuessResult(guess))
    setSubmitting(false)
  }
  const next = () => {
    const guessed = ['EXACT', 'CLOSE_ENOUGH'].includes(guessResult)
    setAllActors(allActors => {
      allActors[currentActor.actorLabel].encountered = true
      allActors[currentActor.actorLabel].guessed = guessed
      return allActors
    })
    if (guessed && unencounteredActors(allActors).length < maxUnencounteredActors) {
      populateRelatedActors(currentActor)
    }
    setGuessCount(0)
    setGuessResult(null)
    setNextActor(allActors)
  }
  const populateRelatedActors = (actor) => {
    client.getRelatedActors(actor)
      .then((newActors) => {
        setAllActors(allActors => {
          const newAllActors = mergeActors(allActors, newActors)
          return newAllActors
        })
      })
  }

  const mergeActors = (actorDict1, actorDict2) => {
    for (const [actorName, actorObject] of Object.entries(actorDict2)) {
      if (actorName in actorDict1) {
        const actor = actorDict1[actorName]
        for (const movie of actorObject.movies) {
          const movieTitles = actor.movies.map(movie => movie.movieLabel)
          if (!(movieTitles.includes(movie.movieLabel))) {
            actor.movies.push(movie)
          }
        }
      } else {
        actorDict1[actorName] = actorObject
      }
    }
    return actorDict1
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
