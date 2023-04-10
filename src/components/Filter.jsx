import React from 'react';
import './../styles/filter.css';

const Filter = () => {

    /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
    const openDropdown = () => {
        let dropdown = document.getElementById("myDropdown");
        if (dropdown.style.display === 'none')
            dropdown.style.display = 'block';
        else {
            dropdown.style.display = 'none';
        }
    }
    
    return (
        <div class="dropdown">
            <button onClick={openDropdown} className="dropbtn">
                Filter by Region
                <img src='chevron-down.svg' className="chevron" alt="chevron down"/>
            </button>
            <div id="myDropdown" class="dropdown-content">
                <a href="#africa">Africa</a>
                <a href="#america">America</a>
                <a href="#asia">Asia</a>
                <a href="#europe">Europe</a>
                <a href="#oceania">Oceania</a>
            </div>
        </div>
    )
}

export default Filter;