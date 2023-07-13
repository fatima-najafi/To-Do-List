(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>a});var o=t(81),r=t.n(o),c=t(645),i=t.n(c)()(r());i.push([e.id,'* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #dfdfdf;\n  min-height: 100vh;\n}\n\n.nav {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 15px 25px;\n  border: 2px solid black;\n  margin: 5px 8px;\n  border-radius: 5px;\n}\n\na {\n  text-decoration: none;\n}\n\n.nav a {\n  color: black;\n  padding: 0 10px;\n}\n\n.nav-border {\n  border-right: 2px solid black;\n  padding-right: 10px;\n}\n\n.nav a:hover {\n  color: blue;\n}\n\nmain {\n  margin: 60px 0;\n  display: flex;\n  justify-content: center;\n}\n\n.bg {\n  padding: 1em;\n  border-bottom: #d2d2d2 solid 1px;\n}\n\n#todo-section {\n  background-color: #fcfafa;\n  width: 30em;\n  font-size: large;\n  box-shadow: 2px 2px 10px black;\n}\n\n#todo-section h2 {\n  color: #3d3d3d;\n  font-weight: 400;\n}\n\n#description,\n.borderless {\n  border: unset;\n  width: 20em;\n  padding: 0.2em;\n  font-size: large;\n  font-style: italic;\n  background-color: unset;\n}\n\n.todo label,\n.borderless,\n#clear label {\n  font-size: 1.2em;\n  padding-left: 1em;\n  color: #303030;\n}\n\n#clear label {\n  color: #6c6c6c;\n}\n\n#description:active,\n#description:focus,\n.borderless:active,\n.borderless:focus {\n  outline: unset;\n}\n\ninput[type="checkbox"] {\n  scale: 1.4;\n  cursor: pointer;\n}\n\n.todo {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n#clear,\n#clear label {\n  text-align: center;\n  cursor: pointer;\n}\n\n.bg-brown {\n  background-color: #ffffc6;\n}\n\n#add-btn {\n  float: right;\n  border: unset;\n  background-color: unset;\n}\n\n.cancelled {\n  text-decoration: line-through;\n}\n\n.hidden {\n  display: none;\n}\n',""]);const a=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,c){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&i[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var c={},i=[],a=0;a<e.length;a++){var s=e[a],d=o.base?s[0]+o.base:s[0],l=c[d]||0,p="".concat(d," ").concat(l);c[d]=l+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var g=r(f,o);o.byIndex=a,n.splice(a,0,{identifier:p,updater:g,references:1})}i.push(p)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var c=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<c.length;i++){var a=t(c[i]);n[a].references--}for(var s=o(e,r),d=0;d<c.length;d++){var l=t(c[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}c=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var c=t.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var c=n[o]={id:o,exports:{}};return e[o](c,c.exports,t),c.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),c=t(569),i=t.n(c),a=t(565),s=t.n(a),d=t(216),l=t.n(d),p=t(589),u=t.n(p),f=t(426),g={};g.styleTagTransform=u(),g.setAttributes=s(),g.insert=i().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=l(),n()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;const m=t.p+"15c3cc068a1a7ecd3ab9.png",h=t.p+"e71d8c4beb20e7ff4725.png",v=m;let b=[];const y=document.querySelector("form"),x=document.querySelector("#todo-list"),w=document.querySelector("#clear"),E="todolist";function L(){localStorage.setItem(E,JSON.stringify(b))}function N(){x.childNodes.forEach((e=>{e.classList.contains("bg-brown")&&(e.classList.toggle("bg-brown"),e.childNodes[0].childNodes[1].classList.toggle("hidden"),e.childNodes[0].childNodes[2].classList.toggle("hidden"),e.childNodes[1].childNodes[0].classList.toggle("hidden"),e.childNodes[1].childNodes[1].classList.toggle("hidden"))}))}function k(e){const n=b.indexOf(e),t=b[n];t.description=e.description,t.completed=e.completed,L()}function C(e){const n=document.createElement("div");n.className="todo bg";const t=document.createElement("div"),o=document.createElement("div");t.className="w-auto",o.className="w-auto";const r=document.createElement("input"),c=document.createElement("label"),i=document.createElement("input"),a=document.createElement("img");r.type="checkbox",i.type="text",r.checked=e.completed,c.textContent=e.description,i.value=e.description,i.className="hidden borderless",a.src=`${v}`;const s=document.createElement("img");s.src=`${h}`,s.className="hidden";const d=()=>{n.classList.toggle("bg-brown"),c.classList.toggle("hidden"),i.classList.toggle("hidden"),a.classList.toggle("hidden"),s.classList.toggle("hidden"),i.focus()};a.addEventListener("click",(e=>{e.stopImmediatePropagation(),d()})),c.addEventListener("click",(e=>{e.stopImmediatePropagation(),d()})),s.addEventListener("click",(n=>{n.stopImmediatePropagation(),function(e){const n=b.indexOf(e);b=b.filter((n=>n.index!==e.index)),function(){for(let e=b.length-1;e>=0;e-=1)b[e].index=e+1}(),L(),x.removeChild(x.childNodes[n])}(e)})),i.addEventListener("click",(e=>{e.stopImmediatePropagation()})),i.addEventListener("keypress",(t=>{"Esc"===t.key?N():"Enter"===t.key&&(n.classList.toggle("bg-brown"),c.textContent=i.value,e.description=i.value,k(e),c.classList.toggle("hidden"),i.classList.toggle("hidden"),a.classList.toggle("hidden"),s.classList.toggle("hidden"))})),r.addEventListener("change",(n=>{const t=n.target.checked;e.completed=t,k(e),c.classList.toggle("cancelled")})),t.appendChild(r),t.appendChild(c),t.appendChild(i),o.appendChild(a),o.appendChild(s),n.appendChild(t),n.appendChild(o),x.appendChild(n)}!function(){const e=localStorage.getItem(E);x.textContent="",b=[],null!==e&&(b=JSON.parse(e)),b.forEach((e=>{C(e)}))}(),document.getElementsByTagName("body")[0].addEventListener("click",(()=>{N()})),w.addEventListener("click",(()=>{!function(){for(let e=b.length-1;e>=0;e-=1)b[e].completed&&(b.pop(),x.childNodes[e].remove());L()}()})),y.addEventListener("submit",(e=>{e.preventDefault();const n=document.querySelector("#description").value.trim();if(""!==n){const e={description:n,completed:!1,index:b.length+1};C(e),b.push(e),L(),document.querySelector("#description").value=""}}))})()})();