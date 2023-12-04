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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");

function followersRender(followers) {
    var render_id = document.getElementById("render");
    var userCards = document.createElement('div');
    userCards.id = "userCards";
    // Create and append HTML elements
    followers.forEach(function (follower) {
        var userCard = document.createElement('div');
        userCard.id = "userCard";
        userCard.addEventListener("click", function () {
            (0,___WEBPACK_IMPORTED_MODULE_0__.render)(follower.login);
        });
        userCard.innerHTML = "\n            <div>\n                <img class=\"skeleton\" src=\"".concat(follower.avatar_url, "\" alt=\"").concat(follower.login, "\">\n                <h3>").concat(follower.login, "</h3>\n            </div>\n            <a href=\"").concat(follower.html_url, "\" target=\"_blank\">\n                <span class=\"material-icons\">\n                    insert_link\n                </span>\n            </a>\n        ");
        userCards.appendChild(userCard);
    });
    render_id.innerHTML = "";
    render_id.append(userCards);
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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");

function followingRender(followings) {
    var render_id = document.getElementById("render");
    var userCards = document.createElement('div');
    userCards.id = "userCards";
    // Create and append HTML elements
    followings.forEach(function (follower) {
        var userCard = document.createElement('div');
        userCard.id = "userCard";
        userCard.addEventListener("click", function () {
            (0,___WEBPACK_IMPORTED_MODULE_0__.render)(follower.login);
        });
        userCard.innerHTML = "\n            <div >\n                <img class=\"skeleton\" src=\"".concat(follower.avatar_url, "\" alt=\"").concat(follower.login, "\">\n                <h3>").concat(follower.login, "</h3>\n            </div>\n            <a href=\"").concat(follower.html_url, "\" target=\"_blank\">\n                <span class=\"material-icons\">\n                    insert_link\n                </span>\n            </a>\n        ");
        userCards.appendChild(userCard);
    });
    render_id.innerHTML = "";
    render_id.append(userCards);
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
    userAvatar.className = "skeleton";
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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
        var user_profile, repo_stats, repos_id, render_id, nav, repo_btn, followers_btn, following_btn, datas, user, repos, followers, following;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user_profile = document.querySelector("#user-profile");
                    repo_stats = document.querySelector("#repo-stats");
                    repos_id = document.querySelector("#repos");
                    render_id = document.querySelector("#render");
                    nav = document.querySelector("#nav");
                    repo_btn = document.querySelector("#repo-btn");
                    followers_btn = document.querySelector("#followers-btn");
                    following_btn = document.querySelector("#following-btn");
                    user_profile.innerHTML = "";
                    render_id.innerHTML = "";
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
                    repo_btn.textContent = "Repositories (".concat(user.public_repos, ")");
                    repo_btn.className = "active";
                    followers_btn.textContent = "Followers (".concat(user.followers, ")");
                    followers_btn.classList.remove("active");
                    following_btn.textContent = "Following (".concat(user.following, ")");
                    following_btn.classList.remove("active");
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUV2QixTQUFTLFVBQVU7UUFDakIsSUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25FLFNBQVMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxTQUFTLFNBQVMsQ0FBQyxXQUFvQjtRQUNyQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDN0MsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7QUFDSCxDQUFDOzs7Ozs7O1VDcEJEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZmlsZS8uL3NyYy9hcGkvZGF0YS50cyIsIndlYnBhY2s6Ly9wcm9maWxlLy4vc3JjL2NvbXBvbmVudHMvRm9sbG93ZXJzLnRzIiwid2VicGFjazovL3Byb2ZpbGUvLi9zcmMvY29tcG9uZW50cy9Gb2xsb3dpbmcudHMiLCJ3ZWJwYWNrOi8vcHJvZmlsZS8uL3NyYy9jb21wb25lbnRzL0luZm8udHMiLCJ3ZWJwYWNrOi8vcHJvZmlsZS8uL3NyYy9jb21wb25lbnRzL1JlcG9zLnRzIiwid2VicGFjazovL3Byb2ZpbGUvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcHJvZmlsZS8uL3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly9wcm9maWxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2ZpbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2ZpbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9maWxlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvZmlsZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Byb2ZpbGUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Byb2ZpbGUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElSZXBvcyxJVXNlcixJRm9sbG93ZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlXCI7XG5cbi8vIGRlZmF1bHQgYXJndW1lbnQgcHJhc3Nlc2toYWRrYVxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFzKHVzZXJuYW1lOnN0cmluZz1cInByYXNzZXNraGFka2FcIil7XG5cbiAgICAvLyBkZWZpbmluZyBlbmRwb2ludHM6XG5cbiAgICAvLyB1c2VyIGVuZHBvaW50XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcigpOlByb21pc2U8SVVzZXI+e1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7dXNlcm5hbWV9YCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIC8vIHJlcG9zIGVuZHBvaW50XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UmVwb3MoKTpQcm9taXNlPElSZXBvc1tdPntcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3VzZXJuYW1lfS9yZXBvc2ApO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICAvLyBmb2xsb3dlcnMgZW5kcG9pbnRcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRGb2xsb3dlcnMoKTpQcm9taXNlPElGb2xsb3dlcltdPntcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3VzZXJuYW1lfS9mb2xsb3dlcnNgKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgLy8gZm9sbG93aW5nIGVuZHBvaW50XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0Rm9sbG93aW5nKCk6UHJvbWlzZTxJRm9sbG93ZXJbXT57XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHt1c2VybmFtZX0vZm9sbG93aW5nYCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIHJldHVybiB7Z2V0VXNlcixnZXRSZXBvcyxnZXRGb2xsb3dlcnMsZ2V0Rm9sbG93aW5nfVxufVxuXG4gICIsImltcG9ydCB7IElGb2xsb3dlciB9IGZyb20gXCIuLi9pbnRlcmZhY2VcIjtcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuLlwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9sbG93ZXJzUmVuZGVyKGZvbGxvd2VyczpJRm9sbG93ZXJbXSl7XG4gICAgY29uc3QgcmVuZGVyX2lkPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVuZGVyXCIpXG4gICAgY29uc3QgdXNlckNhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdXNlckNhcmRzLmlkPVwidXNlckNhcmRzXCI7XG4gICAgXG4gICAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgSFRNTCBlbGVtZW50c1xuICAgIGZvbGxvd2Vycy5mb3JFYWNoKChmb2xsb3dlcjpJRm9sbG93ZXIpPT57XG4gICAgICAgIGNvbnN0IHVzZXJDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHVzZXJDYXJkLmlkPVwidXNlckNhcmRcIjtcblxuICAgICAgICB1c2VyQ2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgICAgICAgICAgcmVuZGVyKGZvbGxvd2VyLmxvZ2luKVxuICAgICAgICB9KVxuXG4gICAgICAgIHVzZXJDYXJkLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInNrZWxldG9uXCIgc3JjPVwiJHtmb2xsb3dlci5hdmF0YXJfdXJsfVwiIGFsdD1cIiR7Zm9sbG93ZXIubG9naW59XCI+XG4gICAgICAgICAgICAgICAgPGgzPiR7Zm9sbG93ZXIubG9naW59PC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGEgaHJlZj1cIiR7Zm9sbG93ZXIuaHRtbF91cmx9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPlxuICAgICAgICAgICAgICAgICAgICBpbnNlcnRfbGlua1xuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgYDtcbiAgICAgICAgdXNlckNhcmRzLmFwcGVuZENoaWxkKHVzZXJDYXJkKVxuXG4gICAgfSlcblxuICAgIHJlbmRlcl9pZC5pbm5lckhUTUw9XCJcIlxuICAgIHJlbmRlcl9pZC5hcHBlbmQodXNlckNhcmRzKVxufVxuXG4iLCJpbXBvcnQgeyBJRm9sbG93ZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi5cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZvbGxvd2luZ1JlbmRlcihmb2xsb3dpbmdzOklGb2xsb3dlcltdKXtcbiAgICBjb25zdCByZW5kZXJfaWQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZW5kZXJcIilcbiAgICBjb25zdCB1c2VyQ2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB1c2VyQ2FyZHMuaWQ9XCJ1c2VyQ2FyZHNcIjtcbiAgICBcbiAgICAvLyBDcmVhdGUgYW5kIGFwcGVuZCBIVE1MIGVsZW1lbnRzXG4gICAgZm9sbG93aW5ncy5mb3JFYWNoKChmb2xsb3dlcjpJRm9sbG93ZXIpPT57XG4gICAgICAgIGNvbnN0IHVzZXJDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHVzZXJDYXJkLmlkPVwidXNlckNhcmRcIjtcblxuICAgICAgICB1c2VyQ2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgICAgICAgICAgcmVuZGVyKGZvbGxvd2VyLmxvZ2luKVxuICAgICAgICB9KVxuXG4gICAgICAgIHVzZXJDYXJkLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJza2VsZXRvblwiIHNyYz1cIiR7Zm9sbG93ZXIuYXZhdGFyX3VybH1cIiBhbHQ9XCIke2ZvbGxvd2VyLmxvZ2lufVwiPlxuICAgICAgICAgICAgICAgIDxoMz4ke2ZvbGxvd2VyLmxvZ2lufTwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIke2ZvbGxvd2VyLmh0bWxfdXJsfVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0X2xpbmtcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIGA7XG4gICAgICAgIHVzZXJDYXJkcy5hcHBlbmRDaGlsZCh1c2VyQ2FyZClcblxuICAgIH0pXG5cbiAgICByZW5kZXJfaWQuaW5uZXJIVE1MPVwiXCJcbiAgICByZW5kZXJfaWQuYXBwZW5kKHVzZXJDYXJkcylcbn0iLCJpbXBvcnQgeyBJUmVwb3MsIElVc2VyIH0gZnJvbSBcIi4uL2ludGVyZmFjZVwiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJJbmZvKHVzZXI6SVVzZXIpe1xuICAgIGNvbnN0IHthdmF0YXJfdXJsLG5hbWUsaHRtbF91cmw6dXJsLGJpbyxwdWJsaWNfcmVwb3MsZm9sbG93ZXJzLGZvbGxvd2luZyxibG9nLHR3aXR0ZXJfdXNlcm5hbWV9PXVzZXJcblxuICAgIC8vIENyZWF0ZSB1c2VyIHByb2ZpbGUgY29udGFpbmVyXG4gICAgY29uc3QgdXNlclByb2ZpbGVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1wcm9maWxlJyk7XG4gICAgY29uc3QgdXNlckF2YXRhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHVzZXJBdmF0YXIuaWQgPSAndXNlci1hdmF0YXInO1xuICAgIHVzZXJBdmF0YXIuc3JjID0gYCR7YXZhdGFyX3VybH1gOyBcbiAgICB1c2VyQXZhdGFyLmFsdCA9ICdVc2VyIEF2YXRhcic7XG4gICAgdXNlckF2YXRhci5jbGFzc05hbWU9XCJza2VsZXRvblwiO1xuXG4gICAgY29uc3QgdXNlckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB1c2VySW5mby5jbGFzc05hbWU9XCJ1c2VyLWluZm9cIjtcbiAgICB1c2VySW5mby5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoMj4ke25hbWV9PC9oMj5cbiAgICAgICAgPHA+JHtiaW99PC9wPlxuICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgPGEgaHJlZj0ke3VybH0gY2xhc3M9XCJzb2NpYWwtbGlua1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuID5TZWUgb24gR2l0SHViPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICBsaW5rXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICBgO1xuXG4gICAgY29uc3Qgc29jaWFsTGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzb2NpYWxMaW5rcy5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxhIGhyZWY9JHt0d2l0dGVyX3VzZXJuYW1lfSBjbGFzcz1cInNvY2lhbC1saW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCI+VHdpdHRlcjwvYT5cbiAgICAgICAgPGEgaHJlZj0ke2Jsb2d9IGNsYXNzPVwic29jaWFsLWxpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIj5CbG9nPC9hPlxuICAgIGA7XG5cbiAgICAvLyBBcHBlbmQgZWxlbWVudHMgdG8gdGhlIHVzZXIgcHJvZmlsZSBjb250YWluZXJcbiAgICB1c2VyUHJvZmlsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh1c2VyQXZhdGFyKTtcbiAgICB1c2VyUHJvZmlsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh1c2VySW5mbyk7XG4gICAgdXNlclByb2ZpbGVDb250YWluZXIuYXBwZW5kQ2hpbGQoc29jaWFsTGlua3MpO1xuXG4gICAgLy8gQ3JlYXRlIHJlcG9zaXRvcnkgc3RhdGlzdGljcyBjb250YWluZXJcbiAgICBjb25zdCByZXBvU3RhdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVwby1zdGF0cycpO1xuICAgIHJlcG9TdGF0c0NvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxwPiR7cHVibGljX3JlcG9zfSByZXBvczwvcD5cbiAgICAgICAgPHA+JHtmb2xsb3dlcnN9IGZvbGxvd2VyczwvcD5cbiAgICAgICAgPHA+JHtmb2xsb3dpbmd9IGZvbGxvd2luZzwvcD5cbiAgICBgO1xufSIsImltcG9ydCB7IElSZXBvcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclJlcG9zKHJlcG9zOklSZXBvc1tdKXtcbiAgICBjb25zdCByZW5kZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZW5kZXJcIilcbiAgICByZW5kZXIuaW5uZXJIVE1MPVwiXCJcbiAgICBjb25zdCByZXBvc2l0b3JpZXM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICByZXBvc2l0b3JpZXMuY2xhc3NOYW1lPVwicmVwb3NcIlxuICAgIHJlcG9zaXRvcmllcy5pZD1cInJlcG9zXCJcbiAgICByZW5kZXIuYXBwZW5kQ2hpbGQocmVwb3NpdG9yaWVzKVxuXG4gICAgcmVwb3MuZm9yRWFjaCgocmVwbzpJUmVwb3MpPT57XG4gICAgICAgIGNvbnN0IHJlcG9fY2FyZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcmVwb19jYXJkLmNsYXNzTmFtZT0ncmVwby1jYXJkJ1xuICAgICAgICByZXBvX2NhcmQuaW5uZXJIVE1MPVxuICAgICAgICBgXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMj4ke3JlcG8ubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgIDxwPiR7cmVwby5wcml2YXRlID8gJ1ByaXZhdGUnIDogJ1B1YmxpYyd9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cD4ke3JlcG8uZGVzY3JpcHRpb24gfHwgJ05vIGRlc2NyaXB0aW9uIGF2YWlsYWJsZS4nfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+XG4gICAgICAgICAgICAgICAgICAgIHN0YXJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+JHtyZXBvLnN0YXJnYXplcnNfY291bnR9PHNwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8c3Bhbj48aW1nIHNyYz1cIi4vZGlzdC9hc3NldHMvZm9yay1pY29uLnN2Z1wiPjwvc3Bhbj4gXG4gICAgICAgICAgICAgICAgPHNwYW4+JHtyZXBvLmZvcmtzX2NvdW50fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICAgICAgcmVwb3NpdG9yaWVzLmFwcGVuZENoaWxkKHJlcG9fY2FyZClcbiAgICAgICAgLy8gQWRkIGNsaWNrIGV2ZW50IHRvIHJlZGlyZWN0IHRvIHRoZSByZXBvc2l0b3J5IGxpbmtcbiAgICAgICAgcmVwb19jYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXBvLmh0bWxfdXJsO1xuICAgICAgICB9KTtcbiAgICB9KVxuXG59IiwiaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyBnZXREYXRhcyB9IGZyb20gXCIuL2FwaS9kYXRhXCI7XG5pbXBvcnQgeyByZW5kZXJJbmZvIH0gZnJvbSBcIi4vY29tcG9uZW50cy9JbmZvXCI7XG5pbXBvcnQgeyByZW5kZXJSZXBvcyB9IGZyb20gXCIuL2NvbXBvbmVudHMvUmVwb3NcIjtcbmltcG9ydCB7IGZvbGxvd2Vyc1JlbmRlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvRm9sbG93ZXJzXCI7XG5pbXBvcnQgeyBmb2xsb3dpbmdSZW5kZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL0ZvbGxvd2luZ1wiO1xuaW1wb3J0IHsgdXRpbHMgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG4vLyBkb2N1bWVudCBzZWxlY3RvcnM6XG5jb25zdCBzZWFyY2hfYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hfYnRuXCIpO1xuXG4vLyBzZWFyY2ggZnVuY3Rpb25hbGl0eVxuc2VhcmNoX2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2V0VmFsdWUpO1xuZnVuY3Rpb24gZ2V0VmFsdWUoZTogRXZlbnQpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBjb25zdCB1c2VybmFtZSA9IHNlYXJjaC52YWx1ZTtcbiAgc2VhcmNoLnZhbHVlID0gXCJcIjtcbiAgdXNlcm5hbWUgJiYgcmVuZGVyKHVzZXJuYW1lKTtcbn1cblxuLy8gVG8gcmVuZGVyO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbmRlcih1c2VybmFtZT86IHN0cmluZykge1xuICAvLyBzZWxlY3RvcnMgc2VsZWN0OlxuICBjb25zdCB1c2VyX3Byb2ZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VzZXItcHJvZmlsZVwiKTtcbiAgY29uc3QgcmVwb19zdGF0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVwby1zdGF0c1wiKTtcbiAgY29uc3QgcmVwb3NfaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlcG9zXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xuICBjb25zdCByZW5kZXJfaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlbmRlclwiKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZcIik7XG4gIGNvbnN0IHJlcG9fYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXBvLWJ0blwiKTtcbiAgY29uc3QgZm9sbG93ZXJzX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9sbG93ZXJzLWJ0blwiKTtcbiAgY29uc3QgZm9sbG93aW5nX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9sbG93aW5nLWJ0blwiKTtcblxuICB1c2VyX3Byb2ZpbGUuaW5uZXJIVE1MID0gXCJcIjtcbiAgcmVuZGVyX2lkLmlubmVySFRNTD1cIlwiO1xuICByZXBvX3N0YXRzLmlubmVySFRNTCA9IFwiXCI7XG4gIGlmKHJlcG9zX2lkKXtcbiAgICByZXBvc19pZC5pbm5lckhUTUwgPSBcIlwiO1xuICB9XG5cbiAgLy8gZGF0YSByZXRyaWV2ZWxcbiAgdXNlcm5hbWUgPSB1c2VybmFtZSAmJiB1c2VybmFtZS5zcGxpdChcIiBcIikuam9pbihcIlwiKTtcbiAgY29uc3QgZGF0YXMgPSBnZXREYXRhcyh1c2VybmFtZSk7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBkYXRhcy5nZXRVc2VyKCk7XG4gIGNvbnN0IHJlcG9zID0gYXdhaXQgZGF0YXMuZ2V0UmVwb3MoKTtcbiAgY29uc3QgZm9sbG93ZXJzID0gYXdhaXQgZGF0YXMuZ2V0Rm9sbG93ZXJzKCk7XG4gIGNvbnN0IGZvbGxvd2luZyA9IGF3YWl0IGRhdGFzLmdldEZvbGxvd2luZygpO1xuXG5cbiAgLy8gcmVuZGVycyBpbmZvXG4gIHJlbmRlckluZm8odXNlcik7XG5cbiAgLy8gcmVuZGVycyBuYXZpZ2F0aW9uIGJ1dHRvbnNcbiAgcmVwb19idG4udGV4dENvbnRlbnQgPSBgUmVwb3NpdG9yaWVzICgke3VzZXIucHVibGljX3JlcG9zfSlgO1xuICByZXBvX2J0bi5jbGFzc05hbWU9XCJhY3RpdmVcIjtcbiAgZm9sbG93ZXJzX2J0bi50ZXh0Q29udGVudCA9IGBGb2xsb3dlcnMgKCR7dXNlci5mb2xsb3dlcnN9KWA7XG4gIGZvbGxvd2Vyc19idG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgZm9sbG93aW5nX2J0bi50ZXh0Q29udGVudCA9IGBGb2xsb3dpbmcgKCR7dXNlci5mb2xsb3dpbmd9KWA7XG4gIGZvbGxvd2luZ19idG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgLy8gZXZlbnQgbGlzdGVuZXJzOlxuICByZXBvX2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgIHJlcG9fYnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICBmb2xsb3dlcnNfYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICBmb2xsb3dpbmdfYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICByZW5kZXJSZXBvcyhyZXBvcylcbiAgfSlcbiAgZm9sbG93ZXJzX2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgIHJlcG9fYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICBmb2xsb3dlcnNfYnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICBmb2xsb3dpbmdfYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICBmb2xsb3dlcnNSZW5kZXIoZm9sbG93ZXJzKVxuICB9KVxuICBmb2xsb3dpbmdfYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgcmVwb19idG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIGZvbGxvd2Vyc19idG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIGZvbGxvd2luZ19idG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIGZvbGxvd2luZ1JlbmRlcihmb2xsb3dpbmcpXG4gIH0pXG5cbiAgLy8gaW5pdGlhbGx5XG4gIHJlbmRlclJlcG9zKHJlcG9zKTtcbn1cblxucmVuZGVyKCk7XG51dGlscygpOyIsImV4cG9ydCBmdW5jdGlvbiB1dGlscygpIHtcbiAgLy8gVG8gdG9nZ2xlIGJldHdlZW4gZGFyayBhbmQgbGlnaHQgbW9kZTtcbiAgY29uc3QgdG9nZ2xlX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9nZ2xlLWJ0blwiKTtcbiAgdG9nZ2xlX2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlTW9kZSk7XG4gIC8vIENoZWNrIHVzZXIncyBwcmVmZXJlbmNlIGZyb20gbG9jYWwgc3RvcmFnZVxuICBjb25zdCBpc0xpZ2h0TW9kZTogYm9vbGVhbiA9XG4gICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxpZ2h0TW9kZVwiKSkgfHwgdHJ1ZTtcblxuICAvLyBBcHBseSBpbml0aWFsIG1vZGVcbiAgYXBwbHlNb2RlKGlzTGlnaHRNb2RlKTtcblxuICBmdW5jdGlvbiB0b2dnbGVNb2RlKCkge1xuICAgIGNvbnN0IGN1cnJlbnRNb2RlID0gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJsaWdodC1tb2RlXCIpO1xuICAgIGFwcGx5TW9kZSghY3VycmVudE1vZGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwbHlNb2RlKGlzTGlnaHRNb2RlOiBib29sZWFuKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibGlnaHQtbW9kZVwiKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxpZ2h0TW9kZVwiLCBKU09OLnN0cmluZ2lmeShpc0xpZ2h0TW9kZSkpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9