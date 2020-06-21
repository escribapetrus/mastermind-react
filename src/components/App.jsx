import React from 'react';
import SecretProvider from '../context/SecretProvider';
import GameStatusProvider from '../context/GameStatusProvider';
import GuessProvider from '../context/GuessProvider';
import MessageProvider from '../context/MessageProvider';
//components
import GameScreen from "./GameScreen";
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

//styles
import '../stylesheets/App.scss';



//initialize game with a secret
// useEffect(() => {
//     setSecret(genSecret(pegs,4))
// },[]);

function App() {
  return (
    <div className="App">
      <GameStatusProvider>
        <SecretProvider>
          <GuessProvider>
            <MessageProvider>
              <Container>
                <Paper>
                  <GameScreen/>
                </Paper>
              </Container>
            </MessageProvider>
          </GuessProvider>
        </SecretProvider>
      </GameStatusProvider>
    </div>
  );
}

export default App;
