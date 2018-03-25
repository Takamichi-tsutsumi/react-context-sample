import React, { Fragment, Component } from 'react';
import { Consumer } from '../context/Context';

export default class Child extends Component {
  input;

  render() {
    return (
      <Consumer>
        {({ state, actions }) => {
          return (
            <Fragment>
              <ul>{state.todos.map(todo => <li key={todo}>{todo}</li>)}</ul>
              <input
                type="text"
                ref={input => {
                  this.input = input;
                }}
              />
              <button
                onClick={() => {
                  actions.addTodo(this.input.value);
                }}
              >
                Add
              </button>
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}
