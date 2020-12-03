import React from 'react'
import logo from '../assets/spacex-logo.png'

const HeaderLogo = () => {
    return(
        <>
            <div id="header-logo-container">
                <img src={ logo } alt="space x logo" />
                <span>LAUNCHES</span>
            </div>
        </>
    )
}

export default HeaderLogo