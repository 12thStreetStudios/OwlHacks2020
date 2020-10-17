import React from 'react';
import axios from 'axios';
import './Login.css';

// Don't know why they need this
export const MyContext = createContext();
const Axios = axios.create({
  baseURL: 'login-url',
});

class Login extends React.component {
  constructor() {
    super();
    this.isLoggedIn();
  }

  // Root State
  state = {
    showLogin:true,
    isAuth:false,
    thisUser:null,
  }

  show = () =>{
    this.setState({
      showLogin: true
    })
  }
  hide = () => {
    this.setState({
      showLogin: false
    })
  }
  // Toggle between Login & Sign in
  toggleNav = () => {
    // Flip state
    const showLogin = !this.state.showLogin;
    this.setState({
      ...this.state,
      showLogin
    })
  }

  // On Click the Log Out button
  logout = () => {
    localStorage.removeItem('loginToken');
    this.setState({
      ...this.state,
      isAuth:false,
    })
  }

  // register user
  register = async (user) => {
    // Sending the user registration request
    const register = await Axios.post('register', {
      name:user.name,
      email:user.email,
      password:user.password
    });

    return register.data;
  }

  // login user
  login = async (user) => {
    // send the login request
    const login = await Axios.post('login', {
      email:user.email,
      password:user.password
    });
    return login.data;
  }

  // Check if user is logged in
  isLoggedIn = async () => {
    const token = localStorage.getItem('loginToken');
    // Check if local storage contains the token
    if (token) {
      // Add token to the header
      Axios.defaults.headers.common['Authorization'] = 'bearer ' + token;
      // GET user information
      const {data} = await Axios.get('user-info');
      // If user information is recieved
      if (data.success && data.user) {
        this.setState({
          ...this.state,
          isAuth:true,
          thisUser:data.user
        });
      }
    }
  }
}
