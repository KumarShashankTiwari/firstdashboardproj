import React from 'react';
import  './rightpanel.css'
import Panelicon from '../panelicon/panelicon'
import { faCoffee } from "@fortawesome/free-solid-svg-icons"
import { MDBIcon } from "mdbreact";
import Slider from '../Slider/Slider';
import Header from '../header/Header';

let Rightpanel = () => {
    return (
            
        <div>
        <Header></Header>

        <Slider></Slider>
        <Panelicon name="PHP icons" icon = "faLock"></Panelicon>
        <Panelicon name="Website Design" icon="faHome">web design </Panelicon>  
        <Panelicon name="Graphic Design" icon="faSign"> </Panelicon>
        
        <Panelicon name="Mobile Apps"i icon="fa fa-camera-retro"> php </Panelicon>
            <Panelicon name="Android App" icon="text"></Panelicon>
    <Panelicon name="Iphone Apps"  icon="text"></Panelicon>
        <Panelicon name="Photoshop" icon="text"></Panelicon>
        <Panelicon name="logo Design" icon="text"></Panelicon>
         <Panelicon name="Artical writing" icon="text"></Panelicon>
        <Panelicon name="deta Entry" icon="text"></Panelicon>
        <Panelicon name="Internet marketing" icon="text"></Panelicon>
        <Panelicon name="SEO" icon="text"></Panelicon>
        <Panelicon name="3D modelling " icon="text"></Panelicon>
        <Panelicon name="Copy Writing" icon="text"></Panelicon>
        <Panelicon name="Linex" icon="text"></Panelicon>
        <Panelicon name="Amezone wed service" icon="text"></Panelicon>
        <Panelicon name="baner Servces" icon="text"></Panelicon>
        <Panelicon name="Software Development" icon="text"></Panelicon>
        <Panelicon name="Accounting" icon="text"></Panelicon>
        <Panelicon name="Finance" icon="text"></Panelicon>
        <Panelicon name="Legal" icon="text"></Panelicon>
        <Panelicon name="Manufacturing" icon="text"></Panelicon>
        <Panelicon name="Logistics" icon="text"></Panelicon>
             
        </div>);
}

export default Rightpanel;