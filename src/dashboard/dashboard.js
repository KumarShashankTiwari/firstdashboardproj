// import React, { Component } from 'react';
// import {DataTable} from 'primereact/datatable';
// import {Column} from 'primereact/column';
// import {InputText} from 'primereact/inputtext';
// import {Button} from 'primereact/button';
// import {Dropdown} from 'primereact/dropdown';
// import {MultiSelect} from 'primereact/multiselect';
// import './dashboard.css';
// import { withRouter } from "react-router";
// import { white } from 'material-ui/styles/colors';

// class Dashboard extends Component {

//                     constructor(props) {
//                     super(props);    
                    
//                    }


//                     render() {
//                       console.log(this.props.width)

//                       let rows= [
//                     {
//                        name: 'Sakura Yamamoto',
//                        sales: 'Support Engineer',
//                        stock: 'Tokyo',
//                        company: '37',
                 
//                      },
//                     {
//                        name: 'Thor Walton',
//                        sales: 'Developer',
//                        stock: 'New York',
//                        company: '61',
                    
//                      },
//                     {
//                        name: 'Finn Camacho',
//                        sales: 'Support Engineer',
//                        stock: 'San Francisco',
//                        company: '47',
                
//                     },
//                      {
//                        name: 'Serge Baldwin',
//                        sales: 'Data Coordinator',
//                        stock: 'Singapore',
//                        company: '64',
                  
//                      },
//                    {
//                        name: 'Zenaida Frank',
//                        sales: 'Software Engineer',
//                        stock: 'New York',
//                       company: '63',
                
//                      },
//                      {
//                       name: 'Zorita Serrano',
//                        sales: 'Software Engineer',
//                        stock: 'San Francisco',
//                     company: '56',
                     
//                      },
//                      {
//                       name: 'Jennifer Acosta',
//                        sales: 'Junior Javascript Developer',
//                      stock: 'Edinburgh',
//                        company: '43',
//                      },
//                      {
//                        name: 'Cara Stevens',
//                        sales: 'Sales Assistant',
//                        stock: 'New York',
//                        company: '46',
                      
//                     },
//                      {
//                        name: 'Hermione Butler',
//                        sales: 'Regional Director',
//                      stock: 'London',
//                      company: '47',
//                      },
//                      {
//                        name: 'Lael Greer',
//                        sales: 'Systems Administrator',
//                        stock: 'London',
//                        company: '21',
                      
//                      },
//                      {
//                        name: 'Jonas Alexander',
//                        sales: 'Developer',
//                        stock: 'San Francisco',
//                        company: '30',
                   
//                      },
//                      {
//                        name: 'Shad Decker',
//                        sales: 'Regional Director',
//                        stock: 'Edinburgh',
//                        company: '51',
                   
//                      },
//                      {
//                        name: 'Michael Bruce',
//                        sales: 'Javascript Developer',
//                        stock: 'Singapore',
//                        company: '29',
                  
//                      },
//                      {
//                       name: 'Donna Snider',
//                       sales: 'Customer Support',
//                       stock: 'New York',
//                       company: '27',
//                       }]

//                       let paginatorLeft = <Button icon="pi pi-refresh"/>;
//                       let paginatorRight = <Button icon="pi pi-cloud-upload"/>;
//                      var footerclassstyle = <div style={{'textAlign':'left','color':'yellow'}}>   yes  </div>;

//                       var header = <div style={{'textAlign':'left'}}>
//                       <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
//                   </div>;
//          return (
         
//            <div className=" mynewtable content-section implementation p-button-secondary">
//             <DataTable ref={(el) => this.dt = el} value={rows} paginator={true} rows={6} header={header}
//              paginator={true} paginatorLeft={paginatorLeft} paginatorRight={paginatorRight} rows={6} rowsPerPageOptions={[5,10,20]} footer={true}
//              rowEditor={true} footerClassName={footerclassstyle}
//              >
//                 <Column className="colspace" field="name" header="Name" filter={true} />
//                 <Column className="colspace" field="sales" header="Sales" filter={true} />
//                 <Column className="colspace" field="stock" header="Stock" filter={true} />
//                 <Column className="colspace" field="company" header="Company" filter={true}  />
//             </DataTable>
//             {/* <DataTable></DataTable> */}
//         </div>
           
//         );
//     }
// }
// export default withRouter(Dashboard)

import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import './dashboard.css';
import { withRouter } from "react-router";

class Dashboard extends Component {

                    constructor(props) {
                    super(props);    
                   }


                    render() {
                      console.log(this.props.width)
                      let rows= [
                    {
                       name: 'Sakura Yamamoto',
                       sales: 'Support Engineer',
                       stock: 'Tokyo',
                       company: '37',
                 
                     },
                    {
                       name: 'Thor Walton',
                       sales: 'Developer',
                       stock: 'New York',
                       company: '61',
                    
                     },
                    {
                       name: 'Finn Camacho',
                       sales: 'Support Engineer',
                       stock: 'San Francisco',
                       company: '47',
                
                    },
                     {
                       name: 'Serge Baldwin',
                       sales: 'Data Coordinator',
                       stock: 'Singapore',
                       company: '64',
                  
                     },
                   {
                       name: 'Zenaida Frank',
                       sales: 'Software Engineer',
                       stock: 'New York',
                      company: '63',
                
                     },
                     {
                      name: 'Zorita Serrano',
                       sales: 'Software Engineer',
                       stock: 'San Francisco',
                    company: '56',
                     
                     },
                     {
                      name: 'Jennifer Acosta',
                       sales: 'Junior Javascript Developer',
                     stock: 'Edinburgh',
                       company: '43',
                     },
                     {
                       name: 'Cara Stevens',
                       sales: 'Sales Assistant',
                       stock: 'New York',
                       company: '46',
                      
                    },
                     {
                       name: 'Hermione Butler',
                       sales: 'Regional Director',
                     stock: 'London',
                     company: '47',
                     },
                     {
                       name: 'Lael Greer',
                       sales: 'Systems Administrator',
                       stock: 'London',
                       company: '21',
                      
                     },
                     {
                       name: 'Jonas Alexander',
                       sales: 'Developer',
                       stock: 'San Francisco',
                       company: '30',
                   
                     },
                     {
                       name: 'Shad Decker',
                       sales: 'Regional Director',
                       stock: 'Edinburgh',
                       company: '51',
                   
                     },
                     {
                       name: 'Michael Bruce',
                       sales: 'Javascript Developer',
                       stock: 'Singapore',
                       company: '29',
                  
                     },
                     {
                      name: 'Donna Snider',
                      sales: 'Customer Support',
                      stock: 'New York',
                      company: '27',
                      }]
         return (
            <div className="mynewtable content-section implementation">
               
                    <DataTable value={rows} paginator={true} rows={6}>
                    
                        <Column className="colspace" field="name" header="Name" filter={true} />
                        <Column className="colspace" field="sales" header="Sales" filter={true} />
                        <Column className="colspace" field="stock" header="Stock" filter={true}  />
                        <Column className="colspace" field="company" header="Company" filter={true} />
                    
                    </DataTable>
                </div>

             
           
        );
    }
}
export default withRouter(Dashboard)