import React from 'react'
import LaunchInformation from './LaunchInformation'

const LaunchList = ({ launchesData }) => {

    const launchDataNodes = launchesData.map(( launch ) => {
        return(
            < LaunchInformation key={ launch.flight_number } launchData={ launch } />
        )
    })

    return(
        <>
            <ul>
              { launchDataNodes }
            </ul>
        </>
    )
}

export default LaunchList