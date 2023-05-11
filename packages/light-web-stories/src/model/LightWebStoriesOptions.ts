import { StoryOptions } from "./StoryOptions";

export interface LightWebStoriesOptions {
  items: Array<StoryOptions>;
  container: HTMLElement;
  previewMode: PreviewMode;
  slidesPerView : number | 'auto';
  showPreviewNavButtons: boolean;
}

export enum PreviewMode {
  Image,
  InstagramStory,
}
