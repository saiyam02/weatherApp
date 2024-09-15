import React from 'react';
import '../styles/CurrentWeather.css'; 

const CurrentWeather = ({ weather,unit }) => {
  if (!weather) return null;

  return (
    <div className="current-weather-container">
      <div className="weather-card current-weather-card">
      <h2>{weather.name}</h2>
        <p><i className="fas fa-temperature-high"></i> Temperature: {weather.main.temp} {unit === 'metric' ? '°C' : '°F'}</p>
        <p><i className="fas fa-cloud"></i> {weather.weather[0].description.toUpperCase()}</p>
        <p><i className="fas fa-tint"></i> Humidity: {weather.main.humidity}%</p>
        <p><i className="fas fa-wind"></i> Wind Speed: {weather.wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
