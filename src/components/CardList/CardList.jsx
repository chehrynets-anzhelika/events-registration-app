import React from 'react';
import Card from '../Card/Card';
import st from "./cardList.module.css";

const CardList = ({cards}) => {


    return (
        <ul className={st.list}>
          {
            cards.map(card => (
                <li key={card.id} className={st.card}>
                    <Card {...card}/>
                </li>
            ))
          }
        </ul>
    );
}

export default CardList;
