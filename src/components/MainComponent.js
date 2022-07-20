import React from "react";
import Axios from "axios";
import DisplayWeather from "./DisplayWeather.js";
import JumbotronComponent from "./JumbotronComponent";


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: {
        latitude: 45,
        longitude: 60,
      },
      data: {},
      inputData: {},
    };
  }


  componentDidMount() {
    //Get Device Location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let newCoords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        const URL = this.setState({ coords: newCoords });
        console.log(this.state.coords.latitude, this.state.coords.longitude);
        // Api call
        const key = `9e7108211a305fccae7d1401c1e0b8ae`;
        const api = `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.coords.latitude}&lon=${this.state.coords.longitude}&appid=${key}`;
        Axios.get(api).then((response) => {
          console.log(response);
          let weatherData = {
            location: response.data.name,
            temperature: Math.round(response.data.main.temp) - 273,
            description: response.data.weather[0].main,
            country: response.data.sys.country,
            wind_speed: response.data.wind.speed,
            pressure: response.data.main.pressure,
            minTemp: Math.floor(response.data.main.temp_min) - 273,
            maxTemp: Math.floor(response.data.main.temp_max) - 273,
            humidity: response.data.main.humidity,
            img: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
          };
          console.log(weatherData);
          this.setState({ data: weatherData });
        });
        //.catch((err) => {
        //  console.log("Wrong City Name");
        //});
      });
    } else {
      console.log("Not Supported");
    }
  }

  //Track the Input Field
  change = (value) => {
    this.setState({ inputData: value });
  };

  changeWeather = (event) => {
    event.preventDefault();

    //Api Call
    const key = `9e7108211a305fccae7d1401c1e0b8ae`;
    Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.inputData}&appid=${key}`
    )
      .then((response) => {
        console.log(response);
        let weatherData = {
          location: response.data.name,
          temperature: Math.round(response.data.main.temp) - 273,
          description: response.data.weather[0].main,
          country: response.data.sys.country,
          wind_speed: response.data.wind.speed,
          pressure: response.data.main.pressure,
          minTemp: Math.floor(response.data.main.temp_min) - 273,
          maxTemp: Math.floor(response.data.main.temp_max) - 273,
          humidity: response.data.main.humidity,
          img: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        };
        console.log(weatherData);
        this.setState({ data: weatherData });
      })
      .catch((err) => {
        console.log("Wrong City Name");
      });
  };
  render() {
    return (

      <div className="App">
        <JumbotronComponent />
        <DisplayWeather weather={this.state.data} changeWeather={this.changeWeather}
          changeRegion={this.change} />
      </div>
    );
  }
}

export default Main;
