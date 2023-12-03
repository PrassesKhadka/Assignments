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
    return { getUser: getUser, getRepos: getRepos };
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
    userInfo.innerHTML = "\n        <h2>".concat(name, "</h2>\n        <p>").concat(bio, "</p>\n        <button><a href=").concat(url, " class=\"social-link\" target=\"_blank\">See on GitHub</a></button>\n    ");
    var socialLinks = document.createElement('div');
    socialLinks.innerHTML = "\n        <a href=\"https://twitter.com/johndoe\" class=\"social-link\" target=\"_blank\">Twitter</a>\n        <a href=\"https://linkedin.com/in/johndoe\" class=\"social-link\" target=\"_blank\">LinkedIn</a>\n    ";
    // Append elements to the user profile container
    userProfileContainer.appendChild(userAvatar);
    userProfileContainer.appendChild(userInfo);
    userProfileContainer.appendChild(socialLinks);
    // Create repository statistics container
    var repoStatsContainer = document.getElementById('repo-stats');
    repoStatsContainer.innerHTML = "\n        <p>".concat(public_repos, " Repos</p>\n        <p>").concat(followers, " followers</p>\n        <p>").concat(following, " following</p>\n    ");
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
    var repositories = document.querySelector(".repos");
    repos.forEach(function (repo) {
        var repo_card = document.createElement('div');
        repo_card.className = 'repo-card';
        repo_card.innerHTML =
            "\n        <div>\n            <div>\n                <h2>".concat(repo.name, "</h2>\n                <p>").concat(repo.private ? 'Private' : 'Public', "</p>\n            </div>\n            <p>").concat(repo.description || 'No description available.', "</p>\n        </div>\n        <div>\n            <p>Stars: ").concat(repo.stargazers_count, "</p>\n            <p>Forks: ").concat(repo.forks_count, "</p>\n        </div>\n        ");
        repositories.appendChild(repo_card);
        // Add click event to redirect to the repository link
        repo_card.addEventListener('click', function () {
            window.location.href = repo.html_url;
        });
    });
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
/* harmony import */ var _api_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/data */ "./src/api/data.ts");
/* harmony import */ var _components_Info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Info */ "./src/components/Info.ts");
/* harmony import */ var _components_Repos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Repos */ "./src/components/Repos.ts");
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
function render() {
    return __awaiter(this, void 0, void 0, function () {
        var datas, user, repos;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    datas = (0,_api_data__WEBPACK_IMPORTED_MODULE_0__.getDatas)();
                    return [4 /*yield*/, datas.getUser()];
                case 1:
                    user = _a.sent();
                    return [4 /*yield*/, datas.getRepos()];
                case 2:
                    repos = _a.sent();
                    // renders info
                    (0,_components_Info__WEBPACK_IMPORTED_MODULE_1__.renderInfo)(user);
                    (0,_components_Repos__WEBPACK_IMPORTED_MODULE_2__.renderRepos)(repos);
                    return [2 /*return*/];
            }
        });
    });
}
render();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7OztBQ0xzQztBQUNTO0FBQ0U7QUFDakQsc0JBQXNCO0FBRXRCLFNBQWUsTUFBTTs7Ozs7O29CQUNYLEtBQUssR0FBRyxtREFBUSxFQUFFLENBQUM7b0JBQ1oscUJBQU0sS0FBSyxDQUFDLE9BQU8sRUFBRTs7b0JBQTVCLElBQUksR0FBRyxTQUFxQjtvQkFDcEIscUJBQU0sS0FBSyxDQUFDLFFBQVEsRUFBRTs7b0JBQTlCLEtBQUssR0FBRyxTQUFzQjtvQkFFcEMsZUFBZTtvQkFDZiw0REFBVSxDQUFDLElBQUksQ0FBQztvQkFDaEIsOERBQVcsQ0FBQyxLQUFLLENBQUM7Ozs7O0NBQ3JCO0FBRUQsTUFBTSxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9maWxlLy4vc3JjL2FwaS9kYXRhLnRzIiwid2VicGFjazovL3Byb2ZpbGUvLi9zcmMvY29tcG9uZW50cy9JbmZvLnRzIiwid2VicGFjazovL3Byb2ZpbGUvLi9zcmMvY29tcG9uZW50cy9SZXBvcy50cyIsIndlYnBhY2s6Ly9wcm9maWxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2ZpbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2ZpbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9maWxlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvZmlsZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJUmVwb3MsSVVzZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlXCI7XG5cbi8vIGRlZmF1bHQgYXJndW1lbnQgcHJhc3Nlc2toYWRrYVxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFzKHVzZXJuYW1lOnN0cmluZz1cInByYXNzZXNraGFka2FcIil7XG5cbiAgICAvLyBkZWZpbmluZyBlbmRwb2ludHM6XG5cbiAgICAvLyB1c2VyIGVuZHBvaW50XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcigpOlByb21pc2U8SVVzZXI+e1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7dXNlcm5hbWV9YCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIC8vIHJlcG9zIGVuZHBvaW50XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UmVwb3MoKTpQcm9taXNlPElSZXBvc1tdPntcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3VzZXJuYW1lfS9yZXBvc2ApO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICAvLyAvLyBmb2xsb3dlciBlbmRwb2ludFxuICAgIC8vIGFzeW5jIGZ1bmN0aW9uIGdldEZvbGxvd2Vycygpe1xuICAgIC8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7dXNlcm5hbWV9YCk7XG4gICAgLy8gICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAvLyAgICAgdXNlckRhdGE9ey4uLmRhdGF9O1xuICAgIC8vIH1cblxuICAgIC8vIC8vIGZvbGxvd2luZyBlbmRwb2ludCBcbiAgICAvLyBmdW5jdGlvbiBnZXRGb2xsb3dpbmcoKXtcbiAgICAvLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3VzZXJuYW1lfWApO1xuICAgIC8vICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgLy8gICAgIHVzZXJEYXRhPXsuLi5kYXRhfTtcbiAgICAvLyB9XG5cbiAgICByZXR1cm4ge2dldFVzZXIsZ2V0UmVwb3N9XG59XG5cbiAgIiwiaW1wb3J0IHsgSVJlcG9zLCBJVXNlciB9IGZyb20gXCIuLi9pbnRlcmZhY2VcIjtcblxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVySW5mbyh1c2VyOklVc2VyKXtcbiAgICBjb25zdCB7YXZhdGFyX3VybCxuYW1lLGh0bWxfdXJsOnVybCxiaW8scHVibGljX3JlcG9zLGZvbGxvd2Vycyxmb2xsb3dpbmcsYmxvZyx0d2l0dGVyX3VzZXJuYW1lfT11c2VyXG5cbiAgICAvLyBDcmVhdGUgdXNlciBwcm9maWxlIGNvbnRhaW5lclxuICAgIGNvbnN0IHVzZXJQcm9maWxlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItcHJvZmlsZScpO1xuICAgIGNvbnN0IHVzZXJBdmF0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB1c2VyQXZhdGFyLmlkID0gJ3VzZXItYXZhdGFyJztcbiAgICB1c2VyQXZhdGFyLnNyYyA9IGAke2F2YXRhcl91cmx9YDsgXG4gICAgdXNlckF2YXRhci5hbHQgPSAnVXNlciBBdmF0YXInO1xuXG4gICAgY29uc3QgdXNlckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB1c2VySW5mby5jbGFzc05hbWU9XCJ1c2VyLWluZm9cIjtcbiAgICB1c2VySW5mby5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoMj4ke25hbWV9PC9oMj5cbiAgICAgICAgPHA+JHtiaW99PC9wPlxuICAgICAgICA8YnV0dG9uPjxhIGhyZWY9JHt1cmx9IGNsYXNzPVwic29jaWFsLWxpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TZWUgb24gR2l0SHViPC9hPjwvYnV0dG9uPlxuICAgIGA7XG5cbiAgICBjb25zdCBzb2NpYWxMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNvY2lhbExpbmtzLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vam9obmRvZVwiIGNsYXNzPVwic29jaWFsLWxpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIj5Ud2l0dGVyPC9hPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9saW5rZWRpbi5jb20vaW4vam9obmRvZVwiIGNsYXNzPVwic29jaWFsLWxpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIj5MaW5rZWRJbjwvYT5cbiAgICBgO1xuXG4gICAgLy8gQXBwZW5kIGVsZW1lbnRzIHRvIHRoZSB1c2VyIHByb2ZpbGUgY29udGFpbmVyXG4gICAgdXNlclByb2ZpbGVDb250YWluZXIuYXBwZW5kQ2hpbGQodXNlckF2YXRhcik7XG4gICAgdXNlclByb2ZpbGVDb250YWluZXIuYXBwZW5kQ2hpbGQodXNlckluZm8pO1xuICAgIHVzZXJQcm9maWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNvY2lhbExpbmtzKTtcblxuICAgIC8vIENyZWF0ZSByZXBvc2l0b3J5IHN0YXRpc3RpY3MgY29udGFpbmVyXG4gICAgY29uc3QgcmVwb1N0YXRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlcG8tc3RhdHMnKTtcbiAgICByZXBvU3RhdHNDb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgICAgICA8cD4ke3B1YmxpY19yZXBvc30gUmVwb3M8L3A+XG4gICAgICAgIDxwPiR7Zm9sbG93ZXJzfSBmb2xsb3dlcnM8L3A+XG4gICAgICAgIDxwPiR7Zm9sbG93aW5nfSBmb2xsb3dpbmc8L3A+XG4gICAgYDtcbn0iLCJpbXBvcnQgeyBJUmVwb3MgfSBmcm9tIFwiLi4vaW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJSZXBvcyhyZXBvczpJUmVwb3NbXSl7XG4gICAgY29uc3QgcmVwb3NpdG9yaWVzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVwb3NcIilcbiAgICByZXBvcy5mb3JFYWNoKChyZXBvOklSZXBvcyk9PntcbiAgICAgICAgY29uc3QgcmVwb19jYXJkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByZXBvX2NhcmQuY2xhc3NOYW1lPSdyZXBvLWNhcmQnXG4gICAgICAgIHJlcG9fY2FyZC5pbm5lckhUTUw9XG4gICAgICAgIGBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgyPiR7cmVwby5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgPHA+JHtyZXBvLnByaXZhdGUgPyAnUHJpdmF0ZScgOiAnUHVibGljJ308L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwPiR7cmVwby5kZXNjcmlwdGlvbiB8fCAnTm8gZGVzY3JpcHRpb24gYXZhaWxhYmxlLid9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPlN0YXJzOiAke3JlcG8uc3RhcmdhemVyc19jb3VudH08L3A+XG4gICAgICAgICAgICA8cD5Gb3JrczogJHtyZXBvLmZvcmtzX2NvdW50fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICAgICAgcmVwb3NpdG9yaWVzLmFwcGVuZENoaWxkKHJlcG9fY2FyZClcbiAgICAgICAgLy8gQWRkIGNsaWNrIGV2ZW50IHRvIHJlZGlyZWN0IHRvIHRoZSByZXBvc2l0b3J5IGxpbmtcbiAgICAgICAgcmVwb19jYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXBvLmh0bWxfdXJsO1xuICAgICAgICB9KTtcbiAgICB9KVxuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7IGdldERhdGFzIH0gZnJvbSBcIi4vYXBpL2RhdGFcIjtcbmltcG9ydCB7IHJlbmRlckluZm8gfSBmcm9tIFwiLi9jb21wb25lbnRzL0luZm9cIjtcbmltcG9ydCB7IHJlbmRlclJlcG9zIH0gZnJvbSBcIi4vY29tcG9uZW50cy9SZXBvc1wiO1xuLy8gZG9jdW1lbnQgc2VsZWN0b3JzOlxuXG5hc3luYyBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgY29uc3QgZGF0YXMgPSBnZXREYXRhcygpO1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYXRhcy5nZXRVc2VyKCk7XG4gICAgY29uc3QgcmVwb3MgPSBhd2FpdCBkYXRhcy5nZXRSZXBvcygpO1xuXG4gICAgLy8gcmVuZGVycyBpbmZvXG4gICAgcmVuZGVySW5mbyh1c2VyKVxuICAgIHJlbmRlclJlcG9zKHJlcG9zKVxufVxuXG5yZW5kZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==