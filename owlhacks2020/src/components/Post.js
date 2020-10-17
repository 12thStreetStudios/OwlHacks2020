import React from 'react';
import '../style/Post.css'

class Post extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        // Comments should be a table like {text: "comment", name: "author"}
        comments: props.comments || [],
        shown: []
      }
    }

    expandComments() {
      // TODO: try to fetch newest comments before expanding
      var allComments = [];
      for (var i=0; i<this.state.comments.length; i++) {
        allComments.push(<p className="comment">{this.state.comments.text}<h4 id="poster">{this.state.comments.name}</h4></p>);
      }
      this.setState({shown: allComments});
    }

    hideComments() {
      this.setState({shown: []});
    }

    handleClick = (e) => {
        if (this.state.shown === []) {
          this.expandComments();
        } else {
          this.hideComments();
        }
    }

    render() {
        return (
          <div onClick={this.handleClick} className="post" >
            <h3>{this.props.title}</h3>
            {/* TODO: Add organization href link */}
            <p className="organization"><a>{this.props.organization}</a></p>
            {/* TODO: Add user href link*/}
            <p className="poster">Posted by <a>{this.props.poster}</a></p>
            {this.state.shown}
          </div>
        );
    }
}

export default Post;
