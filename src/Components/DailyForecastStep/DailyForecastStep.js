import React from 'react';
import './DailyForecastStep.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

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
                    <td class='high-temp'>24°C<FontAwesomeIcon icon={faArrowUp} /></td>
                    <td class='low-temp'>21°C<FontAwesomeIcon icon={faArrowDown} /></td>
                </tr>
            </table>
            <table class='right-table'>
                <tr>
                    <td class='rain'>Rain</td>
                    <td>Humidity</td>
                </tr>
                <tr>
                    <td class='rain'>0%</td>
                    <td>75%</td>
                </tr>
            </table>
        </div>
    )

}

export default DailyForecastStep;
