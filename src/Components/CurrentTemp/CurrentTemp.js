import React from 'react';
import './CurrentTemp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

function CurrentTemp(props) {

    return (
        <div className='current-temp'>
            <span className='city-text'>{props.area}</span>
            <br />
            {props.temp} <FontAwesomeIcon icon={faCloudSun} />
        </div>
    )

}

export default CurrentTemp;
