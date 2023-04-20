import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./../styles/country.css";

const Country = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(`https://restcountries.com/v2/name/${name}`);
      const country = await response.json();
      setCountry(country);
    };

    fetchCountryData();
  }, [name]);

  return (
    <main className="main-container">
      <Link to="/countries">
        <button>
          <img src="/arrow-left.svg" className="back-arrow" alt="back arrow" />
          Back
        </button>
      </Link>

      <section >
        {country.map((info) => {
          const {
            numericCode,
            flag,
            name,
            nativeName,
            population,
            region,
            subregion,
            capital,
            topLevelDomain,
            currencies,
            languages,
            borders,
          } = info;
          return (
            <article key={numericCode} className="country-container">
              <section className="flag">
                <img src={flag} alt="country flag" />
              </section>

              <section className="country">
                <h2 className="country-name">{name}</h2>
                <div className="country-details">
                  <div className="details-column">
                    <div className="details">
                      <p className="detail">Native Name:</p>
                      <p className="detail-value">{nativeName}</p>
                    </div>
                    <div className="details">
                      <p className="detail">Population:</p>
                      <p className="detail-value">{population}</p>
                    </div>
                    <div className="details">
                      <p className="detail">Region:</p>
                      <p className="detail-value">{region}</p>
                    </div>
                    <div className="details">
                      <p className="detail">Sub Region:</p>
                      <p className="detail-value">{subregion}</p>
                    </div>
                    <div className="details">
                      <p className="detail">Capital:</p>
                      <p className="detail-value">{capital}</p>
                    </div>
                  </div>

                  <div className="details-column">
                    <div className="details">
                      <p className="detail">Top Level Domain:</p>
                      <p className="detail-value">{topLevelDomain}</p>
                    </div>
                    <div className="details">
                      <p className="detail">Currencies:</p>
                      <p className="detail-value">{currencies[0].name}</p>
                    </div>
                    <div className="details">
                      <p className="detail">Languages:</p>
                      <p className="detail-value">{languages[0].name}</p>
                    </div>
                  </div>
                </div>

                <div className="border-countries-container">
                  <p className="detail border-title">Border Countries:</p>
                  <div className="button-group">
                     {borders.map((border) => {
                      return (
                         <button className="border-buttons" key={border}>{border}</button>
                      );})}
                  </div>
                </div>
              </section>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Country;
