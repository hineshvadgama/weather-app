import React from 'react';
import './App.css';
import '../CurrentTemp/CurrentTemp.js';
import CurrentTemp from '../CurrentTemp/CurrentTemp.js';

function App () {
    return (
      <>
        <div class='app-title'>
          <h1>Weather App</h1> 
        </div>
        <CurrentTemp temp='21°C' />
      </>
    )
}

export default App;
