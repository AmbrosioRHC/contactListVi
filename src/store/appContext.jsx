import React, { createContext, useReducer, useEffect } from 'react';

export const Context = createContext();

const initialState = {
  contacts: [], // Estado inicial vacío para los contactos
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_CONTACTS_SUCCESS':
      return {
        ...state,
        contacts: action.payload.contacts, // Asigna directamente el array de contactos
        error: null,
      };
    case 'FETCH_CONTACTS_FAILURE':
      return {
        ...state,
        error: action.payload,
      };
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload),
      };
    case 'UPDATE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id ? { ...contact, ...action.payload.updatedContact } : contact
        ),
      };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('https://playground.4geeks.com/contact/agendas/losperros/contacts');
      if (!response.ok) {
        throw new Error('Failed to fetch contacts');
      }
      const data = await response.json();
      dispatch({ type: 'FETCH_CONTACTS_SUCCESS', payload: data });
    } catch (error) {
      console.error('Error fetching contacts:', error);
      dispatch({ type: 'FETCH_CONTACTS_FAILURE', payload: error.message });
    }
  };

  const deleteContact = async (id) => {
    try {
      const response = await fetch(`https://playground.4geeks.com/contact/agendas/losperros/contacts/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete contact');
      }
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const updateContact = async (id, updatedContact) => {
    try {
      const response = await fetch(`https://playground.4geeks.com/contact/agendas/losperros/contacts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedContact),
      });
      if (!response.ok) {
        throw new Error('Failed to update contact');
      }
      const data = await response.json();
      dispatch({ type: 'UPDATE_CONTACT', payload: { id, updatedContact: data } });
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  return (
    <Context.Provider value={{ state, dispatch, deleteContact, updateContact }}>
      {children}
    </Context.Provider>
  );
};
