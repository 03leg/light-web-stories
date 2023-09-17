import { PreviewMode } from "light-web-stories";
import { LightWebStories, LightWebStoriesOptions } from "light-web-stories";
import { StoryOptions } from "light-web-stories/dist/esm/model/StoryOptions";

const previews = [
  "assets/preview1.png",
  "assets/preview2.png",
  "assets/preview3.png",
  "assets/preview4.png",
];
const instaPreviews = [
  "assets/instapreview1.PNG",
  "assets/instapreview2.PNG",
  "assets/instapreview3.PNG",
  "assets/instapreview4.PNG",
];
const contents = [
  "assets/story1.png",
  "assets/story2.png",
  "assets/story3.png",
  "assets/story4.png",
];

function getRandom(max: number, min: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let indexPreview = 0;
function getNextImagePreview() {
  if (indexPreview >= previews.length) {
    indexPreview = 0;
  }
  return previews[indexPreview++];
}

let indexInstaPreview = 0;
function getNextInstaPreview() {
  if (indexInstaPreview >= instaPreviews.length) {
    indexInstaPreview = 0;
  }
  return instaPreviews[indexInstaPreview++];
}

let indexContent = 0;
function getNextContent() {
  if (indexContent >= contents.length) {
    indexContent = 0;
  }
  return contents[indexContent++];
}

function generateStories(
  groupCount: number,
  mode: PreviewMode
): Array<StoryOptions> {
  const result = [];
  for (let groupIndex = 0; groupIndex < groupCount; groupIndex++) {
    const newItem: StoryOptions = {
      slideImage:
        mode === PreviewMode.Image
          ? getNextImagePreview()
          : getNextInstaPreview(),
      stories: [],
    };

    for (
      let contentIndex = 0;
      contentIndex < getRandom(15, 3);
      contentIndex++
    ) {
      newItem.stories.push({
        image: getNextContent(),
      });
    }

    result.push(newItem);
  }

  return result;
}

export class App {
  public setup(): void {
    const options1: LightWebStoriesOptions = {
      container: document.querySelector("#stories-1")!,
      previewMode: PreviewMode.Image,
      showPreviewNavButtons: true,
      slidesPerView: 6,
      items: generateStories(15, PreviewMode.Image),
    };
    const storiesSdk1 = new LightWebStories(options1);
    storiesSdk1.initialize();

    const options2: LightWebStoriesOptions = {
      container: document.querySelector("#stories-2")!,
      previewMode: PreviewMode.InstagramStory,
      showPreviewNavButtons: false,
      slidesPerView: "auto",
      items: generateStories(20, PreviewMode.InstagramStory),
    };
    const storiesSdk2 = new LightWebStories(options2);
    storiesSdk2.initialize();
  }
}

new App().setup();
