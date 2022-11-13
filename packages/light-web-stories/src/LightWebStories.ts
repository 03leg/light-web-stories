import { LightWebStoriesOptions } from "./model/LightWebStoriesOptions";
import { StoryOptions } from "./model/StoryOptions";
import { Swiper, Navigation } from "swiper";
import { ImageStoryPreview } from "./ImageStoryPreview";
import { StoriesViewer } from "./stories-viewer/StoriesViewer";
import { MobileStoriesViewer } from "./stories-viewer/MobileStoriesViewer";

export class LightWebStories {
  private _storiesViewer: StoriesViewer;

  constructor(private _options: LightWebStoriesOptions) {
    // this._storiesViewer = new MobileStoriesViewer(document.body, this._options);
    this._storiesViewer = new StoriesViewer(document.body, this._options);
  }

  public initialize(): void {
    const container = this._options.container;

    const swiperContainer = this.getBaseLayout(this.getStorySlideElements());
    this.addNavigationButtons(swiperContainer);

    container.append(swiperContainer);

    Swiper.use([Navigation]);

    const swiperInstance = new Swiper(swiperContainer, {
      slidesPerView: 5,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  addNavigationButtons(swiperContainer: HTMLDivElement): void {
    // const newDiv0 = document.createElement("div");
    // newDiv0.classList.add("swiper-pagination");
    // swiperContainer.appendChild(newDiv0);

    const prevButton = document.createElement("div");
    prevButton.classList.add("swiper-button-prev");
    prevButton.classList.add("navigation-button");
    swiperContainer.appendChild(prevButton);

    const nextButton = document.createElement("div");
    nextButton.classList.add("swiper-button-next");
    nextButton.classList.add("navigation-button");
    nextButton.classList.add("navigation-next-button");
    swiperContainer.appendChild(nextButton);

    var svgPrev = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgPrev.classList.add("navigation-button-svg-content");
    svgPrev.setAttribute("height", "24px");
    svgPrev.setAttribute("width", "24px");

    svgPrev.innerHTML =
      '<path d="m15.707 4.293c.39.391.39 1.024 0 1.414l-6.293 6.293 6.293 6.293c.39.39.39 1.024 0 1.414s-1.024.39-1.414 0l-7-7c-.391-.39-.391-1.024 0-1.414l7-7c.39-.391 1.024-.391 1.414 0z"/>';
    prevButton.appendChild(svgPrev);

    var svgNext = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgNext.classList.add("navigation-button-svg-content");
    svgNext.setAttribute("height", "24px");
    svgNext.setAttribute("width", "24px");

    svgNext.innerHTML =
      '<path xmlns="http://www.w3.org/2000/svg" d="m15.707 4.293c.39.391.39 1.024 0 1.414l-6.293 6.293 6.293 6.293c.39.39.39 1.024 0 1.414s-1.024.39-1.414 0l-7-7c-.391-.39-.391-1.024 0-1.414l7-7c.39-.391 1.024-.391 1.414 0z"/>';
    nextButton.appendChild(svgNext);
  }

  getBaseLayout(cards: Array<HTMLDivElement>): HTMLDivElement {
    const container1 = document.createElement("div");
    container1.classList.add("swiper");

    const childContainer = document.createElement("div");
    childContainer.classList.add("swiper-wrapper");

    for (const card of cards) {
      card.classList.add("swiper-slide");
      childContainer.appendChild(card);
    }

    container1.appendChild(childContainer);

    return container1;
  }

  getStorySlideElements(): Array<HTMLDivElement> {
    const result = [];

    for (const item of this._options.items) {
      const storySlideInstance = new ImageStoryPreview(
        item,
        this.onShowStorySlide.bind(this)
      );
      result.push(storySlideInstance.element);
    }

    return result;
  }

  private onShowStorySlide(storySlide: ImageStoryPreview): void {
    this._storiesViewer.show(storySlide);
  }
}
