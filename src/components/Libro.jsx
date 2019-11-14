import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';

const styles = () => ({
  root: {
    marginRight: '1rem',
    maxWidth: '300px',
  },
});

const Libro = ({ libro, solicitar, devolver, classes, alquilado }) => (
  <Card className={classes.root}>
    <CardHeader title={`#${libro.id} ${libro.titulo}`} subheader={libro.autor} />
    <CardContent>
      <Typography variant='caption'>ISBN: {libro.isbn}</Typography>
    </CardContent>
    <CardActions>
      <Button
        variant='contained'
        color={!alquilado ? 'primary' : 'secondary'}
        onClick={() => (alquilado ? devolver(libro) : solicitar(libro))}
      >
        {alquilado ? 'Devolver' : 'Solicitar'}
      </Button>
    </CardActions>
  </Card>
);

Libro.propTypes = {
  libro: PropTypes.object,
  devolver: PropTypes.func.isRequired,
};

export default withStyles(styles)(Libro);
