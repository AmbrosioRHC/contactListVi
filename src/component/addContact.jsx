import { useContext } from "react";
import { Context } from "../store/appContext";

const AddContact = () => {
    
    const {store, actions} = useContext(Context);
    return (
        <>
            <div className="container" >
                <form className="row g-3">
                    <h1>Add a new contact</h1>
                    <div className="col-12">
                        <label  className="form-label">Full Name</label>
                        <input 
                        onChange={actions.handleChange}
                        type="text" 
                        className="form-control" 
                        id="inputFullname" 
                        placeholder="Full Name" 
                        name="full_name"/>
                    </div>
                    <div className="col-12">
                        <label  className="form-label">Email</label>
                        <input 
                        onChange={actions.handleChange}
                        type="email" 
                        className="form-control" 
                        id="inputEmail4" 
                        placeholder="Enter email" 
                        name="email"/>
                    </div>


                    <div className="col-12">
                        <label  className="form-label">Phone</label>
                        <input 
                        onChange={actions.handleChange}
                        type="text" 
                        className="form-control" 
                        id="inputPhone" 
                        name="phone"/>
                    </div>

                    <div className="col-12">
                        <label  className="form-label">Address</label>
                        <input 
                        onChange={actions.handleChange}
                        type="text" 
                        className="form-control" 
                        id="inputAddress" 
                        placeholder="Enter address" 
                        name="address"/>
                    </div>




                    <div className="col-12">
                        <button type="submit" className="btn btn-primary col-12">save</button>
                    </div>
                    <p>or get back to contacts</p>
                </form>
            </div>
        </>
    )
}

export default AddContact;