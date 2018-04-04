import axios from 'axios';

export const getCollections = () => {
    const request = axios.get(`/api/collections`)
        .then(result => {
            return result.data
        })
        .catch(err => {
            return {
                message: `There are no collections right now`
            }
        })
    return {
        type: 'GET_COLLECTIONS',
        payload: request
    }
}

export const getCollection = (id) => {
    const request = axios.get(`/api/collections/${id}`)
        .then(result => result.data)
    return {
        type: 'COLLECTION_DETAILS',
        payload: request
    }
}

export const addCollection = (collection) => {
    const request = axios.post('/api/collections', collection)
        .then(result => result.data);
    return {
        type: 'ADD_COLLECTION',
        payload: request
    }
}