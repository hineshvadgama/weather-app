import React from 'react';
import './DailyInfo.css';

function DailyInfo() {

    return (

        <div className='di-grid-contanier'>

            <div className='di-grid-item' id='chance-of-rain'>
                <div className='di-content-parent'>
                    Chance of Rain
                    <br />
                    <span className='di-content'>40%</span>
                </div>
            </div>

            <div className='di-grid-item' id='realfeel'>
                <div className='di-content-parent'>
                    Realfeel
                    <br />
                    <span className='di-content'>24°C</span>
                </div>
            </div>

            <div className='di-grid-item' id='wind'>
                <div className='di-content-parent'>
                    Wind
                    <br />
                    <span className='di-content'>12 km/h</span>
                </div>
            </div>

            <div className='di-grid-item' id='humidity'>
                <div className='di-content-parent'>
                    Humidity
                    <br />
                    <span className='di-content'>74%</span>
                </div>
            </div>

        </div>

    );

}

export default DailyInfo;
