import '../style/About.css'
import React from 'react'

export default function About() {
    return(
        <div className="AboutPage">
            <header>
                <h2>About Us:</h2>
                    <div>
                        <h3>Inspiration: </h3>
                        <p>Trying to find people to work with you on projects can be hard! Finding people to join your hackathon team can also be hard. That's why we created Dev Helpr!</p>
                        <h3>What does Dev Helpr do?</h3>
                        <p>Dev Helpr is a web app that allows developers to make posts about anything from the problems they may face in their own projects to a request for help on a side project. Dev Helpr allows users to make posts looking for help or to help and also allows other users to comment on posts. We also added GitHub integration so we can display contribute statistics.</p>    
                        <h3>How was it built?</h3>
                        <p>Since time was of the essence for this hackathon, we decided to use React and js to build the front end of our website as we wanted to try to choose a framework that wasn't too hard to pick up and we used Go and MariaDB to create our backend since none of us had ever used go and we thought it would be a good opportunity to start to learn.
                        Each one of us had different responsibilities for the project:
                        -- Russell worked on creating some of the react components, added routing, and worked on some of the CSS.
                        -- Sean worked on creating the database and API and did the majority of the work on our backend.
                        -- Jimmy worked on the login and home page UI, created some of the components, and also helped out with some of the backends.
                        As the project grew, we added several features and refactored a few times until we got to a decent spot with our codebase.
                        We deployed our app using nodejs and served it to a webserver to host it.</p>
                        <h3>Challenges:</h3>
                        <p>Learning a framework and language is no small task. Jimmy and Russell had to learn React to do the front end of the project and Sean took it upon himself to learn and use go for the backend of the project. Besides the learning curve of getting the hang of the frameworks and languages, an issue we ran into was fitting all the pieces together at the end (or as we like to call it the crunch stage of development). The backend of the project was no small undertaking and wasn't ready until just before the crunch. There were features we wanted to have but weren't able to add just due to time constraints.</p>
                        <h3>Proud moments:</h3>
                        <p>We all are proud of walking away from this hackathon with a new set of tools and knowledge under our belts. This is all our first hackathons so we are proud of being able to make a working version of anything. Another thing we are all proud of is the collaborative effort we all put into this project. Each one had a different role in the project and missing any one of us would have prevented us from being able to finish.</p>
                        <h3>Lessons learned:</h3>
                        <p>On top of the new languages we all learned this weekend, we all learned how to roadmap a project and meet deadlines. There were a few times during the day where we all had to talk about what we actually need compared to what we might want the project to do. Multiple times we had to scale back and readjust what our goal was and how we were going to get there. (we also learned to not like js)</p>
                        <h3>What's next?</h3>
                        <p>Hopefully, when we're all rested and get the chance, we would like to add more GitHub integration (show data about users, repos. etc.), add auto-moderation, analytics pages, and more. Our goal is to add features as we can but feel free to submit a pull request on GitHub, we would love all the help we can get!</p>
                        <h3>Get in touch:</h3>
                        <p>Check out our <a href="https://github.com/12thStreetStudios/OwlHacks2020">GitHub</a></p>
                    </div>
            </header>
        </div>
    );
}