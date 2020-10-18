import React from 'react';
import {Redirect} from 'react-router-dom';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      post: {
        title: "",
        desc: ""
      }
    };
  }

  // On input value change, event
  onValueChange = (e) => {
    React.setState({
      ...this.state,
      post: {
        ...this.state.post,
        [e.target.name]:e.target.value
      }
    });
  }

  submit = (e) => {
    //submit form
    return (<Redirect to="/"/>);
  }

  render() {
    return (
      <div className="post-form">
        <h1>Make A New Post</h1>
        <form onSubmit={this.submit} noValidate>
          <div className="form-control">
            <label>Title</label>
            <input name="title" required type="text" value={this.state.post.title} onChange={this.onValueChange} placeholder="Enter you username" />
          </div>
          <div className="form-control">
            <label>Description</label>
            <textarea name="description" type="text" required placeholder="Short Description" value={this.state.post.desc} onChange={this.onValueChange} />
          </div>
          <div className="form-control">
            <button type="submit">Submit</button>
          </div>
          <div className="form-control">
            <button type="cancel">Cancel</button>
          </div>
        </form>
        </div>
    );
  }
}

export default NewPost;
