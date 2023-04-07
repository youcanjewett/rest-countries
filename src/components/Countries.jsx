import React from 'react';
import SearchBar from './SearchBar';
import Filter from './Filter';

const Countries = () => {
    return (
        <>
        <div>
            <SearchBar />
            <Filter />
        </div>


        <div>
            Eventually there will be a bunch of countries listed here
        </div>
        </>
    )
}

export default Countries;