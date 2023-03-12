import { LightWebStoriesOptions } from "../model/LightWebStoriesOptions";
import { ImageStoryPreview } from "../ImageStoryPreview";
import { StoryView } from "./StoryView";
import { StoryOptions } from "../model/StoryOptions";

export class StoriesViewer {
  protected _storiesContainerElement!: HTMLDivElement;
  private _storiesViewerElement!: HTMLDivElement;
  private _closeButton!: HTMLDivElement;
  protected _stories!: StoryView[];

  protected _visibleStoryIndex: number = 0;

  public constructor(
    private _container: HTMLElement,
    protected _generalOptions: LightWebStoriesOptions
  ) {
    this.onCloseStoriesViewer = this.onCloseStoriesViewer.bind(this);
  }

  private createElements(): void {
    this._stories = this.getStories();

    const rootElements = this.createMainElements();

    this._storiesContainerElement = rootElements.storiesContainerElement;
    this._storiesViewerElement = rootElements.storiesViewerElement;
    this._closeButton = rootElements.closeButton;

    this._closeButton.addEventListener("click", this.onCloseStoriesViewer);
  }

  private onCloseStoriesViewer(): void {
    this.close();
  }

  protected addStoryElements(): void {
    this._stories.forEach((story) => {
      this._storiesContainerElement.appendChild(story.element);
    });
  }

  private createMainElements(): {
    storiesViewerElement: HTMLDivElement;
    storiesContainerElement: HTMLDivElement;
    closeButton: HTMLDivElement;
  } {
    const storiesViewerElement = document.createElement("div");
    storiesViewerElement.classList.add("stories-viewer");

    const backgroundElement = document.createElement("div");
    backgroundElement.classList.add("stories-viewer__background");

    const storiesContainerElement = document.createElement("div");
    storiesContainerElement.classList.add("stories-viewer__container");

    const closeButton = this.createCloseButton();

    storiesViewerElement.appendChild(closeButton);
    storiesViewerElement.appendChild(backgroundElement);
    storiesViewerElement.appendChild(storiesContainerElement);

    return { storiesViewerElement, storiesContainerElement, closeButton };
  }

  protected createCloseButton(): HTMLDivElement {
    const element = document.createElement("div");
    element.classList.add("stories-viewer__close-button");

    var closeSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    closeSvg.setAttribute("height", "100%");
    closeSvg.setAttribute("width", "100%");
    closeSvg.setAttribute("viewBox", "0 0 12 12");

    closeSvg.innerHTML =
      '<polygon xmlns="http://www.w3.org/2000/svg" points="7.6 6 12 10.4 10.4 12 6 7.6 1.6 12 0 10.4 4.4 6 0 1.6 1.6 0 6 4.4 10.4 0 12 1.6"/>';
    element.appendChild(closeSvg);

    return element;
  }

  private setVisibleStoryIndex(storySlide: ImageStoryPreview): void {
    const userStory = this._stories.find(
      (p) => p.storyOptions === storySlide.options
    );

    if (userStory === undefined) {
      throw new Error("InvalidOperationError");
    }

    this._visibleStoryIndex = this._stories.indexOf(userStory);
  }

  public show(storySlide: ImageStoryPreview) {
    this.createElements();

    this.addStoryElements();
    this.setVisibleStoryIndex(storySlide);

    this._stories[this._visibleStoryIndex].show();

    this._container.appendChild(this._storiesViewerElement);

    this.updateViewportPosition();
  }

  public close(): void {
    this._storiesViewerElement.remove();
    this.destroy();
  }

  private getStories(): Array<StoryView> {
    const result = [];

    let index = 0;

    for (const storyOptions of this._generalOptions.items) {
      const instance = this.getStoryView(storyOptions, index);
      result.push(instance);
      index++;
    }

    return result;
  }

  protected getStoryView(storyOptions: StoryOptions, index: number): StoryView {
    return new StoryView({
      onNextStory: this.showNextStory.bind(this),
      onPrevStory: this.showPrevStory.bind(this),
      storyOptions: storyOptions,
      isFirstStory: index === 0,
      isLastStory: index + 1 === this._generalOptions.items.length,
      onChangeStory: this.changeStory.bind(this),
    });
  }

  protected changeStory(storyView: StoryView): void {
    this._stories[this._visibleStoryIndex].hide();

    this._visibleStoryIndex = this._stories.indexOf(storyView);

    this._stories[this._visibleStoryIndex].show();

    this.updateViewportPosition();
  }

  protected showNextStory(): boolean {
    if (this._visibleStoryIndex + 1 >= this._stories.length) {
      console.warn("There are not new stories.");
      return false;
    }

    this._stories[this._visibleStoryIndex].hide();

    this._visibleStoryIndex += 1;

    this._stories[this._visibleStoryIndex].show();

    this.updateViewportPosition();

    return true;
  }

  protected showPrevStory(): boolean {
    if (this._visibleStoryIndex === 0) {
      console.warn("It's first story.");
      return false;
    }

    this._stories[this._visibleStoryIndex].hide();

    this._visibleStoryIndex -= 1;

    this._stories[this._visibleStoryIndex].show();

    this.updateViewportPosition();

    return true;
  }

  protected updateViewportPosition(): void {
    const offset =
      203.125 + this._stories[this._visibleStoryIndex].element.offsetLeft;

    this._storiesContainerElement!.setAttribute(
      "style",
      `right: calc(-50% + ${offset}px);`
    );
  }

  private destroy(): void {
    this._closeButton.removeEventListener("click", this.onCloseStoriesViewer);
    this._stories.forEach((p) => p.destroy());
  }
}
