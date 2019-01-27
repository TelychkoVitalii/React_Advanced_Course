import React, { Component } from 'react';

class EmailInput extends Component {
  state = {
    email: this.props.email
  };

  // componentWillReceiveProps(nextProps) {
  //   this.setState({ email: nextProps.email });
  // }
  //
  // shouldComponentUpdate(props, state) {
  //   return state.email !== props.email;
  // }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps', state.email);
    if(props.email !== state.email) {
      return {
        email: state.email
      }
    } else {
      return null;
    }
  }

  handleChange = event => {
    console.log('Custom Method');
    this.setState({ email: event.target.value });
  };

  render() {
    console.log('Render');
    return <input onChange={this.handleChange} value={this.state.email} />;
  }
}

export default class CopyingPropsToState extends Component {
  state = {
    count: 0
  };

  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.setState(prevState => ({
          count: prevState.count + 1
        })),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <EmailInput email="test@test.com" />;
  }
}