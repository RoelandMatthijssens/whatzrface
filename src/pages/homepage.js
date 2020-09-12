import React from 'react'
import { BasicLayout } from '../components/layout'
import { ChooseStartActorForm, GuessForm } from '../components'

const HomePage = ({ currentActor, chooseInitialActor, makeGuess, next, guessCount, guessResult }) => {
    return (
        <BasicLayout>
            {currentActor ?
                <GuessForm currentActor={currentActor} makeGuess={makeGuess} next={next} guessCount={guessCount} guessResult={guessResult} />
                :
                <ChooseStartActorForm chooseInitialActor={chooseInitialActor} />
            }
        </BasicLayout>
    )
}


export default HomePage