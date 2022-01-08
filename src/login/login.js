import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React from 'react';


class Login extends React.Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }
render() {
    return (
<div id="login-box">
  <div class="left">
    <h1>Login</h1>
    <input type="text" name="email" placeholder="E-mail" />
    <input type="password" name="password" placeholder="Password" />  
    <input type="submit" name="signup_submit" value="Login" />
  </div>
  <div class="right">
    <span class="loginwith">Sign in with<br />social network</span>
    
    <button class="social-signin facebook">Log in with facebook</button>
    <button class="social-signin twitter">Log in with Twitter</button>
    <button class="social-signin google">Log in with Google+</button>
  </div>
  <div class="or">OR</div>
</div>
    );
  }

  handleClick(event) {
    var apiBaseUrl = "http://localhost:4000/api/";
    var self = this;
    var payload={
    "email":this.state.username,
    "password":this.state.password
    }
    
    }
}
const style = {
 margin: 15,
};
export default Login;


