(this.webpackJsonppuzzle=this.webpackJsonppuzzle||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(5),i=n.n(l),o=(n(12),n(1)),c=n(2),s=n.n(c),u=n(6),d=n(3),f=(n(14),{en:{label:"English",title:"Puzzle",button:"Shuffle",shareText:"Please try this Classic Puzzle PWA!",shareTitle:"Play Classic Puzzle",size:"Size:",state:["Welcome","Shuffled","Keep Going!","Goal!"]},ja:{label:"\u65e5\u672c\u8a9e",title:"\u30d1\u30ba\u30eb",button:"\u30b7\u30e3\u30c3\u30d5\u30eb",shareText:"\u4e0b\u8a18\u306e\u30d1\u30ba\u30eb\u3092\u904a\u3093\u3067\u307f\u307e\u3057\u3087\u3046\u3002",shareTitle:"\u30d1\u30ba\u30eb\u3092\u904a\u3073\u307e\u3059",size:"\u30b5\u30a4\u30ba\uff1a",state:["\u3088\u3046\u3053\u305d","\u30b7\u30e3\u30c3\u30d5\u30eb\u3057\u307e\u3057\u305f","\u9811\u5f35\u308c","\u30b4\u30fc\u30eb!"]},zh:{label:"\u6f22\u8a9e",title:"\u6578\u5b57\u62fc\u5716",button:"\u6d17\u724c",shareText:"\u4f86\u73a9\u9019\u500b\u6578\u5b57\u62fc\u5716\u904a\u6232\uff01",shareTitle:"\u4f86\u73a9\u6578\u5b57\u62fc\u5716",size:"\u9ad8\u5ea6\uff1a",state:["\u6b61\u8fce","\u5df2\u6d17","\u7e7c\u7e8c\u52aa\u529b","\u5b8c\u6210"]}}),h=Object(a.createContext)(),m=function(e){var t=e.children,n=e.lang,l=Object(a.useState)(f[n]),i=Object(d.a)(l,2),o=i[0],c=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"langSel"},Object.keys(f).map((function(e){return r.a.createElement("button",{key:e,lang:e,onClick:function(){!function(e){c(f[e]),window.localStorage.setItem("lang",e)}(e)}},f[e].label)}))),r.a.createElement(h.Provider,{value:o},t))},v=function(){var e={url:window.location};return"share"in navigator?r.a.createElement("div",{className:"share",onClick:Object(u.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,navigator.share(e);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.info("Error: "+t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))},r.a.createElement(h.Consumer,null,(function(t){return e.title=t.shareTitle,e.text=t.shareText,r.a.createElement(w,null)}))):r.a.createElement(h.Consumer,null,(function(t){return r.a.createElement("div",{className:"share",onClick:function(){window.location="mailto:?subject=".concat(t.shareTitle,"&body=").concat(t.shareText,"%0A").concat(e.url)}},r.a.createElement(w,null))}))},w=function(){return"safari"in window?r.a.createElement("svg",{height:"40",width:"40"},r.a.createElement("path",{d:"M20 2l-8 8 8-8 8 8zv26zm-4 14h-8v22h24v-22h-8",fill:"none",stroke:"indigo",strokeWidth:"4"}),r.a.createElement("title",null,"Share")):r.a.createElement("svg",{height:"40",width:"40"},r.a.createElement("marker",{id:"dot",refX:"8",refY:"8",viewBox:"0 0 16 16"},r.a.createElement("circle",{cx:"8",cy:"8",r:"8",fill:"indigo"})),r.a.createElement("path",{d:"M29.66 8l-21.66 12.5 21.66 12.5",fill:"none",markerEnd:"url(#dot)",markerMid:"url(#dot)",markerStart:"url(#dot)",stroke:"indigo",strokeWidth:"4"}),r.a.createElement("title",null,"Share"))},g=function(e){var t=e.onClick,n=e.value;return r.a.createElement("button",{className:"tile",onClick:t},n)},p=function(){return r.a.createElement("h1",null,Object(a.useContext)(h).title)},b=function(e){var t=Array(Math.pow(e,2)).fill(0);return t.forEach((function(e,t,n){n[t]=t+1})),t[Math.pow(e,2)-1]=null,t},E=function(e,t){switch(t.type){case"dec":return Object(o.a)(Object(o.a)({},e),{},{newSize:e.newSize-1});case"inc":return Object(o.a)(Object(o.a)({},e),{},{newSize:e.newSize+1});case"move":var n=e.tiles.slice(),a=n.indexOf(null);return n[a]=n[t.pos],n[t.pos]=null,Object(o.a)(Object(o.a)({},e),{},{movable:z(e.curSize,n),status:function(e,t){if(null!=t[Math.pow(e,2)-1])return!1;for(var n=0;n<t.length-1;++n)if(t[n]!==n+1)return!1;return!0}(e.curSize,n)?3:2,tiles:n.slice()});case"shuffle":var r=e.tiles.slice();if(e.newSize!==e.curSize){r=b(e.newSize);try{window.localStorage.setItem("size",e.newSize)}catch(i){}}for(var l=[];r.length;)l.push(r.splice(Math.floor(Math.random()*r.length),1)[0]);return Object(o.a)(Object(o.a)({},e),{},{curSize:e.newSize,movable:z(e.curSize,l),status:1,tiles:l.slice()});default:throw new Error}},z=function(e,t){var n=[],a=t.indexOf(null);return a%e>0&&n.push(a-1),a%e<e-1&&n.push(a+1),a-e>=0&&n.push(a-e),a+e<Math.pow(e,2)&&n.push(a+e),n},S=function(e){var t=e.size,n=Object(a.useReducer)(E,function(e){var t=parseInt(e),n=t,a=b(t);return{curSize:t,movable:z(t,a),newSize:n,status:0,tiles:a}}(t)),l=Object(d.a)(n,2),i=l[0],o=l[1],c=function(){return i.tiles.slice(0,i.curSize).map((function(e,t){return r.a.createElement("div",{className:"board-row",key:t},(n=t,i.tiles.slice(0,i.curSize).map((function(e,t){return s(n*i.curSize+t)}))));var n}))},s=function(e){return r.a.createElement(g,{key:e,value:i.tiles[e],onClick:function(){o({pos:e,type:"move"})}})};return r.a.createElement("div",{className:"game"},r.a.createElement("div",null,r.a.createElement("div",{className:"status"},Object(a.useContext)(h).state[i.status]),r.a.createElement(c,null),r.a.createElement("div",{className:"status"},r.a.createElement("button",{onClick:function(){o({type:"shuffle"})}},Object(a.useContext)(h).button)),r.a.createElement("div",null,Object(a.useContext)(h).size,r.a.createElement("button",{disabled:i.newSize<4,onClick:function(){return o({type:"dec"})}},"-"),i.newSize,r.a.createElement("button",{disabled:i.newSize>5,onClick:function(){return o({type:"inc"})}},"+"))))},k=function(){var e=null!==window.localStorage.getItem("lang")?window.localStorage.getItem("lang"):"en",t=null!==window.localStorage.getItem("size")?window.localStorage.getItem("size"):4;return r.a.createElement("div",{className:"App"},r.a.createElement(m,{lang:e},r.a.createElement(p,null),r.a.createElement("div",{className:"board"},r.a.createElement(S,{size:t})),r.a.createElement(v,null)))},j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","./service-worker.js");j?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):y(t,e)}))}}(!1)},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
