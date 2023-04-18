import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import SearchBar from './SearchBar';
import Filter from './Filter';
import axios from 'axios';
import './../styles/countries.css';

const url = 'https://restcountries.com/v2/all'

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect (() => {

        const fetchCountries = async() => {

            try {
                const results = await axios.get(url);
                setCountries(results.data);
            } catch (error) {
                console.log(error);
            };

            
        }
        fetchCountries();

    },[]);

    

    return (
        
        < >
            <section className="filter-container">
                <SearchBar />
                <Filter 
                countries = {countries}
                setCountries={setCountries}
                setFilteredCountries={setFilteredCountries}
                    />
            </section>

            {filteredCountries.length !== 0 ? (
                <section className="country-grid">
                {filteredCountries.map((country) => {
                    const {numericCode, name, flag, population, region, capital} = country
                    
                return (
                <Link to={`/${name}`} key={numericCode} >
                    <article>
                        <div className="country-card">

                        <img src={flag} alt={name} />
                        <div className="country-snapshot">
                            <h2 className="country-name">{name}</h2>
                            
                            <div className="country-stat">
                                <p className="stat-name">Population:</p>
                                <p className="stat-value">{population}</p>
                            </div>
                            <div className="country-stat">
                                <p className="stat-name">Region:</p>
                                <p className="stat-value">{region}</p>
                            </div>
                            <div className="country-stat">
                                <p className="stat-name">Capital:</p>
                                <p className="stat-value">{capital}</p>
                            </div>
                        </div>
                        </div>
                    </article>
                </Link>
                )
                })}
            </section>
            ) : (


            <section className="country-grid">
                {countries.map((country) => {
                    const {numericCode, name, flag, population, region, capital} = country
                    
                return (
                <Link to={`/${name}`} key={numericCode} >
                    <article>
                        <div className="country-card">

                        <img src={flag} alt={name} />
                        <div className="country-snapshot">
                            <h2 className="country-name">{name}</h2>
                            
                            <div className="country-stat">
                                <p className="stat-name">Population:</p>
                                <p className="stat-value">{population}</p>
                            </div>
                            <div className="country-stat">
                                <p className="stat-name">Region:</p>
                                <p className="stat-value">{region}</p>
                            </div>
                            <div className="country-stat">
                                <p className="stat-name">Capital:</p>
                                <p className="stat-value">{capital}</p>
                            </div>
                        </div>
                        </div>
                    </article>
                </Link>
                )
                })}
            </section>
            )}
        </>
    )
}

export default Countries;