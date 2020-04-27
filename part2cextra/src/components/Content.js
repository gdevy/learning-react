import React from 'react'
import Country from './Country'
import CountryItem from './CountryItem'

const Content = ({ countries }) => {

    if (countries.length > 10) {
        return (
            <p>Too many coutnries, be more specific</p>
        )
    } else if (countries.length === 1) {
        return (
            <Country country={countries[0]} />
        )
    } else if (countries.length <= 10 && countries.length > 1) {
        return (
            countries.map(country => <CountryItem key={country.numericCode} country={country} />)
        )
    } else {
        return (
            <>
            </>
        )
    }
}

export default Content
