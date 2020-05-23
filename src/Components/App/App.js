import React from 'react';
import './App.css';
import '../CurrentTemp/CurrentTemp.js';
import CurrentTemp from '../CurrentTemp/CurrentTemp.js';
import DailyForecastStep from '../DailyForecastStep/DailyForecastStep.js';

function App() {

    return (
      <>
        <div class='app-title'>
          Weather App
        </div>
        <CurrentTemp temp='21°C' />
        <div class='current-temp-forecast-spacer' />
        <DailyForecastStep day='Thursday' />
        <div class='forecast-step-spacer' />
        <DailyForecastStep  day='Friday' />
        <div class='forecast-step-spacer' />
        <DailyForecastStep  day='Saturday' />
        <div class='forecast-step-spacer' />
        <DailyForecastStep  day='Sunday' />
        <div class='forecast-step-spacer' />
        <DailyForecastStep  day='Monday' />
      </>
    )
    
}

export default App;
