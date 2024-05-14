import React from 'react';
import { useNavigate } from 'react-router-dom';
import st from "./modalform.module.css";
import { useDispatch } from "react-redux";
import { deleteId } from '../../store/eventSlice';

const ModalForm = ({ children }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClose = (e) => {
        if(e.target === e.currentTarget || e.target.className === st.close) {
            navigate('/');
            dispatch(deleteId());
        }
    };

    return (
        <div className={st.modal} onClick={handleClose}>
            <form className={st.content}>
            <div className={st.header}>
                <h2 className={st.title}>Event registration</h2>
                <span className={st.close}>&times;</span>
            </div>
            <div className={st.body}>
                {children}
            </div>
            </form>
        </div>
    );
}

export default ModalForm;
