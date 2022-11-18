import { StoryView } from "../../stories-viewer/StoryView";
import { StoryOptions } from "../StoryOptions";

export interface StoryViewOptions {
  storyOptions: StoryOptions;

  isFirstStory: boolean;
  isLastStory: boolean;

  onNextStory: () => void;
  onPrevStory: () => void;

  onChangeStory: (storyView: StoryView) => void;
}
