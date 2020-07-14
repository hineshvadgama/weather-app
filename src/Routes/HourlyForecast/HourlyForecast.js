import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DailyInfo from '../../Components/DailyInfo/DailyInfo.js';
import HourlyInfo from '../../Components/HourlyInfo/HourlyInfo.js';
import './HourlyForecast.css';
import { getApiKey } from '../../Utils/utils.js';

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

    }, [props]);

    function getDateFromObject(dateObject) {
        let day;
        let month;

        // Put 0 at the start of single digit date and month to match API format
        day = (dateObject.getDate() < 10) ? `0${dateObject.getDate()}` : dateObject.getDate();
        month = (dateObject.getMonth() < 10) ? `0${dateObject.getMonth()+1}` : dateObject.getMonth();

        const correctFormatDate = `${dateObject.getFullYear()}-${month}-${day}`;

        return correctFormatDate;
    }

    function setHourlyDataToSelectedDate() {

        if (typeof(hourlyData.renderedData[0].dt_txt) === 'string') {

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
                console.log(newHourlyData);
            }
        }

    }

    function getSelectedNumberOfDaysAheadOfToday(todaysDay, selectedDayOfWeek) {
        
        const twoWeeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        let twoWeekCounter = 0;

        while (selectedDayOfWeek !== twoWeeks[todaysDay]) {
            twoWeekCounter++
            todaysDay++
        }

        return twoWeekCounter;
    }

    function getHourlyComponents() {

        setHourlyDataToSelectedDate();

        let arrayOfHourlyInfoComponents = [];

        if (hourlyData.isDataSet === true) {

            for (let i = 0; i < hourlyData.renderedData.length; i++) {

                arrayOfHourlyInfoComponents.push(
                    <HourlyInfo
                        key={i}
                        time={extractTimeFromDateTime(hourlyData.renderedData[i].dt_txt)}
                        temp={`${Math.round(hourlyData.renderedData[i].main.temp)}°C`}
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
            <DailyInfo day={dayOfWeekInUrl} />

            <div className='hi-container'>

                {getHourlyComponents()}

            </div>
        </>
    );

}

export default HourlyForecast;
