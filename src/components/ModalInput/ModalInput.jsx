import React from 'react';
import st from "./modalInput.module.css";

const ModalInput = ({ title, type, onChange, value, placeholder, error, onFocus }) => {
    return (
        <div className={st.body}>
            <label htmlFor={title} className={st.label} />
            {title}
            <input 
             id={title}
             className={st.input}
             type={type}
             onChange={e => onChange(e.target.value)}
             value={value}
             placeholder={placeholder}
             onFocus={onFocus}
             required={true}/>
            {error && <p className={st.error}>{error}</p>}
        </div>
    );
}

export default ModalInput;
