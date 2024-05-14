import React from 'react';
import st from "./modalSelect.module.css";

const ModalSelect = ({onChange}) => {
    return (
        <div>
        <p>Where did you hear about this event?</p>
        <div className={st.wrap}>
           <label className={st.label}>
            <input type="radio" name="source" value="Social media" onChange={e => onChange(e.target.value)}/>
            Social media
        </label>
        <label className={st.label}>
            <input type="radio" name="source" value="Friends" onChange={e => onChange(e.target.value)}/>
            Friends
        </label>
        <label className={st.label}>
            <input type="radio" name="source" value="Found myself" onChange={e => onChange(e.target.value)}/>
            Found myself
        </label> 
        </div>
        
        </div>
    );
}

export default ModalSelect;
