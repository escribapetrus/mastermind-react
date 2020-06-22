import React from 'react';

import { useMessage } from '../context/MessageProvider'

import {Modal, Paper, Container, Box, Backdrop} from '@material-ui/core';

function ModalMessage() {
  const {message, setMessage} = useMessage();
  return (
      <Modal
        open={!!message}
        onClose={() => setMessage(null)}
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 700, }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        <Box 
          width="70%"
          style={{margin: "150px auto"}}
          >
          <Paper style={{padding:"20px", textAlign: "center"}}>
            <p>{message}</p>
          </Paper>
        </Box>
      </Modal>
  );
}

export default ModalMessage