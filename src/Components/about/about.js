import React, {Component} from 'react';
import resumeData from '../../Data/resumeData';
export default class About extends Component{
    render(){
        return(
    <React.Fragment>
             {/* About Section
   ================================================== */}
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutMe}
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span><br />
                  <span>{resumeData.email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="assets/DR_Resume.pdf" target="_blank" className="button">View Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section> {/* About Section End*/}    
    </React.Fragment>
        );
    }
}