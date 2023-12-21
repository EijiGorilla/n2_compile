"use strict";(self.webpackChunkn2_compile=self.webpackChunkn2_compile||[]).push([[1453],{58935:(t,e,i)=>{i.d(e,{Rd:()=>n,Ud:()=>l,VG:()=>s,Wv:()=>a,Zv:()=>h});var o=i(47898),r=i(5163);function s(t,e,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"abbr";return(0,r.VG)(t,(0,o.nn)(e,i).value,i,s,n)}function n(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"abbr";return(0,r.Rd)(t,e.value,e.unit,i,o)}function a(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"abbr";return(0,r.Wv)(t,e.value,e.unit,i,o)}function l(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"abbr";return(0,r.Ud)(t,e.value,e.unit,i,o)}function h(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"abbr";return(0,r.Zv)(t,e.value,e.unit,i,o)}},47898:(t,e,i)=>{i.d(e,{EV:()=>r,ne:()=>n,nn:()=>l,yG:()=>s});var o=i(68860);function r(t,e){return{type:(0,o.UF)(e),value:t,unit:e}}function s(t,e){return{type:(0,o.UF)(e),value:t,unit:e}}function n(t,e){return{type:(0,o.UF)(e),value:t,unit:e}}function a(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"arithmetic";return{type:(0,o.UF)(e),value:t,unit:e,rotationType:i}}function l(t,e){const i=function(t,e){return(0,o.En)(t.value,t.unit,e)}(t,e);return"angle"===t.type?a(i,e,t.rotationType):r(i,e)}s(0,"meters"),n(0,"square-meters"),a(0,"radians"),a(0,"degrees")},5163:(t,e,i)=>{i.d(e,{Rd:()=>c,Ud:()=>p,VG:()=>h,Wv:()=>d,Zv:()=>u,ld:()=>_,sS:()=>v,yc:()=>m});var o=i(70116),r=(i(17768),i(16889)),s=(i(47898),i(643)),n=i(68860),a=i(6291);function l(t,e,i){return t.units[e][i]}function h(t,e,i){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"abbr";return"".concat((0,a.uf)(e,{minimumFractionDigits:o,maximumFractionDigits:o,signDisplay:e>0?"never":"exceptZero"})," ").concat(l(t,i,r))}function c(t,e,i){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"abbr";const s=(0,n.Y8)(e,i);return h(t,(0,n.En)(e,i,s),s,o,r)}function d(t,e,i){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"abbr";const s=(0,n.Dw)(e,i);return h(t,(0,n.En)(e,i,s),s,o,r)}function p(t,e,i){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"abbr";const s=(0,n.Q7)(e,i);return h(t,(0,n.En)(e,i,s),s,o,r)}function u(t,e,i){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"abbr";const s=(0,n.jl)(e,i);return h(t,(0,n.En)(e,i,s),s,o,r)}function _(t,e,i){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"abbr";const s=(0,n.ZI)(e,i);return h(t,(0,n.En)(e,i,s),s,o,r)}function m(t,e,i){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"abbr";const s=(0,n.LV)(e,i);return h(t,(0,n.En)(e,i,s),s,o,r)}new Map;const g=["B","kB","MB","GB","TB"];function v(t,e){let i=0===(e=Math.round(e))?0:Math.floor(Math.log(e)/Math.log(o.Y.KILOBYTES));i=(0,r.uZ)(i,0,g.length-1);const n=(0,a.uf)(e/o.Y.KILOBYTES**i,{maximumFractionDigits:2});return(0,s.gx)(t.units.bytes[g[i]],{fileSize:n})}},98074:(t,e,i)=>{i.d(e,{p:()=>l});var o=i(27366),r=i(42537),s=i(67426),n=i(49861),a=(i(25243),i(63780),i(93169),i(69912));const l=t=>{let e=class extends((0,s.v)(t)){constructor(){super(...arguments),this.parent=null,this._userInteractive=!1,this._interactiveViewModelCount=0}get interactive(){return this._interactiveViewModelCount>0||this._userInteractive}set interactive(t){this._userInteractive=t}get updating(){return!1}get visible(){return null==this.parent||this.parent.visible&&!this.parent.suspended}set visible(t){this._overrideIfSome("visible",t)}forceInteractiveForViewModel(){return this._interactiveViewModelCount++,(0,r.kB)((()=>this._interactiveViewModelCount--))}};return(0,o._)([(0,n.Cb)({readOnly:!0})],e.prototype,"type",void 0),(0,o._)([(0,n.Cb)({constructOnly:!0})],e.prototype,"analysis",void 0),(0,o._)([(0,n.Cb)({constructOnly:!0})],e.prototype,"parent",void 0),(0,o._)([(0,n.Cb)({constructOnly:!0})],e.prototype,"view",void 0),(0,o._)([(0,n.Cb)({type:Boolean})],e.prototype,"interactive",null),(0,o._)([(0,n.Cb)()],e.prototype,"_userInteractive",void 0),(0,o._)([(0,n.Cb)({readOnly:!0})],e.prototype,"updating",null),(0,o._)([(0,n.Cb)()],e.prototype,"visible",null),(0,o._)([(0,n.Cb)()],e.prototype,"_interactiveViewModelCount",void 0),e=(0,o._)([(0,a.j)("esri.views.3d.analysis.AnalysisView3D")],e),e}},33906:(t,e,i)=>{i.d(e,{G:()=>s,e:()=>n});var o=i(79803),r=i(77648);function s(t,e,i){var s;let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const a=(0,o.tryProjectWithZConversion)(t,e);return null==a?null:(a.hasZ&&!n||null==i||(a.z=null!==(s=(0,r.KO)(i,a))&&void 0!==s?s:0),a)}function n(t,e,i){i.warnOnce("Failed to project analysis geometry (id: '".concat(t.id,"'), projection from spatial reference (wkid: '").concat(e.wkid,"') to view spatial reference is not supported. Projection may be possible after calling projection.load()."))}},61201:(t,e,i)=>{i.d(e,{Kc:()=>I,jB:()=>T});var o=i(51995),r=i(100),s=i(94172),n=i(17842),a=i(88396),l=i(11186),h=i(71353),c=i(86244),d=i(11208),p=i(27366),u=i(7138),_=i(49861),m=(i(25243),i(63780),i(93169),i(69912));i(42877);let g=t=>({vnodeSelector:"",properties:void 0,children:void 0,text:t.toString(),domNode:null}),v=(t,e,i)=>{for(let o=0,r=e.length;o<r;o++){let r=e[o];Array.isArray(r)?v(t,r,i):null!=r&&!1!==r&&("string"==typeof r&&(r=g(r)),i.push(r))}};function f(t,e,i){if(Array.isArray(e))i=e,e=void 0;else if(e&&("string"==typeof e||e.hasOwnProperty("vnodeSelector"))||i&&("string"==typeof i||i.hasOwnProperty("vnodeSelector")))throw new Error("h called with invalid arguments");let o,r;return i&&1===i.length&&"string"==typeof i[0]?o=i[0]:i&&(r=[],v(t,i,r),0===r.length&&(r=void 0)),{vnodeSelector:t,properties:e,children:r,text:""===o?void 0:o,domNode:null}}i(88367);let y=class extends u.Z{get startPosition(){return[this.startX,this.startY]}set startPosition(t){this._set("startX",t[0]),this._set("startY",t[1])}get endPosition(){return[this.endX,this.endY]}set endPosition(t){this._set("endX",t[0]),this._set("endY",t[1])}constructor(t){super(t),this.startX=0,this.startY=0,this.endX=0,this.endY=0,this.width=1,this.color=[0,0,0,.5],this.visible=!0,this.isDecoration=!0}get _strokeStyle(){const t=this.color;return"rgba(".concat(t[0],", ").concat(t[1],", ").concat(t[2],", ").concat(t[3],")")}get _lineCap(){return"round"}render(){const{height:t,left:e,top:i,width:o,x1:r,x2:s,y1:n,y2:a}=this._calculateCoordinates(x),l="stroke: ".concat(this._strokeStyle,"; stroke-width: ").concat(this.width,"; stroke-linecap: ").concat(this._lineCap,";");return f("div",{classes:{"esri-line-overlay-item":!0},styles:{left:e+"px",top:i+"px",width:o+"px",height:t+"px",visibility:this.visible?"visible":"hidden"}},[f("svg",{width:o,height:t},[f("line",{x1:r,y1:n,x2:s,y2:a,style:l})])])}renderCanvas(t){if(!this.visible)return;t.strokeStyle=this._strokeStyle,t.lineWidth=this.width,t.lineCap=this._lineCap;const e=this._calculateCoordinates(x);t.beginPath(),t.moveTo(e.left+e.x1,e.top+e.y1),t.lineTo(e.left+e.x2,e.top+e.y2),t.stroke()}_calculateCoordinates(t){const e=Math.min(this.startX,this.endX),i=Math.max(this.startX,this.endX),o=Math.min(this.startY,this.endY),r=Math.max(this.startY,this.endY),s=this.width;return t.left=e-s,t.top=o-s,t.width=i-e+2*s,t.height=Math.max(20,r-o+2*s),t.x1=this.startX-e+s,t.y1=this.startY-o+s,t.x2=this.endX-e+s,t.y2=this.endY-o+s,t}};(0,p._)([(0,_.Cb)()],y.prototype,"startX",void 0),(0,p._)([(0,_.Cb)()],y.prototype,"startY",void 0),(0,p._)([(0,_.Cb)()],y.prototype,"endX",void 0),(0,p._)([(0,_.Cb)()],y.prototype,"endY",void 0),(0,p._)([(0,_.Cb)()],y.prototype,"startPosition",null),(0,p._)([(0,_.Cb)()],y.prototype,"endPosition",null),(0,p._)([(0,_.Cb)()],y.prototype,"width",void 0),(0,p._)([(0,_.Cb)()],y.prototype,"color",void 0),(0,p._)([(0,_.Cb)()],y.prototype,"visible",void 0),(0,p._)([(0,_.Cb)()],y.prototype,"isDecoration",void 0),(0,p._)([(0,_.Cb)({readOnly:!0})],y.prototype,"_strokeStyle",null),y=(0,p._)([(0,m.j)("esri.views.overlay.LineOverlayItem")],y);const x={left:0,top:0,width:0,height:0,x1:0,y1:0,x2:0,y2:0},b=y,C={bottom:"esri-text-overlay-item-anchor-bottom","bottom-right":"esri-text-overlay-item-anchor-bottom-right","bottom-left":"esri-text-overlay-item-anchor-bottom-left",top:"esri-text-overlay-item-anchor-top","top-right":"esri-text-overlay-item-anchor-top-right","top-left":"esri-text-overlay-item-anchor-top-left",center:"esri-text-overlay-item-anchor-center",right:"esri-text-overlay-item-anchor-right",left:"esri-text-overlay-item-anchor-left"};let w=class extends u.Z{get position(){return[this.x,this.y]}set position(t){this._set("x",t[0]),this._set("y",t[1])}get _textShadowColor(){const{textColor:t,backgroundColor:e}=this,i=e.clone();return i.a*=t.a,i}get _textShadow(){const t=this._textShadowColor.toCss(!0);return"0 0 ".concat(this._textShadowSize,"px ").concat(t)}get _padding(){return.5*this.fontSize}get _borderRadius(){return this._padding}constructor(t){super(t),this.x=0,this.y=0,this.text="-",this.fontSize=14,this.anchor="center",this.visible=!0,this.isDecoration=!0,this.backgroundColor=new o.Z([0,0,0,.6]),this.textColor=new o.Z([255,255,255]),this._textShadowSize=1}render(){return f("div",{classes:this._cssClasses(),styles:{left:Math.floor(this.x)+"px",top:Math.floor(this.y)+"px",visibility:this.visible?"visible":"hidden",fontSize:this.fontSize+"px",lineHeight:this.fontSize+"px",backgroundColor:this.backgroundColor.toCss(!0),color:this.textColor.toCss(!0),padding:this._padding+"px",borderRadius:this._borderRadius+"px",textShadow:this._textShadow}},[this.text])}renderCanvas(t){if(!this.visible)return;const e=t.font.replace(/^(.*?)px/,"");t.font="".concat(this.fontSize,"px ").concat(e);const i=this._padding,o=this._borderRadius,r=t.measureText(this.text).width,s=this.fontSize,n=S[this.anchor];t.textAlign="center",t.textBaseline="middle";const a=r+2*i,l=s+2*i,h=this.x+n.x*a,c=this.y+n.y*l;this._roundedRect(t,h,c,a,l,o),t.fillStyle=this.backgroundColor.toCss(!0),t.fill();const d=this.x+(n.x+.5)*a,p=this.y+(n.y+.5)*l;this._renderTextShadow(t,this.text,d,p),t.fillStyle=this.textColor.toCss(!0),t.fillText(this.text,d,p)}_renderTextShadow(t,e,i,o){t.lineJoin="miter",t.fillStyle="rgba(".concat(this._textShadowColor.r,", ").concat(this._textShadowColor.g,", ").concat(this._textShadowColor.b,", ").concat(1/P.length,")");const r=this._textShadowSize;for(const[s,n]of P)t.fillText(e,i+r*s,o+r*n)}_roundedRect(t,e,i,o,r,s){t.beginPath(),t.moveTo(e,i+s),t.arcTo(e,i,e+s,i,s),t.lineTo(e+o-s,i),t.arcTo(e+o,i,e+o,i+s,s),t.lineTo(e+o,i+r-s),t.arcTo(e+o,i+r,e+o-s,i+r,s),t.lineTo(e+s,i+r),t.arcTo(e,i+r,e,i+r-s,s),t.closePath()}_cssClasses(){const t={"esri-text-overlay-item":!0};let e;for(e in C)t[C[e]]=this.anchor===e;return t}};(0,p._)([(0,_.Cb)()],w.prototype,"x",void 0),(0,p._)([(0,_.Cb)()],w.prototype,"y",void 0),(0,p._)([(0,_.Cb)()],w.prototype,"position",null),(0,p._)([(0,_.Cb)()],w.prototype,"text",void 0),(0,p._)([(0,_.Cb)()],w.prototype,"fontSize",void 0),(0,p._)([(0,_.Cb)()],w.prototype,"anchor",void 0),(0,p._)([(0,_.Cb)()],w.prototype,"visible",void 0),(0,p._)([(0,_.Cb)()],w.prototype,"isDecoration",void 0),(0,p._)([(0,_.Cb)()],w.prototype,"backgroundColor",void 0),(0,p._)([(0,_.Cb)()],w.prototype,"textColor",void 0),(0,p._)([(0,_.Cb)()],w.prototype,"_textShadowSize",void 0),(0,p._)([(0,_.Cb)()],w.prototype,"_textShadowColor",null),(0,p._)([(0,_.Cb)()],w.prototype,"_textShadow",null),(0,p._)([(0,_.Cb)()],w.prototype,"_padding",null),(0,p._)([(0,_.Cb)()],w.prototype,"_borderRadius",null),w=(0,p._)([(0,m.j)("esri.views.overlay.TextOverlayItem")],w);const S={bottom:{x:-.5,y:-1,textAlign:"center",textBaseline:"bottom"},"bottom-left":{x:0,y:-1,textAlign:"left",textBaseline:"bottom"},"bottom-right":{x:-1,y:-1,textAlign:"right",textBaseline:"bottom"},center:{x:-.5,y:-.5,textAlign:"center",textBaseline:"middle"},left:{x:0,y:-.5,textAlign:"left",textBaseline:"middle"},right:{x:-1,y:-.5,textAlign:"right",textBaseline:"middle"},top:{x:-.5,y:0,textAlign:"center",textBaseline:"top"},"top-left":{x:0,y:0,textAlign:"left",textBaseline:"top"},"top-right":{x:-1,y:0,textAlign:"right",textBaseline:"top"}},P=[];{const t=16;for(let e=0;e<360;e+=360/t)P.push([Math.cos(Math.PI*e/180),Math.sin(Math.PI*e/180)])}const R=w;class I extends c.l{constructor(t){super(t),this._handles=new r.Z,this._textItem=null,this._calloutItem=null,this._showCallout=!0,this._showText=!0,this._geometry=null,this._text="-",this._fontSize=14,this._backgroundColor=new o.Z([0,0,0,.6]),this._calloutColor=new o.Z([0,0,0,.5]),this._textColor=new o.Z([255,255,255]),this._distance=25,this._anchor="right",this.updatePositionOnCameraMove=!0,this.applyProperties(t)}get geometry(){return this._geometry}set geometry(t){this._geometry=t,this.updateLabelPosition()}get isDecoration(){return this._isDecoration}set isDecoration(t){this._isDecoration=t,this._textItem&&(this._textItem.isDecoration=t),this._calloutItem&&(this._calloutItem.isDecoration=t)}get textItem(){return this._textItem}get text(){return this._text}set text(t){this._text=t,this.attached&&(this._textItem.text=this._text)}get fontSize(){return this._fontSize}set fontSize(t){this._fontSize=t,this.attached&&(this._textItem.fontSize=this._fontSize)}get backgroundColor(){return this._backgroundColor}set backgroundColor(t){this._backgroundColor=t,this.attached&&(this._textItem.backgroundColor=this._backgroundColor)}get calloutColor(){return this._calloutColor}set calloutColor(t){this._calloutColor=t,this.attached&&(this._calloutItem.color=this._calloutColor.toRgba())}get textColor(){return this._textColor}set textColor(t){this._textColor=t,this.attached&&(this._textItem.textColor=this._textColor)}get distance(){return this._distance}set distance(t){this._distance!==t&&(this._distance=t,this.updateLabelPosition())}get anchor(){return this._anchor}set anchor(t){this._anchor!==t&&(this._anchor=t,this.updateLabelPosition())}get _camera(){return this.view.state.cssCamera}overlaps(t){var e;return!!this.attached&&this.textItem.visible&&t.textItem.visible&&!(null===(e=this.view.overlay)||void 0===e||!e.overlaps(this._textItem,t.textItem))}updateLabelPosition(){if(!this.attached)return;this._showText=!1,this._showCallout=!1;const{geometry:t,view:e,visible:i}=this;if(null!=t&&e._stage)switch(t.type){case"point":if(!this._computeLabelPositionFromPoint(t.point,E))break;if(t.callout){const e=this._camera,i=t.callout.distance;(0,a.i)(B,B,[0,t.callout.offset]),e.renderToScreen(B,E),(0,a.s)(F,0,1),(0,a.a)(F,F,i),(0,a.i)(F,F,B),e.renderToScreen(F,Y),this._showCallout=this._updatePosition(E,Y)}else this._textItem.position=[E[0],E[1]],this._textItem.anchor="center";this._showText=!0;break;case"corner":if(!this._computeLabelPositionFromCorner(t,this._distance,E,Y))break;this._showCallout=this._updatePosition(E,Y),this._showText=!0;break;case"segment":{if(!this._computeLabelPositionFromSegment(t,this._distance,this._anchor,E,Y))break;this._showText=!0;const e=this._updatePosition(E,Y);this._showCallout=!1!==t.callout&&e,this._showCallout||(this._textItem.anchor="center")}}this.updateVisibility(i)}_computeLabelPositionFromPoint(t,e){const i=this._camera;return i.projectToRenderScreen(t,B),!(B[2]<0||B[2]>1)&&(i.renderToScreen(B,e),!0)}_computeLabelPositionFromCorner(t,e,i,o){if(!t)return!1;const r=this._camera;return k(t.left,1,r,z),(0,a.n)(z,z),k(t.right,0,r,j),(0,a.i)(F,z,j),(0,a.n)(F,F),(0,a.e)(F,F),r.projectToRenderScreen(t.left.endRenderSpace,B),!(B[2]<0||B[2]>1)&&(r.renderToScreen(B,i),(0,a.a)(F,F,e),(0,a.i)(F,F,B),r.renderToScreen(F,o),!0)}_computeLabelPositionFromSegment(t,e,i,o,r){if(!t)return!1;const s=t.segment,n=this._camera;(0,d.CM)(s.startRenderSpace,s.endRenderSpace,n,z),(0,a.s)(F,-z[1],z[0]);let l=!1;switch(i){case"top":l=F[1]<0;break;case"bottom":l=F[1]>0;break;case"left":l=F[0]>0;break;case"right":l=F[0]<0}if(l&&(0,a.n)(F,F),0===(0,a.h)(F))switch(i){case"top":F[1]=1;break;case"bottom":F[1]=-1;break;case"left":F[0]=-1;break;case"right":F[0]=1}return s.eval(V[t.sampleLocation],A),n.projectToRenderScreen(A,B),!(B[2]<0||B[2]>1)&&(n.renderToScreen(B,o),(0,a.a)(F,F,e),(0,a.i)(F,F,B),n.renderToScreen(F,r),!0)}_updatePosition(t,e){if(e){const i=e[0]-t[0],o=e[1]-t[1];return this._textItem.position=[e[0],e[1]],this._textItem.anchor=Math.abs(i)>Math.abs(o)?i>0?"left":"right":o>0?"top":"bottom",this._calloutItem.startPosition=[t[0],t[1]],this._calloutItem.endPosition=[e[0],e[1]],!0}return this._textItem.position=[t[0],t[1]],this._textItem.anchor="center",!1}createResources(){var t;this._textItem=new R({visible:!0,text:this._text,fontSize:this._fontSize,backgroundColor:this._backgroundColor,textColor:this._textColor,isDecoration:this._isDecoration}),this._calloutItem=new b({color:this._calloutColor.toRgba(),visible:!0,width:2,isDecoration:this._isDecoration}),this.updateLabelPosition(),null!==(t=this.view.overlay)&&void 0!==t&&t.items.addMany([this._textItem,this._calloutItem]),this.updatePositionOnCameraMove&&this._handles.add((0,s.YP)((()=>this.view.state.camera),(()=>this.updateLabelPosition())))}destroyResources(){this.view.overlay&&!this.view.overlay.destroyed&&this.view.overlay.items.removeMany([this._textItem,this._calloutItem]),this._handles.removeAll()}updateVisibility(t){this._textItem.visible=this._showText&&t,this._calloutItem.visible=this._showCallout&&t}}function k(t,e,i,o){t.eval(e,M,D),(0,l.g)(O,M,D),i.projectToRenderScreen(M,G),i.projectToRenderScreen(O,L),(0,a.c)(o,X,Z),(0,a.e)(o,o)}function T(t){switch(t){case"top":return"bottom";case"right":return"left";case"bottom":return"top";case"left":return"right"}}const M=(0,h.c)(),O=(0,h.c)(),D=(0,h.c)(),z=(0,n.gX)(),j=(0,n.gX)(),F=(0,n.gX)(),A=(0,h.c)(),B=(0,n.J$)(),E=(0,n.s1)(),Y=(0,n.s1)(),G=(0,n.J$)(),Z=G,L=(0,n.J$)(),X=L,V={start:0,center:.5,end:1}},33837:(t,e,i)=>{i.d(e,{r:()=>p});var o=i(14226),r=i(81949),s=i(11186),n=i(71353),a=i(67077),l=i(52168),h=i(79685),c=i(56529),d=i(58901);class p extends l._{constructor(t,e){super(t),this._hasExternalMaterial=!1,this._hasExternalMaterial=null!=e,this._material=null!=e?e:new d.U({width:1,color:(0,a.f)(1,0,1,1),stippleOffColor:null,stipplePattern:null,stipplePreferContinuous:!0,isClosed:!1,falloff:0,innerColor:null,innerWidth:1,hasPolygonOffset:!1,renderOccluded:c.yD.OccludeAndTransparent,isDecoration:!!t.isDecoration,writeDepth:!0}),this.applyProperties(t)}setGeometryFromRenderSpacePoint(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;this.geometry=[[[t[0]-e,t[1],t[2]],[t[0]+e,t[1],t[2]]],[[t[0],t[1]-e,t[2]],[t[0],t[1]+e,t[2]]],[[t[0],t[1],t[2]-e],[t[0],t[1],t[2]+e]]]}setGeometryFromExtent(t){const e=this.view.spatialReference,i=(0,n.c)(),o=(0,n.c)(),r=100,a=[];(0,s.s)(i,t[0],t[1],r),this.view.renderCoordsHelper.toRenderCoords(i,e,o),a.push([o[0],o[1],o[2]]),(0,s.s)(i,t[2],t[1],r),this.view.renderCoordsHelper.toRenderCoords(i,e,o),a.push([o[0],o[1],o[2]]),(0,s.s)(i,t[2],t[3],r),this.view.renderCoordsHelper.toRenderCoords(i,e,o),a.push([o[0],o[1],o[2]]),(0,s.s)(i,t[0],t[3],r),this.view.renderCoordsHelper.toRenderCoords(i,e,o),a.push([o[0],o[1],o[2]]),(0,s.s)(i,t[0],t[1],r),this.view.renderCoordsHelper.toRenderCoords(i,e,o),a.push([o[0],o[1],o[2]]),(0,s.s)(i,t[0],t[1],r),this.view.renderCoordsHelper.toRenderCoords(i,e,o),a.push([o[0],o[1],o[2]]),this.geometry=[a]}setGeometryFromFrustum(t){const e=[];t.lines.forEach((t=>{e.push([t.origin[0],t.origin[1],t.origin[2]]),e.push([t.endpoint[0],t.endpoint[1],t.endpoint[2]])})),this.geometry=[e]}setGeometryFromBoundedPlane(t){const e=[],i=t.origin,o=t.basis1,r=t.basis2,s=.5,a=(0,n.c)(),l=(0,n.c)(),h=(0,n.c)(),c=(0,n.c)();a[0]=i[0]-o[0]*s-r[0]*s,a[1]=i[1]-o[1]*s-r[1]*s,a[2]=i[2]-o[2]*s-r[2]*s,l[0]=i[0]-o[0]*s+r[0]*s,l[1]=i[1]-o[1]*s+r[1]*s,l[2]=i[2]-o[2]*s+r[2]*s,h[0]=i[0]+o[0]*s+r[0]*s,h[1]=i[1]+o[1]*s+r[1]*s,h[2]=i[2]+o[2]*s+r[2]*s,c[0]=i[0]+o[0]*s-r[0]*s,c[1]=i[1]+o[1]*s-r[1]*s,c[2]=i[2]+o[2]*s-r[2]*s,e.push([a[0],a[1],a[2]]),e.push([l[0],l[1],l[2]]),e.push([h[0],h[1],h[2]]),e.push([c[0],c[1],c[2]]),e.push([a[0],a[1],a[2]]),this.geometry=[e]}setGeometryFromSegment(t){const e=t.endRenderSpace;this.transform=(0,o.d)(u,e);const{points:i}=t.createRenderGeometry(e,this.view.renderCoordsHelper);this.geometry=[i]}setGeometryFromSegments(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.Z;this.transform=(0,o.d)(u,e),this.geometry=t.map((t=>t.createRenderGeometry(e,this.view.renderCoordsHelper).points))}getTransformedGeometry(){return null==this._geometry?null:this._geometry.map((t=>t.map((t=>(0,s.e)((0,n.c)(),t,this.transform)))))}get renderOccluded(){return this._material.parameters.renderOccluded}set renderOccluded(t){this._material.setParameters({renderOccluded:t})}get geometry(){return this._geometry}set geometry(t){this._geometry=t,this.recreateGeometry()}get width(){return this._material.parameters.width}set width(t){this._material.setParameters({width:t})}get color(){return this._material.parameters.color}set color(t){const e=1===t[3];this._material.setParameters({color:(0,a.d)(t),writeDepth:e})}get innerWidth(){return this._material.parameters.innerWidth}set innerWidth(t){this._material.setParameters({innerWidth:t})}get innerColor(){return this._material.parameters.innerColor}set innerColor(t){this._material.setParameters({innerColor:null!=t?(0,a.d)(t):null})}get stipplePattern(){return this._material.parameters.stipplePattern}set stipplePattern(t){null!=this._material&&this._material.setParameters({stipplePattern:t})}get stippleOffColor(){return this._material.parameters.stippleOffColor}set stippleOffColor(t){this._material.setParameters({stippleOffColor:null!=t?(0,a.d)(t):null})}get stipplePreferContinuous(){return this._material.parameters.stipplePreferContinuous}set stipplePreferContinuous(t){this._material.setParameters({stipplePreferContinuous:t})}get falloff(){return this._material.parameters.falloff}set falloff(t){this._material.setParameters({falloff:t})}get polygonOffset(){return this._material.parameters.hasPolygonOffset}set polygonOffset(t){this._material.setParameters({hasPolygonOffset:t})}createExternalResources(){}destroyExternalResources(){}createGeometries(t){for(const e of(0,h.c)(this.geometry)){const i=(0,h.Y)(this._material,e);t.addGeometry(i)}}forEachExternalMaterial(t){this._hasExternalMaterial||t(this._material)}}const u=(0,r.a)()},9052:(t,e,i)=>{i.d(e,{u:()=>d,y:()=>c});var o=i(11186),r=i(71353),s=i(79803),n=i(29691),a=i(5986),l=i(51378),h=i(80064);class c{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,r.c)(),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,r.c)();this.startRenderSpace=t,this.endRenderSpace=e,this.type="euclidean"}eval(t,e,i){return(0,o.p)(e,this.startRenderSpace,this.endRenderSpace,t),i&&((0,o.f)(i,this.endRenderSpace,this.startRenderSpace),(0,o.n)(i,i)),e}createRenderGeometry(t,e){const i=[],r=[],s=(e,s)=>{const n=u;(0,o.f)(n,e,t),i.push([n[0],n[1],n[2]]),r.push([s[0],s[1],s[2]])},n=e.worldUpAtPosition(this.eval(.5,p),l.WM.get());return s(this.startRenderSpace,n),s(this.endRenderSpace,n),{points:i,normals:r}}static fromPositionAndVector(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return(0,o.i)(p,e,i),(0,o.g)(p,t,p),new c((0,r.g)(t),(0,r.g)(p))}}class d{_projectIn(t,e){this._project?(0,a.S)(t,this.renderSpatialReference,e,this._pcpf):(0,o.c)(e,t)}constructor(t,e,i){this.startRenderSpace=t,this.endRenderSpace=e,this.renderSpatialReference=i,this.type="geodesic",this._start=(0,r.c)(),this._end=(0,r.c)(),this._pcpf=(0,n.rS)(i),this._project=(0,s.canProjectWithoutEngine)(i,this._pcpf),this._projectIn(t,this._start),this._projectIn(e,this._end)}eval(t,e,i){if(this._project)if(i){const r=u;(0,h.ek)(this._start,this._end,t,e,r),(0,o.g)(_,e,r),(0,a.S)(e,this._pcpf,e,this.renderSpatialReference),(0,a.S)(_,this._pcpf,_,this.renderSpatialReference),(0,o.f)(i,_,e),(0,o.n)(i,i)}else(0,h.ZA)(this._start,this._end,t,e),(0,a.S)(e,this._pcpf,e,this.renderSpatialReference);else(0,o.p)(e,this._start,this._end,t),i&&((0,o.f)(i,this._end,this._start),(0,o.n)(i,i));return e}createRenderGeometry(t,e){const i=[],r=[],s=(e,s)=>{const n=_;(0,o.f)(n,e,t),i.push([n[0],n[1],n[2]]),r.push([s[0],s[1],s[2]])};for(let o=0;o<128;++o){const t=o/127,i=p,r=u;this.eval(t,i),e.worldUpAtPosition(i,r),s(i,r)}return{points:i,normals:r}}}const p=(0,r.c)(),u=(0,r.c)(),_=(0,r.c)()}}]);
//# sourceMappingURL=1453.ba760f63.chunk.js.map