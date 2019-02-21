import React, { Component } from "react";
import { Router, NavLink, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';

/*
  NavLink API
  A special version of the <Link> that will add styling attributes to the rendered element when it matches the current URL.
  activeClassName: string
  activeStyle: object
  exact: boolean
  strict: boolean
  isActive: func => additional functionality
*/

/*
  Switch API
  Renders the first child <Route> or <Redirect> that matches the location.
  <Switch> is unique in that it renders a route exclusively.
  In contrast, every <Route> that matches the location renders inclusively.
  - location: object
  - children: node => (
    All children of a <Switch> should be <Route> or <Redirect> elements.
    Only the first child to match the current location will be rendered.
  )
*/

/*
  Router API
  The common low-level interface for all router components. Typically apps will use one of the high-level routers instead:
    <BrowserRouter>
    <HashRouter>
    <MemoryRouter>
    <NativeRouter>
    <StaticRouter>
  history: object => The history object is mutable.
           Therefore it is recommended to access the location from the render props of <Route>, not from history.location.
  children: node => A single child element to render.
*/

// const Child = ({ match }) => {
//   return <h2>ID: {match.params.id}</h2>;
// };

const Child = (props) => {
  console.log(props);
  return <h2>PATH: {props.location.pathname}</h2>;
};


export default class URLParamsExample extends Component {

  isActiveFn = (match, location) => {
    // console.log(match, location);
  };

  render() {
    return (
      <Router history={createBrowserHistory()}>
        <>
          <ul>
            <li>
              <NavLink to="/youtube" activeClassName='selected'>YouTube</NavLink>
            </li>
            <li>
              <NavLink to="/facebook" activeStyle={{ color: 'red' }}>Facebook</NavLink>
            </li>
            <li>
              <NavLink to="/twitter" isActive={this.isActiveFn}>Twitter</NavLink>
            </li>
            <li>
              <NavLink to="/instagram" isActive={this.isActiveFn}>Instagram</NavLink>
            </li>
          </ul>

          <hr/>

          {/*<Route path="/:fuck" component={Child} />*/}
          <Switch>
            <Route path="/youtube" component={Child} />
            <Route path="/facebook" component={Child} />
            <Route path="/twitter" component={Child} />
            <Route path="/instagram" component={Child} />
          </Switch>
        </>
      </Router>
    )
  }
}