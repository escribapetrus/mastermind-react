import React from 'react'

function Secret({secret}) {
    return (
        <div className="Secret">
            {secret.map(s => <span>{s.color}</span>)}                
        </div>
    )
}

export default Secret
