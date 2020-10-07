import React, {useReducer} from 'react'
import { useGuesses } from '../context/GuessProvider'

import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Grid, Container, Box } from '@material-ui/core';

import _ from 'lodash'
import { v4 as uuid } from 'uuid';

// import "../stylesheets/PlayerHand.scss"

function getNotInGuess(secret,guess){
    let guess_ = guess.slice();
    let res = [];
    secret.map(el => {
        if (guess_.includes(el)) {
            guess_.splice(guess_.indexOf(el),1);
        } else {
            res.push(el)
        }
    })
    return res
}

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
            sNotInGuess = getNotInGuess(secret_,guess_),
            wrongs_ = secret.length - sNotInGuess.length - rights_
        return {guess: guess, blacks: rights_, whites: wrongs_}    
    } else {
        return {}
    }
}


function PlayerHand({pegs, secret, gameStatus}) {
    let [state,dispatch] = useReducer(reducer,{guess: []}),
        {guesses, setGuesses} = useGuesses();

    return (
        <Container>
            <Box
                display="flex"
                justifyContent="center"
                m={2}
                minHeight="60px"
            >
            {state.guess.map(g => 
                <Icon 
                    style={{ color: g.color, fontSize: "2.5rem",}}
                    onClick={() => dispatch({type:'remove', payload: g})}>
                    stop_circle
                </Icon>
            )}
            </Box>
            <Grid 
                container
                justify="center"
                alignItems="center"
                spacing={1}>
                {pegs.map(p => 
                    <Grid item xs={6} sm={4} md={1}>
                        <Button 
                            style={{ backgroundColor: p.color, color: p.color, width: "100%"}}
                            onClick={() => dispatch({type:'add', payload: p})}>
                            {p.color}
                        </Button>
                    </Grid>
                )}
            </Grid>
            <Box 
                m={1}
                display="flex"
                flexDirection="row"
                justifyContent="center">
                <ButtonGroup>
                    <Button onClick={() => {
                        if (state.guess.length === 4 && secret.length === 4 && gameStatus) {
                        setGuesses(_.concat(guesses,getScore(state.guess, secret)));
                        dispatch({type:'reset'})
                        }}}>guess</Button>
                    <Button onClick={() => dispatch({type:'reset'})}>reset</Button>
                </ButtonGroup>
            </Box>
        </Container>
    )
}

export default PlayerHand


// function getNotInGuess(secret,guess){
//     let guess_ = guess.slice();
//     let res = [];
//     secret.map(el => {
//         if (guess_.includes(el)) {
//             guess_.splice(guess_.indexOf(el),1);
//         } else {
//             res.push(el)
//         }
//     })
//     return res
// }
    
    // if (secret_.length == 0) {
    //     return res
    // }
    // else if (guess.includes(secret_[0])) {
    //     secret_.shift()
    //     guess.splice(guess.indexOf(secret_[0]),1)
    //     return getNotInGuess(secret_, guess)
    // } 
    // else {
    //     res.push(secret_.shift());

    //     return getNotInGuess(secret_, guess)
    // }