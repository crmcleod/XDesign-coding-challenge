import React from 'react'
import Button from '../components/Button'
import HeaderLogo from '../components/HeaderLogo'
import refreshIcon from '../assets/icon/refresh@3x.png'

const HeaderContainer = ({ reloadData, apiURL }) => {

    return(
        <>
            <HeaderLogo />
            <Button buttonFunction={ reloadData } buttonId={ 'reload-button' } buttonText={ 'Reload Data' } icon={ refreshIcon } functionParams={ apiURL }/>
        </>
    )
}

export default HeaderContainer