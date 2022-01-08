import React from 'react';
import './App.css';
import Toppanel from './toppanel/toppanel'
import Leftpanel from './leftpanel/leftpanel'
import Rightpanel from './rightpanel/rightpanel'
import Footerbar from './footerbar/footerbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Aboutus from './aboutus/aboutus'
import login from './login/login'
import signup from './login/singup'
import post from './postproject/post'
import Login from './newlogin/newlogin'
import Header from './header/Header'
 import front from './front/front'
 import content from './content/content'
 import pa from './front/pa'
import hireFreelancer from'./hireFreelancer/hireFreelancer';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <React.Fragment>
      <Toppanel></Toppanel>
      <Leftpanel></Leftpanel>
      { <Router basename={'/build'}>
          <Route path = "/login" component = {Login}/>
          <Route path = "/dashboard" component = {Header}/>
      </Router> }
    </React.Fragment>
  
  );
}

export default App;
