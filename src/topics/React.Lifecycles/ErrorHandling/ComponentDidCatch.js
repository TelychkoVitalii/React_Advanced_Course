import React, { Component, Fragment } from 'react';

// Error boundaries do not catch errors for:
//
// Event handlers (learn more)
// Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
// Server side rendering
// Errors thrown in the error boundary itself (rather than its children)

class ErrorBoundary extends Component {
  state = {
    error: false,
    info: null
  };

  componentDidCatch(error, info) {
    console.log(error, info);
    this.setState({ error, info });
  }

  render() {
    if(this.state.error) {
      return (
        <Fragment>
          <h5>Sorry. More than five characters!</h5>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.info.componentStack}
          </details>
        </Fragment>
      );
    }
    return this.props.children;
  }
}

class FiveMax extends Component {
  state = {
    value: ''
  };

  handleChange = event => this.setState({ value: event.target.value });

  render() {
    if(this.state.value.length > 5) {
      throw new Error('You cannot enter more than five characters!');
    }
    return (
      <Fragment>
        <label>Type away: </label>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </Fragment>
    )
  }
}

export default class ComponentDidCatchComponent extends Component {
  render() {
    return (
      <div>
        <h3>Two children under one error boundary. If one crashes. Both are affected!</h3>
        {/*<ErrorBoundary>*/}
          {/*<FiveMax />*/}
          {/*<FiveMax />*/}
        {/*</ErrorBoundary>*/}
        <ErrorBoundary>
          <FiveMax />
        </ErrorBoundary>
        <ErrorBoundary>
          <FiveMax />
        </ErrorBoundary>
      </div>
    )
  }
}