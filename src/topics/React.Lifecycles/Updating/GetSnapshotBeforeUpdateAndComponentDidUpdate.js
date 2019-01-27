import React, { Component, Fragment } from 'react';

export default class GetSnapshotBeforeUpdateAndComponentDidUpdate extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };


  // This method is invoked right before right before mutations are made (for example, before the DOM is updated).
  // We can capture current values before they are potential changed
  getSnapshotBeforeUpdate(props, state) {
    console.log(props, state);
    return 'Fuck';
  }

  // 1. componentDidUpdate() will not be invoked if shouldComponentUpdate() returns false.
  // 2. third parameter snapshot is passed from the return value of getSnapshotBeforeUpdate(). (default to undefined).
  // 3. try not to call this.setState() here.

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevProps, prevState, snapshot);
    if(prevState.count !== this.state.count) {
      console.log('Updating happens!');
      // this.setState({ count: 5 });
    }
  }

  render() {
    return (
      <Fragment>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Up</button>
      </Fragment>
    )
  }
}