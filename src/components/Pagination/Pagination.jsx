import React from 'react';
import st from "./pagination.module.css";

const Pagination = ({cards, numPerPage, currentPage, setCurrentPage}) => {
    const npage = Math.ceil(cards.length / numPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

    const prevPage = () => {
       if(currentPage !== 1) {
        setCurrentPage(currentPage - 1);
       }
    }

    const nextPage = () => {
        if(currentPage !== npage) {
            setCurrentPage(currentPage + 1);
           }
    }

    const changeCurrentPage = (id) => {
        setCurrentPage(id);
    }

    return (
        <div className={st.wrap}>
          <nav>
            <ul className={st.paginationList}>
                <a href="#" onClick={prevPage} className={`${st.paginationLink} ${currentPage === 1 ? st.disable : ""}`}><img className={st.prevArrow} src="images/arrow.svg"/></a>
                {
                    numbers.map((num, idx) => (
                        <li key={idx} className={`${st.paginationLinkWrap} ${currentPage === num ? st.active : ""}`} onClick={() => changeCurrentPage(num)}>
                            <a href="#" className={st.paginationLink}>{num}</a>
                        </li>
                    ))
                }
                <a href="#" onClick={nextPage} className={`${st.paginationLink} ${currentPage === npage ? st.disable : ""}`}><img src="images/arrow.svg"/></a>
            </ul>
          </nav>
            
        </div>
    );
}

export default Pagination;
