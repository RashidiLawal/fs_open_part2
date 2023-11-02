import React, { useState, useEffect } from "react";
import axios from "axios";
import Api from "../utilities/Api";
import "./Countries.css";

const Countries = ({ country, defaultShow = false }) => {
  const [show, setShow] = useState(false);
  const [weathers, setWeathers] = useState({});
  const countryCapital = country.capital[0];

  useEffect(() => {
    axios
      .get(
        `${Api}${country.capital[0]}`
      )
      .then(response => setWeathers(response.data))     
      .catch(console.error);     
  }, [countryCapital, setWeathers]);

  const handleShow = () => {
    setShow(!show);
  };
  console.log(weathers);
  return (
    <div className="container">
      {show || defaultShow ? (
        <div>
          <p className="country">{country["name"].common}</p>
          <p className="capital">{country["capital"][0]}</p>
          <p className="area">{country["area"]}</p>
          <p className="languages">
            {typeof country.languages === "object"
              ? Object.values(country["languages"]).map((val) => val)
              : country.languages}
          </p>
          <p data-testid="flatest">{country["flag"]}</p>
          weather
          {weathers?.current && (
            <>
              <p data-testid="wetest">{`${weathers.current.temperature}oC`}</p>
              <img
                data-testid="imatest"
                src={weathers.current.weather_icons[0]}
                alt="weather icon"
              />
            </>
          )}
        </div>
      ) : (
        <div>
          {" "}
          <span data-testid="common">{country["name"].common}</span>
          <button
            data-testid="button"
            className="btn"
            onClick={() => handleShow()}
          >
            show
          </button>
        </div>
      )}
    </div>
  );
};

export default Countries;
