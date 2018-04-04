import reducer from '../reducers/index';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise';

const enhancer = applyMiddleware(promiseMiddleware, thunk);
const store = createStore(reducer, composeWithDevTools(enhancer))

export default store