import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './BackButton.css';

function BackButton() {

    let backButton = <Link to='/'><FontAwesomeIcon icon={faArrowLeft} /></Link>

    const location = useLocation().pathname;
    if (location === '/') {
        backButton = <span className='button-space'>&nbsp;</span>
    }

    return (
        <div className='back-button'>
            {backButton}
        </div>
    );

}

export default BackButton;
