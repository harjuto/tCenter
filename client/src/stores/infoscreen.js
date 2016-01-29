import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import infoReducer from '../reducers/info';
import todoReducer from '../reducers/todo';

import { fetchWeather } from '../actions/weatherapi';
import { fetchMetro } from '../actions/hslapi';

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
)(createStore);

const combinedReducer = combineReducers({
  infoReducer,
  todoReducer
});

const store = createStoreWithMiddleware(combinedReducer);

store.dispatch(fetchWeather());
store.dispatch(fetchMetro());

export default store;
