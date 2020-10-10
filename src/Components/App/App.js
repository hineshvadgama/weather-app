import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from '../../Routes/HomePage/HomePage.js';
import { CoordinateContext } from '../CoordinateContext.js';

function App() {

  let [coordinateData, setCoordinateData] = useState({latitude: 'notSet', longitude: 'notSet'});

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



  return (

    <div className="app-container">

      <BrowserRouter>

      <CoordinateContext.Provider value={coordinateData}>

        <Route path="/" exact >
          <HomePage />
        </Route>

        </CoordinateContext.Provider>

      </BrowserRouter>

    </div>

  );

}

export default App;
