import { findIndex, lowerCase } from "cypress/types/lodash";
import { getData } from "../api/data";
import { IreturnGetComments, IreturnGetStory } from "../interface";
import { timeSince } from "../utils.ts/timeSince";
import { renderBookmark } from "../utils.ts/bookmark";

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

  // To render skeleton loading page:
  function renderSkeleton() {
    const innerContainer = document.querySelector(".inner-container");
    for (let i = 0; i < eachIndex; i++) {
      const div = document.createElement("div");
      div.innerHTML = `
                <div class="box">
                    <div class="skeleton skeleton-text"></div>
                    <div class="skeleton skeleton-text"></div>
                    <div class="skeleton skeleton-text"></div>
                    <div class="skeleton skeleton-text"></div>
                    <div class="skeleton skeleton-text"></div>
                </div>
            `;
      innerContainer.appendChild(div);
    }
  }

  async function renderComments(comments: number[]): Promise<HTMLElement> {
    // selector
    const inner_comment_box = document.querySelector(".inner-comment-box");

    // creating a div to return after appending
    const node = document.createElement("div");
    node.classList.add("inner-comment-box");

    comments.forEach(async (id: number) => {
      // data fetch
      const data: IreturnGetComments = await getData().getComment(id);
      // data nedded:
      const { by, kids, text, time } = data;

      // Create container div
      const div = document.createElement("div");
      div.classList.add("comment");

      // Create user Icon
      const userIcon = document.createElement("div");
      userIcon.classList.add("user-icon");

      // Create an icon element (Material Icons user icon)
      const icon = document.createElement("span");
      icon.classList.add("material-icons");
      icon.textContent = "person"; // Set the Material Icons class for the user icon

      // Append the icon to the user icon div
      userIcon.appendChild(icon);

      // Create user details
      const userDetails = document.createElement("div");
      userDetails.classList.add("user-details");

      // Create author element
      const authorElement = document.createElement("p");
      authorElement.textContent = `${by}`;
      authorElement.classList.add("user-name");

      // Create time element
      const timeElement = document.createElement("span");
      timeElement.textContent = timeSince(time);
      timeElement.classList.add("comment-time");

      // Create comment-text element
      const textElement = document.createElement("div");
      textElement.classList.add("comment-text");
      // innerHTML because text contains html embeded inside it so
      textElement.innerHTML = text;

      // Reply element
      const replyIcon = document.createElement("div");
      replyIcon.classList.add("reply-icon");
      replyIcon.innerHTML = `
          <span class="material-icons">comment</span>
          ${kids ? `<span>${kids.length}</span>` : `<span>0</span>`}
      `;

      // Append elements to the container
      userDetails.append(authorElement, timeElement);
      div.append(userIcon, userDetails, textElement, replyIcon);
      node.append(div);

      // Event Listener
      let active = false;
      async function handleOnCommentClick() {
        // active->once clicked comment data fetched now when again clicked the comment will be hidden and toggle with each click but no data fetch
        if (active === false) {
          active = true;
          if (!kids)
            replyIcon.removeEventListener("click", handleOnCommentClick);
          else {
            const node = await renderComments(kids);
            div.append(node);
            // replyIcon.removeEventListener("click", handleOnCommentClick);
          }
        } else {
          // To show comment when clicked and hide when again clicked
          const innerCommentBox = div.querySelector(".inner-comment-box");
          // since display:none is not inherited,we have to apply hide on every comment and cannot just apply hide on inner-comment-box(root element)
          const comments = innerCommentBox.querySelectorAll(".comment");
          comments.forEach((comment) => comment.classList.toggle("hide"));
        }
      }

      replyIcon.addEventListener("click", handleOnCommentClick);
    });

    return node;
  }

  async function renderDetailPage(element: IreturnGetStory) {
    // data
    const { by, kids, score, time, title, url } = element;

    // selector
    const innerContainer = document.querySelector(".inner-container");
    const bookmark_div = document.querySelector(".bookmark");
    const commentBox = document.createElement("div");
    commentBox.classList.add("comment-box");

    // clearing
    bookmark_div.innerHTML="";
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

  // To render bookmark
  function renderBookmark() {
    const bookmark = document.querySelector(".bookmark");
    const bookmarkedItem: IreturnGetStory[] =
      JSON.parse(localStorage.getItem("bookmark")) || [];

    bookmark.innerHTML = "";
    bookmarkedItem.forEach((story: IreturnGetStory) => {
      renderStory(story, bookmark);
    });
  }

  // inside innerContainer it will be appended
  function renderStory(element: IreturnGetStory, innerContainer: Element) {
    // data needed
    const { by, time, url, title, kids, score } = element;

    // Create container div
    const div = document.createElement("div");
    div.classList.add("box");

    const upper_box = document.createElement("div");
    upper_box.classList.add("upper-box");
    const lower_box = document.createElement("div");
    lower_box.classList.add("lower-box");

    // Create title element
    const titleElement = document.createElement("div");
    titleElement.classList.add("title");
    titleElement.textContent = title;

    // Create author element
    const authorElement = document.createElement("div");
    authorElement.innerHTML = `<div class="author"><span class="material-icons">person</span> ${by}</div>`;

    // Create comment element
    const commentElement = document.createElement("div");
    commentElement.classList.add("comment-box");
    commentElement.innerHTML = `<span class="material-icons">comment</span><span>${
      kids ? kids.length : "0"
    }</span>`;

    // Create score element
    const scoreElement = document.createElement("div");
    scoreElement.classList.add("score");
    scoreElement.innerHTML = `<span class="material-icons">star</span><span>${score}</span>`;

    // Create time element
    const timeElement = document.createElement("div");
    timeElement.classList.add("time");
    timeElement.innerHTML = `<i class="material-icons">access_time</i> Published ${timeSince(
      time
    )}`;

    // Create URL element
    const urlElement = document.createElement("div");
    const urlLink = document.createElement("a");
    urlLink.href = url;
    urlLink.target = "_blank";
    urlLink.innerHTML = `<span class="material-icons">open_in_new</span>`;
    urlElement.append(urlLink);

    // Create time element
    const saveElement = document.createElement("span");
    saveElement.classList.add("save");
    saveElement.innerHTML = `<span class="material-icons">bookmark</span>`;

    // Append container to the body
    upper_box.append(titleElement);
    lower_box.append(
      authorElement,
      scoreElement,
      commentElement,
      timeElement,
      urlElement,
      saveElement
    );
    div.append(upper_box, lower_box);
    innerContainer.appendChild(div);

    // Event Listeners

    // To show detail page / comment section
    titleElement.addEventListener("click", () => {
      renderDetailPage(element);
    });

    // To bookmark stories
    let active = false;
    saveElement.addEventListener("click", () => {
      // To change color of the bookmark icon
      active = !active;
      console.log(active)
      // selector
      const bookmark_div = document.querySelector(".bookmark");
      const bookmark_icon = document.querySelector(".save");
      const icon = bookmark_icon.getElementsByTagName("span")[0] as HTMLSpanElement;
    
      active ? (icon.style.color = "blue") : (icon.style.color = "white");

      const bookmark: IreturnGetStory[] =
        JSON.parse(localStorage.getItem("bookmark")) || [];
      const index = bookmark.findIndex((story) => story.id === element.id);
      index === -1 ? bookmark.push(element) : bookmark.splice(index, 1);

      // update localstorage
      localStorage.setItem("bookmark", JSON.stringify(bookmark));

      // render it
      bookmark_div.innerHTML = "";
      renderBookmark();
    });
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

    story.forEach((element) => {
      renderStory(element, innerContainer);
    });
  }

  return { indexNo, nextPage, previousPage, goToIndex, render };
}
