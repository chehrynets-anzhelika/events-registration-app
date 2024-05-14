import React, { useState, useEffect } from 'react';
import CardList from '../CardList/CardList';
import Pagination from '../Pagination/Pagination';
import getDataFromDataBase from '../../handlers/getDataFromDB';

const PaginetedCardList = () => {
    const [cards, setCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const recordsPerPage = 3;
    const lastIdx = currentPage * recordsPerPage;
    const firstIdx = lastIdx - recordsPerPage;
    const records = cards.slice(firstIdx, lastIdx);

    useEffect(() => {
             getDataFromDataBase()
             .then(response => {
                if(response) {
                    setCards(response);
                } return;
             })
    }, []);
    return (
        <>
        <CardList cards={records}/>
        <Pagination 
        cards={cards} 
        numPerPage={recordsPerPage} 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        />
        </>
    );
}

export default PaginetedCardList;
