import React, {createContext} from 'react';
import axios from 'axios';
import './Login.css';

// Don't know why they need this
export const LoginContext = createContext();
const Axios = axios.create({
  baseURL: 'login-url',
});

class LoginContextProvider extends React.Component {
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

  // render function
  render() {
    const contextValue = {
      rootState:this.state,
      toggleNav:this.toggleNav,
      isLoggedIn:this.isLoggedIn,
      register:this.register,
      login:this.login,
      logout:this.logout
    }
    return(
      <LoginContext.Provider value={contextValue}>
        {this.props.children}
      </LoginContext.Provider>
    )
  }
}

function Login() {
  const {toggleNav, login, isLoggedIn} = React.useContext(LoginContext);

  const initialState = {
    userInfo:{
      email:'',
      password:'',
    },
    errorMsg:'',
    successMsg:''
  }

  const [state, setState] = React.useState(initialState);

  // On input value change, event
  const onValueChange = (e) => {
    setState({
      ...state,
      userInfo:{
        ...state.userInfo,
        [e.target.name]:e.target.value
      }
    });
  }

  // On Submit of Login Form
  const submit = async (event) => {
    event.preventDefault();
    const data = await login(state.userInfo);
    // If successful login
    if (data.success && data.token) {
      setState({
        ...initialState,
      });
      localStorage.setItem('loginToken', data.token);
      await isLoggedIn();
    } else {
      setState({
        ...state,
        successMsg:'',
        errorMsg:data.message
      });
    }
  }

  // Show Message on Error or Success
  let successMsg = '';
  let errorMsg = '';
  if (state.errorMsg) {
    errorMsg = <div className="error-msg">{state.errorMsg}</div>;
  }
  if (state.successMsg) {
    successMsg = <div className="success-msg">{state.successMsg}</div>;
  }

  return (
    <div className="login-form">
      <h1>Login</h1>
      <form onSubmit={submit} noValidate>
        <div className="form-control">
          <label>Email</label>
          <input name="email" type="email" required placeholder="Enter your email" value={state.userInfo.email} onChange={onValueChange} />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input name="password" type="password" required placeholder="Enter your password" value={state.userInfo.password} onChange={onValueChange}/>
        </div>
        {errorMsg}
        {successMsg}
        <div className="form-control">
          <button type="submit">Login</button>
        </div>
      </form>
      <div className="navBtn">
        <button onClick={toggleNav}>Register</button>
      </div>
    </div>
  );
}

function Register() {
  const {toggleNav, register} = React.useContext(LoginContext);

  const initialState = {
    userInfo:{
      name:'',
      email:'',
      password:'',
    },
    errorMsg:'',
    successMsg:''
  }

  const [state, setState] = React.useState(initialState);

  // On input value change, event
  const onValueChange = (e) => {
    setState({
      ...state,
      userInfo:{
        ...state.userInfo,
        [e.target.name]:e.target.value
      }
    });
  }

  // On Submit of Login Form
  const submit = async (event) => {
    event.preventDefault();
    const data = await register(state.userInfo);
    // If successful login
    if (data.success) {
      setState({
        ...initialState,
        successMsg:data.message
      });
      } else {
      setState({
        ...state,
        successMsg:'',
        errorMsg:data.message
      });
    }
  }

  // Show Message on Error or Success
  let successMsg = '';
  let errorMsg = '';
  if (state.errorMsg) {
    errorMsg = <div className="error-msg">{state.errorMsg}</div>;
  }
  if (state.successMsg) {
    successMsg = <div className="success-msg">{state.successMsg}</div>;
  }

  return (
    <div className="login-form">
      <h1>Sign Up</h1>
      <form onSubmit={submit} noValidate>
        <div className="form-control">
          <label>Username</label>
          <input name="name" required type="text" value={state.userInfo.name} onChange={onValueChange} placeholder="Enter you username" />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input name="email" type="email" required placeholder="Enter your email" value={state.userInfo.email} onChange={onValueChange} />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input name="password" type="password" required placeholder="Enter your password" value={state.userInfo.password} onChange={onValueChange}/>
        </div>
        {errorMsg}
        {successMsg}
        <div className="form-control">
          <button type="submit">Register User</button>
        </div>
      </form>
      <div className="navBtn">
        <button onClick={toggleNav}>Login</button>
      </div>
    </div>
  );
}

export {LoginContextProvider, Login, Register};
