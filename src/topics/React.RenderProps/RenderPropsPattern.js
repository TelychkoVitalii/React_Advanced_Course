import React, { Component } from 'react';

const Euro = ({ amount }) => <p>Euro: {amount * 0.86}</p>;
const Pound = ({ amount }) => <p>Pound: {amount * 0.76}</p>;

class Amount extends Component {
  state = {
    amount: 0
  };

  onIncrement = () => this.setState(state => ({ amount: state.amount + 1 }));
  onDecrement = () => this.setState(state => ({ amount: state.amount - 1 }));

  render() {
    return (
      <>
        <span>US Dollar: {this.state.amount}</span>
        <button type='button' onClick={this.onIncrement}>+</button>
        <button type='button' onClick={this.onDecrement}>-</button>
        {this.props.children({
          amount: this.state.amount,
          increment: this.onIncrement
        })}
      </>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <Amount>
        {amount => (
          <>
            <Euro amount={amount} />
            <Pound amount={amount} />
          </>
        )}
      </Amount>
    )
  }
}