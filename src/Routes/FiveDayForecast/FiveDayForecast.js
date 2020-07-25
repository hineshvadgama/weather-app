import React, { useState, useEffect } from 'react';
import DailyForecastStep from '../../Components/DailyForecastStep/DailyForecastStep.js';
import './FiveDayForecast.css';
import { loadingData } from './sampleData.js';

import { getApiKey } from '../../Utils/utils.js';

const FiveDayForecast = (props) => {

  let [weatherData, setWeatherData] = useState(loadingData);
  let [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {

    if (typeof(props.coordinates.latitude) === 'number') {

      if (isDataFetched === false) {
        
        const apiKey = getApiKey();
        
        fetch (`https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.latitude}&lon=${props.coordinates.longitude}&appid=${apiKey}&units=metric`)
        .then (res => res.json())
        .then (data => setWeatherData(data));

        setIsDataFetched(true);
      }

    }
    // eslint-disable-next-line
  }, [props]);


  function roundNum(num) {
    const roundedNum = (!isNaN(num)) ? `${Math.round(num)}` : 'Loading...';
    return roundedNum;
  }


  function convertTimestampToDay(timestamp) {

    let dayOfTheWeek = 'Loading...';
    if (!isNaN(timestamp)) {

      const dayNumber = new Date(timestamp * 1000).getDay();

      switch (dayNumber) {
        case 0:
          dayOfTheWeek = 'Sun'
          break;
        case 1:
          dayOfTheWeek = 'Mon'
          break;
        case 2:
          dayOfTheWeek = 'Tue'
          break;
        case 3:
          dayOfTheWeek = 'Wed'
          break;
        case 4:
          dayOfTheWeek = 'Thu'
          break;
        case 5:
          dayOfTheWeek = 'Fri'
          break;
        case 6:
          dayOfTheWeek = 'Sat'
          break;
        default:
          dayOfTheWeek = 'Loading...'
      }
    }
    return dayOfTheWeek;
  }

    return (

        <table>

          <DailyForecastStep
            day='Today'
            status={weatherData.daily[0].weather[0].main}
            high={`${roundNum(weatherData.daily[0].temp.max)}°C`}
            low={`${roundNum(weatherData.daily[0].temp.min)}°C`}
            wind={`${roundNum(weatherData.daily[0].wind_speed)} mph`}
            humidity={`${weatherData.daily[0].humidity}%`}
          />

          <DailyForecastStep
            day={convertTimestampToDay(weatherData.daily[1].dt)}
            status={weatherData.daily[1].weather[0].main}
            high={`${roundNum(weatherData.daily[1].temp.max)}°C`}
            low={`${roundNum(weatherData.daily[1].temp.min)}°C`}
            wind={`${roundNum(weatherData.daily[1].wind_speed)} mph`}
            humidity={`${weatherData.daily[1].humidity}%`}
          />

          <DailyForecastStep
            day={convertTimestampToDay(weatherData.daily[2].dt)}
            status={weatherData.daily[2].weather[0].main}
            high={`${roundNum(weatherData.daily[2].temp.max)}°C`}
            low={`${roundNum(weatherData.daily[2].temp.min)}°C`}
            wind={`${roundNum(weatherData.daily[2].wind_speed)} mph`}
            humidity={`${weatherData.daily[2].humidity}%`}
          />

          <DailyForecastStep
            day={convertTimestampToDay(weatherData.daily[3].dt)}
            status={weatherData.daily[3].weather[0].main}
            high={`${roundNum(weatherData.daily[3].temp.max)}°C`}
            low={`${roundNum(weatherData.daily[3].temp.min)}°C`}
            wind={`${roundNum(weatherData.daily[3].wind_speed)} mph`}
            humidity={`${weatherData.daily[3].humidity}%`}
          />

          <DailyForecastStep
            day={convertTimestampToDay(weatherData.daily[4].dt)}
            status={weatherData.daily[4].weather[0].main}
            high={`${roundNum(weatherData.daily[4].temp.max)}°C`}
            low={`${roundNum(weatherData.daily[4].temp.min)}°C`}
            wind={`${roundNum(weatherData.daily[4].wind_speed)} mph`}
            humidity={`${weatherData.daily[4].humidity}%`}
          />

        </table>
    )

}

export default FiveDayForecast;
