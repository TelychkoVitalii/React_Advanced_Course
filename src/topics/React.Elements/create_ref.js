import React, { Component, createRef } from 'react';

export default class CreateRef extends Component {
  inputRef = createRef();

  componentDidMount() {
    this.inputRef.current.focus(); // always have current property
  }

  focusInput = () => console.log(this.inputRef.current.value);
  blurInput = () => console.log(this.inputRef.current.value);
  render() {
    // may not use with functional component, only near and class component
    return (
      <>
        <input onFocus={this.focusInput} onBlur={this.blurInput} type="text" ref={this.inputRef} defaultValue='Fuck'/>
      </>
    )
  }
}