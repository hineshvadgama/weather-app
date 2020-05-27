import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import './HourlyInfo.css';

function HourlyInfo(props) {

    let className;
    props.now ? className = 'highlight' : className='no-highlight';

    return (

        <div className='single-hour'>
            <div className={className}>
                <span className='time'>{props.time}</span>
                <br /><br />
                <span className='temp'>{props.temp}</span>
                <br /><br />
            </div>
            <span className='icon'>
                <FontAwesomeIcon icon={faCloudSun } />
            </span>
        </div>

    );

}

export default HourlyInfo;
