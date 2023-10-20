import React, { useState, useEffect } from "react";
import axios from "axios";
import Api from "../utilities/Api";
import "./Countries.css";

const Countries = ({ country, defaultShow = false }) => {
  const [show, setShow] = useState(false);
  const [weathers, setweathers] = useState({});
  const countryCapital = country.capital[0];

  useEffect(() => {
    // axios
    //   .get(
    //     `${Api}/current?access_key=f2585cd8464830c185d225a7ff49012e&query=${country.capital[0]}`
    //   )
    //   .then((response) => {
    //     console.log(response.data);
    //     setweathers(response.data);
    //   });
    // setweathers()
  }, [countryCapital]);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="container" data-testid='hodiv'>
      {show || defaultShow ? (
        <div>
          <p className="for_country" data-testid='tesst'>
            {country["name"].common}
          </p>
          <p className="for_country" data-testid='test'>
            {country["capital"][0]}
          </p>
          <p className="for_country" data-testid='testy'>
            {country["area"]}
          </p>
          <p className="for_country" data-testid='languages'>
            {typeof country.languages === "object"
              ? Object.values(country["languages"]).map((val) => val)
              : country.languages}
          </p>
          <p data-testid='flatest'>{country["flag"]}</p>
          weather
          {weathers.current && (
            <>
              <p data-testid='wetest'>
                {weathers.current.temperature}oC
              </p>
              <img data-testid='imatest' src={weathers.current.weather_icons[0]} alt="weather icon" />
            </>
          )}
        </div>
      ) : (
        <div>
          {" "}
          <span data-testid='common'>
            {country["name"].common}
          </span>
          <button data-testid='button' className="btn" onClick={() => handleShow()}>
            show
          </button>
        </div>
      )}
    </div>
  );
};

export default Countries;
