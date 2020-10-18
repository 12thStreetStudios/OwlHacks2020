import React from 'react';
import '../style/Organizations.css'

class Organizations extends React.Component {
    render () {
        return (
            <div className="Organization">
                <h3>{this.props.pname}</h3>
                <p className="members">Team Members: {this.props.members}</p>
                <p className="creation_date">Created: {this.props.creation_date}</p>
                <p className="todo_list">TODO: {this.props.todo_list}</p>
            </div>
        )
    }
}
export default Organizations;