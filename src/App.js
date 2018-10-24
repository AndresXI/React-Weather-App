import React, { Component } from 'react'; 
import Titles from './components/Titles/Titles'; 
import Form from './components/Form/Form'; 
import Weather from './components/Weather/Weather'; 


const API_KEY = "60271f8873cd6fca6c2b2ce6c281a2c6"; 

class App extends Component {

  //the desired date from the weather api 
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: "",
  }

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
    // only set state if the fields are not empty 
     if (userCity && userCountry) {
       console.log(data);
       // setting our state values 
       this.setState({
         temperature: data.main.temp,
         city: data.name,
         country: data.sys.country,
         humidity: data.main.humidity,
         description: data.weather[0].description,
         error: ""
       })
     } else {
       this.setState({
         temperature: undefined,
         city: undefined,
         country: undefined,
         humidity: undefined,
         description: undefined,
         error: "please enter your country and city"
       }); 
    }
  }


  // render jsx 
  render() {

    return (
      <div>
       <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">  
              <div className="col-sm-5 title-container">
                  <Titles />
              </div>
              <div className="col-sm-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
              </div>
            </div>
          </div>
        </div>
       </div>
    </div>
    ); 
  }
}

export default App; 