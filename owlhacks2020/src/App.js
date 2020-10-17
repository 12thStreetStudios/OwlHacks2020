#!/usr/bin/env node
import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';

import './style/App.css';
import {LoginContextProvider, LoginContext, Login, Register} from'./components/Login.js'
import Title from './components/Title'
import Post from './components/Post'
import Project from './components/Project';
import Wall from './components/Wall.js' // HOW CAN I, IMPORT THE WALL!

function App() {
  return (
    <LoginContextProvider>
      <Home/>
    </LoginContextProvider>
  );
}

function Home() {
  const {rootState, logout} = useContext(LoginContext);
  const {isAuth, thisUser, showLogin} = rootState;

  if (isAuth)
  {
    var posts = [];
    posts.push(<Post title="First Post" poster="Jimmy" organization="12th Street"/>);
    posts.push(<Post title="Need help with ReactJS" poster="Russell" organization="Bad Company"/>);
    posts.push(<Post title="Want to work on C++? We are game devs!" poster="Jimmy" organization="Philadelphia Phillies"/>);

    return (
      <div className="App">
        <header className="App-header">
          <Wall posts={posts}/>
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
