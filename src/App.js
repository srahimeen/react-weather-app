import React from "react";

import Titles from "./components/Titles"
import Form from "./components/Form"
import Display from "./components/Display"
import Secrets from "./secrets.json"

const API_KEY = Secrets.api_key;
//http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric

class App extends React.Component {
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
  }
  render() {
    return (
      <div>
        <p><Titles /></p>
        <p><Form getWeather={this.getWeather}/></p>
        <p><Display /></p>
      </div>
    );
  }
};

export default App;