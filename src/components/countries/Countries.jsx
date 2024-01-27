import { useEffect, useState } from "react";
import Country from "../../country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries]= useState([]);
    const [visitedCountries, setVisitedCountries] =  useState([])
    const [visitedFlags, setVisitedFlags] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    }, [])

  const handleVisitedCountry =  country =>{
      const  newVisitedCountry = [...visitedCountries ,country]
      setVisitedCountries(newVisitedCountry)
  }
  const handleVisitedFlags = flag =>{
     console.log('adding flag');
    const newVisitedFlags = [...visitedFlags, flag]
    setVisitedFlags(newVisitedFlags)
  }
    
    return (
        // display 
        <div >
            <h3>Total Countries : {countries.length}</h3>
           <div>
            <h4>Visited Countries _{visitedCountries.length}</h4>
            <ul>
                {
                visitedCountries.map(country => <li key={country.cca3} >{country.name.common}</li>)

                }

            </ul>
           </div>
           {/* show visited flags */}

           <div className="flag-container">
            {
                visitedFlags.map(flag => <img className="img-container" src={flag}></img> )
            }
           </div>

           {/* display countries */}
         <div className="country-container">   
         {
                countries.map(country => <Country 
                    handleVisitedFlags= { handleVisitedFlags}
                    handleVisitedCountry = {handleVisitedCountry}
                country = {country}></Country>)
            }
         </div>
         
        </div>
    );
};

export default Countries;