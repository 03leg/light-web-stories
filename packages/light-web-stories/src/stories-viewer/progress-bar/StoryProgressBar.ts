import { StoryProgressBarOptions } from "../../model/view/StoryProgressBarOptions";
import { StoryProgressBarHtmlHelper } from "./StoryProgressBarHtmlHelper";
import { StoryProgressItem } from "./StoryProgressItem";

export class StoryProgressBar {
  private _element: HTMLDivElement | null = null;
  private _progressItems = new Array<StoryProgressItem>();
  private _activeStoryItem: StoryProgressItem | null = null;
  private _timeoutHandler?: ReturnType<typeof setTimeout>;

  get element(): HTMLDivElement {
    if (this._element === null) {
      this._element = StoryProgressBarHtmlHelper.getStoryProgressBar();

      const width = 100 / this._options.countImages;

      for (let index = 0; index < this._options.countImages; index++) {
        const newItem = new StoryProgressItem(width);

        this._element.appendChild(newItem.element);

        this._progressItems.push(newItem);
      }
    }

    return this._element;
  }

  constructor(private _options: StoryProgressBarOptions) {}

  updateVisibleProgresBarItem(index: number) {
    this._progressItems.filter((p, filterIndex) => {
      if (filterIndex > index) {
        p.setInitialState();
      }
    });

    this._activeStoryItem?.finish();

    this._activeStoryItem = this._progressItems[index];

    this._activeStoryItem.start();

    this.startTimer();
  }

  startTimer() {
    this.stopProgress();
    
    this._timeoutHandler = setTimeout(() => {
      this._options.nextItem();
    }, 10000);
  }

  stopProgress() {
    clearTimeout(this._timeoutHandler);
  }
}
