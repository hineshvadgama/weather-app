import React, { useEffect, useState } from 'react';
import './App.css';
import '../CurrentTemp/CurrentTemp.js';
import CurrentTemp from '../CurrentTemp/CurrentTemp.js';
import FiveDayForecast from '../../Routes/FiveDayForecast.js';
import HourlyForecast from '../../Routes/HourlyForecast.js';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {

  let [weatherData, setWeatherData] = useState({name: 'Loading...', main: {temp: 'Loading...'}});
  const API_KEY = '3478d317fdb0e5afa323177a3bfeaa15';

  useEffect(() => {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
    }
  
    function locationSuccess(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
      .then (res => res.json())
      .then (data => setWeatherData(data));
    }
  
    function locationError() {
      alert('There was an error retrieving your location.');
    }

  }, []);
  
  function roundTemp() {
    const temp = (!isNaN(weatherData.main.temp)) ? `${Math.round(weatherData.main.temp)}°C` : 'Loading...';
    return temp;
  }

  return (
    <>
      <BrowserRouter>

        <div className='app-title'>
          Weather App
        </div>

        <CurrentTemp
          temp={roundTemp()}
          area={weatherData.name}
          />
        <div className='current-temp-forecast-spacer' />

        <Route path="/" exact component={FiveDayForecast} />
        <Route path='/:day' component={HourlyForecast} />

      </BrowserRouter>
    </>
  )
    
}

export default App;
