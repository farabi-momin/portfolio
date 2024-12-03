import React from "react";
import "./style.css";

function Education(){
    return(
        <div className="education" id="edu">
            <h3>Education</h3>
            <div className="edu-tab">
                <h4>Bachelor's in Computer Science and Engineering</h4>
                <h5>North South University</h5>
                <p>2019-2024</p>
            </div><hr/>
            <div className="edu-tab">
                <h4>Higher School Certificate</h4>
                <h5>New Govt. Degree College, Rajshahi</h5>
                <p>2016-2018</p>
                <p>Science</p>
            </div><hr/>
            <div className="edu-tab">
                <h4>Secondary School Certificate</h4>
                <h5>Govt. Laboratory High School, Rajshahi</h5>
                <p>2014-2016</p>
            </div>

        </div>
    )
}
export default Education;