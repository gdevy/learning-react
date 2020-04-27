import React, { useState } from 'react'
import Country from './Country'

const CountryItem = ({ country }) => {

    const [expand, setExpand] = useState(false)

    const toggleExpand = () => {
        setExpand(!expand)
    }

    if (expand) {
        return (
            <div>
                {country.name} <button onClick={toggleExpand}>{expand ? 'hide' : 'show'}</button>
                <Country country={country} />
            </div>
        )
    } else {
        return (
            <div>
                {country.name}
                <button onClick={toggleExpand}>{expand ? 'hide' : 'show'}</button>
            </div>
        )
    }
}

export default CountryItem
