import React, { Component } from 'react';
import App from './App';
// webpack, babel-plugin-syntax-dynamic-import, react-loadable.

// webpack has built-in support for dynamic imports;
// however, if you are using Babel (e.g., to compile JSX to JavaScript) then you will need to use
// the babel-plugin-syntax-dynamic-import plugin.
// This is a syntax-only plugin, meaning Babel won’t do any additional transformations.
// The plugin simply allows Babel to parse dynamic imports so webpack can bundle them as a code split.

// .babelrc
// {
//   "presets": [
//   "react"
// ],
//   "plugins": [
//   "syntax-dynamic-import"
// ]
// }

// react-loadable is a higher-order component for loading components with dynamic imports.

export default class CodeSplittingExample extends Component {
  render() {
    return <App />;
  }
}