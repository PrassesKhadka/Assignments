import { IreturnGetStory } from "../interface";
import { timeSince } from "../utils.ts/timeSince";
import { renderComments } from "./Comments";

export async function renderDetailPage(element: IreturnGetStory) {
  // data
  const { by, kids, score, time, title, url } = element;

  // selector
  const innerContainer = document.querySelector(".inner-container");
  const commentBox = document.createElement("div");
  commentBox.classList.add("comment-box");

  // clearing
  innerContainer.innerHTML = "";

  // Create container div
  const div = document.createElement("div");
  div.classList.add("box");

  // Create title element
  const titleElement = document.createElement("h2");
  titleElement.textContent = title;

  // Create author element
  const authorElement = document.createElement("p");
  authorElement.textContent = `${by}`;

  // Create URL element
  const urlElement = document.createElement("div");
  const urlLink = document.createElement("a");
  urlLink.href = url;
  urlLink.target = "_blank";
  urlLink.innerHTML = `<span class="material-icons">open_in_new</span>`;
  urlElement.append(urlLink);

  // Create time element
  const timeElement = document.createElement("p");
  timeElement.textContent = timeSince(time);

  // Create author element
  const commentElement = document.createElement("p");
  commentElement.innerHTML = `<span class="material-icons">comment</span> ${
    kids.length ? kids.length : "0"
  }`;

  // Append elements to the container
  div.appendChild(titleElement);
  div.appendChild(authorElement);
  div.appendChild(urlElement);
  div.appendChild(timeElement);
  div.appendChild(commentElement);

  // Now For comments:
  if (kids.length === 0) {
    innerContainer.innerHTML = "No Comments to Show";
  } else {
    const node = await renderComments(kids);
    commentBox.append(node);
  }

  // Append container to the body
  innerContainer.append(div, commentBox);
}
