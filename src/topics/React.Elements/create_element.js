import { Component, createElement } from 'react';

class CreateElement extends Component {
    render() {
        return createElement('div', this.props,
            createElement('h1', {}, 'My favorite ice creams'),
            createElement('ul', {},
              [
                createElement('li', { key: '1' }, 'Chocolate'),
                createElement('li', { key: '2' }, 'Vanilla'),
                createElement('li', { key: '3' }, 'Banana')
              ])
          );
    }
}

export default CreateElement;