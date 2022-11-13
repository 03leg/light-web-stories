import { NavigationAreaType } from "../model/view/NavigationArea";

export abstract class StoryViewHtmlHelper {
  static getStoryContentElement(): HTMLDivElement {
    const storyContent = document.createElement("div");
    storyContent.classList.add("story-view__content");

    return storyContent;
  }

  static getOverlapElement(): HTMLDivElement {
    const result = document.createElement("div");

    result.classList.add("story-view__overlap");

    result.addEventListener("click", () => {
      console.log("overlap");
    });

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
