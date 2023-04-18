
import React, { useEffect } from "react";
import "./../styles/filter.css";

const Filter = ({ countries, setCountries, setFilteredCountries }) => {

  /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
  const toggleDropdown = () => {
    let dropdown = document.getElementById("myDropdown");
    if (dropdown.style.display === "none") dropdown.style.display = "block";
    else {
      dropdown.style.display = "none";
    }
  };

  const filterRegions = (region) => {
    const filteredCountries = countries.filter(
      (country) => country.region.toLowerCase() === region.toLowerCase()
    );
    setFilteredCountries(filteredCountries);

    toggleDropdown();
  };

  useEffect(() => {
   
    filterRegions();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="dropdown">
    <button onClick={toggleDropdown} className="dropbtn">
        Filter by Region
        <img src='chevron-down.svg' className="chevron" alt="chevron down"/>
    </button>
    <div id="myDropdown" className="dropdown-content">
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
