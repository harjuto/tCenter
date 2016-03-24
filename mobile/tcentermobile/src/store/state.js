import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

//Import reducers
import taskReducer from '../reducers/task';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware // lets us dispatch() functions
)(createStore);

const combinedReducer = combineReducers({
  taskReducer
});

const store = createStoreWithMiddleware(combinedReducer);


export default store;
