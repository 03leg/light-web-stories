export abstract class StoryProgressBarHtmlHelper {
  static getStoryProgressItemChild(): HTMLDivElement {
    const result = document.createElement("div");
    result.classList.add("story-progress-bar__progress-viewer");
    result.classList.add("story-progress-bar__progress-viewer_new");

    return result;
  }

  static getStoryProgressItem(width: number): HTMLDivElement {
    const result = document.createElement("div");
    result.classList.add("story-progress-bar__item");
    result.setAttribute("style", `width: calc(${width}% - 4px)`);

    return result;
  }

  static getStoryProgressBar(): HTMLDivElement {
    const result = document.createElement("div");
    result.classList.add("story-progress-bar");

    return result;
  }
}
