import React, { Component } from 'react';
import Weather from '../Weather/Weather';

export default class MainContainer extends Component{
    constructor(){
        super();
        this.state = {
            weather: []
        }
    }
    getWeather = async ()=>{
        console.log('getting the weather now')
        const apiResponse = await fetch("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=Denver&APPID=91080491a4ef5ea115d7eb1f9f1aadfb");
        const weatherObj = await apiResponse.json();
        this.setState({
            weather: [...this.state.weather, weatherObj]
        })
    }
    componentDidMount(){
        this.getWeather();
    }
    render(){
        const weatherItems = this.state.weather.map((item, index)=>{
            return(
                <Weather key={index} weatherItem={item} />
            )
        })
        return(
            <div>
                <h1>Show me the Forecast in Denver</h1>
                {weatherItems}
            </div>
        )
    }
}