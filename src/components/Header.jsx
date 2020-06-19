import React from 'react'

function Header({setSecret,pegs,genSecret}) {
    return (
        <header className="App-header">
            <h1>MASTERMIND REACT</h1>
            <button onClick={() => {setSecret(genSecret(pegs,4))}}>
                new game
            </button>
        </header>
    )
}

export default Header
