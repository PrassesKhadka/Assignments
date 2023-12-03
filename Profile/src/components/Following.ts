import { IFollower } from "../interface";

export function followingRender(followings:IFollower[]){
    const render=document.getElementById("render")
    const userCards = document.createElement('div');
    userCards.id="userCards";
    
    // Create and append HTML elements
    followings.forEach((follower:IFollower)=>{
        const userCard = document.createElement('div');
        userCard.id="userCard";

        userCard.innerHTML = `
            <div >
                <img src="${follower.avatar_url}" alt="${follower.login}">
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

    render.innerHTML=""
    render.append(userCards)
}