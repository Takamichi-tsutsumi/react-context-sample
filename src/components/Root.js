import React, { Component } from 'react';
import Child from './Child';
import TodoContext from '../context/TodoContext';

class Root extends Component {
  state = {
    todos: ['hello', 'world']
  };

  actions = {
    addTodo: todo => {
      this.setState({ todos: [...this.state.todos, todo] });
    }
  };

  render() {
    return (
      <TodoContext.Provider
        value={{
          state: this.state,
          actions: this.actions
        }}
      >
        <Child />
      </TodoContext.Provider>
    );
  }
}

export default Root;
