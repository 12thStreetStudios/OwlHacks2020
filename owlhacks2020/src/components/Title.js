// src/Title.js
import './Title.css'
import React from 'react'

function Title() {
    return (
        <div className="Title">
            <header>
                <h1>Dev-Helpr</h1>
                <p>"A place to find help with open source projects"</p>
                <div id="navbar">
                    <ul>
                        <li><a href ="">Login</a></li>
                        <li><a href = "">Register</a></li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Title