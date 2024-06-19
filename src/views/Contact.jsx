import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la navegación
import { Context } from '../store/appContext';
import { FaEdit, FaTrash } from 'react-icons/fa';
import '../App.css';

const Contact = () => {
  const { state } = useContext(Context);

  useEffect(() => {
    console.log('Estado actual de los contactos:', state.contacts);
  }, [state.contacts]);

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
    <div className="contact-list">
      <h1>Lista de Contactos</h1>
      <Link to="/add" className="add-button">Agregar Contacto</Link>
      <ul>
        {state.contacts.map(contact => (
          <li key={contact.id} className="contact-item">
            <div className="contact-info">
              <div className="contact-avatar">
                <img src="https://picsum.photos/200/300" alt="Avatar" className="avatar" />
              </div>
              <div className="contact-details">
                <h2>{contact.name}</h2>
                <p><strong>Dirección:</strong> {contact.address}</p>
                <p><strong>Teléfono:</strong> {contact.phone}</p>
                <p><strong>Email:</strong> {contact.email}</p>
              </div>
            </div>
            <div className="contact-actions">
              <button className="action-button edit-button"><FaEdit /></button>
              <button className="action-button delete-button"><FaTrash /></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
