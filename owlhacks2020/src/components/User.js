import React from 'react'
import './User.css'

class User extends React.Component {
    render() {
        return (
            <div className="user">
                <h2 id ="username">user: {this.props.username}</h2>
                <ul>
                    <p id="acc_creation_date">Account created: {this.props.acc_creation_date}</p>
                    <p id="total_comments">Comments: {this.props.num_comments}</p>
                    <p id="GHProfile">GitHub: {this.props.ghp_url}</p>
                </ul>
            </div>
        );
    }
}

export default User;