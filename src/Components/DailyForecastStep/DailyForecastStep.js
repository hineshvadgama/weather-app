import React from 'react';
import './DailyForecastStep.css';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faSun, faCloudShowersHeavy, faCloudRain, faSnowflake } from '@fortawesome/free-solid-svg-icons';

function DailyForecastStep(props) {

    const history = useHistory();

    function handleClick() {
        history.push(`/${props.day}`);
    }

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
        <>
            <tbody onClick={handleClick}>
                <tr className='header-row'>
                    <td></td>
                    <td id='day'>{props.day}</td>
                    <td></td>
                    <td className='grey' id='wind-header'>Wind</td>
                    <td className='grey' id='humidity-header'>Humidity</td>
                </tr>
            </tbody>
            <tbody onClick={handleClick}>
                <tr className='data-row'>
                    <td className='grey table-data' id='icon'>{convertStatusToIcon()}</td>
                    <td className='table-data' id='high-temp'>{props.high}</td>
                    <td className='table-data' id='low-temp'>{props.low}</td>
                    <td className='table-data' id='wind'>{props.wind}</td>
                    <td className='table-data' id='humidity'>{props.humidity}</td>
                </tr>
            </tbody>
        </>
    )

}

export default DailyForecastStep;
