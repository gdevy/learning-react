import React, { useState, useEffect } from 'react'
import personService from './services/persons'
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

  const deleteClickHandler = (toDelete) => {
    return (event) => {
      console.log('event', event)
      if (window.confirm(`Delete ${toDelete.name} from the phone book?`)) {
        personService
          .deletePerson(toDelete)
          .then(response => {
            console.log('deleted', response)
            setPersons(persons.filter(person => person.id !== toDelete.id))
          })
          .catch(err => {
            window.alert(`${toDelete.name} has already been deleted`)
            setPersons(persons.filter(person => person.id !== toDelete.id))
          })
      }
    }
  }

  useEffect(() => {
    personService
      .getAll()
      .then(allPersons => {
        setPersons(allPersons)
      })
  }, [])

  const registerFormHandler = (event) => {
    event.preventDefault()
    const newPerson = { name: newName, number: newNumber }
    const existingPerson = persons.find(person => person.name === newPerson.name)
    if (existingPerson) {
      if (window.confirm(`${newPerson.name} is already added to the phonebook, replace the old number with a new one?`)) {
        console.log('existingPerson', existingPerson)
        personService.update({...existingPerson, number: newNumber})
          .then(updatedPerson => {
            setPersons(persons.map(person => person.id !== updatedPerson.id ? person : updatedPerson))
          })
      }
    } else if (!newName || !newNumber) {
      alert('Name or number missing')
    } else {
      personService
        .create(newPerson)
        .then(data => {
          console.log('response', data)
          setPersons([...persons, data])
        })
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
      <UserList persons={filteredPersons} deleteClickHandler={deleteClickHandler} />
    </>
  )
}

export default App