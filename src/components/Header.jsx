import React, {useState, useEffect}from 'react';
import './../styles/globals.css';
import './../styles/header.css';

const Header = () => {

    const [altTheme, setAltTheme] = useState('dark');


    useEffect(() => {
        const toggleSwitch = document.querySelector('.theme-label input[type="checkbox"]');
        var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    
        toggleSwitch.addEventListener('change', switchTheme, false);
    
        if (storedTheme) {
          document.documentElement.setAttribute('data-theme', storedTheme);
          setAltTheme(storedTheme === 'light' ? "dark" : "light");
    
          if (storedTheme === 'dark') {
              toggleSwitch.checked = true;
              
          } 
      }
    
      },[]);

      function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark'); 
            setAltTheme("light");
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light'); 
            setAltTheme("dark");
        }    
    }
    return (
        <header className="header">
            <h1>Where in the world?</h1>
            
            <div className="theme-container">
                <label htmlFor="themeId" className="theme-label">
                    <input type="checkbox" className="theme-checkbox" id="themeId"/>
                    <p>{altTheme === 'light' ? 'Light Mode' : 'Dark Mode'}</p> 
                </label>
            </div>
        </header>
    )
}

export default Header;