import React from "react";

import Grid from '@material-ui/core/Grid';

import Titles from "./components/Titles"
import Form from "./components/Form"
import Display from "./components/Display"
import Secrets from "./secrets.json"

const API_KEY = Secrets.api_key;

class App extends React.Component {
  state = {
    city: undefined,
    country: undefined,
    temp: undefined,
    humidity: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    try {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();

        if(city && country){
          //console.log(data);
          this.setState({
            city: data.name,
            country: data.sys.country,
            temp: (data.main.temp*(9/5)+32).toFixed(1),
            humidity: data.main.humidity,
            error: ""
          });
        } 
        else {
          this.setState({
            error: "Please enter a city and a country..."
          });
        }
    } catch(err) {
      this.setState({
        error: "The entered values are not correct: " + err.message
      });
    }
  }

  render() {
    return (
      <div>
        <p><Titles /></p>
        <p><Form getWeather={this.getWeather}/></p>
        <p><Display 
          city={this.state.city}
          country={this.state.country}
          temp={this.state.temp}
          humidity={this.state.humidity}
          error={this.state.error}
        /></p>
      </div>
    );
  }
};

export default App;