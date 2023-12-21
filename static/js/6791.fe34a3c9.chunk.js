/*! For license information please see 6791.fe34a3c9.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkn2_compile=self.webpackChunkn2_compile||[]).push([[6791],{92109:(t,e,n)=>{n.d(e,{A:()=>o,d:()=>c});var i=n(51554),a=n(92358),r=n(79730),s=n(57601);function l(t){return function(t){let{r:e,g:n,b:i}=t;e/=255,n/=255,i/=255;const a=Math.max(e,n,i),r=Math.min(e,n,i),s=a-r;if(a===r)return 0;let l=(a+r)/2;switch(a){case e:l=(n-i)/s+(n<i?6:0);break;case n:l=(i-e)/s+2;break;case i:l=(e-n)/s+4}return Math.round(60*l)}((0,r.g)(t))}const o=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.scale="m",this.thumbnail=void 0,this.fullName=void 0,this.username=void 0,this.userId=void 0,this.label=void 0,this.thumbnailFailedToLoad=!1}render(){return this.determineContent()}determineContent(){if(this.thumbnail&&!this.thumbnailFailedToLoad)return(0,i.h)("img",{alt:this.label||"",class:"thumbnail",onError:()=>this.thumbnailFailedToLoad=!0,src:this.thumbnail});const t=this.generateInitials(),e=this.generateFillColor();return(0,i.h)("span",{"aria-label":this.label||this.fullName,class:"background",role:"figure",style:{backgroundColor:e}},t?(0,i.h)("span",{"aria-hidden":"true",class:"initials"},t):(0,i.h)("calcite-icon",{class:"icon",icon:"user",scale:this.scale}))}generateFillColor(){const{userId:t,username:e,fullName:n,el:i}=this,s=(0,a.r)(i),o=t&&"#".concat(t.substr(t.length-6)),c=e||n||"",u=o&&(0,r.i)(o)?o:function(t){let e=0;for(let i=0;i<t.length;i++)e=t.charCodeAt(i)+((e<<5)-e);let n="#";for(let i=0;i<3;i++)n+=("00"+(e>>8*i&255).toString(16)).substr(-2);return n}(c);if(!t&&!c||!(0,r.i)(u))return"var(--calcite-ui-foreground-2)";const h=l(u),d="dark"===s?20:90;return"hsl(".concat(h,", 60%, ").concat(d,"%)")}generateInitials(){const{fullName:t,username:e}=this;return t?t.trim().split(" ").map((t=>t.substring(0,1))).join(""):!!e&&e.substring(0,2)}get el(){return this}static get style(){return":host{display:inline-block;overflow:hidden;border-radius:50%}:host([scale=s]){block-size:1.5rem;inline-size:1.5rem;font-size:var(--calcite-font-size--3)}:host([scale=m]){block-size:2rem;inline-size:2rem;font-size:var(--calcite-font-size--2)}:host([scale=l]){block-size:2.75rem;inline-size:2.75rem;font-size:var(--calcite-font-size-0)}.icon{display:flex}.background{display:flex;block-size:100%;inline-size:100%;align-items:center;justify-content:center;border-radius:50%}.initials{font-weight:var(--calcite-font-weight-bold);text-transform:uppercase;color:var(--calcite-ui-text-2)}.thumbnail{block-size:100%;inline-size:100%;border-radius:50%}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-avatar",{scale:[513],thumbnail:[513],fullName:[513,"full-name"],username:[513],userId:[513,"user-id"],label:[1],thumbnailFailedToLoad:[32]}]);function c(){if("undefined"===typeof customElements)return;["calcite-avatar","calcite-icon"].forEach((t=>{switch(t){case"calcite-avatar":customElements.get(t)||customElements.define(t,o);break;case"calcite-icon":customElements.get(t)||(0,s.d)()}}))}c()},56791:(t,e,n)=>{n.r(e),n.d(e,{CalciteNavigationUser:()=>f,defineCustomElement:()=>m});var i=n(51554),a=n(47242),r=n(92109),s=n(57601);const l="text-container",o="full-name",c="username",u="button",h=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.active=void 0,this.fullName=void 0,this.label=void 0,this.textDisabled=!1,this.thumbnail=void 0,this.userId=void 0,this.username=void 0}async setFocus(){await(0,a.c)(this),this.el.focus()}componentWillLoad(){(0,a.a)(this)}componentDidLoad(){(0,a.s)(this)}render(){return(0,i.h)(i.AA,null,(0,i.h)("button",{"aria-label":this.label,class:u},(0,i.h)("calcite-avatar",{"full-name":this.fullName,label:this.label,thumbnail:this.thumbnail,"user-id":this.userId,username:this.username}),(this.fullName||this.username)&&!this.textDisabled&&(0,i.h)("div",{class:l},this.fullName&&(0,i.h)("span",{class:o,key:o},this.fullName),this.username&&(0,i.h)("span",{class:c,key:c},this.username))))}static get delegatesFocus(){return!0}get el(){return this}static get style(){return":host{display:inline-flex;outline:2px solid transparent;outline-offset:2px}:host .button{background-color:transparent;border:none;margin:0px;display:flex;cursor:pointer;align-items:center;justify-content:center;font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size-0);line-height:1.25rem;outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-block-end:2px solid transparent}:host(:hover) .button,:host(:focus) .button{background-color:var(--calcite-ui-foreground-2)}:host(:focus) .button{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host(:active) .button{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}calcite-avatar{padding-inline:1rem}calcite-avatar~.text-container{padding-inline-start:0px}:host([active]) .button{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-1);--calcite-ui-icon-color:var(--calcite-ui-brand)}.text-container{margin-block-start:0.125rem;display:flex;flex-direction:column;padding-inline:1rem;text-align:start}.full-name{margin-inline-start:0px;font-size:var(--calcite-font-size-0);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.username{color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host([hidden]){display:none}[hidden]{display:none}"}},[17,"calcite-navigation-user",{active:[516],fullName:[1,"full-name"],label:[1],textDisabled:[516,"text-disabled"],thumbnail:[1],userId:[1,"user-id"],username:[1],setFocus:[64]}]);function d(){if("undefined"===typeof customElements)return;["calcite-navigation-user","calcite-avatar","calcite-icon"].forEach((t=>{switch(t){case"calcite-navigation-user":customElements.get(t)||customElements.define(t,h);break;case"calcite-avatar":customElements.get(t)||(0,r.d)();break;case"calcite-icon":customElements.get(t)||(0,s.d)()}}))}d();const f=h,m=d},79730:(t,e,n)=>{n.d(e,{C:()=>H,a:()=>k,b:()=>o,c:()=>_,d:()=>S,e:()=>p,f:()=>L,g:()=>A,h:()=>b,i:()=>u,j:()=>f,k:()=>i,n:()=>m,o:()=>c,p:()=>C,r:()=>g,t:()=>z});const i=/^[0-9A-F]$/i,a=/^#[0-9A-F]{3}$/i,r=/^#[0-9A-F]{6}$/i,s=/^#[0-9A-F]{4}$/i,l=/^#[0-9A-F]{8}$/i,o=t=>Number((100*t).toFixed()),c=t=>Number((t/100).toFixed(2));function u(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return d(t,e)||f(t,e)}function h(t,e,n){return!!t&&(t.length===e&&n.test(t))}function d(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return h(t,e?5:4,e?s:a)}function f(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return h(t,e?9:7,e?l:r)}function m(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if((t=t.toLowerCase()).startsWith("#")||(t="#".concat(t)),d(t,e))return g(A(t,e));if(e&&n&&u(t,!1)){const e=d(t,!1);return g(A("".concat(t).concat(e?"f":"ff"),!0))}return t}function b(t){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?t.hexa():t.hex()}function g(t){const{r:e,g:n,b:i}=t,a=v(e),r=v(n),s=v(i),l="a"in t?v(255*t.a):"";return"#".concat(a).concat(r).concat(s).concat(l).toLowerCase()}function v(t){return t.toString(16).padStart(2,"0")}function S(t){var e;const n={...t,a:null!==(e=t.alpha)&&void 0!==e?e:1};return delete n.alpha,n}function p(t){var e;const n={...t,alpha:null!==(e=t.a)&&void 0!==e?e:1};return delete n.a,n}function A(t){let e,n,i,a;if(!u(t,arguments.length>1&&void 0!==arguments[1]&&arguments[1]))return null;if(3===(t=t.replace("#","")).length||4===t.length){const[r,s,l,o]=t.split("");e=parseInt("".concat(r).concat(r),16),n=parseInt("".concat(s).concat(s),16),i=parseInt("".concat(l).concat(l),16),a=parseInt("".concat(o).concat(o),16)/255}else e=parseInt(t.slice(0,2),16),n=parseInt(t.slice(2,4),16),i=parseInt(t.slice(4,6),16),a=parseInt(t.slice(6,8),16)/255;return isNaN(a)?{r:e,g:n,b:i}:{r:e,g:n,b:i,a:a}}const H={HEX:"hex",HEXA:"hexa",RGB_CSS:"rgb-css",RGBA_CSS:"rgba-css",HSL_CSS:"hsl-css",HSLA_CSS:"hsla-css"},x={RGB:"rgb",RGBA:"rgba",HSL:"hsl",HSLA:"hsla",HSV:"hsv",HSVA:"hsva"};function C(t){if("string"===typeof t){if(t.startsWith("#")){const{length:e}=t;if(4===e||7===e)return H.HEX;if(5===e||9===e)return H.HEXA}if(t.startsWith("rgba("))return H.RGBA_CSS;if(t.startsWith("rgb("))return H.RGB_CSS;if(t.startsWith("hsl("))return H.HSL_CSS;if(t.startsWith("hsla("))return H.HSLA_CSS}if("object"===typeof t){if(y(t,"r","g","b"))return y(t,"a")?x.RGBA:x.RGB;if(y(t,"h","s","l"))return y(t,"a")?x.HSLA:x.HSL;if(y(t,"h","s","v"))return y(t,"a")?x.HSVA:x.HSV}return null}function y(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return n.every((e=>e&&t&&"".concat(e)in t))}function _(t,e){return(null===t||void 0===t?void 0:t.rgb().array().toString())===(null===e||void 0===e?void 0:e.rgb().array().toString())}function k(t){return t===H.HEXA||t===H.RGBA_CSS||t===H.HSLA_CSS||t===x.RGBA||t===x.HSLA||t===x.HSVA}function L(t){return t===H.HEX?H.HEXA:t===H.RGB_CSS?H.RGBA_CSS:t===H.HSL_CSS?H.HSLA_CSS:t===x.RGB?x.RGBA:t===x.HSL?x.HSLA:t===x.HSV?x.HSVA:t}function z(t){return t===H.HEXA?H.HEX:t===H.RGBA_CSS?H.RGB_CSS:t===H.HSLA_CSS?H.HSL_CSS:t===x.RGBA?x.RGB:t===x.HSLA?x.HSL:t===x.HSVA?x.HSV:t}}}]);
//# sourceMappingURL=6791.fe34a3c9.chunk.js.map