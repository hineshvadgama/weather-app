import React from 'react';
import CurrentTemp from '../../Components/CurrentTemp/CurrentTemp.js';
import FiveDayForecast from '../../Components/FiveDayForecast/FiveDayForecast.js';

const HomePage = () => {

      return (

        <>
          <CurrentTemp />
          <FiveDayForecast />
        </>

      );

}

export default HomePage;
