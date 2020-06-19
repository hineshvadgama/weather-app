import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import DailyInfo from '../../Components/DailyInfo/DailyInfo.js';
import HourlyInfo from '../../Components/HourlyInfo/HourlyInfo.js';
import './HourlyForecast.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function HourlyForecast(props) {

    const location = useLocation().pathname.substr(1);

    return (
        <>

            <Link to='/'><FontAwesomeIcon icon={faArrowLeft} /></Link>
            <DailyInfo day={location} />

            <div className='hi-container'>

                <HourlyInfo
                    time='00:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='01:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='02:00'
                    temp='21°C'
                    now={true}
                />
                <HourlyInfo
                    time='03:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='04:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='05:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='06:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='07:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='08:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='09:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='10:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='11:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='12:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='13:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='14:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='15:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='16:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='17:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='18:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='19:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='20:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='21:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='22:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='23:00'
                    temp='21°C'
                />

            </div>
        </>
    );

}

export default HourlyForecast;
