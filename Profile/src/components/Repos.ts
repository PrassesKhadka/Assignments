import { IRepos } from "../interface";

export function renderRepos(repos:IRepos[]){
    const render=document.querySelector("#render")
    render.innerHTML=""
    const repositories=document.createElement('div')
    repositories.className="repos"
    repositories.id="repos"
    render.appendChild(repositories)

    repos.forEach((repo:IRepos)=>{
        const repo_card=document.createElement('div');
        repo_card.className='repo-card'
        repo_card.innerHTML=
        `
        <div>
            <div>
                <h2>${repo.name}</h2>
                <p>${repo.private ? 'Private' : 'Public'}</p>
            </div>
            <p>${repo.description || 'No description available.'}</p>
        </div>
        <div>
            <p>
                <span class="material-icons">
                    star
                </span>
                <span>${repo.stargazers_count}<span>
            </p>
            <p>
                <span><img src="./dist/assets/fork-icon.svg"></span> 
                <span>${repo.forks_count}</span>
            </p>
        </div>
        `
        repositories.appendChild(repo_card)
        // Add click event to redirect to the repository link
        repo_card.addEventListener('click', () => {
            window.location.href = repo.html_url;
        });
    })

}