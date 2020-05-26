import React from 'react';
import './App.css';
import '../CurrentTemp/CurrentTemp.js';
import CurrentTemp from '../CurrentTemp/CurrentTemp.js';
import DailyForecastStep from '../DailyForecastStep/DailyForecastStep.js';
//import DailyInfo from '../DailyInfo/DailyInfo.js';

function App() {

    return (
      <>
        <div className='app-title'>
          Weather App
        </div>
        <CurrentTemp temp='21°C' />
        <div className='current-temp-forecast-spacer' />

        <div className='grid'>

          <DailyForecastStep
            day='Today'
            status='sun'
            high='28°C'
            low='21°C'
            rain='0%'
            humidity='18%'
          />

          <DailyForecastStep
            day='Wednesday'
            status='cloud/sun'
            high='21°C'
            low='17°C'
            rain='15%'
            humidity='20%'
          />

          <DailyForecastStep
            day='Thursday'
            status='heavy-rain'
            high='18°C'
            low='15°C'
            rain='100%'
            humidity='100%'
          />

          <DailyForecastStep
            day='Friday'
            status='sun'
            high='25°C'
            low='21°C'
            rain='2%'
            humidity='25%'
          />

          <DailyForecastStep
            day='Saturday'
            status='cloud/sun'
            high='22°C'
            low='19°C'
            rain='12%'
            humidity='100%'
          />

        </div>

      </>
    )
    
}

export default App;
