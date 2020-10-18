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
    // Something about list stability
    const listPosts = this.state.posts.map((p, i) =>
      <li key={i}>
        {p}
      </li>
     );
    return (
      <div className="wall">
        {listPosts}
      </div>
    );
  }
}

export default Wall;
