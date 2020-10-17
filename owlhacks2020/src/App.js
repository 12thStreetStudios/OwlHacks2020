import React from 'react';
import logo from './logo.svg';
import './App.css';
import '.Login.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="sidenav" class="sidenav">
          <a href=
        </div>
        <div className="posts">
          <Post title="First Post" poster="Jimmy" organization="12th Street"/>
          <Post title="Need help with ReactJS" poster="Russell" organization="Bad Company"/>
          <Post title="Want to work on C++? We are game devs!" poster="Jimmy" organization="Philadelphia Phillies"/>
        </div>
      </header>
    </div>
  );
}

class Post extends React.Component {

  render() {
    return (
      <div className="post">
        <h3>{this.props.title}</h3>
        {/* TODO: Add organization href link */}
        <p id="organization"><a>{this.props.organization}</a></p>
        {/* TODO: Add user href link*/}
        <p id="poster">Posted by <a>{this.props.poster}</a></p>
      </div>
    );
  }
}

export default App;
