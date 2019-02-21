import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

export default withRouter(class ScrollRestorationExample extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
});

/*

const App = () => (
  <Router>
    <ScrollToTop>
      <App/>
    </ScrollToTop>
  </Router>
)

*/

