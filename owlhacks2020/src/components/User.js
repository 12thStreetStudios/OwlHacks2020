import React, { Component } from 'react';
import './User.css';

export default class User extends Component {

    state = {
        username:'',
        email:'',
        acc_creation_date: '',
        prev_comments: [],
        orgs: [],
    }
    constructor(username, email, acc_creation_date) {
        super();
        this.username = username;
        this.email = email;
        this.acc_creation_date = acc_creation_date;
    }
// sets the username
    setUsername = (username) => {
        this.setState(state => ({
            username: username,
            email: this.state.email,
            acc_creation_date: this.state.acc_creation_date,
            prev_comments: this.state.prev_comments,
            orgs: this.state.orgs
        }))
    }

// sets the email
    setEmail = (email) => {
        this.setState(state => ({
            username: this.state.username,
            email: email,
            acc_creation_date: this.state.acc_creation_date,
            prev_comments: this.state.prev_comments,
            orgs: this.state.orgs
        }))
    }
    addComment = (comment) => {
        this.setState(state => ({
            username: this.state.username,
            email: this.state.email,
            acc_creation_date: this.state.acc_creation_date,
            prev_comments: [...state.prev_comments,comment],
            orgs: this.state.orgs
        }))
    }
    addOrganization = (org) => {
        this.setState(state => ({
            username: this.state.username,
            email: this.state.email,
            acc_creation_date: this.state.acc_creation_date,
            prev_comments: this.state.prev_comments,
            orgs: [...state.orgs, org]
        }))
    }

    render() {
        return(
            <div className="wrapper">
                <div className='username'>
                    username: {this.state.username}
                </div>
                <div className='email'>
                    email: {this.state.email}
                </div>
                <div className='acc_creation'>
                    Account created: {this.state.acc_creation_date}
                </div>
                <div className='num_comments'>
                    Comments: {this.state.prev_comments.length}
                </div>
            </div>
        );
    }
}