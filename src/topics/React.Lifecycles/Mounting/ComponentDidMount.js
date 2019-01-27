// import React, { Component } from 'react';
//
// export default class ComponentDidMount extends Component {
//   state = {
//     text: ''
//   };
//
//   componentDidMount() {
//     console.log('ComponentDidMount');
//     this.setState({ text: 'Lifecycle Method' });
//   }
//
//   render() {
//     console.log('RENDER');
//     return <h1>
//       ComponentDidMount
//       <div>{this.state.text}</div>
//       <Child boo={23} />
//     </h1>;
//   }
// }
//
// class Child extends Component {
//   componentDidMount() {
//     console.log('Child ComponentDidMount');
//   }
//   //
//   // shouldComponentUpdate(nextProps) {
//   //   if(nextProps.boo === this.props.boo) {
//   //     return false;
//   //   } else {
//   //     return true;
//   //   }
//   // }
//
//   render() {
//     console.log('Child RENDER');
//     return (
//       <div>
//         {this.props.boo}
//         <h2>Child Component</h2>
//       </div>
//     )
//   }
// }