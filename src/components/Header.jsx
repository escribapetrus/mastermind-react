import React from 'react'
import _ from 'lodash';
// context providers
import { useSecret } from '../context/SecretProvider'
import { useGameStatus } from '../context/GameStatusProvider'
import { useMessage } from '../context/MessageProvider'
import { useGuesses } from '../context/GuessProvider'
// components
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import "../stylesheets/Header.scss"

function genSecret(arr,n){
    let secret = _.map(arr, x => _.sample(arr))
    return {pegs: _.take(secret,n), display: false}
}

function Header({pegs}) {
    let {setSecret} = useSecret(),
        {setGameStatus} = useGameStatus(),
        {setGuesses} = useGuesses(),
        {setMessage} = useMessage();
    return (
        <header className="Header">
            <h1 style={{textAlign:"center"}}>MASTERMIND REACT</h1>
            <ButtonGroup>
                <Button onClick={() => {
                    setSecret(genSecret(pegs,4));
                    setGameStatus({
                        active:true
                    });
                    setGuesses([])
                }}>New Game</Button>
                <Button onClick={() => {
                    setMessage(`
                        Welcome to MASTERMIND. 
                        Discover the secret using the colored pegs and hints. 
                        Each black hint means a right color in the right position.
                        Each white hint means a right color in the wrong position.
                        Click on the colors to choose your pegs, and click on guess
                        to see if you have the answer.
                    `);
                }}>Rules</Button>
            </ButtonGroup>
            
        </header>
    )
}

export default Header
