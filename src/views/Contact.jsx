import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const Contact = () => {
  const { state } = useContext(Context);

  return (
    <div>
      <h2>Contactos en losperros:</h2>
      {state.contacts.map(contact => (
        <div key={contact.id}>
          <p>Nombre: {contact.name}</p>
          <p>Teléfono: {contact.phone}</p>
          <p>Email: {contact.email}</p>
          <p>Dirección: {contact.address}</p>
        </div>
      ))}
    </div>
  );
};

export default Contact;
