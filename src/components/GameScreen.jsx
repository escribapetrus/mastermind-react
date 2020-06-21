import React, {useEffect, useState} from 'react'
import _ from 'lodash';
import { useSecret } from '../context/SecretProvider'
import { useGameStatus } from '../context/GameStatusProvider'
import { useGuesses } from '../context/GuessProvider'
import { useMessage } from '../context/MessageProvider'

//components
import Header from './Header'
import Secret from "./Secret"
import PlayerHand from './PlayerHand'
import Board from './Board'
import ModalMessage from './ModalMessage'
//resources
import pegs from '../resources/pegs'
//styles
import '../stylesheets/GameScreen.scss'


function GameScreen() {
    let {secret, setSecret} = useSecret(),
        {gameStatus, setGameStatus} = useGameStatus(),
        {guesses, setGuesses} = useGuesses(),
        {message, setMessage} = useMessage();


    useEffect(() => {
        if(gameStatus.active && guesses.length > 1 && _.last(guesses).blacks === 4){
            setGameStatus({active: false});
            setMessage("You win")
            // setGuesses([]);
            setSecret({pegs: secret.pegs, display: true})
        }
        else if (gameStatus.active && guesses.length > 9){
            setGameStatus({active: false});
            setMessage("You lose!")
            // setGuesses([]);
            setSecret({pegs: secret.pegs, display: true})        
        }
    })
    return (
        <div className="GameScreen">
            <Header pegs={pegs}/>
            {(secret.pegs.length > 1) && <Secret secret={secret.pegs} display={secret.display}/>}
            <ModalMessage/>
            <Board/>
            <PlayerHand 
                pegs={pegs} 
                secret={secret.pegs}
                gameStatus={gameStatus.active}/>
        </div>
    )
}

export default GameScreen
