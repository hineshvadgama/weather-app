import React from 'react';
import './CurrentTemp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faSun, faCloudShowersHeavy, faCloudRain, faSnowflake } from '@fortawesome/free-solid-svg-icons';

function CurrentTemp(props) {

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
        <div className='current-temp'>
            <div>{convertStatusToIcon()}</div>
            <div>{props.temp}</div>
            <div className='city-text'>{props.area}</div>
        </div>
    )

}

export default CurrentTemp;
