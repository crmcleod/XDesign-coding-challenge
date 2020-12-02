import React, { useState, useEffect } from 'react'
import LaunchList from '../components/LaunchList'

const LaunchListContainer = ({ launchesData }) => {

    return(
        <>
            <LaunchList launchesData={ launchesData } />
        </>
    )
}

export default LaunchListContainer