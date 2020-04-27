import React from 'react'
import Weather from './Weather'


const Country = ({ country }) => {
    return (
        <>
            <h2>{country.name}</h2>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h3>languages</h3>
            <ul>
                {country.languages.map(language => <li key={language.iso639_1}>{language.name}</li>)}
            </ul>
            <img src={country.flagURL} alt={`The flag of ${country.name}`} />
            <Weather city={country.capital} />
        </>
    )
}

export default Country
