import React from 'react-native'
import { connect } from 'react-redux';
import { fetchTasks, taskDescriptionTyped, saveTask } from '../../actions/task';
import List from './list';
import AddTask from './addtask';

const {
  View,
  } = React;

class TaskListPage extends React.Component{

  render(){
    let {
      state,
      actions,
      } = this.props;
    return (
      <View>
        <List state={state} actions={actions} />
        <AddTask state={state} actions={actions} />
      </View>
    )
  }
}

function mapStateToProps(state){
  return {
    state: state.taskReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadTasks: () => dispatch( fetchTasks() ),
      taskDescriptionTyped: (description) => dispatch( taskDescriptionTyped(description)),
      saveTask: (description) => dispatch(saveTask(description))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListPage)
