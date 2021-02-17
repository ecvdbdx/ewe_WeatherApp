import React, { useState } from 'react'

import DateBuilder from './DateBuilder';

function Card(props){

const {weather}= props

    return(
        <div className="weather-side">
            <div className="date-location">
                <DateBuilder/>
                <div className="location">{weather.name}, {weather.sys.country}</div>
            </div>
            <div className="weather-temp">
                <img className="weather-img" src={"http://openweathermap.org/img/wn/" + weather.weather[0].icon + "@2x.png"}></img>
                <div className="temp">{Math.round(weather.main.temp)}°c</div>
                <div className="weather">{weather.weather[0].main}</div>
            </div>
      </div>
    )
}

export default Card;