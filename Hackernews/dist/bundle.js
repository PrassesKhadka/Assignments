(()=>{"use strict";var e=function(e,t,n,r){return new(n||(n=Promise))((function(c,o){function i(e){try{s(r.next(e))}catch(e){o(e)}}function a(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}s((r=r.apply(e,t||[])).next())}))},t=function(e,t){var n,r,c,o,i={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(i=0)),i;)try{if(n=1,r&&(c=2&a[0]?r.return:a[0]?r.throw||((c=r.return)&&c.call(r),0):r.next)&&!(c=c.call(r,a[1])).done)return c;switch(r=0,c&&(a=[2&a[0],c.value]),a[0]){case 0:case 1:c=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((c=(c=i.trys).length>0&&c[c.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!c||a[1]>c[0]&&a[1]<c[3])){i.label=a[1];break}if(6===a[0]&&i.label<c[1]){i.label=c[1],c=a;break}if(c&&i.label<c[2]){i.label=c[2],i.ops.push(a);break}c[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=c=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};function n(){return{getStories:function(){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()]}}))}))},getStory:function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,fetch("https://hacker-news.firebaseio.com/v0/item/".concat(n,".json?print=pretty"))];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()]}}))}))},getComment:function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,fetch("https://hacker-news.firebaseio.com/v0/item/".concat(n,".json?print=pretty"))];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()]}}))}))}}}var r=function(e,t,n,r){return new(n||(n=Promise))((function(c,o){function i(e){try{s(r.next(e))}catch(e){o(e)}}function a(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}s((r=r.apply(e,t||[])).next())}))},c=function(e,t){var n,r,c,o,i={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(i=0)),i;)try{if(n=1,r&&(c=2&a[0]?r.return:a[0]?r.throw||((c=r.return)&&c.call(r),0):r.next)&&!(c=c.call(r,a[1])).done)return c;switch(r=0,c&&(a=[2&a[0],c.value]),a[0]){case 0:case 1:c=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((c=(c=i.trys).length>0&&c[c.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!c||a[1]>c[0]&&a[1]<c[3])){i.label=a[1];break}if(6===a[0]&&i.label<c[1]){i.label=c[1],c=a;break}if(c&&i.label<c[2]){i.label=c[2],i.ops.push(a);break}c[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=c=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},o=function(e){void 0===e&&(e=10);var t=1,o=1,i=[],a=[],s=[],u={};function l(){return r(this,void 0,void 0,(function(){var o,l,d,f,h,p=this;return c(this,(function(v){switch(v.label){case 0:return 0!==i.length?[3,2]:[4,n().getStories()];case 1:i=v.sent(),v.label=2;case 2:return o=(t-1)*e,l=t*e,a=i.slice(o,l),u[t.toString()]?(s=u[t],[3,7]):[3,3];case 3:return[4,a.map((function(e){return r(p,void 0,void 0,(function(){return c(this,(function(t){switch(t.label){case 0:return[4,n().getStory(e)];case 1:return[2,t.sent()]}}))}))}))];case 4:return d=v.sent(),[4,Promise.all(d)];case 5:return s=v.sent(),f=u,h=t.toString(),[4,Promise.all(d)];case 6:f[h]=v.sent(),v.label=7;case 7:return[2]}}))}))}function d(e){return r(this,void 0,void 0,(function(){var t,o=this;return c(this,(function(i){return t=document.createElement("div"),e.forEach((function(e){return r(o,void 0,void 0,(function(){function o(){return r(this,void 0,void 0,(function(){var e;return c(this,(function(t){switch(t.label){case 0:return 0!==i.kids.length?[3,1]:(h.removeEventListener("click",o),[3,3]);case 1:return[4,d(i.kids)];case 2:e=t.sent(),a.append(e),t.label=3;case 3:return h.removeEventListener("click",o),[2]}}))}))}var i,a,s,u,l,f,h;return c(this,(function(r){switch(r.label){case 0:return[4,n().getComment(e)];case 1:return i=r.sent(),console.log(i),(a=document.createElement("div")).classList.add("comment"),(s=document.createElement("div")).innerHTML=i.text,(u=document.createElement("p")).textContent="By: ".concat(i.by),l=document.createElement("p"),f=new Date(i.time).toLocaleString(),l.textContent="Time: ".concat(f),(h=document.createElement("p")).textContent="no.of comments: ".concat(i.kids?i.kids.length:"0"),a.appendChild(s),a.appendChild(u),a.appendChild(l),a.appendChild(h),t.append(a),h.addEventListener("click",o),[2]}}))}))})),[2,t]}))}))}return{indexNo:t,nextPage:function(){t=9+(o=o%10+1)},previousPage:function(){o--,(t=o-9)<1&&(t=(o=10)-9)},goToIndex:function(e){return t=e},render:function(){return r(this,void 0,void 0,(function(){var e;return c(this,(function(t){switch(t.label){case 0:return e=document.querySelector(".inner-container"),function(){for(var e=document.querySelector(".inner-container"),t=0;t<5;t++){var n=document.createElement("div");n.innerHTML='\n                <div class="box">\n                    <div class="skeleton skeleton-text"></div>\n                    <div class="skeleton skeleton-text"></div>\n                    <div class="skeleton skeleton-text"></div>\n                    <div class="skeleton skeleton-text"></div>\n                    <div class="skeleton skeleton-text"></div>\n                </div>\n            ',e.appendChild(n)}}(),[4,l()];case 1:return t.sent(),e.innerHTML="",s.forEach((function(t){var n=document.createElement("div");n.classList.add("box");var o=document.createElement("h2");o.textContent=t.title;var i=document.createElement("p");i.textContent="By: ".concat(t.by);var a=document.createElement("p"),s=document.createElement("a");s.href=t.url,s.textContent=t.url,a.appendChild(document.createTextNode("URL: ")),a.appendChild(s);var u=document.createElement("p"),l=new Date(t.time).toLocaleString();u.textContent="Time: ".concat(l),n.appendChild(o),n.appendChild(i),n.appendChild(a),n.appendChild(u),e.appendChild(n),n.addEventListener("click",(function(){!function(e){r(this,void 0,void 0,(function(){var t,n,r,o,i,a,s,u,l,f,h;return c(this,(function(c){switch(c.label){case 0:return t=document.querySelector(".inner-container"),(n=document.createElement("div")).classList.add("comment-box"),t.innerHTML="",(r=document.createElement("div")).classList.add("box"),(o=document.createElement("h2")).textContent=e.title,(i=document.createElement("p")).textContent="By: ".concat(e.by),a=document.createElement("p"),(s=document.createElement("a")).href=e.url,s.textContent=e.url,a.appendChild(document.createTextNode("URL: ")),a.appendChild(s),u=document.createElement("p"),l=new Date(e.time).toLocaleString(),u.textContent="Time: ".concat(l),(f=document.createElement("p")).textContent="no.of comments: ".concat(e.kids.length),r.appendChild(o),r.appendChild(i),r.appendChild(a),r.appendChild(u),r.appendChild(f),0!==e.kids.length?[3,1]:(n.innerHTML="No Comments to Show",[3,3]);case 1:return[4,d(e.kids)];case 2:h=c.sent(),n.append(h),c.label=3;case 3:return t.append(r,n),[2]}}))}))}(t)}))})),[2]}}))}))}}}(5),i=o.nextPage,a=o.previousPage,s=o.goToIndex,u=o.render,l=document.querySelector(".inner-container"),d=document.querySelectorAll(".nav-btn"),f=document.querySelector(".next-btn"),h=document.querySelector(".previous-btn");d.forEach((function(e,t){e.addEventListener("click",(function(){l.innerHTML="",s(t+1),u(),d.forEach((function(e){e.classList.remove("active")})),e.classList.add("active")}))})),f.addEventListener("click",(function(){l.innerHTML="",i(),u();var e=1;d.forEach((function(t,n){t.classList.contains("active")&&(e=n),t.classList.remove("active")})),d.forEach((function(t,n){n===e+1&&t.classList.add("active")}))})),h.addEventListener("click",(function(){l.innerHTML="",a(),u();var e=1;d.forEach((function(t,n){t.classList.contains("active")&&(e=n),t.classList.remove("active")})),d.forEach((function(t,n){0!=e&&n===e-1&&t.classList.add("active"),0===e&&0===n&&t.classList.add("active")}))})),u()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly9oYWNrZXJuZXdzLy4vc3JjL2FwaS9kYXRhLnRzIiwid2VicGFjazovL2hhY2tlcm5ld3MvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vaGFja2VybmV3cy8uL3NyYy9mYWN0b3JpZXMvcGFnZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJcmV0dXJuR2V0Q29tbWVudHMsIElyZXR1cm5HZXRTdG9yeSB9IGZyb20gXCIuLi9pbnRlcmZhY2VcIjtcblxuaW50ZXJmYWNlIElyZXR1cm5HZXREYXRhe1xuICAgIGdldFN0b3JpZXM6KCk9PlByb21pc2U8bnVtYmVyW10+O1xuICAgIGdldFN0b3J5OihpZDpudW1iZXIpPT5Qcm9taXNlPElyZXR1cm5HZXRTdG9yeT47XG4gICAgZ2V0Q29tbWVudDooaWQ6bnVtYmVyKT0+UHJvbWlzZTxJcmV0dXJuR2V0Q29tbWVudHM+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YSgpOklyZXR1cm5HZXREYXRhe1xuICAgIC8vIGVuZHBvaW50czpcblxuICAgIC8vIHRvcCA1MDAgc3RvcmllcyBlbmRwb2ludHM6XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0U3RvcmllcygpOiBQcm9taXNlPG51bWJlcltdPntcbiAgICAgICAgY29uc3QgcmVzcG9uc2U9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9oYWNrZXItbmV3cy5maXJlYmFzZWlvLmNvbS92MC90b3BzdG9yaWVzLmpzb24/cHJpbnQ9cHJldHR5XCIpXG4gICAgICAgIGNvbnN0IGRhdGE9YXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICAvLyBlYWNoIHN0b3J5XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0U3RvcnkoaWQ6bnVtYmVyKTpQcm9taXNlPElyZXR1cm5HZXRTdG9yeT57XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlPWF3YWl0IGZldGNoKGBodHRwczovL2hhY2tlci1uZXdzLmZpcmViYXNlaW8uY29tL3YwL2l0ZW0vJHtpZH0uanNvbj9wcmludD1wcmV0dHlgKVxuICAgICAgICBjb25zdCBkYXRhPWF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgLy8gZWFjaCBjb21tZW50XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0Q29tbWVudChpZDpudW1iZXIpOlByb21pc2U8SXJldHVybkdldENvbW1lbnRzPntcbiAgICAgICAgY29uc3QgcmVzcG9uc2U9YXdhaXQgZmV0Y2goYGh0dHBzOi8vaGFja2VyLW5ld3MuZmlyZWJhc2Vpby5jb20vdjAvaXRlbS8ke2lkfS5qc29uP3ByaW50PXByZXR0eWApXG4gICAgICAgIGNvbnN0IGRhdGE9YXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtnZXRTdG9yaWVzLGdldFN0b3J5LGdldENvbW1lbnR9XG59XG4iLCJpbXBvcnQgeyBnZXREYXRhIH0gZnJvbSBcIi4vYXBpL2RhdGFcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwiLi9mYWN0b3JpZXMvcGFnZVwiO1xuXG4vLyBLZWVwaW5nIDUgc3RvcmllcyBvbiBlYWNoIHBhZ2U7XG5jb25zdCB7IG5leHRQYWdlLCBwcmV2aW91c1BhZ2UsIGdvVG9JbmRleCwgcmVuZGVyIH0gPSBQYWdlKDUpO1xuXG4vLyBzZWxlY3RvcnM6XG5jb25zdCBpbm5lcl9jb250YWluZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbm5lci1jb250YWluZXJcIilcbmNvbnN0IG5hdmlnYXRpb25zPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWJ0blwiKVxuY29uc3QgbmV4dF9idG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXh0LWJ0blwiKVxuY29uc3QgcHJldl9idG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmV2aW91cy1idG5cIilcblxuXG4vLyBGb3IgZXZlbnQgTGlzdGVuZXJzIFxubmF2aWdhdGlvbnMuZm9yRWFjaCgoZWxlbWVudDpIVE1MQnV0dG9uRWxlbWVudCxpbmRleDpudW1iZXIpPT57XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgICAgICBpbm5lcl9jb250YWluZXIuaW5uZXJIVE1MPVwiXCJcbiAgICAgICAgZ29Ub0luZGV4KGluZGV4KzEpXG4gICAgICAgIHJlbmRlcigpXG5cbiAgICAgICAgLy8gYWRkIGFjdGl2ZSBjbGFzcyB0byBzaG93LT50aGF0IHNwZWNpZmljIGJ1dHRvbiBhY3RpdmUgd2hlbiBjbGlja2VkO1xuICAgICAgICBuYXZpZ2F0aW9ucy5mb3JFYWNoKChidG4pPT57XG4gICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuXG4gICAgICAgIH0pXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKSBcbiAgICB9KVxufSlcblxubmV4dF9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICBpbm5lcl9jb250YWluZXIuaW5uZXJIVE1MPVwiXCJcbiAgICBuZXh0UGFnZSgpXG4gICAgcmVuZGVyKClcblxuICAgIC8vIFRvIGFkZCBhY3RpdmUgY2xhc3MgdG8gdGhlIGJ1dHRvbnNcbiAgICBsZXQgaW5kZXg9MTtcbiAgICBuYXZpZ2F0aW9ucy5mb3JFYWNoKChidG4saSk9PntcbiAgICAgICAgaWYoYnRuLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSl7XG4gICAgICAgICAgICBpbmRleD1pXG4gICAgICAgIH1cbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICB9KVxuICAgIG5hdmlnYXRpb25zLmZvckVhY2goKGJ0bixpKT0+e1xuICAgICAgICBpZihpPT09aW5kZXgrMSlcbiAgICAgICAge1xuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICAgICAgfVxuXG4gICAgfSlcbn0pXG5wcmV2X2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgIGlubmVyX2NvbnRhaW5lci5pbm5lckhUTUw9XCJcIlxuICAgIHByZXZpb3VzUGFnZSgpXG4gICAgcmVuZGVyKClcblxuICAgIC8vIFRvIGFkZCBhY3RpdmUgY2xhc3MgdG8gdGhlIGJ1dHRvbnNcbiAgICBsZXQgaW5kZXg9MTtcbiAgICBuYXZpZ2F0aW9ucy5mb3JFYWNoKChidG4saSk9PntcbiAgICAgICAgaWYoYnRuLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSl7XG4gICAgICAgICAgICBpbmRleD1pXG4gICAgICAgIH1cbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICB9KVxuICAgIG5hdmlnYXRpb25zLmZvckVhY2goKGJ0bixpKT0+e1xuICAgICAgICBpZihpbmRleCE9MCAmJiBpPT09aW5kZXgtMSlcbiAgICAgICAge1xuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICAgICAgfVxuICAgICAgICBpZihpbmRleD09PTAgJiYgaT09PTApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgICAgIH1cblxuICAgIH0pXG59KVxuXG5cbnJlbmRlcigpO1xuIiwiaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gXCIuLi9hcGkvZGF0YVwiO1xuaW1wb3J0IHsgSXJldHVybkdldENvbW1lbnRzLCBJcmV0dXJuR2V0U3RvcnkgfSBmcm9tIFwiLi4vaW50ZXJmYWNlXCI7XG5cbmludGVyZmFjZSBJcmV0dXJuUGFnZSB7XG4gIGluZGV4Tm86IG51bWJlcjtcbiAgbmV4dFBhZ2U6ICgpID0+IHZvaWQ7XG4gIHByZXZpb3VzUGFnZTogKCkgPT4gdm9pZDtcbiAgZ29Ub0luZGV4OiAobm86IG51bWJlcikgPT4gdm9pZDtcbiAgcmVuZGVyOiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgSXN0b3J5Q2FjaGUge1xuICBba2V5OiBzdHJpbmddOiBJcmV0dXJuR2V0U3RvcnlbXTtcbn1cblxuLy8gYXMgZGVmYXVsdCBlYWNoIGluZGV4IGhhcyAxMCBzdG9yaWVzXG5leHBvcnQgZnVuY3Rpb24gUGFnZShlYWNoSW5kZXg6IG51bWJlciA9IDEwKTogSXJldHVyblBhZ2Uge1xuICAgIC8vIGJ1dHRvbnNcbiAgbGV0IHRvdGFsSW5kZXggPSA1MDtcbiAgbGV0IGluZGV4Tm8gPSAxO1xuICAgIC8vcGFnZSBpcyB0aGUgcGFnZSBpLmUgbmF2LWJhciAxLTEwIGlzIHBhZ2UgMSBhbm90aGVyIDExLTIwIGlzIHBhZ2UgMiBzaW1pbGFybHkgMTAgcGFnZXNcbiAgICBsZXQgdG90YWxQYWdlPTEwO1xuICAgIGxldCBwYWdlPTE7XG5cbiAgLy8gYWxsIHN0b3JpZXNcbiAgbGV0IHN0b3JpZXM6IG51bWJlcltdID0gW107XG4gIC8vIGNob3NlbiBzdG9yaWVzIGZvciB0aGlzIHBhZ2VcbiAgbGV0IHRvcFN0b3JpZXM6IG51bWJlcltdID0gW107XG4gIGxldCBzdG9yeTogSXJldHVybkdldFN0b3J5W10gPSBbXTtcbiAgbGV0IHN0b3J5Q2FjaGU6IElzdG9yeUNhY2hlID0ge307XG5cbiAgY29uc3QgbmV4dFBhZ2UgPSAoKSA9PnsgXG4gICAgICAgIHBhZ2U9cGFnZSV0b3RhbFBhZ2UgKzE7XG4gICAgICAgIGluZGV4Tm89cGFnZSs5O1xuXG4gIH07XG4gIGNvbnN0IHByZXZpb3VzUGFnZSA9ICgpID0+IHtcbiAgICBwYWdlLS07XG4gICAgaW5kZXhObz1wYWdlLTk7XG4gICAgaWYgKGluZGV4Tm8gPCAxKVxuICAgIHtcbiAgICAgICAgcGFnZT10b3RhbFBhZ2U7XG4gICAgICAgIGluZGV4Tm89cGFnZS05OyAgICAgICAgXG4gICAgfSBcbiAgfTtcblxuICBjb25zdCBnb1RvSW5kZXggPSAobm86IG51bWJlcikgPT4gKGluZGV4Tm8gPSBubyk7XG5cbiBcblxuICAvLyBkYXRhIGZpbHRlcmVkIGJhc2VkIG9uIHRoZSBpbmRleE5vLiBFZzpmb3IgZmlyc3QgcGFnZSBvbmx5IDAtOSBkYXRhIGdpdmVuXG4gIGFzeW5jIGZ1bmN0aW9uIGRhdGFGaWx0ZXIoKSB7XG4gICAgLy8gRmV0Y2ggdGhlIDUwMCB0b3Agc3Rvcmllc1xuICAgIGlmIChzdG9yaWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc3RvcmllcyA9IGF3YWl0IGdldERhdGEoKS5nZXRTdG9yaWVzKCk7XG4gICAgfVxuICAgIGxldCBzdGFydCA9IChpbmRleE5vIC0gMSkgKiBlYWNoSW5kZXg7XG4gICAgbGV0IGVuZCA9IGluZGV4Tm8gKiBlYWNoSW5kZXg7XG4gICAgLy8gT25seSBrZWVwIHRoZSBzdG9yaWVzIHRoYXQgd2UgbmVlZCBpbiB0aGlzIHBhZ2UgI2lkJ3NcbiAgICB0b3BTdG9yaWVzID0gc3Rvcmllcy5zbGljZShzdGFydCwgZW5kKTtcblxuICAgIC8vIGZldGNoIHRoZSBzdG9yeVxuXG4gICAgLy8gY2FjaGluZ1xuICAgIGlmIChzdG9yeUNhY2hlW2luZGV4Tm8udG9TdHJpbmcoKV0pIHtcbiAgICAgIHN0b3J5ID0gc3RvcnlDYWNoZVtpbmRleE5vXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3RvcnlQcm9taXNlID0gYXdhaXQgdG9wU3Rvcmllcy5tYXAoYXN5bmMgKGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IGVhY2hTdG9yeSA9IGF3YWl0IGdldERhdGEoKS5nZXRTdG9yeShpZCk7XG4gICAgICAgIHJldHVybiBlYWNoU3Rvcnk7XG4gICAgICB9KTtcbiAgICAgIHN0b3J5ID0gYXdhaXQgUHJvbWlzZS5hbGwoc3RvcnlQcm9taXNlKTtcbiAgICAgIC8vIGNhY2hlXG4gICAgICBzdG9yeUNhY2hlW2luZGV4Tm8udG9TdHJpbmcoKV0gPSBhd2FpdCBQcm9taXNlLmFsbChzdG9yeVByb21pc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRvIHJlbmRlciBza2VsZXRvbiBsb2FkaW5nIHBhZ2U6XG4gIGZ1bmN0aW9uIHJlbmRlclNrZWxldG9uKCkge1xuICAgIGNvbnN0IGlubmVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbm5lci1jb250YWluZXJcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNrZWxldG9uIHNrZWxldG9uLXRleHRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNrZWxldG9uIHNrZWxldG9uLXRleHRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNrZWxldG9uIHNrZWxldG9uLXRleHRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNrZWxldG9uIHNrZWxldG9uLXRleHRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNrZWxldG9uIHNrZWxldG9uLXRleHRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGA7XG4gICAgICBpbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHJlbmRlckNvbW1lbnRzKGNvbW1lbnRzOm51bWJlcltdKTpQcm9taXNlPEhUTUxFbGVtZW50PntcbiAgICAgIGNvbnN0IG5vZGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuXG4gICAgICBjb21tZW50cy5mb3JFYWNoKGFzeW5jIChpZDpudW1iZXIpPT57XG4gICAgICAgICAgY29uc3QgZGF0YTpJcmV0dXJuR2V0Q29tbWVudHM9YXdhaXQgZ2V0RGF0YSgpLmdldENvbW1lbnQoaWQpXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAvLyBDcmVhdGUgY29udGFpbmVyIGRpdlxuICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJjb21tZW50XCIpO1xuICAgIFxuICAgICAgICAvLyBDcmVhdGUgdGl0bGUgZWxlbWVudFxuICAgICAgICBjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aXRsZUVsZW1lbnQuaW5uZXJIVE1MPWRhdGEudGV4dDtcbiAgICBcbiAgICAgICAgLy8gQ3JlYXRlIGF1dGhvciBlbGVtZW50XG4gICAgICAgIGNvbnN0IGF1dGhvckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgYXV0aG9yRWxlbWVudC50ZXh0Q29udGVudCA9IGBCeTogJHtkYXRhLmJ5fWA7XG4gICAgICAgIFxuICAgICAgICAvLyBDcmVhdGUgdGltZSBlbGVtZW50XG4gICAgICAgIGNvbnN0IHRpbWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZFRpbWUgPSBuZXcgRGF0ZShkYXRhLnRpbWUpLnRvTG9jYWxlU3RyaW5nKCk7XG4gICAgICAgIHRpbWVFbGVtZW50LnRleHRDb250ZW50ID0gYFRpbWU6ICR7Zm9ybWF0dGVkVGltZX1gO1xuXG4gICAgICAgIC8vIE51bWJlciBvZiBjb21tZW50c1xuICAgICAgICBjb25zdCBjb21tZW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBjb21tZW50RWxlbWVudC50ZXh0Q29udGVudCA9IGBuby5vZiBjb21tZW50czogJHtkYXRhLmtpZHMgPyBkYXRhLmtpZHMubGVuZ3RoIDogJzAnfWA7XG4gICAgICAgIFxuICAgICAgICAvLyBBcHBlbmQgZWxlbWVudHMgdG8gdGhlIGNvbnRhaW5lclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGF1dGhvckVsZW1lbnQpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGltZUVsZW1lbnQpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoY29tbWVudEVsZW1lbnQpO1xuICAgICAgICBub2RlLmFwcGVuZChkaXYpXG5cbiAgICAgICAgLy8gRXZlbnQgTGlzdGVuZXJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlT25Db21tZW50Q2xpY2soKXtcbiAgICAgICAgICAgIGlmKGRhdGEua2lkcy5sZW5ndGg9PT0wKVxuICAgICAgICAgICAgICAgIGNvbW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGhhbmRsZU9uQ29tbWVudENsaWNrKVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlPWF3YWl0IHJlbmRlckNvbW1lbnRzKGRhdGEua2lkcylcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kKG5vZGUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb21tZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIixoYW5kbGVPbkNvbW1lbnRDbGljaylcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGhhbmRsZU9uQ29tbWVudENsaWNrKVxuICAgIH0pXG4gICAgXG4gICAgcmV0dXJuIG5vZGU7XG4gICAgXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiByZW5kZXJEZXRhaWxQYWdlKGVsZW1lbnQ6IElyZXR1cm5HZXRTdG9yeSkge1xuICAgIGNvbnN0IGlubmVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbm5lci1jb250YWluZXJcIik7XG4gICAgY29uc3QgY29tbWVudEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29tbWVudEJveC5jbGFzc0xpc3QuYWRkKFwiY29tbWVudC1ib3hcIilcblxuICAgIGlubmVyQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgLy8gQ3JlYXRlIGNvbnRhaW5lciBkaXZcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiYm94XCIpO1xuXG4gICAgLy8gQ3JlYXRlIHRpdGxlIGVsZW1lbnRcbiAgICBjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gZWxlbWVudC50aXRsZTtcblxuICAgIC8vIENyZWF0ZSBhdXRob3IgZWxlbWVudFxuICAgIGNvbnN0IGF1dGhvckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBhdXRob3JFbGVtZW50LnRleHRDb250ZW50ID0gYEJ5OiAke2VsZW1lbnQuYnl9YDtcbiAgICBcbiAgICAvLyBDcmVhdGUgVVJMIGVsZW1lbnRcbiAgICBjb25zdCB1cmxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgdXJsTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIHVybExpbmsuaHJlZiA9IGVsZW1lbnQudXJsO1xuICAgIHVybExpbmsudGV4dENvbnRlbnQgPSBlbGVtZW50LnVybDtcbiAgICB1cmxFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiVVJMOiBcIikpO1xuICAgIHVybEVsZW1lbnQuYXBwZW5kQ2hpbGQodXJsTGluayk7XG4gICAgXG4gICAgLy8gQ3JlYXRlIHRpbWUgZWxlbWVudFxuICAgIGNvbnN0IHRpbWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgZm9ybWF0dGVkVGltZSA9IG5ldyBEYXRlKGVsZW1lbnQudGltZSkudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICB0aW1lRWxlbWVudC50ZXh0Q29udGVudCA9IGBUaW1lOiAke2Zvcm1hdHRlZFRpbWV9YDtcblxuICAgIC8vIENyZWF0ZSBhdXRob3IgZWxlbWVudFxuICAgIGNvbnN0IGNvbW1lbnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29tbWVudEVsZW1lbnQudGV4dENvbnRlbnQgPSBgbm8ub2YgY29tbWVudHM6ICR7ZWxlbWVudC5raWRzLmxlbmd0aH1gO1xuXG4gICAgLy8gQXBwZW5kIGVsZW1lbnRzIHRvIHRoZSBjb250YWluZXJcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYXV0aG9yRWxlbWVudCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHVybEVsZW1lbnQpO1xuICAgIGRpdi5hcHBlbmRDaGlsZCh0aW1lRWxlbWVudCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNvbW1lbnRFbGVtZW50KTtcbiAgICBcbiAgICAvLyBOb3cgRm9yIGNvbW1lbnRzOlxuICAgIGlmKGVsZW1lbnQua2lkcy5sZW5ndGg9PT0wKVxuICAgIHtcbiAgICAgICAgY29tbWVudEJveC5pbm5lckhUTUw9XCJObyBDb21tZW50cyB0byBTaG93XCJcbiAgICB9ZWxzZXtcbiAgICAgICAgY29uc3Qgbm9kZT1hd2FpdCByZW5kZXJDb21tZW50cyhlbGVtZW50LmtpZHMpXG4gICAgICAgIGNvbW1lbnRCb3guYXBwZW5kKG5vZGUpO1xuICAgIH1cblxuICAgIC8vIEFwcGVuZCBjb250YWluZXIgdG8gdGhlIGJvZHlcbiAgICBpbm5lckNvbnRhaW5lci5hcHBlbmQoZGl2LGNvbW1lbnRCb3gpO1xuXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgLy8gc2VsZWN0b3JzXG4gICAgY29uc3QgaW5uZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlubmVyLWNvbnRhaW5lclwiKTtcblxuICAgIC8vIFJlbmRlcnMgc2tlbGV0b24gbG9hZGluZ1xuICAgIHJlbmRlclNrZWxldG9uKCk7XG5cbiAgICAvLyBmaWx0ZXJzIGFuZCBnaXZlcyB1cyB0aGUgZGF0YSB0aGF0IHNob3VsZCBiZSBmZXRjaGVkIG9uIHRoYXQgcGFnZTtcbiAgICBhd2FpdCBkYXRhRmlsdGVyKCk7XG5cbiAgICAvLyBjbGVhcnMgdGhlIHJlbmRlciBjYXVzZWQgYnkgc2tlbGV0b24tbG9hZGluZ1xuICAgIGlubmVyQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBzdG9yeS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAvLyBDcmVhdGUgY29udGFpbmVyIGRpdlxuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiYm94XCIpO1xuXG4gICAgICAvLyBDcmVhdGUgdGl0bGUgZWxlbWVudFxuICAgICAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gZWxlbWVudC50aXRsZTtcblxuICAgICAgLy8gQ3JlYXRlIGF1dGhvciBlbGVtZW50XG4gICAgICBjb25zdCBhdXRob3JFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBhdXRob3JFbGVtZW50LnRleHRDb250ZW50ID0gYEJ5OiAke2VsZW1lbnQuYnl9YDtcblxuICAgICAgLy8gQ3JlYXRlIFVSTCBlbGVtZW50XG4gICAgICBjb25zdCB1cmxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBjb25zdCB1cmxMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICB1cmxMaW5rLmhyZWYgPSBlbGVtZW50LnVybDtcbiAgICAgIHVybExpbmsudGV4dENvbnRlbnQgPSBlbGVtZW50LnVybDtcbiAgICAgIHVybEVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJVUkw6IFwiKSk7XG4gICAgICB1cmxFbGVtZW50LmFwcGVuZENoaWxkKHVybExpbmspO1xuXG4gICAgICAvLyBDcmVhdGUgdGltZSBlbGVtZW50XG4gICAgICBjb25zdCB0aW1lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgY29uc3QgZm9ybWF0dGVkVGltZSA9IG5ldyBEYXRlKGVsZW1lbnQudGltZSkudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICAgIHRpbWVFbGVtZW50LnRleHRDb250ZW50ID0gYFRpbWU6ICR7Zm9ybWF0dGVkVGltZX1gO1xuXG4gICAgICAvLyBBcHBlbmQgZWxlbWVudHMgdG8gdGhlIGNvbnRhaW5lclxuICAgICAgZGl2LmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoYXV0aG9yRWxlbWVudCk7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQodXJsRWxlbWVudCk7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQodGltZUVsZW1lbnQpO1xuXG4gICAgICAvLyBBcHBlbmQgY29udGFpbmVyIHRvIHRoZSBib2R5XG4gICAgICBpbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgICAvLyBFdmVudCBMaXN0ZW5lcnNcbiAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICByZW5kZXJEZXRhaWxQYWdlKGVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4geyBpbmRleE5vLCBuZXh0UGFnZSwgcHJldmlvdXNQYWdlLCBnb1RvSW5kZXgsIHJlbmRlciB9O1xufVxuIl0sIm5hbWVzIjpbImdldERhdGEiLCJnZXRTdG9yaWVzIiwiZmV0Y2giLCJqc29uIiwiZ2V0U3RvcnkiLCJpZCIsImdldENvbW1lbnQiLCJlYWNoSW5kZXgiLCJpbmRleE5vIiwicGFnZSIsInN0b3JpZXMiLCJ0b3BTdG9yaWVzIiwic3RvcnkiLCJzdG9yeUNhY2hlIiwiZGF0YUZpbHRlciIsImxlbmd0aCIsInN0YXJ0IiwiZW5kIiwic2xpY2UiLCJ0b1N0cmluZyIsIm1hcCIsInN0b3J5UHJvbWlzZSIsIlByb21pc2UiLCJhbGwiLCJyZW5kZXJDb21tZW50cyIsImNvbW1lbnRzIiwibm9kZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImZvckVhY2giLCJoYW5kbGVPbkNvbW1lbnRDbGljayIsImRhdGEiLCJraWRzIiwiY29tbWVudEVsZW1lbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiYXBwZW5kIiwiY29uc29sZSIsImxvZyIsImNsYXNzTGlzdCIsImFkZCIsInRpdGxlRWxlbWVudCIsImlubmVySFRNTCIsInRleHQiLCJhdXRob3JFbGVtZW50IiwidGV4dENvbnRlbnQiLCJieSIsInRpbWVFbGVtZW50IiwiZm9ybWF0dGVkVGltZSIsIkRhdGUiLCJ0aW1lIiwidG9Mb2NhbGVTdHJpbmciLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJuZXh0UGFnZSIsInByZXZpb3VzUGFnZSIsImdvVG9JbmRleCIsIm5vIiwicmVuZGVyIiwiaW5uZXJDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiaSIsInJlbmRlclNrZWxldG9uIiwiZWxlbWVudCIsInRpdGxlIiwidXJsRWxlbWVudCIsInVybExpbmsiLCJocmVmIiwidXJsIiwiY3JlYXRlVGV4dE5vZGUiLCJjb21tZW50Qm94IiwicmVuZGVyRGV0YWlsUGFnZSIsIlBhZ2UiLCJpbm5lcl9jb250YWluZXIiLCJuYXZpZ2F0aW9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuZXh0X2J0biIsInByZXZfYnRuIiwiaW5kZXgiLCJidG4iLCJyZW1vdmUiLCJjb250YWlucyJdLCJzb3VyY2VSb290IjoiIn0=