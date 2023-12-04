import { IFollower } from "../interface";
import { render } from "..";

export function followingRender(followings:IFollower[]){
    const render_id=document.getElementById("render")
    const userCards = document.createElement('div');
    userCards.id="userCards";
    
    // Create and append HTML elements
    followings.forEach((follower:IFollower)=>{
        const userCard = document.createElement('div');
        userCard.id="userCard";

        userCard.addEventListener("click",()=>{
            render(follower.login)
        })

        userCard.innerHTML = `
            <div >
                <img class="skeleton" src="${follower.avatar_url}" alt="${follower.login}">
                <h3>${follower.login}</h3>
            </div>
            <a href="${follower.html_url}" target="_blank">
                <span class="material-icons">
                    insert_link
                </span>
            </a>
        `;
        userCards.appendChild(userCard)

    })

    render_id.innerHTML=""
    render_id.append(userCards)
}