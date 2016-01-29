import {
  ADD_TODO_ITEM,
  TODO_ITEM_ADDED,
  SET_INITIAL_TODOS
} from '../actions/todo';

const initialState = {
  items: []
};


export default (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO_ITEM:
            return Object.assign({}, state, {
              items: state.items.concat(action.item)
            });
        case TODO_ITEM_ADDED:
            return Object.assign({}, state, {
              items: state.items.concat(action.item)
            });
        case SET_INITIAL_TODOS:
            return Object.assign({}, state, {
              items: action.list
            });
        default:
            return state;
    }
}
