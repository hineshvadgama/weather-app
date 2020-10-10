import React, { useEffect, useState, useContext } from 'react';
import './CurrentTemp.css';
import { CoordinateContext } from '../CoordinateContext.js';
import { getApiKey, getFormattedTemp } from '../../Utils/utils.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faSun, faCloudShowersHeavy, faCloudRain, faSnowflake } from '@fortawesome/free-solid-svg-icons';

function CurrentTemp() {

    const coordinates = useContext(CoordinateContext);
    let [weatherData, setWeatherData] = useState({status: 'Loading...', main: { temp: 'Loading...' }, area: 'Loading...'});

    useEffect(() => {

        const apiKey = getApiKey();

        if (coordinates.latitude !== "notSet") {
            fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${apiKey}&units=metric`)
            .then (res => res.json())
            .then (data => setWeatherData(data));
        }

    }, [coordinates]);

    function convertStatusToIcon() {

        let iconName = <FontAwesomeIcon icon={faCloud} />
        
        switch (weatherData.status) {
            case 'Thunderstorm':
                iconName = <FontAwesomeIcon icon={faCloudShowersHeavy} />
                break;
            
            case 'Drizzle':
                iconName = <FontAwesomeIcon icon={faCloudRain} />
                break;
    
            case 'Rain':
                iconName = <FontAwesomeIcon icon={faCloudShowersHeavy} />
                break;
    
            case 'Snow':
                iconName = <FontAwesomeIcon icon={faSnowflake} />
                break;
    
            case 'Clear':
                iconName = <FontAwesomeIcon icon={faSun} />
                break;
    
            case 'Clouds':
                iconName = <FontAwesomeIcon icon={faCloud} />
                break;
    
            default:
                iconName = <FontAwesomeIcon icon={faCloud} />
        }
    
        return iconName;
    }

    return (
        <div className='current-temp'>
            <div>{convertStatusToIcon()}</div>
            <div>{getFormattedTemp(weatherData.main.temp)}</div>
            <div className='city-text'>{weatherData.name}</div>
        </div>
    )

}

export default CurrentTemp;
