import React from 'react'

import '../Styles/SearchFilter.css'

const SearchFilter = ({searchTerm, setSearchTerm}) => {
    return (
        <div className='search-filter'>
            <input 
                id='input' 
                type='text' 
                placeholder={'Filter by Dr name'} 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    )
}

export default SearchFilter 