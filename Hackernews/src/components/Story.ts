import { IreturnGetStory } from "../interface";
import { renderDetailPage } from "./DetailPage";
import { timeSince } from "../utils.ts/timeSince";
import { auth } from "../firebase";
import { db } from "../firebase";
import { setDoc, doc, onSnapshot, getDoc, updateDoc } from "firebase/firestore";
import { renderError } from "./Error";

// inside innerContainer it will be appended
export async function renderStory(
  element: IreturnGetStory,
  innerContainer: Element
) {
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

  // Create bookmark element/icon
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
  saveElement.addEventListener("click", async () => {
    // Save in localStorage logic
    // const bookmark: IreturnGetStory[] =
    //   JSON.parse(localStorage.getItem("bookmark")) || [];
    // const index = bookmark.findIndex((story) => story.id === element.id);
    // index === -1 ? bookmark.push(element) : bookmark.splice(index, 1);
    // // update localstorage
    // localStorage.setItem("bookmark", JSON.stringify(bookmark));

    // Save in cloud firestore
    // get current authenticated user
    const user = auth.currentUser;
    if (user) {
      const docRef = await doc(db, "users", `${user.uid}`);
      await getDoc(docRef).then(async (docSnapshot) => {
        if (docSnapshot.exists()) {
          const bookmarks: IreturnGetStory[] =
            docSnapshot.data()?.bookmarks || [];
          const index = bookmarks.findIndex((story) => story.id === element.id);
          index === -1 ? bookmarks.push(element) : bookmarks.splice(index, 1);

          // update firestore
          await updateDoc(docRef, {
            bookmarks,
          });
        } else {
          console.log("Error finding document");
        }
      });
    } else {
      renderError("Login to save bookmarks!!!");
      console.log("No user logged in");
    }
  });
}
