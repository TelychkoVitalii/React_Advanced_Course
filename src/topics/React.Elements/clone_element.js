import React, { Component, cloneElement, isValidElement, Children } from 'react';
import CreateReactClass from '../React.Component/create_react_class';

export default class CloneElement extends Component {
    render() {
      // key and ref from the original element will be preserved.
        const newClass = cloneElement(<CreateReactClass />); // cloning
        console.log(isValidElement(<CreateReactClass />)); // boolean
        console.log(Children.count(this.props.children)); // quantity of children (this.props.children)
        console.log(Children); // map, foreach, toArray, only
        return <div>{newClass}</div>
    }
}