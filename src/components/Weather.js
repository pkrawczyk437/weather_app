import React, {Component} from 'react'
import Search from './Search'
import { getWeatherIcons } from '../client/getWeatherIcons'
import '../styles/weather-icons.css'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Weather.css'

class Weather extends Component {
  state = {
    city: "",
    country: "",
    temperatureList: "",
    icon: "",
    description: ""
  }

  showWeather = (cityName, countryName, temperature, id, weatherIcon, info) => {
    this.setState({
      city: cityName,
      country: countryName,
      temperatureList: temperature,
      description: info,
      icon: getWeatherIcons(id, weatherIcon),
    })
  }

  render() {
    return (
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center p-5">
        <Search
          showWeather = {this.showWeather}
        />
        {this.state.city !== "" && this.state.country !== "" &&
          <div className="text-light">
              <p> {this.state.city.toUpperCase()}, {this.state.country.toUpperCase()}</p>
              <i className={`wi ${this.state.icon} display-2`}/>
              <br/><br/>
              <span>{Math.round(this.state.temperatureList)}&#176;</span>
              <span>{this.state.description.toUpperCase()}</span>
              <br/>
          </div>
        }
      </div>
    )
  }
}

export default Weather