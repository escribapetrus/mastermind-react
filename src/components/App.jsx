import React from 'react';
import GameScreen from "./GameScreen"
import '../stylesheets/App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MASTERMIND REACT</h1>
      </header>
      <GameScreen/>
    </div>
  );
}

export default App;
