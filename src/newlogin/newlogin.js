import React from 'react';
import "./newlogin.css";
import Fab from '@material-ui/core/Fab';
import { withRouter } from "react-router";
import Header from '../header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

class Login extends React.Component {

  state = {
    toDashboard: false,
  }

  constructor(props){
    super(props);
    console.log(this.props);
    this.state = {
      toDashboard: false,
    }

    this.handleClick = this.handleClick.bind(this);
   }


  handleClick() {

    
    console.log("going to validate user", this);
    let userName =  document.getElementById("email").value;
    let password = document.getElementById("password").value;
  
    console.log("userName ", userName)
    console.log("Password ", password)
  
    if(userName === "armin" && password === "armin"){
      this.setState(() => ({
        toDashboard: true
      }));
      }else{
        this.setState(() => ({
          toDashboard: false
        }));
      }
    }



render() {
  if (this.state.toDashboard === true) {
   return( <Router basename={'/build'}>  <Switch><Redirect from="/login" to="dashboard" />  
   </Switch> 
   <Route path = "/dashboard" component = {Header}/>
   </Router>);
  } else {
  }
    return (
	
<div  className="mainDiv">
   <div className="login-boxx">
   <div class="lefty">
     <div class="leftheading">MAGIC IS IN THE</div>
     <div class="leftheading"> DETAILS</div>
     <div class=" par whiteColor">Please use your credentials to login. </div>
     <div class=" whiteColor">If you are not a member,please register.</div>
      
    </div>
   <div class="righty">
     <div class="container-fluid">
     <div class = "ii"></div>
       <div id="gogo">GOGO</div>
     </div>
       <div  class="log">Login</div>
	     <div>
            <fieldset >
              <legend> E-mail</legend>
               <input type="text" id ="email" className="inputClass"/>
            </fieldset>
            <fieldset >
              <legend> Password</legend>
              <input type="password" id="password" className="inputClass"/>
            </fieldset>
        </div>
       <div className="margin">
         <span  className="la">Forget Password ?</span>
         <span className="paddingLeft"> 
          <Fab variant="extended" className="login" onClick = {this.handleClick}>
               Login    
            </Fab>
          Login
        </span></div>
     </div>
    </div>
  </div>
    );
  }


}
export default withRouter(Login)



