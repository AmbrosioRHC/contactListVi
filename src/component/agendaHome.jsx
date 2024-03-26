import {Context} from "../store/appContext"
import { useContext, useEffect } from "react";


const Agenda = () => {
    const {store, actions} = useContext(Context)
    console.log("contact fetch", store.contactFetch[0]?.full_name)

    return (
        <>
            <div className="container">
                <button type="button" className="btn btn-success">Add new contact
                </button>
                <div className="card" style={{ width: "18rem" }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">nombre{store.contactFetch.full_name}</h5>
                        <p className="card-text">123 Hillcrest</p>
                        <p className="card-text">+56998565852</p>
                        <p className="card-text">boby.martinez@gmail.com</p>
                        <a href="#" className="btn btn-primary">Editar</a>
                        <a href="#" className="btn btn-primary">Eliminar</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Agenda;