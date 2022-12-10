import { StoryProgressBarHtmlHelper } from "./StoryProgressBarHtmlHelper";

export class StoryProgressItem {
  private _element: HTMLDivElement | null = null;
  private _progressViewer: HTMLDivElement | null = null;

  get element(): HTMLDivElement {
    if (this._element === null) {
      this._element = StoryProgressBarHtmlHelper.getStoryProgressItem(
        this._width
      );

      this._progressViewer =
        StoryProgressBarHtmlHelper.getStoryProgressItemChild();

      this._element.appendChild(this._progressViewer);
    }

    return this._element;
  }

  start() {
    this._progressViewer!.classList.remove(
      "story-progress-bar__progress-viewer_new"
    );

    this._progressViewer!.classList.add(
      "story-progress-bar__progress-viewer_now"
    );
  }

  finish() {
    this._progressViewer!.classList.remove(
      "story-progress-bar__progress-viewer_now"
    );
  }

  setInitialState() {
    this.reset();
  }

  private reset() {
    this._progressViewer!.setAttribute(
      "class",
      "story-progress-bar__progress-viewer story-progress-bar__progress-viewer_new"
    );
  }

  constructor(private _width: number) {}
}
