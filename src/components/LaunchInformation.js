import React from 'react'
import dateFormat from 'dateformat'

const LaunchInformation = ({ launchData }) => {
    return(
        <>
            <li className="flight-node">
                <span className="flight-number"> #{ launchData.flight_number } </span>
                <span className="mission-name"> { launchData.mission_name } </span>
                <div>
                    <span className="launch-date"> { dateFormat(launchData.launch_date_utc, 'dS mmm yyyy') } </span>
                    <span className="rocket-name"> { launchData.rocket.rocket_name } </span>
                </div>
            </li>
        </>
    )
}

export default LaunchInformation