import React, { useState } from 'react';
import st from "./sort.module.css";
import stBtn from "../Card/card.module.css";
import OutsideClickHandler from 'react-outside-click-handler';

const Sort = ({ click, sortValue }) => {
    const sortedItems = [
        {
            "data-name": "title",
            value: "Title"
        },
        {
            "data-name": "date",
            value: "Event Date"
        },
        {
            "data-name": "organizer",
            value: "Organizer"
        },
    ]
    const [open, setOpen] = useState(false);
    return (
        <OutsideClickHandler onOutsideClick={() => {
            if (open) {
                setOpen(false)
            }
        }}>
            <div className={st.wrap}>
                <div className={st.sortContainer}>
                    <button onClick={() => setOpen(!open)} className={`${stBtn.btn} ${st.btnSort}`}>Sort</button>
                    {open && <ul onClick={click} className={st.list}>
                        {
                            sortedItems.map(item => (
                                <li key={item.value} data-name={item["data-name"]} className={`${st.item} ${sortValue === item["data-name"] ? st.checked : ""}`}>{item.value}</li>
                            ))
                        }
                    </ul>}
                </div>
            </div>
        </OutsideClickHandler>

    );
}

export default Sort;
