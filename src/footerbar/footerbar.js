import React from 'react';
import './footerbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import {button, MDBBtn ,MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
 

const footerbar = () => {
  return (
        <div>
         
    <MDBFooter color="blue">   
      <MDBContainer fluid >
        <MDBRow>
          <MDBCol md="5">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://www.facebook.com/Seema-Consultancy-Services-113716740068718">Facebook</a>
              </li>
              <li className="list-unstyled">
                <a href="http://www.Twitter.com">Twitter</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">googal+</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-left py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> Seema Services Consultancy</a>
           <span className = "floatRight">
           <FontAwesomeIcon icon={faLock } title="facebook" />
           <FontAwesomeIcon icon={faLock } title="facebook" />
           <FontAwesomeIcon icon={faLock } title="facebook" />
           </span>
        </MDBContainer>
      </div>

    </MDBFooter>
    </div>
  );
}

export default footerbar;


