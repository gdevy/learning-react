import React, { useState } from 'react'
import UserList from './components/UserList'
import Register from './components/Register'
import Search from './components/Search'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const [searchTerm, setSearchTerm] = useState('')

  const filteredPersons = searchTerm.length === 0
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()))


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