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
        case 'guess':
            return true;
        default:
            throw new Error()
    }
}

function PlayerHand({pegs}) {
    let [state,dispatch] = useReducer(reducer,{guess: []})
    return (
        <div className="PlayerHand">
            <div className="guess">
                <h2>your guess</h2>
                {state.guess.map(g => 
                    <span onClick={() => dispatch({type:'remove', payload: g})}>
                        {g.color}
                    </span>)}
                <button>guess</button>
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
