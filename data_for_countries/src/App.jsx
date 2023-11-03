import { useState, useEffect } from "react";
// import { createRoot } from 'react-dom/client';
import axios from "axios";
import CountryInformation from "./components/CountryInformation.jsx";
import { Api2nd } from "./utilities/Api.jsx";
import "./App.css";

// const Countries = ({country, defaultShow=false}) =>{
//   const[show, setShow]= useState(false)
//   const [weathers, setweathers] = useState({});
//   const countryCapital= country.capital[0]

//   useEffect(() => {
//     axios.get(`http://api.weatherstack.com/current?access_key=f2585cd8464830c185d225a7ff49012e&query=${country.capital[0]}`).then((response) => {

//     console.log(response.data)
//     setweathers(response.data)
//     });
//    }, [countryCapital]);

//   return (
//     <>
//     {
//       show||defaultShow ? (<div>
//       <p>{country["name"].common}</p>
//       <p>{country["capital"][0]}</p>
//       <p>{country["area"]}</p>
//       <p>{ typeof country.languages ==="object"?  Object.values(country["languages"]).map(val => val): country.languages}</p>
//       <p>{country["flag"]}</p>
//       weather
//       {
//         weathers.current && <> <p>{weathers.current.temperature}oC</p>
//         <img src={weathers.current.weather_icons[0]} alt="" />
//   </>
//       }
//     </div>):( <div> <span>{country["name"].common}</span>
//       <button onClick={()=>setShow(true)}>show</button></div>
//     )

//     }
//   </>

// );

// }

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(null);

  const handleCountrySearch = (e) => {
    setQuery(e.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(query.trim().toLowerCase())
  );

  const showCountry = (country) => {
    setShow(country["name"].common);
    CountryInformation(country);
  };

  const countriesToShow = query.trim() ? filteredCountries : [];

  useEffect(() => {
    axios.get(`${Api2nd}`).then((response) => {
      setCountries(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="container">
      <form onSubmit={handleCountrySearch} className="border-lime-400">
        <header className="input">find countries</header>
        <input
          data-testid="input"
          type="search"
          placeholder="search"
          value={query}
          onChange={handleCountrySearch}
          className="inputer"
        />
      </form>
      <div>
        {countriesToShow.length === 0 ? (
          <p className="para">Type something to search</p>
        ) : countriesToShow.length === 1 ? (
          <div>
            {countriesToShow.map((country, countryIndex) => (
              <CountryInformation
                defaultShow={true}
                country={country}
                key={`key_${countryIndex}`}
              />
            ))}
          </div>
        ) : countriesToShow.length > 1 && countriesToShow.length < 10 ? (
          countriesToShow.map((country, countryIndex) => (
            <CountryInformation country={country} key={`key_${countryIndex}`} />
          ))
        ) : (
          <p className="para"> Too many matches, specify another filter</p>
        )}
      </div>
    </div>
  );
}

export default App;
