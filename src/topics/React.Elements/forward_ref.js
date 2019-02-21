import React, { Component, Fragment, createRef, forwardRef } from 'react';

// Ref forwarding is a technique for automatically passing a ref through a component to one of its children.
export default class ForwardRef extends Component {
    render() {
        const FancyButton = forwardRef((props, ref) => {
          console.log(props, ref);
          return (
            <button ref={ref} className="FancyButton">
            {props.children}
          </button>
          )
        });
        const ref = createRef();
        return (
            <Fragment>
                <FancyButton ref={ref}>Click me!</FancyButton>
            </Fragment>
        )
    }
}