export const books = (state = [], action) => {
    switch (action.type) {
        case 'GET_BOOKS':
            return {
                ...state,
                shelf: action.payload
            }
        case 'ADD_BOOK':
            return {
                ...state,
                book: action.payload
            }
        default:
            return state
    }
}