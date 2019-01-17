import React, { Component, createContext } from 'react';

const { Provider, Consumer } = createContext();

// Another variant to pass data
// const Context = createContext({
//   data: 'some data',
//   num: 56
// });

export default class MyProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: 'Bob',
        lastName: 'Johnson',
        age: 42,
        isAdmin: false
      },
      changeAge: this.changeAge
    }
  }

  changeAge = () => this.setState(prevState => ({
    ...prevState,
    user: {
      ...prevState.user,
      age: 20
    }
  }));

  render() {
    return (
      <Provider value={this.state}>
        <MyConsumer />
      </Provider>
    )
  }
}

class MyNextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: 'Steve',
        lastName: 'Stevenson',
        age: 24,
        isAdmin: true,
        changeAge: this.changeAge
      }
    }
  }

  changeAge = () => this.setState(prevState => ({
    ...prevState,
    user: {
      ...prevState.user,
      age: 20
    }
  }));

  render() {
    return (
      <Provider value={{
        user: this.state.user,
        changeAge: this.changeAge
      }}>
        {this.props.children}
      </Provider>
    )
  }
}

class MyConsumer extends Component {
  render() {
    return (
      <>
        <Consumer>
          {({ user, changeAge }) => (
            <>
              <h1>{user.firstName}</h1>
              <h2>{user.lastName}</h2>
              <h3>{user.age}</h3>
              <button onClick={changeAge}>Click</button>
            </>
          )}
        </Consumer>
        <MyNextProvider>
          <Consumer>
            {context => (
              <>
                <h1>{context.user.age}</h1>
                <button onClick={context.changeAge}>Click</button>
              </>
            )}
          </Consumer>
        </MyNextProvider>
      </>
    )
  }
}
