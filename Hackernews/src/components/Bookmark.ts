import { IreturnGetStory } from "../interface";
import { renderStory } from "./Story";

// To render bookmark
export function renderBookmark() {
  const container = document.querySelector(".container");
  const bookmarkedItem: IreturnGetStory[] =
    JSON.parse(localStorage.getItem("bookmark")) || [];

  container.innerHTML = "";
  bookmarkedItem.forEach((story: IreturnGetStory) => {
    renderStory(story, container);
  });
}
