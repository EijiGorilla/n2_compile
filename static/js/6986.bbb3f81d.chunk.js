"use strict";(self.webpackChunkn2_compile=self.webpackChunkn2_compile||[]).push([[6986,2463,2170],{92463:(e,t,n)=>{n.r(t),n.d(t,{hydratedAdapter:()=>l});var r=n(53866),s=n(77577),i=n(585),o=n(80885),a=n(29909);const l={convertToGEGeometry:function(e,t){if(null==t)return null;let n="cache"in t?t.cache._geVersion:void 0;return null==n&&(n=e.convertJSONToGeometry(t),"cache"in t&&(t.cache._geVersion=n)),n},exportPoint:function(e,t,n){const r=e.hasZ(t),s=e.hasM(t),o=new i.Z({x:e.getPointX(t),y:e.getPointY(t),spatialReference:n});return r&&(o.z=e.getPointZ(t)),s&&(o.m=e.getPointM(t)),o.cache._geVersion=t,o},exportPolygon:function(e,t,n){const r=new o.Z({rings:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:n});return r.cache._geVersion=t,r},exportPolyline:function(e,t,n){const r=new a.Z({paths:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:n});return r.cache._geVersion=t,r},exportMultipoint:function(e,t,n){const r=new s.Z({hasZ:e.hasZ(t),hasM:e.hasM(t),points:e.exportPoints(t),spatialReference:n});return r.cache._geVersion=t,r},exportExtent:function(e,t,n){const s=e.hasZ(t),i=e.hasM(t),o=new r.Z({xmin:e.getXMin(t),ymin:e.getYMin(t),xmax:e.getXMax(t),ymax:e.getYMax(t),spatialReference:n});if(s){const n=e.getZExtent(t);o.zmin=n.vmin,o.zmax=n.vmax}if(i){const n=e.getMExtent(t);o.mmin=n.vmin,o.mmax=n.vmax}return o.cache._geVersion=t,o}}},2170:(e,t,n)=>{n.r(t),n.d(t,{buffer:()=>R,changeDefaultSpatialReferenceTolerance:()=>U,clearDefaultSpatialReferenceTolerance:()=>j,clip:()=>a,contains:()=>c,convexHull:()=>w,crosses:()=>u,cut:()=>l,densify:()=>P,difference:()=>b,disjoint:()=>v,distance:()=>d,equals:()=>h,extendedSpatialReferenceInfo:()=>o,flipHorizontal:()=>Y,flipVertical:()=>I,generalize:()=>E,geodesicArea:()=>O,geodesicBuffer:()=>Z,geodesicDensify:()=>D,geodesicLength:()=>H,intersect:()=>G,intersectLinesToPoints:()=>L,intersects:()=>p,isSimple:()=>_,nearestCoordinate:()=>T,nearestVertex:()=>S,nearestVertices:()=>k,offset:()=>C,overlaps:()=>g,planarArea:()=>q,planarLength:()=>N,relate:()=>y,rotate:()=>V,simplify:()=>M,symmetricDifference:()=>A,touches:()=>f,union:()=>x,within:()=>m});var r=n(99058),s=n(92463);function i(e){return Array.isArray(e)?e[0].spatialReference:e&&e.spatialReference}function o(e){return r.G.extendedSpatialReferenceInfo(e)}function a(e,t){return r.G.clip(s.hydratedAdapter,i(e),e,t)}function l(e,t){return r.G.cut(s.hydratedAdapter,i(e),e,t)}function c(e,t){return r.G.contains(s.hydratedAdapter,i(e),e,t)}function u(e,t){return r.G.crosses(s.hydratedAdapter,i(e),e,t)}function d(e,t,n){return r.G.distance(s.hydratedAdapter,i(e),e,t,n)}function h(e,t){return r.G.equals(s.hydratedAdapter,i(e),e,t)}function p(e,t){return r.G.intersects(s.hydratedAdapter,i(e),e,t)}function f(e,t){return r.G.touches(s.hydratedAdapter,i(e),e,t)}function m(e,t){return r.G.within(s.hydratedAdapter,i(e),e,t)}function v(e,t){return r.G.disjoint(s.hydratedAdapter,i(e),e,t)}function g(e,t){return r.G.overlaps(s.hydratedAdapter,i(e),e,t)}function y(e,t,n){return r.G.relate(s.hydratedAdapter,i(e),e,t,n)}function _(e){return r.G.isSimple(s.hydratedAdapter,i(e),e)}function M(e){return r.G.simplify(s.hydratedAdapter,i(e),e)}function w(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r.G.convexHull(s.hydratedAdapter,i(e),e,t)}function b(e,t){return r.G.difference(s.hydratedAdapter,i(e),e,t)}function A(e,t){return r.G.symmetricDifference(s.hydratedAdapter,i(e),e,t)}function G(e,t){return r.G.intersect(s.hydratedAdapter,i(e),e,t)}function x(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return r.G.union(s.hydratedAdapter,i(e),e,t)}function C(e,t,n,o,a,l){return r.G.offset(s.hydratedAdapter,i(e),e,t,n,o,a,l)}function R(e,t,n){let o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return r.G.buffer(s.hydratedAdapter,i(e),e,t,n,o)}function Z(e,t,n,o,a,l){return r.G.geodesicBuffer(s.hydratedAdapter,i(e),e,t,n,o,a,l)}function T(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return r.G.nearestCoordinate(s.hydratedAdapter,i(e),e,t,n)}function S(e,t){return r.G.nearestVertex(s.hydratedAdapter,i(e),e,t)}function k(e,t,n,o){return r.G.nearestVertices(s.hydratedAdapter,i(e),e,t,n,o)}function z(e){var t,n;return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e&&null!==(t=null===(n=e.extent)||void 0===n?void 0:n.center)&&void 0!==t?t:null}function V(e,t,n){var s;if(null==e)throw new B;const i=e.spatialReference;if(null==(n=null!==(s=n)&&void 0!==s?s:z(e)))throw new B;const o=e.constructor.fromJSON(r.G.rotate(e,t,n));return o.spatialReference=i,o}function Y(e,t){var n;if(null==e)throw new B;const s=e.spatialReference;if(null==(t=null!==(n=t)&&void 0!==n?n:z(e)))throw new B;const i=e.constructor.fromJSON(r.G.flipHorizontal(e,t));return i.spatialReference=s,i}function I(e,t){var n;if(null==e)throw new B;const s=e.spatialReference;if(null==(t=null!==(n=t)&&void 0!==n?n:z(e)))throw new B;const i=e.constructor.fromJSON(r.G.flipVertical(e,t));return i.spatialReference=s,i}function E(e,t,n,o){return r.G.generalize(s.hydratedAdapter,i(e),e,t,n,o)}function P(e,t,n){return r.G.densify(s.hydratedAdapter,i(e),e,t,n)}function D(e,t,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return r.G.geodesicDensify(s.hydratedAdapter,i(e),e,t,n,o)}function q(e,t){return r.G.planarArea(s.hydratedAdapter,i(e),e,t)}function N(e,t){return r.G.planarLength(s.hydratedAdapter,i(e),e,t)}function O(e,t,n){return r.G.geodesicArea(s.hydratedAdapter,i(e),e,t,n)}function H(e,t,n){return r.G.geodesicLength(s.hydratedAdapter,i(e),e,t,n)}function L(e,t){return r.G.intersectLinesToPoints(s.hydratedAdapter,i(e),e,t)}function U(e,t){r.G.changeDefaultSpatialReferenceTolerance(e,t)}function j(e){r.G.clearDefaultSpatialReferenceTolerance(e)}class B extends Error{constructor(){super("Illegal Argument Exception")}}},15559:(e,t,n)=>{n.d(t,{Gb:()=>p,Jf:()=>m,_q:()=>g,cA:()=>_,j2:()=>v,p8:()=>f});n(59486);var r=n(10064),s=n(68860),i=n(38516),o=n(92975),a=n(29909),l=n(80885),c=(n(585),n(78952));function u(e){if(!e)return null;if((0,o.sT)(e)&&e.wkid){const t=i.Dg[e.wkid];if(t)return t}const t=e.wkt2||e.wkt;if(t){const e=function(e){const t=i.FQ.exec(e);if(!t||2!==t.length)return null;const n=t[1].split(",");if(!n||n.length<3)return null;const r=parseFloat(n[1]),s=parseFloat(n[2]);return isNaN(r)||isNaN(s)?null:{a:r,f:0===s?0:1/s}}(t);if(e)return e}return null}function d(e){const t=u(null!==e&&void 0!==e?e:c.Z.WGS84);if(function(e){return null!=e&&"b"in e&&"eSq"in e&&"radius"in e}(t))return t;const n=t.a*(1-t.f);return Object.assign(t,{b:n,eSq:1-(n/t.a)**2,radius:(2*t.a+n)/3,densificationRatio:1e4/((2*t.a+n)/3)})}function h(e,t,n){const{a:r,eSq:s}=d(n),o=Math.sqrt(s),a=Math.sin(t[1]*i.Yr),l=r*t[0]*i.Yr;let c;return c=s>0?r*((1-s)*(a/(1-s*(a*a))-1/(2*o)*Math.log((1-o*a)/(1+o*a))))*.5:r*a,e[0]=l,e[1]=c,e}function p(e){return null!==u(e)}function f(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"square-meters";if(e.some((e=>!p(e.spatialReference))))throw new r.Z("geodesic-areas:invalid-spatial-reference","the input geometries spatial reference is not supported");const n=[];for(let r=0;r<e.length;r++){const t=e[r],s=t.spatialReference,{radius:i,densificationRatio:o}=d(s),a=i*o;n.push(v(t,a))}const i=[],o=[0,0],a=[0,0];for(let r=0;r<n.length;r++){const{rings:e,spatialReference:l}=n[r];let c=0;for(let t=0;t<e.length;t++){const n=e[t];h(o,n[0],l),h(a,n[n.length-1],l);let r=a[0]*o[1]-o[0]*a[1];for(let e=0;e<n.length-1;e++)h(o,n[e+1],l),h(a,n[e],l),r+=a[0]*o[1]-o[0]*a[1];c+=r}c=(0,s.En)(c,"square-meters",t),i.push(c/-2)}return i}function m(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"meters";if(!e)throw new r.Z("geodesic-lengths:invalid-geometries","the input geometries type is not supported");if(e.some((e=>!p(e.spatialReference))))throw new r.Z("geodesic-lengths:invalid-spatial-reference","the input geometries spatial reference is not supported");const n=[];for(let r=0;r<e.length;r++){const i=e[r],{spatialReference:o}=i,a="polyline"===i.type?i.paths:i.rings;let l=0;for(let e=0;e<a.length;e++){const t=a[e];let n=0;for(let e=1;e<t.length;e++){const r=t[e-1][0],s=t[e][0],i=t[e-1][1],a=t[e][1];if(i!==a||r!==s){const e=new g;_(e,[r,i],[s,a],o),n+=e.distance}}l+=n}l=(0,s.En)(l,"meters",t),n.push(l)}return n}function v(e,t){if("polyline"!==e.type&&"polygon"!==e.type)throw new r.Z("geodesic-densify:invalid-geometry","the input geometry is neither polyline nor polygon");const{spatialReference:n}=e;if(!p(n))throw new r.Z("geodesic-densify:invalid-spatial-reference","the input geometry spatial reference is not supported");const s="polyline"===e.type?e.paths:e.rings,i=[],o=[0,0],c=new g;for(const r of s){const e=[];i.push(e),e.push([r[0][0],r[0][1]]);let s,a,l=r[0][0],u=r[0][1];for(let i=0;i<r.length-1;i++){if(s=r[i+1][0],a=r[i+1][1],l===s&&u===a)continue;const d=[l,u];_(c,[l,u],[s,a],n);const{azimuth:h,distance:p}=c,f=p/t;if(f>1){for(let r=1;r<=f-1;r++)y(o,d,h,r*t,n),e.push(o.slice(0));y(o,d,h,(p+Math.floor(f-1)*t)/2,n),e.push(o.slice(0))}y(o,d,h,p,n),e.push(o.slice(0)),l=o[0],u=o[1]}}return"polyline"===e.type?new a.Z({paths:i,spatialReference:n}):new l.Z({rings:i,spatialReference:n})}class g{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;this.distance=e,this.azimuth=t,this.reverseAzimuth=n}}function y(e,t,n,r,s){const o=t[0],a=t[1],l=o*i.Yr,c=a*i.Yr,u=(null!==n&&void 0!==n?n:0)*i.Yr,{a:h,b:p,f:f}=d(s),m=Math.sin(u),v=Math.cos(u),g=(1-f)*Math.tan(c),y=1/Math.sqrt(1+g*g),_=g*y,M=Math.atan2(g,v),w=y*m,b=w*w,A=1-b,G=A*(h*h-p*p)/(p*p),x=1+G/16384*(4096+G*(G*(320-175*G)-768)),C=G/1024*(256+G*(G*(74-47*G)-128));let R,Z,T,S,k=r/(p*x),z=2*Math.PI;for(;Math.abs(k-z)>1e-12;)T=Math.cos(2*M+k),R=Math.sin(k),Z=Math.cos(k),S=C*R*(T+C/4*(Z*(2*T*T-1)-C/6*T*(4*R*R-3)*(4*T*T-3))),z=k,k=r/(p*x)+S;const V=_*R-y*Z*v,Y=Math.atan2(_*Z+y*R*v,(1-f)*Math.sqrt(b+V*V)),I=Math.atan2(R*m,y*Z-_*R*v),E=f/16*A*(4+f*(4-3*A)),P=Y/i.Yr,D=(l+(I-(1-E)*f*w*(k+E*R*(T+E*Z*(2*T*T-1)))))/i.Yr;return e[0]=D,e[1]=P,e}function _(e,t,n,r){const s=t[0]*i.Yr,o=t[1]*i.Yr,a=n[0]*i.Yr,l=n[1]*i.Yr,{a:c,b:u,f:h,radius:p}=d(r),f=a-s,m=Math.atan((1-h)*Math.tan(o)),v=Math.atan((1-h)*Math.tan(l)),g=Math.sin(m),y=Math.cos(m),_=Math.sin(v),M=Math.cos(v);let w,b,A,G,x,C,R,Z,T,S,k=1e3,z=f;do{if(R=Math.sin(z),Z=Math.cos(z),A=Math.sqrt(M*R*(M*R)+(y*_-g*M*Z)*(y*_-g*M*Z)),0===A)return e.distance=0,e.azimuth=void 0,e.reverseAzimuth=void 0,e;x=g*_+y*M*Z,C=Math.atan2(A,x),T=y*M*R/A,b=1-T*T,G=x-2*g*_/b,isNaN(G)&&(G=0),S=h/16*b*(4+h*(4-3*b)),w=z,z=f+(1-S)*h*T*(C+S*A*(G+S*x*(2*G*G-1)))}while(Math.abs(z-w)>1e-12&&--k>0);if(0===k){const t=p,n=Math.acos(Math.sin(o)*Math.sin(l)+Math.cos(o)*Math.cos(l)*Math.cos(a-s))*t,r=a-s,c=Math.sin(r)*Math.cos(l),u=Math.cos(o)*Math.sin(l)-Math.sin(o)*Math.cos(l)*Math.cos(r),d=Math.atan2(c,u);return e.azimuth=d/i.Yr,e.distance=n,e.reverseAzimuth=void 0,e}const V=b*(c*c-u*u)/(u*u),Y=V/1024*(256+V*(V*(74-47*V)-128)),I=u*(1+V/16384*(4096+V*(V*(320-175*V)-768)))*(C-Y*A*(G+Y/4*(x*(2*G*G-1)-Y/6*G*(4*A*A-3)*(4*G*G-3)))),E=Math.atan2(M*Math.sin(z),y*_-g*M*Math.cos(z)),P=Math.atan2(y*Math.sin(z),y*_*Math.cos(z)-g*M);return e.azimuth=E/i.Yr,e.distance=I,e.reverseAzimuth=P/i.Yr,e}},32845:(e,t,n)=>{n.d(t,{V:()=>c});var r=n(27366),s=n(7138),i=n(32718),o=n(94172),a=n(49861),l=(n(25243),n(63780),n(93169),n(69912));let c=class extends s.Z{constructor(e){super(e),this.tool=null,this._loggedUnsupportedErrorOnce=!1,this.logger=i.Z.getLogger(this),null!=(null===e||void 0===e?void 0:e.visible)&&(this.visible=e.visible)}initialize(){this.addHandles((0,o.YP)((()=>({ready:null!=this.view&&this.view.ready,supported:this.supported})),(e=>{let{ready:t,supported:n}=e;!t||n||this._loggedUnsupportedErrorOnce||(this.logError(this.unsupportedErrorMessage),this._loggedUnsupportedErrorOnce=!0)}),o.tX))}destroy(){this.removeTool(),this.view=null}get active(){return null!=this.tool&&this.tool.active}get disabled(){return null==this.view||!this.view.ready||!this.supported}get supported(){return null==this.view||this.view.type===this.supportedViewType}get view(){return this._get("view")}set view(e){if(e===this.view)return;this.removeTool(),this._set("view",e);const t="tools";this.removeHandles(t),null!=e&&this.addHandles(e.tools.on("after-remove",(e=>{e.item===this.tool&&this._set("tool",null)})),t)}set visible(e){this._set("visible",e),null!=this.tool&&(this.tool.visible=e)}createTool(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{interactive:!1};if(this.removeTool(),null==this.view||!this.view.ready||!this.supported)return;const t=this.constructTool();t.created?(this._set("tool",t),this.view.tools.add(t)):e.interactive?(this._set("tool",t),this.view.addAndActivateTool(t),(0,o.gx)((()=>t.created),(()=>{t.active&&null!=this.view&&(this.view.activeTool=null)}),{initial:!0,once:!0})):t.destroy()}removeTool(){var e;const t=this.tool;if(null==t)return;const n=null===(e=this.view)||void 0===e?void 0:e.tools;null!=n?n.remove(t):t.destroy(),this._set("tool",null)}logError(){this.logger.error(...arguments)}};(0,r._)([(0,a.Cb)({constructOnly:!0})],c.prototype,"tool",void 0),(0,r._)([(0,a.Cb)()],c.prototype,"active",null),(0,r._)([(0,a.Cb)()],c.prototype,"disabled",null),(0,r._)([(0,a.Cb)()],c.prototype,"supported",null),(0,r._)([(0,a.Cb)({value:null})],c.prototype,"view",null),(0,r._)([(0,a.Cb)({type:Boolean,value:!0})],c.prototype,"visible",null),c=(0,r._)([(0,l.j)("esri.widgets.support.InteractiveToolViewModel")],c)},82052:(e,t,n)=>{n.d(t,{s:()=>v});var r=n(27366),s=n(49861),i=(n(25243),n(63780),n(93169),n(69912)),o=n(33565),a=n(8905),l=n(68860),c=(n(80975),n(80532)),u=n(67005);const d="esri-unit-select",h={base:d,label:"".concat(d,"__label"),select:"".concat(d,"__select")};let p=class extends o.Z{constructor(e,t){super(e,t),this._onSelectChange=e=>{this.onChange(e.target.value)}}loadDependencies(){return(0,a.h)({label:()=>n.e(5474).then(n.bind(n,85474)),option:()=>n.e(9790).then(n.bind(n,19790)),select:()=>n.e(6369).then(n.bind(n,26369))})}render(){const{messages:e,options:t,selectLabel:n,value:r,_onSelectChange:s}=this;return(0,u.u)("div",{class:h.base,key:"units"},(0,u.u)("calcite-label",{class:h.label},n,(0,u.u)("calcite-select",{class:h.select,label:n,onCalciteSelectChange:s},t.map((t=>{var n;return(0,u.u)("calcite-option",{key:t,selected:t===r,value:t},(0,l.ZO)(t)?e.systems[t]:null===(n=e.units[t])||void 0===n?void 0:n.pluralCapitalized)})))))}};(0,r._)([(0,s.Cb)()],p.prototype,"options",void 0),(0,r._)([(0,s.Cb)()],p.prototype,"onChange",void 0),(0,r._)([(0,s.Cb)()],p.prototype,"selectLabel",void 0),(0,r._)([(0,s.Cb)()],p.prototype,"value",void 0),(0,r._)([(0,s.Cb)(),(0,c.H)("esri/core/t9n/Units")],p.prototype,"messages",void 0),p=(0,r._)([(0,i.j)("esri.widgets.support.UnitSelect")],p);const f="esri-measurement-widget-content",m={base:f,actions:"".concat(f,"__actions"),error:"".concat(f,"__error"),hint:"".concat(f,"__hint"),hintText:"".concat(f,"__hint-text"),panelError:"".concat(f,"__panel--error"),settings:"".concat(f,"__settings"),measurement:"".concat(f,"__measurement"),measurementItem:"".concat(f,"__measurement-item"),measurementItemDisabled:"".concat(f,"__measurement-item--disabled"),measurementItemTitle:"".concat(f,"__measurement-item__title"),measurementItemValue:"".concat(f,"__measurement-item__value")};let v=class extends o.Z{constructor(e,t){super(e,t)}loadDependencies(){return(0,a.h)({button:()=>Promise.all([n.e(4105),n.e(2275)]).then(n.bind(n,32275))})}render(){return(0,u.u)("div",{class:m.base},this._renderContent())}_renderContent(){const{supported:e,active:t,state:n}=this;switch(n){case"disabled":case"ready":return e?t?this._renderHint():this._renderActions():this._renderUnsupportedMessage();case"measuring":case"measured":return[this._renderSettings(),this._renderMeasurement(),this._renderActions()]}}_renderUnsupportedMessage(){return(0,u.u)("section",{class:m.error,key:"unsupported"},(0,u.u)("p",null,this.messages.unsupported))}_renderHint(){const{messages:e}=this;return(0,u.u)("section",{class:m.hint,key:"hint"},(0,u.u)("p",{class:m.hintText},e.hint))}_renderSettings(){return(0,u.u)("div",{class:m.settings,key:"settings"},(0,u.u)(p,{options:this.unitOptions,selectLabel:this.messages.unit,value:this.unit,onChange:this.onUnitChange}))}_renderMeasurement(){return(0,u.u)("section",{class:m.measurement,key:"measurement"},this.measurementItems.map((e=>this._renderMeasurementItem(e))))}_renderMeasurementItem(e){let{key:t,title:n,value:r}=e;return(0,u.u)("div",{class:this.classes(m.measurementItem,null==r&&m.measurementItemDisabled),key:t},(0,u.u)("span",{class:m.measurementItemTitle},n),(0,u.u)("span",{"aria-live":"polite",class:m.measurementItemValue},null!==r&&void 0!==r?r:this.messages.notApplicable))}_renderActions(){const{messages:e}=this;return(0,u.u)("div",{class:m.actions},(0,u.u)("calcite-button",{class:this.newMeasurementButtonClass,disabled:"disabled"===this.state,onclick:this.onNewMeasurementClick},e.newMeasurement))}};(0,r._)([(0,s.Cb)()],v.prototype,"active",void 0),(0,r._)([(0,s.Cb)()],v.prototype,"measurementItems",void 0),(0,r._)([(0,s.Cb)()],v.prototype,"messages",void 0),(0,r._)([(0,s.Cb)()],v.prototype,"newMeasurementButtonClass",void 0),(0,r._)([(0,s.Cb)()],v.prototype,"onNewMeasurementClick",void 0),(0,r._)([(0,s.Cb)()],v.prototype,"onUnitChange",void 0),(0,r._)([(0,s.Cb)()],v.prototype,"state",void 0),(0,r._)([(0,s.Cb)()],v.prototype,"supported",void 0),(0,r._)([(0,s.Cb)()],v.prototype,"unit",void 0),(0,r._)([(0,s.Cb)()],v.prototype,"unitOptions",void 0),v=(0,r._)([(0,i.j)("esri.widgets.support.MeasurementWidgetContent")],v)}}]);
//# sourceMappingURL=6986.bbb3f81d.chunk.js.map