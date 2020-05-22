import React from 'react';
import './CurrentTemp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

function CurrentTemp(props) {

    return (
        <div class='current-temp'>
            <span class='city-text'>London</span>
            <br />
            {props.temp} <FontAwesomeIcon icon={faCloudSun} />
        </div>
    )

}

export default CurrentTemp;
