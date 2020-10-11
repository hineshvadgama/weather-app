import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import DailyInfo from '../../Components/DailyInfo/DailyInfo.js';
import HourlyInfo from '../../Components/HourlyInfo/HourlyInfo.js';
import NoHourlyDataMessage from '../../Components/NoHourlyDataMessage/NoHouryDataMessage.js';
import './HourlyForecast.css';
import { getApiKey, getDateFromObject } from '../../Utils/utils.js';
import { CoordinateContext } from '../../Components/CoordinateContext.js';
import CurrentTemp from '../../Components/CurrentTemp/CurrentTemp.js';

function HourlyForecast() {

    let [hourlyData, setHourlyData] = useState({renderedData: 'Loading...'});
    const coordinates = useContext(CoordinateContext);
    const dayOfWeekInUrl = useLocation().pathname.substr(1);
    const todaysDateObject = new Date();

    useEffect(() => {

        if (coordinates.latitude !== 'notSet') {

            const apiKey = getApiKey();

            fetch (`https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${apiKey}&units=metric`)
            .then (res => res.json())
            .then (data => {

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
            
                for (let i = 0; i < data.list.length; i++) {
            
                    const date = data.list[i].dt_txt.slice(-19, -9);
            
                    if (usersSelectedDay === date) {
                        newHourlyData.push(data.list[i]);
                    }
            
                }
            
                setHourlyData({renderedData: newHourlyData});
            
            });
        }
        // eslint-disable-next-line
    }, [coordinates]);


    function getSelectedNumberOfDaysAheadOfToday(todaysDay, selectedDayOfWeek) {
        
        const twoWeeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        let twoWeekCounter = 0;

        while (selectedDayOfWeek !== twoWeeks[todaysDay]) {
            twoWeekCounter++
            todaysDay++
        }

        return twoWeekCounter;
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

    function getHourlyComponents() {

        let arrayOfHourlyInfoComponents = [];
        
        if (typeof(hourlyData.renderedData[0]) === 'undefined') {
    
            arrayOfHourlyInfoComponents = <NoHourlyDataMessage />
    
        } else if (typeof(hourlyData.renderedData[0].dt_txt) === 'string') {
    
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
    
        return arrayOfHourlyInfoComponents;
    }

    function extractTimeFromDateTime(dateTime) {

        let time = dateTime.slice(10, 16);
    
        return time;
    }
    

    return (
        <>
            <CurrentTemp />
            <DailyInfo day={dayOfWeekInUrl} userDay={getUserDay()} />

            <div className={`hi-container ${typeof(hourlyData.renderedData[0]) === 'undefined' ? 'justify-center' : ''}`}>
                {getHourlyComponents()}
            </div>
        </>
    )

}

export default HourlyForecast;
