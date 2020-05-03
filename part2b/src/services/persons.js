import axios from 'axios'

const baseURL = 'http://localhost:3001/persons'

const create = newPerson => {
    return axios.post(baseURL, newPerson).then(response => response.data)
}

const getAll = () => {
    return axios.get(baseURL).then(response => response.data)
}

const deletePerson = person => {
    return axios.delete(`${baseURL}/${person.id}`).then(response => response.data)
}

const update = updatePerson => {
    console.log('updatePerson', `${baseURL}/${updatePerson.id}`)
    return axios.put(`${baseURL}/${updatePerson.id}`, updatePerson).then(response => response.data)
}


export default {
    create,
    getAll,
    deletePerson,
    update
}