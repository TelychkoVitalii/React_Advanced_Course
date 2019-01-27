// import React, { Component } from 'react';
//
// export default class Constructor extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: props.name
//     };
//     this.changeColor = this.changeColor.bind(this);
//   }
//
//   changeColor() {
//     this.setState({ name: 'John' });
//   }
//
//   render() {
//     console.log(this.props);
//     return <h1 onClick={this.changeColor}>{this.state.name}</h1>;
//   }
// }
//
// Constructor.defaultProps = {
//   name: 'Vitalii'
// };