import React from "react";
import pp from "../assets/profilepic.jpg"
import "./style.css"
import fbIcon from "../assets/fb.png"
import gitIcon from "../assets/git.png"
import linkedInIcon from "../assets/linkedin.png"
import mobileIcon from "../assets/mobile.png"
import mailIcon from "../assets/email.png"
import locationIcon from "../assets/location.png"

function Profile(){
    return(
            <div className="profile">
                <div className='profile-pic'><img src={pp}/></div>
                <h3>Sakib Bin Momin Farabi</h3>
                <p>Computer Science Engineering | Full Stack Web Developer</p>
                
                <div className="contact-link">
                    <a href="https://www.facebook.com/FARABIMOMIN"><img className="contact-link-icon" src = {fbIcon}/></a>
                    <a href="https://github.com/farabi-momin"><img className="contact-link-icon" src = {gitIcon}/></a>
                    <a href="https://www.linkedin.com/in/sakib-bin-momin-0891a52a9/"><img className="contact-link-icon" src = {linkedInIcon}/></a>
                </div>
                <div className="contact-tab">
                    <div className="tab">
                        <img src={mobileIcon}/>
                        <p>Phone Number</p>
                        <h3>+8801703870319</h3>
                    </div>
                    <hr/>
                    <div className="tab">
                        <img src={mailIcon}/>
                        <p>Email</p>
                        <h3>farabimomin05@gmail.com</h3>
                    </div>
                    <hr/>
                    <div className="tab">
                        <img src={locationIcon}/>
                        <p>Location</p>
                        <h3>Bashundhara R/A, Dhaka</h3>
                    </div>
                    
                </div>   
            </div>
        
    )
}
export default Profile;