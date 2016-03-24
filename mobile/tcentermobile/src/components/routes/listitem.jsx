import React from 'react-native'

const {
  View,
  Text,
  StyleSheet
  } = React;

export default class ListItem extends React.Component{

  render(){
    return (
      <View>
        <View style={style.row}>
          <Text style={style.text}>{this.props.text}</Text>
        </View>
        <View style={style.separator}/>
      </View>
    )
  }
}


const style = StyleSheet.create({
  row:{
    padding:10
  },
  separator:{
    height:1,
    backgroundColor:'#B6B6B6'
  },
  text:{
    flex:1
  }
});