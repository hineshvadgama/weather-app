import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import CurrentTemp from '../CurrentTemp/CurrentTemp.js';
import BackButton from '../BackButton/BackButton.js';
import FiveDayForecast from '../../Routes/FiveDayForecast/FiveDayForecast.js';
import HourlyForecast from '../../Routes//HourlyForecast/HourlyForecast.js';

import { getApiKey } from '../../Utils/utils.js';
import './App.css';
import '../CurrentTemp/CurrentTemp.js';

function App() {

  let [coordinateData, setCoordinateData] = useState({latitude: 'notSet', longitude: 'notSet'});
  let [weatherData, setWeatherData] = useState({name: 'Loading...', main: {temp: 'Loading...'}});
  let [isDataFetched, setIsDataFetched] = useState(false);
  
  const backButton = <BackButton />

  useEffect(() => {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(locationSuccess, locationFailure);
    }

    function locationSuccess(position) {
      setCoordinateData({latitude: position.coords.latitude, longitude: position.coords.longitude});
    }
    
    function locationFailure() {
      alert('There was an error retrieving your location');
    }

  }, []);

  if (coordinateData.latitude !== 'notSet') {
    if (isDataFetched === false) {

      const apiKey = getApiKey();

      fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${coordinateData.latitude}&lon=${coordinateData.longitude}&appid=${apiKey}&units=metric`)
      .then (res => res.json())
      .then (data => setWeatherData(data));

      setIsDataFetched(true);
    }
  }
  
  function roundTemp() {
    const temp = (!isNaN(weatherData.main.temp)) ? `${Math.round(weatherData.main.temp)}°C` : 'Loading...';
    return temp;
  }

  return (
    <div className='app-container'>
      <BrowserRouter>

      {backButton}

        <CurrentTemp
          temp={roundTemp()}
          area={weatherData.name}
          />
        <div className='current-temp-forecast-spacer' />

        <Route path="/" exact render={(props) => <FiveDayForecast {...props} coordinates={{latitude: coordinateData.latitude, longitude: coordinateData.longitude}} />} />
        <Route path='/:day' render={() => <HourlyForecast coordinates={{latitude: coordinateData.latitude, longitude: coordinateData.longitude}} />} />

      </BrowserRouter>
    </div>
  )
    
}

export default App;
