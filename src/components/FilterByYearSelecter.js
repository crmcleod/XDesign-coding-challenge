import React from 'react'

const FilterByYearSelector = ({ launchYears, listFilter, setListFilter }) => {

    let options
    if( launchYears ){
        const uniqueYears = [...new Set( launchYears )]
        options = uniqueYears.map( ( year ) => {
            return( <option key={ year } value={ year }> { year } </option>)
        })}

    const handleYearFilterChange = ( event ) => {
        if(event.target.value){
            setListFilter(
                {...listFilter, filtered: true, launchYear: event.target.value }
            )
        } else {
            setListFilter(
                {...listFilter, filtered: false, launchYear: event.target.value }
            )
        }
    }

    return(
        <>
            <select onChange={ handleYearFilterChange } id="filter-year-selector">
                <option defaultValue="Filter by Year" disabled >Filter by Year</option>
                <option value="" >Show all</option>
                { options }
            </select>
        </>
    )
}

export default FilterByYearSelector