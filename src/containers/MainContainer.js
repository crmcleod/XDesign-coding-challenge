import React, { useState, useEffect } from 'react'
import FilterContainer from './FilterContainer'
import HeaderContainer from './HeaderContainer'
import LaunchListContainer from './LaunchListContainer'
import MainLogo from '../components/MainLogo'
import axios from 'axios'
import '../stylesheets/main.css'

const MainContainer = () => {

    const [ spaceXLaunches, setSpaceXLaunches ] = useState()
    const [ launchDataForDisplay, setLaunchDataForDisplay ] = useState()
    const [ launchYears, setLaunchYears ] = useState()
    const [ listFilter, setListFilter ] = useState({ filtered: false, launchYear: null })
    const [ sortedAscending, setSortedAscending ] = useState(true)
    const [ apiURL ] = useState('https://api.spacexdata.com/v3/launches')


    const getLaunchYears = ( data ) => {return data.map( launch => launch.launch_year )}

    const resetSelect = () => {
        document.querySelector('#filter-year-selector').selectedIndex = 0
    }

    const fetchData = async ( url ) => {
        const spaceXAPIResults = await axios( url )
        setSpaceXLaunches( spaceXAPIResults.data )
        setLaunchDataForDisplay( spaceXAPIResults.data )
        setLaunchYears(getLaunchYears(spaceXAPIResults.data))
        setSortedAscending(true)
        resetSelect()
    }

    useEffect( () => fetchData(apiURL), [ apiURL ])

    const filterDataForDisplay = () => {
        let filteredList
        if( listFilter.filtered ){
            filteredList = spaceXLaunches.filter((launch) => {
                return launch.launch_year === listFilter.launchYear })
            setLaunchDataForDisplay(filteredList)
            setSortedAscending(true)

        } else {
            setLaunchDataForDisplay( spaceXLaunches )
        }
    }

    const toggleAscendingDescending = async ( ) => {
        const sortedData = launchDataForDisplay.map( launch => launch ).reverse()
        setLaunchDataForDisplay( await sortedData )
        setSortedAscending( !sortedAscending )
        let topOfList = document.querySelector( '.flight-node' )
        topOfList.scrollIntoView()
    }

    useEffect( filterDataForDisplay, [ listFilter ] )

    return(
        <>
            <HeaderContainer reloadData={ fetchData } apiURL={ apiURL } />
            <MainLogo />
            <FilterContainer 
                launchYears={ launchYears } 
                toggleAscendingDescending={ toggleAscendingDescending } 
                sortedAscending={ sortedAscending } 
                listFilter={ listFilter }
                setListFilter={ setListFilter }
            />
            <LaunchListContainer launchesData={ launchDataForDisplay } />
        </>
    )
}

export default MainContainer