import React from 'react';
import SearchBar from './SearchBar';
import Filter from './Filter';
import './../styles/countries.css';

const Countries = () => {
    return (
        <main className="main-container">
            <div className="filter-container">
                <SearchBar />
                <Filter />
            </div>


            <div>
                Eventually there will be a bunch of countries listed here
            </div>
        </main>
    )
}

export default Countries;