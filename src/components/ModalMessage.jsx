import React from 'react';
import { useMessage } from '../context/MessageProvider'

import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';

export default function ModalMessage() {
const {message, setMessage} = useMessage();

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

  return (
    <div>
      <Modal
        open={!!message}
        onClose={() => setMessage(null)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        <Paper>
           <p>{message}</p>
        </Paper>
      </Modal>
    </div>
  );
}
