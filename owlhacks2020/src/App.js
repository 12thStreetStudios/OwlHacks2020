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
import axios from 'axios';
import FormData from 'form-data';

import './style/App.css';
import './style/Profile.css';
import './style/Nav.css';

import {LoginContextProvider, LoginContext, Login, Register} from'./components/Login.js'
import Post, {Comment} from './components/Post'
import Organizations from './components/Organizations';
import Wall from './components/Wall.js' // HOW CAN I, IMPORT THE WALL!
import NewPost from './components/NewPost.js'
import About from './components/About'

const Axios = axios.create({baseURL: "https://tss-api.srnd.net/"})
const API_KEY = "BpLnfgDsc2WD8F2qNfHK5a84jjJkwzDkh9h2fhfUVuS9jZ8uVbhV3vC5AWX39IVU";
const API_TOKEN = "WSP2NcHciWvqZTa2N95RxRTZHWUsaD6HEdz0ThbXfQ6pYSQ3n267l1VQKGNbSuJE9fQbzONJAAwdCxmM8BIabKERsUhPNmMmdf2eSJyYtqwcFiUILzXv2fcNIrWO7sTo";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <div className = "navcontainer">
              <div className="navbar"> <Link to="/"> Wall </Link> </div>
              <div className="navbar"> <Link to="/login"> Login </Link></div>
              <div className="navbar"> <Link to="/about"> About </Link></div>
              <div className="navbar"><Link to="/orgs"> Organizations </Link></div>
              <div className="navbar"> <Link to="/user"> Users </Link></div>
              <div className="navbar"> <Link to="/profile"> Profile </Link></div>
          </div>
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
              <Profile username="seanmitch"/>
            </LoginContextProvider>
          </Route>
          <Route path="/">
            <LoginContextProvider>
              <Home />
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
      <Post title="First Post" poster="Jimmy" organization="Moderator" comments={[Comment('Cool Post', 'Russell'), Comment('Awesome', 'Alex')]}/>,
      <Post title="Need help with ReactJS" poster="Russell" organization="Bad Company"/>,
      <Post title="Want to work on C++? We are game devs!" poster="Jimmy" organization="12th Street Games"/>
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

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:organizationID`}>
          <Organization />
        </Route>
        <Route path={match.path}>
        <h3 className="search">Search Organization:
          <form action="">
            <input type="text" name="user" size="12" />
            <input type="submit" name="button" value="search" />
          </form>
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

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:userID`}>
          <Username />
        </Route>
        <Route path={match.path}>
            <h3 className="search">Search User:
              <form action="">
                <input type="text" name="user" size="12" />
                <input type="submit" name="button" value="Search" />
              </form>
            </h3>
        </Route>
      </Switch>
    </div>
  );
}

class Profile extends React.Component {
// fetch user data
getUserByName = async (name) => {
  console.log("Getting User by name");
  const formData = new FormData();
  formData.append("apikey", API_KEY)
  formData.append("apitoken", API_TOKEN)
  formData.append("username", name)
  var user = await Axios.post('user/getUserByName', {data: formData, headers: {
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin' : '*'
  }}).catch(function(e) {responseError(e);});
  if (user) {
    console.log(user.data);
    this.state = {username: name, data: user.data.response};
    return user.data;
  } else {
      return {response: "error"};
  }
}

  constructor(props) {
    super(props);
    this.state = {
      username: props.username,
      data: ''
    }
    this.getUserByName(this.state.username);
  }
  // TODO: search database function

  render(){
    return (
      <div className="profile-page">
        {this.state.data}
      </div>
    );
  }

}

function Username() {
  let { userID } = useParams();
  return Profile(userID);
}

function responseError(e) {
  if (e.response) {
    console.log(e.response);
  } else if (e.request) {
    console.log(e.request);
  } else {
    console.log("Error ",e.message);
  }
}
