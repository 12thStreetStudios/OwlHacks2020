import React from 'react';
import './App.css';

import Title from './components/Title'
import Post from './components/Post'
import Project from './components/Project';

function App() {
  return(
    <div className="App">
      < Title />
      <header className="App-header">
        <Post title="First Post" poster="Jimmy" organization="12th Street"/>
        <Post title="Need help with ReactJS" poster="Russell" organization="Bad Company"/>
        <Post title="Want to work on C++? We are game devs!" poster="Jimmy" organization="Philadelphia Phillies"/>
        <Project pname="OwlHacks2020" members="Sean, Jimmy, Russell" creation_date="10/17/20" todo_list="stuff"></Project> 
      </header>
    </div>
  );
}

export default App;
