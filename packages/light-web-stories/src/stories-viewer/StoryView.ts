import { Story } from "../model/Story";
import { StoryOptions } from "../model/StoryOptions";
import { NavigationAreaType } from "../model/view/NavigationArea";
import { StoryViewOptions } from "../model/view/StoryViewOptions";
import { StoryProgressBar } from "./progress-bar/StoryProgressBar";
import { StoryViewHtmlHelper } from "./StoryViewHtmlHelper";

export class StoryView {
  private _element: HTMLDivElement | null = null;
  private _mapImages = new Map<number, HTMLImageElement>();
  protected _prevAreaElement: HTMLDivElement =
    StoryViewHtmlHelper.getNavigationArea(NavigationAreaType.Prev);
  protected _nextAreaElement: HTMLDivElement =
    StoryViewHtmlHelper.getNavigationArea(NavigationAreaType.Next);
  private _visibleImageIndex = 0;
  private _overlapElement: HTMLDivElement =
    StoryViewHtmlHelper.getOverlapElement();
  private _storyContentElement: HTMLDivElement =
    StoryViewHtmlHelper.getStoryContentElement();

  private _showPrevImageButtonElement =
    StoryViewHtmlHelper.getPrevImageButtonElement();
  private _showNextImageButtonElement =
    StoryViewHtmlHelper.getNextImageButtonElement();
  private _storyProgressBar: StoryProgressBar;

  public get element(): HTMLDivElement {
    if (this._element === null) {
      this._element = this.createElement();
    }
    return this._element;
  }

  private get storyItemsCount(): number {
    return this._options.storyOptions.stories.length;
  }

  public get storyOptions(): StoryOptions {
    return this._options.storyOptions;
  }

  constructor(private _options: StoryViewOptions) {
    this.showNextImage = this.showNextImage.bind(this);
    this.showPrevImage = this.showPrevImage.bind(this);
    this.changeStory = this.changeStory.bind(this);
    this.suspendProgress = this.suspendProgress.bind(this);
    this.resumeProgress = this.resumeProgress.bind(this);

    this._prevAreaElement.addEventListener("click", this.showPrevImage);
    this._nextAreaElement.addEventListener("click", this.showNextImage);

    //desktop
    this._prevAreaElement.addEventListener("mousedown", this.suspendProgress);
    this._nextAreaElement.addEventListener("mousedown", this.suspendProgress);
    this._prevAreaElement.addEventListener("mouseup", this.resumeProgress);
    this._nextAreaElement.addEventListener("mouseup", this.resumeProgress);

    this._showNextImageButtonElement.addEventListener(
      "click",
      this.showNextImage
    );
    this._showPrevImageButtonElement.addEventListener(
      "click",
      this.showPrevImage
    );

    this._overlapElement.addEventListener("click", this.changeStory);

    this._storyProgressBar = new StoryProgressBar({
      countImages: this._options.storyOptions.stories.length,
      nextItem: () => {
        this.showNextImage();
      },
    });
  }

  protected suspendProgress(): void {
    this._storyProgressBar.suspend();
  }

  protected resumeProgress(): void {
    this._storyProgressBar.resume();
  }

  private changeStory(): void {
    this._options.onChangeStory(this);
  }

  show() {
    this.showNavigationAreas();
    this.showNavigationImageButtons();
    this.showStoryProgressBar();

    this._overlapElement.remove();
  }

  hide() {
    this.removeNavigationAreas();
    this.removeNavigationStoryButtons();
    this.removeStoryProgressBar();

    this._storyContentElement.appendChild(this._overlapElement);
  }

  private showStoryProgressBar(): void {
    this.element.appendChild(this._storyProgressBar.element);
    this.updateProgressBar();
  }

  private removeStoryProgressBar(): void {
    this._storyProgressBar.stopProgress();
    this._storyProgressBar.element.remove();
  }

  protected showNavigationImageButtons(): void {
    this.element.appendChild(this._showNextImageButtonElement);
    this.element.appendChild(this._showPrevImageButtonElement);

    this.updateNavigationButtonsState();
  }

  protected updateNavigationButtonsState(): void {
    this._showPrevImageButtonElement.classList.remove(
      "story-view__navigate-story-button_disabled"
    );
    this._showNextImageButtonElement.classList.remove(
      "story-view__navigate-story-button_disabled"
    );

    if (
      this._options.isLastStory === true &&
      this._visibleImageIndex + 1 >= this.storyItemsCount
    ) {
      this._showNextImageButtonElement.classList.add(
        "story-view__navigate-story-button_disabled"
      );
    }

    if (this._options.isFirstStory === true && this._visibleImageIndex === 0) {
      this._showPrevImageButtonElement.classList.add(
        "story-view__navigate-story-button_disabled"
      );
    }
  }

  protected removeNavigationStoryButtons(): void {
    this._showNextImageButtonElement.remove();
    this._showPrevImageButtonElement.remove();
  }

  showNavigationAreas() {
    this.element.appendChild(this._prevAreaElement);
    this.element.appendChild(this._nextAreaElement);
  }

  removeNavigationAreas(): void {
    this._prevAreaElement.remove();
    this._nextAreaElement.remove();
  }

  private getImageElementFromMapByIndex(index: number): HTMLImageElement {
    const result = this._mapImages.get(index);

    if (result === undefined) {
      throw new Error("InvalidOperationError");
    }

    return result;
  }

  showNextImage() {
    if (this._visibleImageIndex + 1 >= this.storyItemsCount) {
      this._options.onNextStory();
      this.updateNavigationButtonsState();
      return;
    }

    this.getImageElementFromMapByIndex(this._visibleImageIndex).classList.add(
      "story-view__image_hidden"
    );

    this._visibleImageIndex += 1;

    this.getImageElementFromMapByIndex(
      this._visibleImageIndex
    ).classList.remove("story-view__image_hidden");

    this.updateNavigationButtonsState();
    this.updateProgressBar();
  }

  showPrevImage() {
    if (this._visibleImageIndex === 0) {
      this._options.onPrevStory();
      this.updateNavigationButtonsState();
      return;
    }

    this.getImageElementFromMapByIndex(this._visibleImageIndex).classList.add(
      "story-view__image_hidden"
    );

    this._visibleImageIndex -= 1;

    this.getImageElementFromMapByIndex(
      this._visibleImageIndex
    ).classList.remove("story-view__image_hidden");

    this.updateNavigationButtonsState();
    this.updateProgressBar();
  }

  updateProgressBar() {
    this._storyProgressBar.updateVisibleProgresBarItem(this._visibleImageIndex);
  }

  private createElement(): HTMLDivElement {
    const result = document.createElement("div");
    result.classList.add("story-view");

    let index = 0;

    for (const story of this._options.storyOptions.stories) {
      const img = this.getStoryImage(story, index);
      this._storyContentElement.appendChild(img);

      this._mapImages.set(index, img);
      index += 1;
    }

    this._storyContentElement.appendChild(this._overlapElement);

    result.appendChild(this._storyContentElement);

    return result;
  }

  private getStoryImage(story: Story, index: number): HTMLImageElement {
    const image = document.createElement("img");
    image.classList.add("story-view__image");
    image.classList.add("no-user-select");

    if (index !== this._visibleImageIndex) {
      image.classList.add("story-view__image_hidden");
    }

    image.src = story.image;

    return image;
  }

  public destroy(): void {
    this._prevAreaElement.removeEventListener("click", this.showPrevImage);
    this._nextAreaElement.removeEventListener("click", this.showNextImage);

    //desktop
    this._prevAreaElement.removeEventListener(
      "mousedown",
      this.suspendProgress
    );
    this._nextAreaElement.removeEventListener(
      "mousedown",
      this.suspendProgress
    );
    this._prevAreaElement.removeEventListener("mouseup", this.resumeProgress);
    this._nextAreaElement.removeEventListener("mouseup", this.resumeProgress);

    this._showNextImageButtonElement.removeEventListener(
      "click",
      this.showNextImage
    );
    this._showPrevImageButtonElement.removeEventListener(
      "click",
      this.showPrevImage
    );

    this._overlapElement.removeEventListener("click", this.changeStory);
    this._storyProgressBar.destroy();
  }
}
