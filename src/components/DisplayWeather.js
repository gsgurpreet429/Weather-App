import React from "react";

export default function DisplayWeather(props) {
  const {
    temperature,
    description,
    location,
    country,
    wind_speed,
    pressure,
    minTemp,
    maxTemp,
    humidity,
    img,
  } = props.weather;

  return (

    <div>
      <div class="col-12 col-md-8 container-fluid px-1 px-sm-3 py-5 mx-auto">
        <div class="row d-flex justify-content-center">
          <div class="row card0">
            <div class="card1 col-lg-8 col-md-7">
              <div class="col-12"> <form className="region" onSubmit={(e) => props.changeWeather(e)}>
                <input class="mb-5" type="text" placeholder="Search Location" onChange={(e) => {
                  props.changeRegion(e.target.value);
                }} />
              </form>
              </div>
              <small>Forecast</small>
              <div class="text-center"> </div>
              <div class="row px-3 mt-3 mb-3">
                <h1 class="large-font mr-3">{temperature}&#176;</h1>
                <div class="d-flex flex-column mr-3">
                  <h2 class="mt-3 mb-0">{location}, {country}</h2> <small>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date())}</small>
                </div>
                <div class="d-inline flex-row text-center">
                  <img className="mainImg" src={img} alt="weather-img" /> <h1>{description}</h1>
                </div>
              </div>
            </div>
            <div class="card2 col-lg-4 col-md-5">
              <div class="mr-5">

                <div class="line my-5"></div>
                <p>Weather Details</p>
                <div class="row px-3">
                  <p class="light-text">Pressure</p>
                  <p class="ml-auto">{pressure} millibars</p>
                </div>
                <div class="row px-3">
                  <p class="light-text">Humidity</p>
                  <p class="ml-auto">{humidity}%</p>
                </div>
                <div class="row px-3">
                  <p class="light-text">Wind</p>
                  <p class="ml-auto">{wind_speed} kmph</p>
                </div>
                <div class="row px-3">
                  <p class="light-text">Minimum Temperature</p>
                  <p class="ml-auto">{minTemp}&#176;</p>
                </div>
                <div class="row px-3">
                  <p class="light-text">Maximum Temperature</p>
                  <p class="ml-auto">{maxTemp}&#176;</p>
                </div>
                <div class="line mt-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
