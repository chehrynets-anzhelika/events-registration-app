import React from 'react';
import st from "./modalInput.module.css";

const ModalInput = ({ title, type, onChange, value, placeholder }) => {
    return (
        <div className={st.body}>
            <label htmlFor={title} className={st.label} />
            {title}
            <input id={title} className={st.input} type={type} onChange={e => onChange(e.target.value)} value={value} placeholder={placeholder}/>
        </div>
    );
}

export default ModalInput;
