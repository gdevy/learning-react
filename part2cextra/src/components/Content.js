import React from 'react'
import Country from './Country'
import CountryItem from './CountryItem'

const Content = ({ countries }) => {

    if (countries.length > 10) {
        //return too many countries
    } else if (countries.length === 1) {
        //return specific country
    } else if (countries.length <= 10 && countries.length > 1) {
        //return short list of CountryItem
    }
}

export default Content
