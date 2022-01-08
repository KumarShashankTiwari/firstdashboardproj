import React from 'react';
import {Navbar , Button} from 'react-bootstrap'
import  './toppanel.css'; 
import ReactModalLogin from "react-modal-login";
import {facebookConfig,googleConfig} from "../social-profile/socialProfile"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSign } from '@fortawesome/free-solid-svg-icons'



class  Toppanel extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      showModal: false,
      loading: false,
      error: null
    };
  }
 
  openModal() {
    this.setState({
      showModal: true
    });
  }
 
  closeModal() {
    this.setState({
      showModal: false,
      error: null
    });
  }
 
  onLoginSuccess(method, response) {
    console.log("logged successfully with " + method);
  }
 
  onLoginFail(method, response) {
    try{
    console.log("logging failed with " + method);
    this.setState({
      error: response
    });
  } catch ( e) {
    console("i am coming here" , e);
  }
  }
 
  startLoading() {
    this.setState({
      loading: true
    });
  }
 
  finishLoading() {
    this.setState({
      loading: false
    });
  }
 
  afterTabsChange() {
    this.setState({
      error: null
    });
  }
  render() {
  return (
    <div>
    <Navbar className="navbar" variant="dark" role="navigation" >
    <Navbar.Brand href="/home" className="navbaritem" >Project Namee</Navbar.Brand>
    <Navbar.Brand href="/home" className="navbaritem" > Home</Navbar.Brand>
    <Button href="/post" variant="outline-success" className="button">Post Project</Button>
    {/* <Navbar.Brand href="/newpost" className="navbaritem">NewPOst</Navbar.Brand> */}
    <Navbar.Brand href="/post" className="navbaritem">Post</Navbar.Brand>
    <Navbar.Brand href="/login" className="navbaritem floatright"><FontAwesomeIcon icon={faSign} />LOGIN</Navbar.Brand>
    <Navbar.Brand href="/newlogin" className="navbaritem" >New Login</Navbar.Brand>
    <Navbar.Brand href="/signup" className="navbaritem">SIGN UP</Navbar.Brand>
    <Navbar.Brand href="/applyasfreelancer" className="navbaritem" >Apply as Freelancer</Navbar.Brand>
    <Navbar.Brand href="/front" className="navbaritem" >Front</Navbar.Brand>
    <Navbar.Brand href="/content" className="navbaritem" >Content</Navbar.Brand>
    <Navbar.Brand href="/dashboard" className="navbaritem" >Dashboard</Navbar.Brand>
    
    </Navbar>
    </div>
  );
}
}

export default Toppanel;