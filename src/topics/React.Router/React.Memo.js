import React, { Component, memo } from 'react';

// Unlike the shouldComponentUpdate() method on class components,
// the areEqual function returns true if the props are equal and false if the props are not equal.
// This is the inverse from shouldComponentUpdate.
function areEqual(prevProps, nextProps) {
  return prevProps !== nextProps;
}

const View = memo(({ name }) => {
  console.log(name);
  return `Hi, I'm ${name}`;
}, areEqual);

// By default it will only shallowly compare complex objects in the props object.
// If you want control over the comparison, you can also provide a custom comparison function as the second argument.

export default class Memo extends Component {
  names = ["Peter", "Bruce", "Clark"];
  state = {
    name: "Anonymous"
  };

  componentDidMount() {
    setInterval(() => {
      const name = this.generateName();
      this.setState({ name });
    }, 1000);
  }

  generateName = () => this.names[Math.floor(Math.random() * this.names.length)];

  render() {
    return <View name="Sam" />;
  }
}