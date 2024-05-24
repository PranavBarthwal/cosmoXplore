import React from 'react'
import Styles from "./ProjectCard.module.css"
import { Parser } from 'html-to-react'

function ProjectCard({ projectId, title, acronym, description, startDate, endDate, lastUpdated, status }) {
    return (
        <div className={Styles['card']}>
            <h1 >
                <span className={Styles['title']}>Project Id:</span> {projectId}
            </h1>
            <h2 >
                <span className={Styles['title']}>Title:</span> {title}
            </h2>
            <h3 >
                <span className={Styles['title']}>Acronym:</span> {acronym}
            </h3>
            <h3 >
                <span className={Styles['title']}>Description: </span>
            </h3>
            {new Parser().parse(description)}
            <div >
                <p><span className={Styles['title']}>Start Date:</span> {startDate}</p>
                <p><span className={Styles['title']}>End Date:</span> {endDate}</p>
                <p><span className={Styles['title']}>Last Updated At:</span> {lastUpdated}</p>
            </div>
            <h3>
                <span className={Styles['title']}>Status:</span> {status}
            </h3>
        </div>
    )
}

export default ProjectCard