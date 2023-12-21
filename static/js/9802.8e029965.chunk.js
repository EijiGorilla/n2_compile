/*! For license information please see 9802.8e029965.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkn2_compile=self.webpackChunkn2_compile||[]).push([[9802],{99802:(e,t,i)=>{i.r(t),i.d(t,{CalciteTipManager:()=>z,defineCustomElement:()=>E});var a=i(51554),n=i(92358),s=i(46895),c=i(72021),o=i(52655),l=i(8703),r=i(65138),d=i(57601),h=i(91438);const p="header",g="heading",u="close",v="container",f="tip-container",m="tip-container--advancing",x="tip-container--retreating",b="pagination",k="page-position",y="page-next",T="page-previous",w="chevron-left",C="chevron-right",I="x",L=(0,a.GH)(class extends a.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteTipManagerClose=(0,a.yM)(this,"calciteTipManagerClose",6),this.mutationObserver=(0,c.c)("mutation",(()=>this.setUpTips())),this.hideTipManager=()=>{this.closed=!0,this.calciteTipManagerClose.emit()},this.previousClicked=()=>{this.previousTip()},this.nextClicked=()=>{this.nextTip()},this.tipManagerKeyDownHandler=e=>{if(e.target===this.container)switch(e.key){case"ArrowRight":e.preventDefault(),this.nextTip();break;case"ArrowLeft":e.preventDefault(),this.previousTip();break;case"Home":e.preventDefault(),this.selectedIndex=0;break;case"End":e.preventDefault(),this.selectedIndex=this.total-1}},this.storeContainerRef=e=>{this.container=e},this.closed=!1,this.headingLevel=void 0,this.messages=void 0,this.messageOverrides=void 0,this.selectedIndex=void 0,this.tips=void 0,this.total=void 0,this.direction=void 0,this.groupTitle=void 0,this.defaultMessages=void 0,this.effectiveLocale=""}closedChangeHandler(){this.direction=null}onMessagesChange(){}selectedChangeHandler(){this.showSelectedTip(),this.updateGroupTitle()}async effectiveLocaleChange(){await(0,o.u)(this,this.effectiveLocale),this.updateGroupTitle()}connectedCallback(){var e;(0,s.c)(this),(0,o.c)(this),this.setUpTips(),null===(e=this.mutationObserver)||void 0===e||e.observe(this.el,{childList:!0,subtree:!0})}async componentWillLoad(){await(0,o.s)(this),this.updateGroupTitle()}disconnectedCallback(){var e;null===(e=this.mutationObserver)||void 0===e||e.disconnect(),(0,s.d)(this),(0,o.d)(this)}async nextTip(){this.direction="advancing";const e=this.selectedIndex+1;this.selectedIndex=(e+this.total)%this.total}async previousTip(){this.direction="retreating";const e=this.selectedIndex-1;this.selectedIndex=(e+this.total)%this.total}setUpTips(){const e=Array.from(this.el.querySelectorAll("calcite-tip"));if(this.total=e.length,0===this.total)return;const t=this.el.querySelector("calcite-tip[selected]");this.tips=e,this.selectedIndex=t?e.indexOf(t):0,e.forEach((e=>{e.closeDisabled=!0})),this.showSelectedTip()}showSelectedTip(){this.tips.forEach(((e,t)=>{const i=this.selectedIndex===t;e.selected=i,e.hidden=!i}))}updateGroupTitle(){if(this.tips){var e;const t=this.tips[this.selectedIndex].closest("calcite-tip-group");this.groupTitle=(null===t||void 0===t?void 0:t.groupTitle)||(null===(e=this.messages)||void 0===e?void 0:e.defaultGroupTitle)}}renderPagination(){const e=(0,n.b)(this.el),{selectedIndex:t,tips:i,total:s,messages:c}=this,o=c.next,l=c.previous,r=c.defaultPaginationLabel;return i.length>1?(0,a.h)("footer",{class:b},(0,a.h)("calcite-action",{class:T,icon:"ltr"===e?w:C,onClick:this.previousClicked,scale:"m",text:l}),(0,a.h)("span",{class:k},"".concat(r," ").concat(t+1,"/").concat(s)),(0,a.h)("calcite-action",{class:y,icon:"ltr"===e?C:w,onClick:this.nextClicked,scale:"m",text:o})):null}render(){const{closed:e,direction:t,headingLevel:i,groupTitle:s,selectedIndex:c,messages:o,total:r}=this,d=o.close;return 0===r?null:(0,a.h)("section",{"aria-hidden":(0,n.t)(e),class:v,hidden:e,onKeyDown:this.tipManagerKeyDownHandler,tabIndex:0,ref:this.storeContainerRef},(0,a.h)("header",{class:p},(0,a.h)(l.H,{class:g,level:i},s),(0,a.h)("calcite-action",{class:u,onClick:this.hideTipManager,scale:"m",text:d},(0,a.h)("calcite-icon",{icon:I,scale:"m"}))),(0,a.h)("div",{class:{[f]:!0,[m]:!e&&"advancing"===t,[x]:!e&&"retreating"===t},key:c,tabIndex:0},(0,a.h)("slot",null)),this.renderPagination())}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{closed:["closedChangeHandler"],messageOverrides:["onMessagesChange"],selectedIndex:["selectedChangeHandler"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{box-sizing:border-box;display:block;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2);--calcite-tip-manager-height:19vh}:host *{box-sizing:border-box}:host([closed]){display:none}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.header{border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);padding-block:0px;padding-inline-end:0px;padding-inline-start:1rem}.header .heading{padding:0px;font-size:var(--calcite-font-size-1);line-height:1.5rem;font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-1)}.container{position:relative;overflow:hidden;outline-color:transparent;min-block-size:150px}.container:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.tip-container{margin-block-start:1px;display:flex;align-items:flex-start;justify-content:center;overflow:auto;padding:1rem;outline-color:transparent;animation-name:none;animation-duration:var(--calcite-animation-timing);block-size:var(--calcite-tip-manager-height)}.tip-container:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}::slotted(calcite-tip){margin:0px;border-style:none;max-inline-size:var(--calcite-tip-max-width)}.tip-container--advancing{animation-name:tip-advance}.tip-container--retreating{animation-name:tip-retreat}.pagination{display:flex;align-items:center;justify-content:center;padding-inline:0px;padding-block:0.75rem 0.5rem}.page-position{margin-block:0px;margin-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}@keyframes tip-advance{0%{opacity:0;transform:translate3d(50px, 0, 0) scale(0.99)}100%{opacity:1;transform:translate3d(0, 0, 0) scale(1)}}@keyframes tip-retreat{0%{opacity:0;transform:translate3d(-50px, 0, 0) scale(0.99)}100%{opacity:1;transform:translate3d(0, 0, 0) scale(1)}}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-tip-manager",{closed:[1540],headingLevel:[514,"heading-level"],messages:[1040],messageOverrides:[1040],selectedIndex:[32],tips:[32],total:[32],direction:[32],groupTitle:[32],defaultMessages:[32],effectiveLocale:[32],nextTip:[64],previousTip:[64]}]);function M(){if("undefined"===typeof customElements)return;["calcite-tip-manager","calcite-action","calcite-icon","calcite-loader"].forEach((e=>{switch(e){case"calcite-tip-manager":customElements.get(e)||customElements.define(e,L);break;case"calcite-action":customElements.get(e)||(0,r.d)();break;case"calcite-icon":customElements.get(e)||(0,d.d)();break;case"calcite-loader":customElements.get(e)||(0,h.d)()}}))}M();const z=L,E=M}}]);
//# sourceMappingURL=9802.8e029965.chunk.js.map