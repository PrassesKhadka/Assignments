import { IreturnGetStory } from "../interface";

export function renderBookmark(){
    const bookmark=document.querySelector(".bookmark");
    const bookmarkedItem:IreturnGetStory[]=JSON.parse(localStorage.getItem("bookmark")) || []

    bookmarkedItem.forEach((story)=>{
        
    })
}