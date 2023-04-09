import React from  'react';
import './../styles/searchbar.css';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <img src="icon-search.svg" className="search-icon"  />
            <input type="text" placeholder='Search for a country...' className="user-input"/>
        </div>
    )
}

export default SearchBar;