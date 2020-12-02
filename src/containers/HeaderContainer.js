import React from 'react'
import Button from '../components/Button'
import HeaderLogo from '../components/HeaderLogo'
import refreshIcon from '../assets/icon/refresh@3x.png'
import '../stylesheets/header.css'

const HeaderContainer = ({ reloadData, apiURL }) => {

    return(
        <>
            <header>
                <HeaderLogo />
                <Button buttonFunction={ reloadData } buttonId={ 'reload-button' } buttonText={ 'Reload Data' } icon={ refreshIcon } functionParams={ apiURL }/>
            </header>
        </>
    )
}

export default HeaderContainer