import React, {useState} from "react";
import htmlIcon from "../assets/html.png"
import cssIcon from "../assets/css.png"
import jsIcon from "../assets/js.png"
import reactIcon from "../assets/react.png"
import phpIcon from "../assets/php.png"
import pythonIcon from "../assets/python.png"
import dJangoIcon from "../assets/django.png"
import nodeIcon from "../assets/node.png"
import mysqlIcon from "../assets/mysql.png"
import mongoIcon from "../assets/mongo.png"
import DSAIcon from "../assets/dsa.png"
import OOPIcon from "../assets/oop.png"
import wrdIcon from "../assets/wrd.png"
import exclIcon from "../assets/excl.png"
import pptIcon from "../assets/ppt.png"
import boostrapIcon from "../assets/boostrap.png"
import mlIcon from  "../assets/ml.png"

function Skills(){
    const [display, setDisplay] = useState(1)

    const showTab = (e) =>{
        setDisplay(e);
    }
    return(
        <div className="skills" id="skl">
            <h3>Expertise</h3>
            <div className="hide-show-tab">
                <div className="hide-show-tab-nav">
                    <button className="hide-show-tab-nav-btn" onClick={()=>showTab(1)}>Frontend</button>
                    <button className="hide-show-tab-nav-btn" onClick={()=>showTab(2)}>Backend</button>
                    <button className="hide-show-tab-nav-btn" onClick={()=>showTab(3)}>Database</button>
                    <button className="hide-show-tab-nav-btn" onClick={()=>showTab(4)}>Progamming Concepts</button>
                    <button className="hide-show-tab-nav-btn" onClick={()=>showTab(5)}>Others</button>
                </div>
                <div className="hide-show-tab-content">
                    <div className={display===1? "content show": "content hide"}>
                        <img src={htmlIcon}/><progress value={0.95}/><br/>
                        <img src={cssIcon}/><progress value={0.95}/><br/>
                        <img src={jsIcon}/><progress value={0.93}/><br/>
                        <img src={boostrapIcon}/><progress value={0.9}/>
                    </div>
                    <div className={display===2? "content show": "content hide"}>
                        <img src={phpIcon}/><progress value={0.92}/><br/>
                        <img src={pythonIcon}/><progress value={0.9}/><br/>
                        <img src={dJangoIcon}/><progress value={0.8}/><br/>
                        <img src={nodeIcon}/><progress value={0.5}/>
                    </div>
                    <div className={display===3? "content show": "content hide"}>
                        <img src={mysqlIcon}/><progress value={0.88}/><br/>
                        <img src={mongoIcon}/><progress value={0.5}/>
                    </div>
                    <div className={display===4? "content show": "content hide"}>
                        <img src={DSAIcon}/> DSA<progress value={0.95}/><br/>
                        <img src={OOPIcon}/> OOP<progress value={0.95}/><br/>
                        <img src={mlIcon}/>  ML <progress value={0.85}/>
                    </div>
                    <div className={display===5? "content show": "content hide"}>
                        <img src={wrdIcon}/><progress value={0.95}/><br/>
                        <img src={pptIcon}/><progress value={0.95}/><br/>
                        <img src={exclIcon}/><progress value={0.7}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills;