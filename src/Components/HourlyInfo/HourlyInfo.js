import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faSun, faCloudShowersHeavy, faCloudRain, faSnowflake } from '@fortawesome/free-solid-svg-icons';
import './HourlyInfo.css';

function HourlyInfo(props) {

    let className;
    props.now ? className = 'highlight' : className='no-highlight';

    function convertStatusToIcon() {

        let iconName = <FontAwesomeIcon icon={faCloud} />
        
        switch (props.status) {
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

        <div className='single-hour'>
            <div className={className}>
                <span className='time'>{props.time}</span>
                <br /><br />
                <span className='temp'>{props.temp}</span>
                <br /><br />
            </div>
            <span className='icon'>
                {convertStatusToIcon()}
            </span>
        </div>

    );

}

export default HourlyInfo;
