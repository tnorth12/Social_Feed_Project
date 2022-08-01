import React, { useState } from "react";
import './Post';

import { ReactComponent as Hand } from "./hand.svg";
// import Post from "./Post";
// import "./LikeButton.css"

const LikeButton = () => {
  const [liked, setLiked] = useState(null);
  const [clicked, setClicked] = useState(false);

  return (
    <button
      onClick={() => {
        setLiked(!liked);
        setClicked(true);
      }}
      onAnimationEnd={() => setClicked(false)}
      className={("like-button-wrapper", {
        liked,
        clicked,
      })}
    >
      <div className="like-button">
        <Hand />
        <span>Like</span>
        <span className={("suffix", { liked })}>d</span>
      </div>
    </button>
  );
};

export default LikeButton;