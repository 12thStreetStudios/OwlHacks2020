import React from 'react';
import '../style/Post.css'

class Post extends React.Component {
    constructor(props) {
      super(props);
      const c = (props.comments) ? (props.comments.map((c,i) =><div className='fakelist' key={i}>{c}<br/></div>)) : ("");

      this.state = {
        // Comments should be a table like {text: "comment", name: "author"}
        comments: c,
        expanded: "none",
        id: props.id || 0
      }
    }

    onClick = () => {
      if (this.state.expanded === 'none'){
        this.setState({...this.state, expanded: 'expanded'});
      } else {
        this.setState({...this.state, expanded: 'none'})
      }
    }

    render() {
        return (
          <div className="flexbox">
            <div className="post" onClick={this.onClick}>
            <h3>{this.props.title}</h3>
            <div>
              {/* TODO: Add organization href link */}
              <p className="organization"><a>{this.props.organization}</a></p>
              {/* TODO: Add user href link*/}
              <p className="poster">Posted by: <a>{this.props.poster}</a></p>
              <p className="commentCount">Comments: {this.state.comments.length}</p>
            </div>
          </div>
          <div className="comment-block">
            <div key={this.props.poster + this.state.id} className={this.state.expanded}>
              <ul>
                {this.state.comments}
              </ul>
            </div>
            <div className="postbutton" onClick={this.onClick}></div>
            <div>
              <div className={this.state.expanded}>
                <form action="">
                  <p className="words">Enter Comment Below: </p>
                  <input className="submitbutton" type="submit" name="Comment"/>
                  <textarea className="post-form" name="comment"></textarea>
                </form>
              </div>
            </div>
          </div>
          </div>
        );
    }
}

// Constructs a comment
export function Comment(text, name) {
  return <div className="comment">{text}<div className="poster">By: {name}</div></div>;
}

export default Post;
