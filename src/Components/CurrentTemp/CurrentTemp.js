import React from 'react';
import './CurrentTemp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

function CurrentTemp(props) {

    return (
        <div className='current-temp'>
            <div><FontAwesomeIcon icon={faCloudSun} /></div>
            <div>{props.temp}</div>
            <div className='city-text'>{props.area}</div>
        </div>
    )

}

export default CurrentTemp;
