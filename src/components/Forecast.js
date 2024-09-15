import React from 'react';
import '../styles/Forecast.css'
const Forecast = ({ forecastList,unit }) => {
  if (!forecastList) return null;

  return (
    <div className="forecast-container">
      <h3>5-Day Forecast</h3>
      <div className="forecast-grid">
        {forecastList.map((day, index) => (
          <div key={index} className="weather-card">
           <h4>{new Date(day.dt_txt).toLocaleDateString()}</h4>
            <p><strong>{day.weather[0].description.toUpperCase()}</strong></p>
            <p><i className="fas fa-temperature-high"></i> Temperature: {day.main.temp} {unit === 'metric' ? '°C' : '°F'}</p>
            <p><i className="fas fa-temperature-low"></i> Min Temp: {day.main.temp_min} {unit === 'metric' ? '°C' : '°F'}</p>
            <p><i className="fas fa-temperature-high"></i> Max Temp: {day.main.temp_max} {unit === 'metric' ? '°C' : '°F'}</p>
            <p><i className="fas fa-wind"></i> Wind Speed: {day.wind.speed} m/s</p>
            <p><i className="fas fa-tint"></i> Humidity: {day.main.humidity}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
