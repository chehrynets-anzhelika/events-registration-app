import React from 'react';
import st from "./header.module.css";

const Header = () => {
    return (
        <header className={st.header}>
        <div className='container'>
            <h1 className={st.title}>Welcome to Events Registration App!</h1>
        </div>
        </header>
    );
}

export default Header;
