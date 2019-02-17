import React from "react";
import Titles from './Components/Titles';
import Form from './Components/Form';
import Weather from "./Components/Weather";

const API_key = "b2a7226a9e309a61610678d8bb264cac"

class App extends React.Component {
  state = {
    temperture: undefined,
    humidity: undefined,
    city: undefined,
    country: undefined,
    description: undefined,
    error: undefined
  }
  // this function to call api using URL
  getweather = async (e) => {
    //to prevent the page from refresh by default when we want to get data 
    e.preventDefault();
    // to make name of the city and country dynamic
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_key}`)
    const data = await api_call.json()
    // check if the city and country are exist run these things 
    if (city && country) {
      console.log('hello', data)
      this.setState({
        temperture: data.main.temp,
        humidity: data.main.humidity,
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        error: ' '

      })
    } else {
      this.setState({
        temperture: undefined,
        humidity: undefined,
        city: undefined,
        country: undefined,
        description: undefined,
        error: 'please enter the values '
      })

    }
  }
  render() {
    return (
      <div>
        <div className='wrapper'>
          <div className='main'>
            <div className='container'>
              <div className='row'>
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getweather={this.getweather} />
                  <Weather
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    humidity={this.state.humidity}
                    temperture={this.state.temperture}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    )
  }
}
export default App;


