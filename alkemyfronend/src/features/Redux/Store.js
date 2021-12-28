import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


import userReducer from './authDucks';
import boudgetsReducer from './boudgetsDucks'


const rootReducer = combineReducers({

    user: userReducer,
    budgets: boudgetsReducer
})





export default function generateStore() {
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
    return store
}