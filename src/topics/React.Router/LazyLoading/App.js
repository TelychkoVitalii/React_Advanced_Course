import React, { Component } from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom'

import NotFound from './NotFound';
import './App.css';
import createBrowserHistory from 'history/createBrowserHistory';
import asyncComponent from './AsyncComponent';

const Home = asyncComponent(() => import('./Home/Home').then(module => module.default));
const Maps = asyncComponent(() => import('./Maps/Maps').then(module => module.default));
const Blog = asyncComponent(() => import('./Blog/Blog').then(module => module.default));
const history = createBrowserHistory();

export default class App extends Component {
  render () {
    return (
      <Router history={history}>
        <div>
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
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/maps" component={Maps} />
              <Route path="/blog" component={Blog} />
              <Route path="*" component={NotFound} />
            </Switch>
          </section>
        </div>
      </Router>
    )
  }
}