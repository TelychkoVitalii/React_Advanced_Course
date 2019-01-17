import React, { Component } from 'react';

class Grid extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

class Row extends Component {
  render() {
    return <h1>Row</h1>;
  }
}

export default class Basic extends Component {
  render() {
    return (
      <Grid>
        Here is a row:
        <Row />
        Another row:
        <Row />
      </Grid>
    )
  }
}