import React from 'react';

import './leftpanel.css';
import SideNav, {MenuIcon} from 'react-simple-sidenav';
import {MDBIcon} from 'mdbreact';


class Leftpanel extends React.Component {
  state = {
    showNav: false,
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
       try{
       if(this.state.showNav){
        this.setState({showNav: false})} 
        else {
        this.setState({showNav: true})} 
       } catch(e){
          console.log(e);
    }
         }
    
   

  render() {
    return(
     
        <div className="left" >
          <MenuIcon onClick={this.handleClick} className= "menuiconClass"/>
          <SideNav 
            showNav  = {this.state.showNav}
             onHideNav={()=>this.setState({showNav3:false})}
             titleStyle= {{backgroundColor: "#252625",lineHeight: "0px",padding: "0px",color:"#252625"}}
             style = {{marginTop: "11vh", width: "15vh"}}
             navStyle={{backgroundColor:"#252625",width: "15vh"}}
             itemStyle={{backgroundColor:"#252625",color:"white",fontsize:"50px",textAlign: '-webkit-center'}}
             itemHoverStyle =  {{backgroundColor: '#252625',color:"blue",textAlign: '-webkit-center'}}
           
            items={[
           <div><div className= "center"><MDBIcon far icon="hdd" /></div> <div className="myicon"> Dashboards</div></div>,
           <div><div className= "center"><MDBIcon  icon="desktop"/></div> <div className="myicon"> Pages</div></div>,
           <div><div className= "center"><MDBIcon far icon="lightbulb"/></div> <div className="myicon"> Application</div></div>,
           <div><div className= "center"><MDBIcon  icon="copy"/></div> <div className="myicon"> UI</div></div>
        
          ]}
      />
  </div>
    )
  }
}

export default Leftpanel;
