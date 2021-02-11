import React, { Component } from 'react'

class WeatherApp extends Component{
    render(){
        return(
            window.fetch('http://api.openweathermap.org/data/2.5/weather?q=Bordeaux,fr&lang=fr&APPID=64f721e6b055f85f93db14042305834d')
            .then(res => res.json())
            .then(resJson => console.log(resJson))
        );
    }
}

export default WeatherApp;