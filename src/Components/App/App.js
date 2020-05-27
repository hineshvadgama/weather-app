import React from 'react';
import './App.css';
import '../CurrentTemp/CurrentTemp.js';
import CurrentTemp from '../CurrentTemp/CurrentTemp.js';
import DailyForecastStep from '../DailyForecastStep/DailyForecastStep.js';
import DailyInfo from '../DailyInfo/DailyInfo.js';

function App() {

    return (
      <>
        <div className='app-title'>
          Weather App
        </div>
        <CurrentTemp temp='21°C' />
        <div className='current-temp-forecast-spacer' />

        <DailyInfo />

      </>
    )
    
}

export default App;
