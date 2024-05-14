import React from 'react';
import stBtn from "../Card/card.module.css";

const ModalButton = ({title, click, addClass}) => {
    return (
        <button type='button' onClick={click} className={`${stBtn.btn} ${addClass}`}>
            {title}
        </button>
    );
}

export default ModalButton;
