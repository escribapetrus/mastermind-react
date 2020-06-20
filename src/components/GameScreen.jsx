import React from 'react'
import _ from 'lodash';
import { useSecret } from '../context/SecretProvider'
//components
import Header from './Header'
import Secret from "./Secret"
import PlayerHand from './PlayerHand'
//resources
import pegs from '../resources/pegs'

//map guesses
//zip guesses and guess results

function genSecret(arr,n){
    let shuffled = _.shuffle(arr)
    return _.take(shuffled,n)
}

function GameScreen() {
    let {secret, setSecret} = useSecret();
    return (
        <div className="GameScreen">
            <Header setSecret={setSecret} pegs={pegs} genSecret={genSecret}/>
            <Secret secret={secret}/>
            <PlayerHand pegs={pegs} secret={secret}/>
        </div>
    )
}

export default GameScreen
