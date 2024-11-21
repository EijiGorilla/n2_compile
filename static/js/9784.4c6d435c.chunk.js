/*! For license information please see 9784.4c6d435c.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkn2_compile=self.webpackChunkn2_compile||[]).push([[9784],{19784:(e,t,i)=>{i.r(t),i.d(t,{CalciteDropdownItem:()=>p,defineCustomElement:()=>m});var n=i(5831),o=i(92358),c=i(47242),a=i(64044),s=i(13160),l=i(99095),r=i(57601);const d=(0,n.GH)(class extends n.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteDropdownItemSelect=(0,n.yM)(this,"calciteDropdownItemSelect",6),this.calciteInternalDropdownItemSelect=(0,n.yM)(this,"calciteInternalDropdownItemSelect",6),this.calciteInternalDropdownItemKeyEvent=(0,n.yM)(this,"calciteInternalDropdownItemKeyEvent",6),this.calciteInternalDropdownCloseRequest=(0,n.yM)(this,"calciteInternalDropdownCloseRequest",6),this.disabled=!1,this.href=void 0,this.iconFlipRtl=void 0,this.iconStart=void 0,this.iconEnd=void 0,this.label=void 0,this.rel=void 0,this.selected=!1,this.target=void 0,this.selectionMode="single",this.scale="m"}async setFocus(){await(0,c.c)(this),this.el?.focus()}componentWillLoad(){(0,c.s)(this),this.initialize()}componentDidLoad(){(0,c.a)(this)}connectedCallback(){this.initialize()}componentDidRender(){(0,s.u)(this)}render(){const{href:e,selectionMode:t,label:i,iconFlipRtl:c}=this,r=(0,n.h)("calcite-icon",{key:"46fd6784a80e78a149e6796018f495f33c9fe172",class:l.C.iconStart,flipRtl:"start"===c||"both"===c,icon:this.iconStart,scale:(0,a.g)(this.scale)}),d=(0,n.h)("span",{key:"feee494a9e26fad963b71e5aacf3abf9084ec463",class:l.C.itemContent},(0,n.h)("slot",{key:"33e49b095819a250f469d457279f6a340ff31fd4"})),h=(0,n.h)("calcite-icon",{key:"ea58bc58292cf76bcda6826e3c402079b0d3ad69",class:l.C.iconEnd,flipRtl:"end"===c||"both"===c,icon:this.iconEnd,scale:(0,a.g)(this.scale)}),p=this.iconStart&&this.iconEnd?[r,d,h]:this.iconStart?[r,d]:this.iconEnd?[d,h]:d,m=e?(0,n.h)("a",{"aria-label":i,class:l.C.link,href:e,ref:e=>this.childLink=e,rel:this.rel,tabIndex:-1,target:this.target},p):p,u=e?null:"single"===t?"menuitemradio":"multiple"===t?"menuitemcheckbox":"menuitem",f="none"!==t?(0,o.t)(this.selected):null,{disabled:w}=this;return(0,n.h)(n.AA,{key:"269693a7a036a7e39f4f8d529695df44f34df22a","aria-checked":f,"aria-label":e?"":i,role:u,tabIndex:w?-1:0},(0,n.h)(s.I,{key:"0c644e048c9e30b8062cd60f7574c3e8fb631b4c",disabled:w},(0,n.h)("div",{key:"d5c9098d6c3007d5f05b28770074f6833a43d53f",class:{[l.C.container]:!0,[l.C.containerNone]:"none"===t}},"none"!==t?(0,n.h)("calcite-icon",{class:l.C.icon,icon:"multiple"===t?"check":"bullet-point",scale:(0,a.g)(this.scale)}):null,m)))}onClick(){this.emitRequestedItem()}keyDownHandler(e){switch(e.key){case" ":case"Enter":this.emitRequestedItem(),this.href&&this.childLink.click(),e.preventDefault();break;case"Escape":this.calciteInternalDropdownCloseRequest.emit(),e.preventDefault();break;case"Tab":this.calciteInternalDropdownItemKeyEvent.emit({keyboardEvent:e});break;case"ArrowUp":case"ArrowDown":case"Home":case"End":e.preventDefault(),this.calciteInternalDropdownItemKeyEvent.emit({keyboardEvent:e})}}updateActiveItemOnChange(e){e.composedPath().includes(this.parentDropdownGroupEl)&&(this.requestedDropdownGroup=e.detail.requestedDropdownGroup,this.requestedDropdownItem=e.detail.requestedDropdownItem,this.determineActiveItem()),e.stopPropagation()}initialize(){this.parentDropdownGroupEl=this.el.closest("calcite-dropdown-group"),"none"===this.selectionMode&&(this.selected=!1)}determineActiveItem(){switch(this.selectionMode){case"multiple":this.el===this.requestedDropdownItem&&(this.selected=!this.selected);break;case"single":this.el===this.requestedDropdownItem?this.selected=!0:this.requestedDropdownGroup===this.parentDropdownGroupEl&&(this.selected=!1);break;case"none":this.selected=!1}}emitRequestedItem(){this.calciteDropdownItemSelect.emit(),this.calciteInternalDropdownItemSelect.emit({requestedDropdownItem:this.el,requestedDropdownGroup:this.parentDropdownGroupEl})}get el(){return this}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;flex-grow:1;align-items:center;outline-color:transparent}.container{position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;color:var(--calcite-color-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);text-align:start}.container a{position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;color:var(--calcite-color-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);outline-color:transparent}.dropdown-item-content{flex:1 1 auto;padding-block:0.125rem}.dropdown-item-icon{position:relative;opacity:0;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:scale(0.9)}:host([scale=s]) .container{padding-block:0.25rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .dropdown-item-icon,:host([scale=s]) .dropdown-item-icon--start{padding-inline-end:var(--calcite-spacing-sm)}:host([scale=s]) .dropdown-item-icon--end{padding-inline-start:var(--calcite-spacing-sm)}:host([scale=m]) .container{padding-block:0.5rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .dropdown-item-icon,:host([scale=m]) .dropdown-item-icon--start{padding-inline-end:var(--calcite-spacing-md)}:host([scale=m]) .dropdown-item-icon--end{padding-inline-start:var(--calcite-spacing-md)}:host([scale=l]) .container{padding-block:0.625rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .dropdown-item-icon,:host([scale=l]) .dropdown-item-icon--start{padding-inline-end:var(--calcite-spacing-xl)}:host([scale=l]) .dropdown-item-icon--end{padding-inline-start:var(--calcite-spacing-xl)}:host(:focus){outline:2px solid transparent;outline-offset:2px;outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host(:focus) .container{color:var(--calcite-color-text-1);text-decoration-line:none}:host(:hover:not([disabled])) .container,:host(:active:not([disabled])) .container{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1);text-decoration-line:none}:host(:hover:not([disabled])) .dropdown-link,:host(:active:not([disabled])) .dropdown-link{color:var(--calcite-color-text-1)}:host(:active:not([disabled])) .container{background-color:var(--calcite-color-foreground-3)}:host([selected]) .container:not(.container--none-selection),:host([selected]) .dropdown-link{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}:host([selected]) .container:not(.container--none-selection) calcite-icon,:host([selected]) .dropdown-link calcite-icon{color:var(--calcite-color-brand)}:host(:hover:not([disabled])) .dropdown-item-icon{color:var(--calcite-color-border-1);opacity:1}:host([selected]) .dropdown-item-icon{color:var(--calcite-color-brand);opacity:1}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}"}},[1,"calcite-dropdown-item",{disabled:[516],href:[513],iconFlipRtl:[513,"icon-flip-rtl"],iconStart:[513,"icon-start"],iconEnd:[513,"icon-end"],label:[1],rel:[513],selected:[1540],target:[513],selectionMode:[1,"selection-mode"],scale:[513],setFocus:[64]},[[0,"click","onClick"],[0,"keydown","keyDownHandler"],[16,"calciteInternalDropdownItemChange","updateActiveItemOnChange"]]]);function h(){if("undefined"===typeof customElements)return;["calcite-dropdown-item","calcite-icon"].forEach((e=>{switch(e){case"calcite-dropdown-item":customElements.get(e)||customElements.define(e,d);break;case"calcite-icon":customElements.get(e)||(0,r.d)()}}))}h();const p=d,m=h},99095:(e,t,i)=>{i.d(t,{C:()=>n});const n={container:"container",containerNone:"container--none-selection",icon:"dropdown-item-icon",iconEnd:"dropdown-item-icon--end",iconStart:"dropdown-item-icon--start",itemContent:"dropdown-item-content",link:"dropdown-link"}}}]);
//# sourceMappingURL=9784.4c6d435c.chunk.js.map