import { StoriesViewer } from "./StoriesViewer";
import { Swiper, Navigation } from "swiper";
import { ImageStoryPreview } from "../ImageStoryPreview";

export class MobileStoriesViewer extends StoriesViewer {
  private _swiperInstance!: Swiper;
  public override show(storySlide: ImageStoryPreview): void {
    super.show(storySlide);

    this._storiesContainerElement.classList.add("swiper");
    this._storiesContainerElement.classList.remove("stories-viewer__container");

    this._swiperInstance = new Swiper(this._storiesContainerElement, {
      initialSlide: this._visibleStoryIndex,
      on: {
        init: () => {
          console.log("swiper initialized");
        },
        realIndexChange: (sender) => {
          this.showStory(sender.activeIndex, sender.previousIndex);
        },
      },
    });
  }

  protected showStory(activeIndex: number, previousIndex: number): void {
    this._stories[previousIndex].hide();

    this._visibleStoryIndex = activeIndex;

    this._stories[this._visibleStoryIndex].show();
  }

  protected showNextStory(): boolean {
    if (super.showNextStory()) {
      this._swiperInstance.slideNext();
      return true;
    }

    return false;
  }

  protected showPrevStory(): boolean {
    console.log("show prev 1");
    if (super.showPrevStory()) {
      console.log("show prev 2");

      this._swiperInstance.slidePrev();
      return true;
    }

    return false;
  }

  protected override addStoryElements(): void {
    const swiperWrapper = document.createElement("div");
    swiperWrapper.classList.add("swiper-wrapper");

    this._storiesContainerElement.appendChild(swiperWrapper);

    this._stories.forEach((story) => {
      const swiperSlideElement = document.createElement("div");
      swiperSlideElement.classList.add("swiper-slide");

      swiperSlideElement.appendChild(story.element);

      swiperWrapper.appendChild(swiperSlideElement);
    });
  }

  protected override updateViewportPosition(): void {}

  protected override createCloseButton(): HTMLDivElement {
    const btn = super.createCloseButton();
    btn.classList.add("stories-viewer__close-button_mobile");

    return btn;
  }
}
