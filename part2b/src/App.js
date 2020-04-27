import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UserList from './components/UserList'
import Register from './components/Register'
import Search from './components/Search'

const App = () => {

  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const [searchTerm, setSearchTerm] = useState('')

  const filteredPersons = searchTerm.length === 0
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()))

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])
  
  const registerFormHandler = (event) => {
    event.preventDefault()
    let newPerson = { name: newName, number: newNumber }
    if (persons.some(person => person.name === newPerson.name)) {
      alert(`${newPerson.name} is already added to phonebook`)
    } else if (!newName || !newNumber) {
      alert('Name or number missing')
    } else {
      setPersons([...persons, newPerson])
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <>
      <h2>Phonebook</h2>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Register
        registerFormHandler={registerFormHandler}
        newName={newName} setNewName={setNewName}
        newNumber={newNumber} setNewNumber={setNewNumber} />
      <UserList persons={filteredPersons} />
    </>
  )
}

export default App