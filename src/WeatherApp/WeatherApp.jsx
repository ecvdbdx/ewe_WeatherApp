import React, { useState } from 'react'
import DateBuilder from './DateBuilder';
import SearchBar from './SearchBar';
import Card from './Card';

import './WeatherApp.css';

const api = {
    key: "64f721e6b055f85f93db14042305834d",
    base: "http://api.openweathermap.org/data/2.5/"
  }

function WeatherApp(){
  
  const [weather, setWeather] = useState({});

  const search = query => {

      fetch(`${api.base}weather?q=${query}&units=metric&lang=fr&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          console.log(result);
        });
  }
  
    return(
      <main>
      <SearchBar search={search}/>
      {(weather.main) ? (
        <section>
          <Card weather={weather}/>
          <div className="info-side">
            <div className="humidity">
              <span>humidity</span>
              <span>{weather.main.humidity}%</span>
            </div>
            <div className="humidity">
              <span>wind</span>
              <span className="wind">{weather.wind.speed} km/h</span>
            </div>
          </div>
        </section>
      ) : null}
      </main>
    );
}

export default WeatherApp;