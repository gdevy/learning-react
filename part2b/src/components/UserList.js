import React from 'react'

const UserList = ({ persons, deleteClickHandler }) => {

    return (
        <>
            <h2>Numbers</h2>
            {persons.map(person => {
                return (
                    <div key={person.id}>
                        <p key={person.name}>{person.name} {person.number}</p>
                        <button onClick={deleteClickHandler(person)}>delete</button>
                    </div>
                )
            })}
        </>
    )
}

export default UserList
