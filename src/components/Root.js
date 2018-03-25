import React, { Component } from 'react';
import Child from './Child';
import MyReduxComp from '../context/Context';
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
    return <MyReduxComp />;
  }
}

export default Root;
