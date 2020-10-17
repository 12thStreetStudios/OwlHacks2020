import React from 'react';
import Post from './Post.js';
import '../style/wall.css'
import '../style/Post.css'

/* Pink Floyd - The Wall */
class Wall extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      posts: props.posts || []
    }
  }

  // render override
  render(){
    const renderPosts = this.state.posts.map(item => (<div className="post">{item}</div>));
    return (
      <div className="wall">
        {renderPosts}
      </div>
    );
  }
}

export default Wall;
