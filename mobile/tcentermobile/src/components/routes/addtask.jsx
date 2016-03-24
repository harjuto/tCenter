import React from 'react-native';
import Button from './button';
const {
  View,
  Text,
  StyleSheet,
  TextInput
  } = React;

export default class CreateTask extends React.Component{

  render(){
    let description = this.props.state.newtask.description;
    let updateAction = this.props.actions.taskDescriptionTyped;

    return <View style={style.container}>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => updateAction(text)}
        value={description}
      />
      <Button text="Save" onClick={ () => this.props.actions.saveTask(description)}/>

    </View>
  }
}

const style = StyleSheet.create({

  container:{
    flex:1
  }
});