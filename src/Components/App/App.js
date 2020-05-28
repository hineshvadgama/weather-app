import React from 'react';
import './App.css';
import '../CurrentTemp/CurrentTemp.js';
import CurrentTemp from '../CurrentTemp/CurrentTemp.js';
import FiveDayForecast from '../../Routes/FiveDayForecast.js';
import HourlyForecast from '../../Routes/HourlyForecast.js';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {

    return (
      <>
        <BrowserRouter>

          <div className='app-title'>
            Weather App
          </div>

          <CurrentTemp temp='21°C' />
          <div className='current-temp-forecast-spacer' />

          <Route path="/" exact component={FiveDayForecast} />
          <Route path='/:day' component={HourlyForecast} />

        </BrowserRouter>
      </>
    )
    
}


export default App;
