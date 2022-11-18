import { LightWebStoriesOptions } from "../model/LightWebStoriesOptions";
import { ImageStoryPreview } from "../ImageStoryPreview";
import { StoryView } from "./StoryView";

export class StoriesViewer {
  private _isInitialized = false;
  protected _storiesContainerElement: HTMLDivElement;
  private _storiesViewerElement: HTMLDivElement;
  protected _stories: StoryView[];
  private _visibleStoryIndex: number = 0;

  public constructor(
    private _container: HTMLElement,
    private _generalOptions: LightWebStoriesOptions
  ) {
    this._stories = this.getStories();

    const rootElements = StoriesViewer.createMainElements();

    this._storiesContainerElement = rootElements.storiesContainerElement;
    this._storiesViewerElement = rootElements.storiesViewerElement;
  }

  protected initialize(): void {
    this._container.appendChild(this._storiesViewerElement);

    this.addStoryElements();

    this._stories[this._visibleStoryIndex].show();

    this.updateViewportPosition();
  }

  protected addStoryElements(): void {
    this._stories.forEach((story) => {
      this._storiesContainerElement.appendChild(story.element);
    });
  }

  private static createMainElements(): {
    storiesViewerElement: HTMLDivElement;
    storiesContainerElement: HTMLDivElement;
  } {
    const storiesViewerElement = document.createElement("div");
    storiesViewerElement.classList.add("stories-viewer");

    const backgroundElement = document.createElement("div");
    backgroundElement.classList.add("stories-viewer__background");

    const storiesContainerElement = document.createElement("div");
    storiesContainerElement.classList.add("stories-viewer__container");

    storiesViewerElement.appendChild(backgroundElement);
    storiesViewerElement.appendChild(storiesContainerElement);

    return { storiesViewerElement, storiesContainerElement };
  }

  public show(storySlide: ImageStoryPreview) {
    if (!this._isInitialized) {
      this.initialize();
    }
  }

  private getStories(): Array<StoryView> {
    const result = [];

    let index = 0;

    for (const storyOptions of this._generalOptions.items) {
      const instance = new StoryView({
        onNextStory: this.showNextStory.bind(this),
        onPrevStory: this.showPrevStory.bind(this),
        storyOptions: storyOptions,
        isFirstStory: index === 0,
        isLastStory: index + 1 === this._generalOptions.items.length,
        onChangeStory: this.changeStory.bind(this),
      });
      result.push(instance);
      index++;
    }

    return result;
  }

  private changeStory(storyView: StoryView): void {
    this._stories[this._visibleStoryIndex].hide();

    this._visibleStoryIndex = this._stories.indexOf(storyView);

    this._stories[this._visibleStoryIndex].show();
    
    this.updateViewportPosition();
  }

  private showNextStory(): void {
    if (this._visibleStoryIndex + 1 >= this._stories.length) {
      console.warn("There are not new stories.");
      return;
    }

    this._stories[this._visibleStoryIndex].hide();

    this._visibleStoryIndex += 1;

    this._stories[this._visibleStoryIndex].show();

    this.updateViewportPosition();
  }

  private showPrevStory(): void {
    if (this._visibleStoryIndex === 0) {
      console.warn("It's first story.");
      return;
    }

    this._stories[this._visibleStoryIndex].hide();

    this._visibleStoryIndex -= 1;

    this._stories[this._visibleStoryIndex].show();

    this.updateViewportPosition();
  }

  protected updateViewportPosition(): void {
    const offset =
      203.125 + this._stories[this._visibleStoryIndex].element.offsetLeft;

    this._storiesContainerElement!.setAttribute(
      "style",
      `right: calc(-50% + ${offset}px);`
    );
  }
}
