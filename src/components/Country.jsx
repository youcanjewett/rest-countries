import React from 'react';
import './../styles/country.css';

const Country = () => {
    return (
        <main className="main-container">
            <button>
                <img src='arrow-left.svg' className="back-arrow" alt="back arrow"/>
                Back
            </button>

            <section className="country-container">
                <section className="flag">
                    <img src="#" alt="country flag"/>
                </section>

                <section className="country">
                    <h2 className="country-name">Belgium</h2>
                    <div className="country-details">
                        <div className="details-column">
                            <div className="details">
                                <p className="detail">Native Name:</p>
                                <p className="detail-value">België</p>
                            </div>
                            <div className="details">
                                <p className="detail">Population:</p>
                                <p className="detail-value">11,319,511</p>
                            </div>
                            <div className="details">
                                <p className="detail">Region:</p>
                                <p className="detail-value">Europe</p>
                            </div>
                            <div className="details">
                                <p className="detail">Sub Region:</p>
                                <p className="detail-value">Western Europe</p>
                            </div>
                            <div className="details">
                                <p className="detail">Capital:</p>
                                <p className="detail-value">Brussels</p>
                            </div>
                        </div>

                        <div className="details-column">
                            <div className="details">
                                <p className="detail">Top Level Domain:</p>
                                <p className="detail-value">.be</p>
                            </div>
                            <div className="details">
                                <p className="detail">Currencies:</p>
                                <p className="detail-value">Euro</p>
                            </div>
                            <div className="details">
                                <p className="detail">Languages:</p>
                                <p className="detail-value">Dutch, French, German</p>
                            </div>
                           

                        </div>
                        <div className="details-two">

                        </div>
                    </div>

                <div className="border-countries-container">
                    <p className="detail border-title">Border Countries:</p>
                    <div className="button-group">
                        <button className="border-buttons">France</button>
                        <button className="border-buttons">Germany</button>
                        <button className="border-buttons">Netherlands</button>
                    </div>
                </div>
                </section>


            </section>
        </main>
    )
}

export default Country;