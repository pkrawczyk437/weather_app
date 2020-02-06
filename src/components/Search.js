import React, { Component } from 'react'
import { getWeather } from '../client/getWeather'
import { weatherIcons } from "../weatherIconClasses/weatherIconClasses"

class Search extends Component {
  state = {
    city: "",
    countryCode: "",
  }

  handleChange = event => {
    const {target: {value, name}} = event
    this.setState({
      ...this.state,
      [name]: value})
    }

  handleClick = () => {
    const { city, countryCode } = this.state
    const { showWeather } = this.props
    if(city && countryCode) {
      getWeather(city, countryCode).then(({main: {temp}, weather: [{id, description}], sys: {country}, name}) => {
        showWeather(name, country, temp, id, weatherIcons, description)
      })
    }
    else {
      alert("Please enter values for all fields!")
    }
  }

  render() {
    return (
    <div>
        <input type="text" name="city" placeholder="Enter your city" onChange={this.handleChange} className="m-2"/>
        <input type="text" name="countryCode" placeholder="Enter your country" onChange={this.handleChange} className="m-2"/>
        <button className="btn btn-secondary" onClick={this.handleClick}>Show weather</button>
    </div>
    )
  }
}

export default Search