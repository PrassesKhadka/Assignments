import { IreturnGetComments, IreturnGetStory } from "../interface";

interface IreturnGetData{
    getStories:()=>Promise<number[]>;
    getStory:(id:number)=>Promise<IreturnGetStory>;
    getComment:(id:number)=>Promise<IreturnGetComments>;
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
    async function getStory(id:number):Promise<IreturnGetStory>{
        const response=await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        const data=await response.json();
        return data;
    }

    // each comment
    async function getComment(id:number):Promise<IreturnGetComments>{
        const response=await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        const data=await response.json();
        return data;
    }
    
    return {getStories,getStory,getComment}
}
