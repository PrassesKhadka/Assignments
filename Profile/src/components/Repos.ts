import { IRepos } from "../interface";

export function renderRepos(repos:IRepos[]){
    const repositories=document.querySelector(".repos")
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
            <p>Stars: ${repo.stargazers_count}</p>
            <p>Forks: ${repo.forks_count}</p>
        </div>
        `
        repositories.appendChild(repo_card)
        // Add click event to redirect to the repository link
        repo_card.addEventListener('click', () => {
            window.location.href = repo.html_url;
        });
    })

}