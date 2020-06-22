import React from 'react';
//context providers
import SecretProvider from '../context/SecretProvider';
import GameStatusProvider from '../context/GameStatusProvider';
import GuessProvider from '../context/GuessProvider';
import MessageProvider from '../context/MessageProvider';
//components
import GameScreen from "./GameScreen";
import {Container,Box} from '@material-ui/core';

//styles
import '../stylesheets/App.scss';

function App() {
  return (
    <Box my={3}>
    <Container>
      <GameStatusProvider>
        <SecretProvider>
          <GuessProvider>
            <MessageProvider>
              <GameScreen/>
            </MessageProvider>
          </GuessProvider>
        </SecretProvider>
      </GameStatusProvider>
    </Container>
    </Box>

  );
}

export default App;
