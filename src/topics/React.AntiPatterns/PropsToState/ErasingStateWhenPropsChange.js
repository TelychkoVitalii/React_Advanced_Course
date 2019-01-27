import React, { Component } from 'react';

export default class EmailInput extends Component {
  state = {
    email: this.props.email
  };

  static getDerivedStateFromProps(props, state) {
    console.log(props.email, state.email);
    if (props.email !== state.email) {
      return {
        email: state.email
      };
    } else {
      return null;
    }
  }

  handleChange = event => {
    console.log('Custom Handler');
    this.setState({ email: event.target.value });
  };

  render() {
    return (
      <label>
        Email: <input onChange={this.handleChange} value={this.state.email} />
      </label>
    );
  }

}

EmailInput.defaultProps = {
  email: 'test@test.com'
};