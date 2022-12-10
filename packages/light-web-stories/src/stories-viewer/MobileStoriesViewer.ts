import { StoriesViewer } from "./StoriesViewer";
import { Swiper, Navigation } from "swiper";
import { ImageStoryPreview } from "../ImageStoryPreview";

export class MobileStoriesViewer extends StoriesViewer {
  public override show(storySlide: ImageStoryPreview): void {
    super.show(storySlide);

    this._storiesContainerElement.classList.add("swiper");
    this._storiesContainerElement.classList.remove("stories-viewer__container");

    const swiperInstance = new Swiper(this._storiesContainerElement, {});
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
}
