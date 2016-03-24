import React from 'react-native';
import ListItem from './listitem';

const {
  ListView
  } = React;

export default class List extends React.Component{

  componentDidMount(){
    this.props.actions.loadTasks();
  }
  render(){
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let data = this.props.state.tasks;
    let dataSource = ds.cloneWithRows(data);
    return <ListView
      initialListSize={1}
      dataSource={dataSource}
      renderRow={(rowData) => <ListItem key={rowData._id} text={rowData}/>}
    />
  }
}