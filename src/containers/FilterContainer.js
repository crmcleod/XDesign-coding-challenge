import React from 'react'
import Button from '../components/Button'
import FilterByYearSelector from '../components/FilterByYearSelecter'

const FilterContainer = ({ launchYears }) => {

    return(
        <>
            <FilterByYearSelector launchYears={ launchYears }/>
            <Button />
        </>
    )
}

export default FilterContainer