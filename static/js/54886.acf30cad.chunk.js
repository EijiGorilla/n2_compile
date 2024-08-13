/*! For license information please see 54886.acf30cad.chunk.js.LICENSE.txt */
(self.webpackChunkn2_compile=self.webpackChunkn2_compile||[]).push([[54886,60141,8107,3121,23504,58097],{60141:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=60141,e.exports=t},52947:(e,t,i)=>{"use strict";i.r(t),i.d(t,{CalciteRating:()=>g,defineCustomElement:()=>b});var n=i(33850),s=i(81054),a=i(54964),l=i(94002),o=i(4593),r=i(33150),c=i(1314),h=i(30769),u=i(66151),d=i(22232),f=i(36177);const v=e=>{let{full:t,scale:i,partial:s}=e;return(0,n.h)("calcite-icon",{class:s?void 0:"icon",icon:t?"star-f":"star",scale:i})},m=(0,n.GH)(class extends n.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteRatingChange=(0,n.yM)(this,"calciteRatingChange",6),this.handleRatingPointerOver=()=>{this.isKeyboardInteraction=!1},this.handleRatingPointerOut=()=>{this.isKeyboardInteraction=!0,this.hoverValue=null},this.handleHostKeyDown=()=>{this.isKeyboardInteraction=!0},this.handleLabelKeyDown=e=>{const t=this.getValueFromLabelEvent(e),i=e.key,n=" "==i?void 0:Number(i);if(this.emit=!0,isNaN(n))switch(i){case"Enter":case" ":this.value=this.required||this.value!==t?t:0;break;case"ArrowLeft":this.value=this.getPreviousRatingValue(t),this.updateFocus(),e.preventDefault();break;case"ArrowRight":this.value=this.getNextRatingValue(t),this.updateFocus(),e.preventDefault();break;case"Tab":this.hoverValue=null}else(!this.required&&n>=0&&n<=this.max||this.required&&n>0&&n<=this.max)&&(this.value=n),this.updateFocus()},this.handleInputChange=e=>{if(!0===this.isKeyboardInteraction){const t=Number(e.target.value);this.hoverValue=t,this.value=t}},this.handleLabelPointerOver=e=>{this.hoverValue=this.getValueFromLabelEvent(e)},this.handleLabelPointerDown=e=>{const t=e.currentTarget,i=this.getValueFromLabelEvent(e);this.hoverValue=i,this.emit=!0,this.value=this.required||this.value!==i?i:0,t.focus()},this.handleLabelClick=e=>{e.preventDefault()},this.handleLabelFocus=e=>{const t=this.getValueFromLabelEvent(e);this.hoverValue=t},this.setLabelEl=e=>{this.labelElements.push(e)},this.emit=!1,this.guid=`calcite-ratings-${(0,a.g)()}`,this.isKeyboardInteraction=!0,this.labelElements=[],this.max=5,this.average=void 0,this.count=void 0,this.disabled=!1,this.form=void 0,this.messages=void 0,this.messageOverrides=void 0,this.name=void 0,this.readOnly=!1,this.required=!1,this.scale="m",this.showChip=!1,this.value=0,this.effectiveLocale="",this.defaultMessages=void 0,this.hoverValue=void 0}onMessagesChange(){}handleValueUpdate(e){this.hoverValue=e,this.emit&&this.calciteRatingChange.emit(),this.emit=!1}effectiveLocaleChange(){(0,h.u)(this,this.effectiveLocale)}connectedCallback(){(0,l.c)(this),(0,c.c)(this),(0,h.c)(this),(0,o.c)(this),(0,s.c)(this)}async componentWillLoad(){await(0,h.s)(this),(0,r.a)(this)}componentWillRender(){this.starsMap=Array.from({length:this.max},((e,t)=>{const i=t+1,n=!this.hoverValue&&this.average&&!this.value&&i<=this.average,s=i===this.value,a=this.average&&this.average+1-i,l=i<=this.hoverValue;return{average:n,checked:s,fraction:a,hovered:l,id:`${this.guid}-${i}`,partial:!this.hoverValue&&!this.value&&!l&&a>0&&a<1,selected:this.value>=i,value:i,tabIndex:this.getTabIndex(i)}}))}componentDidLoad(){(0,r.s)(this)}disconnectedCallback(){(0,l.d)(this),(0,c.d)(this),(0,h.d)(this),(0,o.d)(this),(0,s.d)(this)}componentDidRender(){(0,l.u)(this)}render(){return(0,n.h)(n.AA,{onKeyDown:this.handleHostKeyDown,onPointerOut:this.handleRatingPointerOut,onPointerOver:this.handleRatingPointerOver},(0,n.h)("span",{class:"wrapper"},(0,n.h)("fieldset",{class:"fieldset",disabled:this.disabled},(0,n.h)("legend",{class:"visually-hidden"},this.messages.rating),this.starsMap.map((e=>{let{average:t,checked:i,fraction:s,hovered:a,id:l,partial:o,selected:r,value:c,tabIndex:h}=e;return(0,n.h)("label",{class:{star:!0,selected:r,hovered:a,average:t,partial:o},"data-value":c,htmlFor:l,onClick:this.handleLabelClick,onFocus:this.handleLabelFocus,onKeyDown:this.handleLabelKeyDown,onPointerDown:this.handleLabelPointerDown,onPointerOver:this.handleLabelPointerOver,tabIndex:h,ref:this.setLabelEl},(0,n.h)("input",{checked:i,class:"visually-hidden",disabled:this.disabled||this.readOnly,id:l,name:this.guid,onChange:this.handleInputChange,tabIndex:-1,type:"radio",value:c}),(0,n.h)(v,{full:r||t,scale:this.scale}),o&&(0,n.h)("div",{class:"fraction",style:{width:100*s+"%"}},(0,n.h)(v,{full:!0,partial:!0,scale:this.scale})),(0,n.h)("span",{class:"visually-hidden"},this.messages.stars.replace("{num}",`${c}`)))})),(this.count||this.average)&&this.showChip?(0,n.h)("calcite-chip",{scale:this.scale,value:this.count?.toString()},!!this.average&&(0,n.h)("span",{class:"number--average"},this.average.toString()),!!this.count&&(0,n.h)("span",{class:"number--count"},"(",this.count?.toString(),")")):null),(0,n.h)(s.H,{component:this})))}onLabelClick(){this.setFocus()}updateFocus(){this.hoverValue=this.value,this.labelElements[this.value-1].focus()}getTabIndex(e){return this.readOnly||this.value!==e&&(this.value||1!==e)?-1:0}getValueFromLabelEvent(e){const t=e.currentTarget;return Number(t.getAttribute("data-value"))}getNextRatingValue(e){return 5===e?1:e+1}getPreviousRatingValue(e){return 1===e?5:e-1}async setFocus(){await(0,r.c)(this),(0,u.f)(this.el)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],value:["handleValueUpdate"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([read-only]) *,:host([disabled]) *,:host([read-only]) ::slotted(*),:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;align-items:center;inline-size:-moz-fit-content;inline-size:fit-content}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){block-size:1.5rem;--calcite-rating-spacing-unit:0.25rem}:host([scale=m]){block-size:2rem;--calcite-rating-spacing-unit:0.5rem}:host([scale=l]){block-size:2.75rem;--calcite-rating-spacing-unit:0.75rem}.fieldset{margin:0;display:flex;border-width:0;padding:0;align-items:center;gap:var(--calcite-rating-spacing-unit)}.wrapper{display:inline-block}.star{transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;position:relative;display:flex;flex-direction:column;cursor:pointer;color:var(--calcite-ui-border-input)}.star:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.average,.fraction{color:var(--calcite-ui-warning)}.hovered,.selected{color:var(--calcite-ui-brand)}.fraction{transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;position:absolute;pointer-events:none;inset-block-start:0;overflow:hidden;inset-inline-start:0}calcite-chip{pointer-events:none;cursor:default}.number--average{font-weight:bold}.number--count{color:var(--calcite-ui-text-2);font-style:italic}.number--count:not(:first-child){margin-inline-start:var(--calcite-rating-spacing-unit)}.visually-hidden{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-rating",{average:[514],count:[514],disabled:[516],form:[513],messages:[1040],messageOverrides:[1040],name:[513],readOnly:[516,"read-only"],required:[516],scale:[513],showChip:[516,"show-chip"],value:[1538],effectiveLocale:[32],defaultMessages:[32],hoverValue:[32],setFocus:[64]}]);function p(){if("undefined"===typeof customElements)return;["calcite-rating","calcite-chip","calcite-icon"].forEach((e=>{switch(e){case"calcite-rating":customElements.get(e)||customElements.define(e,m);break;case"calcite-chip":customElements.get(e)||(0,d.d)();break;case"calcite-icon":customElements.get(e)||(0,f.d)()}}))}p();const g=m,b=p},9339:(e,t,i)=>{"use strict";function n(e){return"l"===e?"m":"s"}i.d(t,{g:()=>n})},81054:(e,t,i)=>{"use strict";i.d(t,{H:()=>E,a:()=>m,c:()=>u,d:()=>v,f:()=>d,r:()=>h,s:()=>c});var n=i(66151),s=i(33850);const a="hidden-form-input";function l(e){return"checked"in e}const o=new WeakMap,r=new WeakSet;function c(e){const{formEl:t}=e;return!!t&&(t.requestSubmit(),!0)}function h(e){e.formEl?.reset()}function u(e){const{el:t,value:i}=e,s=d(e);if(!s||function(e,t){if((0,n.c)(t.parentElement,"[form]"))return!0;const i="calciteInternalFormComponentRegister";let s=!1;return e.addEventListener(i,(e=>{s=e.composedPath().some((e=>r.has(e))),e.stopPropagation()}),{once:!0}),t.dispatchEvent(new CustomEvent(i,{bubbles:!0,composed:!0})),s}(s,t))return;e.formEl=s,e.defaultValue=i,l(e)&&(e.defaultChecked=e.checked);const a=(e.onFormReset||f).bind(e);s.addEventListener("reset",a),o.set(e.el,a),r.add(t)}function d(e){const{el:t,form:i}=e;return i?(0,n.q)(t,{id:i}):(0,n.c)(t,"form")}function f(){l(this)?this.checked=this.defaultChecked:this.value=this.defaultValue}function v(e){const{el:t,formEl:i}=e;if(!i)return;const n=o.get(t);i.removeEventListener("reset",n),o.delete(t),e.formEl=null,r.delete(t)}function m(e,t){e.defaultValue=t}const p=e=>{e.target.dispatchEvent(new CustomEvent("calciteInternalHiddenInputChange",{bubbles:!0}))},g=e=>e.removeEventListener("change",p);function b(e,t,i){const{defaultValue:n,disabled:s,form:a,name:o,required:r}=e;t.defaultValue=n,t.disabled=s,t.name=o,t.required=r,t.tabIndex=-1,a?t.setAttribute("form",a):t.removeAttribute("form"),l(e)?(t.checked=e.checked,t.defaultChecked=e.defaultChecked,t.value=e.checked?i||"on":""):t.value=i||"",e.syncHiddenFormInput?.(t)}const E=e=>{let{component:t}=e;return function(e){const{el:t,formEl:i,name:n,value:s}=e,{ownerDocument:l}=t,o=t.querySelectorAll(`input[slot="${a}"]`);if(!i||!n)return void o.forEach((e=>{g(e),e.remove()}));const r=Array.isArray(s)?s:[s],c=[],h=new Set;let u;o.forEach((t=>{const i=r.find((e=>e==t.value));null!=i?(h.add(i),b(e,t,i)):c.push(t)})),r.forEach((t=>{if(h.has(t))return;let i=c.pop();i||(i=l.createElement("input"),i.slot=a),u||(u=l.createDocumentFragment()),u.append(i),i.addEventListener("change",p),b(e,i,t)})),u&&t.append(u),c.forEach((e=>{g(e),e.remove()}))}(t),(0,s.h)("slot",{name:a})}},36177:(e,t,i)=>{"use strict";i.d(t,{I:()=>u,d:()=>d});var n=i(33850),s=i(66151),a=i(46609);const l="flip-rtl",o={},r={},c={s:16,m:24,l:32};async function h(e){let{icon:t,scale:i}=e;const s=c[i],a=function(e){const t=!isNaN(Number(e.charAt(0))),i=e.split("-");if(i.length>0){const t=/[a-z]/i;e=i.map(((e,i)=>e.replace(t,(function(e,t){return 0===i&&0===t?e:e.toUpperCase()})))).join("")}return t?`i${e}`:e}(t),l="F"===a.charAt(a.length-1),h=`${l?a.substring(0,a.length-1):a}${s}${l?"F":""}`;if(o[h])return o[h];r[h]||(r[h]=fetch((0,n.K3)(`./assets/icon/${h}.json`)).then((e=>e.json())).catch((()=>(console.error(`"${h}" is not a valid calcite-ui-icon name`),""))));const u=await r[h];return o[h]=u,u}const u=(0,n.GH)(class extends n.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.waitUntilVisible((()=>{this.visible=!0,this.loadIconPathData()}))}disconnectedCallback(){this.intersectionObserver?.disconnect(),this.intersectionObserver=null}async componentWillLoad(){this.loadIconPathData()}render(){const{el:e,flipRtl:t,pathData:i,scale:a,textLabel:o}=this,r=(0,s.b)(e),h=c[a],u=!!o,d=[].concat(i||"");return(0,n.h)(n.AA,{"aria-hidden":(0,s.t)(!u),"aria-label":u?o:null,role:u?"img":null},(0,n.h)("svg",{"aria-hidden":"true",class:{[l]:"rtl"===r&&t,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${h} ${h}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},d.map((e=>"string"===typeof e?(0,n.h)("path",{d:e}):(0,n.h)("path",{d:e.d,opacity:"opacity"in e?e.opacity:1})))))}async loadIconPathData(){const{icon:e,scale:t,visible:i}=this;if(!n.Z5.isBrowser||!e||!i)return;const s=await h({icon:e,scale:t});e===this.icon&&(this.pathData=s)}waitUntilVisible(e){this.intersectionObserver=(0,a.c)("intersection",(t=>{t.forEach((t=>{t.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,e())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):e()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return":host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]}]);function d(){if("undefined"===typeof customElements)return;["calcite-icon"].forEach((e=>{if("calcite-icon"===e)customElements.get(e)||customElements.define(e,u)}))}d()},94002:(e,t,i)=>{"use strict";i.d(t,{c:()=>p,d:()=>g,g:()=>s,u:()=>d});var n=i(33850);function s(){if(!n.Z5.isBrowser)return"";const e=navigator.userAgentData;return e?.brands?e.brands.map((e=>{let{brand:t,version:i}=e;return`${t}/${i}`})).join(" "):navigator.userAgent}const a=/firefox/i.test(s()),l=a?new WeakMap:null;function o(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function r(e){const t=e.target;if(a&&!l.get(t))return;const{disabled:i}=t;i&&e.preventDefault()}const c=["mousedown","mouseup","click"];function h(e){if(a&&!l.get(e.target))return;const{disabled:t}=e.target;t&&(e.stopImmediatePropagation(),e.preventDefault())}const u={capture:!0};function d(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e.disabled)return e.el.setAttribute("tabindex","-1"),e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void f(e);m(e),"function"===typeof t?e.el.setAttribute("tabindex",t.call(e)?"0":"-1"):!0===t?e.el.setAttribute("tabindex","0"):!1===t&&e.el.removeAttribute("tabindex"),e.el.removeAttribute("aria-disabled")}function f(e){e.el.click=o,function(e){if(!e)return;e.addEventListener("pointerdown",r,u),c.forEach((t=>e.addEventListener(t,h,u)))}(a?v(e):e.el)}function v(e){return l.get(e.el)}function m(e){delete e.el.click,function(e){if(!e)return;e.removeEventListener("pointerdown",r,u),c.forEach((t=>e.removeEventListener(t,h,u)))}(a?v(e):e.el)}function p(e){if(!e.disabled||!a)return;const t=e.el.parentElement||e.el;l.set(e.el,t),f(e)}function g(e){a&&(l.delete(e.el),m(e))}},4593:(e,t,i)=>{"use strict";i.d(t,{a:()=>l,c:()=>v,d:()=>m,g:()=>g,l:()=>a});var n=i(66151);const s="calciteInternalLabelClick",a="calciteInternalLabelConnected",l="calciteInternalLabelDisconnected",o="calcite-label",r=new WeakMap,c=new WeakMap,h=new WeakMap,u=new WeakMap,d=new WeakSet,f=e=>{const{id:t}=e,i=t&&(0,n.q)(e,{selector:`${o}[for="${t}"]`});if(i)return i;const s=(0,n.c)(e,o);return!s||function(e,t){let i;const n="custom-element-ancestor-check",s=n=>{n.stopImmediatePropagation();const s=n.composedPath();i=s.slice(s.indexOf(t),s.indexOf(e))};e.addEventListener(n,s,{once:!0}),t.dispatchEvent(new CustomEvent(n,{composed:!0,bubbles:!0})),e.removeEventListener(n,s);const a=i.filter((i=>i!==t&&i!==e)).filter((e=>e.tagName?.includes("-")));return a.length>0}(s,e)?null:s};function v(e){const t=f(e.el);if(c.has(t)&&t===e.labelEl||!t&&d.has(e))return;const i=w.bind(e);if(t){e.labelEl=t;const n=r.get(t)||[];n.push(e),r.set(t,n.sort(p)),c.has(e.labelEl)||(c.set(e.labelEl,b),e.labelEl.addEventListener(s,b)),d.delete(e),document.removeEventListener(a,h.get(e)),u.set(e,i),document.addEventListener(l,i)}else d.has(e)||(i(),document.removeEventListener(l,u.get(e)))}function m(e){if(d.delete(e),document.removeEventListener(a,h.get(e)),document.removeEventListener(l,u.get(e)),h.delete(e),u.delete(e),!e.labelEl)return;const t=r.get(e.labelEl);1===t.length&&(e.labelEl.removeEventListener(s,c.get(e.labelEl)),c.delete(e.labelEl)),r.set(e.labelEl,t.filter((t=>t!==e)).sort(p)),e.labelEl=null}function p(e,t){return(0,n.y)(e.el,t.el)?-1:1}function g(e){return e.label||e.labelEl?.textContent?.trim()||""}function b(e){const t=e.detail.sourceEvent.target,i=r.get(this),n=i.find((e=>e.el===t));if(i.includes(n))return;const s=i[0];s.disabled||s.onLabelClick(e)}function E(){d.has(this)&&v(this)}function w(){d.add(this);const e=h.get(this)||E.bind(this);h.set(this,e),document.addEventListener(a,e)}},33150:(e,t,i)=>{"use strict";i.d(t,{a:()=>l,b:()=>r,c:()=>c,s:()=>o});var n=i(33850);const s=new WeakMap,a=new WeakMap;function l(e){a.set(e,new Promise((t=>s.set(e,t))))}function o(e){s.get(e)()}function r(e){return a.get(e)}async function c(e){if(await r(e),n.Z5.isBrowser)return(0,n.xE)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}},30769:(e,t,i)=>{"use strict";i.d(t,{c:()=>u,d:()=>d,s:()=>r,u:()=>h});var n=i(33850),s=i(1314);const a={};function l(){throw new Error("could not fetch component message bundle")}function o(e){e.messages={...e.defaultMessages,...e.messageOverrides}}async function r(e){e.defaultMessages=await c(e,e.effectiveLocale),o(e)}async function c(e,t){if(!n.Z5.isBrowser)return{};const{el:i}=e,o=i.tagName.toLowerCase().replace("calcite-","");return async function(e,t){const i=`${t}_${e}`;return a[i]||(a[i]=fetch((0,n.K3)(`./assets/${t}/t9n/messages_${e}.json`)).then((e=>(e.ok||l(),e.json()))).catch((()=>l()))),a[i]}((0,s.g)(t,"t9n"),o)}async function h(e,t){e.defaultMessages=await c(e,t),o(e)}function u(e){e.onMessagesChange=f}function d(e){e.onMessagesChange=void 0}function f(){o(this)}}}]);
//# sourceMappingURL=54886.acf30cad.chunk.js.map