import { IRepos, IUser } from "../interface";


export function renderInfo(user:IUser){
    const {avatar_url,name,html_url:url,bio,public_repos,followers,following,blog,twitter_username}=user

    // Create user profile container
    const userProfileContainer = document.getElementById('user-profile');
    const userAvatar = document.createElement('img');
    userAvatar.id = 'user-avatar';
    userAvatar.src = `${avatar_url}`; 
    userAvatar.alt = 'User Avatar';

    const userInfo = document.createElement('div');
    userInfo.className="user-info";
    userInfo.innerHTML = `
        <h2>${name}</h2>
        <p>${bio}</p>
        <button>
            <a href=${url} class="social-link" target="_blank">
                <span >See on GitHub</span>
                <span class="material-icons link">
                    link
                </span>
            </a>
        </button>
    `;

    const socialLinks = document.createElement('div');
    socialLinks.innerHTML = `
        <a href=${twitter_username} class="social-link" target="_blank">Twitter</a>
        <a href=${blog} class="social-link" target="_blank">Blog</a>
    `;

    // Append elements to the user profile container
    userProfileContainer.appendChild(userAvatar);
    userProfileContainer.appendChild(userInfo);
    userProfileContainer.appendChild(socialLinks);

    // Create repository statistics container
    const repoStatsContainer = document.getElementById('repo-stats');
    repoStatsContainer.innerHTML = `
        <p>${public_repos} repos</p>
        <p>${followers} followers</p>
        <p>${following} following</p>
    `;
}