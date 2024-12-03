import React from "react";
import homeIcon from "../assets/home.png"
import eduIcon from "../assets/education.png"
import skillIcon from "../assets/skills.png"
import projectIcon from "../assets/projects.png"

function Navbar(){
    return(
        <div className="navbar">
            <ul>
                <li><a href="#home"><img src={homeIcon}/></a></li>
                <li><a href="#edu"><img src={eduIcon}/></a></li>
                <li><a href="#skl"><img src={skillIcon}/></a></li>
                <li><a href="#prj"><img src={projectIcon}/></a></li>
            </ul>
        </div>
    )
}
export default Navbar;