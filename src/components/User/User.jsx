import React from 'react';
import st from "./user.module.css";

const User = ({fullName, email, selectedValue}) => {
    return (
        <div className={st.wrap}>
        <div className={st.item}>
        <img src="images/user.svg" width={15} height={15} alt="user-icon"/>
        <p className={st.text}>{fullName}</p>
        </div>
        <div className={st.item}>
        <img src="images/mail.svg" width={15} height={15} alt="mail-icon"/>
        <p className={st.text}>{email}</p>
        </div>
        <div className={st.item}>
        <img src="images/chat.svg" width={15} height={15} alt="chat-icon"/>
        <p className={st.text}>Source: {selectedValue}</p>
        </div>
        </div>
    );
}

export default User;
