import axios from 'axios';
export const getBooks = () => {
    const request = axios.get(`/api/books`)
        .then(result => result.data)
    return {
        type: 'GET_BOOKS',
        payload: request
    }
}

export const getBook = (id) => {
    const request = axios.get(`/api/books/${id}`)
        .then(result => result.data)
    return {
        type: 'GET_BOOK',
        payload: request
    }
}

export const addBook = (book, id) => {
    const request = axios.post(`/api/collections/${id}/books`)
        .then(result => result.data)
    return {
        type: 'ADD_BOOK',
        payload: request
    }
}