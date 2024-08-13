/*! For license information please see 98136.09240876.chunk.js.LICENSE.txt */
(self.webpackChunkn2_compile=self.webpackChunkn2_compile||[]).push([[98136,60141,8107,3121,23504,58097],{60141:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=60141,e.exports=t},37078:(e,t,n)=>{"use strict";function i(e,t){return(e+t)%t}n.d(t,{g:()=>i})},3943:(e,t,n)=>{"use strict";n.r(t),n.d(t,{CalciteRadioButton:()=>b,defineCustomElement:()=>m});var i=n(33850),o=n(37078),a=n(66151),s=n(81054),r=n(54964),c=n(94002),d=n(4593),l=n(33150);const u="container",h=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalRadioButtonBlur=(0,i.yM)(this,"calciteInternalRadioButtonBlur",6),this.calciteRadioButtonChange=(0,i.yM)(this,"calciteRadioButtonChange",6),this.calciteInternalRadioButtonCheckedChange=(0,i.yM)(this,"calciteInternalRadioButtonCheckedChange",6),this.calciteInternalRadioButtonFocus=(0,i.yM)(this,"calciteInternalRadioButtonFocus",6),this.selectItem=(e,t)=>{e[t].click()},this.queryButtons=()=>Array.from(this.rootNode.querySelectorAll("calcite-radio-button:not([hidden])")).filter((e=>e.name===this.name)),this.isFocusable=()=>{const e=this.queryButtons(),t=e.find((e=>!e.disabled)),n=e.find((e=>e.checked));return t===this.el&&!n},this.check=()=>{this.disabled||(this.focused=!0,this.setFocus(),this.checked||(this.uncheckAllRadioButtonsInGroup(),this.checked=!0,this.calciteRadioButtonChange.emit()))},this.clickHandler=()=>{this.disabled||this.check()},this.setContainerEl=e=>{this.containerEl=e},this.handleKeyDown=e=>{const{key:t}=e,{el:n}=this;if(-1===["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"," "].indexOf(t))return;if(" "===t)return this.check(),void e.preventDefault();let i=t;"rtl"===(0,a.b)(n)&&("ArrowRight"===t&&(i="ArrowLeft"),"ArrowLeft"===t&&(i="ArrowRight"));const s=Array.from(this.rootNode.querySelectorAll("calcite-radio-button:not([hidden]")).filter((e=>e.name===this.name));let r=0;const c=s.length;switch(s.some(((e,t)=>{if(e.checked)return r=t,!0})),i){case"ArrowLeft":case"ArrowUp":return e.preventDefault(),void this.selectItem(s,(0,o.g)(Math.max(r-1,-1),c));case"ArrowRight":case"ArrowDown":return e.preventDefault(),void this.selectItem(s,(0,o.g)(r+1,c));default:return}},this.onContainerBlur=()=>{this.focused=!1,this.calciteInternalRadioButtonBlur.emit()},this.onContainerFocus=()=>{this.disabled||(this.focused=!0,this.calciteInternalRadioButtonFocus.emit())},this.checked=!1,this.disabled=!1,this.focused=!1,this.form=void 0,this.guid=void 0,this.hidden=!1,this.hovered=!1,this.label=void 0,this.name=void 0,this.required=!1,this.scale="m",this.value=void 0}checkedChanged(e){e&&this.uncheckOtherRadioButtonsInGroup(),this.calciteInternalRadioButtonCheckedChange.emit()}disabledChanged(){this.updateTabIndexOfOtherRadioButtonsInGroup()}hiddenChanged(){this.updateTabIndexOfOtherRadioButtonsInGroup()}nameChanged(){this.checkLastRadioButton()}async setFocus(){await(0,l.c)(this),this.disabled||(0,a.k)(this.containerEl)}syncHiddenFormInput(e){e.type="radio"}onLabelClick(e){if(this.disabled||this.hidden)return;const t=e.currentTarget,n=t.for?this.rootNode.querySelector(`calcite-radio-button[id="${t.for}"]`):t.querySelector(`calcite-radio-button[name="${this.name}"]`);n&&(n.focused=!0,this.setFocus(),n.checked||(this.uncheckOtherRadioButtonsInGroup(),n.checked=!0,this.calciteRadioButtonChange.emit()))}checkLastRadioButton(){const e=this.queryButtons().filter((e=>e.checked));if(e?.length>1){const t=e[e.length-1];e.filter((e=>e!==t)).forEach((e=>{e.checked=!1,e.emitCheckedChange()}))}}async emitCheckedChange(){this.calciteInternalRadioButtonCheckedChange.emit()}uncheckAllRadioButtonsInGroup(){this.queryButtons().forEach((e=>{e.checked&&(e.checked=!1,e.focused=!1)}))}uncheckOtherRadioButtonsInGroup(){this.queryButtons().filter((e=>e.guid!==this.guid)).forEach((e=>{e.checked&&(e.checked=!1,e.focused=!1)}))}updateTabIndexOfOtherRadioButtonsInGroup(){this.queryButtons().filter((e=>e.guid!==this.guid&&!e.disabled)).forEach((e=>{(0,i.xE)(e)}))}getTabIndex(){if(!this.disabled)return this.checked||this.isFocusable()?0:-1}pointerEnterHandler(){this.disabled||(this.hovered=!0)}pointerLeaveHandler(){this.disabled||(this.hovered=!1)}connectedCallback(){this.rootNode=this.el.getRootNode(),this.guid=this.el.id||`calcite-radio-button-${(0,r.g)()}`,this.name&&this.checkLastRadioButton(),(0,c.c)(this),(0,d.c)(this),(0,s.c)(this),this.updateTabIndexOfOtherRadioButtonsInGroup()}componentWillLoad(){(0,l.a)(this)}componentDidLoad(){(0,l.s)(this),this.focused&&!this.disabled&&this.setFocus()}disconnectedCallback(){(0,c.d)(this),(0,d.d)(this),(0,s.d)(this),this.updateTabIndexOfOtherRadioButtonsInGroup()}componentDidRender(){(0,c.u)(this)}render(){const e=this.getTabIndex();return(0,i.h)(i.AA,{onClick:this.clickHandler,onKeyDown:this.handleKeyDown},(0,i.h)("div",{"aria-checked":(0,a.t)(this.checked),"aria-label":(0,d.g)(this),class:u,onBlur:this.onContainerBlur,onFocus:this.onContainerFocus,role:"radio",tabIndex:e,ref:this.setContainerEl},(0,i.h)("div",{class:"radio"})),(0,i.h)(s.H,{component:this}))}get el(){return this}static get watchers(){return{checked:["checkedChanged"],disabled:["disabledChanged"],hidden:["hiddenChanged"],name:["nameChanged"]}}static get style(){return':host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block;cursor:pointer}:host .container{position:relative;outline:2px solid transparent;outline-offset:2px}:host .radio{cursor:pointer;border-radius:9999px;background-color:var(--calcite-ui-foreground-1);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input)}:host([hovered]) .radio,:host(:not([checked])[focused]:not([disabled])) .radio{box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}:host([focused]) .radio{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([disabled]) .radio{cursor:default;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hovered][disabled]) .radio{box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input)}:host([scale=s]){--calcite-radio-size:var(--calcite-font-size--2)}:host([scale=m]){--calcite-radio-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-radio-size:var(--calcite-font-size-0)}.radio{block-size:var(--calcite-radio-size);max-inline-size:var(--calcite-radio-size);min-inline-size:var(--calcite-radio-size)}:host([scale=s][checked]) .radio,:host([hovered][scale=s][checked][disabled]) .radio{box-shadow:inset 0 0 0 4px var(--calcite-ui-brand)}:host([scale=s][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 4px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1)}:host([scale=m][checked]) .radio,:host([hovered][scale=m][checked][disabled]) .radio{box-shadow:inset 0 0 0 5px var(--calcite-ui-brand)}:host([scale=m][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 5px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1)}:host([scale=l][checked]) .radio,:host([hovered][scale=l][checked][disabled]) .radio{box-shadow:inset 0 0 0 6px var(--calcite-ui-brand)}:host([scale=l][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 6px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1)}@media (forced-colors: active){:host([checked]) .radio::after,:host([checked][disabled]) .radio::after{content:"";inline-size:var(--calcite-radio-size);block-size:var(--calcite-radio-size);background-color:windowText;display:block}}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}'}},[1,"calcite-radio-button",{checked:[1540],disabled:[516],focused:[1540],form:[513],guid:[1537],hidden:[516],hovered:[1540],label:[1],name:[513],required:[516],scale:[513],value:[1032],setFocus:[64],emitCheckedChange:[64]},[[1,"pointerenter","pointerEnterHandler"],[1,"pointerleave","pointerLeaveHandler"]]]);function f(){if("undefined"===typeof customElements)return;["calcite-radio-button"].forEach((e=>{if("calcite-radio-button"===e)customElements.get(e)||customElements.define(e,h)}))}f();const b=h,m=f},81054:(e,t,n)=>{"use strict";n.d(t,{H:()=>g,a:()=>m,c:()=>u,d:()=>b,f:()=>h,r:()=>l,s:()=>d});var i=n(66151),o=n(33850);const a="hidden-form-input";function s(e){return"checked"in e}const r=new WeakMap,c=new WeakSet;function d(e){const{formEl:t}=e;return!!t&&(t.requestSubmit(),!0)}function l(e){e.formEl?.reset()}function u(e){const{el:t,value:n}=e,o=h(e);if(!o||function(e,t){if((0,i.c)(t.parentElement,"[form]"))return!0;const n="calciteInternalFormComponentRegister";let o=!1;return e.addEventListener(n,(e=>{o=e.composedPath().some((e=>c.has(e))),e.stopPropagation()}),{once:!0}),t.dispatchEvent(new CustomEvent(n,{bubbles:!0,composed:!0})),o}(o,t))return;e.formEl=o,e.defaultValue=n,s(e)&&(e.defaultChecked=e.checked);const a=(e.onFormReset||f).bind(e);o.addEventListener("reset",a),r.set(e.el,a),c.add(t)}function h(e){const{el:t,form:n}=e;return n?(0,i.q)(t,{id:n}):(0,i.c)(t,"form")}function f(){s(this)?this.checked=this.defaultChecked:this.value=this.defaultValue}function b(e){const{el:t,formEl:n}=e;if(!n)return;const i=r.get(t);n.removeEventListener("reset",i),r.delete(t),e.formEl=null,c.delete(t)}function m(e,t){e.defaultValue=t}const p=e=>{e.target.dispatchEvent(new CustomEvent("calciteInternalHiddenInputChange",{bubbles:!0}))},v=e=>e.removeEventListener("change",p);function k(e,t,n){const{defaultValue:i,disabled:o,form:a,name:r,required:c}=e;t.defaultValue=i,t.disabled=o,t.name=r,t.required=c,t.tabIndex=-1,a?t.setAttribute("form",a):t.removeAttribute("form"),s(e)?(t.checked=e.checked,t.defaultChecked=e.defaultChecked,t.value=e.checked?n||"on":""):t.value=n||"",e.syncHiddenFormInput?.(t)}const g=e=>{let{component:t}=e;return function(e){const{el:t,formEl:n,name:i,value:o}=e,{ownerDocument:s}=t,r=t.querySelectorAll(`input[slot="${a}"]`);if(!n||!i)return void r.forEach((e=>{v(e),e.remove()}));const c=Array.isArray(o)?o:[o],d=[],l=new Set;let u;r.forEach((t=>{const n=c.find((e=>e==t.value));null!=n?(l.add(n),k(e,t,n)):d.push(t)})),c.forEach((t=>{if(l.has(t))return;let n=d.pop();n||(n=s.createElement("input"),n.slot=a),u||(u=s.createDocumentFragment()),u.append(n),n.addEventListener("change",p),k(e,n,t)})),u&&t.append(u),d.forEach((e=>{v(e),e.remove()}))}(t),(0,o.h)("slot",{name:a})}},94002:(e,t,n)=>{"use strict";n.d(t,{c:()=>p,d:()=>v,g:()=>o,u:()=>h});var i=n(33850);function o(){if(!i.Z5.isBrowser)return"";const e=navigator.userAgentData;return e?.brands?e.brands.map((e=>{let{brand:t,version:n}=e;return`${t}/${n}`})).join(" "):navigator.userAgent}const a=/firefox/i.test(o()),s=a?new WeakMap:null;function r(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function c(e){const t=e.target;if(a&&!s.get(t))return;const{disabled:n}=t;n&&e.preventDefault()}const d=["mousedown","mouseup","click"];function l(e){if(a&&!s.get(e.target))return;const{disabled:t}=e.target;t&&(e.stopImmediatePropagation(),e.preventDefault())}const u={capture:!0};function h(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e.disabled)return e.el.setAttribute("tabindex","-1"),e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void f(e);m(e),"function"===typeof t?e.el.setAttribute("tabindex",t.call(e)?"0":"-1"):!0===t?e.el.setAttribute("tabindex","0"):!1===t&&e.el.removeAttribute("tabindex"),e.el.removeAttribute("aria-disabled")}function f(e){e.el.click=r,function(e){if(!e)return;e.addEventListener("pointerdown",c,u),d.forEach((t=>e.addEventListener(t,l,u)))}(a?b(e):e.el)}function b(e){return s.get(e.el)}function m(e){delete e.el.click,function(e){if(!e)return;e.removeEventListener("pointerdown",c,u),d.forEach((t=>e.removeEventListener(t,l,u)))}(a?b(e):e.el)}function p(e){if(!e.disabled||!a)return;const t=e.el.parentElement||e.el;s.set(e.el,t),f(e)}function v(e){a&&(s.delete(e.el),m(e))}},4593:(e,t,n)=>{"use strict";n.d(t,{a:()=>s,c:()=>b,d:()=>m,g:()=>v,l:()=>a});var i=n(66151);const o="calciteInternalLabelClick",a="calciteInternalLabelConnected",s="calciteInternalLabelDisconnected",r="calcite-label",c=new WeakMap,d=new WeakMap,l=new WeakMap,u=new WeakMap,h=new WeakSet,f=e=>{const{id:t}=e,n=t&&(0,i.q)(e,{selector:`${r}[for="${t}"]`});if(n)return n;const o=(0,i.c)(e,r);return!o||function(e,t){let n;const i="custom-element-ancestor-check",o=i=>{i.stopImmediatePropagation();const o=i.composedPath();n=o.slice(o.indexOf(t),o.indexOf(e))};e.addEventListener(i,o,{once:!0}),t.dispatchEvent(new CustomEvent(i,{composed:!0,bubbles:!0})),e.removeEventListener(i,o);const a=n.filter((n=>n!==t&&n!==e)).filter((e=>e.tagName?.includes("-")));return a.length>0}(o,e)?null:o};function b(e){const t=f(e.el);if(d.has(t)&&t===e.labelEl||!t&&h.has(e))return;const n=E.bind(e);if(t){e.labelEl=t;const i=c.get(t)||[];i.push(e),c.set(t,i.sort(p)),d.has(e.labelEl)||(d.set(e.labelEl,k),e.labelEl.addEventListener(o,k)),h.delete(e),document.removeEventListener(a,l.get(e)),u.set(e,n),document.addEventListener(s,n)}else h.has(e)||(n(),document.removeEventListener(s,u.get(e)))}function m(e){if(h.delete(e),document.removeEventListener(a,l.get(e)),document.removeEventListener(s,u.get(e)),l.delete(e),u.delete(e),!e.labelEl)return;const t=c.get(e.labelEl);1===t.length&&(e.labelEl.removeEventListener(o,d.get(e.labelEl)),d.delete(e.labelEl)),c.set(e.labelEl,t.filter((t=>t!==e)).sort(p)),e.labelEl=null}function p(e,t){return(0,i.y)(e.el,t.el)?-1:1}function v(e){return e.label||e.labelEl?.textContent?.trim()||""}function k(e){const t=e.detail.sourceEvent.target,n=c.get(this),i=n.find((e=>e.el===t));if(n.includes(i))return;const o=n[0];o.disabled||o.onLabelClick(e)}function g(){h.has(this)&&b(this)}function E(){h.add(this);const e=l.get(this)||g.bind(this);l.set(this,e),document.addEventListener(a,e)}},33150:(e,t,n)=>{"use strict";n.d(t,{a:()=>s,b:()=>c,c:()=>d,s:()=>r});var i=n(33850);const o=new WeakMap,a=new WeakMap;function s(e){a.set(e,new Promise((t=>o.set(e,t))))}function r(e){o.get(e)()}function c(e){return a.get(e)}async function d(e){if(await c(e),i.Z5.isBrowser)return(0,i.xE)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}}}]);
//# sourceMappingURL=98136.09240876.chunk.js.map