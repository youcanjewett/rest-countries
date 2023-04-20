import React, {useEffect} from  'react';
import './../styles/searchbar.css';



const SearchBar = ({setFilteredCountries, setSearchInput, countries}) => {

  

    useEffect(() => {
        const countrySearch = async (input) => {
            setSearchInput(input);
            let errormsg = document.getElementById("errormsg");

            if (errormsg.style.display === "flex") {
                errormsg.style.display = "none";
              }
    
               if (input) {
                const userCountry = countries.filter(
                    (country) => country.name.toLowerCase() === input.toLowerCase()
                  ); 

                  userCountry.length !== 0? setFilteredCountries(userCountry) : errormsg.style.display = "flex";
                } else {
                    setFilteredCountries([]);               
                }
              
          };

        // Get the input field
        var input = document.getElementById("userInput");

        input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            countrySearch(input.value);
  }

  
}); 

        
    }, [setSearchInput, countries, setFilteredCountries])

    


    return (
        <>
        <div className="search-bar">
            <img src="icon-search.svg" className="search-icon"  alt="search"/>
            <input type="search" id = "userInput" placeholder='Search for a country...' className="user-input"/>
        <div className="error-msg" id="errormsg">No matches</div>
        </div>
        </>
    )
}

export default SearchBar;