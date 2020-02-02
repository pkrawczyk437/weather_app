import React, {Component} from 'react'
import SearchBar from './Search'
import '../styles/weather-icons.css'
import 'bootstrap/dist/css/bootstrap.css';
class Weather extends Component {

  state = {
    city: "",
    country: "",
    temperatureList: "",
    icon: "",
    description: "",

  }


  updateCity = city => this.setState({ city })
  updateCountry = country => this.setState({ country })
  updateTemperature = temp => this.setState({ temperatureList: temp })

  setWeatherIcon = (icons, id, text) => {
    switch (true) {
      case id >= 200 && id < 232:
        this.setState({
          icon: icons.Thunderstorm,
          description: text
        });
        break;
      case id >= 300 && id <= 321:
        this.setState({
          icon: icons.Drizzle,
          description: text
        });
        break;
      case id >= 500 && id <= 521:
        this.setState({
          icon: icons.Rain,
          description: text
        });
        break;
      case id >= 600 && id <= 622:
        this.setState({
          icon: icons.Snow,
          description: text
        });
        break;
      case id >= 701 && id <= 781:
        this.setState({
          icon: icons.Atmosphere,
          description: text
        });
        break;
      case id === 800:
        this.setState({
          icon: icons.Clear,
          description: text
        });
        break;
      case id >= 801 && id <= 804:
        this.setState({
          icon: icons.Clouds,
          description: text
        });
        break;
      default:
        this.setState({
          icon: icons.Clouds,
          description: text
        });
    }
  }

  render() {
    return (
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center p-5">
        <SearchBar
          updateCity={this.updateCity}
          updateCountry={this.updateCountry}
          updateTemperature={this.updateTemperature}
          setWeatherIcon={this.setWeatherIcon}
        />
        {this.state.city !== "" && this.state.country ? (
          <div className="text-light">
              <p> {this.state.city.toUpperCase()}, {this.state.country.toUpperCase()}</p>
              <i className={`wi ${this.state.icon} display-2`}/>
              <br/><br/>
              <span>{Math.round(this.state.temperatureList)}&#176;</span>
              <span>{this.state.description.toUpperCase()}</span>
              <br/>
          </div>
        ): (
          null
        )}
      </div>
    )
  }
}

export default Weather