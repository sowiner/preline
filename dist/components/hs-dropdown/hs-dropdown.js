/*! For license information please see hs-dropdown.js.LICENSE.txt */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(self,(()=>(()=>{"use strict";var e={191:(e,t,n)=>{function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===o(i)?i:String(i)),r)}var i}n.d(t,{Z:()=>i});var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$collection=[],this.selector=t,this.config=n,this.events={}}var t,n;return t=e,n=[{key:"_fireEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.events.hasOwnProperty(e)&&this.events[e](t)}},{key:"_dispatch",value:function(e,t){var n=new CustomEvent(e,{detail:{payload:arguments.length>2&&void 0!==arguments[2]?arguments[2]:null},bubbles:!0,cancelable:!0,composed:!1});t.dispatchEvent(n)}},{key:"on",value:function(e,t){this.events[e]=t}},{key:"afterTransition",value:function(e,t){"all 0s ease 0s"!==window.getComputedStyle(e,null).getPropertyValue("transition")?e.addEventListener("transitionend",(function n(){t(),e.removeEventListener("transitionend",n,!0)}),!0):t()}},{key:"getClassProperty",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return(window.getComputedStyle(e).getPropertyValue(t)||n).replace(" ","")}}],n&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}()},82:(e,t,n)=>{function o(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function r(e){return e instanceof o(e).Element||e instanceof Element}function i(e){return e instanceof o(e).HTMLElement||e instanceof HTMLElement}function a(e){return"undefined"!=typeof ShadowRoot&&(e instanceof o(e).ShadowRoot||e instanceof ShadowRoot)}n.d(t,{fi:()=>le});var s=Math.max,c=Math.min,f=Math.round;function l(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function u(){return!/^((?!chrome|android).)*safari/i.test(l())}function p(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var a=e.getBoundingClientRect(),s=1,c=1;t&&i(e)&&(s=e.offsetWidth>0&&f(a.width)/e.offsetWidth||1,c=e.offsetHeight>0&&f(a.height)/e.offsetHeight||1);var l=(r(e)?o(e):window).visualViewport,p=!u()&&n,d=(a.left+(p&&l?l.offsetLeft:0))/s,y=(a.top+(p&&l?l.offsetTop:0))/c,h=a.width/s,m=a.height/c;return{width:h,height:m,top:y,right:d+h,bottom:y+m,left:d,x:d,y}}function d(e){var t=o(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function y(e){return e?(e.nodeName||"").toLowerCase():null}function h(e){return((r(e)?e.ownerDocument:e.document)||window.document).documentElement}function m(e){return p(h(e)).left+d(e).scrollLeft}function v(e){return o(e).getComputedStyle(e)}function g(e){var t=v(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function b(e,t,n){void 0===n&&(n=!1);var r,a,s=i(t),c=i(t)&&function(e){var t=e.getBoundingClientRect(),n=f(t.width)/e.offsetWidth||1,o=f(t.height)/e.offsetHeight||1;return 1!==n||1!==o}(t),l=h(t),u=p(e,c,n),v={scrollLeft:0,scrollTop:0},b={x:0,y:0};return(s||!s&&!n)&&(("body"!==y(t)||g(l))&&(v=(r=t)!==o(r)&&i(r)?{scrollLeft:(a=r).scrollLeft,scrollTop:a.scrollTop}:d(r)),i(t)?((b=p(t,!0)).x+=t.clientLeft,b.y+=t.clientTop):l&&(b.x=m(l))),{x:u.left+v.scrollLeft-b.x,y:u.top+v.scrollTop-b.y,width:u.width,height:u.height}}function w(e){var t=p(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function x(e){return"html"===y(e)?e:e.assignedSlot||e.parentNode||(a(e)?e.host:null)||h(e)}function O(e){return["html","body","#document"].indexOf(y(e))>=0?e.ownerDocument.body:i(e)&&g(e)?e:O(x(e))}function S(e,t){var n;void 0===t&&(t=[]);var r=O(e),i=r===(null==(n=e.ownerDocument)?void 0:n.body),a=o(r),s=i?[a].concat(a.visualViewport||[],g(r)?r:[]):r,c=t.concat(s);return i?c:c.concat(S(x(s)))}function j(e){return["table","td","th"].indexOf(y(e))>=0}function E(e){return i(e)&&"fixed"!==v(e).position?e.offsetParent:null}function P(e){for(var t=o(e),n=E(e);n&&j(n)&&"static"===v(n).position;)n=E(n);return n&&("html"===y(n)||"body"===y(n)&&"static"===v(n).position)?t:n||function(e){var t=/firefox/i.test(l());if(/Trident/i.test(l())&&i(e)&&"fixed"===v(e).position)return null;var n=x(e);for(a(n)&&(n=n.host);i(n)&&["html","body"].indexOf(y(n))<0;){var o=v(n);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||t&&"filter"===o.willChange||t&&o.filter&&"none"!==o.filter)return n;n=n.parentNode}return null}(e)||t}var k="top",_="bottom",A="right",L="left",D="auto",C=[k,_,A,L],T="start",q="end",M="viewport",H="popper",V=C.reduce((function(e,t){return e.concat([t+"-"+T,t+"-"+q])}),[]),R=[].concat(C,[D]).reduce((function(e,t){return e.concat([t,t+"-"+T,t+"-"+q])}),[]),I=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function W(e){var t=new Map,n=new Set,o=[];function r(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var o=t.get(e);o&&r(o)}})),o.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||r(e)})),o}var B={placement:"bottom",modifiers:[],strategy:"absolute"};function N(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function U(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,o=void 0===n?[]:n,i=t.defaultOptions,a=void 0===i?B:i;return function(e,t,n){void 0===n&&(n=a);var i,s,c={placement:"bottom",orderedModifiers:[],options:Object.assign({},B,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},f=[],l=!1,u={state:c,setOptions:function(n){var i="function"==typeof n?n(c.options):n;p(),c.options=Object.assign({},a,c.options,i),c.scrollParents={reference:r(e)?S(e):e.contextElement?S(e.contextElement):[],popper:S(t)};var s,l,d=function(e){var t=W(e);return I.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((s=[].concat(o,c.options.modifiers),l=s.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(l).map((function(e){return l[e]}))));return c.orderedModifiers=d.filter((function(e){return e.enabled})),c.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,o=void 0===n?{}:n,r=e.effect;if("function"==typeof r){var i=r({state:c,name:t,instance:u,options:o});f.push(i||function(){})}})),u.update()},forceUpdate:function(){if(!l){var e=c.elements,t=e.reference,n=e.popper;if(N(t,n)){c.rects={reference:b(t,P(n),"fixed"===c.options.strategy),popper:w(n)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach((function(e){return c.modifiersData[e.name]=Object.assign({},e.data)}));for(var o=0;o<c.orderedModifiers.length;o++)if(!0!==c.reset){var r=c.orderedModifiers[o],i=r.fn,a=r.options,s=void 0===a?{}:a,f=r.name;"function"==typeof i&&(c=i({state:c,options:s,name:f,instance:u})||c)}else c.reset=!1,o=-1}}},update:(i=function(){return new Promise((function(e){u.forceUpdate(),e(c)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(i())}))}))),s}),destroy:function(){p(),l=!0}};if(!N(e,t))return u;function p(){f.forEach((function(e){return e()})),f=[]}return u.setOptions(n).then((function(e){!l&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var z={passive:!0};function F(e){return e.split("-")[0]}function X(e){return e.split("-")[1]}function Y(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Z(e){var t,n=e.reference,o=e.element,r=e.placement,i=r?F(r):null,a=r?X(r):null,s=n.x+n.width/2-o.width/2,c=n.y+n.height/2-o.height/2;switch(i){case k:t={x:s,y:n.y-o.height};break;case _:t={x:s,y:n.y+n.height};break;case A:t={x:n.x+n.width,y:c};break;case L:t={x:n.x-o.width,y:c};break;default:t={x:n.x,y:n.y}}var f=i?Y(i):null;if(null!=f){var l="y"===f?"height":"width";switch(a){case T:t[f]=t[f]-(n[l]/2-o[l]/2);break;case q:t[f]=t[f]+(n[l]/2-o[l]/2)}}return t}var $={top:"auto",right:"auto",bottom:"auto",left:"auto"};function G(e){var t,n=e.popper,r=e.popperRect,i=e.placement,a=e.variation,s=e.offsets,c=e.position,l=e.gpuAcceleration,u=e.adaptive,p=e.roundOffsets,d=e.isFixed,y=s.x,m=void 0===y?0:y,g=s.y,b=void 0===g?0:g,w="function"==typeof p?p({x:m,y:b}):{x:m,y:b};m=w.x,b=w.y;var x=s.hasOwnProperty("x"),O=s.hasOwnProperty("y"),S=L,j=k,E=window;if(u){var D=P(n),C="clientHeight",T="clientWidth";D===o(n)&&"static"!==v(D=h(n)).position&&"absolute"===c&&(C="scrollHeight",T="scrollWidth"),(i===k||(i===L||i===A)&&a===q)&&(j=_,b-=(d&&D===E&&E.visualViewport?E.visualViewport.height:D[C])-r.height,b*=l?1:-1),i!==L&&(i!==k&&i!==_||a!==q)||(S=A,m-=(d&&D===E&&E.visualViewport?E.visualViewport.width:D[T])-r.width,m*=l?1:-1)}var M,H=Object.assign({position:c},u&&$),V=!0===p?function(e,t){var n=e.x,o=e.y,r=t.devicePixelRatio||1;return{x:f(n*r)/r||0,y:f(o*r)/r||0}}({x:m,y:b},o(n)):{x:m,y:b};return m=V.x,b=V.y,l?Object.assign({},H,((M={})[j]=O?"0":"",M[S]=x?"0":"",M.transform=(E.devicePixelRatio||1)<=1?"translate("+m+"px, "+b+"px)":"translate3d("+m+"px, "+b+"px, 0)",M)):Object.assign({},H,((t={})[j]=O?b+"px":"",t[S]=x?m+"px":"",t.transform="",t))}var J={left:"right",right:"left",bottom:"top",top:"bottom"};function K(e){return e.replace(/left|right|bottom|top/g,(function(e){return J[e]}))}var Q={start:"end",end:"start"};function ee(e){return e.replace(/start|end/g,(function(e){return Q[e]}))}function te(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&a(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function ne(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function oe(e,t,n){return t===M?ne(function(e,t){var n=o(e),r=h(e),i=n.visualViewport,a=r.clientWidth,s=r.clientHeight,c=0,f=0;if(i){a=i.width,s=i.height;var l=u();(l||!l&&"fixed"===t)&&(c=i.offsetLeft,f=i.offsetTop)}return{width:a,height:s,x:c+m(e),y:f}}(e,n)):r(t)?function(e,t){var n=p(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):ne(function(e){var t,n=h(e),o=d(e),r=null==(t=e.ownerDocument)?void 0:t.body,i=s(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=s(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),c=-o.scrollLeft+m(e),f=-o.scrollTop;return"rtl"===v(r||n).direction&&(c+=s(n.clientWidth,r?r.clientWidth:0)-i),{width:i,height:a,x:c,y:f}}(h(e)))}function re(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function ie(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function ae(e,t){void 0===t&&(t={});var n=t,o=n.placement,a=void 0===o?e.placement:o,f=n.strategy,l=void 0===f?e.strategy:f,u=n.boundary,d=void 0===u?"clippingParents":u,m=n.rootBoundary,g=void 0===m?M:m,b=n.elementContext,w=void 0===b?H:b,O=n.altBoundary,j=void 0!==O&&O,E=n.padding,L=void 0===E?0:E,D=re("number"!=typeof L?L:ie(L,C)),T=w===H?"reference":H,q=e.rects.popper,V=e.elements[j?T:w],R=function(e,t,n,o){var a="clippingParents"===t?function(e){var t=S(x(e)),n=["absolute","fixed"].indexOf(v(e).position)>=0&&i(e)?P(e):e;return r(n)?t.filter((function(e){return r(e)&&te(e,n)&&"body"!==y(e)})):[]}(e):[].concat(t),f=[].concat(a,[n]),l=f[0],u=f.reduce((function(t,n){var r=oe(e,n,o);return t.top=s(r.top,t.top),t.right=c(r.right,t.right),t.bottom=c(r.bottom,t.bottom),t.left=s(r.left,t.left),t}),oe(e,l,o));return u.width=u.right-u.left,u.height=u.bottom-u.top,u.x=u.left,u.y=u.top,u}(r(V)?V:V.contextElement||h(e.elements.popper),d,g,l),I=p(e.elements.reference),W=Z({reference:I,element:q,strategy:"absolute",placement:a}),B=ne(Object.assign({},q,W)),N=w===H?B:I,U={top:R.top-N.top+D.top,bottom:N.bottom-R.bottom+D.bottom,left:R.left-N.left+D.left,right:N.right-R.right+D.right},z=e.modifiersData.offset;if(w===H&&z){var F=z[a];Object.keys(U).forEach((function(e){var t=[A,_].indexOf(e)>=0?1:-1,n=[k,_].indexOf(e)>=0?"y":"x";U[e]+=F[n]*t}))}return U}function se(e,t,n){return s(e,c(t,n))}function ce(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function fe(e){return[k,A,_,L].some((function(t){return e[t]>=0}))}var le=U({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,a=void 0===i||i,s=r.resize,c=void 0===s||s,f=o(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach((function(e){e.addEventListener("scroll",n.update,z)})),c&&f.addEventListener("resize",n.update,z),function(){a&&l.forEach((function(e){e.removeEventListener("scroll",n.update,z)})),c&&f.removeEventListener("resize",n.update,z)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=Z({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=void 0===o||o,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,f={placement:F(t.placement),variation:X(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,G(Object.assign({},f,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,G(Object.assign({},f,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},r=t.elements[e];i(r)&&y(r)&&(Object.assign(r.style,n),Object.keys(o).forEach((function(e){var t=o[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],r=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});i(o)&&y(o)&&(Object.assign(o.style,a),Object.keys(r).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.offset,i=void 0===r?[0,0]:r,a=R.reduce((function(e,n){return e[n]=function(e,t,n){var o=F(e),r=[L,k].indexOf(o)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*r,[L,A].indexOf(o)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],c=s.x,f=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=f),t.modifiersData[o]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var r=n.mainAxis,i=void 0===r||r,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,f=n.padding,l=n.boundary,u=n.rootBoundary,p=n.altBoundary,d=n.flipVariations,y=void 0===d||d,h=n.allowedAutoPlacements,m=t.options.placement,v=F(m),g=c||(v!==m&&y?function(e){if(F(e)===D)return[];var t=K(e);return[ee(e),t,ee(t)]}(m):[K(m)]),b=[m].concat(g).reduce((function(e,n){return e.concat(F(n)===D?function(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,f=void 0===c?R:c,l=X(o),u=l?s?V:V.filter((function(e){return X(e)===l})):C,p=u.filter((function(e){return f.indexOf(e)>=0}));0===p.length&&(p=u);var d=p.reduce((function(t,n){return t[n]=ae(e,{placement:n,boundary:r,rootBoundary:i,padding:a})[F(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:l,rootBoundary:u,padding:f,flipVariations:y,allowedAutoPlacements:h}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,S=!0,j=b[0],E=0;E<b.length;E++){var P=b[E],q=F(P),M=X(P)===T,H=[k,_].indexOf(q)>=0,I=H?"width":"height",W=ae(t,{placement:P,boundary:l,rootBoundary:u,altBoundary:p,padding:f}),B=H?M?A:L:M?_:k;w[I]>x[I]&&(B=K(B));var N=K(B),U=[];if(i&&U.push(W[q]<=0),s&&U.push(W[B]<=0,W[N]<=0),U.every((function(e){return e}))){j=P,S=!1;break}O.set(P,U)}if(S)for(var z=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return j=t,"break"},Y=y?3:1;Y>0&&"break"!==z(Y);Y--);t.placement!==j&&(t.modifiersData[o]._skip=!0,t.placement=j,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.mainAxis,i=void 0===r||r,a=n.altAxis,f=void 0!==a&&a,l=n.boundary,u=n.rootBoundary,p=n.altBoundary,d=n.padding,y=n.tether,h=void 0===y||y,m=n.tetherOffset,v=void 0===m?0:m,g=ae(t,{boundary:l,rootBoundary:u,padding:d,altBoundary:p}),b=F(t.placement),x=X(t.placement),O=!x,S=Y(b),j="x"===S?"y":"x",E=t.modifiersData.popperOffsets,D=t.rects.reference,C=t.rects.popper,q="function"==typeof v?v(Object.assign({},t.rects,{placement:t.placement})):v,M="number"==typeof q?{mainAxis:q,altAxis:q}:Object.assign({mainAxis:0,altAxis:0},q),H=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,V={x:0,y:0};if(E){if(i){var R,I="y"===S?k:L,W="y"===S?_:A,B="y"===S?"height":"width",N=E[S],U=N+g[I],z=N-g[W],Z=h?-C[B]/2:0,$=x===T?D[B]:C[B],G=x===T?-C[B]:-D[B],J=t.elements.arrow,K=h&&J?w(J):{width:0,height:0},Q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ee=Q[I],te=Q[W],ne=se(0,D[B],K[B]),oe=O?D[B]/2-Z-ne-ee-M.mainAxis:$-ne-ee-M.mainAxis,re=O?-D[B]/2+Z+ne+te+M.mainAxis:G+ne+te+M.mainAxis,ie=t.elements.arrow&&P(t.elements.arrow),ce=ie?"y"===S?ie.clientTop||0:ie.clientLeft||0:0,fe=null!=(R=null==H?void 0:H[S])?R:0,le=N+re-fe,ue=se(h?c(U,N+oe-fe-ce):U,N,h?s(z,le):z);E[S]=ue,V[S]=ue-N}if(f){var pe,de="x"===S?k:L,ye="x"===S?_:A,he=E[j],me="y"===j?"height":"width",ve=he+g[de],ge=he-g[ye],be=-1!==[k,L].indexOf(b),we=null!=(pe=null==H?void 0:H[j])?pe:0,xe=be?ve:he-D[me]-C[me]-we+M.altAxis,Oe=be?he+D[me]+C[me]-we-M.altAxis:ge,Se=h&&be?function(e,t,n){var o=se(e,t,n);return o>n?n:o}(xe,he,Oe):se(h?xe:ve,he,h?Oe:ge);E[j]=Se,V[j]=Se-he}t.modifiersData[o]=V}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,o=e.name,r=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=F(n.placement),c=Y(s),f=[L,A].indexOf(s)>=0?"height":"width";if(i&&a){var l=function(e,t){return re("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:ie(e,C))}(r.padding,n),u=w(i),p="y"===c?k:L,d="y"===c?_:A,y=n.rects.reference[f]+n.rects.reference[c]-a[c]-n.rects.popper[f],h=a[c]-n.rects.reference[c],m=P(i),v=m?"y"===c?m.clientHeight||0:m.clientWidth||0:0,g=y/2-h/2,b=l[p],x=v-u[f]-l[d],O=v/2-u[f]/2+g,S=se(b,O,x),j=c;n.modifiersData[o]=((t={})[j]=S,t.centerOffset=S-O,t)}},effect:function(e){var t=e.state,n=e.options.element,o=void 0===n?"[data-popper-arrow]":n;null!=o&&("string"!=typeof o||(o=t.elements.popper.querySelector(o)))&&te(t.elements.popper,o)&&(t.elements.arrow=o)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,i=t.modifiersData.preventOverflow,a=ae(t,{elementContext:"reference"}),s=ae(t,{altBoundary:!0}),c=ce(a,o),f=ce(s,r,i),l=fe(c),u=fe(f);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:f,isReferenceHidden:l,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":u})}}]})}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{n.r(o);var e=n(82),t=n(191);const r={historyIndex:-1,addHistory:function(e){this.historyIndex=e},existsInHistory:function(e){return e>this.historyIndex},clearHistory:function(){this.historyIndex=-1}};function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}var u=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(d,t);var n,o,s,u,p=(s=d,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=l(s);if(u){var n=l(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function d(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(e=p.call(this,".hs-dropdown")).positions={top:"top","top-left":"top-start","top-right":"top-end",bottom:"bottom","bottom-left":"bottom-start","bottom-right":"bottom-end",right:"right","right-top":"right-start","right-bottom":"right-end",left:"left","left-top":"left-start","left-bottom":"left-end"},e.absoluteStrategyModifiers=function(e){return[{name:"applyStyles",fn:function(t){var n=(window.getComputedStyle(e).getPropertyValue("--strategy")||"absolute").replace(" ",""),o=(window.getComputedStyle(e).getPropertyValue("--adaptive")||"adaptive").replace(" ","");t.state.elements.popper.style.position=n,t.state.elements.popper.style.transform="adaptive"===o?t.state.styles.popper.transform:null,t.state.elements.popper.style.top=null,t.state.elements.popper.style.bottom=null,t.state.elements.popper.style.left=null,t.state.elements.popper.style.right=null,t.state.elements.popper.style.margin=0}},{name:"computeStyles",options:{adaptive:!1}}]},e._history=r,e}return n=d,o=[{key:"init",value:function(){var e=this;document.addEventListener("click",(function(t){var n=t.target,o=n.closest(e.selector),r=n.closest(".hs-dropdown-menu");if(o&&o.classList.contains("open")||e._closeOthers(o),r){var i=(window.getComputedStyle(o).getPropertyValue("--auto-close")||"").replace(" ","");if(("false"==i||"inside"==i)&&!o.parentElement.closest(e.selector))return}o&&(o.classList.contains("open")?e.close(o):e.open(o))})),document.addEventListener("mousemove",(function(t){var n=t.target,o=n.closest(e.selector);if(n.closest(".hs-dropdown-menu"),o){var r=(window.getComputedStyle(o).getPropertyValue("--trigger")||"click").replace(" ","");if("hover"!==r)return;o&&o.classList.contains("open")||e._closeOthers(o),"hover"!==r||o.classList.contains("open")||/iPad|iPhone|iPod/.test(navigator.platform)||navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)||navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)||e._hover(n)}})),document.addEventListener("keydown",this._keyboardSupport.bind(this)),window.addEventListener("resize",(function(){document.querySelectorAll(".hs-dropdown.open").forEach((function(t){e.close(t,!0)}))}))}},{key:"_closeOthers",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;document.querySelectorAll("".concat(this.selector,".open")).forEach((function(n){if(!t||t.closest(".hs-dropdown.open")!==n){var o=(window.getComputedStyle(n).getPropertyValue("--auto-close")||"").replace(" ","");"false"!=o&&"outside"!=o&&e.close(n)}}))}},{key:"_hover",value:function(e){var t=this,n=e.closest(this.selector);this.open(n),document.addEventListener("mousemove",(function e(o){o.target.closest(t.selector)&&o.target.closest(t.selector)!==n.parentElement.closest(t.selector)||(t.close(n),document.removeEventListener("mousemove",e,!0))}),!0)}},{key:"close",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=e.querySelector(".hs-dropdown-menu"),r=function(){e.classList.contains("open")||(o.classList.remove("block"),o.classList.add("hidden"),o.style.inset=null,o.style.position=null,e._popper&&e._popper.destroy())};n||this.afterTransition(e.querySelector("[data-hs-dropdown-transition]")||o,(function(){r()})),o.style.margin=null,e.classList.remove("open"),n&&r(),this._fireEvent("close",e),this._dispatch("close.hs.dropdown",e,e),o.querySelectorAll(".hs-dropdown.open").forEach((function(e){t.close(e,!0)}))}},{key:"open",value:function(t){var n=t.querySelector(".hs-dropdown-menu"),o=(window.getComputedStyle(t).getPropertyValue("--placement")||"").replace(" ",""),r=(window.getComputedStyle(t).getPropertyValue("--strategy")||"fixed").replace(" ",""),i=((window.getComputedStyle(t).getPropertyValue("--adaptive")||"adaptive").replace(" ",""),parseInt((window.getComputedStyle(t).getPropertyValue("--offset")||"10").replace(" ","")));if("static"!==r){t._popper&&t._popper.destroy();var s=(0,e.fi)(t,n,{placement:this.positions[o]||"bottom-start",strategy:r,modifiers:[].concat(a("fixed"!==r?this.absoluteStrategyModifiers(t):[]),[{name:"offset",options:{offset:[0,i]}}])});t._popper=s}n.style.margin=null,n.classList.add("block"),n.classList.remove("hidden"),setTimeout((function(){t.classList.add("open")})),this._fireEvent("open",t),this._dispatch("open.hs.dropdown",t,t)}},{key:"_keyboardSupport",value:function(e){var t=document.querySelector(".hs-dropdown.open");if(t)return 27===e.keyCode?(e.preventDefault(),this._esc(t)):40===e.keyCode?(e.preventDefault(),this._down(t)):38===e.keyCode?(e.preventDefault(),this._up(t)):36===e.keyCode?(e.preventDefault(),this._start(t)):35===e.keyCode?(e.preventDefault(),this._end(t)):void this._byChar(t,e.key)}},{key:"_esc",value:function(e){this.close(e)}},{key:"_up",value:function(e){var t=e.querySelector(".hs-dropdown-menu"),n=a(t.querySelectorAll("a")).reverse().filter((function(e){return!e.disabled})),o=t.querySelector("a:focus"),r=n.findIndex((function(e){return e===o}));r+1<n.length&&r++,n[r].focus()}},{key:"_down",value:function(e){var t=e.querySelector(".hs-dropdown-menu"),n=a(t.querySelectorAll("a")).filter((function(e){return!e.disabled})),o=t.querySelector("a:focus"),r=n.findIndex((function(e){return e===o}));r+1<n.length&&r++,n[r].focus()}},{key:"_start",value:function(e){var t=a(e.querySelector(".hs-dropdown-menu").querySelectorAll("a")).filter((function(e){return!e.disabled}));t.length&&t[0].focus()}},{key:"_end",value:function(e){var t=a(e.querySelector(".hs-dropdown-menu").querySelectorAll("a")).reverse().filter((function(e){return!e.disabled}));t.length&&t[0].focus()}},{key:"_byChar",value:function(e,t){var n=this,o=a(e.querySelector(".hs-dropdown-menu").querySelectorAll("a")),r=function(){return o.findIndex((function(e,o){return e.innerText.toLowerCase().charAt(0)===t.toLowerCase()&&n._history.existsInHistory(o)}))},i=r();-1===i&&(this._history.clearHistory(),i=r()),-1!==i&&(o[i].focus(),this._history.addHistory(i))}},{key:"toggle",value:function(e){e.classList.contains("open")?this.close(e):this.open(e)}}],o&&c(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),d}(t.Z);window.HSDropdown=new u,document.addEventListener("load",window.HSDropdown.init())})(),o})()));