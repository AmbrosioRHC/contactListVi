import React, { useState } from 'react';

const Add = ({ onSubmit }) => {
  const [newContact, setNewContact] = useState({
    name: '',
    phone: '',
    email: '',
    address: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://playground.4geeks.com/contact/agendas/losperros/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newContact)
      });

      if (!response.ok) {
        throw new Error('Failed to add contact');
      }

      // Verificar que onSubmit sea una función antes de llamarla
      if (typeof onSubmit === 'function') {
        onSubmit(newContact); // Llamar a onSubmit con los datos del nuevo contacto
      }

      // Limpiar el formulario después de agregar el contacto
      setNewContact({ name: '', phone: '', email: '', address: '' });
    } catch (error) {
      console.error('Error adding contact:', error.message);
      // Aquí podrías manejar errores de forma adecuada (mostrar un mensaje de error, por ejemplo)
    }
  };

  return (
    <div>
      <h2>Agregar Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="name" name="name" value={newContact.name} onChange={handleInputChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Teléfono</label>
          <input type="text" className="form-control" id="phone" name="phone" value={newContact.phone} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico</label>
          <input type="email" className="form-control" id="email" name="email" value={newContact.email} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Dirección</label>
          <input type="text" className="form-control" id="address" name="address" value={newContact.address} onChange={handleInputChange} />
        </div>
        <button type="submit" className="btn btn-primary">Agregar Contacto</button>
      </form>
    </div>
  );
};

export default Add;
