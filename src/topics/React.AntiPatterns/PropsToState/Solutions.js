import React, { Component } from 'react';

export default class Alternative1 extends Component {
  state = {
    draftEmail: this.props.email
  };

  handleEmailChange = event => this.setState({ draftEmail: event.target.value });

  resetForm = () => this.setState({ draftEmail: this.props.email });

  render() {
    return (
      <>
        <EmailInput
          email={this.state.draftEmail}
          handleChange={this.handleEmailChange}
        />
        <button onClick={this.resetForm}>Reset</button>
      </>
    );
  }
}

Alternative1.defaultProps = {
  id: 1,
  name: "Brian Vaughn",
  email: "fake.email@example.com"
};

function EmailInput(props) {
  return <input onChange={props.handleChange} value={props.email} />;
}