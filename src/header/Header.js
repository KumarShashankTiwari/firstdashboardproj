import React from 'react';
import "./Header.css";

import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

import  {MenuIcon} from 'react-simple-sidenav';
import  Leftpanel from "../leftpanel/leftpanel"
import Dashboard from '../dashboard/dashboard'

import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBBtn } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class Header extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
    
 
  }

    
    }

  
  render() {
     
const options = [
  { value: 'one', label: 'Spanish' },
  { value: 'two', label: 'English', className: 'myOptionClassName' },
  {
   type: 'group', name: 'group1', items: [
     { value: 'three', label: 'French', className: 'myOptionClassName' },
     { value: 'four', label: 'Four' }
   ]
  },
  {
   type: 'group', name: 'group2', items: [
     { value: 'five', label: 'Five' },
     { value: 'six', label: 'Six' }
   ]
  }
]
const defaultOption = options[0]


   const bgPink = {backgroundColor: '#252625'}
   
   
    return(
         <div>   
       <MDBNavbar style={bgPink} dark expand="md">
          <MDBNavbarNav left>
            <Leftpanel />
            <MDBNavItem >
            <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
             </MDBNavItem>
             <MDBNavItem>
             <Dropdown className="dropdown-control" options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />          
             </MDBNavItem>
            
          </MDBNavbarNav>
          <MDBNavbarNav right> 
             <MDBNavItem>
              <MDBIcon icon="th " className="iconclass"  />
              </MDBNavItem>
              <MDBNavItem>
              <MDBIcon icon="bell" className="iconclass"  />
              </MDBNavItem>
              <MDBNavItem>
              <MDBIcon icon="arrows-alt" className="iconclass"  />
              </MDBNavItem>
              <MDBNavItem>
              <span className="iconclass"> sarah kortney</ span>  
              </MDBNavItem>
              <MDBNavItem>
              <div class="img-circular"></div>
             </MDBNavItem>
          </MDBNavbarNav>
      </MDBNavbar>
      <Dashboard></Dashboard>
       </div> 
      
    );
  }
}

export default Header;