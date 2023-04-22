import React from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
  let weatherData = {
    city: "New York",
    temperature: 21,
    date: "Tuesday 10:00",
    description: "Cloudy",
    humidity: 80,
    wind: 30
  };
  return (
    <div className="container">
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
              autocomplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>last updated: {weatherData.date} </li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt={weatherData.description}
              class="float-left"
            />
            <span className="float-left">
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/">°C </a> | <a href="/">°F </a>
              </span>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity} %</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
    <small
  ><a
    href="https://github.com/Fkalantar/My-vanilla-weather-app"
    target="_blank"  rel="noreferrer"
    >Open-source code</a
  >, by Fataneh Kalantar</small
>
    </div>
  );
}

