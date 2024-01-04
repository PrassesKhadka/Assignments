import { getData } from "../api/data";
import { IreturnGetStory } from "../interface";
import { renderBookmark } from "../utils.ts/bookmark";
import { renderSkeleton } from "../components/SkeletonLoading";
import { renderStory } from "../components/Story";

interface IreturnPage {
  indexNo: number;
  nextPage: () => void;
  previousPage: () => void;
  goToIndex: (no: number) => void;
  render: () => void;
}

interface IstoryCache {
  [key: string]: IreturnGetStory[];
}

// as default each index has 10 stories
export function Page(eachIndex: number = 10): IreturnPage {
  // buttons
  let totalIndex = 50;
  let indexNo = 1;
  //page is the page i.e nav-bar 1-10 is page 1 another 11-20 is page 2 similarly 10 pages
  let totalPage = 10;
  let page = 1;

  // all stories
  let stories: number[] = [];
  // chosen stories for this page
  let topStories: number[] = [];
  let story: IreturnGetStory[] = [];
  let storyCache: IstoryCache = {};

  const nextPage = () => {
    page = (page % totalPage) + 1;
    indexNo = page + 9;
  };
  const previousPage = () => {
    page--;
    indexNo = page - 9;
    if (indexNo < 1) {
      page = totalPage;
      indexNo = page - 9;
    }
  };

  const goToIndex = (no: number) => (indexNo = no);

  // data filtered based on the indexNo. Eg:for first page only 0-9 data given
  async function dataFilter() {
    // Fetch the 500 top stories
    if (stories.length === 0) {
      stories = await getData().getStories();
    }
    let start = (indexNo - 1) * eachIndex;
    let end = indexNo * eachIndex;
    // Only keep the stories that we need in this page #id's
    topStories = stories.slice(start, end);

    // fetch the story

    // caching
    if (storyCache[indexNo.toString()]) {
      story = storyCache[indexNo];
    } else {
      const storyPromise = await topStories.map(async (id) => {
        const eachStory = await getData().getStory(id);
        return eachStory;
      });
      story = await Promise.all(storyPromise);
      // cache
      storyCache[indexNo.toString()] = await Promise.all(storyPromise);
    }
  }

  // To render the main stories pages
  async function render() {
    // selectors
    const innerContainer = document.querySelector(".inner-container");

    // Render bookmark
    renderBookmark();
    // Renders skeleton loading
    renderSkeleton();

    // filters and gives us the data that should be fetched on that page;
    await dataFilter();

    // clears the render caused by skeleton-loading
    innerContainer.innerHTML = "";

    // renders stories/element inside innerContainer HTML Element
    story.forEach((element) => {
      renderStory(element, innerContainer);
    });
  }

  return { indexNo, nextPage, previousPage, goToIndex, render };
}
