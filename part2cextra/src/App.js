import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Content from './components/Content'

const App = () => {

  const [countries, setCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((reponse) => {
        setCountries(
          reponse.data.map(country => {
            return {
              name: country.name,
              numericCode: country.numericCode,
              capital: country.capital,
              population: country.population,
              languages: country.languages,
              flagURL: country.flag
            }
          })
        )
      })
  }, [])

  const outputCountries = searchTerm.length === 0
    ? []
    : countries.filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <>
      <div>
        search country <input
          onChange={event => setSearchTerm(event.target.value)}
          value={searchTerm}
        />
      </div>
      <Content countries={outputCountries} />
    </>
  )
}

export default App
