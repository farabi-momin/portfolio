import React from "react";
import "./style.css"

function Projects(){
    return(
        <div className="projects" id="prj">
            <h3>Projects</h3>
            <div className="container">
                <div className="content">
                    <header className="h-blue">
                        <h3>
                            Online Job Portal
                        </h3>    
                    </header>
                    <h4>    Full Stack Web App</h4><hr/>
                    <p> 2 kind of user. Job recruiter and job seeker. Recruiter will post a job under his company and choose among the applicants. Seeker will find suitable job for himself and and apply for it along with his resume.<br/>
                        Technologies:<br/>
                        Front-end: HTML, CSS, Javascripts<br/>
                        Back-end: php, mysql
                    </p>
                    <hr/>
                    <a href="https://github.com/farabi-momin/jobPortal">Git-link</a>
                </div>
                <div className="content">
                    <header className="h-green"><h3>
                            RideKid
                        </h3>    
                    </header>
                    <h4>Full Stack Web App</h4><hr/>
                    <p>    Online bike subscription system. 2 kind of user. Admin and Client. Admin can add, delete and update bike and bike info. Also can monitor and authorize client activity. Client will choose his desired bike and apply for subscription.
                        Technologies:<br/>
                        Front-end: HTML, CSS, Javascripts<br/>
                        Back-end: php, mysql<br/>
                        UIX design: Figma 
                    </p>
                    <hr/>
                    <a href="https://github.com/farabi-momin/ridekid">Git-link</a>
                </div>
                <div className="content">
                <header className="h-red"><h3>
                        Exam Online
                    </h3>
                    </header>
                    <h4>Full Stack Web App </h4><hr/>
                    <p> Online exam system. Similar to google classroom. 2 kind of user. Admin and Client. Client could be examiner or examinee. Examiner can create a exam cohort and add examinees. Also can create exam question such as mcq, question answer and oral exam. Examinee will join a cohort and give exam. Admin will monitor, access, add, remove and update client info and activity.
                        Technologies:<br/>
                        Front-end: HTML, CSS, Javascripts<br/>
                        Back-end: dJango, sqlite
                    </p>
                    <hr/>
                    <a href="https://github.com/farabi-momin/exam-cohort">Git-link</a>
                </div>
                <div className="content">
                    <header className="h-blue"><h3>
                        E-Sheba
                    </h3>
                    </header>
                    <h4>Full Stack Web App</h4><hr/>
                    <p>    Online train ticket management. 2 kind of user. Client and admin. Admin can add, remove and update trains and ticket, monitor client's activity. CLient can browse, book and purchase ticket.
                        Technologies:<br/>
                        Front-end: HTML, CSS, Javascripts<br/>
                        Back-end: php, mysql
                    </p>
                    <hr/>
                    <a href="https://github.com/farabi-momin/esheba">Git-link</a>
                </div>
                <div className="content">
                    <header className="h-green">
                        <h3>Restaurant Website static</h3>
                    </header>
                    <h4>Static Front-end Website</h4><hr/>
                    <p>    Technologies: HTML, CSS, ReactJS</p>
                    <hr/>
                    <a href="https://farabi-momin.github.io/react_test/">live-link</a>
                </div>
            </div>
        </div>
    )
}
export default Projects;