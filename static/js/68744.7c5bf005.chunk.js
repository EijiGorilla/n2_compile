/*! For license information please see 68744.7c5bf005.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkn2_compile=self.webpackChunkn2_compile||[]).push([[68744],{37078:(e,t,i)=>{function a(e,t){return(e+t)%t}i.d(t,{g:()=>a})},66530:(e,t,i)=>{i.d(t,{L:()=>n,d:()=>l});var a=i(33850),s=i(54964);const n=(0,a.GH)(class extends a.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.inline=!1,this.label=void 0,this.scale="m",this.type=void 0,this.value=0,this.text=""}render(){const{el:e,inline:t,label:i,scale:n,text:l,type:r,value:o}=this,c=e.id||(0,s.g)(),d=t?this.getInlineSize(n):this.getSize(n),h=.45*d,m=`0 0 ${d} ${d}`,u="determinate"===r,f=2*h*Math.PI,v=o/100*f,g=f-v,p=Math.floor(o),b={"aria-valuenow":p,"aria-valuemin":0,"aria-valuemax":100,complete:100===p},k={r:h,cx:d/2,cy:d/2},y={"stroke-dasharray":`${v} ${g}`};return(0,a.h)(a.AA,{"aria-label":i,id:c,role:"progressbar",...u?b:{}},(0,a.h)("div",{class:"loader__svgs"},(0,a.h)("svg",{"aria-hidden":"true",class:"loader__svg loader__svg--1",viewBox:m},(0,a.h)("circle",{...k})),(0,a.h)("svg",{"aria-hidden":"true",class:"loader__svg loader__svg--2",viewBox:m},(0,a.h)("circle",{...k})),(0,a.h)("svg",{"aria-hidden":"true",class:"loader__svg loader__svg--3",viewBox:m,...u?{style:y}:{}},(0,a.h)("circle",{...k}))),l&&(0,a.h)("div",{class:"loader__text"},l),u&&(0,a.h)("div",{class:"loader__percentage"},o))}getSize(e){return{s:32,m:56,l:80}[e]}getInlineSize(e){return{s:12,m:16,l:20}[e]}get el(){return this}static get style(){return'@charset "UTF-8";@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{position:relative;margin-inline:auto;display:none;align-items:center;justify-content:center;opacity:1;min-block-size:var(--calcite-loader-size);font-size:var(--calcite-loader-font-size);stroke:var(--calcite-ui-brand);stroke-width:3;fill:none;transform:scale(1, 1);animation:loader-color-shift calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 2 / var(--calcite-internal-duration-factor)) alternate-reverse infinite linear;padding-block:var(--calcite-loader-padding, 4rem)}:host([scale=s]){--calcite-loader-font-size:var(--calcite-font-size--2);--calcite-loader-size:2rem;--calcite-loader-size-inline:0.75rem}:host([scale=m]){--calcite-loader-font-size:var(--calcite-font-size-0);--calcite-loader-size:4rem;--calcite-loader-size-inline:1rem}:host([scale=l]){--calcite-loader-font-size:var(--calcite-font-size-2);--calcite-loader-size:6rem;--calcite-loader-size-inline:1.5rem}:host([no-padding]){padding-block:0px}:host{display:flex}.loader__text{display:block;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-ui-text-1);margin-block-start:calc(var(--calcite-loader-size) + 1.5rem)}.loader__percentage{position:absolute;display:block;text-align:center;color:var(--calcite-ui-text-1);font-size:var(--calcite-loader-font-size);inline-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);line-height:0.25;transform:scale(1, 1)}.loader__svgs{position:absolute;overflow:visible;opacity:1;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);animation-iteration-count:infinite;animation-timing-function:linear;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.66 / var(--calcite-internal-duration-factor));animation-name:loader-clockwise}.loader__svg{position:absolute;inset-block-start:0px;transform-origin:center;overflow:visible;inset-inline-start:0;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);animation-iteration-count:infinite;animation-timing-function:linear}@supports (display: grid){.loader__svg--1{animation-name:loader-offset-1}.loader__svg--2{animation-name:loader-offset-2}.loader__svg--3{animation-name:loader-offset-3}}:host([type=determinate]){animation:none;stroke:var(--calcite-ui-border-3)}:host([type=determinate]) .loader__svgs{animation:none}:host([type=determinate]) .loader__svg--3{animation:none;stroke:var(--calcite-ui-brand);stroke-dasharray:150.79632;transform:rotate(-90deg);transition:all var(--calcite-internal-animation-timing-fast) linear}:host([inline]){position:relative;margin:0px;animation:none;stroke:currentColor;stroke-width:2;padding-block:0px;block-size:var(--calcite-loader-size-inline);min-block-size:var(--calcite-loader-size-inline);inline-size:var(--calcite-loader-size-inline);margin-inline-end:calc(var(--calcite-loader-size-inline) * 0.5);vertical-align:calc(var(--calcite-loader-size-inline) * -1 * 0.2)}:host([inline]) .loader__svgs{inset-block-start:0px;margin:0px;inset-inline-start:0;inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([inline]) .loader__svg{inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([complete]){opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity var(--calcite-internal-animation-timing-medium) linear 1000ms, transform var(--calcite-internal-animation-timing-medium) linear 1000ms}:host([complete]) .loader__svgs{opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms, transform calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms}:host([complete]) .loader__percentage{color:var(--calcite-ui-brand);transform:scale(1.05, 1.05);transform-origin:center;transition:color var(--calcite-internal-animation-timing-medium) linear, transform var(--calcite-internal-animation-timing-medium) linear}.loader__svg--1{stroke-dasharray:27.9252444444 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 4.8 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-1{0%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-83.7757333333}100%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:-279.2524444444}}.loader__svg--2{stroke-dasharray:55.8504888889 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.4 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-2{0%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-97.7383555556}100%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:-279.2524444444}}.loader__svg--3{stroke-dasharray:13.9626222222 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 7.734 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-3{0%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-76.7944222222}100%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:-279.2524444444}}@keyframes loader-color-shift{0%{stroke:var(--calcite-ui-brand)}33%{stroke:var(--calcite-ui-brand-press)}66%{stroke:var(--calcite-ui-brand-hover)}100%{stroke:var(--calcite-ui-brand)}}@keyframes loader-clockwise{100%{transform:rotate(360deg)}}:host([hidden]){display:none}[hidden]{display:none}'}},[1,"calcite-loader",{inline:[516],label:[1],scale:[513],type:[513],value:[2],text:[1]}]);function l(){if("undefined"===typeof customElements)return;["calcite-loader"].forEach((e=>{if("calcite-loader"===e)customElements.get(e)||customElements.define(e,n)}))}l()},58768:(e,t,i)=>{i.d(t,{C:()=>a,I:()=>s,S:()=>n});const a={sticky:"sticky-pos"};var s;!function(e){e.circle="circle",e.square="square",e.grip="grip"}(s||(s={}));const n={menuActions:"menu-actions"}},11129:(e,t,i)=>{i.d(t,{C:()=>a,S:()=>s});const a={heading:"heading",container:"container",indented:"container--indented"},s={parentItem:"parent-item"}},37065:(e,t,i)=>{i.d(t,{S:()=>u,d:()=>f});var a=i(33850),s=i(1314),n=i(30769),l=i(46609),r=i(66151),o=i(66530);const c="scrim",d="content",h=72,m=480,u=(0,a.GH)(class extends a.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.resizeObserver=(0,l.c)("resize",(()=>this.handleResize())),this.handleDefaultSlotChange=e=>{this.hasContent=(0,r.w)(e)},this.storeLoaderEl=e=>{this.loaderEl=e,this.handleResize()},this.loading=!1,this.messages=void 0,this.messageOverrides=void 0,this.loaderScale=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.hasContent=!1}onMessagesChange(){}effectiveLocaleChange(){(0,n.u)(this,this.effectiveLocale)}connectedCallback(){(0,s.c)(this),(0,n.c)(this),this.resizeObserver?.observe(this.el)}async componentWillLoad(){await(0,n.s)(this)}disconnectedCallback(){(0,s.d)(this),(0,n.d)(this),this.resizeObserver?.disconnect()}render(){const{hasContent:e,loading:t,messages:i}=this;return(0,a.h)("div",{class:c},t?(0,a.h)("calcite-loader",{label:i.loading,scale:this.loaderScale,ref:this.storeLoaderEl}):null,(0,a.h)("div",{class:d,hidden:!e},(0,a.h)("slot",{onSlotchange:this.handleDefaultSlotChange})))}getScale(e){return e<h?"s":e>=m?"l":"m"}handleResize(){const{loaderEl:e,el:t}=this;e&&(this.loaderScale=this.getScale(Math.min(t.clientHeight,t.clientWidth)??0))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{position:absolute;inset:0px;z-index:var(--calcite-app-z-index-overlay);display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;inset:0px;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-scrim-background-internal))}.content{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-scrim",{loading:[516],messages:[1040],messageOverrides:[1040],loaderScale:[32],defaultMessages:[32],effectiveLocale:[32],hasContent:[32]}]);function f(){if("undefined"===typeof customElements)return;["calcite-scrim","calcite-loader"].forEach((e=>{switch(e){case"calcite-scrim":customElements.get(e)||customElements.define(e,u);break;case"calcite-loader":customElements.get(e)||(0,o.d)()}}))}f()},30459:(e,t,i)=>{i.d(t,{L:()=>M,a:()=>I,b:()=>O,c:()=>m,d:()=>S,e:()=>u,f:()=>V,g:()=>D,h:()=>A,i:()=>h,j:()=>f,k:()=>p,l:()=>v,m:()=>c,n:()=>g,o:()=>C,p:()=>E,q:()=>k,r:()=>x,s:()=>L,t:()=>b});var a=i(37078),s=i(66151),n=i(11129),l=i(42041),r=i(33850),o=i(58768);function c(){this.setUpItems(),this.setUpFilter(),this.deselectRemovedItems()}const d=["ArrowUp","ArrowDown"];function h(){this.setUpItems(),this.setUpFilter(),this.emitCalciteListChange=(0,l.d)(_.bind(this),0),this.emitCalciteListFilter=(0,l.d)(z.bind(this),0)}function m(){this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0})}function u(){this.mutationObserver?.disconnect()}function f(e){const{selectedValues:t}=this,{item:i,value:a,selected:n,shiftPressed:l}=e.detail;n?(this.multiple&&l&&this.selectSiblings(i),this.multiple||this.deselectSiblingItems(i),t.set(a,i)):(t.delete(a),this.multiple&&l&&this.selectSiblings(i,!0)),this.multiple||(w(i,n),n&&(0,s.k)(i)),this.lastSelectedItem=i,this.emitCalciteListChange()}function v(e){const t=e.detail.oldValue,i=this.selectedValues;if(i.has(t)){const a=i.get(t);i.delete(t),i.set(e.detail.newValue,a)}e.stopPropagation()}function g(e){const{el:t,items:i,multiple:a,selectedValues:s}=this;if(a)return;t.contains(e.relatedTarget)||y(i).forEach((t=>{w(t,0===s.size?t.contains(e.target)||e.target===t:t.selected)}))}function p(e){const{key:t,target:i}=e;if(!function(e){return!!d.find((t=>t===e))}(t))return;const{items:a,multiple:n,selectionFollowsFocus:l}=this,{length:r}=a,o=a.indexOf(i);if(!r||-1===o)return;e.preventDefault();const c=a[b(this,i,"ArrowUp"===t?"up":"down")];a.forEach((e=>w(e,e===c))),!n&&l&&(c.selected=!0),(0,s.k)(c)}function b(e,t,i){const{items:s}=e,{length:n}=s,l=s.indexOf(t),r="up"===i?-1:1;let o=1,c=(0,a.g)(l+r*o++,n);const d=c;for(;s[c].disabled&&(c=(0,a.g)(l+r*o++,n),c!==d););return c}function k(e,t){const{items:i}=e;return i.indexOf(t)}function y(e){return e.filter((e=>!e.disabled))}function z(){this.calciteListFilter.emit()}function _(){this.calciteListChange.emit(this.selectedValues)}function x(e){if(e.defaultPrevented)return;const t=e.target,i=this.selectedValues;"CALCITE-PICK-LIST-GROUP"===t.parentElement.tagName&&t.slot===n.S.parentItem?(t.parentElement.remove(),Array.from(t.parentElement.children).forEach((e=>i.delete(e.value)))):(t.remove(),i.delete(t.value)),this.emitCalciteListChange()}function w(e,t){e.disabled||(t?e.removeAttribute("tabindex"):e.setAttribute("tabindex","-1"))}async function E(e){if(this.filterEnabled&&"filter"===e)return void await(0,s.k)(this.filterEl);const{items:t,multiple:i,selectionFollowsFocus:a}=this;if(0===t.length)return;if(i)return y(t)[0]?.setFocus();const n=y(t),l=n.find((e=>e.selected))||n[0];return a&&l&&(l.selected=!0),l.setFocus()}function C(e){this.items=Array.from(this.el.querySelectorAll(e));let t=!1;const{items:i}=this;i.forEach((e=>{e.icon=this.getIconType(),this.multiple||(e.deselectDisabled=!0,w(e,!1)),e.selected&&(t=!0,w(e,!0),this.selectedValues.set(e.value,e))}));const[a]=i;t||!a||a.disabled||w(a,!0)}function S(){const e=this.selectedValues,t=this.items.map((e=>{let{value:t}=e;return t}));e.forEach((e=>{t.includes(e.value)||this.selectedValues.delete(e.value)}))}function I(e){this.items.forEach((t=>{t.value!==e.value&&(t.toggleSelected(!1),this.selectedValues.has(t.value)&&this.selectedValues.delete(t.value))}))}function L(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this.lastSelectedItem)return;const{items:i}=this,a=i.findIndex((e=>e.value===this.lastSelectedItem.value)),s=i.findIndex((t=>t.value===e.value));i.slice(Math.min(a,s),Math.max(a,s)).forEach((e=>{e.toggleSelected(!t),t?this.selectedValues.delete(e.value):this.selectedValues.set(e.value,e)}))}let F;function A(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{filteredData:t,filterText:i}=this,a=t.map((e=>e.value));let n=!1;F||(F=new Set);const l=this.items?.filter((e=>{const t=e.parentElement;t.matches("calcite-pick-list-group")&&F.add(t);const s=!i||a.includes(e.value);return e.hidden=!s,n||(n=s&&e.selected),s}))||[];F.forEach((e=>{const t=l.some((t=>e.contains(t)));if(e.hidden=!t,!t)return;const i=(0,s.g)(e,"parent-item");i&&(i.hidden=!1,l.includes(i)&&Array.from(e.children).forEach((e=>e.hidden=!1)))})),F.clear(),l.length>0&&!n&&!this.multiple&&w(l[0],!0),this.setFilteredItems(l),e&&this.emitCalciteListFilter()}function V(){const e=this.filterEl?.filteredItems;e&&(this.filteredData=e),this.handleFilter()}function O(e){e.stopPropagation();const{filteredItems:t,value:i}=e.currentTarget;this.filterText=i,this.filteredData=t,this.handleFilter(!0)}function D(){return this.items.map((e=>({label:e.label,description:e.description,metadata:e.metadata,value:e.value})))}const M=e=>{let{props:{disabled:t,loading:i,filterEnabled:a,dataForFilter:n,handleFilterEvent:l,filterPlaceholder:c,filterText:d,setFilterEl:h,dragEnabled:m,storeAssistiveEl:u},...f}=e;const v=(0,r.h)("slot",null);return(0,r.h)(r.AA,{"aria-busy":(0,s.t)(i),role:"menu",...f},(0,r.h)("section",null,m?(0,r.h)("span",{"aria-live":"assertive",class:"assistive-text",ref:u}):null,(0,r.h)("header",{class:{[o.C.sticky]:!0}},a?(0,r.h)("calcite-filter",{"aria-label":c,disabled:i||t,items:n,onCalciteFilterChange:l,placeholder:c,value:d,ref:h}):null,(0,r.h)("slot",{name:o.S.menuActions})),i?(0,r.h)("calcite-scrim",{loading:i}):null,v))}}}]);
//# sourceMappingURL=68744.7c5bf005.chunk.js.map