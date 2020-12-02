import React from 'react'
import Button from '../components/Button'
import FilterByYearSelector from '../components/FilterByYearSelecter'
import sortIcon from '../assets/icon/sort@3x.png'

const FilterContainer = ({ launchYears, setSortedAscending, sortedAscending }) => {

    return(
        <>
            <FilterByYearSelector launchYears={ launchYears }/>
            <Button buttonFunction={ setSortedAscending } 
                    functionParams={ !sortedAscending } 
                    buttonId={ 'sort-button' } 
                    buttonText={ `Sort ${ sortedAscending ? 'Descending' : 'Ascending' }` }
                    icon={ sortIcon }
            />
        </>
    )
}

export default FilterContainer