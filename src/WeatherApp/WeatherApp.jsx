import React, { useState } from 'react'
import DateBuilder from './DateBuilder';
import SearchBar from './SearchBar';

const api = {
    key: "64f721e6b055f85f93db14042305834d",
    base: "http://api.openweathermap.org/data/2.5/"
  }

function WeatherApp(){

const [weather, setWeather] = useState({});


  const search = query => {

      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          console.log(result);
        });
  }
  
    return(
 <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <SearchBar search={search}/>
        {(typeof weather.main != "undefined") ? (
        <div>
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date"><DateBuilder/></div>
            <div className="temp">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
            <img src={"http://openweathermap.org/img/wn/" + weather.weather[0].icon + "@2x.png"}></img>
        </div>
        ) : ('')}
      </main>
    </div>
    );
}

export default WeatherApp;