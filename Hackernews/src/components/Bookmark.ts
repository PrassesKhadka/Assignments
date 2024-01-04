import { IreturnGetStory } from "../interface";
import { renderStory } from "./Story";
import { auth, db } from "../firebase";
import { getDoc, doc, onSnapshot } from "firebase/firestore";
import { renderError } from "./Error";
import { renderSkeleton } from "./SkeletonLoading";

// To render bookmark
export async function renderBookmark() {
  const container = document.querySelector(".inner-container");
  container.innerHTML = "";
  let bookmarkedItem: IreturnGetStory[] = [];

  // Get data from firestore
  const user = auth.currentUser;
  if (user) {
    renderSkeleton();
    const docRef = doc(db, "users", `${user.uid}`);
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      bookmarkedItem = docSnapshot.data()?.bookmarks;
    }

    container.innerHTML = "";
    const p = document.createElement("p");
    p.style.fontSize = "2rem";
    p.textContent = "Saved Bookmarks:";
    container.appendChild(p);
    bookmarkedItem.forEach((story: IreturnGetStory) => {
      renderStory(story, container);
    });
  } else {
    renderError("Sign in to save your data");
  }
}
