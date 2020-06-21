import React from 'react'
import _ from 'lodash';

import { useSecret } from '../context/SecretProvider'
import { useGameStatus } from '../context/GameStatusProvider'
import { useGuesses } from '../context/GuessProvider'

import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function genSecret(arr,n){
    let shuffled = _.shuffle(arr)
    return {pegs: _.take(shuffled,n), display: false}
}

function Header({pegs}) {
    let {setSecret} = useSecret(),
        {gameStatus, setGameStatus} = useGameStatus(),
        {setGuesses} = useGuesses();
    return (
        <header className="App-header">
            <Typography variant="h1">MASTERMIND REACT</Typography>
            <Typography variant="subtitle1">discover the secret using the pegs</Typography>
            <ButtonGroup>
                <Button onClick={() => {
                    setSecret(genSecret(pegs,4));
                    setGameStatus({
                        active:true, message: `Welcome to MASTERMIND. 
                        You have to find the secret using the colored pegs and hints. 
                        Each black hint means a right color in the right position.
                        Each white hint means a right color in the wrong position.`
                    });
                    setGuesses([])
                }}>New Game</Button>
            </ButtonGroup>
            
        </header>
    )
}

export default Header
