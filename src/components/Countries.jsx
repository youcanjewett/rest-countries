import React, {useEffect, useState} from 'react';
import SearchBar from './SearchBar';
import Filter from './Filter';
import axios from 'axios';
import './../styles/countries.css';

const url = 'https://restcountries.com/v2/all'

const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect (() => {

        const fetchCountries = async() => {

            try {
                const results = await axios.get(url);
                console.log(results.data);
                setCountries(results.data);
            } catch (error) {
                console.log(error);
            };

            
        }
        fetchCountries();

    },[]);

    

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
                        <h2 className="country-name">{countries.name}</h2>
                        
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