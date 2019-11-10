import { combineReducers } from 'redux';
import chatReducer from './chatReducer.js';
import messageReducer from './messageReducer.js';
import { connectRouter } from 'connected-react-router';

export default (history) => combineReducers({
    router: connectRouter(history),
    chatReducer,
    messageReducer,
});