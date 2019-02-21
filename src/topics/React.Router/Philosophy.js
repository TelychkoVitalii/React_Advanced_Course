/*
  1. Dynamic Routing ( React Router also followed that lead up until v4 as Static Routing Mental Model )
  When we say dynamic routing, we mean routing that takes place as your app is rendering,
  not in a configuration or convention outside of a running app. Nested Routes. Responsive Routes

  2. Basic Components
  There are three types of components in React Router:
  router components, route matching components, and navigation components.

  2.1. Routers: At the core of every React Router application should be a router component.
          For web projects, react-router-dom provides <BrowserRouter> and <HashRouter> routers.
          Both of these will create a specialized history object for you.
          Generally speaking, you should use a <BrowserRouter> if you have a server that responds to requests
          and a <HashRouter> if you are using a static file server.
  2.2. Route Matching: There are two route matching components: <Route> and <Switch>.
    Route matching is done by comparing a <Route>'s path prop to the current location’s pathname.
    When a <Route> matches it will render its content and when it does not match, it will render null.
    A <Route> with no path will always match.
    The <Switch> is not required for grouping <Route>s, but it can be quite useful.
    A <Switch> will iterate over all of its children <Route> elements and only render the first one
    that matches the current location. in identifying when no routes match the current location
    (so that you can render a “404” component).
  Route Rendering Props: component should be used when you have an existing component
                          (either a React.Component or a stateless functional component) that you want to render.
                          render, which takes an inline function, should only be used when you have to pass in-scope variables
                          to the component you want to render.
                          You should not use the component prop with an inline function to pass in-scope variables because
                          you will get undesired component unmounts/remounts.
  2.3. Navigation
  React Router provides a <Link> component to create links in your application.
  Wherever you render a <Link>, an anchor (<a>) will be rendered in your application’s HTML.
  The <NavLink> is a special type of <Link> that can style itself as “active” when its to prop matches the current location.
  Any time that you want to force navigation, you can render a <Redirect>.
  When a <Redirect> renders, it will navigate using its to prop
*/