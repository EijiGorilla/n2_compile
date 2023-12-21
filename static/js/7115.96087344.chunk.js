/*! For license information please see 7115.96087344.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkn2_compile=self.webpackChunkn2_compile||[]).push([[7115],{27115:(t,e,a)=>{a.r(e),a.d(e,{CalciteSlider:()=>V,defineCustomElement:()=>H});var i=a(51554),s=a(14387),n=a(92358),l=a(85955),r=a(13160),h=a(19579),o=a(74310),c=a(47242),d=a(46895),u=a(52073),m=a(29849);const b="handle__label",g="handle__label--minValue",p="handle__label--value",v="tick__label--min",f="tick__label--max";function x(t){return Array.isArray(t)}const k=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteSliderInput=(0,i.yM)(this,"calciteSliderInput",6),this.calciteSliderChange=(0,i.yM)(this,"calciteSliderChange",6),this.activeProp="value",this.guid="calcite-slider-".concat((0,s.g)()),this.dragUpdate=t=>{if(!this.disabled&&(t.preventDefault(),this.dragProp)){const e=this.translate(t.clientX||t.pageX);if(x(this.value)&&"minMaxValue"===this.dragProp)if(this.minValueDragRange&&this.maxValueDragRange&&this.minMaxValueRange){const t=e-this.minValueDragRange,a=e+this.maxValueDragRange;a<=this.max&&t>=this.min&&a-t===this.minMaxValueRange&&this.setValue({minValue:this.clamp(t,"minValue"),maxValue:this.clamp(a,"maxValue")})}else this.minValueDragRange=e-this.minValue,this.maxValueDragRange=this.maxValue-e,this.minMaxValueRange=this.maxValue-this.minValue;else this.setValue({[this.dragProp]:this.clamp(e,this.dragProp)})}},this.pointerUpDragEnd=t=>{!this.disabled&&(0,n.j)(t)&&this.dragEnd(t)},this.dragEnd=t=>{this.disabled||(this.removeDragListeners(),this.focusActiveHandle(t.clientX),this.lastDragPropValue!=this[this.dragProp]&&this.emitChange(),this.dragProp=null,this.lastDragPropValue=null,this.minValueDragRange=null,this.maxValueDragRange=null,this.minMaxValueRange=null)},this.storeTrackRef=t=>{this.trackEl=t},this.determineGroupSeparator=t=>{if("number"===typeof t)return d.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator},d.n.localize(t.toString())},this.disabled=!1,this.form=void 0,this.groupSeparator=!1,this.hasHistogram=!1,this.histogram=void 0,this.histogramStops=void 0,this.labelHandles=!1,this.labelTicks=!1,this.max=100,this.maxLabel=void 0,this.maxValue=void 0,this.min=0,this.minLabel=void 0,this.minValue=void 0,this.mirrored=!1,this.name=void 0,this.numberingSystem=void 0,this.pageStep=void 0,this.precise=!1,this.required=!1,this.snap=!1,this.step=1,this.ticks=void 0,this.value=0,this.scale="m",this.effectiveLocale="",this.minMaxValueRange=null,this.minValueDragRange=null,this.maxValueDragRange=null,this.tickValues=[]}histogramWatcher(t){this.hasHistogram=!!t}ticksWatcher(){this.tickValues=this.generateTickValues()}valueHandler(){this.setMinMaxFromValue()}minMaxValueHandler(){this.setValueFromMinMax()}connectedCallback(){(0,r.c)(this),(0,d.c)(this),this.setMinMaxFromValue(),this.setValueFromMinMax(),(0,o.c)(this),(0,l.c)(this)}disconnectedCallback(){(0,r.d)(this),(0,o.d)(this),(0,l.d)(this),(0,d.d)(this),this.removeDragListeners()}componentWillLoad(){(0,c.a)(this),x(this.value)||(this.value=this.snap?this.getClosestStep(this.value):this.clamp(this.value)),this.ticksWatcher(),this.histogramWatcher(this.histogram),(0,l.a)(this,this.value)}componentDidLoad(){(0,c.s)(this)}componentDidRender(){this.labelHandles&&(this.adjustHostObscuredHandleLabel("value"),x(this.value)&&(this.adjustHostObscuredHandleLabel("minValue"),this.precise&&!this.hasHistogram||this.hyphenateCollidingRangeHandleLabels())),this.hideObscuredBoundingTickLabels(),(0,r.u)(this)}render(){const t=this.el.id||this.guid,e=x(this.value)?"maxValue":"value",a=x(this.value)?this.maxValue:this.value,s=this.determineGroupSeparator(a),n=this.determineGroupSeparator(this.minValue),r=this.minValue||this.min,h=this.shouldUseMinValue(),c=100*this.getUnitInterval(h?this.minValue:r),d=100*this.getUnitInterval(a),u=this.shouldMirror(),m="".concat(u?100-c:c,"%"),v="".concat(u?d:100-d,"%"),f=x(this.value),k="".concat(b," ").concat(g),y="".concat(b," ").concat(p),V=(0,i.h)("div",{"aria-disabled":this.disabled,"aria-label":f?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":a,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===e},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=e,onPointerDown:t=>this.pointerDownDragStart(t,e),role:"slider",style:{right:v},tabIndex:0,ref:t=>this.maxHandle=t},(0,i.h)("div",{class:"handle"})),H=(0,i.h)("div",{"aria-disabled":this.disabled,"aria-label":f?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":a,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===e},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=e,onPointerDown:t=>this.pointerDownDragStart(t,e),role:"slider",style:{right:v},tabIndex:0,ref:t=>this.maxHandle=t},(0,i.h)("span",{"aria-hidden":"true",class:y},s),(0,i.h)("span",{"aria-hidden":"true",class:"".concat(y," static")},s),(0,i.h)("span",{"aria-hidden":"true",class:"".concat(y," transformed")},s),(0,i.h)("div",{class:"handle"})),w=(0,i.h)("div",{"aria-disabled":this.disabled,"aria-label":f?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":a,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===e},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=e,onPointerDown:t=>this.pointerDownDragStart(t,e),role:"slider",style:{right:v},tabIndex:0,ref:t=>this.maxHandle=t},(0,i.h)("div",{class:"handle"}),(0,i.h)("span",{"aria-hidden":"true",class:y},s),(0,i.h)("span",{"aria-hidden":"true",class:"".concat(y," static")},s),(0,i.h)("span",{"aria-hidden":"true",class:"".concat(y," transformed")},s)),_=(0,i.h)("div",{"aria-disabled":this.disabled,"aria-label":f?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":a,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===e,"thumb--precise":!0},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=e,onPointerDown:t=>this.pointerDownDragStart(t,e),role:"slider",style:{right:v},tabIndex:0,ref:t=>this.maxHandle=t},(0,i.h)("div",{class:"handle"}),(0,i.h)("div",{class:"handle-extension"})),D=(0,i.h)("div",{"aria-disabled":this.disabled,"aria-label":f?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":a,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===e,"thumb--precise":!0},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=e,onPointerDown:t=>this.pointerDownDragStart(t,e),role:"slider",style:{right:v},tabIndex:0,ref:t=>this.maxHandle=t},(0,i.h)("div",{class:"handle-extension"}),(0,i.h)("div",{class:"handle"})),M=(0,i.h)("div",{"aria-disabled":this.disabled,"aria-label":f?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":a,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===e,"thumb--precise":!0},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=e,onPointerDown:t=>this.pointerDownDragStart(t,e),role:"slider",style:{right:v},tabIndex:0,ref:t=>this.maxHandle=t},(0,i.h)("span",{"aria-hidden":"true",class:y},s),(0,i.h)("span",{"aria-hidden":"true",class:"".concat(y," static")},s),(0,i.h)("span",{"aria-hidden":"true",class:"".concat(y," transformed")},s),(0,i.h)("div",{class:"handle"}),(0,i.h)("div",{class:"handle-extension"})),P=(0,i.h)("div",{"aria-disabled":this.disabled,"aria-label":f?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":a,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===e,"thumb--precise":!0},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=e,onPointerDown:t=>this.pointerDownDragStart(t,e),role:"slider",style:{right:v},tabIndex:0,ref:t=>this.maxHandle=t},(0,i.h)("div",{class:"handle-extension"}),(0,i.h)("div",{class:"handle"}),(0,i.h)("span",{"aria-hidden":"true",class:y},s),(0,i.h)("span",{"aria-hidden":"true",class:"".concat(y," static")},s),(0,i.h)("span",{"aria-hidden":"true",class:"".concat(y," transformed")},s)),L=(0,i.h)("div",{"aria-disabled":this.disabled,"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:!0,"thumb--minValue":!0,"thumb--active":"minValue"===this.dragProp},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp="minValue",onPointerDown:t=>this.pointerDownDragStart(t,"minValue"),role:"slider",style:{left:m},tabIndex:0,ref:t=>this.minHandle=t},(0,i.h)("div",{class:"handle"})),S=(0,i.h)("div",{"aria-disabled":this.disabled,"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:!0,"thumb--minValue":!0,"thumb--active":"minValue"===this.dragProp},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp="minValue",onPointerDown:t=>this.pointerDownDragStart(t,"minValue"),role:"slider",style:{left:m},tabIndex:0,ref:t=>this.minHandle=t},(0,i.h)("span",{"aria-hidden":"true",class:k},n),(0,i.h)("span",{"aria-hidden":"true",class:"".concat(k," static")},n),(0,i.h)("span",{"aria-hidden":"true",class:"".concat(k," transformed")},n),(0,i.h)("div",{class:"handle"})),z=(0,i.h)("div",{"aria-disabled":this.disabled,"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:!0,"thumb--minValue":!0,"thumb--active":"minValue"===this.dragProp},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp="minValue",onPointerDown:t=>this.pointerDownDragStart(t,"minValue"),role:"slider",style:{left:m},tabIndex:0,ref:t=>this.minHandle=t},(0,i.h)("div",{class:"handle"}),(0,i.h)("span",{"aria-hidden":"true",class:k},n),(0,i.h)("span",{"aria-hidden":"true",class:"".concat(k," static")},n),(0,i.h)("span",{"aria-hidden":"true",class:"".concat(k," transformed")},n)),R=(0,i.h)("div",{"aria-disabled":this.disabled,"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:!0,"thumb--minValue":!0,"thumb--active":"minValue"===this.dragProp,"thumb--precise":!0},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp="minValue",onPointerDown:t=>this.pointerDownDragStart(t,"minValue"),role:"slider",style:{left:m},tabIndex:0,ref:t=>this.minHandle=t},(0,i.h)("div",{class:"handle-extension"}),(0,i.h)("div",{class:"handle"})),C=(0,i.h)("div",{"aria-disabled":this.disabled,"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:!0,"thumb--minValue":!0,"thumb--active":"minValue"===this.dragProp,"thumb--precise":!0},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp="minValue",onPointerDown:t=>this.pointerDownDragStart(t,"minValue"),role:"slider",style:{left:m},tabIndex:0,ref:t=>this.minHandle=t},(0,i.h)("div",{class:"handle-extension"}),(0,i.h)("div",{class:"handle"}),(0,i.h)("span",{"aria-hidden":"true",class:k},n),(0,i.h)("span",{"aria-hidden":"true",class:"".concat(k," static")},n),(0,i.h)("span",{"aria-hidden":"true",class:"".concat(k," transformed")},n));return(0,i.h)(i.AA,{id:t,onTouchStart:this.handleTouchStart},(0,i.h)("div",{"aria-label":(0,o.g)(this),class:{container:!0,"container--range":f,["scale--".concat(this.scale)]:!0}},this.renderGraph(),(0,i.h)("div",{class:"track",ref:this.storeTrackRef},(0,i.h)("div",{class:"track__range",onPointerDown:t=>this.pointerDownDragStart(t,"minMaxValue"),style:{left:"".concat(u?100-d:c,"%"),right:"".concat(u?c:100-d,"%")}}),(0,i.h)("div",{class:"ticks"},this.tickValues.map((t=>{const e="".concat(100*this.getUnitInterval(t),"%");let s=t>=r&&t<=a;return h&&(s=t>=this.minValue&&t<=this.maxValue),(0,i.h)("span",{class:{tick:!0,"tick--active":s},style:{left:u?"":e,right:u?e:""}},this.renderTickLabel(t))})))),(0,i.h)("div",{class:"thumb-container"},!this.precise&&!this.labelHandles&&f&&L,!this.hasHistogram&&!this.precise&&this.labelHandles&&f&&S,this.precise&&!this.labelHandles&&f&&R,this.precise&&this.labelHandles&&f&&C,this.hasHistogram&&!this.precise&&this.labelHandles&&f&&z,!this.precise&&!this.labelHandles&&V,!this.hasHistogram&&!this.precise&&this.labelHandles&&H,!this.hasHistogram&&this.precise&&!this.labelHandles&&_,this.hasHistogram&&this.precise&&!this.labelHandles&&D,!this.hasHistogram&&this.precise&&this.labelHandles&&M,this.hasHistogram&&!this.precise&&this.labelHandles&&w,this.hasHistogram&&this.precise&&this.labelHandles&&P,(0,i.h)(l.H,{component:this}))))}renderGraph(){return this.histogram?(0,i.h)("calcite-graph",{class:"graph",colorStops:this.histogramStops,data:this.histogram,highlightMax:x(this.value)?this.maxValue:this.value,highlightMin:x(this.value)?this.minValue:this.min,max:this.max,min:this.min}):null}renderTickLabel(t){const e=x(this.value),a=t===this.min,s=t===this.max,n=this.determineGroupSeparator(t),l=(0,i.h)("span",{class:{tick__label:!0,[v]:a,[f]:s}},n);return(!this.labelTicks||this.hasHistogram||e)&&(!this.labelTicks||this.hasHistogram||!e||this.precise||this.labelHandles)?this.labelTicks&&!this.hasHistogram&&e&&!this.precise&&this.labelHandles||this.labelTicks&&!this.hasHistogram&&e&&this.precise&&(a||s)||this.labelTicks&&this.hasHistogram&&!this.precise&&!this.labelHandles||this.labelTicks&&this.hasHistogram&&this.precise&&!this.labelHandles&&(a||s)||this.labelTicks&&this.hasHistogram&&!this.precise&&this.labelHandles&&(a||s)||this.labelTicks&&this.hasHistogram&&this.precise&&this.labelHandles&&(a||s)?l:null:l}keyDownHandler(t){const e=this.shouldMirror(),{activeProp:a,max:i,min:s,pageStep:n,step:l}=this,r=this[a],{key:o}=t;if((0,h.i)(o))return void t.preventDefault();let c;if("ArrowUp"===o||"ArrowRight"===o){c=r+l*(e&&"ArrowRight"===o?-1:1)}else if("ArrowDown"===o||"ArrowLeft"===o){c=r-l*(e&&"ArrowLeft"===o?-1:1)}else"PageUp"===o?n&&(c=r+n):"PageDown"===o?n&&(c=r-n):"Home"===o?c=s:"End"===o&&(c=i);if(isNaN(c))return;t.preventDefault();const d=Number(c.toFixed((0,u.d)(l)));this.setValue({[a]:this.clamp(d,a)})}pointerDownHandler(t){if(this.disabled||!(0,n.j)(t))return;const e=t.clientX||t.pageX,a=this.translate(e);let i="value";if(x(this.value)){if(a>=this.minValue&&a<=this.maxValue&&"minMaxValue"===this.lastDragProp)i="minMaxValue";else{i=Math.abs(this.maxValue-a)<Math.abs(this.minValue-a)||a>this.maxValue?"maxValue":"minValue"}}this.lastDragPropValue=this[i],this.dragStart(i);this.el.shadowRoot.querySelector(".thumb:active")||this.setValue({[i]:this.clamp(a,i)}),this.focusActiveHandle(e)}handleTouchStart(t){t.preventDefault()}async setFocus(){await(0,c.c)(this);const t=this.minHandle?this.minHandle:this.maxHandle;null===t||void 0===t||t.focus()}setValueFromMinMax(){const{minValue:t,maxValue:e}=this;"number"===typeof t&&"number"===typeof e&&(this.value=[t,e])}setMinMaxFromValue(){const{value:t}=this;x(t)&&(this.minValue=t[0],this.maxValue=t[1])}onLabelClick(){this.setFocus()}shouldMirror(){return this.mirrored&&!this.hasHistogram}shouldUseMinValue(){return!!x(this.value)&&(this.hasHistogram&&0===this.maxValue||!this.hasHistogram&&0===this.minValue)}getTickDensity(){const t=(this.max-this.min)/this.ticks/250;return t<1?1:t}generateTickValues(){var t;const e=null!==(t=this.ticks)&&void 0!==t?t:0;if(e<=0)return[];const a=[this.min],i=e*this.getTickDensity();let s=this.min;for(;s<this.max;)s+=i,a.push(Math.min(s,this.max));return a.includes(this.max)||a.push(this.max),a}pointerDownDragStart(t,e){(0,n.j)(t)&&this.dragStart(e)}dragStart(t){this.dragProp=t,this.lastDragProp=this.dragProp,this.activeProp=t,document.addEventListener("pointermove",this.dragUpdate),document.addEventListener("pointerup",this.pointerUpDragEnd),document.addEventListener("pointercancel",this.dragEnd)}focusActiveHandle(t){switch(this.dragProp){case"minValue":this.minHandle.focus();break;case"maxValue":case"value":this.maxHandle.focus();break;case"minMaxValue":this.getClosestHandle(t).focus()}}emitInput(){this.calciteSliderInput.emit()}emitChange(){this.calciteSliderChange.emit()}removeDragListeners(){document.removeEventListener("pointermove",this.dragUpdate),document.removeEventListener("pointerup",this.pointerUpDragEnd),document.removeEventListener("pointercancel",this.dragEnd)}setValue(t){let e;if(Object.keys(t).forEach((a=>{const i=t[a];if(!e){const t=this[a];e=t!==i}this[a]=i})),!e)return;this.dragProp||this.emitChange(),this.emitInput()}clamp(t,e){return t=(0,u.c)(t,this.min,this.max),"maxValue"===e&&(t=Math.max(t,this.minValue)),"minValue"===e&&(t=Math.min(t,this.maxValue)),t}translate(t){const e=this.max-this.min,{left:a,width:i}=this.trackEl.getBoundingClientRect(),s=(t-a)/i,n=this.shouldMirror(),l=this.clamp(this.min+e*(n?1-s:s));let r=Number(l.toFixed((0,u.d)(this.step)));return this.snap&&this.step&&(r=this.getClosestStep(r)),r}getClosestStep(t){if(t=Number(this.clamp(t).toFixed((0,u.d)(this.step))),this.step){const e=Math.round(t/this.step)*this.step;t=Number(this.clamp(e).toFixed((0,u.d)(this.step)))}return t}getClosestHandle(t){return this.getDistanceX(this.maxHandle,t)>this.getDistanceX(this.minHandle,t)?this.minHandle:this.maxHandle}getDistanceX(t,e){return Math.abs(t.getBoundingClientRect().left-e)}getFontSizeForElement(t){return Number(window.getComputedStyle(t).getPropertyValue("font-size").match(/\d+/)[0])}getUnitInterval(t){t=this.clamp(t);const e=this.max-this.min;return(t-this.min)/e}adjustHostObscuredHandleLabel(t){const e=this.el.shadowRoot.querySelector(".handle__label--".concat(t)),a=this.el.shadowRoot.querySelector(".handle__label--".concat(t,".static")),i=this.el.shadowRoot.querySelector(".handle__label--".concat(t,".transformed")),s=a.getBoundingClientRect(),n=this.getHostOffset(s.left,s.right);e.style.transform="translateX(".concat(n,"px)"),i.style.transform="translateX(".concat(n,"px)")}hyphenateCollidingRangeHandleLabels(){const{shadowRoot:t}=this.el,e=this.shouldMirror(),a=e?"value":"minValue",i=e?"minValue":"value",s=t.querySelector(".handle__label--".concat(a)),n=t.querySelector(".handle__label--".concat(a,".static")),l=t.querySelector(".handle__label--".concat(a,".transformed")),r=this.getHostOffset(n.getBoundingClientRect().left,n.getBoundingClientRect().right),h=t.querySelector(".handle__label--".concat(i)),o=t.querySelector(".handle__label--".concat(i,".static")),c=t.querySelector(".handle__label--".concat(i,".transformed")),d=this.getHostOffset(o.getBoundingClientRect().left,o.getBoundingClientRect().right),u=this.getFontSizeForElement(s),m=this.getRangeLabelOverlap(l,c),b=s,g=u/2;if(m>0){if(b.classList.add("hyphen","hyphen--wrap"),0===d&&0===r){let t=m/2-g;t=-1===Math.sign(t)?Math.abs(t):-t;const e=this.getHostOffset(l.getBoundingClientRect().left+t-g,l.getBoundingClientRect().right+t-g);let a=m/2;const i=this.getHostOffset(c.getBoundingClientRect().left+a,c.getBoundingClientRect().right+a);0!==e&&(t+=e,a+=e),0!==i&&(t+=i,a+=i),s.style.transform="translateX(".concat(t,"px)"),l.style.transform="translateX(".concat(t-g,"px)"),h.style.transform="translateX(".concat(a,"px)"),c.style.transform="translateX(".concat(a,"px)")}else if(r>0||d>0)s.style.transform="translateX(".concat(r+g,"px)"),h.style.transform="translateX(".concat(m+d,"px)"),c.style.transform="translateX(".concat(m+d,"px)");else if(r<0||d<0){let t=Math.abs(r)+m-g;t=-1===Math.sign(t)?Math.abs(t):-t,s.style.transform="translateX(".concat(t,"px)"),l.style.transform="translateX(".concat(t-g,"px)")}}else b.classList.remove("hyphen","hyphen--wrap"),s.style.transform="translateX(".concat(r,"px)"),l.style.transform="translateX(".concat(r,"px)"),h.style.transform="translateX(".concat(d,"px)"),c.style.transform="translateX(".concat(d,"px)")}hideObscuredBoundingTickLabels(){const t=x(this.value);if(!this.hasHistogram&&!t&&!this.labelHandles&&!this.precise)return;if(!this.hasHistogram&&!t&&this.labelHandles&&!this.precise)return;if(!this.hasHistogram&&!t&&!this.labelHandles&&this.precise)return;if(!this.hasHistogram&&!t&&this.labelHandles&&this.precise)return;if(!this.hasHistogram&&t&&!this.precise)return;if(this.hasHistogram&&!this.precise&&!this.labelHandles)return;const e=this.el.shadowRoot.querySelector(".thumb--minValue"),a=this.el.shadowRoot.querySelector(".thumb--value"),i=this.el.shadowRoot.querySelector(".tick__label--min"),s=this.el.shadowRoot.querySelector(".tick__label--max");!e&&a&&i&&s&&(i.style.opacity=this.isMinTickLabelObscured(i,a)?"0":"1",s.style.opacity=this.isMaxTickLabelObscured(s,a)?"0":"1"),e&&a&&i&&s&&(i.style.opacity=this.isMinTickLabelObscured(i,e)||this.isMinTickLabelObscured(i,a)?"0":"1",s.style.opacity=this.isMaxTickLabelObscured(s,e)||this.isMaxTickLabelObscured(s,a)&&this.hasHistogram?"0":"1")}getHostOffset(t,e){const a=this.el.getBoundingClientRect();return t+7<a.left?a.left-t-7:e-7>a.right?7-(e-a.right):0}getRangeLabelOverlap(t,e){const a=t.getBoundingClientRect(),i=e.getBoundingClientRect(),s=this.getFontSizeForElement(t),n=a.right+s-i.left;return Math.max(n,0)}isMinTickLabelObscured(t,e){const a=t.getBoundingClientRect(),i=e.getBoundingClientRect();return(0,n.l)(a,i)}isMaxTickLabelObscured(t,e){const a=t.getBoundingClientRect(),i=e.getBoundingClientRect();return(0,n.l)(a,i)}static get delegatesFocus(){return!0}get el(){return this}static get watchers(){return{histogram:["histogramWatcher"],ticks:["ticksWatcher"],value:["valueHandler"],minValue:["minMaxValueHandler"],maxValue:["minMaxValueHandler"]}}static get style(){return'@charset "UTF-8";:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}.scale--s{--calcite-slider-handle-size:0.625rem;--calcite-slider-handle-extension-height:0.4rem;--calcite-slider-container-font-size:var(--calcite-font-size--3)}.scale--s .handle__label,.scale--s .tick__label{line-height:.75rem}.scale--m{--calcite-slider-handle-size:0.875rem;--calcite-slider-handle-extension-height:0.5rem;--calcite-slider-container-font-size:var(--calcite-font-size--2)}.scale--m .handle__label,.scale--m .tick__label{line-height:1rem}.scale--l{--calcite-slider-handle-size:1rem;--calcite-slider-handle-extension-height:0.65rem;--calcite-slider-container-font-size:var(--calcite-font-size--1)}.scale--l .handle__label,.scale--l .tick__label{line-height:1rem}.handle__label,.tick__label{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2);font-size:var(--calcite-slider-container-font-size)}:host{display:block}.container{position:relative;display:block;overflow-wrap:normal;word-break:normal;padding-inline:calc(var(--calcite-slider-handle-size) * 0.5);padding-block:calc(var(--calcite-slider-handle-size) * 0.5);margin-block:calc(var(--calcite-slider-handle-size) * 0.5);margin-inline:0;--calcite-slider-full-handle-height:calc(\n    var(--calcite-slider-handle-size) + var(--calcite-slider-handle-extension-height)\n  );touch-action:none}:host([disabled]) .track__range,:host([disabled]) .tick--active{background-color:var(--calcite-ui-text-3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.scale--s .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-0.375rem}.scale--m .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-0.5rem}.scale--l .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-0.55rem}:host([precise]:not([has-histogram])) .container .thumb--value{--calcite-slider-thumb-y-offset:calc(var(--calcite-slider-full-handle-height) * -1)}.thumb-container{position:relative;max-inline-size:100%}.thumb{--calcite-slider-thumb-x-offset:calc(var(--calcite-slider-handle-size) * 0.5);position:absolute;margin:0px;display:flex;cursor:pointer;flex-direction:column;align-items:center;border-style:none;background-color:transparent;padding:0px;font-family:inherit;outline:2px solid transparent;outline-offset:2px;transform:translate(var(--calcite-slider-thumb-x-offset), var(--calcite-slider-thumb-y-offset))}.thumb .handle__label.static,.thumb .handle__label.transformed{position:absolute;inset-block:0px;opacity:0}.thumb .handle__label.hyphen::after{content:"\u2014";display:inline-block;inline-size:1em}.thumb .handle__label.hyphen--wrap{display:flex}.thumb .handle{box-sizing:border-box;border-radius:9999px;background-color:var(--calcite-ui-foreground-1);outline-color:transparent;block-size:var(--calcite-slider-handle-size);inline-size:var(--calcite-slider-handle-size);box-shadow:0 0 0 2px var(--calcite-ui-text-3) inset;transition:border var(--calcite-internal-animation-timing-medium) ease, background-color var(--calcite-internal-animation-timing-medium) ease, box-shadow var(--calcite-animation-timing) ease}.thumb .handle-extension{inline-size:0.125rem;block-size:var(--calcite-slider-handle-extension-height);background-color:var(--calcite-ui-text-3)}.thumb:hover .handle{box-shadow:0 0 0 3px var(--calcite-ui-brand) inset}.thumb:hover .handle-extension{background-color:var(--calcite-ui-brand)}.thumb:focus .handle{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.thumb:focus .handle-extension{background-color:var(--calcite-ui-brand)}.thumb.thumb--minValue{transform:translate(calc(var(--calcite-slider-thumb-x-offset) * -1), var(--calcite-slider-thumb-y-offset))}.thumb.thumb--precise{--calcite-slider-thumb-y-offset:-0.125rem}:host([label-handles]) .thumb{--calcite-slider-thumb-x-offset:50%}:host([label-handles]):host(:not([has-histogram])) .scale--s .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-1.4375rem}:host([label-handles]):host(:not([has-histogram])) .scale--m .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-1.875rem}:host([label-handles]):host(:not([has-histogram])) .scale--l .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-2rem}:host([has-histogram][label-handles]) .handle__label,:host([label-handles]:not([has-histogram])) .thumb--minValue.thumb--precise .handle__label{margin-block-start:0.5em}:host(:not([has-histogram]):not([precise])) .handle__label,:host([label-handles]:not([has-histogram])) .thumb--value .handle__label{margin-block-end:0.5em}:host([label-handles][precise]):host(:not([has-histogram])) .scale--s .thumb--value{--calcite-slider-thumb-y-offset:-2.075rem}:host([label-handles][precise]):host(:not([has-histogram])) .scale--m .thumb--value{--calcite-slider-thumb-y-offset:-2.75rem}:host([label-handles][precise]):host(:not([has-histogram])) .scale--l .thumb--value{--calcite-slider-thumb-y-offset:-3.0625rem}.thumb:focus .handle,.thumb--active .handle{background-color:var(--calcite-ui-brand);box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16)}.thumb:hover.thumb--precise:after,.thumb:focus.thumb--precise:after,.thumb--active.thumb--precise:after{background-color:var(--calcite-ui-brand)}.track{position:relative;block-size:0.125rem;border-radius:0px;background-color:var(--calcite-ui-border-2);transition:all var(--calcite-internal-animation-timing-medium) ease-in}.track__range{position:absolute;inset-block-start:0px;block-size:0.125rem;background-color:var(--calcite-ui-brand)}.container--range .track__range:hover{cursor:ew-resize}.container--range .track__range:after{position:absolute;inline-size:100%;content:"";inset-block-start:calc(var(--calcite-slider-full-handle-height) * 0.5 * -1);block-size:calc(var(--calcite-slider-handle-size) + var(--calcite-slider-handle-extension-height))}@media (forced-colors: active){.thumb{outline-width:0;outline-offset:0}.handle{outline:2px solid transparent;outline-offset:2px}.thumb:focus .handle,.thumb .handle-extension,.thumb:hover .handle-extension,.thumb:focus .handle-extension,.thumb:active .handle-extension{background-color:canvasText}.track{background-color:canvasText}.track__range{background-color:highlight}}.tick{position:absolute;block-size:0.25rem;inline-size:0.125rem;border-width:1px;border-style:solid;background-color:var(--calcite-ui-border-input);border-color:var(--calcite-ui-foreground-1);inset-block-start:-2px;pointer-events:none;margin-inline-start:calc(-1 * 0.125rem)}.tick--active{background-color:var(--calcite-ui-brand)}.tick__label{pointer-events:none;margin-block-start:0.875rem;display:flex;justify-content:center}.tick__label--min{transition:opacity var(--calcite-animation-timing)}.tick__label--max{transition:opacity var(--calcite-internal-animation-timing-fast)}:host([has-histogram][label-handles]) .tick__label--min,:host([has-histogram][label-handles]) .tick__label--max,:host([has-histogram][precise]) .tick__label--min,:host([has-histogram][precise]) .tick__label--max{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}.graph{color:var(--calcite-ui-foreground-3);block-size:48px}:host([label-ticks][ticks]) .container{padding-block-end:calc(0.875rem + var(--calcite-slider-container-font-size))}:host([has-histogram]):host([precise][label-handles]) .container{padding-block-end:calc(var(--calcite-slider-full-handle-height) + 1em)}:host([has-histogram]):host([label-handles]:not([precise])) .container{padding-block-end:calc(var(--calcite-slider-handle-size) * 0.5 + 1em)}:host([has-histogram]):host([precise]:not([label-handles])) .container{padding-block-end:var(--calcite-slider-full-handle-height)}:host(:not([has-histogram])):host([precise]:not([label-handles])) .container{padding-block-start:var(--calcite-slider-full-handle-height)}:host(:not([has-histogram])):host([precise]:not([label-handles])) .container--range{padding-block-end:var(--calcite-slider-full-handle-height)}:host(:not([has-histogram])):host([label-handles]:not([precise])) .container{padding-block-start:calc(var(--calcite-slider-full-handle-height) + 4px)}:host(:not([has-histogram])):host([label-handles][precise]) .container{padding-block-start:calc(var(--calcite-slider-full-handle-height) + var(--calcite-slider-container-font-size) + 4px)}:host(:not([has-histogram])):host([label-handles][precise]) .container--range{padding-block-end:calc(var(--calcite-slider-full-handle-height) + var(--calcite-slider-container-font-size) + 4px)}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}'}},[17,"calcite-slider",{disabled:[516],form:[513],groupSeparator:[516,"group-separator"],hasHistogram:[1540,"has-histogram"],histogram:[16],histogramStops:[16],labelHandles:[516,"label-handles"],labelTicks:[516,"label-ticks"],max:[514],maxLabel:[1,"max-label"],maxValue:[1026,"max-value"],min:[514],minLabel:[1,"min-label"],minValue:[1026,"min-value"],mirrored:[516],name:[513],numberingSystem:[1,"numbering-system"],pageStep:[514,"page-step"],precise:[516],required:[516],snap:[516],step:[514],ticks:[514],value:[1538],scale:[513],effectiveLocale:[32],minMaxValueRange:[32],minValueDragRange:[32],maxValueDragRange:[32],tickValues:[32],setFocus:[64]},[[0,"keydown","keyDownHandler"],[1,"pointerdown","pointerDownHandler"]]]);function y(){if("undefined"===typeof customElements)return;["calcite-slider","calcite-graph"].forEach((t=>{switch(t){case"calcite-slider":customElements.get(t)||customElements.define(t,k);break;case"calcite-graph":customElements.get(t)||(0,m.d)()}}))}y();const V=k,H=y},29849:(t,e,a)=>{a.d(e,{G:()=>o,d:()=>c});var i=a(51554),s=a(14387),n=a(72021);function l(t,e,a){const i=e[0]-t[0],s=e[1]-t[1];return i?(3*s/i-a)/2:a}function r(t,e,a,i,s){const[n,l]=t,[r,h]=e,o=(r-n)/3,c=s([n+o,l+o*a]).join(","),d=s([r-o,h-o*i]).join(","),u=s([r,h]).join(",");return"C ".concat(c," ").concat(d," ").concat(u)}function h(t){let{data:e,min:a,max:i,t:s}=t;if(0===e.length)return"";const[n,h]=s(e[0]),[o,c]=s(a),[d]=s(i);let u,m,b;const g=e.reduce(((t,a,i)=>{if(m=e[i-2],b=e[i-1],i>1){const e=function(t,e,a){const i=e[0]-t[0],s=a[0]-e[0],n=(e[1]-t[1])/(i||s<0&&0),l=(a[1]-e[1])/(s||i<0&&0),r=(n*s+l*i)/(i+s);return(Math.sign(n)+Math.sign(l))*Math.min(Math.abs(n),Math.abs(l),.5*Math.abs(r))||0}(m,b,a),i=void 0===u?l(m,b,e):u,n=r(m,b,i,e,s);return u=e,"".concat(t," ").concat(n)}return t}),"M ".concat(o,",").concat(c," L ").concat(o,",").concat(h," L ").concat(n,",").concat(h)),p=e[e.length-1],v=r(b,p,u,l(b,p,u),s);return"".concat(g," ").concat(v," L ").concat(d,",").concat(c," Z")}const o=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.graphId="calcite-graph-".concat((0,s.g)()),this.resizeObserver=(0,n.c)("resize",(()=>(0,i.xE)(this))),this.data=[],this.colorStops=void 0,this.highlightMin=void 0,this.highlightMax=void 0,this.min=void 0,this.max=void 0}connectedCallback(){var t;null===(t=this.resizeObserver)||void 0===t||t.observe(this.el)}disconnectedCallback(){var t;null===(t=this.resizeObserver)||void 0===t||t.disconnect()}render(){const{data:t,colorStops:e,el:a,highlightMax:s,highlightMin:n,min:l,max:r}=this,o=this.graphId,{clientHeight:c,clientWidth:d}=a;if(!t||0===t.length)return(0,i.h)("svg",{"aria-hidden":"true",class:"svg",height:c,preserveAspectRatio:"none",viewBox:"0 0 ".concat(d," ").concat(c),width:d});const{min:u,max:m}=function(t){const[e,a]=t[0],i=[e,a],s=[e,a];return t.reduce(((t,e)=>{let{min:a,max:i}=t,[s,n]=e;return{min:[Math.min(a[0],s),Math.min(a[1],n)],max:[Math.max(i[0],s),Math.max(i[1],n)]}}),{min:i,max:s})}(t);let b=u,g=m;(l<u[0]||l>u[0])&&(b=[l,0]),(r>m[0]||r<m[0])&&(g=[r,m[1]]);const p=function(t){let{width:e,height:a,min:i,max:s}=t;const n=s[0]-i[0],l=s[1]-i[1];return t=>[(t[0]-i[0])/n*e,a-t[1]/l*a]}({min:b,max:g,width:d,height:c}),[v]=p([n,g[1]]),[f]=p([s,g[1]]),x=h({data:t,min:u,max:m,t:p}),k=e?"url(#linear-gradient-".concat(o,")"):void 0;return(0,i.h)("svg",{"aria-hidden":"true",class:"svg",height:c,preserveAspectRatio:"none",viewBox:"0 0 ".concat(d," ").concat(c),width:d},e?(0,i.h)("defs",null,(0,i.h)("linearGradient",{id:"linear-gradient-".concat(o),x1:"0",x2:"1",y1:"0",y2:"0"},e.map((t=>{let{offset:e,color:a,opacity:s}=t;return(0,i.h)("stop",{offset:"".concat(100*e,"%"),"stop-color":a,"stop-opacity":s})})))):null,void 0!==n?[(0,i.h)("mask",{height:"100%",id:"".concat(o,"1"),width:"100%",x:"0%",y:"0%"},(0,i.h)("path",{d:"\n            M 0,0\n            L ".concat(v-1,",0\n            L ").concat(v-1,",").concat(c,"\n            L 0,").concat(c,"\n            Z\n          "),fill:"white"})),(0,i.h)("mask",{height:"100%",id:"".concat(o,"2"),width:"100%",x:"0%",y:"0%"},(0,i.h)("path",{d:"\n            M ".concat(v+1,",0\n            L ").concat(f-1,",0\n            L ").concat(f-1,",").concat(c,"\n            L ").concat(v+1,", ").concat(c,"\n            Z\n          "),fill:"white"})),(0,i.h)("mask",{height:"100%",id:"".concat(o,"3"),width:"100%",x:"0%",y:"0%"},(0,i.h)("path",{d:"\n                M ".concat(f+1,",0\n                L ").concat(d,",0\n                L ").concat(d,",").concat(c,"\n                L ").concat(f+1,", ").concat(c,"\n                Z\n              "),fill:"white"})),(0,i.h)("path",{class:"graph-path",d:x,fill:k,mask:"url(#".concat(o,"1)")}),(0,i.h)("path",{class:"graph-path--highlight",d:x,fill:k,mask:"url(#".concat(o,"2)")}),(0,i.h)("path",{class:"graph-path",d:x,fill:k,mask:"url(#".concat(o,"3)")})]:(0,i.h)("path",{class:"graph-path",d:x,fill:k}))}get el(){return this}static get style(){return":host{display:block;block-size:100%}.svg{fill:currentColor;stroke:transparent;margin:0px;display:block;block-size:100%;inline-size:100%;padding:0px}.svg .graph-path--highlight{fill:var(--calcite-ui-brand);opacity:0.5}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-graph",{data:[16],colorStops:[16],highlightMin:[2,"highlight-min"],highlightMax:[2,"highlight-max"],min:[514],max:[514]}]);function c(){if("undefined"===typeof customElements)return;["calcite-graph"].forEach((t=>{if("calcite-graph"===t)customElements.get(t)||customElements.define(t,o)}))}c()}}]);
//# sourceMappingURL=7115.96087344.chunk.js.map