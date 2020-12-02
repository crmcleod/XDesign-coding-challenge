import React from 'react'
import Button from '../components/Button'
import FilterByYearSelector from '../components/FilterByYearSelecter'
import sortIcon from '../assets/icon/sort@3x.png'
import '../stylesheets/filter.css'

const FilterContainer = ({ launchYears, setSortedAscending, sortedAscending, listFilter, setListFilter }) => {

    return(
        <>
            <div id="filter-buttons-wrapper">
                <FilterByYearSelector 
                        launchYears={ launchYears }
                        listFilter={ listFilter }
                        setListFilter={ setListFilter }
                />
                <Button buttonFunction={ setSortedAscending } 
                        functionParams={ !sortedAscending } 
                        buttonId={ 'sort-button' } 
                        buttonText={ `Sort ${ sortedAscending ? 'Descending' : 'Ascending' }` }
                        icon={ sortIcon }
                />
            </div>
        </>
    )
}

export default FilterContainer