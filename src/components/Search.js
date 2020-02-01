import React, { Component } from 'react'
import { getWeather } from '../client/client'
import { weatherIcon} from "../weatherIconClasses/weatherIconClasses"
class SearchBar extends Component {
  state = {
    city: "",
    country: "",
  }



  handleChange = event => {
    const {target: {value, name}} = event
    this.setState({
      ...this.state,
      [name]: value})
    }

  handleClick = () => {
    const { city, country } = this.state
    getWeather(city, country).then(({main: {temp}, weather: [{id, description}], sys: {country}, name}) => {
      const { updateCity, updateCountry, updateTemperature, setWeatherIcon, setLoaded} = this.props
      updateCity(name)
      updateCountry(country)
      updateTemperature(temp)
      setWeatherIcon(weatherIcon, id, description)
      setLoaded(true)
    })
  }
  render() {
    return (
    <div>
        <input type="text" name="city" placeholder="Enter your city" onChange={this.handleChange}/>
        <input type="text" name="country" placeholder="Enter your country" onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Show weather</button>
    </div>
    )
  }
}

export default SearchBar