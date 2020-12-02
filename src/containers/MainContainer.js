import React, { useState, useEffect } from 'react'
import FilterContainer from './FilterContainer'
import HeaderContainer from './HeaderContainer'
import LaunchListContainer from './LaunchListContainer'

const MainContainer = () => {

    return(
        <>
            <HeaderContainer />
            {/* Launch logo here */}
            <FilterContainer />
            <LaunchListContainer />
        </>
    )
}

export default MainContainer