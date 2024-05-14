import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalForm from '../ModalForm/ModalForm';
import ModalInput from '../ModalInput/ModalInput';
import ModalSelect from '../ModalSelect/ModalSelect';
import ModalButton from '../ModalButton/ModalButton';
import st from "./modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteId } from '../../store/eventSlice';
import saveUserInDB from '../../handlers/saveUserInDB';

const Modal = () => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [selectedValue, setSelectedValue] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const eventId = useSelector(state => state.event.id);

    const saveData = () => {
        saveUserInDB(eventId, name, mail, dateOfBirth, selectedValue, Date.now());
        handleClose();
    }

    const handleClose = () => {
        navigate('/');
        dispatch(deleteId());
    }
    return (
        <div>
            <ModalForm>
                 <ModalInput title="Full name" type="input" onChange={value => setName(value)} placeholder="Enter your full name"/>
                 <ModalInput title="Email" type="mail" onChange={value => setMail(value)} placeholder="Enter your email"/>
                 <ModalInput title="Date of birth" type="date" onChange={value => setDateOfBirth(value)}/>
                 <ModalSelect onChange={value => setSelectedValue(value)}/>
                <div className={st.btnWrap}>
                    <ModalButton title="Cancel" addClass={st.cancel} click={() => handleClose()} />
                    <ModalButton title="Save" click={saveData}/>
                </div>
            </ModalForm>
        </div>
    );
}

export default Modal;
