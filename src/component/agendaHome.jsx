

import { Context } from "../store/appContext"
import { useContext, useEffect } from "react";
import '../App.css'



const Agenda = ({ elemntProp}) => {
    const { store, actions } = useContext(Context)
    console.log("elemntProp", elemntProp)
    const { full_name, address, phone, email } = elemntProp;
    return (
        <>
            <div className="container">
                <button type="button" className="btn btn-success">Add new contact
                </button>
                <div className="card" style={{ width: "18rem" }}>
                    <img src="https://picsum.photos/200" className="card-img-top avatar" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{full_name}</h5>
                        <p className="card-text">{address}</p>
                        <p className="card-text">{phone}</p>
                        <p className="card-text">{email}</p>
                        <a href="#" className="btn btn-primary">Editar</a>
                        <button type="button" 
                        onClick={actions.handleEliminar}
                        href="#" 
                        className="btn btn-primary">Eliminar</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Agenda;