import React, { useState, useEffect } from 'react'
import LaunchList from '../components/LaunchList'

const LaunchListContainer = ({ launchData }) => {

    return(
        <>
            <LaunchList launchData={ launchData } />
        </>
    )
}

export default LaunchListContainer