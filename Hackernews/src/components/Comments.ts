import { IreturnGetComments } from "../interface";
import { timeSince } from "../utils.ts/timeSince";
import { getData } from "../api/data";

export async function renderComments(comments: number[]): Promise<HTMLElement> {
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