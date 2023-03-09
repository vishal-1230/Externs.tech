import React from "react"
import './portfolio.css'

export default function PortfolioCard(props) {
    return (<div className="portfolioCard" onClick={()=>{props.setcurrentProject({
        title: props.title,
        images: props.images,
        techStack: props.techStack,
        url: props.url,
        completedIn: props.completedIn
    }); document.getElementById("projectDetailsContainer").style.display="flex"}}>
        <img src={props.coverImage} alt={props.title + " Cover Image"} className="portfolioCardImage" />
        <span className="portfolioCardTitle">{props.title}</span>
    </div>)
}