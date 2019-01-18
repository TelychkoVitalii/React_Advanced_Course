import React, { Component } from 'react';

export default class Todo extends Component {

  componentDidMount() {
    setInterval(() => {
      this.setState(() => {
        console.log('setting state');
        return { unseen: "does not display" }
      });
    }, 1000);
  }

  // Returning false does not prevent child components from re-rendering when their state changes.
  // This applies to the children’s state but not their props.
  shouldComponentUpdate(nextProps) {
    const differentTitle = this.props.title !== nextProps.title;
    const differentDone = this.props.done !== nextProps.done;
    return differentTitle || differentDone;
  }

  render() {
    console.log('render called');
    return (<div>...</div>);
  }
}