/*! For license information please see 13185.4d50137b.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkn2_compile=self.webpackChunkn2_compile||[]).push([[13185],{13185:(e,t,i)=>{i.d(t,{I:()=>H,d:()=>O});var n=i(33850),a=i(66151),r=i(81054),o=i(94002),s=i(95155),l=i(4593),u=i(33150),c=i(1314),d=i(46609),h=i(30769),m=i(9339),b=i(36177),p=i(52203);const v="loader",g="clear-button",f="icon",x="prefix",y="suffix",w="number-button-wrapper",N="number-button-item--horizontal",I="element-wrapper",k="wrapper",V="action-wrapper",z="number-button-item",E="action",H=(0,n.GH)(class extends n.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalInputNumberFocus=(0,n.yM)(this,"calciteInternalInputNumberFocus",6),this.calciteInternalInputNumberBlur=(0,n.yM)(this,"calciteInternalInputNumberBlur",6),this.calciteInputNumberInput=(0,n.yM)(this,"calciteInputNumberInput",7),this.calciteInputNumberChange=(0,n.yM)(this,"calciteInputNumberChange",6),this.previousValueOrigin="initial",this.mutationObserver=(0,d.c)("mutation",(()=>this.setDisabledAction())),this.userChangedValue=!1,this.keyDownHandler=e=>{this.readOnly||this.disabled||(this.isClearable&&"Escape"===e.key&&(this.clearInputValue(e),e.preventDefault()),"Enter"!==e.key||e.defaultPrevented||(0,r.s)(this)&&e.preventDefault())},this.clearInputValue=e=>{this.setNumberValue({committing:!0,nativeEvent:e,origin:"user",value:""})},this.emitChangeIfUserModified=()=>{"user"===this.previousValueOrigin&&this.value!==this.previousEmittedNumberValue&&(this.calciteInputNumberChange.emit(),this.setPreviousEmittedNumberValue(this.value))},this.inputNumberBlurHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId),this.calciteInternalInputNumberBlur.emit(),this.emitChangeIfUserModified()},this.clickHandler=e=>{if(this.disabled)return;const t=(0,a.g)(this.el,"action");e.target!==t&&this.setFocus()},this.inputNumberFocusHandler=()=>{this.calciteInternalInputNumberFocus.emit()},this.inputNumberInputHandler=e=>{if(this.disabled||this.readOnly)return;const t=e.target.value;c.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};const i=c.n.delocalize(t);"insertFromPaste"===e.inputType?((!(0,c.i)(i)||this.integer&&(i.includes("e")||i.includes(".")))&&e.preventDefault(),this.setNumberValue({nativeEvent:e,origin:"user",value:(0,c.p)(i)}),this.childNumberEl.value=this.localizedValue):this.setNumberValue({nativeEvent:e,origin:"user",value:i})},this.inputNumberKeyDownHandler=e=>{if(this.disabled||this.readOnly)return;if("ArrowUp"===e.key)return e.preventDefault(),void this.nudgeNumberValue("up",e);if("ArrowDown"===e.key)return void this.nudgeNumberValue("down",e);const t=[...s.n,"ArrowLeft","ArrowRight","Backspace","Delete","Enter","Escape","Tab"];if(e.altKey||e.ctrlKey||e.metaKey)return;const i=e.shiftKey&&"Tab"===e.key;if(t.includes(e.key)||i)"Enter"===e.key&&this.emitChangeIfUserModified();else{if(c.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator},e.key===c.n.decimal&&!this.integer){if(!this.value&&!this.childNumberEl.value)return;if(this.value&&-1===this.childNumberEl.value.indexOf(c.n.decimal))return}if(/[eE]/.test(e.key)&&!this.integer){if(!this.value&&!this.childNumberEl.value)return;if(this.value&&!/[eE]/.test(this.childNumberEl.value))return}if("-"===e.key){if(!this.value&&!this.childNumberEl.value)return;if(this.value&&this.childNumberEl.value.split("-").length<=2)return}e.preventDefault()}},this.nudgeNumberValue=(e,t)=>{if(t instanceof KeyboardEvent&&t.repeat)return;const i=this.maxString?parseFloat(this.maxString):null,n=this.minString?parseFloat(this.minString):null;this.incrementOrDecrementNumberValue(e,i,n,t),this.nudgeNumberValueIntervalId&&window.clearInterval(this.nudgeNumberValueIntervalId);let a=!0;this.nudgeNumberValueIntervalId=window.setInterval((()=>{a?a=!1:this.incrementOrDecrementNumberValue(e,i,n,t)}),150)},this.nudgeButtonPointerUpHandler=e=>{(0,a.j)(e)&&window.clearInterval(this.nudgeNumberValueIntervalId)},this.nudgeButtonPointerOutHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId)},this.nudgeButtonPointerDownHandler=e=>{if(!(0,a.j)(e))return;e.preventDefault();const t=e.target.dataset.adjustment;this.disabled||this.nudgeNumberValue(t,e)},this.hiddenInputChangeHandler=e=>{e.target.name===this.name&&this.setNumberValue({value:e.target.value,origin:"direct"}),e.stopPropagation()},this.setChildNumberElRef=e=>{this.childNumberEl=e},this.setInputNumberValue=e=>{this.childNumberEl&&(this.childNumberEl.value=e)},this.setPreviousEmittedNumberValue=e=>{this.previousEmittedNumberValue=this.normalizeValue(e)},this.setPreviousNumberValue=e=>{this.previousValue=this.normalizeValue(e)},this.setNumberValue=e=>{let{committing:t=!1,nativeEvent:i,origin:n,previousValue:a,value:r}=e;c.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};const o=this.previousValue?.length>r.length||this.value?.length>r.length,s=this.integer?r.replace(/[e.]/g,""):r,l="."===s.charAt(s.length-1),u=l&&o?s:(0,c.s)(s),d=r&&!u?(0,c.i)(this.previousValue)?this.previousValue:"":u;let h=c.n.localize(d);if("connected"===n||l||(h=(0,c.e)(h,d,c.n)),this.localizedValue=l&&o?`${h}${c.n.decimal}`:h,this.setPreviousNumberValue(a??this.value),this.previousValueOrigin=n,this.userChangedValue="user"===n&&this.value!==d,this.value=["-","."].includes(d)?"":d,"direct"===n&&(this.setInputNumberValue(h),this.setPreviousEmittedNumberValue(h)),i){this.calciteInputNumberInput.emit().defaultPrevented?(this.value=this.previousValue,this.localizedValue=c.n.localize(this.previousValue)):t&&this.emitChangeIfUserModified()}},this.inputNumberKeyUpHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId)},this.alignment="start",this.autofocus=!1,this.clearable=!1,this.disabled=!1,this.form=void 0,this.groupSeparator=!1,this.hidden=!1,this.icon=void 0,this.iconFlipRtl=!1,this.integer=!1,this.label=void 0,this.loading=!1,this.numberingSystem=void 0,this.localeFormat=!1,this.max=void 0,this.min=void 0,this.maxLength=void 0,this.minLength=void 0,this.name=void 0,this.numberButtonType="vertical",this.placeholder=void 0,this.prefixText=void 0,this.readOnly=!1,this.required=!1,this.scale="m",this.status="idle",this.step=void 0,this.autocomplete=void 0,this.inputMode="decimal",this.enterKeyHint=void 0,this.suffixText=void 0,this.editingEnabled=!1,this.value="",this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale="",this.defaultMessages=void 0,this.localizedValue=void 0,this.slottedActionElDisabledInternally=!1}disabledWatcher(){this.setDisabledAction()}maxWatcher(){this.maxString=this.max?.toString()||null}minWatcher(){this.minString=this.min?.toString()||null}onMessagesChange(){}valueWatcher(e,t){this.userChangedValue||(this.setNumberValue({origin:"direct",previousValue:t,value:null==e||""==e?"":(0,c.i)(e)?e:this.previousValue||""}),this.warnAboutInvalidNumberValue(e)),this.userChangedValue=!1}updateRequestedIcon(){this.requestedIcon=(0,a.h)({},this.icon,"number")}get isClearable(){return this.clearable&&this.value.length>0}effectiveLocaleWatcher(e){(0,h.u)(this,this.effectiveLocale),c.n.numberFormatOptions={locale:e,numberingSystem:this.numberingSystem,useGrouping:!1}}connectedCallback(){(0,o.c)(this),(0,c.c)(this),(0,h.c)(this),this.inlineEditableEl=this.el.closest("calcite-inline-editable"),this.inlineEditableEl&&(this.editingEnabled=this.inlineEditableEl.editingEnabled||!1),(0,l.c)(this),(0,r.c)(this),this.setPreviousEmittedNumberValue(this.value),this.setPreviousNumberValue(this.value),this.warnAboutInvalidNumberValue(this.value),this.setNumberValue({origin:"connected",value:(0,c.i)(this.value)?this.value:""}),this.mutationObserver?.observe(this.el,{childList:!0}),this.setDisabledAction(),this.el.addEventListener("calciteInternalHiddenInputChange",this.hiddenInputChangeHandler)}componentDidLoad(){(0,u.s)(this)}disconnectedCallback(){(0,o.d)(this),(0,l.d)(this),(0,r.d)(this),(0,c.d)(this),(0,h.d)(this),this.mutationObserver?.disconnect(),this.el.removeEventListener("calciteInternalHiddenInputChange",this.hiddenInputChangeHandler)}async componentWillLoad(){(0,u.a)(this),this.maxString=this.max?.toString(),this.minString=this.min?.toString(),this.requestedIcon=(0,a.h)({},this.icon,"number"),await(0,h.s)(this)}componentShouldUpdate(e,t,i){return!("value"===i&&e&&!(0,c.i)(e))||(this.setNumberValue({origin:"reset",value:t}),!1)}componentDidRender(){(0,o.u)(this)}async setFocus(){await(0,u.c)(this),this.childNumberEl?.focus()}async selectText(){this.childNumberEl?.select()}onLabelClick(){this.setFocus()}incrementOrDecrementNumberValue(e,t,i,n){const{value:a}=this,r="up"===e?1:-1,o=this.integer&&"any"!==this.step?Math.round(this.step):this.step,s="any"===o?1:Math.abs(o||1),l=new c.B(""!==a?a:"0").add(""+s*r),u="number"===typeof i&&!isNaN(i)&&l.subtract(`${i}`).isNegative?`${i}`:"number"!==typeof t||isNaN(t)||l.subtract(`${t}`).isNegative?l.toString():`${t}`;this.setNumberValue({committing:!0,nativeEvent:n,origin:"user",value:u})}onFormReset(){this.setNumberValue({origin:"reset",value:this.defaultValue})}syncHiddenFormInput(e){e.type="number",e.min=this.min?.toString(10)??"",e.max=this.max?.toString(10)??""}setDisabledAction(){const e=(0,a.g)(this.el,"action");e&&(this.disabled?(null==e.getAttribute("disabled")&&(this.slottedActionElDisabledInternally=!0),e.setAttribute("disabled","")):this.slottedActionElDisabledInternally&&(e.removeAttribute("disabled"),this.slottedActionElDisabledInternally=!1))}normalizeValue(e){return(0,c.i)(e)?e:""}warnAboutInvalidNumberValue(e){e&&!(0,c.i)(e)&&console.warn(`The specified value "${e}" cannot be parsed, or is out of range.`)}render(){const e=(0,a.b)(this.el),t=(0,n.h)("div",{class:v},(0,n.h)("calcite-progress",{label:this.messages.loading,type:"indeterminate"})),i=(0,n.h)("button",{"aria-label":this.messages.clear,class:g,disabled:this.disabled||this.readOnly,onClick:this.clearInputValue,tabIndex:-1,type:"button"},(0,n.h)("calcite-icon",{icon:"x",scale:(0,m.g)(this.scale)})),o=(0,n.h)("calcite-icon",{class:f,flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:(0,m.g)(this.scale)}),s="horizontal"===this.numberButtonType,u=(0,n.h)("button",{"aria-hidden":"true",class:{[z]:!0,[N]:s},"data-adjustment":"up",disabled:this.disabled||this.readOnly,onPointerDown:this.nudgeButtonPointerDownHandler,onPointerOut:this.nudgeButtonPointerOutHandler,onPointerUp:this.nudgeButtonPointerUpHandler,tabIndex:-1,type:"button"},(0,n.h)("calcite-icon",{icon:"chevron-up",scale:(0,m.g)(this.scale)})),c=(0,n.h)("button",{"aria-hidden":"true",class:{[z]:!0,[N]:s},"data-adjustment":"down",disabled:this.disabled||this.readOnly,onPointerDown:this.nudgeButtonPointerDownHandler,onPointerOut:this.nudgeButtonPointerOutHandler,onPointerUp:this.nudgeButtonPointerUpHandler,tabIndex:-1,type:"button"},(0,n.h)("calcite-icon",{icon:"chevron-down",scale:(0,m.g)(this.scale)})),d=(0,n.h)("div",{class:w},u,c),h=(0,n.h)("div",{class:x},this.prefixText),b=(0,n.h)("div",{class:y},this.suffixText),p=(0,n.h)("input",{"aria-label":(0,l.g)(this),autocomplete:this.autocomplete,autofocus:!!this.autofocus||null,defaultValue:this.defaultValue,disabled:!!this.disabled||null,enterKeyHint:this.enterKeyHint,inputMode:this.inputMode,key:"localized-input",maxLength:this.maxLength,minLength:this.minLength,name:void 0,onBlur:this.inputNumberBlurHandler,onFocus:this.inputNumberFocusHandler,onInput:this.inputNumberInputHandler,onKeyDown:this.inputNumberKeyDownHandler,onKeyUp:this.inputNumberKeyUpHandler,placeholder:this.placeholder||"",readOnly:this.readOnly,type:"text",value:this.localizedValue,ref:this.setChildNumberElRef});return(0,n.h)(n.AA,{onClick:this.clickHandler,onKeyDown:this.keyDownHandler},(0,n.h)("div",{class:{[k]:!0,[a.C.rtl]:"rtl"===e}},"horizontal"!==this.numberButtonType||this.readOnly?null:c,this.prefixText?h:null,(0,n.h)("div",{class:I},p,this.isClearable?i:null,this.requestedIcon?o:null,this.loading?t:null),(0,n.h)("div",{class:V},(0,n.h)("slot",{name:E})),"vertical"!==this.numberButtonType||this.readOnly?null:d,this.suffixText?b:null,"horizontal"!==this.numberButtonType||this.readOnly?null:u,(0,n.h)(r.H,{component:this})))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{disabled:["disabledWatcher"],max:["maxWatcher"],min:["minWatcher"],messageOverrides:["onMessagesChange"],value:["valueWatcher"],icon:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleWatcher"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .number-button-wrapper,:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .number-button-wrapper,:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .number-button-wrapper,:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;text-overflow:ellipsis;border-radius:0px;background-color:var(--calcite-ui-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1)}input:placeholder-shown{text-overflow:ellipsis}input{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);color:var(--calcite-ui-text-1)}input::placeholder,input:-ms-input-placeholder,input::-ms-input-placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}input:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-1)}input[readonly]{background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium)}input[readonly]:focus{color:var(--calcite-ui-text-1)}calcite-icon{color:var(--calcite-ui-text-3)}input{outline-color:transparent}input:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([status=invalid]) input{border-color:var(--calcite-ui-danger)}:host([status=invalid]) input:focus{outline:2px solid var(--calcite-ui-danger);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;z-index:var(--calcite-app-z-index);display:block;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-ui-foreground-2);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-ui-text-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-ui-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-ui-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.clear-button:disabled{opacity:var(--calcite-ui-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-ui-text-2)}.prefix{order:2;border-inline-end-width:0px}.suffix{order:5;border-inline-start-width:0px}:host([alignment=start]) input{text-align:start}:host([alignment=end]) input{text-align:end}.number-button-wrapper{pointer-events:none;order:6;box-sizing:border-box;display:flex;flex-direction:column;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host([number-button-type=vertical]) .wrapper{flex-direction:row;display:flex}:host([number-button-type=vertical]) input{order:2}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=down] calcite-icon{transform:rotate(-90deg)}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=up] calcite-icon{transform:rotate(-90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down],.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:1;max-block-size:100%;min-block-size:100%;align-self:stretch}.number-button-item.number-button-item--horizontal[data-adjustment=down] calcite-icon,.number-button-item.number-button-item--horizontal[data-adjustment=up] calcite-icon{transform:rotate(90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down]{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);border-inline-end-width:0px}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover{background-color:var(--calcite-ui-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover calcite-icon{color:var(--calcite-ui-text-1)}.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:5}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover{background-color:var(--calcite-ui-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover{background-color:var(--calcite-ui-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover{background-color:var(--calcite-ui-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]{border-block-start-width:0px}.number-button-item{max-block-size:50%;min-block-size:50%;pointer-events:initial;margin:0px;box-sizing:border-box;display:flex;cursor:pointer;align-items:center;align-self:center;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);padding-block:0px;padding-inline:0.5rem;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline-start-width:0px}.number-button-item calcite-icon{pointer-events:none;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.number-button-item:focus{background-color:var(--calcite-ui-foreground-2)}.number-button-item:focus calcite-icon{color:var(--calcite-ui-text-1)}.number-button-item:active{background-color:var(--calcite-ui-foreground-3)}.number-button-item:disabled{pointer-events:none}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-ui-border-1)}.inline-child{background-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.inline-child .editing-enabled{background-color:inherit}.inline-child:not(.editing-enabled){display:flex;cursor:pointer;border-color:transparent;padding-inline-start:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-input-number",{alignment:[513],autofocus:[516],clearable:[516],disabled:[516],form:[513],groupSeparator:[516,"group-separator"],hidden:[516],icon:[520],iconFlipRtl:[516,"icon-flip-rtl"],integer:[4],label:[1],loading:[516],numberingSystem:[513,"numbering-system"],localeFormat:[4,"locale-format"],max:[514],min:[514],maxLength:[514,"max-length"],minLength:[514,"min-length"],name:[513],numberButtonType:[513,"number-button-type"],placeholder:[1],prefixText:[1,"prefix-text"],readOnly:[516,"read-only"],required:[516],scale:[513],status:[513],step:[520],autocomplete:[1],inputMode:[1,"input-mode"],enterKeyHint:[1,"enter-key-hint"],suffixText:[1,"suffix-text"],editingEnabled:[1540,"editing-enabled"],value:[1025],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],localizedValue:[32],slottedActionElDisabledInternally:[32],setFocus:[64],selectText:[64]}]);function O(){if("undefined"===typeof customElements)return;["calcite-input-number","calcite-icon","calcite-progress"].forEach((e=>{switch(e){case"calcite-input-number":customElements.get(e)||customElements.define(e,H);break;case"calcite-icon":customElements.get(e)||(0,b.d)();break;case"calcite-progress":customElements.get(e)||(0,p.d)()}}))}O()}}]);
//# sourceMappingURL=13185.4d50137b.chunk.js.map