import React from 'react';
import './DailyInfo.css';
import '../HourlyInfo/HourlyInfo.js';
import HourlyInfo from '../HourlyInfo/HourlyInfo.js';

function DailyInfo(props) {

    return (

        <>

            <div className='viewing-day'>
                {props.day}
            </div>

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

            <div className='hi-container'>

                <HourlyInfo
                    time='00:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='01:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='02:00'
                    temp='21°C'
                    now={true}
                />
                <HourlyInfo
                    time='03:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='04:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='05:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='06:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='07:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='08:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='09:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='10:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='11:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='12:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='13:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='14:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='15:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='16:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='17:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='18:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='19:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='20:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='21:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='22:00'
                    temp='21°C'
                />
                <HourlyInfo
                    time='23:00'
                    temp='21°C'
                />

            </div>

        </>

    );

}

export default DailyInfo;
