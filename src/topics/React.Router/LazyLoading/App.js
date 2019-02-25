import React, { Component, Fragment, lazy, Suspense } from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';
// import Home from './Home/Home';
// import Blog from './Blog/Blog';
// import Maps from './Maps/Maps';
import NotFound from './NotFound';
// import Loadable from 'react-loadable'
// import asyncComponent from './AsyncComponent';
import './App.css';

// --- React.Lazy / Suspense ---
// const Home = lazy(() => import('./Home/Home'));
const Maps = lazy(() => import('./Maps/Maps'));
const Blog = lazy(() => import('./Blog/Blog'));

// --- Loadable ---
// const AsyncHome = Loadable({
//   loader: () => import('./Home/Home'),
//   loading: Home
// });
// const AsyncMaps = Loadable({
//   loader: () => import('./Maps/Maps'),
//   loading: Maps,
//   delay: 300
// });
// const AsyncBlog = Loadable({
//   loader: () => import('./Blog/Blog'),
//   loading: Blog
// });

// --- Custom AsyncComponent ---
// const Home = asyncComponent(() => import('./Home/Home').then(module => module.default));
// const Maps = asyncComponent(() => import('./Maps/Maps').then(module => module.default));
// const Blog = asyncComponent(() => import('./Blog/Blog').then(module => module.default));
const history = createBrowserHistory();

export default class App extends Component {
  render () {
    return (
      <Router history={history}>
        <Fragment>
          <header className="header">
            <nav className="navbar container">
              <div className="navbar-brand">
                <Link to="/">
                  <span className="navbar-item">Lazy Loading Routes</span>
                </Link>
              </div>

              <div className="navbar-end">
                <Link to="/maps">
                  <span className="navbar-item">Maps</span>
                </Link>
                <Link to="/blog">
                  <span className="navbar-item">Blog</span>
                </Link>
              </div>
            </nav>
          </header>
          <section className="content">
            <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              {/*<Route exact path="/" component={AsyncHome} />*/}
              {/*<Route path="/maps" component={AsyncMaps} />*/}
              {/*<Route path="/blog" component={AsyncBlog} />*/}
              <Route exact path="/" component={lazy(() => import('./Home/Home'))} />
              <Route path="/maps" component={Maps} />
              <Route path="/blog" component={Blog} />
              <Route path="*" component={NotFound} />
            </Switch>
            </Suspense>
          </section>
        </Fragment>
      </Router>
    )
  }
}