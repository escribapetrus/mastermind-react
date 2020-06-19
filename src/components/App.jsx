import React from 'react';
import SecretProvider, {useSecret} from '../context/SecretProvider';
import GameScreen from "./GameScreen";

import _ from 'lodash';
import pegs from '../resources/pegs';
import '../stylesheets/App.scss';

function genSecret(arr,n){
    let shuffled = _.shuffle(arr)
    return _.take(shuffled,n)
}

//initialize game with a secret
// useEffect(() => {
//     setSecret(genSecret(pegs,4))
// },[]);




function App() {
  return (
    <div className="App">
      <SecretProvider>
        <GameScreen/>
      </SecretProvider>
    </div>
  );
}

export default App;
