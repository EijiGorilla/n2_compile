/*! For license information please see 19790.98a5fc84.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkn2_compile=self.webpackChunkn2_compile||[]).push([[19790],{19790:(e,t,n)=>{n.r(t),n.d(t,{CalciteOption:()=>o,defineCustomElement:()=>h});var a=n(98396),l=n(72021);const i=(0,a.GH)(class extends a.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalOptionChange=(0,a.yM)(this,"calciteInternalOptionChange",6),this.mutationObserver=(0,l.c)("mutation",(()=>{this.ensureTextContentDependentProps(),this.calciteInternalOptionChange.emit()})),this.disabled=!1,this.label=void 0,this.selected=void 0,this.value=void 0}handlePropChange(e,t,n){"label"!==n&&"value"!==n||this.ensureTextContentDependentProps(),this.calciteInternalOptionChange.emit()}ensureTextContentDependentProps(){const{el:{textContent:e},internallySetLabel:t,internallySetValue:n,label:a,value:l}=this;a&&a!==t||(this.label=e,this.internallySetLabel=e),null!=l&&l!==n||(this.value=e,this.internallySetValue=e)}connectedCallback(){this.ensureTextContentDependentProps(),this.mutationObserver?.observe(this.el,{attributeFilter:["label","value"],characterData:!0,childList:!0,subtree:!0})}disconnectedCallback(){this.mutationObserver?.disconnect()}render(){return(0,a.h)("slot",{key:"5da42b98d7f8d5a6036f9b2a4f45113752289d6d"},this.label)}get el(){return this}static get watchers(){return{disabled:["handlePropChange"],label:["handlePropChange"],selected:["handlePropChange"],value:["handlePropChange"]}}static get style(){return":host{display:block}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-option",{disabled:[516],label:[1025],selected:[516],value:[1032]},void 0,{disabled:["handlePropChange"],label:["handlePropChange"],selected:["handlePropChange"],value:["handlePropChange"]}]);function s(){if("undefined"===typeof customElements)return;["calcite-option"].forEach((e=>{if("calcite-option"===e)customElements.get(e)||customElements.define(e,i)}))}s();const o=i,h=s}}]);
//# sourceMappingURL=19790.98a5fc84.chunk.js.map