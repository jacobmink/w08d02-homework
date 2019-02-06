import React, { Component } from 'react';

const Weather = (props)=>{
    console.log(props.weatherItem)
    // const weatherStats = props.weatherItem.keys().map((item)=>{
    //     return (<h4>{item}</h4>)
    // })
    
    const weatherStats = props.weatherItem.main;
    return(
        <div>
            <h3>{props.weatherItem.name}</h3>
            <p>Humidity: {weatherStats.humidity}%</p>
            <p>Pressure: {weatherStats.pressure} mmHg</p>
            <p>Max Temperature: {Math.round((weatherStats.temp_max - 273)*(9/5) + 32)}&deg; F</p>
            <p>Min Temperature: {Math.round((weatherStats.temp_min - 273)*(9/5) + 32)}&deg; F</p>
        </div>
    )
}

export default Weather;