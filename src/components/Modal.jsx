import React from 'react';
import moment from 'moment';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

const Modal = ({ handleClose, open, libro, alquilar }) => (
  <Dialog onClose={handleClose} aria-labelledby='simple-dialog-title' open={open}>
    <DialogTitle id='simple-dialog-title'>{libro.titulo}</DialogTitle>
    <DialogContent>
      <Typography paragraph>Solicita este libro de {libro.autor} haciendo click!</Typography>
      <Typography variant='caption'>
        *Debes devolverlo antes del{' '}
        {moment()
          .add('15', 'days')
          .format('DD [de] MMMM')}
      </Typography>
    </DialogContent>
    <DialogActions>
      <Button color='primary' variant='contained' onClick={() => alquilar(libro)}>
        Alquilar ahora
      </Button>
    </DialogActions>
  </Dialog>
);

export default Modal;
