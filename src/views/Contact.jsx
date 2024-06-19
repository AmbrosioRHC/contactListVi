import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import { FaEdit, FaTrash } from 'react-icons/fa';
import "../App.css";

const Contact = () => {
  const { state, deleteContact, updateContact } = useContext(Context);
  const [editMode, setEditMode] = useState(false);
  const [editedContact, setEditedContact] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este contacto?')) {
      deleteContact(id);
    }
  };

  const handleUpdate = (id, updatedContact) => {
    // Implementa la lógica para actualizar el contacto aquí
    console.log('Actualizar contacto:', id, updatedContact);
    // Finaliza el modo de edición
    setEditMode(false);
    setEditedContact(null);
  };

  const handleEdit = (contact) => {
    // Activa el modo de edición y guarda el contacto a editar
    setEditMode(true);
    setEditedContact(contact);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedContact(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editedContact) {
      handleUpdate(editedContact.id, editedContact);
    }
  };

  return (
    <div className="contact-list">
      <h1>Lista de Contactos</h1>
      <button className="add-button">
        <Link to="/add" style={{ color: 'white', textDecoration: 'none' }}>Agregar Contacto</Link>
      </button>
      <ul>
        {state.contacts.map(contact => (
          <li key={contact.id} className="contact-item">
            <div className="contact-info">
              <div className="contact-avatar">
                <img src="https://picsum.photos/200/300" alt="Avatar" />
              </div>
              <div className="contact-details">
                {editMode && editedContact && editedContact.id === contact.id ? (
                  <form onSubmit={handleSubmit}>
                    <input type="text" name="name" value={editedContact.name} onChange={handleChange} />
                    <input type="text" name="address" value={editedContact.address} onChange={handleChange} />
                    <input type="text" name="phone" value={editedContact.phone} onChange={handleChange} />
                    <input type="text" name="email" value={editedContact.email} onChange={handleChange} />
                    <button type="submit">Guardar</button>
                  </form>
                ) : (
                  <>
                    <h2>{contact.name}</h2>
                    <p><strong>Dirección:</strong> {contact.address}</p>
                    <p><strong>Teléfono:</strong> {contact.phone}</p>
                    <p><strong>Email:</strong> {contact.email}</p>
                  </>
                )}
              </div>
            </div>
            <div className="contact-actions">
              <button className="action-button edit-button" onClick={() => handleEdit(contact)}>
                <FaEdit />
              </button>
              <button className="action-button delete-button" onClick={() => handleDelete(contact.id)}>
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
