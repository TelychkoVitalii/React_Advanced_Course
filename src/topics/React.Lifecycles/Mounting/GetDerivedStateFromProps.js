import React, { Component, Fragment } from 'react';

// getDerivedStateFromProps exists for only one purpose.
// It enables a component to update its internal state as the result of changes in props.

// Basic Example
export default class GetDerivedStateFromProps extends Component {
  state = {
    name: 'Vitalii'
  };

  static getDerivedStateFromProps(props, state) {
    console.log('GetDerivedStateFromProps');
    return {
      name: 'Bob'
    }
  }

  componentDidMount() {
    console.log('ComponentDidMount');
    this.setState({ name: 'Steve' });
  }

  render() {
    console.log('Render');
    return (
      <Fragment>
        <h1>GetDerivedStateFromProps</h1>
        <h2>{this.state.name}</h2>
      </Fragment>
    )
  }
}

// Alternative 1
