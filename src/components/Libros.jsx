import React from 'react';
import LibroModel from '../models/Libro';
import Libro from './Libro';
import { Grid } from '@material-ui/core';

export default ({ libros, title, alquilados = [], ...rest }) => (
  <div className='libreria'>
    <h2>{title}</h2>
    <Grid container spacing={2}>
      {libros.map(({ id, autor, titulo, isbn }) => {
        const libro = new LibroModel(id, autor, titulo, isbn);
        const alquilado = !!alquilados.find((a) => a.id === id);
        return (
          <Grid item xl>
            <Libro key={libro.id} libro={libro} alquilado={alquilado} {...rest} />
          </Grid>
        );
      })}
    </Grid>
  </div>
);
