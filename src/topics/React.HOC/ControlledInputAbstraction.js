import React, { Component } from 'react';
import { Input, Button } from 'antd';
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
  fields = {
    request: null
  };

  getField = (fieldName, action) => {
    console.log(fieldName);
    if(!this.fields[fieldName]) {
      this.fields[fieldName] = {
        onChange: event => {
          this.fields[fieldName].value = event.target.value;
          this.fields[fieldName].message = validator.type[fieldName].rules(this.fields[fieldName].value);
          this.fields.button.disabled = !!this.fields[fieldName].message;
          this.forceUpdate();
        }
      };
    }
    return this.fields[fieldName];
  };

  render() {
    console.log(this.fields);
    return this.props.render(this.getField);
  }
}

export default class Example extends Component {
  render() {
    return (
      <FormProvider render={getField => (
          <form>
            <div>Email: </div>
            <Input type='email' {...getField('email')} />
            <div style={{ color: 'red' }}>{getField('email').message}</div>

            <div>Password: </div>
            <Input type="password" {...getField('password')} />
            <div style={{ color: 'red' }}>{getField('password').message}</div>

            <Button type='primary' {...getField('button')}>Send</Button>
            {/*<Input type="text" {...getField('firstName')} />*/}
            {/*<p>Password: {getField('password').value}</p>*/}
            {/*<p>FirstName: {getField('firstName').value}</p>*/}
          </form>
        )} />
    )
  }
}

// export default InputAbstractionHOC(Example);
