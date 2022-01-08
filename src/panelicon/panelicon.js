import React from 'react';
import  './panelicon.css' 
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faLock, faSign } from '@fortawesome/free-solid-svg-icons'
import { constants } from 'zlib';
import {Card} from 'react-bootstrap';

import { CardTitle, CardText, Slider } from 'react-md';
import { Container } from '@material-ui/core';



let Panelicon = (props) => {

    return (
      <a href="/hireFreelancer" >
      <div className="card" title = {props.title} >
        <i class={props.icon}>
          {props.name}</i>
  </div></a>
 );
}

export default Panelicon;