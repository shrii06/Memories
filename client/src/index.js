import React from 'react'
import ReactDOM from 'react-dom'
// keep track  of that store - global state allows us access store from anywhere inside of the app 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers'
import App from './App'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

//we need the App component | connecting to the div with the ID of  root
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

