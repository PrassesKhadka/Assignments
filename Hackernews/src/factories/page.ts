import { getData } from "../api/data";
import { IreturnGetComments, IreturnGetStory } from "../interface";

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
    let totalPage=10;
    let page=1;

  // all stories
  let stories: number[] = [];
  // chosen stories for this page
  let topStories: number[] = [];
  let story: IreturnGetStory[] = [];
  let storyCache: IstoryCache = {};

  const nextPage = () =>{ 
        page=page%totalPage +1;
        indexNo=page+9;

  };
  const previousPage = () => {
    page--;
    indexNo=page-9;
    if (indexNo < 1)
    {
        page=totalPage;
        indexNo=page-9;        
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
    for (let i = 0; i < 5; i++) {
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

  async function renderComments(comments:number[]):Promise<HTMLElement>{
      const node=document.createElement("div")

      comments.forEach(async (id:number)=>{
          const data:IreturnGetComments=await getData().getComment(id)
          console.log(data)
          // Create container div
          const div = document.createElement("div");
          div.classList.add("comment");
    
        // Create title element
        const titleElement = document.createElement("div");
        titleElement.innerHTML=data.text;
    
        // Create author element
        const authorElement = document.createElement("p");
        authorElement.textContent = `By: ${data.by}`;
        
        // Create time element
        const timeElement = document.createElement("p");
        const formattedTime = new Date(data.time).toLocaleString();
        timeElement.textContent = `Time: ${formattedTime}`;

        // Number of comments
        const commentElement = document.createElement("p");
        commentElement.textContent = `no.of comments: ${data.kids ? data.kids.length : '0'}`;
        
        // Append elements to the container
        div.appendChild(titleElement);
        div.appendChild(authorElement);
        div.appendChild(timeElement);
        div.appendChild(commentElement);
        node.append(div)

        // Event Listener
        async function handleOnCommentClick(){
            if(data.kids.length===0)
                commentElement.removeEventListener("click",handleOnCommentClick)
            else{
                const node=await renderComments(data.kids)
                div.append(node)
            }
            commentElement.removeEventListener("click",handleOnCommentClick)
        }

        commentElement.addEventListener("click",handleOnCommentClick)
    })
    
    return node;
    
  }

  async function renderDetailPage(element: IreturnGetStory) {
    const innerContainer = document.querySelector(".inner-container");
    const commentBox = document.createElement("div");
    commentBox.classList.add("comment-box")

    innerContainer.innerHTML = "";
    // Create container div
    const div = document.createElement("div");
    div.classList.add("box");

    // Create title element
    const titleElement = document.createElement("h2");
    titleElement.textContent = element.title;

    // Create author element
    const authorElement = document.createElement("p");
    authorElement.textContent = `By: ${element.by}`;
    
    // Create URL element
    const urlElement = document.createElement("p");
    const urlLink = document.createElement("a");
    urlLink.href = element.url;
    urlLink.textContent = element.url;
    urlElement.appendChild(document.createTextNode("URL: "));
    urlElement.appendChild(urlLink);
    
    // Create time element
    const timeElement = document.createElement("p");
    const formattedTime = new Date(element.time).toLocaleString();
    timeElement.textContent = `Time: ${formattedTime}`;

    // Create author element
    const commentElement = document.createElement("p");
    commentElement.textContent = `no.of comments: ${element.kids.length}`;

    // Append elements to the container
    div.appendChild(titleElement);
    div.appendChild(authorElement);
    div.appendChild(urlElement);
    div.appendChild(timeElement);
    div.appendChild(commentElement);
    
    // Now For comments:
    if(element.kids.length===0)
    {
        commentBox.innerHTML="No Comments to Show"
    }else{
        const node=await renderComments(element.kids)
        commentBox.append(node);
    }

    // Append container to the body
    innerContainer.append(div,commentBox);

  }

  async function render() {
    // selectors
    const innerContainer = document.querySelector(".inner-container");

    // Renders skeleton loading
    renderSkeleton();

    // filters and gives us the data that should be fetched on that page;
    await dataFilter();

    // clears the render caused by skeleton-loading
    innerContainer.innerHTML = "";

    story.forEach((element) => {
      // Create container div
      const div = document.createElement("div");
      div.classList.add("box");

      // Create title element
      const titleElement = document.createElement("h2");
      titleElement.textContent = element.title;

      // Create author element
      const authorElement = document.createElement("p");
      authorElement.textContent = `By: ${element.by}`;

      // Create URL element
      const urlElement = document.createElement("p");
      const urlLink = document.createElement("a");
      urlLink.href = element.url;
      urlLink.textContent = element.url;
      urlElement.appendChild(document.createTextNode("URL: "));
      urlElement.appendChild(urlLink);

      // Create time element
      const timeElement = document.createElement("p");
      const formattedTime = new Date(element.time).toLocaleString();
      timeElement.textContent = `Time: ${formattedTime}`;

      // Append elements to the container
      div.appendChild(titleElement);
      div.appendChild(authorElement);
      div.appendChild(urlElement);
      div.appendChild(timeElement);

      // Append container to the body
      innerContainer.appendChild(div);

      // Event Listeners
      div.addEventListener("click", () => {
        renderDetailPage(element);
      });
    });
  }

  return { indexNo, nextPage, previousPage, goToIndex, render };
}
