import React, {useState, useEffect} from 'react'
import _ from 'lodash'
import Secret from "./Secret"

import pegs from '../resources/pegs'
//map guesses
//zip guesses and guess results

function genSecret(arr,n){
    let shuffled = arr.sort(() => .5 - Math.random());
    return _.take(shuffled,n)
}

function GameScreen() {
    let [secret, setSecret] = useState([])
    
    //initialize game with a secret
    useEffect(() => {
        setSecret(genSecret(pegs,4))
    },[]);
    return (
        <div className="GameScreen">
            <button onClick={() => setSecret(genSecret(pegs,4))}>gen secret</button>
            <Secret secret={secret}/>

        </div>
    )
}

export default GameScreen
