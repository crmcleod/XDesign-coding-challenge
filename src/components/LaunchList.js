import React from 'react'
import LaunchInformation from './LaunchInformation'

const LaunchList = ({ launchesData }) => {

    // issues with missing flight IDs, repeated launch numbers and dates - so concatenated date and flight number to provide unique key
    const launchDataNodes = launchesData.map(( launch ) => {
        return(
            < LaunchInformation key={ launch.launch_date_utc + launch.flight_number} launchData={ launch } />
        )
    })

    return(
        <>
            <ul id="launch-list">
                { launchDataNodes }
            </ul>
        </>
    )
}

export default LaunchList