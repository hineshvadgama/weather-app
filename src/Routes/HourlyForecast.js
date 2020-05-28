import React from 'react';
import DailyInfo from '../Components/DailyInfo/DailyInfo.js';

function HourlyForecast({match}) {

    return (
        <DailyInfo
            day={match.params.day}
        />
    );

}

export default HourlyForecast;
