import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Content from './components/Content'

const App = () => {

  const [countries, setCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <>
      <div>
        search country <input
          onChange={'change handler'}
          value={searchTerm}
        />
      </div>
      <Content countries={''} />
    </>
  )
}

export default App
