import React from 'react'

const LaunchInformation = ({ launchData }) => {
    return(
        <>
            <div>
                <span> # { launchData.launch_year } </span>
                <span> { launchData.mission_name } </span>
                <span> { launchData.launch_date_utc } </span>
                <span> { launchData.rocket.rocket_name } </span>
            </div>
        </>
    )
}

export default LaunchInformation