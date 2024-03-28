import Agenda from "../component/agendaHome"
import { useContext, useEffect, } from "react";
import {Context} from "../store/appContext"


const Home = () => {
const {store, actions} = useContext(Context)
    useEffect(()=>{
		actions.getContacts()
			}, [])



    return (
        // aca va el código que me generara componentes mediante la info del array
        <>
        {store.contactFetch?.map((elemnt, index) => {
            return <Agenda key={index} elemntProp={elemnt}/>
        })}
            
        </>
    );
};

export default Home;