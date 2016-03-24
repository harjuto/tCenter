import React from 'react';
import { connect } from 'react-redux';


class Cell extends React.Component {

  render() {
    const {state, dispatch} = this.props;
    let content = this.props.content;
    let style = {
      flex: content.size
    };
    var Widget = content.widget;

    // Here we should propably map widget name to its own reducer
    // But for now, give global state to all widgets.
    return (
      <div style={style}>
        <Widget style={style} state={state} dispatch={dispatch} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    state: state.infoReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell)