import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

/*
  BrowserRouter API:
  1. basename: string ---- <BrowserRouter basename='/app'> non case sensitive => <Route exact path="/app" component={Home} />
      if(previous versions of react router) use (
      import createBrowserHistory from 'history/createBrowserHistory';
      const history = createBrowserHistory({ basename: '/your/app' });

      <Router history={history}>
        <App />
      </Router>
    )
  2. getUserConfirmation: fn (!!! use only with Prompt)

  <BrowserRouter getUserConfirmation={this.getConfirmation}>

  const getConfirmation = (message, callback) => {
  console.log(message);
  const allowTransition = window.confirm(message);
  callback(!allowTransition);

  <Prompt message="Are you sure you want to leave?" />
  Prompt API:
     - message: string
     - message: fn => Will be called with the next location and action the user is attempting to navigate to
     - when: boolean => Instead of conditionally rendering a <Prompt> behind a guard,
                       you can always render it but pass when={true} or when={false} to prevent or allow navigation accordingly.

  3. forceRefresh: bool
    usage: If true the router will use full page refreshes on page navigation.
    You probably only want this in browsers that don’t support the HTML5 history API.

    const supportsHistory = 'pushState' in window.history;
    <BrowserRouter forceRefresh={supportsHistory}>

  4. keyLength: number (defaults to 6)
   <BrowserRouter keyLength={3}>

  5. children: node => only one child element => others commented
  <BrowserRouter children={<About />}>
};
*/

/*
  Link API
    1. to: string => location to link to, created by concat the location’s pathname, search, and hash properties.
    example: <Link to='/courses?sort=name'/>
    2. to: object => (
      <Link to={{
        pathname: '/courses', => path
        search: '?sort=name', => query parameters
        hash: '#the-hash', => hash
        state: { fromDashboard: true } =>
      }}/>
    )
    3. replace: bool => When true, clicking the link will replace the current entry in the history stack instead of adding a new one.
    4. innerRef: fn => Allows access to the underlying ref of the component
        <Link to="/about" innerRef={this.refCallBack}>About</Link>
        refCallBack = node => console.log(node.innerText);
    5. others props only in prop 'to' as object
         <Link to={{
           fuck: 'hello', (!!!)
           pathname: "/topics",
           state: {
            text: 'hello'
           }
        }}>Topics</Link>
 */

/*
  Route API
  There are 3 ways to render something with a <Route>:
    1. <Route component>
        When you use component (instead of render or children, below) the router uses React.createElement
        to create a new React element from the given component.
        That means if you provide an inline function to the component prop, you would create a new component every render.
    2. <Route render>
       Instead of having a new React element created for you using the component prop,
       you can pass in a function to be called when the location matches.

       const FadingRoute = ({ component: Component, ...rest }) => (
          <Route {...rest} render={props => (
            <FadeIn>
              <Component {...props}/>
            </FadeIn>
          )}/>
        )
      <FadingRoute path="/cool" component={Something}/>
    3. <Route children>
    Sometimes you need to render whether the path matches the location or not.
    In these cases, you can use the function children prop.
    It works exactly like render except that it gets called whether there is a match or not.

    <ul>
      <ListItemLink to="/somewhere"/>
      <ListItemLink to="/somewhere-else"/>
    </ul>

    const ListItemLink = ({ to, ...rest }) => (
      <Route path={to} children={({ match }) => (
        <li className={match ? 'active' : ''}>
          <Link to={to} {...rest}/>
        </li>
      )}/>
    )

    (!!!!!) <Route component> takes precedence over <Route render> so don’t use both in the same <Route>.
    (!!!!!) Both <Route component> and <Route render> take precedence over <Route children> so don’t use more than one in the same <Route>.
  All three render methods will be passed the same three route props:
    1. match
    2. location
    3. history

    path: string
    exact: boolean => When true, will only match if the path matches the location.pathname exactly.
    strict: boolean => When true, a path that has a trailing slash will only match a location.pathname with a trailing slash.
    sensitive: boolean => When true, will match if the path is case sensitive.
 */

const Home = () => <h2>Home</h2>;

const About = ({ match }) => {
  console.log(match);
  return <h2>About</h2>;
};

const Topics = (props) => {
  console.log(props);
  return <h2>Topics</h2>;
};

export default class RRBasicExample extends Component {

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to={{
                pathname: "/topics",
                state: {
                  text: 'hello'
                }
              }}>Topics</Link>
            </li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home} />
          <Route path="/aboUt" render={() => <About />} />
          <Route path="/topics" component={Topics} />

        </Fragment>
      </BrowserRouter>
    )
  }
}