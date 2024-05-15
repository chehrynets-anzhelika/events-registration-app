import React, { useState, useEffect } from 'react';
import CardList from '../CardList/CardList';
import Pagination from '../Pagination/Pagination';
import getDataFromDataBase from '../../handlers/getDataFromDB';
import Sort from '../Sort/Sort';

const PaginatedCardList = () => {
    const [cards, setCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortValue, setSortValue] = useState("");
    const [sortedCards, setSortedCards] = useState([]);

    const recordsPerPage = 3;
    const lastIdx = currentPage * recordsPerPage;
    const firstIdx = lastIdx - recordsPerPage;

    useEffect(() => {
             getDataFromDataBase()
             .then(response => {
                if(response) {
                    setCards(response);
                } return;
             })
    }, []);

    useEffect(() => {
        const sorted = [...cards];
        if(sortValue === "title") {
            sorted.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
        } else if(sortValue === "date") {
            sorted.sort((a, b) =>  new Date(a.event_date) - new Date(b.event_date));
        } else if(sortValue === "organizer") {
            sorted.sort((a, b) =>  a.organizer.toLowerCase().localeCompare(b.organizer.toLowerCase()));
        }
        setSortedCards(sorted.slice(firstIdx, lastIdx));

    }, [sortValue, cards, currentPage]);

    const sortHandler = (e) => {
          setSortValue(e.target.getAttribute("data-name"));
    }

    return (
        <div>
        <Sort click={sortHandler} sortValue={sortValue}/>
        <CardList cards={sortedCards}/>
        <Pagination 
        cards={cards} 
        numPerPage={recordsPerPage} 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        />
        </div>
    );
}

export default PaginatedCardList;
