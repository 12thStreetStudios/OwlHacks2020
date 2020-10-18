import React, {useContext} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import './style/App.css';

import {LoginContextProvider, LoginContext, Login, Register} from'./components/Login.js'
import Title from './components/Title'
import Post from './components/Post'
import Project from './components/Project';
import Wall from './components/Wall.js' // HOW CAN I, IMPORT THE WALL!

export default function App() {
  
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Wall</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/orgs">Organizations</Link>
            </li>
            <li>
              <Link to="/user">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
            
          <Route path="/Signin">
            <LoginContextProvider>
              <Signin />
            </LoginContextProvider>
          </Route>
          <Route path="/about">
            <LoginContextProvider>
              <About />
            </LoginContextProvider>
          </Route>
          <Route path="/orgs">
            <LoginContextProvider>
              <Organizations />
            </LoginContextProvider>
          </Route>
          <Route path="/user">
            <LoginContextProvider>
              <Users />
            </LoginContextProvider>
          </Route>
          <Route path="/">
            <LoginContextProvider>
              < Home/>
            </LoginContextProvider>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  const {rootState, logout} = useContext(LoginContext);
  const {isAuth, thisUser, showLogin} = rootState;

  if (isAuth)
  {
    // Add floating post button
    function floatingMenuClick() {
      // Show new post menu
      console.log("Showing New Post Menu");
    }
    var floatingMenu = <div class="float" onClick={floatingMenuClick}><i class="fa fa-plus post-add" onClick={floatingMenuClick}></i></div>;

    // build posts here
    var posts = [];
    posts.push(<Post title="First Post" poster="Jimmy" organization="12th Street"/>);
    posts.push(<Post title="Need help with ReactJS" poster="Russell" organization="Bad Company"/>);
    posts.push(<Post title="Want to work on C++? We are game devs!" poster="Jimmy" organization="Philadelphia Phillies"/>);

    return (
      <div className="App">
        <header className="App-header">
          <Wall posts={posts}/>
        </header>
        {floatingMenu}
      </div>
    )
  }
  else {
    return Login();
  }
}

function Signin() {
  const {rootState, logout} = useContext(LoginContext);
  const {isAuth, thisUser, showLogin} = rootState;

  return  showLogin ? <Login /> : <Register />
}

function About() {
  return(<h1>About Page.</h1>);
}

function Organizations() {
  
  let match = useRouteMatch();

  return (
    <div>
      <h2>Organization</h2>

      <ul>
        <li>
          <Link to={`${match.url}/12th-street-studios`}>12th-street-studios</Link>
        </li>
        <li>
          <Link to={`${match.url}/the-other-guys`}>the-other-guys</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:organizationID`}>
          <Organization />
        </Route>
        <Route path={match.path}>
          <h3>Please select an Organization.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Organization() {
  let { organizationID } = useParams();
  return <h3>Requested organization ID: {organizationID}</h3>;
}
function Users() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Users</h2>

      <ul>
        <li>
          <Link to={`${match.url}/russell`}>Russell</Link>
        </li>
        <li>
          <Link to={`${match.url}/sean`}>Sean</Link>
        </li>
        <li>
          <Link to={`${match.url}/jimmy`}>Jimmy</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:userID`}>
          <Username />
        </Route>
        <Route path={match.path}>
          <h3>Please select a Username.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Username() {
  let { userID } = useParams();
  return <h3>Requested user ID: {userID}</h3>;
}
