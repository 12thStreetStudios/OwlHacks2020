import React from 'react';
import '../style/Post.css'

class Post extends React.Component {
    constructor(props) {
      super(props);
      const c = (props.comments) ? (props.comments.map((c,i) =>
        <li key={i}>
          {c}
        </li>
      )) : ("");

      this.state = {
        // Comments should be a table like {text: "comment", name: "author"}
        comments: c,
        expanded: false
      }
    }

    render() {
        return (
          <div>
          <div className="post" >
            <h3>{this.props.title}</h3>
            {/* TODO: Add organization href link */}
            <p className="organization"><a>{this.props.organization}</a></p>
            {/* TODO: Add user href link*/}
            <p className="poster">Posted by <a>{this.props.poster}</a></p>
          </div>
          {this.state.shown}
        </div>
        );
    }
}

// Constructs a comment
export function Comment(text, name) {
  return <div className="comment"><p>{text}</p><h2 id="poster">{name}</h2></div>;
}

export default Post;
