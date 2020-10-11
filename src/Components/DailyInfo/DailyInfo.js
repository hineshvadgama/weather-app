import React, { useContext, useEffect, useState } from 'react';
import { getApiKey, getDateFromObject } from '../../Utils/utils.js';
import './DailyInfo.css';
import { CoordinateContext } from '../CoordinateContext.js';

function DailyInfo(props) {

    let [weatherData, setWeatherData] = useState();
    let [isDataFetched, setIsDataFetched] = useState(false);
    const coordinates = useContext(CoordinateContext);
    let userWeatherData = 'Loading...';

    useEffect(() => {

        if (coordinates.latitude !== 'notSet') {

            if (isDataFetched === false) {

                const apiKey = getApiKey();

                fetch (`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${apiKey}&units=metric`)
                .then (res => res.json())
                .then (data => setWeatherData(data));

                setIsDataFetched(true);

            }

        }
        // eslint-disable-next-line
    }, [coordinates]);

    function convertApiTimestampToDate(apiTimestamp) {
        const apiDate = new Date(apiTimestamp * 1000);
        return apiDate;
    }

    if (isDataFetched === true) {

        if (weatherData) {

            for (let i = 0; i < weatherData.daily.length; i++) {
                let iteratingDate = convertApiTimestampToDate(weatherData.daily[i].dt);
                const formattedIteratingDate = getDateFromObject(iteratingDate);

                if (formattedIteratingDate === props.userDay) {
                    userWeatherData = weatherData.daily[i];
                    break;
                }
            }

        }

    }

    function getHumidity() {
        let humidity = 'Loading...';
        if (isDataFetched === true) {
            if (weatherData) {
                humidity = `${userWeatherData.humidity}%`;
            }
        }
        return humidity;
    }

    function getRealFeel() {
        let realFeel = 'Loading...';
        if (isDataFetched === true) {
            if (weatherData) {
                realFeel = `${Math.round(userWeatherData.feels_like.day)}°C`;
            }
        }
        return realFeel;
    }

    function getWindSpeed() {
        let windSpeed = 'Loading...';
        if (isDataFetched === true) {
            if (weatherData) {
                windSpeed = `${Math.round(userWeatherData.wind_speed)} mp/h`;
            }
        }
        return windSpeed;
    }

    function getUVI() {
        let uvi = 'Loading...';
        if (isDataFetched === true) {
            if (weatherData) {
                uvi = `${Math.round(userWeatherData.uvi)}`;
            }
        }
        return uvi;
    }

    return (

        <>

            <div className='viewing-day'>
                {props.day}
            </div>

            <div className='di-grid-contanier'>

                <div className='di-grid-item' id='chance-of-rain'>
                    <div className='di-content di-content-left'>
                        <span className='di-content-header'>UVI</span>&nbsp;&nbsp;{getUVI()}
                    </div>
                </div>

                <div className='di-grid-item' id='realfeel'>
                    <div className='di-content di-content-right'>
                        <span className='di-content-header'>Realfeel</span>&nbsp;&nbsp;{getRealFeel()}
                    </div>
                </div>

                <div className='di-grid-item'>
                    <div className='di-content di-content-left'>
                        <span className='di-content-header'>Wind</span>&nbsp;&nbsp;{getWindSpeed()}
                    </div>
                </div>

                <div className='di-grid-item'>
                    <div className='di-content di-content-right'>
                        <span className='di-content-header'>Humidity</span>&nbsp;&nbsp;{getHumidity()}
                    </div>
                </div>

            </div>

        </>

    );

}

export default DailyInfo;
