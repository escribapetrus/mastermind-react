import React, {useEffect} from 'react'
import _ from 'lodash';
import { useSecret } from '../context/SecretProvider'
// import { useGameStatus } from '../context/GameStatusProvider'
import { useGuesses } from '../context/GuessProvider'

//components
import Header from './Header'
import Secret from "./Secret"
import PlayerHand from './PlayerHand'
import Board from './Board'
//resources
import pegs from '../resources/pegs'
//styles
import '../stylesheets/GameScreen.scss'


function GameScreen() {
    let {secret, setSecret} = useSecret(),
        // {gameStatus} = useGameStatus(),
        {guesses} = useGuesses();
    useEffect(() => {
        if(guesses.length > 1 && _.last(guesses).blacks === 4){
            console.log("victory!")
        }
        else if (guesses.length > 9){
            console.log("You lose")
        }
    })
    return (
        <div className="GameScreen">
            <Header pegs={pegs}/>
            {(secret.pegs.length > 1) && <Secret secret={secret.pegs}/>}
            <Board/>
            <PlayerHand 
                pegs={pegs} 
                secret={secret.pegs}/>
        </div>
    )
}

export default GameScreen
