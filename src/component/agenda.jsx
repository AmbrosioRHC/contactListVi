// src/component/agenda.jsx
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import ContactCard from "./ContactCard";

const Agenda = ({ elemntProp }) => {
    return (
        <ContactCard contact={elemntProp} />
    );
};

export default Agenda;
