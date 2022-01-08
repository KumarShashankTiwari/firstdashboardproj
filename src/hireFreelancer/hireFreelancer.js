import React from 'react';
// import './hireFreelancer.css'
import SideNav, { NavItem , NavIcon , NavText } from '@trendmicro/react-sidenav';
 
class hireFreelancer extends React.Component{


     styles = {
        container: {
            width: this.state.size
        }
    };

    state = {
             size : "60px"
      }

      handleToggle = () => {
     
      };

      onSelect =(seclct) => {
          console.log("coming here ", seclct);
      }

      onToggle = (toggle) => {
          console.log("toggle " , toggle );
          if(toggle){
            this.setState({
                size: "150px"
            });
          }else {
            this.setState({
                size: "60px"
            });
          }
      }


      render() {
        const { isOpen } = this.state;
        return (
            <SideNav onSelect={this.onSelect} onToggle={this.onToggle} open ={this.isOpen} className = "nav" >
            <SideNav.Toggle />
            <SideNav.Nav >
                <NavItem eventKey="home">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em', verticalAlign: 'middle' , width:'2%'}} />
                    </NavIcon>
                    <NavText style={{ paddingRight: 32 , width:'2%' }} title="Home">
                        Home
                    </NavText>
                </NavItem>
                <NavItem eventKey="devices">
                    <NavIcon>
                        <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em', verticalAlign: 'middle' , width:'2%' }} />
                    </NavIcon>
                    <NavText style={{ paddingRight: 32, width:'2%' }} title="Devices">
                        Devices
                    </NavText>
                </NavItem>
                <NavItem eventKey="reports">
                    <NavIcon>
                        <i className="fa fa-fw fa-list-alt" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
                    </NavIcon>
                    <NavText style={{ paddingRight: 32 }} title="Reports">
                        Reports
                    </NavText>
                </NavItem>
                <NavItem eventKey="settings">
                    <NavIcon>
                        <i className="fa fa-fw fa-cogs" style={{ fontSize: '1.5em', verticalAlign: 'middle' }} />
                    </NavIcon>
                    <NavText style={{ paddingRight: 32 }} title="Settings">
                        Settings
                    </NavText>
                    <NavItem eventKey="settings/policies">
                        <NavText title="Policies">
                            Policies
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="settings/network">
                        <NavText title="Network">
                            Network
                        </NavText>
                    </NavItem>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
        );
}
}

export default hireFreelancer;


