import React from 'react';
// import './front.css';
import {MDBCol, MDBIcon, MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBSideNavLink, MDBContainer, MDBRow, MDBBtn } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from "react-sidebar";

class front extends React.Component
{

  
    render()
    {
    
        return(
<div>
<div class="container-fluid ppp">
<div class="container-fluid componentss">
<ul>
<li><div class="leftone container-fluid">
<div id="btnpanel">
<label id="l" class="btn frbtn container-fluid">Male</label>
<button class="btn frbtn container-fluid">Shashank</button>
<button class="btn frbtn container-fluid">Shashank</button>

<button class="btn frbtn container-fluid">Shashank</button>
<button class="btn frbtn container-fluid">Shashank</button>
<button class="btn frbtn container-fluid">Shashank</button>
<button class="btn frbtn container-fluid">Shashank</button>
</div>
<div>




 </div>
</div>

</li>

<li>
  <div class="rightone">
<div id="hbar" class="head container-fluid">
<MDBCol md="12" id="se">
      <div className="input-group md-form form-sm form-1 pl-0">
     
      
      <select id="s" class="btn"> 
      <option>Select</option>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
      
        <div className="input-group-prepend">
          {/* <span className="input-group-text purple lighten-3" id="basic-text1">
            <MDBIcon className="text-white" icon="search" />
          </span> */}
        </div>
        <input id="ser" className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" />
        <button id="s" class="btn">Shashank</button>
      </div><div>

      </div>
    </MDBCol>

</div>
<div class="table">
<table class="table table-hover">
  <thead>
    <tr>
      <th class="thfirst" scope="col">#</th>
      <th scope="col" >
        <div class="thsecond">First
        </div></th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="thfirst" scope="row"></td>
      <td> <strong><div class="thh">This is heading text in row</div></strong>
      
      <div id="minitext">
     <li><p class="live">1:1 Live Help</p></li>Java
      {/* <li><p>Java</p></li> */}

      </div>
      </td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
    <td class="thfirst" scope="row">1</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>

    </tr>
    <tr>
    <td class="thfirst" scope="row">1</td>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
    <td class="thfirst" scope="row">1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td class="thfirst" scope="row">2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
    <td class="thfirst" scope="row">1</td>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th class="thfirst" scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th class="thfirst" scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th class="thfirst" scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>

<div></div>
</div></li>
</ul>
</div></div>
        
        
        </div>
        );
    }
}
export default front;