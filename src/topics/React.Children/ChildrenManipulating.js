import React, { Component, Fragment, Children } from 'react';

class IgnoreFirstChild extends Component {
  state = {
    name: 'Jimmy'
  };

  render() {
    return (
      <>
        {/*{Children.count(this.props.children)}*/}
        {/*<pre>{Children.toArray(this.props.children)}</pre>*/}
        {Children.map(this.props.children, (child, index) => {
          if(index < 1) return;
          return child;
        }, {})}
      </>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <IgnoreFirstChild>
        <h1>First</h1>
        <h2>Second</h2>
      </IgnoreFirstChild>
    )
  }
}