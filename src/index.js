import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';

const feedback = (state = {}, action) => {
    if (action.type === "ADD_FEELING"){
        return { ...state, feeling: action.payload}
    } else if ( action.type === "ADD_UNDERSTANDING"){
        return { ...state, understanding: action.payload}
    } else if ( action.type === "ADD_SUPPORT"){
        return { ...state, support: action.payload}
    } else if ( action.type === "ADD_COMMENTS"){
        return { ...state, comments: action.payload}
    } 
    return state
}

const allReducers = combineReducers({
    feedback,
})

const store = createStore(
    allReducers,
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
