import React from 'react'

const Search = ({ searchTerm, setSearchTerm }) => {


    return (
        <>
            <div>
                filter shown with <input
                    onChange={(event) => setSearchTerm(event.target.value)}
                    value={searchTerm}
                />

            </div>
        </>
    )
}

export default Search
