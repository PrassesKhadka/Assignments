(()=>{"use strict";var e=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{u(r.next(e))}catch(e){i(e)}}function a(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}u((r=r.apply(e,t||[])).next())}))},t=function(e,t){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(c=0)),c;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,r=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){c=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){c.label=a[1];break}if(6===a[0]&&c.label<o[1]){c.label=o[1],o=a;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(a);break}o[2]&&c.ops.pop(),c.trys.pop();continue}a=t.call(e,c)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}};function n(){return{getStories:function(){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()]}}))}))},getStory:function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,fetch("https://hacker-news.firebaseio.com/v0/item/".concat(n,".json?print=pretty"))];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()]}}))}))}}}var r=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{u(r.next(e))}catch(e){i(e)}}function a(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}u((r=r.apply(e,t||[])).next())}))},o=function(e,t){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(c=0)),c;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,r=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){c=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){c.label=a[1];break}if(6===a[0]&&c.label<o[1]){c.label=o[1],o=a;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(a);break}o[2]&&c.ops.pop(),c.trys.pop();continue}a=t.call(e,c)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}};(function(e){void 0===e&&(e=10);var t=1,i=[],c=[],a={};function u(){return r(this,void 0,void 0,(function(){var u,l,s,f,d,h,p=this;return o(this,(function(v){switch(v.label){case 0:return[4,n().getStories()];case 1:return u=v.sent(),l=(t-1)*e,s=t*e,i=u.slice(l,s),a[t.toString()]&&(c=a[t]),[4,i.map((function(e){return r(p,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,n().getStory(e)];case 1:return[2,t.sent()]}}))}))}))];case 2:return f=v.sent(),[4,Promise.all(f)];case 3:return c=v.sent(),d=a,h=t.toString(),[4,Promise.all(f)];case 4:return d[h]=v.sent(),[2]}}))}))}return{nextPage:function(){return t++},previousPage:function(){return t--},goToPage:function(e){return t=e},render:function(){return r(this,void 0,void 0,(function(){var e;return o(this,(function(t){switch(t.label){case 0:return e=document.querySelector(".inner-container"),function(){for(var e=document.querySelector(".inner-container"),t=0;t<5;t++){var n=document.createElement("div");n.innerHTML='\n                <div class="box">\n                    <div class="skeleton skeleton-text"></div>\n                    <div class="skeleton skeleton-text"></div>\n                    <div class="skeleton skeleton-text"></div>\n                    <div class="skeleton skeleton-text"></div>\n                </div>\n            ',e.appendChild(n)}}(),[4,u()];case 1:return t.sent(),e.innerHTML="",c.forEach((function(t){var n=document.createElement("div");n.classList.add("box");var r=document.createElement("h2");r.textContent=t.title;var o=document.createElement("p");o.textContent="By: ".concat(t.by);var i=document.createElement("p"),c=document.createElement("a");c.href=t.url,c.textContent=t.url,i.appendChild(document.createTextNode("URL: ")),i.appendChild(c);var a=document.createElement("p"),u=new Date(t.time).toLocaleString();a.textContent="Time: ".concat(u),n.appendChild(r),n.appendChild(o),n.appendChild(i),n.appendChild(a),e.appendChild(n)})),[2]}}))}))}}})(5).render()})();