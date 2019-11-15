import React, { useState } from 'react';
import moment from 'moment';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
const Modal = ({ handleClose, open, libro, alquilar }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const classes = useStyles();

  const handleDateChange = (e) => {
    console.log('date', e.target.value);
    setSelectedDate(e.target.value);
  };

  return (
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
        <TextField
          id='date'
          label='Fecha de pedido'
          type='date'
          onChange={handleDateChange}
          value={selectedDate}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Typography variant='body2'>
          Debes devolverlo antes del
          {moment(selectedDate)
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
};

export default Modal;
