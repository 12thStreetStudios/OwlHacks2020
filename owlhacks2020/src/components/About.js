import '../style/About.css'
import React from 'react'

export default function About() {
    return(
        <div className="AboutPage">
            <header>
                <h2>About Us:</h2>
                    <body> 
                        <p>Welcome to Dev Helpr, a place for open source developers to look for help from others. </p>
                        <p>Our goal was to create a place for everyone from full stack developers to cybersecurity specialists to come together and cloaborate on big projects. </p>
                        <p>Dev Helpr has GitHub integration, so you can talk about and refence existing repositories when communicating.</p>    
                    </body>
            </header>
        </div>
    );
}