import React from 'react';
import "./post.css";


import download from"./download.png";
class post extends React.Component {
render() {
    return (
     
<div>
  <div class="container-fluid ppp">

    <div class="components">
    <div id="header" class="container-fluid">
      <div id="fullcontent" class="conatiner">HIIII
      <div id="logo-div"><img id="img" src={download} /></div>
      <div id="heading"><strong>Tell us what you need done</strong></div>
      <div id="littlepara"><strong>Contact skilled freelancers within minutes. View profiles, ratings, portfolios and chat with them. Pay the freelancer only when you are 100% satisfied with their work.
      </strong>
</div>
<div id="setmiddle" >

<div id="post">
                        
                <div className="choosename">Choose a name for your project</div>
                <input id="input1" className="inputbox1"  type="text" name="name" placeholder="e.g. New Messenger App" />
                <div className="choosename">Tell us more about your project</div>
                <p id="pp">Start with a bit about yourself or your business, and include an overview of what you need done.</p>
                {/* <input className="inputbox1" type="text" name="detail" placeholder="Describe of project here...." />*/}
                <textarea id="textarea" rows="4" cols="50" type="text" name="detail" placeholder="Describe of project here...."/>
                <div class="upload-btn-wrapper btndiv" id="upload">
  <button class="btn" id="btn">Upload a file</button>
  <input class="btn" id="file" type="file" name="myfile" />
</div></div>

</div>
      </div>
    </div>

      </div>


</div>
  
</div>
    );
  }
}
export default post;
