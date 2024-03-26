

import {Context} from "../store/appContext"
import { useContext, useEffect } from "react";
import '../App.css'



const Agenda = () => {
    const {store, actions} = useContext(Context)
    console.log("contact fetch", store.contactFetch[0])

    return (
        <>
            <div className="container">
                <button type="button" className="btn btn-success">Add new contact
                </button>
                <div className="card" style={{ width: "18rem" }}>
                    <img src="https://picsum.photos/200" className="card-img-top avatar" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{store.contactFetch[0]?.full_name}</h5>
                        <p className="card-text">{store.contactFetch[0]?.address}</p>
                        <p className="card-text">{store.contactFetch[0]?.phone}</p>
                        <p className="card-text">{store.contactFetch[0]?.email}</p>
                        <a href="#" className="btn btn-primary">Editar</a>
                        <a href="#" className="btn btn-primary">Eliminar</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Agenda;