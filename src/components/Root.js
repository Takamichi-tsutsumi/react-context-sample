import React, { Component } from 'react';
import Child from './Child';
import { Provider } from '../context/Context';

class Root extends Component {
  state = {
    todos: []
  };

  actions = {
    addTodo: todo => {
      this.setState({ todos: [...this.state.todos, todo] });
    }
  };

  render() {
    return (
      <Provider
        value={{
          state: this.state,
          actions: this.actions
        }}
      >
        <Child />
      </Provider>
    );
  }
}

export default Root;
