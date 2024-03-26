import Agenda from "../component/agendaHome"
import { useContext, useEffect } from "react";
import {Context} from "../store/appContext"


const Home = () => {
const {store, actions} = useContext(Context)
    useEffect(()=>{
		actions.getContacts()
			}, [])


    return (
        <>
            <Agenda/>
        </>
    );
};

export default Home;