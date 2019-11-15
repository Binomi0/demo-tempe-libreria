import React, { useState } from 'react';
import Libros from './components/Libros';
import Modal from './components/Modal';
import libros from './mocks/libros';
import './App.css';

function App() {
  const [libro, setLibro] = useState(null);
  const [alquilados, setAlquilados] = useState([]);
  const [error, setError] = useState('');

  const openModal = (libro) => {
    setLibro(libro);
  };

  const closeModal = () => {
    setLibro(null);
  };

  const alquilar = (libro) => {
    if (!alquilados.find((a) => libro.id === a.id)) {
      if (alquilados.length > 3) {
        setError('Has Alquilado el máximo de libros');
      } else {
        setAlquilados(alquilados.concat(libro));
        setError('');
      }
    }
    setLibro(null);
  };
  const devolver = (libro) => {
    setAlquilados(alquilados.filter((a) => a.id !== libro.id));
    setError('');
  };

  return (
    <div className='App'>
      {libro && libro.titulo && (
        <Modal alquilar={alquilar} libro={libro} handleClose={closeModal} open={libro && true} />
      )}
      <h4>{error && 'Has Alquilado el máximo de libros'}</h4>
      <Libros
        solicitar={openModal}
        libros={libros}
        alquilados={alquilados}
        title='Librería Tempe'
        devolver={devolver}
      />
      {alquilados.length > 0 && (
        <Libros
          libros={alquilados}
          alquilados={alquilados}
          alquilar={alquilar}
          title='Alquilados'
          devolver={devolver}
        />
      )}
    </div>
  );
}

export default App;
