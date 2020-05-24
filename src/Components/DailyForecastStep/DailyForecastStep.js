import React from 'react';
import './DailyForecastStep.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

function DailyForecastStep(props) {

    return (
        <div class='step-container'>
            <table class='left-table'>
                <tr>
                    <td></td>
                    <td class='day-box'>{props.day}</td>
                </tr>
                <tr>
                    <td class='icon-box'><FontAwesomeIcon icon={faCloudSun} /></td>
                    <td class='high-temp'>24°C</td>
                    <td class='low-temp'>21°C</td>
                </tr>
            </table>
            <table class='right-table'>
                <tr>
                    <td class='rain right-header'>Rain</td>
                    <td class='right-header'>Humidity</td>
                </tr>
                <tr>
                    <td class='rain right-data'>0%</td>
                    <td class='right-data'>75%</td>
                </tr>
            </table>
        </div>
    )

}

export default DailyForecastStep;
