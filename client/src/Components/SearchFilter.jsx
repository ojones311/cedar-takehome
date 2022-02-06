import React from 'react'

const SearchFilter = ({input:keyword, onChange:setKeyword}) => {
    return (
        <div className='search-filter'>
            <input 
                id='input' 
                type='text' 
                placeholder={'Filter by Dr name'} 
                value={keyword} 
                onChange={(e) => setKeyword(e.target.value)}
            />
        </div>
    )
}

export default SearchFilter 