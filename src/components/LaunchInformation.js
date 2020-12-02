import React from 'react'
import dateFormat from 'dateformat'

const LaunchInformation = ({ launchData }) => {
    return(
        <>
            <li>
                <span> # { launchData.flight_number } </span>
                <span> { launchData.mission_name } </span>
                <span> { dateFormat(launchData.launch_date_utc, "dS mmm yyyy") } </span>
                <span> { launchData.rocket.rocket_name } </span>
            </li>
        </>
    )
}

export default LaunchInformation