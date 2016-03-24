import config from '../config';

export const TASK_DESCRIPTION_TYPED = 'TASK_DESCRIPTION_TYPED';
export const SAVE_NEW_TASK = 'SAVE_NEW_TASK';

export const FETCH_TASKS = 'FETCH_TASKS';
export const RECEIVE_TASKS = 'RECEIVE_TASKS';

export function fetchTasks(){
  return dispatch => {
    return fetch(config.api.tasks)
      .then(response => response.json())
      .then(json => {
        let tasks = json.map((task) => {
          return task.description;
        });
        dispatch(receiveTasks(tasks))
      });

    //Error handling here.
  };
}

export function receiveTasks(tasks){
  return {
    type: RECEIVE_TASKS,
    tasks: tasks
  }
}

export function taskDescriptionTyped(text){
  return {
    type: TASK_DESCRIPTION_TYPED,
    text: text
  }
}

export function saveTask(desc){
  return dispatch => {
    console.log('SAVING TASK' + desc)
    return fetch(config.api.tasks,{
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        description: desc
      })
    })
    .then(response => {
      dispatch(fetchTasks());
    });


    //Error handling here.
  };
}