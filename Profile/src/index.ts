import * as _ from "lodash";
import { getDatas } from "./api/data";
import { renderInfo } from "./components/Info";
import { renderRepos } from "./components/Repos";
// document selectors:

async function render() {
    const datas = getDatas();
    const user = await datas.getUser();
    const repos = await datas.getRepos();

    // renders info
    renderInfo(user)
    renderRepos(repos)
}

render();
