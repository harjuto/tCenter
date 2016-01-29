import React from 'react';
import IO from 'socket.io-client';

export default class TodoList extends React.Component {
  constructor() {
    super();
    this.socket = IO();
    this.socket.on('connect', socket => {
      socket.on('new todo', item => {
        this.props.addShoppingItem(item);
      });
      socket.on('initial todos', data => {
        this.props.setInitialTodos(data);
      });
    });
    this.socket.on('disconnect', () => {
    });
  }

  render() {
    return <div id="shop-container">
      <ul className="list-group">
        {this.renderItems()}
      </ul>
    </div>
  }

  renderItems() {
    return this.props.items.map((item, index) => {
      return <li key={index}>{item}</li>
    })
  }
}
