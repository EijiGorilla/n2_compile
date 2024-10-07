/*! For license information please see 8926.07793e40.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkn2_compile=self.webpackChunkn2_compile||[]).push([[8926],{48926:(e,t,a)=>{a.r(t),a.d(t,{CalciteFlowItem:()=>D,defineCustomElement:()=>A});var o=a(5831),c=a(92358),s=a(13160),l=a(47242),i=a(46895),n=a(52655),d=a(89524),r=a(65138),h=a(31944),b=a(57601),f=a(91438),m=a(2654),g=a(69874);const p="back-button",u="chevron-left",k="chevron-right",v="action-bar",y="alerts",w="content-top",C="content-bottom",B="header-actions-start",E="header-actions-end",S="header-menu-actions",I="header-content",F="fab",P="footer",L="footer-actions",x="footer-end",M="footer-start",T=(0,o.GH)(class extends o.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteFlowItemBack=(0,o.yM)(this,"calciteFlowItemBack",7),this.calciteFlowItemScroll=(0,o.yM)(this,"calciteFlowItemScroll",6),this.calciteFlowItemClose=(0,o.yM)(this,"calciteFlowItemClose",6),this.calciteFlowItemToggle=(0,o.yM)(this,"calciteFlowItemToggle",6),this.handleInternalPanelScroll=e=>{e.target===this.containerEl&&(e.stopPropagation(),this.calciteFlowItemScroll.emit())},this.handleInternalPanelClose=e=>{e.target===this.containerEl&&(e.stopPropagation(),this.closed=!0,this.calciteFlowItemClose.emit())},this.handleInternalPanelToggle=e=>{e.target===this.containerEl&&(e.stopPropagation(),this.collapsed=e.target.collapsed,this.calciteFlowItemToggle.emit())},this.backButtonClick=()=>{this.calciteFlowItemBack.emit()},this.setBackRef=e=>{this.backButtonEl=e},this.setContainerRef=e=>{this.containerEl=e},this.closable=!1,this.closed=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.beforeBack=void 0,this.beforeClose=void 0,this.description=void 0,this.disabled=!1,this.heading=void 0,this.headingLevel=void 0,this.loading=!1,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.overlayPositioning="absolute",this.scale="m",this.showBackButton=!1,this.defaultMessages=void 0,this.effectiveLocale=""}onMessagesChange(){}connectedCallback(){(0,s.c)(this),(0,i.c)(this),(0,n.c)(this)}async componentWillLoad(){await(0,n.s)(this),(0,l.s)(this)}componentDidRender(){(0,s.u)(this)}disconnectedCallback(){(0,s.d)(this),(0,i.d)(this),(0,n.d)(this)}componentDidLoad(){(0,l.a)(this)}effectiveLocaleChange(){(0,n.u)(this,this.effectiveLocale)}async setFocus(){await(0,l.c)(this);const{backButtonEl:e,containerEl:t}=this;return e?e.setFocus():t?t.setFocus():void 0}async scrollContentTo(e){await(this.containerEl?.scrollContentTo(e))}renderBackButton(){const{el:e}=this,t="rtl"===(0,c.a)(e),{showBackButton:a,backButtonClick:s,messages:l}=this,i=l.back,n=t?k:u;return a?(0,o.h)("calcite-action",{"aria-label":i,class:p,icon:n,key:"flow-back-button",onClick:s,ref:this.setBackRef,scale:"s",slot:"header-actions-start",text:i,title:i}):null}render(){const{collapsed:e,collapseDirection:t,collapsible:a,closable:c,closed:l,description:i,disabled:n,heading:r,headingLevel:h,loading:b,menuOpen:f,messages:m,overlayPositioning:g,beforeClose:p}=this;return(0,o.h)(o.AA,{key:"166a2f53829cecc09019a7fa3fe670b5e4e42146"},(0,o.h)(s.I,{key:"53f00fb0e5ec53b8a19efde1592e1bff176302d1",disabled:n},(0,o.h)("calcite-panel",{key:"a24ff76af240b1403ebfa5810bc8fe0443901040",beforeClose:p,closable:c,closed:l,collapseDirection:t,collapsed:e,collapsible:a,description:i,disabled:n,heading:r,headingLevel:h,loading:b,menuOpen:f,messageOverrides:m,onCalcitePanelClose:this.handleInternalPanelClose,onCalcitePanelScroll:this.handleInternalPanelScroll,onCalcitePanelToggle:this.handleInternalPanelToggle,overlayPositioning:g,ref:this.setContainerRef,scale:this.scale},this.renderBackButton(),(0,o.h)("slot",{key:"9051287e5b89eaca28b440816cbcddc03cefed73",name:v,slot:d.S.actionBar}),(0,o.h)("slot",{key:"566fb396078d3eac17fbff69e0cd43fb5b8ca13e",name:y,slot:d.S.alerts}),(0,o.h)("slot",{key:"88ced257238e369cd99250c9d5a93fa03746fbd5",name:B,slot:d.S.headerActionsStart}),(0,o.h)("slot",{key:"beab9f93af9deed383adc8250ec943b883e058b8",name:E,slot:d.S.headerActionsEnd}),(0,o.h)("slot",{key:"1f1c7579d1ac1085004b08d2f57ec8b9e0641e35",name:I,slot:d.S.headerContent}),(0,o.h)("slot",{key:"3696e4a7e80db48581f438336007a1b63a201040",name:S,slot:d.S.headerMenuActions}),(0,o.h)("slot",{key:"370e0817cbc13d7cf4c8adaccff8fe9d7c91c859",name:F,slot:d.S.fab}),(0,o.h)("slot",{key:"d55cc859cb1c9c6cc80a63521aad955f6e23d31c",name:w,slot:d.S.contentTop}),(0,o.h)("slot",{key:"7cea1750cd59d1fdda66516c9b4c78884127dde5",name:C,slot:d.S.contentBottom}),(0,o.h)("slot",{key:"d07ed2f97623023312cdb0a5a01b909286f34373",name:M,slot:d.S.footerStart}),(0,o.h)("slot",{key:"fdc209c1e77fd62cadaaad0ee576e71a1f0419d8",name:P,slot:d.S.footer}),(0,o.h)("slot",{key:"5348d32cc42b7fa3b07e4b5ef711863f6ce812bc",name:x,slot:d.S.footerEnd}),(0,o.h)("slot",{key:"bad7644787a3ad19ef40931fb38cfe9c18962b27",name:L,slot:d.S.footerActions}),(0,o.h)("slot",{key:"97675398537cc86f41a219126e17bcf24cf4682b"}))))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;overflow:hidden}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}calcite-panel{--calcite-panel-footer-padding:var(--calcite-flow-item-footer-padding);--calcite-panel-header-border-block-end:var(--calcite-flow-item-header-border-block-end)}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-flow-item",{closable:[516],closed:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],beforeBack:[16],beforeClose:[16],description:[1],disabled:[516],heading:[1],headingLevel:[514,"heading-level"],loading:[516],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],overlayPositioning:[513,"overlay-positioning"],scale:[513],showBackButton:[4,"show-back-button"],defaultMessages:[32],effectiveLocale:[32],setFocus:[64],scrollContentTo:[64]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function O(){if("undefined"===typeof customElements)return;["calcite-flow-item","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-panel","calcite-popover","calcite-scrim"].forEach((e=>{switch(e){case"calcite-flow-item":customElements.get(e)||customElements.define(e,T);break;case"calcite-action":customElements.get(e)||(0,r.d)();break;case"calcite-action-menu":customElements.get(e)||(0,h.d)();break;case"calcite-icon":customElements.get(e)||(0,b.d)();break;case"calcite-loader":customElements.get(e)||(0,f.d)();break;case"calcite-panel":customElements.get(e)||(0,d.d)();break;case"calcite-popover":customElements.get(e)||(0,m.d)();break;case"calcite-scrim":customElements.get(e)||(0,g.d)()}}))}O();const D=T,A=O}}]);
//# sourceMappingURL=8926.07793e40.chunk.js.map