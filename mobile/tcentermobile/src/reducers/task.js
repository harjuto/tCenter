//Import actions
import {
  FETCH_TASKS,
  RECEIVE_TASKS,
  TASK_DESCRIPTION_TYPED
} from '../actions/task';

const initialState = {
  tasks: [],
  loading: false,
  newtask:{
    description:'',
    saved: false
  }
};



export default (state = initialState, action) => {
  switch(action.type){
    case FETCH_TASKS:
      return Object.assign({}, state, {
        'loading': true
      });
    case RECEIVE_TASKS:
      return Object.assign({}, state, {
        'tasks': action.tasks
      });
    case TASK_DESCRIPTION_TYPED:
      return Object.assign({}, state, {
        newtask:{
         description: action.text
        }
      });
    default:
      return state;
  }
}
