import React from 'react';
import { Link } from "react-router-dom";
import  st  from "./card.module.css";
import { useDispatch } from "react-redux";
import { saveId } from '../../store/eventSlice';

const Card = ({title, description, event_date, organizer, id}) => {
   const dispatch = useDispatch();
   
   const saveEventId = (id, title) => {
    dispatch(saveId({id, title}));

  }

    return (
        <div className={st.wrap}>
          <h2 className={st.title}>{title}</h2>
          <div className={st.content}>
            <p className={st.desc}>{description}</p>
            <div>
              <time className={st.date}><span className={st.info}>Date:</span> {event_date}</time>
              <p className={st.organ}><span className={st.info}>Organizer:</span> {organizer}</p>
            </div>
            
          </div>
          
          
          <div className={st.btnWrap}>
          <Link to={`/registration`} className={st.btnText}><button className={st.btn} onClick={() => saveEventId(id, title)}>Registration</button></Link>
          <Link to="/participants" className={st.btnText}><button className={st.btn} onClick={() => saveEventId(id, title)}>View</button></Link>
          </div> 
        </div>
    );
}

export default Card;
