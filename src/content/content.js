import React from 'react';
import './content.css';
import {MDBDataTable,MDBCol, MDBIcon, MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBSideNavLink, MDBContainer, MDBRow, MDBBtn } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from "react-sidebar";
import ReactSearchBox from 'react-search-box';

class content extends React.Component
{
      render()
    {
      const data = {
        columns: [
          {
            label: 'Name',
            field: 'name',
            sort: 'asc',
            width: 150,
            searching:true
          },
          {
            label: 'Sales',
            field: 'sales',
            sort: 'asc',
            search: 'true',
            width: 150
          },
          {
            label: 'Stock',
            field: 'stock',
            sort: 'asc',
            search: 'true',
            width: 150
          },
          {
            label: 'Company',
            field: 'company',
            sort: 'asc',
            search: 'true',
            width: 150
          }
        ],
        rows: [
          {
            name: 'Prescott Bartlett',
            sales: 'Technical Author',
            stock: 'London',
            company: '27',
            
          },
          {
            name: 'Gavin Cortez',
            sales: 'Team Leader',
            stock: 'San Francisco',
            company: '22',
            
          },
          {
            name: 'Martena Mccray',
            sales: 'Post-Sales support',
            stock: 'Edinburgh',
            company: '46',
            
          },
          {
            name: 'Unity Butler',
            sales: 'Marketing Designer',
            stock: 'San Francisco',
            company: '47',
         
          },
          {
            name: 'Howard Hatfield',
            sales: 'Office Manager',
            stock: 'San Francisco',
            company: '51',
          
          },
          {
            name: 'Hope Fuentes',
            sales: 'Secretary',
            stock: 'San Francisco',
            company: '41',
        
          },
          {
            name: 'Vivian Harrell',
            sales: 'Financial Controller',
            stock: 'San Francisco',
            company: '62',
         
          },
          {
            name: 'Timothy Mooney',
            sales: 'Office Manager',
            stock: 'London',
            company: '37',
      
          },
          {
            name: 'Jackson Bradshaw',
            sales: 'Director',
            stock: 'New York',
            company: '65',
       
          },
          {
            name: 'Olivia Liang',
            sales: 'Support Engineer',
            stock: 'Singapore',
            company: '64',
         
          },
          {
            name: 'Bruno Nash',
            sales: 'Software Engineer',
            stock: 'London',
            company: '38',
   
          },
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
   
          }
        ]
      };
    
        return(
<div>
<div class="container-fluid pppp">
<div class="container-fluid componentss">
<ul>
<li><div class="leftone container-fluid">

<div>
 </div>
</div>

</li>

<li>
  <div class="rightone">
<div id="hbar" class="head container-fluid">
Filter, Length and Jump
</div>
<div class="table">


<MDBDataTable data={data}  searching={false}/>

</div>

<div></div>
</div></li>
</ul>
</div></div>
        
        
        </div>
        );
    }
}
export default content;