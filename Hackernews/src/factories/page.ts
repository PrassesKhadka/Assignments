import { getData } from "../api/data";
import { IreturnGetStory } from "../interface";

interface IreturnPage{
    nextPage:()=>void;
    previousPage:()=>void;
    goToPage:(no:number)=>void;
    render:()=>void;
}

interface IstoryCache{
    [key:string]:IreturnGetStory[];
}

// as default each page has 10 stories
export function Page(eachPage:number=10):IreturnPage{
    let pageNo=1;
    // all stories
    let stories:number[]=[];
    // chosen stories for this page
    let topStories:number[]=[];
    let story:IreturnGetStory[]=[];
    let storyCache:IstoryCache={};
    
    const nextPage=()=>pageNo++;
    const previousPage=()=>{
        if(pageNo!=1)
            pageNo--;
    }
    const goToPage=(no:number)=>pageNo=no;
    
    // data filtered based on the pageNo. Eg:for first page only 0-9 data given
    async function dataFilter(){
        // Fetch the 500 top stories
        if(stories.length===0){
            stories=await getData().getStories()
        }
        let start=(pageNo-1)*eachPage;
        let end=(pageNo*eachPage);
        // Only keep the stories that we need in this page #id's
        topStories=stories.slice(start,end)

        // fetch the story 

        // caching
        if(storyCache[pageNo.toString()]){
            story=storyCache[pageNo]
        }else{
            const storyPromise=await topStories.map(async (id)=>{
                const eachStory=await getData().getStory(id)
                return eachStory
            })
            story=await Promise.all(storyPromise)
            // cache
            storyCache[pageNo.toString()]=await Promise.all(storyPromise)
        }

    } 

    // To render skeleton loading page:
    function renderSkeleton(){
        const innerContainer=document.querySelector(".inner-container");
        for(let i=0;i<5;i++)
        {
            const div=document.createElement("div")
            div.innerHTML=`
                <div class="box">
                    <div class="skeleton skeleton-text"></div>
                    <div class="skeleton skeleton-text"></div>
                    <div class="skeleton skeleton-text"></div>
                    <div class="skeleton skeleton-text"></div>
                    <div class="skeleton skeleton-text"></div>
                </div>
            `
            innerContainer.appendChild(div)
        }

    }

    function renderDetailPage(id:number){

    }

    async function render(){
        // selectors
        const innerContainer=document.querySelector(".inner-container");

        // Renders skeleton loading
        renderSkeleton()

        // filters and gives us the data that should be fetched on that page;
        await dataFilter()

        // clears the render caused by skeleton-loading
        innerContainer.innerHTML=""

        story.forEach((element)=>{
            // Create container div
            const div = document.createElement('div');
            div.classList.add('box');

            // Create title element
            const titleElement = document.createElement('h2');
            titleElement.textContent = element.title;

            // Create author element
            const authorElement = document.createElement('p');
            authorElement.textContent = `By: ${element.by}`;

            // Create URL element
            const urlElement = document.createElement('p');
            const urlLink = document.createElement('a');
            urlLink.href = element.url;
            urlLink.textContent = element.url;
            urlElement.appendChild(document.createTextNode('URL: '));
            urlElement.appendChild(urlLink);

            // Create time element
            const timeElement = document.createElement('p');
            const formattedTime = new Date(element.time).toLocaleString();
            timeElement.textContent = `Time: ${formattedTime}`;

            // Append elements to the container
            div.appendChild(titleElement);
            div.appendChild(authorElement);
            div.appendChild(urlElement);
            div.appendChild(timeElement);

            // Append container to the body
            innerContainer.appendChild(div);
        })
    }

    return {nextPage,previousPage,goToPage,render}
}