import React, { PureComponent, createContext } from 'react';

const context = createContext();
const { Provider, Consumer } = context;
export { Provider, Consumer };

const initialState = {
  todos: []
};

const createInitialStore = () => initialState;
let store = createInitialStore();

const actions = {
  addTodo: todo => ({ type: 'ADD_TODO', payload: todo })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload] };
    default:
      return state;
  }
};

const dispatch = action => {
  const nextState = reducer(store, action);
  store = nextState;
};

export const connect = (stateToProps, dispatchToProps) => {
  const dispatches = dispatchToProps(dispatch);

  return C => {
    return class ConnectedComponent extends PureComponent {
      constructor() {
        super();
        this.dispatches = {};
        this.state = stateToProps(store);

        Object.keys(dispatches).forEach(key => {
          this.dispatches[key] = (...params) => {
            dispatches[key](...params);
            this.setState(stateToProps(store));
          };
        });
      }

      render() {
        return <C {...this.state} {...this.dispatches} />;
      }
    };
  };
};

class Hello extends PureComponent {
  render() {
    return (
      <div>
        <button onClick={() => this.props.addTodo('Hello')}>ADD HELLO</button>
        <ul>{this.props.todos.map(todo => <li key={todo}>{todo}</li>)}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch({ type: 'ADD_TODO', payload: todo })
});

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
