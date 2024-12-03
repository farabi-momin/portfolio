import React from "react";
import "./style.css"
import htmlTag from "../assets/htmltag.png"
import softDev from "../assets/softdev.png"
import ml from "../assets/ml.png"

function About(){
    return(
        <div className="about" id="about">
            <h3>About Me</h3>
            <p>A computer science and engineering graduate trained in several programming languages. Emplemented several dynamic web applications in my academic years using php, javascript, html5, css and django. Also trained in machine learning and deep learning. Have a good knowledge on OOP, DSA and performance optimization.</p>
            <h3>What I do?</h3>
            
            <div className="container">
                <div className="container-box">
                    <img src={htmlTag}/>
                    <h3>Web Development</h3>
                    <p>I specialize in building dynamic and responsive web applications using modern technologies. With a solid foundation in HTML, CSS, and JavaScript, I create user-friendly, visually appealing websites. I enhance interactivity and performance with ReactJS for front-end development and leverage NodeJS, PHP, and Django for back-end solutions. From concept to deployment, I’m passionate about delivering seamless web experiences that meet both user needs and business goals.</p>
                </div> 
                <div className="container-box">
                    <img src={softDev}/>
                    <h3>Software Development</h3>
                    <p>I develop efficient and scalable software solutions tailored to solve real-world problems. Proficient in Python, Java, and C, I work across different domains, from system-level programming to high-level application development. My focus is on writing clean, maintainable code while optimizing performance and ensuring seamless user experiences.</p>
                </div><br/>
                <div className="container-box">
                    <img src={ml}/>
                    <h3>Machine Learning an AI</h3>
                    <p>I apply Machine Learning techniques to build intelligent systems that can analyze data and make predictions. Leveraging my expertise in Python, I work on various ML projects, from data preprocessing and model development to deployment. My focus is on creating models that enhance decision-making, improve automation, and deliver actionable insights across different domains.</p>
                </div>   
            </div>
        </div>
    )
} 
export default About;