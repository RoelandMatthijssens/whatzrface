import React from 'react'
import { BasicLayout } from '../components/layout'
import { ChooseStartActorForm, GuessForm } from '../components'

const HomePage = ({ currentActor, chooseInitialActor, makeGuess, message, guessCount, guessResult }) => {
    return (
        <BasicLayout>
            {currentActor ?
                <GuessForm currentActor={currentActor} makeGuess={makeGuess} message={message} guessCount={guessCount} guessResult={guessResult} />
                :
                <ChooseStartActorForm chooseInitialActor={chooseInitialActor} />
            }
        </BasicLayout>
    )
}


export default HomePage