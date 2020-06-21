import React, {useReducer} from 'react'
import { useGuesses } from '../context/GuessProvider'

import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Paper from '@material-ui/core/Paper';

import _ from 'lodash'
import { v4 as uuid } from 'uuid';

import "../stylesheets/PlayerHand.scss"

function reducer(state, action){
    switch (action.type){
        case 'add':
            if (state.guess.length <= 3){
                return {guess: _.concat(state.guess, {...action.payload, id: uuid()})}};
        case 'remove':
            return {guess: _.filter(state.guess, el => (el.id !== action.payload.id))};
        case 'reset':
            return {guess: []};
        default:
            throw new Error();
    }
}
//todo: create test for getScore
function getScore(guess, secret){
    if(guess.length === 4 && secret.length === 4){
        let guess_ = _.map(guess, x => x.num),
            secret_ = _.map(secret, x => x.num),
            zip_ = _.zip(guess_,secret_),
            rights = _.map(zip_, x => {
                if(x[0] === x[1]){ return 1}
                else { return 0} }),
            rights_ = _.reduce(rights, (x,y) => x + y, 0),
            sNotInGuess = _.difference(secret_,guess_),
            wrongs_ = secret.length - sNotInGuess.length - rights_
        return {guess: guess, blacks: rights_, whites: wrongs_}    
    } else {
        return {}
    }
}


function PlayerHand({pegs, secret}) {
    let [state,dispatch] = useReducer(reducer,{guess: []}),
        {guesses, setGuesses} = useGuesses();

    return (
        <div className="PlayerHand">
            <h2>choose pegs:</h2>
            <div className="color-buttons">
                {pegs.map(p => 
                    <Button 
                        style={{ backgroundColor: p.color, color: p.color}}
                        onClick={() => dispatch({type:'add', payload: p})}>
                        {p.color}
                    </Button>)}
            </div>
            <Paper className="player-guess">
            {state.guess.map(g => 
                <Icon 
                    style={{ color: g.color }}
                    onClick={() => dispatch({type:'remove', payload: g})}>
                    stop_circle
                </Icon>
            )}
            </Paper>
            <div className="action-buttons">
                <ButtonGroup>
                    <Button onClick={() => {
                        if (state.guess.length === 4 && secret.length === 4) {
                        setGuesses(_.concat(guesses,getScore(state.guess, secret)));
                        dispatch({type:'reset'})
                        }}}>guess</Button>
                    <Button onClick={() => dispatch({type:'reset'})}>reset</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default PlayerHand
