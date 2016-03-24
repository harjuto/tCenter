import React from 'react-native';
import { Provider } from 'react-redux';
import Store from './store/state';

import TaskListPage from './components/routes/tasklist.jsx'

const {
  StyleSheet,
  Navigator,
  View
  } = React;

export default class Main extends React.Component{
  constructor(){
    super();
    this.renderScene = this.renderScene.bind(this);
  }
  render(){
    return (
      <Navigator
        style={style.container}
        initialRoute={ {component: TaskListPage} }
        renderScene={ this.renderScene }
        configureScene={ () => {return Navigator.SceneConfigs.PushFromRight} }
      />
    )
  }

  renderScene(route, navigator){
    let Component = route.component;
    console.info(Component)
    return (
      <Provider store={ Store }>
        <View style={style.container}>
          <Component route={route} navigator={navigator}/>
        </View>
      </Provider>
    )
  }
}


const style = StyleSheet.create({
  container:{
    flex:1
  }
});