import React from 'react';
import { connect } from 'react-redux';
import Events from './events';
import Metro from './metro';
import Weather from './weather';
import Calendar from './calendar';
import TodoList from './todo';
import Shop from './shop';
import {addShoppingItem, setInitialTodos} from '../actions/todo';


class App extends React.Component{
    render(){
        const {
          metro,
          weather,
          todo,
          setInitialTodos,
          addShoppingItem } = this.props;
        return (
            <div id="container">
                <Calendar />
                <div id="data-display">
                    <div id="scroll-container">
                        <Metro metro={metro} />
                    </div>
                    <div id="upper-section">
                        <div></div>
                        <Weather weather={weather} />
                    </div>
                    <div id="lower-section">
                        <TodoList items={todo.items} setInitialTodos={setInitialTodos} addShoppingItem={addShoppingItem}  />
                    </div>

                </div>

            </div>
        )
    }
}


function mapStateToProps(state){
    return {
      metro: state.infoReducer.metro,
      weather: state.infoReducer.weather,
      todo: state.todoReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setInitialTodos: (list) => dispatch(setInitialTodos(list)),
        addShoppingItem: (item) => dispatch(addShoppingItem(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
