import React, { Component } from "react";

const Euro = ({ amount }) => <p>Euro: {amount * 0.86}</p>;
const Pound = ({ amount }) => <p>Pound: {amount * 0.76}</p>;
const Amount = ({ amount, onIncrement, onDecrement }) => (
  <>
    <span>US Dollar: {amount}</span>
    <button type='button' onClick={onIncrement}>+</button>
    <button type='button' onClick={onDecrement}>-</button>
  </>
);

export default class App extends Component {
  state = {
    amount: 0
  };

  onIncrement = () => this.setState(state => ({ amount: state.amount + 1 }));
  onDecrement = () => this.setState(state => ({ amount: state.amount - 1 }));

  render() {
    const { amount } = this.state;
    return (
      <>
        <Amount
          amount={amount}
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
        />
        <Euro amount={amount} />
        <Pound amount={amount} />
      </>
    )
  }
}