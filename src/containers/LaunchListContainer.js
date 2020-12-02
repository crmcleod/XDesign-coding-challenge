import React, { useState, useEffect } from 'react'
import LaunchList from '../components/LaunchList'
import '../stylesheets/list.css'

const LaunchListContainer = ({ launchesData }) => {

    return(
        <>
            <section id="launch-list-wrapper">
                { launchesData ? 
                    <LaunchList launchesData={ launchesData } /> :
                    <p> Preparing to launch 🚀 </p> 
                }
            </section>
        </>
    )
}

export default LaunchListContainer