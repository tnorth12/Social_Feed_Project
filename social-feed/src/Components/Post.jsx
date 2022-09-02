
import React from 'react';
import './Post.css'
import Buttons from './Buttons';

const Post = (props) => {
    return ( 
        <div>
            <p id="name">{props.postentry.name}</p>            
            <p id="comment">{props.postentry.comment}</p>
            {/* <p id='likeButton'>{props.likeButton}</p> */}
            <Buttons />            
            
            
        </div>
     );
}
 
export default Post;