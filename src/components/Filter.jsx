
import React, { useEffect } from "react";
import "./../styles/filter.css";

const Filter = ({ countries, setFilteredCountries }) => {
    const regions = [
        {
          name: "Filter by region",
        },
        {
          name: "Africa",
        },
        {
          name: "Americas",
        },
        {
          name: "Asia",
        },
        {
          name: "Europe",
        },
        {
          name: "Oceania",
        },
      ]


  const filterRegions = (region) => {
    const filteredCountries = countries.filter(
      (country) => country.region.toLowerCase() === region.toLowerCase()
    );
    setFilteredCountries(filteredCountries);
  };

  useEffect(() => {
   
    filterRegions();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="dropbtn"> 
        <select
            name="select"
            id="select"
            className="select"
            onChange={(e) => filterRegions(e.target.value)}
            value={regions.name}
        >
            <option value="Africa">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Americas">America</option>
            <option value="Oceania">Oceania</option>
    </select>
   
</div>

)
}

export default Filter;
