import React, { useState, useEffect } from 'react';
import getUsersFromDB from '../../handlers/getUsersFromDB';
import User from '../User/User';
import { useSelector } from "react-redux";
import st from "./userList.module.css";
import stTitle from "../Card/card.module.css";

const UserList = () => {
    const [eventName, setEventName] = useState("");
    const [users, setUsers] = useState([]);

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

    return (
        <div className={st.wrap}>
            <h2 className={stTitle.title}>{eventName} participants</h2>
            <ul className={st.list}>
            {
                users.length ? <>
                    {users.map(user => (
                        <li key={user.userId} className={st.item}>
                            <User {...user} />
                        </li>
                    ))}
                </> : <p>There aren't any participants</p>
            }
        </ul>
        </div>
        
    );
}

export default UserList;
