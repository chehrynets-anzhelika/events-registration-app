import React, { useState, useEffect } from 'react';
import getUsersFromDB from '../../handlers/getUsersFromDB';
import User from '../User/User';
import { useSelector } from "react-redux";
import st from "./userList.module.css";
import stTitle from "../Card/card.module.css";
import Search from '../Search/Search';

const UserList = () => {
    const [eventName, setEventName] = useState("");
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchValue, setSearchValue] = useState(""); 
    const [noUsersMessage, setNoUsersMessage] = useState("");
    const displayUsers = filteredUsers.length || searchValue ? filteredUsers : users;

    const eventId = useSelector(state => state.event.id);
    const eventTitle = useSelector(state => state.event.title);

    useEffect(() => {
        getUsersFromDB(eventId)
            .then(result => {
                if (result !== null) {
                    setUsers(result);
                    setEventName(eventTitle);
                } else {
                    setUsers([]);
                    setEventName(eventTitle);
                }
            })
    }, [eventId, eventTitle]);

    useEffect(() => {
        if(!users.length) {
            setNoUsersMessage("No participants registered for this event"); 
        } else if(searchValue && !filteredUsers.length) {
            setNoUsersMessage("No participants found");
        } else {
            setNoUsersMessage("");
        }

    }, [users.length, filteredUsers.length, searchValue]);

    return (
        <>
        <Search users={users} setFilteredUsers={setFilteredUsers} searchValue={searchValue} setSearchValue={setSearchValue}/>
           <div className={st.wrap}>
            <h2 className={stTitle.title}>{eventName} participants</h2>
            <ul className={st.list}>
            { 
                noUsersMessage ? <p>{noUsersMessage}</p> : displayUsers.map(user => (
                    <li key={user.userId} className={st.item}>
                        <User {...user} />
                    </li>
                )) 
            }
        </ul>
        </div> 
        </>
        
        
    );
}

export default UserList;
