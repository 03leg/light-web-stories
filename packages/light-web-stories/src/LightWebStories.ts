import {
  LightWebStoriesOptions,
  PreviewMode,
} from "./model/LightWebStoriesOptions";
import { StoryOptions } from "./model/StoryOptions";
import { Swiper, Navigation } from "swiper";
import { ImageStoryPreview } from "./ImageStoryPreview";
import { StoriesViewer } from "./stories-viewer/StoriesViewer";
import { MobileStoriesViewer } from "./stories-viewer/MobileStoriesViewer";
import { InstagramStoryPreview } from "./InstagramStoryPreview";
import { StoryPreview } from "./model/StoryPreview";

export class LightWebStories {
  private _storiesViewer: StoriesViewer;

  private get isMobile(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  private static _staticInited = false;
  public static staticInit() {
    if (this._staticInited) {
      return;
    }

    Swiper.use([Navigation]);

    this._staticInited = true;
  }

  constructor(private _options: LightWebStoriesOptions) {
    if (this.isMobile) {
      this._storiesViewer = new MobileStoriesViewer(
        document.body,
        this._options
      );
      console.log("Mobile strategy");
    } else {
      this._storiesViewer = new StoriesViewer(document.body, this._options);
      console.log("Desktop strategy");
    }
  }

  public initialize(): void {
    LightWebStories.staticInit();
    
    const container = this._options.container;

    const swiperContainer = LightWebStories.getBaseLayout(
      this._options.previewMode,
      this.getStorySlideElements()
    );

    if (this._options.showPreviewNavButtons) {
      this.addNavigationButtons(swiperContainer);
    }

    container.append(swiperContainer);

    const swiperInstance = new Swiper(swiperContainer, {
      slidesPerView: this._options.slidesPerView,
      loop: false,
      spaceBetween: 10,
      navigation: this._options.showPreviewNavButtons
        ? {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }
        : undefined,
    });
  }

  addNavigationButtons(swiperContainer: HTMLDivElement): void {
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

  static getBaseLayout(
    previewMode: PreviewMode,
    cards: Array<HTMLDivElement>
  ): HTMLDivElement {
    const container1 = document.createElement("div");
    container1.classList.add("swiper");

    switch (previewMode) {
      case PreviewMode.Image: {
        container1.classList.add("image-preview");
        break;
      }
      case PreviewMode.InstagramStory: {
        container1.classList.add("instagram-preview");
        break;
      }
      default: {
        throw new Error("NotImplemented");
      }
    }

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
      let storySlideInstance: StoryPreview;

      if (this._options.previewMode === PreviewMode.Image) {
        storySlideInstance = new ImageStoryPreview(
          item,
          this.onShowStorySlide.bind(this)
        );
      }

      if (this._options.previewMode === PreviewMode.InstagramStory) {
        storySlideInstance = new InstagramStoryPreview(
          item,
          this.onShowStorySlide.bind(this)
        );
      }

      result.push(storySlideInstance!.element);
    }

    return result;
  }

  private onShowStorySlide(storySlide: StoryPreview): void {
    this._storiesViewer.show(storySlide);
  }
}
