import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title'
import Post from './components/Post'

function App() {
  return(
    <div className="App">
      < Title />
      <header className="App-header">
        <Post title="First Post" poster="Jimmy" organization="12th Street"/>
        <Post title="Need help with ReactJS" poster="Russell" organization="Bad Company"/>
        <Post title="Want to work on C++? We are game devs!" poster="Jimmy" organization="Philadelphia Phillies"/>
      </header>
    </div>
  );
}

export default App;
