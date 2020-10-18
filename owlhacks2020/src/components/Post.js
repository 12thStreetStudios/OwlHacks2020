import React from 'react';
import '../style/Post.css'

class Post extends React.Component {
    constructor(props) {
      super(props);
      const c = (props.comments) ? (props.comments.map((c,i) =><li className='fakelist' key={i}>{c}</li>)) : ("");

      this.state = {
        // Comments should be a table like {text: "comment", name: "author"}
        comments: c,
        expanded: "none"
      }
    }

    onClick = () => {
      if (this.state.comments.length > 0 && this.state.expanded === 'none'){
        this.setState({...this.state, expanded: 'expanded'});
      } else {
        this.setState({...this.state, expanded: 'none'})
      }
    }

    render() {
        return (
          <div>
          <div className="post" onClick={this.onClick}>
            <h3>{this.props.title}</h3>
            {/* TODO: Add organization href link */}
            <p className="organization"><a>{this.props.organization}</a></p>
            {/* TODO: Add user href link*/}
            <p className="poster">Posted by <a>{this.props.poster}</a></p>
          </div>
          <ul className={this.state.expanded}>
            {this.state.comments}
          </ul>
        </div>
        );
    }
}

// Constructs a comment
export function Comment(text, name) {
  return <div className="comment"><pre>{text}</pre><div className="poster">{name}</div></div>;
}

export default Post;
