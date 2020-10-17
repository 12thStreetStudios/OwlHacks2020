import React, {useContext} from 'react';
import './App.css';
import {LoginContextProvider, LoginContext, Login, Register} from'./Login.js'
import Post from './components/Post'

function App() {
  return (
    <LoginContextProvider>
      <Home />
    </LoginContextProvider>
  );
}

function Home() {
  const {rootState, logout} = useContext(LoginContext);
  const {isAuth, thisUser, showLogin} = rootState;

  if (isAuth)
  {
    return (
      <div className="App">
        <header className="App-header">
          <div className="posts">
            <Post title="First Post" poster="Jimmy" organization="12th Street"/>
            <Post title="Need help with ReactJS" poster="Russell" organization="Bad Company"/>
            <Post title="Want to work on C++? We are game devs!" poster="Jimmy" organization="Philadelphia Phillies"/>
          </div>
        </header>
      </div>
    );
  }
  else if (showLogin) {
    return <Login/>
  } else {
    return <Register/>
  }
}

export default App;
