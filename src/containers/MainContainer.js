import React, { useState, useEffect } from 'react'
import FilterContainer from './FilterContainer'
import HeaderContainer from './HeaderContainer'
import LaunchListContainer from './LaunchListContainer'
import axios from 'axios'

const MainContainer = () => {

    const [ spaceXLaunches, setSpaceXLaunches ] = useState()
    const [ launchDataForDisplay, setLaunchDataForDisplay ] = useState()
    const [ apiURL, setApiURL ] = useState('https://api.spacexdata.com/v3/launches')

    const fetchData = async ( url ) => {
        const spaceXAPIResults = await axios( url )
        setSpaceXLaunches( spaceXAPIResults.data )
        setLaunchDataForDisplay( spaceXAPIResults.data )
    }

    useEffect(() => {
        fetchData(apiURL)
    })

    return(
        <>
            <HeaderContainer reloadData={ fetchData } />
            {/* Launch logo here */}
            <FilterContainer />
            { launchDataForDisplay ? 
                <LaunchListContainer launchData={ launchDataForDisplay } /> : 
                <p> Preparing to launch 🚀 </p> 
            }
        </>
    )
}

export default MainContainer