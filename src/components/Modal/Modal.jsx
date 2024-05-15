import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalForm from '../ModalForm/ModalForm';
import ModalInput from '../ModalInput/ModalInput';
import ModalSelect from '../ModalSelect/ModalSelect';
import ModalButton from '../ModalButton/ModalButton';
import st from "./modal.module.css";
import stErr from "../../components/ModalInput/modalInput.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteId } from '../../store/eventSlice';
import saveUserInDB from '../../handlers/saveUserInDB';
import validateInput from '../../handlers/validateInput';

const Modal = () => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [selectedValue, setSelectedValue] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const eventId = useSelector(state => state.event.id);

    const saveData = () => {
        const errorMessage = validateInput(name, mail, dateOfBirth, selectedValue);
        setError(errorMessage);
        if(!Object.values(errorMessage).some(error => error !== undefined)) {
            saveUserInDB(eventId, name, mail, dateOfBirth, selectedValue, Date.now());
            handleClose();
        }
    }

    const handleClose = () => {
        navigate('/');
        dispatch(deleteId());
    }

    const focusInput = () => {
        setError("");
    }
    return (
        <div>
            <ModalForm>
                 <ModalInput title="Full name" type="text" onChange={value => setName(value)} placeholder="Enter your full name" error={error.fullName} onFocus={focusInput}/>
                 <ModalInput title="Email" type="email" onChange={value => setMail(value)} placeholder="Enter your email" error={error.email} onFocus={focusInput}/>
                 <ModalInput title="Date of birth" type="date" onChange={value => setDateOfBirth(value)} error={error.dateOfBirth} onFocus={focusInput}/>
                 <ModalSelect onChange={value => setSelectedValue(value)} error={error.source} onFocus={focusInput}/>
                 {error.all && <p className={stErr.error}>{error.all}</p>}
                <div className={st.btnWrap}>
                    <ModalButton title="Cancel" addClass={st.cancel} click={() => handleClose()} />
                    <ModalButton title="Save" click={saveData}/>
                </div>
            </ModalForm>
        </div>
    );
}

export default Modal;
