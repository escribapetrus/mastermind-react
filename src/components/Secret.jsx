import React from 'react'

function Secret({secret}) {
    return (
        <div className="Secret">
            <h2>the secret:</h2>
            {secret.map(s => <span>{s.color}</span>)}                
        </div>
    )
}

export default Secret
