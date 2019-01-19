import React, { Component, cloneElement } from 'react';

function iiHOC(WrappedComponent) {
  return class extends WrappedComponent {
    render() {
      const elementsTree = super.render();
      let newProps = {};
      if(elementsTree && elementsTree.type === 'input') {
        newProps = { defaultValue: 'props may be forced'};
      }
      const props = Object.assign({}, elementsTree.props, newProps);
      return cloneElement(elementsTree, props);
    }
  }
}

class Example extends Component {
  render() {
    return <input type="text" defaultValue='Example Input' />;
  }
}


export default iiHOC(Example);