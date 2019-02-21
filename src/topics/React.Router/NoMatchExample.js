import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

/*
  Redirect API
  Rendering a <Redirect> will navigate to a new location.
  The new location will override the current location in the history stack.

  to: string || object,
  push: boolean => When true, redirecting will push a new entry onto the history instead of replacing the current one.
  exact, strict
  from: string => This can only be used to match a location when rendering a <Redirect> inside of a <Switch>.

*/

export default function NoMatch() {
  return (
    <Router>
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/old-match">Old Match, to be redirected</Link>
        </li>
        <li>
          <Link to="/will-match">Will Match</Link>
        </li>
        <li>
          <Link to="/will-not-match">Will Not Match</Link>
        </li>
        <li>
          <Link to="/also/will/not/match">Also Will Not Match</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Redirect from="/old-match" to="/will-match"/>
        <Route path="/will-match" component={WillMatch}/>
        <Route component={NoMatchExample}/>
      </Switch>
    </>
  </Router>
  )
};

const Home = () => (
  <p>
    A <code>&lt;Switch></code> renders the first child <code>&lt;Route></code>{" "}
    that matches. A <code>&lt;Route></code> with no <code>path</code> always
    matches.
  </p>
);

const WillMatch = () => <h3>Matched!</h3>;

const NoMatchExample = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);
