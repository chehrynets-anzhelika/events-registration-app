import React, { useEffect } from 'react';
import st from "./search.module.css";

const Search = ({ users, setFilteredUsers, searchValue, setSearchValue }) => {


    useEffect(() => {
            let search = users.filter(user => user.fullName.toLowerCase().includes(searchValue) || user.email.toLowerCase().includes(searchValue));
            search.length ? setFilteredUsers(search) : setFilteredUsers([]);
    }, [searchValue])

    return (
        <div className={st.wrap}>
        <div className={st.container}>
            <input type="text" placeholder="Type name or email" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className={st.input}></input>
        </div>
        
        </div>
    );
}

export default Search;
