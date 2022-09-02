import './DisplayPosts.css'
import Post from './Post';

const DisplayPosts = (props) => {
  return (
    <div>
      {props.displayPosts.map((post, index) => {
        return (
          <Post postentry= {post}/>
          // <div key={index}>
          //   <div className="name">
          //     <p id="name">{post.name + " says:"}</p>         //Using Post component instead
          //   </div>
          //   <p id="comment">{'"' + post.comment + '"'}</p>
          //   <post />
          // </div>
        );                     //Only needed <Buttons /> added
      })}
    </div>
  );
};

export default DisplayPosts;