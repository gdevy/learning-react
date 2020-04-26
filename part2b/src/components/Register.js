import React from 'react'

const Register = ({ registerFormHandler, newName, setNewName, newNumber, setNewNumber }) => {
    return (
        <>
            <h2>add a new</h2>
            <form onSubmit={registerFormHandler}>
                <div>
                    name: <input
                        onChange={(event) => setNewName(event.target.value)}
                        value={newName}
                    />
                </div>
                <div>
                    number: <input
                        onChange={(event) => setNewNumber(event.target.value)}
                        value={newNumber}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </>
    )
}

export default Register
