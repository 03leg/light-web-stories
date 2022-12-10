import { NavigationAreaType } from "../model/view/NavigationArea";

export abstract class StoryViewHtmlHelper {
  static getPrevImageButtonElement(): HTMLDivElement {
    const button = document.createElement("div");
    button.classList.add("story-view__navigate-story-button");
    button.classList.add("story-view__navigate-story-button_prev");

    const svgContainer = document.createElement("span");
    svgContainer.classList.add("story-view__svg-container");
    // button.appendChild(svgContainer);

    var svgPrev = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgPrev.classList.add("navigation-button-svg-content");
    svgPrev.setAttribute("height", "24px");
    svgPrev.setAttribute("width", "24px");

    svgPrev.innerHTML =
      '<path d="m15.707 4.293c.39.391.39 1.024 0 1.414l-6.293 6.293 6.293 6.293c.39.39.39 1.024 0 1.414s-1.024.39-1.414 0l-7-7c-.391-.39-.391-1.024 0-1.414l7-7c.39-.391 1.024-.391 1.414 0z"/>';
    button.appendChild(svgPrev);

    return button;
  }

  static getNextImageButtonElement(): HTMLDivElement {
    const button = document.createElement("div");
    button.classList.add("story-view__navigate-story-button");
    button.classList.add("story-view__navigate-story-button_next");

    const svgContainer = document.createElement("span");
    svgContainer.classList.add("story-view__svg-container");
    // button.appendChild(svgContainer);

    var svgNext = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgNext.classList.add("navigation-button-svg-content");
    svgNext.setAttribute("height", "24px");
    svgNext.setAttribute("width", "24px");

    svgNext.innerHTML =
      '<path xmlns="http://www.w3.org/2000/svg" d="m15.707 4.293c.39.391.39 1.024 0 1.414l-6.293 6.293 6.293 6.293c.39.39.39 1.024 0 1.414s-1.024.39-1.414 0l-7-7c-.391-.39-.391-1.024 0-1.414l7-7c.39-.391 1.024-.391 1.414 0z"/>';
    button.appendChild(svgNext);

    return button;
  }

  static getStoryContentElement(): HTMLDivElement {
    const storyContent = document.createElement("div");
    storyContent.classList.add("story-view__content");

    return storyContent;
  }

  static getOverlapElement(): HTMLDivElement {
    const result = document.createElement("div");

    result.classList.add("story-view__overlap");

    return result;
  }
  public static getNavigationArea(
    navigationArea: NavigationAreaType
  ): HTMLDivElement {
    const result = document.createElement("div");
    result.classList.add("story-view__navigation-area");

    switch (navigationArea) {
      case NavigationAreaType.Prev: {
        result.classList.add("story-view__navigation-area_prev");
        break;
      }
      case NavigationAreaType.Next: {
        result.classList.add("story-view__navigation-area_next");
        break;
      }
    }

    return result;
  }
}
