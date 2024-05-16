import React from 'react';
import st from "./modalSelect.module.css";
import stErr from "../ModalInput/modalInput.module.css";

const ModalSelect = ({onChange, error}) => {
    return (
        <div>
        <p>Where did you hear about this event?</p>
        <div className={st.wrap}>
           <label className={st.label}>
            <input className={st.radio} type="radio" name="source" value="Social media" onChange={e => onChange(e.target.value)}/>
            <span className={st.radioStyle}></span>
            Social media
        </label>
        <label className={st.label}>
            <input className={st.radio} type="radio" name="source" value="Friends" onChange={e => onChange(e.target.value)}/>
            <span className={st.radioStyle}></span>
            Friends
        </label>
        <label className={st.label}>
            <input className={st.radio} type="radio" name="source" value="Found myself" onChange={e => onChange(e.target.value)}/>
            <span className={st.radioStyle}></span>
            Found myself
        </label> 
        </div>
        {error && <p className={stErr.error}>{error}</p>}
        
        </div>
    );
}

export default ModalSelect;
