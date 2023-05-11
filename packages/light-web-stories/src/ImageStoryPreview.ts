import { StoryOptions } from "./model/StoryOptions";
import { StoryPreview } from "./model/StoryPreview";

export class ImageStoryPreview implements StoryPreview {
  private _element: HTMLDivElement | null = null;
  private _storyButton: HTMLButtonElement | null = null;

  public get element(): HTMLDivElement {
    if (this._element === null) {
      this._element = this.createElement();
      this._storyButton!.addEventListener("click", this.onStorySlideClick);
    }
    return this._element;
  }

  constructor(
    public readonly options: StoryOptions,
    private _onShowStorySlide: (storySlide: ImageStoryPreview) => void
  ) {
    this.onStorySlideClick = this.onStorySlideClick.bind(this);
  }

  private onStorySlideClick(): void {
    this._onShowStorySlide(this);
  }

  private createElement(): HTMLDivElement {
    const storyCardContainer = document.createElement("div");
    const storyCard = document.createElement("div");
    const storyButton = (this._storyButton = document.createElement("button"));

    storyButton.classList.add("story-button");

    const storyImage = document.createElement("img");

    storyImage.classList.add("story-image");
    storyImage.classList.add("no-user-select");

    storyImage.setAttribute("src", this.options.slideImage);

    storyButton.append(storyImage);
    storyCard.appendChild(storyButton);
    storyCardContainer.appendChild(storyCard);

    return storyCardContainer;
  }

  public destroy(): void {
    this._storyButton!.removeEventListener("click", this.onStorySlideClick);
  }
}
