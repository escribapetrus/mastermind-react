import React from 'react'
import Icon from '@material-ui/core/Icon';

function Secret({secret, display}) {
    return (
        <div className="Secret">
            <h2>the secret:</h2>
            {
                display ? secret.map(s => <Icon style={{color: s.color}}>stop_circle</Icon>)
                : secret.map(s => <Icon style={{color: "black"}}>stop_circle</Icon>)
            }
        </div>
    )
}

export default Secret
