import { IRepos,IUser } from "../interface";

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

    // // follower endpoint
    // async function getFollowers(){
    //     const response = await fetch(`https://api.github.com/users/${username}`);
    //     const {data} = await response.json();
    //     userData={...data};
    // }

    // // following endpoint 
    // function getFollowing(){
    //     const response = await fetch(`https://api.github.com/users/${username}`);
    //     const {data} = await response.json();
    //     userData={...data};
    // }

    return {getUser,getRepos}
}

  