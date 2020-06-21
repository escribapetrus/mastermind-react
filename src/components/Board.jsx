import React from 'react'
import {useGuesses} from '../context/GuessProvider'

import Badge from '@material-ui/core/Badge';
import Icon from '@material-ui/core/Icon';
import '../stylesheets/Board.scss'

function Board() {
    let {guesses} = useGuesses();
    return (
        <div className="Board">
            <ul>
                {guesses.map(g => 
                <li>
                    {g.guess.map(x => <Icon style={{ color: x.color }}>stop_circle</Icon>)} 
                    <Badge color="secondary" overlap="circle" badgeContent={g.blacks}>
                        <Icon>stop_circle</Icon>
                    </Badge>
                    <Badge color="secondary" overlap="circle" badgeContent={g.whites}>
                        <Icon>panorama_fish_eye</Icon>
                    </Badge>
                </li>)}
            </ul>
        </div>

        
    )
}

export default Board
