import { StoryViewOptions } from "../model/view/StoryViewOptions";
import { StoryView } from "./StoryView";

export class MobileStoryView extends StoryView {
  constructor(options: StoryViewOptions) {
    super(options);

    this._prevAreaElement.addEventListener("touchstart", this.suspendProgress);
    this._nextAreaElement.addEventListener("touchstart", this.suspendProgress);
    this._prevAreaElement.addEventListener("touchend", this.resumeProgress);
    this._nextAreaElement.addEventListener("touchend", this.resumeProgress);
  }

  showNavigationImageButtons() {}

  updateNavigationButtonsState() {}

  removeNavigationStoryButtons() {}

  public destroy(): void {
    super.destroy();
    //mobile
    this._prevAreaElement.removeEventListener(
      "touchstart",
      this.suspendProgress
    );
    this._nextAreaElement.removeEventListener(
      "touchstart",
      this.suspendProgress
    );
    this._prevAreaElement.removeEventListener("touchend", this.resumeProgress);
    this._nextAreaElement.removeEventListener("touchend", this.resumeProgress);
  }
}
