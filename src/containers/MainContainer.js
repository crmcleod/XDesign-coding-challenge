import React, { useState, useEffect } from 'react'
import FilterContainer from './FilterContainer'
import HeaderContainer from './HeaderContainer'
import LaunchListContainer from './LaunchListContainer'
import axios from 'axios'

const MainContainer = () => {

    const [ spaceXLaunches, setSpaceXLaunches ] = useState()
    const [ launchDataForDisplay, setLaunchDataForDisplay ] = useState()
    const [ launchYears, setLaunchYears ] = useState()
    const [ listFilter, setListFilter ] = useState({ filtered: false, launchYear: null })
    const [ sortedAscending, setSortedAscending ] = useState(true)
    const [ apiURL, setApiURL ] = useState('https://api.spacexdata.com/v3/launches')


    const getLaunchYears = ( data ) => {return data.map( launch => launch.launch_year )}

    const fetchData = async ( url ) => {
        const spaceXAPIResults = await axios( url )
        setSpaceXLaunches( spaceXAPIResults.data )
        setLaunchDataForDisplay( spaceXAPIResults.data )
        setLaunchYears(getLaunchYears(spaceXAPIResults.data))
    }

    useEffect(() => {
        fetchData(apiURL)
    }, [])

    const filterDataForDisplay = () => {
        let filteredList
        if( listFilter.filtered ){
            filteredList = launchDataForDisplay.filter((launch) => {
                return parseInt(launch.launch_year) === listFilter.launchYear })
            setLaunchDataForDisplay(filteredList)
        } else {
            setLaunchDataForDisplay( spaceXLaunches )
        }
    }

    const toggleAscendingDescending = ( x ) => {
        if( !x ){
            const sortedData = launchDataForDisplay.map(launch => launch).reverse()
            setLaunchDataForDisplay(sortedData)
        }
    }

    useEffect(() => {
        filterDataForDisplay()
        toggleAscendingDescending(sortedAscending)
    }, [ listFilter, sortedAscending ])

    return(
        <>
            <HeaderContainer reloadData={ fetchData } />
            {/* Launch logo here */}
            <FilterContainer launchYears={ launchYears } />
            { launchDataForDisplay ? 
                <LaunchListContainer launchesData={ launchDataForDisplay } /> : 
                <p> Preparing to launch 🚀 </p> 
            }
        </>
    )
}

export default MainContainer