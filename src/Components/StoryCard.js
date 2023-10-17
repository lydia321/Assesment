import { createSlice } from "@reduxjs/toolkit";
import data from "../MockData.json";

const StoryCard = createSlice({
  name: "stories",
  initialState: data,
  reducers: {
    likeStory: (state, action) => {
      const story = state.find((story) => story.id === action.payload);
      if (story) {
        story.likes += 1;
      }
    },
  },
});

export const { likeStory } = StoryCard.actions;

export default StoryCard.reducer;
