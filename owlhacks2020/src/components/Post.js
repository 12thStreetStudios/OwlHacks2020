import React from 'react';

class Post extends React.Component {
    render() {
        return (
          <div className="post">
            <h3>{this.props.title}</h3>
            {/* TODO: Add organization href link */}
            <p id="organization"><a>{this.props.organization}</a></p>
            {/* TODO: Add user href link*/}
            <p id="poster">Posted by <a>{this.props.poster}</a></p>
          </div>
        );
    }
}

export default Post;