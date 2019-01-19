import React, { Component } from 'react';
import { Input } from 'antd';
import "antd/dist/antd.css";
import validator from '../validator';

// function InputAbstractionHOC(WrappedComponent) {
//   return class extends Component {
//     fields = {};
//
//     getField = fieldName =>
//     {
//       if(!this.fields[fieldName])
//       {
//         this.fields[fieldName] =
//           {
//           value: '',
//           onChange: event => {
//             this.fields[fieldName].value = event.target.value;
//             this.forceUpdate();
//           },
//           onBlur: event => {
//             this.fields[fieldName].value = event.target.value;
//             this.forceUpdate();
//           },
//         };
//       }
//       return this.fields[fieldName];
//     };
//
//     render() {
//       //const pr = Object.assign({}, this.props, { fields: this.getField });
//       //return <WrappedComponent {...pr} />;
//       return <WrappedComponent getField = {this.getField} />;
//     }
//   }
// }

class FormProvider extends Component {
  fields = {};

  getField = fieldName => {
    if(!this.fields[fieldName]) {
      this.fields[fieldName] = {
        value: '',
        message: '',
        onChange: event => {
          this.fields[fieldName].value = event.target.value;
          if(validator.type[fieldName].rule(this.fields[fieldName].value)) {
            this.fields[fieldName].message = validator.type[fieldName].message;
          } else {
            this.fields[fieldName].message = '';
          }
          this.forceUpdate();
        }
      };
    }
    return this.fields[fieldName];
  };

  render() {
    return this.props.render(this.getField);
  }
}

export default class Example extends Component {
  render() {
    return (
      <FormProvider render={getField => {
        console.log(getField('email'));
        return (
          <form>
            <Input type='email' {...getField('email')} />
            <span>{getField('email').message}</span>
            <p>Email: {getField('email').value}</p>
            {/*<Input type="password" {...getField('password')} />*/}
            {/*<span>{getField('password').message}</span>*/}
            {/*<Input type="text" {...getField('firstName')} />*/}
            {/*<p>Password: {getField('password').value}</p>*/}
            {/*<p>FirstName: {getField('firstName').value}</p>*/}
            <button>Send</button>
          </form>
        )
      }} />
    )
  }
}

// export default InputAbstractionHOC(Example);
