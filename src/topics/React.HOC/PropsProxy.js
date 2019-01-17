// import React, { Component } from 'react';

// 3. State Abstraction

// function saHOC(WrappedComponent) {
//   return class extends Component {
//     state = {
//       name: ''
//     };
//
//     onNameChanged = event => this.setState({ name: event.target.value });
//
//     render() {
//       const newProps = {
//         name: {
//           value: this.state.name,
//           onChange: this.onNameChanged
//         }
//       };
//       return <WrappedComponent {...newProps} />;
//     }
//   }
// }
//
// class Example extends Component {
//   render() {
//     return (
//       <>
//         <input {...this.props.name} />
//         {this.props.name.value}
//       </>
//     )
//   }
// }
//
// export default saHOC(Example);

// 2. Accessing the instance via Refs
// function refsHOC(WrappedComponent) {
//   return class RefsHOC extends Component {
//     static access(wrappedComponentInstance) {
//       wrappedComponentInstance.setNewAge();
//       wrappedComponentInstance.hi();
//     }
//
//     render() {
//       const props = Object.assign({}, this.props, { ref: RefsHOC.access.bind(this) });
//       return <WrappedComponent {...props} />;
//     }
//   }
// }
//
// class HelloRefs extends Component {
//   state = {
//     age: 12,
//     isChange: false
//   };
//
//   hi = () => console.log('Hi');
//   setNewAge = () => this.setState({ age: 13 });
//
//   render() {
//     return (
//       <h1>Hello, {this.state.age}</h1>
//     )
//   }
// }
//
// export default refsHOC(HelloRefs);

// 1. Manipulating Props
// function ppHOC(WrappedComponent) {
//   return class PP extends Component {
//     render() {
//       const newProps = {
//         name: 'Bob'
//       };
//       // is equivalent to React.createElement(WrappedComponent, this.props, null)
//       return <WrappedComponent {...newProps} />;
//     }
//   }
// }
//
// class Example extends Component {
//   render() {
//     console.log(this.props);
//     return (
//       <>
//         <button>{this.props.name}</button>
//         {/*{this.props.name.value}*/}
//       </>
//     )
//   }
// }
//
// export default ppHOC(Example);