import React from 'react';
import './DailyForecastStep.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloudSun, faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';

function DailyForecastStep(props) {

    function getIconFromStatus(status) {

        switch (status) {

            case 'sun':
                return (<FontAwesomeIcon icon={faSun} />);
            
            case 'cloud/sun':
                return (<FontAwesomeIcon icon={faCloudSun} />);
                
            case 'heavy-rain':
                return (<FontAwesomeIcon icon={faCloudShowersHeavy} />);

            default:
                return (<FontAwesomeIcon icon={faCloudSun} />)
        }
    }

    return (

        <>
            <div className='step-grid-item' id='empty-header' />
            <div className='step-grid-item' id='day-box'>{props.day}</div>
            <div className='step-grid-item' id='empty-header' />
            <div className='step-grid-item' id='rain-header'>Rain</div>
            <div className='step-grid-item' id='humidity-header'>Humidity</div>

            <div className='step-grid-item' id='icon-box'>{getIconFromStatus(props.status)}</div>
            <div className='step-grid-item' id='high-temp'>{props.high}</div>
            <div className='step-grid-item' id='low-temp'>{props.low}</div>
            <div className='step-grid-item' id='rain-data'>{props.rain}</div>
            <div className='step-grid-item' id='humidity-data'>{props.humidity}</div>
        </>

    )

}

export default DailyForecastStep;
