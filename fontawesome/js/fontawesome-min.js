/*!
 * Font Awesome Free 5.12.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
!function(){"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),r.forEach((function(e){n(t,e,a[e])}))}return t}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],a=!0,r=!1,i=void 0;try{for(var o,c=t[Symbol.iterator]();!(a=(o=c.next()).done)&&(n.push(o.value),!e||n.length!==e);a=!0);}catch(t){r=!0,i=t}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o=function(){},c={},s={},l=null,f={mark:o,measure:o};try{"undefined"!=typeof window&&(c=window),"undefined"!=typeof document&&(s=document),"undefined"!=typeof MutationObserver&&(l=MutationObserver),"undefined"!=typeof performance&&(f=performance)}catch(t){}var u=(c.navigator||{}).userAgent,d=void 0===u?"":u,m=c,p=s,h=l,g=f,v=!!m.document,b=!!p.documentElement&&!!p.head&&"function"==typeof p.addEventListener&&"function"==typeof p.createElement,y=~d.indexOf("MSIE")||~d.indexOf("Trident/"),w="svg-inline--fa",x="data-fa-i2svg",k="data-fa-pseudo-element",_="fontawesome-i2svg",A=["HTML","HEAD","STYLE","SCRIPT"],O=function(){try{return!0}catch(t){return!1}}(),C={fas:"solid",far:"regular",fal:"light",fad:"duotone",fab:"brands",fa:"solid"},E={solid:"fas",regular:"far",light:"fal",duotone:"fad",brands:"fab"},N="fa-layers-text",S=/Font Awesome 5 (Solid|Regular|Light|Duotone|Brands|Free|Pro)/,M={900:"fas",400:"far",normal:"far",300:"fal"},P=[1,2,3,4,5,6,7,8,9,10],z=P.concat([11,12,13,14,15,16,17,18,19,20]),j=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],L={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},T=["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",L.GROUP,L.SWAP_OPACITY,L.PRIMARY,L.SECONDARY].concat(P.map((function(t){return"".concat(t,"x")}))).concat(z.map((function(t){return"w-".concat(t)}))),R=m.FontAwesomeConfig||{};if(p&&"function"==typeof p.querySelector){[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(t){var e=r(t,2),n=e[0],a=e[1],i=function(t){return""===t||"false"!==t&&("true"===t||t)}(function(t){var e=p.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}(n));null!=i&&(R[a]=i)}))}var F=a({},{familyPrefix:"fa",replacementClass:w,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},R);F.autoReplaceSvg||(F.observeMutations=!1);var I=a({},F);m.FontAwesomeConfig=I;var Y=m||{};Y.___FONT_AWESOME___||(Y.___FONT_AWESOME___={}),Y.___FONT_AWESOME___.styles||(Y.___FONT_AWESOME___.styles={}),Y.___FONT_AWESOME___.hooks||(Y.___FONT_AWESOME___.hooks={}),Y.___FONT_AWESOME___.shims||(Y.___FONT_AWESOME___.shims=[]);var H=Y.___FONT_AWESOME___,W=[],D=!1;function U(t){b&&(D?setTimeout(t,0):W.push(t))}b&&((D=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState))||p.addEventListener("DOMContentLoaded",(function t(){p.removeEventListener("DOMContentLoaded",t),D=1,W.map((function(t){return t()}))})));var q,X="pending",B="settled",V="fulfilled",K="rejected",G=function(){},J="undefined"!=typeof global&&void 0!==global.process&&"function"==typeof global.process.emit,Q="undefined"==typeof setImmediate?setTimeout:setImmediate,Z=[];function tt(){for(var t=0;t<Z.length;t++)Z[t][0](Z[t][1]);Z=[],q=!1}function et(t,e){Z.push([t,e]),q||(q=!0,Q(tt,0))}function nt(t){var e=t.owner,n=e._state,a=e._data,r=t[n],i=t.then;if("function"==typeof r){n=V;try{a=r(a)}catch(t){ot(i,t)}}at(i,a)||(n===V&&rt(i,a),n===K&&ot(i,a))}function at(e,n){var a;try{if(e===n)throw new TypeError("A promises callback cannot return that same promise.");if(n&&("function"==typeof n||"object"===t(n))){var r=n.then;if("function"==typeof r)return r.call(n,(function(t){a||(a=!0,n===t?it(e,t):rt(e,t))}),(function(t){a||(a=!0,ot(e,t))})),!0}}catch(t){return a||ot(e,t),!0}return!1}function rt(t,e){t!==e&&at(t,e)||it(t,e)}function it(t,e){t._state===X&&(t._state=B,t._data=e,et(st,t))}function ot(t,e){t._state===X&&(t._state=B,t._data=e,et(lt,t))}function ct(t){t._then=t._then.forEach(nt)}function st(t){t._state=V,ct(t)}function lt(t){t._state=K,ct(t),!t._handled&&J&&global.process.emit("unhandledRejection",t._data,t)}function ft(t){global.process.emit("rejectionHandled",t)}function ut(t){if("function"!=typeof t)throw new TypeError("Promise resolver "+t+" is not a function");if(this instanceof ut==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(t,e){function n(t){ot(e,t)}try{t((function(t){rt(e,t)}),n)}catch(t){n(t)}}(t,this)}ut.prototype={constructor:ut,_state:X,_then:null,_data:void 0,_handled:!1,then:function(t,e){var n={owner:this,then:new this.constructor(G),fulfilled:t,rejected:e};return!e&&!t||this._handled||(this._handled=!0,this._state===K&&J&&et(ft,this)),this._state===V||this._state===K?et(nt,n):this._then.push(n),n.then},catch:function(t){return this.then(null,t)}},ut.all=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new ut((function(e,n){var a=[],r=0;function i(t){return r++,function(n){a[t]=n,--r||e(a)}}for(var o,c=0;c<t.length;c++)(o=t[c])&&"function"==typeof o.then?o.then(i(c),n):a[c]=o;r||e(a)}))},ut.race=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new ut((function(e,n){for(var a,r=0;r<t.length;r++)(a=t[r])&&"function"==typeof a.then?a.then(e,n):e(a)}))},ut.resolve=function(e){return e&&"object"===t(e)&&e.constructor===ut?e:new ut((function(t){t(e)}))},ut.reject=function(t){return new ut((function(e,n){n(t)}))};var dt="function"==typeof Promise?Promise:ut,mt=16,pt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ht(t){if(t&&b){var e=p.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=p.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return p.head.insertBefore(e,a),t}}function gt(){for(var t=12,e="";t-- >0;)e+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return e}function vt(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function bt(t){return t.classList?vt(t.classList):(t.getAttribute("class")||"").split(" ").filter((function(t){return t}))}function yt(t,e){var n,a=e.split("-"),r=a[0],i=a.slice(1).join("-");return r!==t||""===i||(n=i,~T.indexOf(n))?null:i}function wt(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function xt(t){return Object.keys(t||{}).reduce((function(e,n){return e+"".concat(n,": ").concat(t[n],";")}),"")}function kt(t){return t.size!==pt.size||t.x!==pt.x||t.y!==pt.y||t.rotate!==pt.rotate||t.flipX||t.flipY}function _t(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(32*e.x,", ").concat(32*e.y,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),c="rotate(".concat(e.rotate," 0 0)");return{outer:r,inner:{transform:"".concat(i," ").concat(o," ").concat(c)},path:{transform:"translate(".concat(a/2*-1," -256)")}}}var At={x:0,y:0,width:"100%",height:"100%"};function Ot(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Ct(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,o=t.iconName,c=t.transform,s=t.symbol,l=t.title,f=t.extra,u=t.watchable,d=void 0!==u&&u,m=r.found?r:n,p=m.width,h=m.height,g="fa-w-".concat(Math.ceil(p/h*16)),v=[I.replacementClass,o?"".concat(I.familyPrefix,"-").concat(o):"",g].filter((function(t){return-1===f.classes.indexOf(t)})).concat(f.classes).join(" "),b={children:[],attributes:a({},f.attributes,{"data-prefix":i,"data-icon":o,class:v,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(h)})};d&&(b.attributes[x]=""),l&&b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(gt())},children:[l]});var y=a({},b,{prefix:i,iconName:o,main:n,mask:r,transform:c,symbol:s,styles:f.styles}),w=r.found&&n.found?function(t){var e,n=t.children,r=t.attributes,i=t.main,o=t.mask,c=t.transform,s=i.width,l=i.icon,f=o.width,u=o.icon,d=_t({transform:c,containerWidth:f,iconWidth:s}),m={tag:"rect",attributes:a({},At,{fill:"white"})},p=l.children?{children:l.children.map(Ot)}:{},h={tag:"g",attributes:a({},d.inner),children:[Ot(a({tag:l.tag,attributes:a({},l.attributes,d.path)},p))]},g={tag:"g",attributes:a({},d.outer),children:[h]},v="mask-".concat(gt()),b="clip-".concat(gt()),y={tag:"mask",attributes:a({},At,{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,g]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:(e=u,"g"===e.tag?e.children:[e])},y]};return n.push(w,{tag:"rect",attributes:a({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(v,")")},At)}),{children:n,attributes:r}}(y):function(t){var e=t.children,n=t.attributes,r=t.main,i=t.transform,o=xt(t.styles);if(o.length>0&&(n.style=o),kt(i)){var c=_t({transform:i,containerWidth:r.width,iconWidth:r.width});e.push({tag:"g",attributes:a({},c.outer),children:[{tag:"g",attributes:a({},c.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:a({},r.icon.attributes,c.path)}]}]})}else e.push(r.icon);return{children:e,attributes:n}}(y),k=w.children,_=w.attributes;return y.children=k,y.attributes=_,s?function(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,o=t.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:a({},i,{id:!0===o?"".concat(e,"-").concat(I.familyPrefix,"-").concat(n):o}),children:r}]}]}(y):function(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,o=t.styles,c=t.transform;if(kt(c)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=xt(a({},o,{"transform-origin":"".concat(s.x+c.x/16,"em ").concat(s.y+c.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}(y)}function Et(t){var e=t.content,n=t.width,r=t.height,i=t.transform,o=t.title,c=t.extra,s=t.watchable,l=void 0!==s&&s,f=a({},c.attributes,o?{title:o}:{},{class:c.classes.join(" ")});l&&(f[x]="");var u=a({},c.styles);kt(i)&&(u.transform=function(t){var e=t.transform,n=t.width,a=void 0===n?16:n,r=t.height,i=void 0===r?16:r,o=t.startCentered,c=void 0!==o&&o,s="";return s+=c&&y?"translate(".concat(e.x/mt-a/2,"em, ").concat(e.y/mt-i/2,"em) "):c?"translate(calc(-50% + ".concat(e.x/mt,"em), calc(-50% + ").concat(e.y/mt,"em)) "):"translate(".concat(e.x/mt,"em, ").concat(e.y/mt,"em) "),s+="scale(".concat(e.size/mt*(e.flipX?-1:1),", ").concat(e.size/mt*(e.flipY?-1:1),") "),s+"rotate(".concat(e.rotate,"deg) ")}({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var d=xt(u);d.length>0&&(f.style=d);var m=[];return m.push({tag:"span",attributes:f,children:[e]}),o&&m.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),m}function Nt(t){var e=t.content,n=t.title,r=t.extra,i=a({},r.attributes,n?{title:n}:{},{class:r.classes.join(" ")}),o=xt(r.styles);o.length>0&&(i.style=o);var c=[];return c.push({tag:"span",attributes:i,children:[e]}),n&&c.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),c}var St=function(){},Mt=I.measurePerformance&&g&&g.mark&&g.measure?g:{mark:St,measure:St},Pt='FA "5.12.0"',zt=function(t){Mt.mark("".concat(Pt," ").concat(t," ends")),Mt.measure("".concat(Pt," ").concat(t),"".concat(Pt," ").concat(t," begins"),"".concat(Pt," ").concat(t," ends"))},jt=function(t){return Mt.mark("".concat(Pt," ").concat(t," begins")),function(){return zt(t)}},Lt=function(t,e,n,a){var r,i,o,c=Object.keys(t),s=c.length,l=void 0!==a?function(t,e){return function(n,a,r,i){return t.call(e,n,a,r,i)}}(e,a):e;for(void 0===n?(r=1,o=t[c[0]]):(r=0,o=n);r<s;r++)o=l(o,t[i=c[r]],i,t);return o};function Tt(t){for(var e="",n=0;n<t.length;n++){e+=("000"+t.charCodeAt(n).toString(16)).slice(-4)}return e}function Rt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.skipHooks,i=void 0!==r&&r,o=Object.keys(e).reduce((function(t,n){var a=e[n];return!!a.icon?t[a.iconName]=a.icon:t[n]=a,t}),{});"function"!=typeof H.hooks.addPack||i?H.styles[t]=a({},H.styles[t]||{},o):H.hooks.addPack(t,o),"fas"===t&&Rt("fa",e)}var Ft=H.styles,It=H.shims,Yt={},Ht={},Wt={},Dt=function(){var t=function(t){return Lt(Ft,(function(e,n,a){return e[a]=Lt(n,t,{}),e}),{})};Yt=t((function(t,e,n){return e[3]&&(t[e[3]]=n),t})),Ht=t((function(t,e,n){var a=e[2];return t[n]=n,a.forEach((function(e){t[e]=n})),t}));var e="far"in Ft;Wt=Lt(It,(function(t,n){var a=n[0],r=n[1],i=n[2];return"far"!==r||e||(r="fas"),t[a]={prefix:r,iconName:i},t}),{})};function Ut(t,e){return(Yt[t]||{})[e]}Dt();var qt=H.styles;function Xt(t){return t.reduce((function(t,e){var n=yt(I.familyPrefix,e);if(qt[e])t.prefix=e;else if(I.autoFetchSvg&&["fas","far","fal","fad","fab","fa"].indexOf(e)>-1)t.prefix=e;else if(n){var a="fa"===t.prefix?Wt[n]||{prefix:null,iconName:null}:{};t.iconName=a.iconName||n,t.prefix=a.prefix||t.prefix}else e!==I.replacementClass&&0!==e.indexOf("fa-w-")&&t.rest.push(e);return t}),{prefix:null,iconName:null,rest:[]})}function Bt(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}function Vt(t){var e=t.tag,n=t.attributes,a=void 0===n?{}:n,r=t.children,i=void 0===r?[]:r;return"string"==typeof t?wt(t):"<".concat(e," ").concat(function(t){return Object.keys(t||{}).reduce((function(e,n){return e+"".concat(n,'="').concat(wt(t[n]),'" ')}),"").trim()}(a),">").concat(i.map(Vt).join(""),"</").concat(e,">")}var Kt=function(){};function Gt(t){return"string"==typeof(t.getAttribute?t.getAttribute(x):null)}var Jt={replace:function(t){var e=t[0],n=t[1].map((function(t){return Vt(t)})).join("\n");if(e.parentNode&&e.outerHTML)e.outerHTML=n+(I.keepOriginalSource&&"svg"!==e.tagName.toLowerCase()?"\x3c!-- ".concat(e.outerHTML," --\x3e"):"");else if(e.parentNode){var a=document.createElement("span");e.parentNode.replaceChild(a,e),a.outerHTML=n}},nest:function(t){var e=t[0],n=t[1];if(~bt(e).indexOf(I.replacementClass))return Jt.replace(t);var a=new RegExp("".concat(I.familyPrefix,"-.*"));delete n[0].attributes.style,delete n[0].attributes.id;var r=n[0].attributes.class.split(" ").reduce((function(t,e){return e===I.replacementClass||e.match(a)?t.toSvg.push(e):t.toNode.push(e),t}),{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" ");var i=n.map((function(t){return Vt(t)})).join("\n");e.setAttribute("class",r.toNode.join(" ")),e.setAttribute(x,""),e.innerHTML=i}};function Qt(t){t()}function Zt(t,e){var n="function"==typeof e?e:Kt;if(0===t.length)n();else{var a=Qt;"async"===I.mutateApproach&&(a=m.requestAnimationFrame||Qt),a((function(){var e=!0===I.autoReplaceSvg?Jt.replace:Jt[I.autoReplaceSvg]||Jt.replace,a=jt("mutate");t.map(e),a(),n()}))}}var $t=!1;function te(){$t=!1}var ee=null;function ne(t){if(h&&I.observeMutations){var e=t.treeCallback,n=t.nodeCallback,a=t.pseudoElementsCallback,r=t.observeMutationsRoot,i=void 0===r?p:r;ee=new h((function(t){$t||vt(t).forEach((function(t){if("childList"===t.type&&t.addedNodes.length>0&&!Gt(t.addedNodes[0])&&(I.searchPseudoElements&&a(t.target),e(t.target)),"attributes"===t.type&&t.target.parentNode&&I.searchPseudoElements&&a(t.target.parentNode),"attributes"===t.type&&Gt(t.target)&&~j.indexOf(t.attributeName))if("class"===t.attributeName){var r=Xt(bt(t.target)),i=r.prefix,o=r.iconName;i&&t.target.setAttribute("data-prefix",i),o&&t.target.setAttribute("data-icon",o)}else n(t.target)}))})),b&&ee.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ae(t){var e,n,a=t.getAttribute("data-prefix"),r=t.getAttribute("data-icon"),i=void 0!==t.innerText?t.innerText.trim():"",o=Xt(bt(t));return a&&r&&(o.prefix=a,o.iconName=r),o.prefix&&i.length>1?o.iconName=(e=o.prefix,n=t.innerText,(Ht[e]||{})[n]):o.prefix&&1===i.length&&(o.iconName=Ut(o.prefix,Tt(t.innerText))),o}var re=function(t){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce((function(t,e){var n=e.toLowerCase().split("-"),a=n[0],r=n.slice(1).join("-");if(a&&"h"===r)return t.flipX=!0,t;if(a&&"v"===r)return t.flipY=!0,t;if(r=parseFloat(r),isNaN(r))return t;switch(a){case"grow":t.size=t.size+r;break;case"shrink":t.size=t.size-r;break;case"left":t.x=t.x-r;break;case"right":t.x=t.x+r;break;case"up":t.y=t.y-r;break;case"down":t.y=t.y+r;break;case"rotate":t.rotate=t.rotate+r}return t}),e):e};function ie(t){var e=ae(t),n=e.iconName,a=e.prefix,r=e.rest,i=function(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce((function(t,e){var n=e.split(":"),a=n[0],r=n.slice(1);return a&&r.length>0&&(t[a]=r.join(":").trim()),t}),{})),n}(t),o=function(t){return re(t.getAttribute("data-fa-transform"))}(t),c=function(t){var e=t.getAttribute("data-fa-symbol");return null!==e&&(""===e||e)}(t),s=function(t){var e=vt(t.attributes).reduce((function(t,e){return"class"!==t.name&&"style"!==t.name&&(t[e.name]=e.value),t}),{}),n=t.getAttribute("title");return I.autoA11y&&(n?e["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(gt()):(e["aria-hidden"]="true",e.focusable="false")),e}(t),l=function(t){var e=t.getAttribute("data-fa-mask");return e?Xt(e.split(" ").map((function(t){return t.trim()}))):{prefix:null,iconName:null,rest:[]}}(t);return{iconName:n,title:t.getAttribute("title"),prefix:a,transform:o,symbol:c,mask:l,extra:{classes:r,styles:i,attributes:s}}}function oe(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=(new Error).stack}oe.prototype=Object.create(Error.prototype),oe.prototype.constructor=oe;var ce={fill:"currentColor"},se={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},le={tag:"path",attributes:a({},ce,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},fe=a({},se,{attributeName:"opacity"}),ue={tag:"g",children:[le,{tag:"circle",attributes:a({},ce,{cx:"256",cy:"364",r:"28"}),children:[{tag:"animate",attributes:a({},se,{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:a({},fe,{values:"1;0;1;1;0;1;"})}]},{tag:"path",attributes:a({},ce,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:[{tag:"animate",attributes:a({},fe,{values:"1;0;0;0;0;1;"})}]},{tag:"path",attributes:a({},ce,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:a({},fe,{values:"0;0;1;1;0;0;"})}]}]},de=H.styles;function me(t){var e=t[0],n=t[1],a=r(t.slice(4),1)[0];return{found:!0,width:e,height:n,icon:Array.isArray(a)?{tag:"g",attributes:{class:"".concat(I.familyPrefix,"-").concat(L.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.familyPrefix,"-").concat(L.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(I.familyPrefix,"-").concat(L.PRIMARY),fill:"currentColor",d:a[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:a}}}}function pe(e,n){return new dt((function(a,r){var i={found:!1,width:512,height:512,icon:ue};if(e&&n&&de[n]&&de[n][e])return a(me(de[n][e]));"object"===t(m.FontAwesomeKitConfig)&&"string"==typeof window.FontAwesomeKitConfig.token&&({}["fa-kit-token"]=m.FontAwesomeKitConfig.token),e&&n&&!I.showMissingIcons?r(new oe("Icon is missing for prefix ".concat(n," with icon name ").concat(e))):a(i)}))}var he=H.styles;function ge(t){var e=ie(t);return~e.extra.classes.indexOf(N)?function(t,e){var n=e.title,a=e.transform,r=e.extra,i=null,o=null;if(y){var c=parseInt(getComputedStyle(t).fontSize,10),s=t.getBoundingClientRect();i=s.width/c,o=s.height/c}return I.autoA11y&&!n&&(r.attributes["aria-hidden"]="true"),dt.resolve([t,Et({content:t.innerHTML,width:i,height:o,transform:a,title:n,extra:r,watchable:!0})])}(t,e):function(t,e){var n=e.iconName,a=e.title,i=e.prefix,o=e.transform,c=e.symbol,s=e.mask,l=e.extra;return new dt((function(e,f){dt.all([pe(n,i),pe(s.iconName,s.prefix)]).then((function(s){var f=r(s,2),u=f[0],d=f[1];e([t,Ct({icons:{main:u,mask:d},prefix:i,iconName:n,transform:o,symbol:c,mask:d,title:a,extra:l,watchable:!0})])}))}))}(t,e)}function ve(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(b){var n=p.documentElement.classList,a=function(t){return n.add("".concat(_,"-").concat(t))},r=function(t){return n.remove("".concat(_,"-").concat(t))},i=I.autoFetchSvg?Object.keys(C):Object.keys(he),o=[".".concat(N,":not([").concat(x,"])")].concat(i.map((function(t){return".".concat(t,":not([").concat(x,"])")}))).join(", ");if(0!==o.length){var c=[];try{c=vt(t.querySelectorAll(o))}catch(t){}if(c.length>0){a("pending"),r("complete");var s=jt("onTree"),l=c.reduce((function(t,e){try{var n=ge(e);n&&t.push(n)}catch(t){O||t instanceof oe&&console.error(t)}return t}),[]);return new dt((function(t,n){dt.all(l).then((function(n){Zt(n,(function(){a("active"),a("complete"),r("pending"),"function"==typeof e&&e(),s(),t()}))})).catch((function(){s(),n()}))}))}}}}function be(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;ge(t).then((function(t){t&&Zt([t],e)}))}function ye(t,e){var n="".concat("data-fa-pseudo-element-pending").concat(e.replace(":","-"));return new dt((function(r,i){if(null!==t.getAttribute(n))return r();var o=vt(t.children).filter((function(t){return t.getAttribute(k)===e}))[0],c=m.getComputedStyle(t,e),s=c.getPropertyValue("font-family").match(S),l=c.getPropertyValue("font-weight");if(o&&!s)return t.removeChild(o),r();if(s){var f=c.getPropertyValue("content"),u=~["Solid","Regular","Light","Duotone","Brands"].indexOf(s[1])?E[s[1].toLowerCase()]:M[l],d=Tt(3===f.length?f.substr(1,1):f),h=Ut(u,d),g=h;if(!h||o&&o.getAttribute("data-prefix")===u&&o.getAttribute("data-icon")===g)r();else{t.setAttribute(n,g),o&&t.removeChild(o);var v={iconName:null,title:null,prefix:null,transform:pt,symbol:!1,mask:null,extra:{classes:[],styles:{},attributes:{}}},b=v.extra;b.attributes[k]=e,pe(h,u).then((function(i){var o=Ct(a({},v,{icons:{main:i,mask:{prefix:null,iconName:null,rest:[]}},prefix:u,iconName:g,extra:b,watchable:!0})),c=p.createElement("svg");":before"===e?t.insertBefore(c,t.firstChild):t.appendChild(c),c.outerHTML=o.map((function(t){return Vt(t)})).join("\n"),t.removeAttribute(n),r()})).catch(i)}}else r()}))}function we(t){return dt.all([ye(t,":before"),ye(t,":after")])}function xe(t){return!(t.parentNode===document.head||~A.indexOf(t.tagName.toUpperCase())||t.getAttribute(k)||t.parentNode&&"svg"===t.parentNode.tagName)}function ke(t){if(b)return new dt((function(e,n){var a=vt(t.querySelectorAll("*")).filter(xe).map(we),r=jt("searchPseudoElements");$t=!0,dt.all(a).then((function(){r(),te(),e()})).catch((function(){r(),te(),n()}))}))}function _e(){
var t="fa",e=w,n=I.familyPrefix,a=I.replacementClass,r="svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:solid .08em #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fad.fa-inverse{color:#fff}";if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),c=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(c,".".concat(a))}return r}var Ae=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.definitions={}}var n,r,i;return n=t,r=[{key:"add",value:function(){for(var t=this,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach((function(e){t.definitions[e]=a({},t.definitions[e]||{},i[e]),Rt(e,i[e]),Dt()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,e){var n=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(n).map((function(e){var a=n[e],r=a.prefix,i=a.iconName,o=a.icon;t[r]||(t[r]={}),t[r][i]=o})),t}}],r&&e(n.prototype,r),i&&e(n,i),t}();function Oe(){I.autoAddCss&&!Me&&(ht(_e()),Me=!0)}function Ce(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map((function(t){return Vt(t)}))}}),Object.defineProperty(t,"node",{get:function(){if(b){var e=p.createElement("div");return e.innerHTML=t.html,e.children}}}),t}function Ee(t){var e=t.prefix,n=void 0===e?"fa":e,a=t.iconName;if(a)return Bt(Se.definitions,n,a)||Bt(H.styles,n,a)}var Ne,Se=new Ae,Me=!1,Pe={i2svg:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(b){Oe();var e=t.node,n=void 0===e?p:e,a=t.callback,r=void 0===a?function(){}:a;return I.searchPseudoElements&&ke(n),ve(n,r)}return dt.reject("Operation requires a DOM of some kind.")},css:_e,insertCss:function(){Me||(ht(_e()),Me=!0)},watch:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.autoReplaceSvgRoot,n=t.observeMutationsRoot;!1===I.autoReplaceSvg&&(I.autoReplaceSvg=!0),I.observeMutations=!0,U((function(){Le({autoReplaceSvgRoot:e}),ne({treeCallback:ve,nodeCallback:be,pseudoElementsCallback:ke,observeMutationsRoot:n})}))}},ze=(Ne=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,r=void 0===n?pt:n,i=e.symbol,o=void 0!==i&&i,c=e.mask,s=void 0===c?null:c,l=e.title,f=void 0===l?null:l,u=e.classes,d=void 0===u?[]:u,m=e.attributes,p=void 0===m?{}:m,h=e.styles,g=void 0===h?{}:h;if(t){var v=t.prefix,b=t.iconName,y=t.icon;return Ce(a({type:"icon"},t),(function(){return Oe(),I.autoA11y&&(f?p["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(gt()):(p["aria-hidden"]="true",p.focusable="false")),Ct({icons:{main:me(y),mask:s?me(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:v,iconName:b,transform:a({},pt,r),symbol:o,title:f,extra:{attributes:p,styles:g,classes:d}})}))}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(t||{}).icon?t:Ee(t||{}),r=e.mask;return r&&(r=(r||{}).icon?r:Ee(r||{})),Ne(n,a({},e,{mask:r}))}),je={noAuto:function(){I.autoReplaceSvg=!1,I.observeMutations=!1,ee&&ee.disconnect()},config:I,dom:Pe,library:Se,parse:{transform:function(t){return re(t)}},findIconDefinition:Ee,icon:ze,text:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,r=void 0===n?pt:n,o=e.title,c=void 0===o?null:o,s=e.classes,l=void 0===s?[]:s,f=e.attributes,u=void 0===f?{}:f,d=e.styles,m=void 0===d?{}:d;return Ce({type:"text",content:t},(function(){return Oe(),Et({content:t,transform:a({},pt,r),title:c,extra:{attributes:u,styles:m,classes:["".concat(I.familyPrefix,"-layers-text")].concat(i(l))}})}))},counter:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.title,a=void 0===n?null:n,r=e.classes,o=void 0===r?[]:r,c=e.attributes,s=void 0===c?{}:c,l=e.styles,f=void 0===l?{}:l;return Ce({type:"counter",content:t},(function(){return Oe(),Nt({content:t.toString(),title:a,extra:{attributes:s,styles:f,classes:["".concat(I.familyPrefix,"-layers-counter")].concat(i(o))}})}))},layer:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.classes,a=void 0===n?[]:n;return Ce({type:"layer"},(function(){Oe();var e=[];return t((function(t){Array.isArray(t)?t.map((function(t){e=e.concat(t.abstract)})):e=e.concat(t.abstract)})),[{tag:"span",attributes:{class:["".concat(I.familyPrefix,"-layers")].concat(i(a)).join(" ")},children:e}]}))},toHtml:Vt},Le=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.autoReplaceSvgRoot,n=void 0===e?p:e;(Object.keys(H.styles).length>0||I.autoFetchSvg)&&b&&I.autoReplaceSvg&&je.dom.i2svg({node:n})};!function(t){try{t()}catch(t){if(!O)throw t}}((function(){v&&(m.FontAwesome||(m.FontAwesome=je),U((function(){Le(),ne({treeCallback:ve,nodeCallback:be,pseudoElementsCallback:ke})}))),H.hooks=a({},H.hooks,{addPack:function(t,e){H.styles[t]=a({},H.styles[t]||{},e),Dt(),Le()},addShims:function(t){var e;(e=H.shims).push.apply(e,i(t)),Dt(),Le()}})}))}();