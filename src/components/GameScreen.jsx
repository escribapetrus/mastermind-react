import React, {useEffect, useState} from 'react'
import _ from 'lodash';
import { useSecret } from '../context/SecretProvider'
import { useGameStatus } from '../context/GameStatusProvider'
import { useGuesses } from '../context/GuessProvider'

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
        {guesses, setGuesses} = useGuesses();


    useEffect(() => {
        if(guesses.length > 1 && _.last(guesses).blacks === 4){
            setGameStatus({active: false, message: "You win!"});
            setGuesses([]);
            setSecret({pegs: [], display: false})
        }
        else if (guesses.length > 9){
            setGameStatus({active: false, message: "You lose!"});
            setGuesses([]);
            setSecret({pegs: [], display: false})        
        }
    })
    return (
        <div className="GameScreen">
            <Header pegs={pegs}/>
            {(secret.pegs.length > 1) && <Secret secret={secret.pegs}/>}
            <ModalMessage/>
            <Board/>
            <PlayerHand 
                pegs={pegs} 
                secret={secret.pegs}/>
        </div>
    )
}

export default GameScreen
