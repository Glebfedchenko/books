export const collections = (state = [], action) => {
    switch (action.type) {
        case 'GET_COLLECTIONS':
            return {
                ...state,
                collections: action.payload
            }
        case 'COLLECTION_DETAILS':
            return {
                ...state,
                collection: action.payload
            }
        case 'ADD_COLLECTION':
            return {
                ...state,
                newbook: action.payload
            }
        default:
            return state
    }
}