import React, { useState } from "react";
import "./App.css";
import CreatePost from "./Components/CreatePost";
import "./Components/DisplayPosts";
import NavBar from "./Components/NavBar";
import DisplayPosts from "./Components/DisplayPosts";



function App() {
  const [posts, setPosts] = useState([
    { name: "Ron Burgundy", comment: "The Human Torch was denied a bank loan!" },
  ]);
  function addNewEntry(post) {
    let tempPosts = [...posts, post];
    setPosts(tempPosts);
  }

  return (
    <div className="container-fluid">
      <NavBar className="navbar" />
      <div className="borders">
        <CreatePost addNewEntry={addNewEntry} />
        <DisplayPosts displayPosts={posts} />
      </div>
    </div>
  );
}

export default App;