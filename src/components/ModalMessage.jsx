import React from 'react';
import { useGameStatus } from '../context/GameStatusProvider'

import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';

export default function ModalMessage() {
const {gameStatus, setGameStatus} = useGameStatus();

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

  return (
    <div>
      <Modal
        open={!!gameStatus.message}
        onClose={() => setGameStatus({active: false, message: null})}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        <Paper>
           <p>{gameStatus.message}</p>
        </Paper>
      </Modal>
    </div>
  );
}
