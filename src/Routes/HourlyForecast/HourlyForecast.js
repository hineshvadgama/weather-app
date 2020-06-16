import React from 'react';
import DailyInfo from '../../Components/DailyInfo/DailyInfo.js';
import { Link } from 'react-router-dom';

function HourlyForecast({match}) {

    return (
        <>
            <Link to='/'>Home</Link>
            <DailyInfo
                day={match.params.day}
            />
        </>
    );

}

export default HourlyForecast;
