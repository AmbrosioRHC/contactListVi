// src/component/ContactCard.jsx
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const ContactCard = ({ contact }) => {
    const { actions } = useContext(Context);
    const [showModal, setShowModal] = useState(false);

    const handleEdit = () => {
        actions.setContactData(contact);
    };

    const handleDelete = () => {
        setShowModal(true);
    };

    const confirmDelete = () => {
        actions.handleEliminar(contact.id);
        setShowModal(false);
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{contact.full_name}</h5>
                <p className="card-text">{contact.email}</p>
                <p className="card-text">{contact.phone}</p>
                <p className="card-text">{contact.address}</p>
                <button className="btn btn-primary" onClick={handleEdit}>Edit</button>
                <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
            </div>

            {/* Modal for delete confirmation */}
            {showModal && (
                <div className="modal show d-block" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirm Delete</h5>
                                <button type="button" className="close" onClick={() => setShowModal(false)}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete this contact?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                                <button type="button" className="btn btn-danger" onClick={confirmDelete}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactCard;
