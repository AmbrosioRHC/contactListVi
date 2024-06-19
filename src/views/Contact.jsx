import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';

const Contact = () => {
  const { state } = useContext(Context); // Obtener el estado del contexto

  // Use useEffect para imprimir el estado en consola al cargar el componente
  useEffect(() => {
    console.log('Estado actual de los contactos:', state.contacts);
  }, [state.contacts]);

  // Verificar que state.contacts sea un array antes de mapearlo
  if (!Array.isArray(state.contacts)) {
    console.error('state.contacts no es un array:', state.contacts);
    return (
      <div>
        <h1>Error</h1>
        <p>Hubo un problema al cargar la lista de contactos.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Lista de Contactos</h1>
      <ul>
        {state.contacts.map(contact => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
