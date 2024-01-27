import { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    console.log(country);
    const {name, flags, area, population, cca3} = country;

    const [visited, setVisited] = useState(false)

    const handleVisited = () =>{
        setVisited (!visited) 
    }

    return (
        <div className={`country ${visited ? 'visited' : 'nonevisted'}` }>
            <h2>{name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Area :{area}</p>
            <h4>Population : {population}</h4>
            <h4>Code {cca3}</h4>
            <button className='btn' onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flag</button> <br />
           <button onClick={() =>handleVisitedCountry (country)} className='mark-btn'>Mark Visited</button>
           <br />
           <button onClick={handleVisited} className='btn'>{visited ? 'Visited' : 'Gooing'}</button>
           
           {
            (visited ? 'I Have visited this place ' : 'I want to to visit this place')
           }
          
   
   
     
        </div>
    );
};

export default Country;