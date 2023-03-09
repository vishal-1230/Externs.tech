import React from "react";
import './portfolio.css'

export default function ProjectDetails(props) {
    return <div className="projectDetailsContainer" id="projectDetailsContainer">
        <div className="projectDetails">
            <span className="closeIcon" onClick={()=>{document.getElementById('projectDetailsContainer').style.display="none"}}>&#x2716;</span>
        </div>
    </div>
}