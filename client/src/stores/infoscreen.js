import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import infoReducer from '../reducers/info';

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
)(createStore);

const combinedReducer = combineReducers({
  infoReducer,
});

const store = createStoreWithMiddleware(combinedReducer);

export default store;
