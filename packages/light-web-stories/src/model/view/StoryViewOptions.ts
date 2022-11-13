import { StoryOptions } from "../StoryOptions";

export interface StoryViewOptions {
  storyOptions: StoryOptions;
  onNextStory: () => void;
  onPrevStory: () => void;
}
