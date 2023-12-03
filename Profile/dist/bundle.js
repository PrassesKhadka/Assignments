/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/data.ts":
/*!*************************!*\
  !*** ./src/api/data.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDatas: () => (/* binding */ getDatas)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// default argument prasseskhadka
function getDatas(username) {
    // defining endpoints:
    if (username === void 0) { username = "prasseskhadka"; }
    // user endpoint
    function getUser() {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("https://api.github.com/users/".concat(username))];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    }
    // repos endpoint
    function getRepos() {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("https://api.github.com/users/".concat(username, "/repos"))];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    }
    // followers endpoint
    function getFollowers() {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("https://api.github.com/users/".concat(username, "/followers"))];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    }
    // following endpoint
    function getFollowing() {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("https://api.github.com/users/".concat(username, "/following"))];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    }
    return { getUser: getUser, getRepos: getRepos, getFollowers: getFollowers, getFollowing: getFollowing };
}


/***/ }),

/***/ "./src/components/Followers.ts":
/*!*************************************!*\
  !*** ./src/components/Followers.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   followersRender: () => (/* binding */ followersRender)
/* harmony export */ });
function followersRender(followers) {
    var render = document.getElementById("render");
    var userCards = document.createElement('div');
    userCards.id = "userCards";
    // Create and append HTML elements
    followers.forEach(function (follower) {
        var userCard = document.createElement('div');
        userCard.id = "userCard";
        userCard.innerHTML = "\n            <div>\n                <img src=\"".concat(follower.avatar_url, "\" alt=\"").concat(follower.login, "\">\n                <h3>").concat(follower.login, "</h3>\n            </div>\n            <a href=\"").concat(follower.html_url, "\" target=\"_blank\">\n                <span class=\"material-icons\">\n                    insert_link\n                </span>\n            </a>\n        ");
        userCards.appendChild(userCard);
    });
    render.innerHTML = "";
    render.append(userCards);
}


/***/ }),

/***/ "./src/components/Following.ts":
/*!*************************************!*\
  !*** ./src/components/Following.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   followingRender: () => (/* binding */ followingRender)
/* harmony export */ });
function followingRender(followings) {
    var render = document.getElementById("render");
    var userCards = document.createElement('div');
    userCards.id = "userCards";
    // Create and append HTML elements
    followings.forEach(function (follower) {
        var userCard = document.createElement('div');
        userCard.id = "userCard";
        userCard.innerHTML = "\n            <div >\n                <img src=\"".concat(follower.avatar_url, "\" alt=\"").concat(follower.login, "\">\n                <h3>").concat(follower.login, "</h3>\n            </div>\n            <a href=\"").concat(follower.html_url, "\" target=\"_blank\">\n                <span class=\"material-icons\">\n                    insert_link\n                </span>\n            </a>\n        ");
        userCards.appendChild(userCard);
    });
    render.innerHTML = "";
    render.append(userCards);
}


/***/ }),

/***/ "./src/components/Info.ts":
/*!********************************!*\
  !*** ./src/components/Info.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderInfo: () => (/* binding */ renderInfo)
/* harmony export */ });
function renderInfo(user) {
    var avatar_url = user.avatar_url, name = user.name, url = user.html_url, bio = user.bio, public_repos = user.public_repos, followers = user.followers, following = user.following, blog = user.blog, twitter_username = user.twitter_username;
    // Create user profile container
    var userProfileContainer = document.getElementById('user-profile');
    var userAvatar = document.createElement('img');
    userAvatar.id = 'user-avatar';
    userAvatar.src = "".concat(avatar_url);
    userAvatar.alt = 'User Avatar';
    var userInfo = document.createElement('div');
    userInfo.className = "user-info";
    userInfo.innerHTML = "\n        <h2>".concat(name, "</h2>\n        <p>").concat(bio, "</p>\n        <button>\n            <a href=").concat(url, " class=\"social-link\" target=\"_blank\">\n                <span >See on GitHub</span>\n                <span class=\"material-icons link\">\n                    link\n                </span>\n            </a>\n        </button>\n    ");
    var socialLinks = document.createElement('div');
    socialLinks.innerHTML = "\n        <a href=".concat(twitter_username, " class=\"social-link\" target=\"_blank\">Twitter</a>\n        <a href=").concat(blog, " class=\"social-link\" target=\"_blank\">Blog</a>\n    ");
    // Append elements to the user profile container
    userProfileContainer.appendChild(userAvatar);
    userProfileContainer.appendChild(userInfo);
    userProfileContainer.appendChild(socialLinks);
    // Create repository statistics container
    var repoStatsContainer = document.getElementById('repo-stats');
    repoStatsContainer.innerHTML = "\n        <p>".concat(public_repos, " repos</p>\n        <p>").concat(followers, " followers</p>\n        <p>").concat(following, " following</p>\n    ");
}


/***/ }),

/***/ "./src/components/Repos.ts":
/*!*********************************!*\
  !*** ./src/components/Repos.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderRepos: () => (/* binding */ renderRepos)
/* harmony export */ });
function renderRepos(repos) {
    var render = document.querySelector("#render");
    render.innerHTML = "";
    var repositories = document.createElement('div');
    repositories.className = "repos";
    repositories.id = "repos";
    render.appendChild(repositories);
    repos.forEach(function (repo) {
        var repo_card = document.createElement('div');
        repo_card.className = 'repo-card';
        repo_card.innerHTML =
            "\n        <div>\n            <div>\n                <h2>".concat(repo.name, "</h2>\n                <p>").concat(repo.private ? 'Private' : 'Public', "</p>\n            </div>\n            <p>").concat(repo.description || 'No description available.', "</p>\n        </div>\n        <div>\n            <p>\n                <span class=\"material-icons\">\n                    star\n                </span>\n                <span>").concat(repo.stargazers_count, "<span>\n            </p>\n            <p>\n                <span><img src=\"./dist/assets/fork-icon.svg\"></span> \n                <span>").concat(repo.forks_count, "</span>\n            </p>\n        </div>\n        ");
        repositories.appendChild(repo_card);
        // Add click event to redirect to the repository link
        repo_card.addEventListener('click', function () {
            window.location.href = repo.html_url;
        });
    });
}


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   utils: () => (/* binding */ utils)
/* harmony export */ });
function utils() {
    // To toggle between dark and light mode;
    var toggle_btn = document.querySelector(".toggle-btn");
    toggle_btn.addEventListener("click", toggleMode);
    // Check user's preference from local storage
    var isLightMode = JSON.parse(localStorage.getItem("lightMode")) || true;
    // Apply initial mode
    applyMode(isLightMode);
    function toggleMode() {
        var currentMode = document.body.classList.contains("light-mode");
        applyMode(!currentMode);
    }
    function applyMode(isLightMode) {
        document.body.classList.toggle("light-mode");
        localStorage.setItem("lightMode", JSON.stringify(isLightMode));
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _api_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/data */ "./src/api/data.ts");
/* harmony import */ var _components_Info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Info */ "./src/components/Info.ts");
/* harmony import */ var _components_Repos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Repos */ "./src/components/Repos.ts");
/* harmony import */ var _components_Followers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Followers */ "./src/components/Followers.ts");
/* harmony import */ var _components_Following__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Following */ "./src/components/Following.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






// document selectors:
var search_btn = document.getElementById("search_btn");
// search functionality
search_btn.addEventListener("click", getValue);
function getValue(e) {
    e.preventDefault();
    var search = document.getElementById("search");
    var username = search.value;
    search.value = "";
    username && render(username);
}
// To render;
function render(username) {
    return __awaiter(this, void 0, void 0, function () {
        var user_profile, repo_stats, repos_id, nav, repo_btn, followers_btn, following_btn, datas, user, repos, followers, following;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user_profile = document.querySelector("#user-profile");
                    repo_stats = document.querySelector("#repo-stats");
                    repos_id = document.querySelector("#repos");
                    nav = document.querySelector("#nav");
                    repo_btn = document.querySelector("#repo-btn");
                    followers_btn = document.querySelector("#followers-btn");
                    following_btn = document.querySelector("#following-btn");
                    user_profile.innerHTML = "";
                    repo_stats.innerHTML = "";
                    if (repos_id) {
                        repos_id.innerHTML = "";
                    }
                    // data retrievel
                    username = username && username.split(" ").join("");
                    datas = (0,_api_data__WEBPACK_IMPORTED_MODULE_0__.getDatas)(username);
                    return [4 /*yield*/, datas.getUser()];
                case 1:
                    user = _a.sent();
                    return [4 /*yield*/, datas.getRepos()];
                case 2:
                    repos = _a.sent();
                    return [4 /*yield*/, datas.getFollowers()];
                case 3:
                    followers = _a.sent();
                    return [4 /*yield*/, datas.getFollowing()];
                case 4:
                    following = _a.sent();
                    // renders info
                    (0,_components_Info__WEBPACK_IMPORTED_MODULE_1__.renderInfo)(user);
                    // renders navigation buttons
                    repo_btn.textContent = "Repositories";
                    repo_btn.className = "active";
                    followers_btn.textContent = "Followers";
                    following_btn.textContent = "Following";
                    // event listeners:
                    repo_btn.addEventListener("click", function () {
                        repo_btn.classList.add("active");
                        followers_btn.classList.remove("active");
                        following_btn.classList.remove("active");
                        (0,_components_Repos__WEBPACK_IMPORTED_MODULE_2__.renderRepos)(repos);
                    });
                    followers_btn.addEventListener("click", function () {
                        repo_btn.classList.remove("active");
                        followers_btn.classList.add("active");
                        following_btn.classList.remove("active");
                        (0,_components_Followers__WEBPACK_IMPORTED_MODULE_3__.followersRender)(followers);
                    });
                    following_btn.addEventListener("click", function () {
                        repo_btn.classList.remove("active");
                        followers_btn.classList.remove("active");
                        following_btn.classList.add("active");
                        (0,_components_Following__WEBPACK_IMPORTED_MODULE_4__.followingRender)(following);
                    });
                    // initially
                    (0,_components_Repos__WEBPACK_IMPORTED_MODULE_2__.renderRepos)(repos);
                    return [2 /*return*/];
            }
        });
    });
}
render();
(0,_utils__WEBPACK_IMPORTED_MODULE_5__.utils)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsS0FBSyxDQUFDLENBQUM7Ozs7O0NBQ3BCO0FBRUQsTUFBTSxFQUFFLENBQUM7QUFDVCw2Q0FBSyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9maWxlLy4vc3JjL2FwaS9kYXRhLnRzIiwid2VicGFjazovL3Byb2ZpbGUvLi9zcmMvY29tcG9uZW50cy9Gb2xsb3dlcnMudHMiLCJ3ZWJwYWNrOi8vcHJvZmlsZS8uL3NyYy9jb21wb25lbnRzL0ZvbGxvd2luZy50cyIsIndlYnBhY2s6Ly9wcm9maWxlLy4vc3JjL2NvbXBvbmVudHMvSW5mby50cyIsIndlYnBhY2s6Ly9wcm9maWxlLy4vc3JjL2NvbXBvbmVudHMvUmVwb3MudHMiLCJ3ZWJwYWNrOi8vcHJvZmlsZS8uL3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly9wcm9maWxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2ZpbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2ZpbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9maWxlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvZmlsZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJUmVwb3MsSVVzZXIsSUZvbGxvd2VyIH0gZnJvbSBcIi4uL2ludGVyZmFjZVwiO1xuXG4vLyBkZWZhdWx0IGFyZ3VtZW50IHByYXNzZXNraGFka2FcbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhcyh1c2VybmFtZTpzdHJpbmc9XCJwcmFzc2Vza2hhZGthXCIpe1xuXG4gICAgLy8gZGVmaW5pbmcgZW5kcG9pbnRzOlxuXG4gICAgLy8gdXNlciBlbmRwb2ludFxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFVzZXIoKTpQcm9taXNlPElVc2VyPntcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3VzZXJuYW1lfWApO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICAvLyByZXBvcyBlbmRwb2ludFxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFJlcG9zKCk6UHJvbWlzZTxJUmVwb3NbXT57XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHt1c2VybmFtZX0vcmVwb3NgKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgLy8gZm9sbG93ZXJzIGVuZHBvaW50XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0Rm9sbG93ZXJzKCk6UHJvbWlzZTxJRm9sbG93ZXJbXT57XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHt1c2VybmFtZX0vZm9sbG93ZXJzYCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIC8vIGZvbGxvd2luZyBlbmRwb2ludFxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldEZvbGxvd2luZygpOlByb21pc2U8SUZvbGxvd2VyW10+e1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7dXNlcm5hbWV9L2ZvbGxvd2luZ2ApO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2dldFVzZXIsZ2V0UmVwb3MsZ2V0Rm9sbG93ZXJzLGdldEZvbGxvd2luZ31cbn1cblxuICAiLCJpbXBvcnQgeyBJRm9sbG93ZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi5cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZvbGxvd2Vyc1JlbmRlcihmb2xsb3dlcnM6SUZvbGxvd2VyW10pe1xuICAgIGNvbnN0IHJlbmRlcj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlbmRlclwiKVxuICAgIGNvbnN0IHVzZXJDYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHVzZXJDYXJkcy5pZD1cInVzZXJDYXJkc1wiO1xuICAgIFxuICAgIC8vIENyZWF0ZSBhbmQgYXBwZW5kIEhUTUwgZWxlbWVudHNcbiAgICBmb2xsb3dlcnMuZm9yRWFjaCgoZm9sbG93ZXI6SUZvbGxvd2VyKT0+e1xuICAgICAgICBjb25zdCB1c2VyQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB1c2VyQ2FyZC5pZD1cInVzZXJDYXJkXCI7XG5cbiAgICAgICAgdXNlckNhcmQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7Zm9sbG93ZXIuYXZhdGFyX3VybH1cIiBhbHQ9XCIke2ZvbGxvd2VyLmxvZ2lufVwiPlxuICAgICAgICAgICAgICAgIDxoMz4ke2ZvbGxvd2VyLmxvZ2lufTwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIke2ZvbGxvd2VyLmh0bWxfdXJsfVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0X2xpbmtcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIGA7XG4gICAgICAgIHVzZXJDYXJkcy5hcHBlbmRDaGlsZCh1c2VyQ2FyZClcblxuICAgIH0pXG5cbiAgICByZW5kZXIuaW5uZXJIVE1MPVwiXCJcbiAgICByZW5kZXIuYXBwZW5kKHVzZXJDYXJkcylcbn0iLCJpbXBvcnQgeyBJRm9sbG93ZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmb2xsb3dpbmdSZW5kZXIoZm9sbG93aW5nczpJRm9sbG93ZXJbXSl7XG4gICAgY29uc3QgcmVuZGVyPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVuZGVyXCIpXG4gICAgY29uc3QgdXNlckNhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdXNlckNhcmRzLmlkPVwidXNlckNhcmRzXCI7XG4gICAgXG4gICAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgSFRNTCBlbGVtZW50c1xuICAgIGZvbGxvd2luZ3MuZm9yRWFjaCgoZm9sbG93ZXI6SUZvbGxvd2VyKT0+e1xuICAgICAgICBjb25zdCB1c2VyQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB1c2VyQ2FyZC5pZD1cInVzZXJDYXJkXCI7XG5cbiAgICAgICAgdXNlckNhcmQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ZvbGxvd2VyLmF2YXRhcl91cmx9XCIgYWx0PVwiJHtmb2xsb3dlci5sb2dpbn1cIj5cbiAgICAgICAgICAgICAgICA8aDM+JHtmb2xsb3dlci5sb2dpbn08L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YSBocmVmPVwiJHtmb2xsb3dlci5odG1sX3VybH1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+XG4gICAgICAgICAgICAgICAgICAgIGluc2VydF9saW5rXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICBgO1xuICAgICAgICB1c2VyQ2FyZHMuYXBwZW5kQ2hpbGQodXNlckNhcmQpXG5cbiAgICB9KVxuXG4gICAgcmVuZGVyLmlubmVySFRNTD1cIlwiXG4gICAgcmVuZGVyLmFwcGVuZCh1c2VyQ2FyZHMpXG59IiwiaW1wb3J0IHsgSVJlcG9zLCBJVXNlciB9IGZyb20gXCIuLi9pbnRlcmZhY2VcIjtcblxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVySW5mbyh1c2VyOklVc2VyKXtcbiAgICBjb25zdCB7YXZhdGFyX3VybCxuYW1lLGh0bWxfdXJsOnVybCxiaW8scHVibGljX3JlcG9zLGZvbGxvd2Vycyxmb2xsb3dpbmcsYmxvZyx0d2l0dGVyX3VzZXJuYW1lfT11c2VyXG5cbiAgICAvLyBDcmVhdGUgdXNlciBwcm9maWxlIGNvbnRhaW5lclxuICAgIGNvbnN0IHVzZXJQcm9maWxlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItcHJvZmlsZScpO1xuICAgIGNvbnN0IHVzZXJBdmF0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB1c2VyQXZhdGFyLmlkID0gJ3VzZXItYXZhdGFyJztcbiAgICB1c2VyQXZhdGFyLnNyYyA9IGAke2F2YXRhcl91cmx9YDsgXG4gICAgdXNlckF2YXRhci5hbHQgPSAnVXNlciBBdmF0YXInO1xuXG4gICAgY29uc3QgdXNlckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB1c2VySW5mby5jbGFzc05hbWU9XCJ1c2VyLWluZm9cIjtcbiAgICB1c2VySW5mby5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoMj4ke25hbWV9PC9oMj5cbiAgICAgICAgPHA+JHtiaW99PC9wPlxuICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgPGEgaHJlZj0ke3VybH0gY2xhc3M9XCJzb2NpYWwtbGlua1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuID5TZWUgb24gR2l0SHViPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICBsaW5rXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICBgO1xuXG4gICAgY29uc3Qgc29jaWFsTGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzb2NpYWxMaW5rcy5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxhIGhyZWY9JHt0d2l0dGVyX3VzZXJuYW1lfSBjbGFzcz1cInNvY2lhbC1saW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCI+VHdpdHRlcjwvYT5cbiAgICAgICAgPGEgaHJlZj0ke2Jsb2d9IGNsYXNzPVwic29jaWFsLWxpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIj5CbG9nPC9hPlxuICAgIGA7XG5cbiAgICAvLyBBcHBlbmQgZWxlbWVudHMgdG8gdGhlIHVzZXIgcHJvZmlsZSBjb250YWluZXJcbiAgICB1c2VyUHJvZmlsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh1c2VyQXZhdGFyKTtcbiAgICB1c2VyUHJvZmlsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh1c2VySW5mbyk7XG4gICAgdXNlclByb2ZpbGVDb250YWluZXIuYXBwZW5kQ2hpbGQoc29jaWFsTGlua3MpO1xuXG4gICAgLy8gQ3JlYXRlIHJlcG9zaXRvcnkgc3RhdGlzdGljcyBjb250YWluZXJcbiAgICBjb25zdCByZXBvU3RhdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVwby1zdGF0cycpO1xuICAgIHJlcG9TdGF0c0NvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxwPiR7cHVibGljX3JlcG9zfSByZXBvczwvcD5cbiAgICAgICAgPHA+JHtmb2xsb3dlcnN9IGZvbGxvd2VyczwvcD5cbiAgICAgICAgPHA+JHtmb2xsb3dpbmd9IGZvbGxvd2luZzwvcD5cbiAgICBgO1xufSIsImltcG9ydCB7IElSZXBvcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclJlcG9zKHJlcG9zOklSZXBvc1tdKXtcbiAgICBjb25zdCByZW5kZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZW5kZXJcIilcbiAgICByZW5kZXIuaW5uZXJIVE1MPVwiXCJcbiAgICBjb25zdCByZXBvc2l0b3JpZXM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICByZXBvc2l0b3JpZXMuY2xhc3NOYW1lPVwicmVwb3NcIlxuICAgIHJlcG9zaXRvcmllcy5pZD1cInJlcG9zXCJcbiAgICByZW5kZXIuYXBwZW5kQ2hpbGQocmVwb3NpdG9yaWVzKVxuXG4gICAgcmVwb3MuZm9yRWFjaCgocmVwbzpJUmVwb3MpPT57XG4gICAgICAgIGNvbnN0IHJlcG9fY2FyZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcmVwb19jYXJkLmNsYXNzTmFtZT0ncmVwby1jYXJkJ1xuICAgICAgICByZXBvX2NhcmQuaW5uZXJIVE1MPVxuICAgICAgICBgXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMj4ke3JlcG8ubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgIDxwPiR7cmVwby5wcml2YXRlID8gJ1ByaXZhdGUnIDogJ1B1YmxpYyd9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cD4ke3JlcG8uZGVzY3JpcHRpb24gfHwgJ05vIGRlc2NyaXB0aW9uIGF2YWlsYWJsZS4nfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+XG4gICAgICAgICAgICAgICAgICAgIHN0YXJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+JHtyZXBvLnN0YXJnYXplcnNfY291bnR9PHNwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8c3Bhbj48aW1nIHNyYz1cIi4vZGlzdC9hc3NldHMvZm9yay1pY29uLnN2Z1wiPjwvc3Bhbj4gXG4gICAgICAgICAgICAgICAgPHNwYW4+JHtyZXBvLmZvcmtzX2NvdW50fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICAgICAgcmVwb3NpdG9yaWVzLmFwcGVuZENoaWxkKHJlcG9fY2FyZClcbiAgICAgICAgLy8gQWRkIGNsaWNrIGV2ZW50IHRvIHJlZGlyZWN0IHRvIHRoZSByZXBvc2l0b3J5IGxpbmtcbiAgICAgICAgcmVwb19jYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXBvLmh0bWxfdXJsO1xuICAgICAgICB9KTtcbiAgICB9KVxuXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHV0aWxzKCkge1xuICAvLyBUbyB0b2dnbGUgYmV0d2VlbiBkYXJrIGFuZCBsaWdodCBtb2RlO1xuICBjb25zdCB0b2dnbGVfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2dnbGUtYnRuXCIpO1xuICB0b2dnbGVfYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVNb2RlKTtcbiAgLy8gQ2hlY2sgdXNlcidzIHByZWZlcmVuY2UgZnJvbSBsb2NhbCBzdG9yYWdlXG4gIGNvbnN0IGlzTGlnaHRNb2RlOiBib29sZWFuID1cbiAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGlnaHRNb2RlXCIpKSB8fCB0cnVlO1xuXG4gIC8vIEFwcGx5IGluaXRpYWwgbW9kZVxuICBhcHBseU1vZGUoaXNMaWdodE1vZGUpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZU1vZGUoKSB7XG4gICAgY29uc3QgY3VycmVudE1vZGUgPSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImxpZ2h0LW1vZGVcIik7XG4gICAgYXBwbHlNb2RlKCFjdXJyZW50TW9kZSk7XG4gIH1cblxuICBmdW5jdGlvbiBhcHBseU1vZGUoaXNMaWdodE1vZGU6IGJvb2xlYW4pIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJsaWdodC1tb2RlXCIpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGlnaHRNb2RlXCIsIEpTT04uc3RyaW5naWZ5KGlzTGlnaHRNb2RlKSk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyBnZXREYXRhcyB9IGZyb20gXCIuL2FwaS9kYXRhXCI7XG5pbXBvcnQgeyByZW5kZXJJbmZvIH0gZnJvbSBcIi4vY29tcG9uZW50cy9JbmZvXCI7XG5pbXBvcnQgeyByZW5kZXJSZXBvcyB9IGZyb20gXCIuL2NvbXBvbmVudHMvUmVwb3NcIjtcbmltcG9ydCB7IGZvbGxvd2Vyc1JlbmRlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvRm9sbG93ZXJzXCI7XG5pbXBvcnQgeyBmb2xsb3dpbmdSZW5kZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL0ZvbGxvd2luZ1wiO1xuaW1wb3J0IHsgdXRpbHMgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG4vLyBkb2N1bWVudCBzZWxlY3RvcnM6XG5jb25zdCBzZWFyY2hfYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hfYnRuXCIpO1xuXG4vLyBzZWFyY2ggZnVuY3Rpb25hbGl0eVxuc2VhcmNoX2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2V0VmFsdWUpO1xuZnVuY3Rpb24gZ2V0VmFsdWUoZTogRXZlbnQpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBjb25zdCB1c2VybmFtZSA9IHNlYXJjaC52YWx1ZTtcbiAgc2VhcmNoLnZhbHVlID0gXCJcIjtcbiAgdXNlcm5hbWUgJiYgcmVuZGVyKHVzZXJuYW1lKTtcbn1cblxuLy8gVG8gcmVuZGVyO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbmRlcih1c2VybmFtZT86IHN0cmluZykge1xuICAvLyBzZWxlY3RvcnMgc2VsZWN0OlxuICBjb25zdCB1c2VyX3Byb2ZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VzZXItcHJvZmlsZVwiKTtcbiAgY29uc3QgcmVwb19zdGF0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVwby1zdGF0c1wiKTtcbiAgY29uc3QgcmVwb3NfaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlcG9zXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdlwiKTtcbiAgY29uc3QgcmVwb19idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlcG8tYnRuXCIpO1xuICBjb25zdCBmb2xsb3dlcnNfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb2xsb3dlcnMtYnRuXCIpO1xuICBjb25zdCBmb2xsb3dpbmdfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb2xsb3dpbmctYnRuXCIpO1xuXG4gIHVzZXJfcHJvZmlsZS5pbm5lckhUTUwgPSBcIlwiO1xuICByZXBvX3N0YXRzLmlubmVySFRNTCA9IFwiXCI7XG4gIGlmKHJlcG9zX2lkKXtcbiAgICByZXBvc19pZC5pbm5lckhUTUwgPSBcIlwiO1xuICB9XG5cbiAgLy8gZGF0YSByZXRyaWV2ZWxcbiAgdXNlcm5hbWUgPSB1c2VybmFtZSAmJiB1c2VybmFtZS5zcGxpdChcIiBcIikuam9pbihcIlwiKTtcbiAgY29uc3QgZGF0YXMgPSBnZXREYXRhcyh1c2VybmFtZSk7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBkYXRhcy5nZXRVc2VyKCk7XG4gIGNvbnN0IHJlcG9zID0gYXdhaXQgZGF0YXMuZ2V0UmVwb3MoKTtcbiAgY29uc3QgZm9sbG93ZXJzID0gYXdhaXQgZGF0YXMuZ2V0Rm9sbG93ZXJzKCk7XG4gIGNvbnN0IGZvbGxvd2luZyA9IGF3YWl0IGRhdGFzLmdldEZvbGxvd2luZygpO1xuXG4gIC8vIHJlbmRlcnMgaW5mb1xuICByZW5kZXJJbmZvKHVzZXIpO1xuXG4gIC8vIHJlbmRlcnMgbmF2aWdhdGlvbiBidXR0b25zXG4gIHJlcG9fYnRuLnRleHRDb250ZW50ID0gXCJSZXBvc2l0b3JpZXNcIjtcbiAgcmVwb19idG4uY2xhc3NOYW1lPVwiYWN0aXZlXCJcbiAgZm9sbG93ZXJzX2J0bi50ZXh0Q29udGVudCA9IFwiRm9sbG93ZXJzXCI7XG4gIGZvbGxvd2luZ19idG4udGV4dENvbnRlbnQgPSBcIkZvbGxvd2luZ1wiO1xuICAvLyBldmVudCBsaXN0ZW5lcnM6XG4gIHJlcG9fYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgcmVwb19idG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIGZvbGxvd2Vyc19idG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIGZvbGxvd2luZ19idG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIHJlbmRlclJlcG9zKHJlcG9zKVxuICB9KVxuICBmb2xsb3dlcnNfYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgcmVwb19idG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIGZvbGxvd2Vyc19idG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIGZvbGxvd2luZ19idG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIGZvbGxvd2Vyc1JlbmRlcihmb2xsb3dlcnMpXG4gIH0pXG4gIGZvbGxvd2luZ19idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICByZXBvX2J0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgZm9sbG93ZXJzX2J0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgZm9sbG93aW5nX2J0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgZm9sbG93aW5nUmVuZGVyKGZvbGxvd2luZylcbiAgfSlcblxuICAvLyBpbml0aWFsbHlcbiAgcmVuZGVyUmVwb3MocmVwb3MpO1xufVxuXG5yZW5kZXIoKTtcbnV0aWxzKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9