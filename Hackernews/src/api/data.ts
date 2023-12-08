import { IreturnGetStory } from "../interface";

interface IreturnGetData{
    getStories:()=>Promise<number[]>;
    getStory:(id:number)=>Promise<IreturnGetStory>;
}

export function getData():IreturnGetData{
    // endpoints:

    // top 500 stories endpoints:
    async function getStories(): Promise<number[]>{
        const response= await fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
        const data=await response.json();
        return data;
    }

    // each story
    async function getStory(id:number){
        const response=await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        const data=await response.json();
        console.log(data)
        return data;
    }

    
    return {getStories,getStory}
}
