import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DailyInfo from '../../Components/DailyInfo/DailyInfo.js';
import HourlyInfo from '../../Components/HourlyInfo/HourlyInfo.js';
import NoHourlyDataMessage from '../../Components/NoHourlyDataMessage/NoHouryDataMessage.js';
import './HourlyForecast.css';
import { getApiKey, getDateFromObject } from '../../Utils/utils.js';

function HourlyForecast(props) {

    let [hourlyData, setHourlyData] = useState({renderedData: 'Loading...', isDataSet: false});
    let [isDataFetched, setIsDataFetched] = useState(false);
    const dayOfWeekInUrl = useLocation().pathname.substr(1);
    const todaysDateObject = new Date();

    useEffect(() => {

        if (isDataFetched === false) {

            if (typeof(props.coordinates.latitude) === 'number') {

                const apiKey = getApiKey();

                fetch (`https://api.openweathermap.org/data/2.5/forecast?lat=${props.coordinates.latitude}&lon=${props.coordinates.longitude}&appid=${apiKey}&units=metric`)
                .then (res => res.json())
                .then (data => setHourlyData({renderedData: data.list, isDataSet: false}));

                setIsDataFetched(true);
            }

        }
        // eslint-disable-next-line
    }, [props]);

    function setHourlyDataToSelectedDate() {

        let newHourlyData = [];
        let usersSelectedDay;

        if (dayOfWeekInUrl === 'Today') {

            usersSelectedDay = getDateFromObject(todaysDateObject);
        } else {

            const numberOfDaysBetweenTodayAndSelectedDay = getSelectedNumberOfDaysAheadOfToday(todaysDateObject.getDay(), dayOfWeekInUrl);
            let selectedDateObject = new Date();
            selectedDateObject.setDate(todaysDateObject.getDate() + numberOfDaysBetweenTodayAndSelectedDay);
            usersSelectedDay = getDateFromObject(selectedDateObject);
        }

        for (let i = 0; i < hourlyData.renderedData.length; i++) {

            const date = hourlyData.renderedData[i].dt_txt.slice(-19, -9);

            if (usersSelectedDay === date) {
                newHourlyData.push(hourlyData.renderedData[i]);
            }

        }

        if (hourlyData.isDataSet === false) {
            setHourlyData({renderedData: newHourlyData, isDataSet: true});
        }

    }

    function getSelectedNumberOfDaysAheadOfToday(todaysDay, selectedDayOfWeek) {
        
        const twoWeeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        let twoWeekCounter = 0;

        while (selectedDayOfWeek !== twoWeeks[todaysDay]) {
            twoWeekCounter++
            todaysDay++
        }

        return twoWeekCounter;
    }

    function getHourlyComponents() {

        let arrayOfHourlyInfoComponents = [];

        if (typeof(hourlyData.renderedData[0]) === 'undefined') {

            arrayOfHourlyInfoComponents = <NoHourlyDataMessage />

        } else if (typeof(hourlyData.renderedData[0].dt_txt) === 'string') {

            setHourlyDataToSelectedDate();

            if (hourlyData.isDataSet === true) {

                for (let i = 0; i < hourlyData.renderedData.length; i++) {
    
                    arrayOfHourlyInfoComponents.push(
                        <HourlyInfo
                            key={i}
                            time={extractTimeFromDateTime(hourlyData.renderedData[i].dt_txt)}
                            temp={`${Math.round(hourlyData.renderedData[i].main.temp)}°C`}
                            status={hourlyData.renderedData[i].weather[0].main}
                        />
                    );
    
                }
    
            }

        }

        return arrayOfHourlyInfoComponents;
    }

    function extractTimeFromDateTime(dateTime) {

        let time = dateTime.slice(10, 16);

        return time;
    }

    function getUserDay() {

        let dayInQuestion;
        if (dayOfWeekInUrl === 'Today') {

            dayInQuestion = getDateFromObject(todaysDateObject);
        } else {

            const numberOfDaysBetweenTodayAndSelectedDay = getSelectedNumberOfDaysAheadOfToday(todaysDateObject.getDay(), dayOfWeekInUrl);
            let selectedDateObject = new Date();
            selectedDateObject.setDate(todaysDateObject.getDate() + numberOfDaysBetweenTodayAndSelectedDay);
            dayInQuestion = getDateFromObject(selectedDateObject);
        }

        return dayInQuestion;
    }

    return (
        <>
            <DailyInfo
                day={dayOfWeekInUrl}
                latitude={props.coordinates.latitude}
                longitude={props.coordinates.longitude}
                userDay={getUserDay()}
            />

            <div className={`hi-container ${typeof(hourlyData.renderedData[0]) === 'undefined' ? 'justify-center' : ''}`}>

                {getHourlyComponents()}

            </div>
        </>
    );

}

export default HourlyForecast;
