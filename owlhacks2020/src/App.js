import React, {useContext} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import ReactDOM from 'react-dom';

import './style/App.css';
import './style/Profile.css';

import {LoginContextProvider, LoginContext, Login, Register} from'./components/Login.js'
import Post, {Comment} from './components/Post'
import Organizations from './components/Organizations';
import Wall from './components/Wall.js' // HOW CAN I, IMPORT THE WALL!
import NewPost from './components/NewPost.js'
import About from './components/About'


export default function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
              <Link to="/"> Wall </Link>
              <Link to="/login"> Login </Link>
              <Link to="/about"> About </Link>
              <Link to="/orgs"> Organizations </Link>
              <Link to="/user"> Users </Link>
              <Link to="/profile"> Profile </Link>
            
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
              <AboutUs />
            </LoginContextProvider>
          </Route>
          <Route path="/orgs">
            <LoginContextProvider>
              <Orgs />
            </LoginContextProvider>
          </Route>
          <Route path="/user">
            <LoginContextProvider>
              <Users />
            </LoginContextProvider>
          </Route>
          <Route path="/profile">
            <LoginContextProvider>
              <Profile />
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
  // Add floating post button
  function floatingMenuClick() {
    // Show new post menu
    ReactDOM.render(<NewPost />, document.getElementById('App'));
    console.log("Opening New Post Form");
  }

  if (isAuth)
  {
    var floatingMenu = <div className="float" onClick={floatingMenuClick}><i className="fa fa-plus post-add"></i></div>;

    // build posts here
    var posts = [
      // I really hate how comments work, and I wrote it
      <Post title="First Post" poster="Jimmy" organization="12th Street" comments={[Comment('Cool Post', 'Russell'), Comment('Awesome', 'Alex')]}/>,
      <Post title="Need help with ReactJS" poster="Russell" organization="Bad Company"/>,
      <Post title="Want to work on C++? We are game devs!" poster="Jimmy" organization="Philadelphia Phillies"/>
    ];

    return (
        <div className="App" id="App">
          {rootState.newPost}
          <header className="App-header">
            <Wall posts={posts}/>
          </header>
          {floatingMenu}
        </div>
      );
  }
  else if (showLogin){
    return <Login/>;
  } else {
    return <Register />;
  }
}

function Signin() {
  const {rootState} = useContext(LoginContext);
  const {showLogin} = rootState;

  return  showLogin ? <Login /> : <Register />
}

function AboutUs() {
  return (
    <About />
  );
}

function Orgs() {

  let match = useRouteMatch();

  return (
    <div>
      <h2>Organization</h2>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:organizationID`}>
          <Organization />
        </Route>
        <Route path={match.path}>
        <h3>Search User:
          <input type="text" name="user" size="15" />
        </h3>
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

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:userID`}>
          <Username />
        </Route>
        <Route path={match.path}>
            <h3>Search User:
              <input type="text" name="user" size="15" />
            </h3>
        </Route>
      </Switch>
    </div>
  );
}

function Profile(username) {
  // TODO: search database function

  // TODO: get User data

  const user = { name: 'Johnny', email: 'johnny@comcast.net', group: 'Oregon Orators'};
  const outputJSX = Object.keys(user).map( (k,v) =>
    <div key={k}><p>{k}: {user[k]}</p></div>
  );
  return (
    <div className="profile-page">
      {outputJSX}
    </div>
  );
}

function Username() {
  let { userID } = useParams();
  return <h3>Requested user ID: {userID}</h3>;
}
