const AddContact = () => {
    
    return (
        <>
            <div className="container" >
                <form className="row g-3">
                    <h1>Add a new contact</h1>
                    <div className="col-12">
                        <label for="inputFullname" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="inputFullname" placeholder="Full Name" />
                    </div>
                    <div className="col-12">
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Enter email" />
                    </div>


                    <div className="col-12">
                        <label for="inputPhone" className="form-label">Phone</label>
                        <input type="text" className="form-control" id="inputPhone" />
                    </div>

                    <div className="col-12">
                        <label for="inputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Enter address" />
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