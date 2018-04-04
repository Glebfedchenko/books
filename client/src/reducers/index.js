import { combineReducers } from 'redux';
import { books } from './books';
import { collections } from './collections';

const reducer = combineReducers({
    books,
    collections
})
export default reducer