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


            <section className="countries-container">
                <div className="country-card">
                    <img src="" alt="flag" className="country-flag"/>
                    <div className="country-snapshot">
                        <h2 className="country-name">Germany</h2>
                        
                        <div className="country-stat">
                            <p className="stat-name">Population:</p>
                            <p className="stat-value">81,770,900</p>
                        </div>
                        <div className="country-stat">
                            <p className="stat-name">Region:</p>
                            <p className="stat-value">Europe</p>
                        </div>
                        <div className="country-stat">
                            <p className="stat-name">Capital:</p>
                            <p className="stat-value">Berlin</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Countries;