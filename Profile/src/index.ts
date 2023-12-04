import * as _ from "lodash";
import { getDatas } from "./api/data";
import { renderInfo } from "./components/Info";
import { renderRepos } from "./components/Repos";
import { followersRender } from "./components/Followers";
import { followingRender } from "./components/Following";
import { utils } from "./utils";

// document selectors:
const search_btn = document.getElementById("search_btn");

// search functionality
search_btn.addEventListener("click", getValue);
function getValue(e: Event) {
  e.preventDefault();
  const search = document.getElementById("search") as HTMLInputElement;
  const username = search.value;
  search.value = "";
  username && render(username);
}

// To render;
export async function render(username?: string) {
  // selectors select:
  const user_profile = document.querySelector("#user-profile");
  const repo_stats = document.querySelector("#repo-stats");
  const repos_id = document.querySelector("#repos") as HTMLDivElement;
  const render_id = document.querySelector("#render") as HTMLDivElement;
  const nav = document.querySelector("#nav");
  const repo_btn = document.querySelector("#repo-btn");
  const followers_btn = document.querySelector("#followers-btn");
  const following_btn = document.querySelector("#following-btn");

  user_profile.innerHTML = "";
  render_id.innerHTML="";
  repo_stats.innerHTML = "";
  if(repos_id){
    repos_id.innerHTML = "";
  }

  // data retrievel
  username = username && username.split(" ").join("");
  const datas = getDatas(username);
  const user = await datas.getUser();
  const repos = await datas.getRepos();
  const followers = await datas.getFollowers();
  const following = await datas.getFollowing();


  // renders info
  renderInfo(user);

  // renders navigation buttons
  repo_btn.textContent = `Repositories (${user.public_repos})`;
  repo_btn.className="active";
  followers_btn.textContent = `Followers (${user.followers})`;
  followers_btn.classList.remove("active");
  following_btn.textContent = `Following (${user.following})`;
  following_btn.classList.remove("active");
  // event listeners:
  repo_btn.addEventListener("click",()=>{
    repo_btn.classList.add("active")
    followers_btn.classList.remove("active")
    following_btn.classList.remove("active")
    renderRepos(repos)
  })
  followers_btn.addEventListener("click",()=>{
    repo_btn.classList.remove("active")
    followers_btn.classList.add("active")
    following_btn.classList.remove("active")
    followersRender(followers)
  })
  following_btn.addEventListener("click",()=>{
    repo_btn.classList.remove("active")
    followers_btn.classList.remove("active")
    following_btn.classList.add("active")
    followingRender(following)
  })

  // initially
  renderRepos(repos);
}

render();
utils();