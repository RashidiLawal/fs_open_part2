import { useState, useEffect } from "react";
import axios from "axios";

const ShowCountryView = ({country, defaultShow=false}) =>{
  const[show, setShow]= useState(false)
  const [weathers, setweathers] = useState({});
  const countryCapital= country.capital[0]

  useEffect(() => {
    axios.get(`http://api.weatherstack.com/current?access_key=f2585cd8464830c185d225a7ff49012e&query=${country.capital[0]}`).then((response) => {
      
    console.log(response.data)
    setweathers(response.data)
    });
   }, [countryCapital]);

    


  return (
    <>
    {
      show||defaultShow ? (<div>
      <p>{country["name"].common}</p>
      <p>{country["capital"][0]}</p>
      <p>{country["area"]}</p>
      <p>{ typeof country.languages ==="object"?  Object.values(country["languages"]).map(val => val): country.languages}</p>
      <p>{country["flag"]}</p>
      weather
      {
        weathers.current && <> <p>{weathers.current.temperature}oC</p>
        <img src={weathers.current.weather_icons[0]} alt="" />
  </>
      }
    </div>):( <div> <span>{country["name"].common}</span>
      <button onClick={()=>setShow(true)}>show</button></div>
    )
  
    }
  </>
 
);

}

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(null);
  

  const handleCountrySearch = (e) => {
    setQuery(e.target.value)
  };

 
  const filteredCountry = countries.filter((country) =>
  country.name.common
    .toLowerCase()
    .includes(query.trim().toLowerCase())
);

  const showCountry = (country) => {
    setShow(country["name"].common);
    ShowCountryView(country);
  };
 
  const countryToShow=query.trim()? filteredCountry :[]

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
      console.log(response.data);
    });
  }, []);


  return (
    <div>
      <form onSubmit={handleCountrySearch} >
        find countries
        <input
          type="search"
          placeholder="search"
          value={query}
          onChange={handleCountrySearch}
        />
      </form>
      <div>
        { countryToShow.length === 0 ? "Type something to search" : countryToShow.length === 1 ? (
          <div>
            {countryToShow.map((country, countryIndex) => (
            <ShowCountryView defaultShow={true} country={country} key={`key_${countryIndex}`}/>

            ))}
            
          </div>
        ): countryToShow.length > 1 && countryToShow.length < 10 ? 
        countryToShow.map((country, countryIndex) => 
             <ShowCountryView country={country} key={`key_${countryIndex}`}/>
        
      ) : ( <p> Too many matches, specify another filter</p>)
      }
      </div>
    </div>
  );
}

export default App;
