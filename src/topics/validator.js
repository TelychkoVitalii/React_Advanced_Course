export default {
  type: {
    email: {
      rule: value => !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && value.length > 0,
      message: 'Use a valid email address format'
    },
    password: [
      {
        rule: value => value.length === 0,
        message: 'Field should not be empty'
      },
      {
        rule: value => value.length < 6,
        message: 'Password must have minimum 6 characters'
      },
      {
        rule: value => value.length > 20,
        message: 'Password can only have a maximum of 20 characters'
      }
    ]
  }
}