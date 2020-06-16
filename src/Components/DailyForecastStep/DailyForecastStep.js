import React from 'react';
import './DailyForecastStep.css';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faSun, faCloudSunRain, faCloudSun, faCloudShowersHeavy, faCloudRain, faSnowflake } from '@fortawesome/free-solid-svg-icons';

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
                <tr>
                    <td></td>
                    <td>{props.day}</td>
                    <td></td>
                    <td>Wind</td>
                    <td>Humidity</td>
                </tr>
            </tbody>
            <tbody onClick={handleClick}>
                <tr>
                    <td>{convertStatusToIcon()}</td>
                    <td>{props.high}</td>
                    <td>{props.low}</td>
                    <td>{props.wind}</td>
                    <td>{props.humidity}</td>
                </tr>
            </tbody>
        </>
    )

}

export default DailyForecastStep;
