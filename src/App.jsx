import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { injectContext } from './store/appContext.jsx';
import AddingContact from './views/AddContact';
import Contact from './views/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container mt-4">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Contact Manager
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/add">
                    Agregar Contacto
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Ver Lista de Contactos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/add" element={<AddingContact />} />
          <Route path="/contact" element={<Contact />} />
          {/* Puedes añadir más rutas según sea necesario */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default injectContext(App);
