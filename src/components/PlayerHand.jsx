import React, {useReducer} from 'react'
import _ from 'lodash'
import { v4 as uuid } from 'uuid';


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
            throw new Error()
    }
}

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
        console.log({black: rights_, white: wrongs_})
        return {rights_, wrongs_}    
    }
}

function PlayerHand({pegs, secret}) {
    let [state,dispatch] = useReducer(reducer,{guess: []})
    return (
        <div className="PlayerHand">
            <div className="guess">
                <h2>your guess</h2>
                {state.guess.map(g => 
                    <span onClick={() => dispatch({type:'remove', payload: g})}>
                        {g.color}
                    </span>)}
                <button onClick={() => getScore(state.guess, secret)}>guess</button>
                <button onClick={() => dispatch({type:'reset'})}>reset</button>
            </div>
            <div className="pegs">
                <h2>choose pegs:</h2>
                {pegs.map(p => 
                    <span onClick={() => dispatch({type:'add', payload: p})}>
                        {p.color}
                    </span>)}
            </div>
        </div>
    )
}

export default PlayerHand
