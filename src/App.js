import React,{ useCallback, useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import SearchBar from './components/SearchBar';
import { getForecastList } from './utils/dataFormat';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [unit, setUnit] = useState('metric');

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  const fetchWeather = useCallback(async (city) => {
    setLoading(true);
    setError('');
    try {
      const currentWeatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`
      );
      setCurrentWeather(currentWeatherResponse.data);

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${unit}`
      );
      const forecastList =getForecastList(forecastResponse.data); 
      setForecast(forecastList);
      setError('');
    } catch (err) {
      if(err?.response?.data?.message){
        setError(`Error fetching weather data. ${err.response.data.message}`);
      }else
      setError('Error fetching weather data. Please try again.');
      setCurrentWeather(null);
      setForecast(null)
    } finally {
      setLoading(false);
    }
  },[unit,apiKey]);

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === 'metric' ? 'imperial' : 'metric'));
  };

  useEffect(()=>{
    const cityName = localStorage.getItem('cityName');
    if(cityName)
    fetchWeather(cityName);
  },[fetchWeather])

  return (
    <div className="App">
      <h1>Weather Forecast App</h1>
      <SearchBar onSearch={fetchWeather} />
      {loading && <div className="spinner"></div>}
      <div className="unit-toggle">
        <button onClick={toggleUnit}>
          Switch to {unit === 'metric' ? 'Fahrenheit' : 'Celsius'}
        </button>
      </div>
      {!loading  && <div>
      {error && <p className="error">{error}</p>}
      <CurrentWeather weather={currentWeather} unit={unit}/>
      <Forecast forecastList={forecast} unit={unit}/>
      </div>
      }
      </div>
  );

}

export default App;
