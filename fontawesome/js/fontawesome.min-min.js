/*!
 * Font Awesome Free 5.12.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
!function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function n(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){var a,r,i;a=t,i=n[r=e],r in a?Object.defineProperty(a,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[r]=i}))}return t}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],a=!0,r=!1,i=void 0;try{for(var o,c=t[Symbol.iterator]();!(a=(o=c.next()).done)&&(n.push(o.value),!e||n.length!==e);a=!0);}catch(t){r=!0,i=t}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function r(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var i=function(){},o={},c={},s=null,l={mark:i,measure:i};try{"undefined"!=typeof window&&(o=window),"undefined"!=typeof document&&(c=document),"undefined"!=typeof MutationObserver&&(s=MutationObserver),"undefined"!=typeof performance&&(l=performance)}catch(i){}var f=(o.navigator||{}).userAgent,u=void 0===f?"":f,d=o,m=c,p=s,h=l,g=!!d.document,v=!!m.documentElement&&!!m.head&&"function"==typeof m.addEventListener&&"function"==typeof m.createElement,b=~u.indexOf("MSIE")||~u.indexOf("Trident/"),y="___FONT_AWESOME___",w="svg-inline--fa",x="data-fa-i2svg",k="data-fa-pseudo-element",A="fontawesome-i2svg",C=["HTML","HEAD","STYLE","SCRIPT"],S=function(){try{return!0}catch(t){return!1}}(),N={fas:"solid",far:"regular",fal:"light",fad:"duotone",fab:"brands",fa:"solid"},O={solid:"fas",regular:"far",light:"fal",duotone:"fad",brands:"fab"},P="fa-layers-text",M=/Font Awesome 5 (Solid|Regular|Light|Duotone|Brands|Free|Pro)/,z={900:"fas",400:"far",normal:"far",300:"fal"},E=[1,2,3,4,5,6,7,8,9,10],j=E.concat([11,12,13,14,15,16,17,18,19,20]),L=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],R={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},_=["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",R.GROUP,R.SWAP_OPACITY,R.PRIMARY,R.SECONDARY].concat(E.map((function(t){return"".concat(t,"x")}))).concat(j.map((function(t){return"w-".concat(t)}))),T=d.FontAwesomeConfig||{};m&&"function"==typeof m.querySelector&&[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(t){var e,n=a(t,2),r=n[0],i=n[1],o=""===(e=function(t){var e=m.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}(r))||"false"!==e&&("true"===e||e);null!=o&&(T[i]=o)}));var I=n({},{familyPrefix:"fa",replacementClass:w,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},T);I.autoReplaceSvg||(I.observeMutations=!1);var F=n({},I);d.FontAwesomeConfig=F;var Y=d||{};Y[y]||(Y[y]={}),Y[y].styles||(Y[y].styles={}),Y[y].hooks||(Y[y].hooks={}),Y[y].shims||(Y[y].shims=[]);var H=Y[y],D=[],U=!1;function W(t){v&&(U?setTimeout(t,0):D.push(t))}v&&((U=(m.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(m.readyState))||m.addEventListener("DOMContentLoaded",(function t(){m.removeEventListener("DOMContentLoaded",t),U=1,D.map((function(t){return t()}))})));var q,X="pending",B="settled",$="fulfilled",V="rejected",K=function(){},G="undefined"!=typeof global&&void 0!==global.process&&"function"==typeof global.process.emit,J="undefined"==typeof setImmediate?setTimeout:setImmediate,Q=[];function Z(){for(var t=0;t<Q.length;t++)Q[t][0](Q[t][1]);q=!(Q=[])}function tt(t,e){Q.push([t,e]),q||(q=!0,J(Z,0))}function et(t){var e=t.owner,n=e._state,a=e._data,r=t[n],i=t.then;if("function"==typeof r){n=$;try{a=r(a)}catch(t){it(i,t)}}nt(i,a)||(n===$&&at(i,a),n===V&&it(i,a))}function nt(e,n){var a;try{if(e===n)throw new TypeError("A promises callback cannot return that same promise.");if(n&&("function"==typeof n||"object"===t(n))){var r=n.then;if("function"==typeof r)return r.call(n,(function(t){a||(a=!0,n===t?rt(e,t):at(e,t))}),(function(t){a||(a=!0,it(e,t))})),!0}}catch(r){return a||it(e,r),!0}return!1}function at(t,e){t!==e&&nt(t,e)||rt(t,e)}function rt(t,e){t._state===X&&(t._state=B,t._data=e,tt(ct,t))}function it(t,e){t._state===X&&(t._state=B,t._data=e,tt(st,t))}function ot(t){t._then=t._then.forEach(et)}function ct(t){t._state=$,ot(t)}function st(t){t._state=V,ot(t),!t._handled&&G&&global.process.emit("unhandledRejection",t._data,t)}function lt(t){global.process.emit("rejectionHandled",t)}function ft(t){if("function"!=typeof t)throw new TypeError("Promise resolver "+t+" is not a function");if(this instanceof ft==0)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(t,e){function n(t){it(e,t)}try{t((function(t){at(e,t)}),n)}catch(t){n(t)}}(t,this)}ft.prototype={constructor:ft,_state:X,_then:null,_data:void 0,_handled:!1,then:function(t,e){var n={owner:this,then:new this.constructor(K),fulfilled:t,rejected:e};return!e&&!t||this._handled||(this._handled=!0,this._state===V&&G&&tt(lt,this)),this._state===$||this._state===V?tt(et,n):this._then.push(n),n.then},catch:function(t){return this.then(null,t)}},ft.all=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new ft((function(e,n){var a=[],r=0;function i(t){return r++,function(n){a[t]=n,--r||e(a)}}for(var o,c=0;c<t.length;c++)(o=t[c])&&"function"==typeof o.then?o.then(i(c),n):a[c]=o;r||e(a)}))},ft.race=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new ft((function(e,n){for(var a,r=0;r<t.length;r++)(a=t[r])&&"function"==typeof a.then?a.then(e,n):e(a)}))},ft.resolve=function(e){return e&&"object"===t(e)&&e.constructor===ft?e:new ft((function(t){t(e)}))},ft.reject=function(t){return new ft((function(e,n){n(t)}))};var ut="function"==typeof Promise?Promise:ft,dt=16,mt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function pt(t){if(t&&v){var e=m.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=m.head.childNodes,a=null,r=n.length-1;-1<r;r--){var i=n[r],o=(i.tagName||"").toUpperCase();-1<["STYLE","LINK"].indexOf(o)&&(a=i)}return m.head.insertBefore(e,a),t}}function ht(){for(var t=12,e="";0<t--;)e+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return e}function gt(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function vt(t){return t.classList?gt(t.classList):(t.getAttribute("class")||"").split(" ").filter((function(t){return t}))}function bt(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function yt(t){return Object.keys(t||{}).reduce((function(e,n){return e+"".concat(n,": ").concat(t[n],";")}),"")}function wt(t){return t.size!==mt.size||t.x!==mt.x||t.y!==mt.y||t.rotate!==mt.rotate||t.flipX||t.flipY}function xt(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(32*e.x,", ").concat(32*e.y,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),c="rotate(".concat(e.rotate," 0 0)");return{outer:r,inner:{transform:"".concat(i," ").concat(o," ").concat(c)},path:{transform:"translate(".concat(a/2*-1," -256)")}}}var kt={x:0,y:0,width:"100%",height:"100%"};function At(t){var e=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Ct(t){var e=t.icons,a=e.main,r=e.mask,i=t.prefix,o=t.iconName,c=t.transform,s=t.symbol,l=t.title,f=t.extra,u=t.watchable,d=void 0!==u&&u,m=r.found?r:a,p=m.width,h=m.height,g="fa-w-".concat(Math.ceil(p/h*16)),v=[F.replacementClass,o?"".concat(F.familyPrefix,"-").concat(o):"",g].filter((function(t){return-1===f.classes.indexOf(t)})).concat(f.classes).join(" "),b={children:[],attributes:n({},f.attributes,{"data-prefix":i,"data-icon":o,class:v,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(h)})};d&&(b.attributes[x]=""),l&&b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(ht())},children:[l]});var y,w,k,A,C,S,N,O,P,M,z,E,j,L,R,_,T,I,Y,H,D,U,W,q,X,B=n({},b,{prefix:i,iconName:o,main:a,mask:r,transform:c,symbol:s,styles:f.styles}),V=r.found&&a.found?(k=(y=B).children,A=y.attributes,C=y.main,S=y.mask,N=y.transform,O=C.width,P=C.icon,M=S.width,z=S.icon,E=xt({transform:N,containerWidth:M,iconWidth:O}),j={tag:"rect",attributes:n({},kt,{fill:"white"})},L=P.children?{children:P.children.map(At)}:{},R={tag:"g",attributes:n({},E.inner),children:[At(n({tag:P.tag,attributes:n({},P.attributes,E.path)},L))]},_={tag:"g",attributes:n({},E.outer),children:[R]},T="mask-".concat(ht()),I="clip-".concat(ht()),Y={tag:"mask",attributes:n({},kt,{id:T,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[j,_]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:(w=z,"g"===w.tag?w.children:[w])},Y]},k.push(H,{tag:"rect",attributes:n({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(T,")")},kt)}),{children:k,attributes:A}):function(t){var e=t.children,a=t.attributes,r=t.main,i=t.transform,o=yt(t.styles);if(0<o.length&&(a.style=o),wt(i)){var c=xt({transform:i,containerWidth:r.width,iconWidth:r.width});e.push({tag:"g",attributes:n({},c.outer),children:[{tag:"g",attributes:n({},c.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:n({},r.icon.attributes,c.path)}]}]})}else e.push(r.icon);return{children:e,attributes:a}}(B),K=V.children,G=V.attributes;return B.children=K,B.attributes=G,s?(U=(D=B).prefix,W=D.iconName,q=D.children,[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:n({},D.attributes,{id:!0===(X=D.symbol)?"".concat(U,"-").concat(F.familyPrefix,"-").concat(W):X}),children:q}]}]):function(t){var e=t.children,a=t.main,r=t.mask,i=t.attributes,o=t.styles,c=t.transform;if(wt(c)&&a.found&&!r.found){var s=a.width/a.height/2;i.style=yt(n({},o,{"transform-origin":"".concat(s+c.x/16,"em ").concat(.5+c.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}(B)}function St(t){var e=t.content,a=t.width,r=t.height,i=t.transform,o=t.title,c=t.extra,s=t.watchable,l=void 0!==s&&s,f=n({},c.attributes,o?{title:o}:{},{class:c.classes.join(" ")});l&&(f[x]="");var u,d,m,p,h,g,v,y,w,k=n({},c.styles);wt(i)&&(k.transform=(d=(u={transform:i,startCentered:!0,width:a,height:r}).transform,p=void 0===(m=u.width)?16:m,g=void 0===(h=u.height)?16:h,w="",w+=(y=void 0!==(v=u.startCentered)&&v)&&b?"translate(".concat(d.x/dt-p/2,"em, ").concat(d.y/dt-g/2,"em) "):y?"translate(calc(-50% + ".concat(d.x/dt,"em), calc(-50% + ").concat(d.y/dt,"em)) "):"translate(".concat(d.x/dt,"em, ").concat(d.y/dt,"em) "),w+="scale(".concat(d.size/dt*(d.flipX?-1:1),", ").concat(d.size/dt*(d.flipY?-1:1),") "),w+="rotate(".concat(d.rotate,"deg) ")),k["-webkit-transform"]=k.transform);var A=yt(k);0<A.length&&(f.style=A);var C=[];return C.push({tag:"span",attributes:f,children:[e]}),o&&C.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),C}var Nt=function(){},Ot=F.measurePerformance&&h&&h.mark&&h.measure?h:{mark:Nt,measure:Nt},Pt='FA "5.12.0"',Mt=function(t){Ot.mark("".concat(Pt," ").concat(t," ends")),Ot.measure("".concat(Pt," ").concat(t),"".concat(Pt," ").concat(t," begins"),"".concat(Pt," ").concat(t," ends"))},zt=function(t){return Ot.mark("".concat(Pt," ").concat(t," begins")),function(){return Mt(t)}},Et=function(t,e,n,a){var r,i,o,c,s,l=Object.keys(t),f=l.length,u=void 0!==a?(c=e,s=a,function(t,e,n,a){return c.call(s,t,e,n,a)}):e;for(o=void 0===n?(r=1,t[l[0]]):(r=0,n);r<f;r++)o=u(o,t[i=l[r]],i,t);return o};function jt(t){for(var e="",n=0;n<t.length;n++)e+=("000"+t.charCodeAt(n).toString(16)).slice(-4);return e}var Lt=H.styles,Rt=H.shims,_t={},Tt={},It={},Ft=function(){var t=function(t){return Et(Lt,(function(e,n,a){return e[a]=Et(n,t,{}),e}),{})};_t=t((function(t,e,n){return e[3]&&(t[e[3]]=n),t})),Tt=t((function(t,e,n){var a=e[2];return t[n]=n,a.forEach((function(e){t[e]=n})),t}));var e="far"in Lt;It=Et(Rt,(function(t,n){var a=n[0],r=n[1],i=n[2];return"far"!==r||e||(r="fas"),t[a]={prefix:r,iconName:i},t}),{})};function Yt(t,e){return(_t[t]||{})[e]}Ft();var Ht=H.styles;function Dt(t){return t.reduce((function(t,e){var n=function(t,e){var n,a=e.split("-"),r=a[0],i=a.slice(1).join("-");return r!==t||""===i||(n=i,~_.indexOf(n))?null:i}(F.familyPrefix,e);if(Ht[e])t.prefix=e;else if(F.autoFetchSvg&&-1<["fas","far","fal","fad","fab","fa"].indexOf(e))t.prefix=e;else if(n){var a="fa"===t.prefix?It[n]||{prefix:null,iconName:null}:{};t.iconName=a.iconName||n,t.prefix=a.prefix||t.prefix}else e!==F.replacementClass&&0!==e.indexOf("fa-w-")&&t.rest.push(e);return t}),{prefix:null,iconName:null,rest:[]})}function Ut(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}function Wt(t){var e,n=t.tag,a=t.attributes,r=void 0===a?{}:a,i=t.children,o=void 0===i?[]:i;return"string"==typeof t?bt(t):"<".concat(n," ").concat((e=r,Object.keys(e||{}).reduce((function(t,n){return t+"".concat(n,'="').concat(bt(e[n]),'" ')}),"").trim()),">").concat(o.map(Wt).join(""),"</").concat(n,">")}var qt=function(){};function Xt(t){return"string"==typeof(t.getAttribute?t.getAttribute(x):null)}var Bt={replace:function(t){var e=t[0],n=t[1].map((function(t){return Wt(t)})).join("\n");if(e.parentNode&&e.outerHTML)e.outerHTML=n+(F.keepOriginalSource&&"svg"!==e.tagName.toLowerCase()?"\x3c!-- ".concat(e.outerHTML," --\x3e"):"");else if(e.parentNode){var a=document.createElement("span");e.parentNode.replaceChild(a,e),a.outerHTML=n}},nest:function(t){var e=t[0],n=t[1];if(~vt(e).indexOf(F.replacementClass))return Bt.replace(t);var a=new RegExp("".concat(F.familyPrefix,"-.*"));delete n[0].attributes.style,delete n[0].attributes.id;var r=n[0].attributes.class.split(" ").reduce((function(t,e){return e===F.replacementClass||e.match(a)?t.toSvg.push(e):t.toNode.push(e),t}),{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" ");var i=n.map((function(t){return Wt(t)})).join("\n");e.setAttribute("class",r.toNode.join(" ")),e.setAttribute(x,""),e.innerHTML=i}};function Vt(t){t()}function Kt(t,e){var n="function"==typeof e?e:qt;if(0===t.length)n();else{var a=Vt;"async"===F.mutateApproach&&(a=d.requestAnimationFrame||Vt),a((function(){var e=!0===F.autoReplaceSvg?Bt.replace:Bt[F.autoReplaceSvg]||Bt.replace,a=zt("mutate");t.map(e),a(),n()}))}}var Gt=!1;function Jt(){Gt=!1}var Qt=null;function Zt(t){if(p&&F.observeMutations){var e=t.treeCallback,n=t.nodeCallback,a=t.pseudoElementsCallback,r=t.observeMutationsRoot,i=void 0===r?m:r;Qt=new p((function(t){Gt||gt(t).forEach((function(t){if("childList"===t.type&&0<t.addedNodes.length&&!Xt(t.addedNodes[0])&&(F.searchPseudoElements&&a(t.target),e(t.target)),"attributes"===t.type&&t.target.parentNode&&F.searchPseudoElements&&a(t.target.parentNode),"attributes"===t.type&&Xt(t.target)&&~L.indexOf(t.attributeName))if("class"===t.attributeName){var r=Dt(vt(t.target)),i=r.prefix,o=r.iconName;i&&t.target.setAttribute("data-prefix",i),o&&t.target.setAttribute("data-icon",o)}else n(t.target)}))})),v&&Qt.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}var $t=function(t){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce((function(t,e){var n=e.toLowerCase().split("-"),a=n[0],r=n.slice(1).join("-");if(a&&"h"===r)return t.flipX=!0,t;if(a&&"v"===r)return t.flipY=!0,t;if(r=parseFloat(r),isNaN(r))return t;switch(a){case"grow":t.size=t.size+r;break;case"shrink":t.size=t.size-r;break;case"left":t.x=t.x-r;break;case"right":t.x=t.x+r;break;case"up":t.y=t.y-r;break;case"down":t.y=t.y+r;break;case"rotate":t.rotate=t.rotate+r}return t}),e):e};function te(t){var e,n,a,r,i,o,c,s=function(t){var e,n,a=t.getAttribute("data-prefix"),r=t.getAttribute("data-icon"),i=void 0!==t.innerText?t.innerText.trim():"",o=Dt(vt(t));return a&&r&&(o.prefix=a,o.iconName=r),o.prefix&&1<i.length?o.iconName=(e=o.prefix,n=t.innerText,(Tt[e]||{})[n]):o.prefix&&1===i.length&&(o.iconName=Yt(o.prefix,jt(t.innerText))),o}(t),l=s.iconName,f=s.prefix,u=s.rest,d=(n=[],(e=t.getAttribute("style"))&&(n=e.split(";").reduce((function(t,e){var n=e.split(":"),a=n[0],r=n.slice(1);return a&&0<r.length&&(t[a]=r.join(":").trim()),t}),{})),n),m=$t(t.getAttribute("data-fa-transform")),p=null!==(a=t.getAttribute("data-fa-symbol"))&&(""===a||a),h=(i=gt((r=t).attributes).reduce((function(t,e){return"class"!==t.name&&"style"!==t.name&&(t[e.name]=e.value),t}),{}),o=r.getAttribute("title"),F.autoA11y&&(o?i["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(ht()):(i["aria-hidden"]="true",i.focusable="false")),i),g=(c=t.getAttribute("data-fa-mask"))?Dt(c.split(" ").map((function(t){return t.trim()}))):{prefix:null,iconName:null,rest:[]};return{iconName:l,title:t.getAttribute("title"),prefix:f,transform:m,symbol:p,mask:g,extra:{classes:u,styles:d,attributes:h}}}function ee(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=(new Error).stack}(ee.prototype=Object.create(Error.prototype)).constructor=ee;var ne={fill:"currentColor"},ae={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},re={tag:"path",attributes:n({},ne,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},ie=n({},ae,{attributeName:"opacity"}),oe={tag:"g",children:[re,{tag:"circle",attributes:n({},ne,{cx:"256",cy:"364",r:"28"}),children:[{tag:"animate",attributes:n({},ae,{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:n({},ie,{values:"1;0;1;1;0;1;"})}]},{tag:"path",attributes:n({},ne,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:[{tag:"animate",attributes:n({},ie,{values:"1;0;0;0;0;1;"})}]},{tag:"path",attributes:n({},ne,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:n({},ie,{values:"0;0;1;1;0;0;"})}]}]},ce=H.styles;function se(t){var e=t[0],n=t[1],r=a(t.slice(4),1)[0];return{found:!0,width:e,height:n,icon:Array.isArray(r)?{tag:"g",attributes:{class:"".concat(F.familyPrefix,"-").concat(R.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.familyPrefix,"-").concat(R.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(F.familyPrefix,"-").concat(R.PRIMARY),fill:"currentColor",d:r[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:r}}}}function le(e,n){return new ut((function(a,r){var i={found:!1,width:512,height:512,icon:oe};if(e&&n&&ce[n]&&ce[n][e])return a(se(ce[n][e]));"object"===t(d.FontAwesomeKitConfig)&&"string"==typeof window.FontAwesomeKitConfig.token&&d.FontAwesomeKitConfig.token,e&&n&&!F.showMissingIcons?r(new ee("Icon is missing for prefix ".concat(n," with icon name ").concat(e))):a(i)}))}var fe=H.styles;function ue(t){var e,n,r,i,o,c,s,l,f,u=te(t);return~u.extra.classes.indexOf(P)?function(t,e){var n=e.title,a=e.transform,r=e.extra,i=null,o=null;if(b){var c=parseInt(getComputedStyle(t).fontSize,10),s=t.getBoundingClientRect();i=s.width/c,o=s.height/c}return F.autoA11y&&!n&&(r.attributes["aria-hidden"]="true"),ut.resolve([t,St({content:t.innerHTML,width:i,height:o,transform:a,title:n,extra:r,watchable:!0})])}(t,u):(e=t,r=(n=u).iconName,i=n.title,o=n.prefix,c=n.transform,s=n.symbol,l=n.mask,f=n.extra,new ut((function(t,n){ut.all([le(r,o),le(l.iconName,l.prefix)]).then((function(n){var l=a(n,2),u=l[0],d=l[1];t([e,Ct({icons:{main:u,mask:d},prefix:o,iconName:r,transform:c,symbol:s,mask:d,title:i,extra:f,watchable:!0})])}))})))}function de(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;if(v){var n=m.documentElement.classList,a=function(t){return n.add("".concat(A,"-").concat(t))},r=function(t){return n.remove("".concat(A,"-").concat(t))},i=F.autoFetchSvg?Object.keys(N):Object.keys(fe),o=[".".concat(P,":not([").concat(x,"])")].concat(i.map((function(t){return".".concat(t,":not([").concat(x,"])")}))).join(", ");if(0!==o.length){var c=[];try{c=gt(t.querySelectorAll(o))}catch(t){}if(0<c.length){a("pending"),r("complete");var s=zt("onTree"),l=c.reduce((function(t,e){try{var n=ue(e);n&&t.push(n)}catch(t){S||t instanceof ee&&console.error(t)}return t}),[]);return new ut((function(t,n){ut.all(l).then((function(n){Kt(n,(function(){a("active"),a("complete"),r("pending"),"function"==typeof e&&e(),s(),t()}))})).catch((function(){s(),n()}))}))}}}}function me(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;ue(t).then((function(t){t&&Kt([t],e)}))}function pe(t,e){var a="".concat("data-fa-pseudo-element-pending").concat(e.replace(":","-"));return new ut((function(r,i){if(null!==t.getAttribute(a))return r();var o=gt(t.children).filter((function(t){return t.getAttribute(k)===e}))[0],c=d.getComputedStyle(t,e),s=c.getPropertyValue("font-family").match(M),l=c.getPropertyValue("font-weight");if(o&&!s)return t.removeChild(o),r();if(s){var f=c.getPropertyValue("content"),u=~["Solid","Regular","Light","Duotone","Brands"].indexOf(s[1])?O[s[1].toLowerCase()]:z[l],p=jt(3===f.length?f.substr(1,1):f),h=Yt(u,p),g=h;if(!h||o&&o.getAttribute("data-prefix")===u&&o.getAttribute("data-icon")===g)r();else{t.setAttribute(a,g),o&&t.removeChild(o);var v={iconName:null,title:null,prefix:null,transform:mt,symbol:!1,mask:null,extra:{classes:[],styles:{},attributes:{}}},b=v.extra;b.attributes[k]=e,le(h,u).then((function(i){var o=Ct(n({},v,{icons:{main:i,mask:{prefix:null,iconName:null,rest:[]}},prefix:u,iconName:g,extra:b,watchable:!0})),c=m.createElement("svg");":before"===e?t.insertBefore(c,t.firstChild):t.appendChild(c),c.outerHTML=o.map((function(t){return Wt(t)})).join("\n"),t.removeAttribute(a),r()})).catch(i)}}else r()}))}function he(t){return ut.all([pe(t,":before"),pe(t,":after")])}function ge(t){return!(t.parentNode===document.head||~C.indexOf(t.tagName.toUpperCase())||t.getAttribute(k)||t.parentNode&&"svg"===t.parentNode.tagName)}function ve(t){if(v)return new ut((function(e,n){var a=gt(t.querySelectorAll("*")).filter(ge).map(he),r=zt("searchPseudoElements");Gt=!0,ut.all(a).then((function(){r(),Jt(),e()})).catch((function(){r(),Jt(),n()}))}))}function be(){var t="fa",e=w,n=F.familyPrefix,a=F.replacementClass,r="svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:solid .08em #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fad.fa-inverse{color:#fff}";if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),c=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(c,".".concat(a))}return r}function ye(){F.autoAddCss&&!Ce&&(pt(be()),Ce=!0)}function we(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map((function(t){return Wt(t)}))}}),Object.defineProperty(t,"node",{get:function(){if(v){var e=m.createElement("div");return e.innerHTML=t.html,e.children}}}),t}function xe(t){var e=t.prefix,n=void 0===e?"fa":e,a=t.iconName;if(a)return Ut(Ae.definitions,n,a)||Ut(H.styles,n,a)}var ke,Ae=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.definitions={}}
var a,r;return a=t,(r=[{key:"add",value:function(){for(var t=this,e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];var i=a.reduce(this._pullDefinitions,{});Object.keys(i).forEach((function(e){t.definitions[e]=n({},t.definitions[e]||{},i[e]),function t(e,a){var r=(2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}).skipHooks,i=void 0!==r&&r,o=Object.keys(a).reduce((function(t,e){var n=a[e];return n.icon?t[n.iconName]=n.icon:t[e]=n,t}),{});"function"!=typeof H.hooks.addPack||i?H.styles[e]=n({},H.styles[e]||{},o):H.hooks.addPack(e,o),"fas"===e&&t("fa",a)}(e,i[e]),Ft()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,e){var n=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(n).map((function(e){var a=n[e],r=a.prefix,i=a.iconName,o=a.icon;t[r]||(t[r]={}),t[r][i]=o})),t}}])&&e(a.prototype,r),t}()),Ce=!1,Se={i2svg:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(v){ye();var e=t.node,n=void 0===e?m:e,a=t.callback,r=void 0===a?function(){}:a;return F.searchPseudoElements&&ve(n),de(n,r)}return ut.reject("Operation requires a DOM of some kind.")},css:be,insertCss:function(){Ce||(pt(be()),Ce=!0)},watch:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.autoReplaceSvgRoot,n=t.observeMutationsRoot;!1===F.autoReplaceSvg&&(F.autoReplaceSvg=!0),F.observeMutations=!0,W((function(){Pe({autoReplaceSvgRoot:e}),Zt({treeCallback:de,nodeCallback:me,pseudoElementsCallback:ve,observeMutationsRoot:n})}))}},Ne=(ke=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},a=e.transform,r=void 0===a?mt:a,i=e.symbol,o=void 0!==i&&i,c=e.mask,s=void 0===c?null:c,l=e.title,f=void 0===l?null:l,u=e.classes,d=void 0===u?[]:u,m=e.attributes,p=void 0===m?{}:m,h=e.styles,g=void 0===h?{}:h;if(t){var v=t.prefix,b=t.iconName,y=t.icon;return we(n({type:"icon"},t),(function(){return ye(),F.autoA11y&&(f?p["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(ht()):(p["aria-hidden"]="true",p.focusable="false")),Ct({icons:{main:se(y),mask:s?se(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:v,iconName:b,transform:n({},mt,r),symbol:o,title:f,extra:{attributes:p,styles:g,classes:d}})}))}},function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},a=(t||{}).icon?t:xe(t||{}),r=e.mask;return r&&(r=(r||{}).icon?r:xe(r||{})),ke(a,n({},e,{mask:r}))}),Oe={noAuto:function(){F.autoReplaceSvg=!1,F.observeMutations=!1,Qt&&Qt.disconnect()},config:F,dom:Se,library:Ae,parse:{transform:function(t){return $t(t)}},findIconDefinition:xe,icon:Ne,text:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},a=e.transform,i=void 0===a?mt:a,o=e.title,c=void 0===o?null:o,s=e.classes,l=void 0===s?[]:s,f=e.attributes,u=void 0===f?{}:f,d=e.styles,m=void 0===d?{}:d;return we({type:"text",content:t},(function(){return ye(),St({content:t,transform:n({},mt,i),title:c,extra:{attributes:u,styles:m,classes:["".concat(F.familyPrefix,"-layers-text")].concat(r(l))}})}))},counter:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},a=e.title,i=void 0===a?null:a,o=e.classes,c=void 0===o?[]:o,s=e.attributes,l=void 0===s?{}:s,f=e.styles,u=void 0===f?{}:f;return we({type:"counter",content:t},(function(){return ye(),function(t){var e=t.content,a=t.title,r=t.extra,i=n({},r.attributes,a?{title:a}:{},{class:r.classes.join(" ")}),o=yt(r.styles);0<o.length&&(i.style=o);var c=[];return c.push({tag:"span",attributes:i,children:[e]}),a&&c.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),c}({content:t.toString(),title:i,extra:{attributes:l,styles:u,classes:["".concat(F.familyPrefix,"-layers-counter")].concat(r(c))}})}))},layer:function(t){var e=(1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}).classes,n=void 0===e?[]:e;return we({type:"layer"},(function(){ye();var e=[];return t((function(t){Array.isArray(t)?t.map((function(t){e=e.concat(t.abstract)})):e=e.concat(t.abstract)})),[{tag:"span",attributes:{class:["".concat(F.familyPrefix,"-layers")].concat(r(n)).join(" ")},children:e}]}))},toHtml:Wt},Pe=function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).autoReplaceSvgRoot,e=void 0===t?m:t;(0<Object.keys(H.styles).length||F.autoFetchSvg)&&v&&F.autoReplaceSvg&&Oe.dom.i2svg({node:e})};!function(t){try{g&&(d.FontAwesome||(d.FontAwesome=Oe),W((function(){Pe(),Zt({treeCallback:de,nodeCallback:me,pseudoElementsCallback:ve})}))),H.hooks=n({},H.hooks,{addPack:function(t,e){H.styles[t]=n({},H.styles[t]||{},e),Ft(),Pe()},addShims:function(t){var e;(e=H.shims).push.apply(e,r(t)),Ft(),Pe()}})}catch(t){if(!S)throw t}}((function(){g&&(d.FontAwesome||(d.FontAwesome=Oe),W((function(){Pe(),Zt({treeCallback:de,nodeCallback:me,pseudoElementsCallback:ve})}))),H.hooks=n({},H.hooks,{addPack:function(t,e){H.styles[t]=n({},H.styles[t]||{},e),Ft(),Pe()},addShims:function(t){var e;(e=H.shims).push.apply(e,r(t)),Ft(),Pe()}})}))}();