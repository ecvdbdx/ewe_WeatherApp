import React, { useState } from 'react'
import DateBuilder from './DateBuilder';

const api = {
    key: "SECRET",
    base: "http://api.openweathermap.org/data/2.5/"
  }

function WeatherApp(){

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }
    return(
 <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
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