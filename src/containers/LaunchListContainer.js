/* eslint-disable react/prop-types */
import React from 'react'
import LaunchList from '../components/LaunchList'
import '../stylesheets/list.css'

const LaunchListContainer = ({ launchesData }) => {

    return(
        <>
            <section id="launch-list-wrapper">
                { launchesData ? 
                    <LaunchList launchesData={ launchesData } /> :
                    <h2> Preparing to launch 🚀 </h2> 
                }
            </section>
        </>
    )
}

export default LaunchListContainer