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
    default:
      return state;
  }
};


export const injectContext = (Component) => {
  const Wrapper = (props) => {
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

    return (
      <Context.Provider value={{ state, dispatch }}>
        <Component {...props} />
      </Context.Provider>
    );
  };

  return Wrapper;
};
