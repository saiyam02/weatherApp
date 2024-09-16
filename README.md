# Weather Forecast App

A simple weather forecast application built with React.js that allows users to search for a city, view the current weather, and see a 5-day weather forecast. The app also includes support for geolocation to fetch weather data based on the user's current location, a toggle button for switching between Celsius and Fahrenheit, and a loading spinner while fetching data.

## Features
- **Search by City**: Enter any city to fetch current weather data and a 5-day forecast.
- **Temperature Toggle**: Switch between Celsius and Fahrenheit units for temperature.
- **Loading Spinner**: Display a loading spinner while fetching weather data.
- **Responsive Design**: Fully responsive UI for both mobile and desktop.

## Demo
[Hosted Link] - Add the hosted URL here when deployed.

---

## Prerequisites
Before running this application, make sure you have the following installed:

- **Node.js** (version 14 or above)
- **npm** or **yarn**

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/saiyam02/weatherApp.git
   cd weather-forecast-app
   
2. **Install the dependencies**:
    ```bash
    npm install
3. **Set up the environment variables**:
    Create a .env file in the root of the project:
    ```bash
    touch .env

    Add your OpenWeatherMap API key to the .env file:
    REACT_APP_WEATHER_API_KEY=your_api_key_here    
    Note: Replace your_api_key_here with your actual API key from OpenWeatherMap.
4. **Run the development server**:
    ```bash
    npm start

The app will be available at http://localhost:3000.
