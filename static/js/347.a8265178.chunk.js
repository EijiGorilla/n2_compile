/*! For license information please see 347.a8265178.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkn2_compile=self.webpackChunkn2_compile||[]).push([[347],{30347:(e,t,i)=>{i.r(t),i.d(t,{CalciteSegmentedControl:()=>m,defineCustomElement:()=>u});var s=i(51554),n=i(92358),o=i(85955),l=i(13160),a=i(74310),r=i(47242),c=i(72021);const h=(0,s.GH)(class extends s.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteSegmentedControlChange=(0,s.yM)(this,"calciteSegmentedControlChange",6),this.handleClick=e=>{this.disabled||"calcite-segmented-control-item"===e.target.localName&&this.selectItem(e.target,!0)},this.mutationObserver=(0,c.c)("mutation",(()=>this.setUpItems())),this.appearance="solid",this.disabled=!1,this.form=void 0,this.required=!1,this.name=void 0,this.layout="horizontal",this.scale="m",this.value=null,this.selectedItem=void 0,this.width="auto"}handlePropsChange(){this.handleItemPropChange()}valueHandler(e){this.getItems().forEach((t=>t.checked=t.value===e))}handleSelectedItemChange(e,t){if(this.value=null===e||void 0===e?void 0:e.value,e===t)return;const i=this.getItems(),s=i.filter((t=>t===e)).pop();s?this.selectItem(s):i[0]&&(i[0].tabIndex=0)}componentWillLoad(){(0,r.a)(this),this.setUpItems()}componentDidLoad(){(0,o.a)(this,this.value),(0,r.s)(this)}connectedCallback(){var e;(0,l.c)(this),(0,a.c)(this),(0,o.c)(this),null===(e=this.mutationObserver)||void 0===e||e.observe(this.el,{childList:!0}),this.handleItemPropChange()}disconnectedCallback(){var e;(0,l.d)(this),(0,a.d)(this),(0,o.d)(this),null===(e=this.mutationObserver)||void 0===e||e.unobserve(this.el)}componentDidRender(){(0,l.u)(this)}render(){return(0,s.h)(s.AA,{onClick:this.handleClick,role:"radiogroup"},(0,s.h)("slot",null),(0,s.h)(o.H,{component:this}))}handleSelected(e){e.preventDefault(),this.selectItem(e.target),e.stopPropagation()}handleKeyDown(e){const{key:t}=e,{el:i,selectedItem:s}=this;if(-1===["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"," "].indexOf(t))return;let o=t;"rtl"===(0,n.b)(i)&&("ArrowRight"===t&&(o="ArrowLeft"),"ArrowLeft"===t&&(o="ArrowRight"));const l=this.getItems();let a=-1;switch(l.forEach(((e,t)=>{e===s&&(a=t)})),o){case"ArrowLeft":case"ArrowUp":e.preventDefault();const t=a<1?l[l.length-1]:l[a-1];return void this.selectItem(t,!0);case"ArrowRight":case"ArrowDown":e.preventDefault();const i=-1===a?l[1]:l[a+1]||l[0];return void this.selectItem(i,!0);case" ":return e.preventDefault(),void this.selectItem(e.target,!0);default:return}}async setFocus(){var e;await(0,r.c)(this),null===(e=this.selectedItem||this.getItems()[0])||void 0===e||e.focus()}handleItemPropChange(){this.getItems().forEach((e=>{e.appearance=this.appearance,e.layout=this.layout,e.scale=this.scale}))}onLabelClick(){this.setFocus()}getItems(){return Array.from(this.el.querySelectorAll("calcite-segmented-control-item"))}selectItem(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e===this.selectedItem)return;const i=this.getItems();let n=null;i.forEach((i=>{const s=i===e;(s&&!i.checked||!s&&i.checked)&&(i.checked=s),i.tabIndex=s?0:-1,s&&(n=i,t&&this.calciteSegmentedControlChange.emit())})),this.selectedItem=n,s.Z5.isBrowser&&n&&n.focus()}setUpItems(){const e=this.getItems(),t=e.filter((e=>e.checked)).pop();t?this.selectItem(t):e[0]&&(e[0].tabIndex=0)}get el(){return this}static get watchers(){return{appearance:["handlePropsChange"],layout:["handlePropsChange"],scale:["handlePropsChange"],value:["valueHandler"],selectedItem:["handleSelectedItemChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;background-color:var(--calcite-ui-foreground-1);inline-size:-moz-fit-content;inline-size:fit-content;outline:1px solid var(--calcite-ui-border-input);outline-offset:-1px}:host([appearance=outline]){background-color:transparent}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([layout=vertical]){flex-direction:column;align-items:flex-start;align-self:flex-start}:host([width=full]){inline-size:100%;min-inline-size:-moz-fit-content;min-inline-size:fit-content}:host([width=full]) ::slotted(calcite-segmented-control-item){flex:1 1 auto}:host([width=full][layout=vertical]) ::slotted(calcite-segmented-control-item){justify-content:flex-start}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-segmented-control",{appearance:[513],disabled:[516],form:[513],required:[516],name:[513],layout:[513],scale:[513],value:[1025],selectedItem:[1040],width:[513],setFocus:[64]},[[0,"calciteInternalSegmentedControlItemChange","handleSelected"],[0,"keydown","handleKeyDown"]]]);function d(){if("undefined"===typeof customElements)return;["calcite-segmented-control"].forEach((e=>{if("calcite-segmented-control"===e)customElements.get(e)||customElements.define(e,h)}))}d();const m=h,u=d}}]);
//# sourceMappingURL=347.a8265178.chunk.js.map