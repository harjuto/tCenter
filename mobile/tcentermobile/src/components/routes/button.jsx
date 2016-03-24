import React from 'react-native'

const {
  TouchableHighlight,
  StyleSheet,
  Text
  } = React;

//Always export the default, otherwise you have to specify with brackets what to import.
export default class Button extends React.Component{

  render(){
    return (
      <TouchableHighlight
        underlayColor={'gray'}
        onPress={this.props.onClick}
        style={style.default}>
        <Text style={style.text}>
          {this.props.text}
        </Text>
      </TouchableHighlight>
    );
  }

}

const style = StyleSheet.create({
  default:{
    borderWidth: 2,
    height: 40,
    width: 100,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text:{
    color:'#212121',
    fontWeight: "bold",
    fontSize: 18
  }
});