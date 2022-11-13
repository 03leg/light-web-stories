import { Story } from "../model/Story";
import { StoryOptions } from "../model/StoryOptions";
import { NavigationAreaType } from "../model/view/NavigationArea";
import { StoryViewOptions } from "../model/view/StoryViewOptions";
import { StoryViewHtmlHelper } from "./StoryViewHtmlHelper";

export class StoryView {
  private _element: HTMLDivElement | null = null;
  private _mapImages = new Map<number, HTMLImageElement>();
  private _prevAreaElement: HTMLDivElement =
    StoryViewHtmlHelper.getNavigationArea(NavigationAreaType.Prev);
  private _nextAreaElement: HTMLDivElement =
    StoryViewHtmlHelper.getNavigationArea(NavigationAreaType.Next);
  private _visibleImageIndex = 0;
  private _overlapElement: HTMLDivElement =
    StoryViewHtmlHelper.getOverlapElement();
  private _storyContentElement: HTMLDivElement =
    StoryViewHtmlHelper.getStoryContentElement();

  public get element(): HTMLDivElement {
    if (this._element === null) {
      this._element = this.createElement();
    }
    return this._element;
  }

  private get storyItemsCount(): number {
    return this._options.storyOptions.stories.length;
  }

  constructor(private _options: StoryViewOptions) {
    this.showNextImage = this.showNextImage.bind(this);
    this.showPrevImage = this.showPrevImage.bind(this);

    this._prevAreaElement.addEventListener("click", this.showPrevImage);
    this._nextAreaElement.addEventListener("click", this.showNextImage);
  }

  show() {
    this.showNavigationAreas();
    this._overlapElement.remove();
  }

  hide() {
    this.removeNavigationAreas();
    this._storyContentElement.appendChild(this._overlapElement);
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
      return;
    }

    this.getImageElementFromMapByIndex(this._visibleImageIndex).classList.add(
      "story-view__image_hidden"
    );

    this._visibleImageIndex += 1;

    this.getImageElementFromMapByIndex(
      this._visibleImageIndex
    ).classList.remove("story-view__image_hidden");
  }

  showPrevImage() {
    if (this._visibleImageIndex === 0) {
      this._options.onPrevStory();
      return;
    }

    this.getImageElementFromMapByIndex(this._visibleImageIndex).classList.add(
      "story-view__image_hidden"
    );

    this._visibleImageIndex -= 1;

    this.getImageElementFromMapByIndex(
      this._visibleImageIndex
    ).classList.remove("story-view__image_hidden");
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

    if (index !== this._visibleImageIndex) {
      image.classList.add("story-view__image_hidden");
    }

    image.src = story.image;

    return image;
  }

  public destroy(): void {
    this._prevAreaElement.removeEventListener("click", this.showPrevImage);
    this._nextAreaElement.removeEventListener("click", this.showNextImage);
  }
}
