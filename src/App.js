import React, { Component } from 'react'; 
import Titles from './components/Titles/Titles'; 
import Form from './components/Form/Form'; 
import Weather from './components/Weather/Weather'; 


const API_KEY = "60271f8873cd6fca6c2b2ce6c281a2c6"; 

class App extends Component {

  getWeather = async (event) => {
    // prevent default behavior 
    event.preventDefault();

    // user input values 
    const userCity = event.target.elements.city.value; 
    const userCountry = event.target.elements.country.value; 

    // request api call 
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${userCity},${userCountry}&appid=${API_KEY}`); 
    // convert data to json object 
    const data = await apiCall.json(); 
    console.log(data); 
  }


  // render jsx 
  render() {

    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    ); 
  }
}

export default App; 