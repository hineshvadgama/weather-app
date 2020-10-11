import React, { useState, useEffect, useContext} from 'react';
import { CoordinateContext } from '../CoordinateContext.js';
import { getApiKey, getFormattedTemp } from '../../Utils/utils.js';
import DailyForecastStep from '../DailyForecastStep/DailyForecastStep.js';
import './FiveDayForecast.css';

function FiveDayForecast() {

    const coordinates = useContext(CoordinateContext);
    let [weatherData, setWeatherData] = useState();

    useEffect(() => {

        if (coordinates.latitude !== 'notSet') {

            const apiKey = getApiKey();

            fetch (`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${apiKey}&units=metric`)
            .then (res => res.json())
            .then (data => setWeatherData(data));
        }

    }, [coordinates]);


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


    function getArrayOfDays() {

        let arrayOfDays = ['Loading...'];

        if (typeof weatherData !== 'undefined') {

            arrayOfDays = [];

            for (let i = 0; i < 5; i++) {

                arrayOfDays.push(
                    <DailyForecastStep
                        key={i}
                        day={i === 0 ? 'Today' : convertTimestampToDay(weatherData.daily[i].dt)}
                        status={weatherData.daily[i].weather[0].main}
                        high={`${getFormattedTemp(weatherData.daily[i].temp.max)}`}
                        low={`${getFormattedTemp(weatherData.daily[i].temp.min)}`}
                        wind={`${getFormattedTemp(weatherData.daily[i].wind_speed)} mph`}
                        humidity={`${weatherData.daily[i].humidity}%`}
                    />
                );
            }

        }

        return arrayOfDays;

    }
    

    return (
        
        <table>

            {getArrayOfDays()}

        </table>

    )

}

export default FiveDayForecast;
