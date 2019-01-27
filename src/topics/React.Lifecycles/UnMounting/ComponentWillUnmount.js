import React, { Component, Fragment } from 'react';

export default class ComponentWillUnmount extends Component {
  state = {
    isChanged: false
  };

  handleChange = () => this.setState({ isChanged: !this.state.isChanged });
  render() {
    return (
      <Fragment>
        <h1>ComponentWillUnmount</h1>
        {!this.state.isChanged ? <Example1 />: <Example2 />}
        <button onClick={this.handleChange}>Change</button>
      </Fragment>
    )
  }
}

class Example1 extends Component {
  componentWillUnmount() {
    console.log('ComponentWillUnmount in Example1 works!');
  }
  render() {
    return <h1>Example1</h1>;
  }
}

class Example2 extends Component {
  componentWillUnmount() {
    console.log('ComponentWillUnmount in Example2 works!');
  }
  render() {
    return <h1>Example2</h1>;
  }
}