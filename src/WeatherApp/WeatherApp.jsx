import React, { useState, useEffect } from 'react'
import DateBuilder from './DateBuilder';
import SearchBar from './SearchBar';
import Card from './Card';
import Forecast from './Forecast';

import './WeatherApp.css';

const api = {
    key: "15abf3a734330f9ac14ee26608e98682",
    base: "http://api.openweathermap.org/data/2.5/"
  }

function WeatherApp(){

  useEffect( () => {
    fetch(`${api.base}weather?q=Paris&units=metric&lang=fr&APPID=${api.key}`).then(function(response) {
      response.json()
      .then(results => {
        setWeatherParis(results)
        console.log(results)
      })
    },
    fetch(`${api.base}weather?q=New York&units=metric&lang=fr&APPID=${api.key}`).then(function(response) {
      response.json()
      .then(res => {
        setWeatherNewYork(res)
        console.log(res)
      })
    })
    )},[])

  const [weatherParis, setWeatherParis] = useState({});
  const [weatherNewYork, setWeatherNewYork] = useState({});
  const [weather, setWeather] = useState({});
  const [weatherForecast, setWeatherForecast] = useState({});

  const search = query => {

      fetch(`${api.base}weather?q=${query}&units=metric&lang=fr&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          console.log(result);
        });
      fetch(`${api.base}forecast?q=${query}&units=metric&lang=fr&APPID=${api.key}`)
        .then(res => res.json())
        .then(Forecastresult => {
          setWeatherForecast(Forecastresult);
          console.log(Forecastresult);
        });

        const forecast = weatherForecast.list;
        console.log(forecast.dt_txt)
      
  }
  
    return(
      <main>
        <section className="container">
          {(weatherParis.main) ? (
            <Card weather={weatherParis}/>
          ) : null}
        </section>
        <section className="container2">
          <SearchBar search={search}/>
          {(weather.main) ? (
            <div className="weather-card">
              <Card weather={weather}/>
              <div className="info-side">
                <div>
                  <div className="humidity">
                    <span>humidity</span>
                    <span>{weather.main.humidity}%</span>
                  </div>
                  <div className="humidity">
                    <span>wind</span>
                    <span className="wind">{weather.wind.speed} km/h</span>
                  </div>
                </div>
                <div className="forecastContainer">
                  <Forecast/>
                  <Forecast/>
                  <Forecast/>
                  <Forecast/>
                </div>
              </div>
            </div>
          ) : null}
        </section>
        <section className="container">
          {(weatherNewYork.main) ? (
              <Card weather={weatherNewYork}/>
            ) : null}
        </section>
      </main>
    );
}

export default WeatherApp;