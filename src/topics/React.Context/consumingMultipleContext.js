import React, { Component, createContext } from 'react';

const ThemeContext = createContext('light'),
      UserContext = createContext('Guest');

export default class App extends Component {
  render() {
    const { signedInUser, theme } = this.props;
    return (
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={signedInUser}>
          <Layout />
        </UserContext.Provider>
      </ThemeContext.Provider>
    )
  }
}

App.defaultProps = {
  signedInUser: 'Bob',
  theme: 'light'
};

function Layout() {
  return (
    <>
      <Sidebar />
      <Content />
    </>
  )
}

function Sidebar() {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <UserContext.Consumer>
          {user => (
            <SidebarPage user={user} theme={theme} />
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  )
}

class SidebarPage extends Component {
  render() {
    return (
      <>
        <h1>{this.props.user}</h1>
        <h1>{this.props.theme}</h1>
      </>
    )
  }
}

function Content() {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <UserContext.Consumer>
          {user => <ContentPage user={user} theme={theme}/>}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  )
}

class ContentPage extends Component {
  render() {
    return (
      <>
        <h1>{this.props.user}</h1>
        <h1>{this.props.theme}</h1>
      </>
    )
  }
}