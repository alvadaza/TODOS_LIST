import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css'

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
              
  } = React.useContext(TodoContext);
  const mensajeFelicitaciones = `Felicitaciones Lo Lograste 😍 🎉`
  const mensajeHasCompletado = `Has completado ${completedTodos} de ${totalTodos} Todos`
  const todoMesage = (completedTodos === totalTodos) ? mensajeFelicitaciones: mensajeHasCompletado;
  return (
    <h1 className='TodoCounter'>
      {todoMesage}
    </h1>
  )
  }

export { TodoCounter };