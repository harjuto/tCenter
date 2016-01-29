export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const TODO_ITEM_ADDED = 'TODO_ITEM_ADDED';
export const SET_INITIAL_TODOS = 'SET_INITIAL_TODOS';

export function addTodoItem(item){
    return {
        type: ADD_TODO_ITEM,
        item: item
    }
}

export function todoItemAdded(item){
  return {
      type: TODO_ITEM_ADDED,
      item: item
  }
}

export function setInitialTodos(list){
  return {
      type: SET_INITIAL_TODOS,
      list: list
  }
}
