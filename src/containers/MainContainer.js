import React, { useState, useEffect } from 'react'
import FilterContainer from './FilterContainer'
import HeaderContainer from './HeaderContainer'
import LaunchListContainer from './LaunchListContainer'
import axios from 'axios'
import launchImage from '../assets/img/launch-home@3x.png'
import '../stylesheets/main.css'

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
        setSortedAscending(true)
    }

    useEffect(() => {
        fetchData(apiURL)
    }, [])

    const filterDataForDisplay = () => {
        let filteredList
        if( listFilter.filtered ){
            filteredList = spaceXLaunches.filter((launch) => {
                return launch.launch_year == listFilter.launchYear })
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
            <HeaderContainer reloadData={ fetchData } apiURL={ apiURL }/>
            <img id="home-image" src={ launchImage } alt="space x launch home page image" />
            <FilterContainer 
                            launchYears={ launchYears } 
                            setSortedAscending={ setSortedAscending } 
                            sortedAscending={ sortedAscending } 
                            listFilter={ listFilter }
                            setListFilter={ setListFilter }
            />
            <LaunchListContainer launchesData={ launchDataForDisplay } />
        </>
    )
}

export default MainContainer