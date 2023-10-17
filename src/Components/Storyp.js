import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { likeStory } from "./StoryCard";
import Story from "./Story";

function Storyp() {
  const stories = useSelector((state) => state.stories);
  const dispatch = useDispatch();
  
  return (
    <div className="flex flex-wrap">
      
      {stories.map((story) => (
        <Story key={story.id} img={story.img} story={story} onLike={() => dispatch(likeStory(story.id))} />
      ))}
    </div>
  );
}

export default Storyp; 
