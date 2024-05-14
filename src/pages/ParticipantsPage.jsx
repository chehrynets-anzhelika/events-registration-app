import React from 'react';
import { Link } from "react-router-dom";
import UserList from '../components/UserList/UserList';
import st from "../components/UserList/userList.module.css";

const ParticipantsPage = () => {


    return (
        <>
            <UserList />
            <Link to="/"><p className={st.link}>Go back to Registration</p></Link>
        </>
            
    );
}

export default ParticipantsPage;
