import React from 'react';
import ReactDOM from 'react-dom'
import App from './App/App'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import numReducer from './MeusTestes/reducers/numReducer'

const elemento = document.getElementById('root')

const reducers = combineReducers({
    numReducer: numReducer
})


ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    elemento
)