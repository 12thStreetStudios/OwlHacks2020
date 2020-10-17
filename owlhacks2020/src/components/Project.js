import React from 'react';
import './Project.css'

class Project extends React.Component {
    render () {
        return (
            <div className="project">
                <h3>{this.props.pname}</h3>
                <p id="members">Team Members: {this.props.members}</p>
                <p id="creation_date">Created: {this.props.creation_date}</p>
                <p id="todo_list">TODO: {this.props.todo_list}</p>
            </div>
        )
    }
}
export default Project;