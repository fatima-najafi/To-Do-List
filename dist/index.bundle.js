(()=>{"use strict";var e={424:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,'body {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.container {\n  margin-top: 100px;\n  width: 500px;\n  background-color: beige;\n  border: 1px;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px;\n}\n\n.row h1 {\n  font-size: 18px;\n  font-weight: bold;\n  font-family: Poppins, sans-serif;\n}\n\n.icon {\n  width: 20px;\n  height: 20px;\n}\n\n.remove {\n  width: 20px;\n  height: 20px;\n  padding: 10px;\n}\n\n.input {\n  text-indent: 20px;\n  font-family: "Poppins", sans-serif;\n  background-color: beige;\n  border: 0;\n  outline: 0;\n  font-size: 18px;\n  width: 400px;\n}\n\n.TODO-List {\n  display: flex;\n  flex-direction: column;\n}\n\n.div-item {\n  display: flex;\n  flex-direction: row;\n}\n\n.items {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 10px;\n}\n\n.elements {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.elements h2 {\n  font-size: 16px;\n  font-weight: bold;\n  font-family: Poppins, sans-serif;\n  margin-left: 15px;\n}\n\n.clear {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: aliceblue;\n  margin-top: -8px;\n  padding: 10px;\n}\n\n.clear a {\n  color: #000;\n  text-decoration: none;\n}\n\n.completed {\n  color: rgb(167, 166, 166);\n  text-decoration: line-through;\n}\n\n.hide {\n  display: none;\n}\n\n.drag-over {\n  border: dashed 3px red;\n}\n',""]);const c=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=r(e,o),l=0;l<i.length;l++){var d=t(i[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),s=t.n(c),l=t(216),d=t.n(l),p=t(589),u=t.n(p),f=t(424),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const g=()=>JSON.parse(localStorage.getItem("tasks"))||[],h=t.p+"1ce1f523c16f7af7ecc0.png";class v{constructor(e,n,t){this.description=e,this.completed=n,this.index=t}}const y=e=>{const n=g();if(""!==e){(e=>{const n=g();n.push(e),localStorage.setItem("tasks",JSON.stringify(n))})(new v(e,!1,n.length+1))}};let x=null;const b=document.getElementById("plus"),w=document.getElementById("clear"),E=document.getElementById("task"),k=document.getElementById("reload"),S=g();S.forEach((e=>{(e=>{const n=new Image;n.src=h,n.classList.add("remove");const t=document.getElementById("TODO-List"),r=document.createElement("div");r.classList.add("div-container"),r.setAttribute("draggable","true"),r.innerHTML+=`\n                            <div class="items">\n                                  <div class="elements">\n                                      <input type="checkbox" onclick="taskCheckbox(this)" class="check" ${e.completed?"checked":""}>\n                                      <input type="text" value="${e.description}" class="input ${e.completed?"completed":""}" onfocus="getCurrentTask(this)"  onblur="editTask(this)">\n                                  </div>\n                                  <img class="remove" src="${h}" alt="reload">\n                            </div>\n                            <hr>\n                         `,t.appendChild(r)})(e)})),k.addEventListener("click",(()=>{S.forEach((e=>{e.completed=!1})),localStorage.setItem("tasks",JSON.stringify(S)),window.location.reload()})),b.addEventListener("click",(e=>{e.preventDefault();const n=E.value;y(n),E.value=""})),window.getCurrentTask=e=>{!function(e){x=e.value}(e)},window.editTask=e=>{!function(e){const n=g(),t=e.value;""!==t&&n.forEach((e=>{e.description===x&&(e.description=t)})),localStorage.setItem("tasks",JSON.stringify(n))}(e)},window.taskCheckbox=e=>{!function(e){const n=g();n.forEach((n=>{n.description===e.nextElementSibling.value&&(n.completed=!n.completed)})),e.nextElementSibling.classList.toggle("completed"),localStorage.setItem("tasks",JSON.stringify(n))}(e)},document.getElementById("TODO-List").addEventListener("click",(e=>{var n;(n=e.target).classList.contains("remove")&&((e=>{const n=g().filter((n=>n.description!==e));n.forEach(((e,n)=>{e.index=n+1})),localStorage.setItem("tasks",JSON.stringify(n))})(n.parentNode.firstElementChild.lastElementChild.value),n.parentNode.parentNode.remove())})),w.addEventListener("click",(()=>{(function(){const e=g().filter((e=>!1===e.completed));e.forEach(((e,n)=>{e.index=n+1})),localStorage.setItem("tasks",JSON.stringify(e))})(),window.location.reload()}))})()})();