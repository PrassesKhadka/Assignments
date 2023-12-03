import { IRepos,IUser,IFollower } from "../interface";

// default argument prasseskhadka
export function getDatas(username:string="prasseskhadka"){

    // defining endpoints:

    // user endpoint
    async function getUser():Promise<IUser>{
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        return data;
    }

    // repos endpoint
    async function getRepos():Promise<IRepos[]>{
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const data = await response.json();
        return data;
    }

    // followers endpoint
    async function getFollowers():Promise<IFollower[]>{
        const response = await fetch(`https://api.github.com/users/${username}/followers`);
        const data = await response.json();
        return data;
    }

    // following endpoint
    async function getFollowing():Promise<IFollower[]>{
        const response = await fetch(`https://api.github.com/users/${username}/following`);
        const data = await response.json();
        return data;
    }

    return {getUser,getRepos,getFollowers,getFollowing}
}

  