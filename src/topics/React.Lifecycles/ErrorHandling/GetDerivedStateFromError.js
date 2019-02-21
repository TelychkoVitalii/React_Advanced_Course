import React, { Component, Fragment } from 'react';

class ErrorBoundary extends Component {
  state = {
    error: null
  };

  static getDerivedStateFromError(error) {
    return { error };
  }

  retry = () => this.setState({ error: null });

  render() {
    if (this.state.error) {
      return (
        <Fragment>
          <span style={{ background: 'rgba(255, 0, 0, .1)', color: '#f00' }}>
            {this.state.error.message}
          </span>{' '}
          <span onClick={this.retry}>
            Retry
          </span>
        </Fragment>
      );
    }
    return this.props.children;
  }
}

function NaughtyNumber(props) {
  if (props.value > 5) {
    throw Error('This is just too much for me! Lower the value and try again!');
  }
  return (
    <input
      onChange={e => props.onChange(parseInt(e.target.value, 10))}
      type="number"
      value={props.value}
    />
  );
}

export default class GetDerivedStateFromErrorComponent extends Component {
  state = {
    value: 0
  };

  onChange = value => this.setState({ value });
  delta = d => this.setState(s => ({ value: s.value + d }));

  render() {
    return (
      <div className="App">
        <h1>Hello Error Boundaries</h1>
        <h2>Make the number go over 5!</h2>
        <p>
          <ErrorBoundary>
            <NaughtyNumber onChange={this.onChange} value={this.state.value} />
          </ErrorBoundary>
        </p>
        <p>
          <button onClick={() => this.delta(-1)}>--</button>
          {this.state.value}
          <button onClick={() => this.delta(1)}>++</button>
        </p>
      </div>
    );
  }
}