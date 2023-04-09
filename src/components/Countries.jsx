import React from 'react';
import SearchBar from './SearchBar';
import Filter from './Filter';
import './../styles/countries.css';

const Countries = () => {
    return (
        <main className="main-container">
            <section className="filter-container">
                <SearchBar />
                <Filter />
            </section>


            <section>
                Eventually there will be a bunch of countries listed here
            </section>
        </main>
    )
}

export default Countries;