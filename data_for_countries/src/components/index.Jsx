import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import './country.scss'


const ShowCountryView = ({country, defaultShow=false}) => {
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
      <button className='button' onClick={()=>setShow(true)}>show</button></div>
    )
  
    }
  </>
  )
}

export default ShowCountryView