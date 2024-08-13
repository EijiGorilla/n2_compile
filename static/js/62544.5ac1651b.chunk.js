"use strict";(self.webpackChunkn2_compile=self.webpackChunkn2_compile||[]).push([[62544],{36231:(e,t,n)=>{n.d(t,{q:()=>a});var i,o,s,r=n(84397),l={exports:{}};i=l,o=function(){function e(n,i,o,s,r){for(;s>o;){if(s-o>600){var l=s-o+1,a=i-o+1,h=Math.log(l),c=.5*Math.exp(2*h/3),u=.5*Math.sqrt(h*c*(l-c)/l)*(a-l/2<0?-1:1);e(n,i,Math.max(o,Math.floor(i-a*c/l+u)),Math.min(s,Math.floor(i+(l-a)*c/l+u)),r)}var d=n[i],p=o,m=s;for(t(n,o,i),r(n[s],d)>0&&t(n,o,s);p<m;){for(t(n,p,m),p++,m--;r(n[p],d)<0;)p++;for(;r(n[m],d)>0;)m--}0===r(n[o],d)?t(n,o,m):t(n,++m,s),m<=i&&(o=m+1),i<=m&&(s=m-1)}}function t(e,t,n){var i=e[t];e[t]=e[n],e[n]=i}function n(e,t){return e<t?-1:e>t?1:0}return function(t,i,o,s,r){e(t,i,o||0,s||t.length-1,r||n)}},void 0!==(s=o())&&(i.exports=s);const a=(0,r.g)(l.exports)},13491:(e,t,n)=>{n.d(t,{Q:()=>r});var i=n(63780),o=n(27546),s=n(36231);class r{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,t=arguments.length>1?arguments[1]:void 0;this._compareMinX=c,this._compareMinY=u,this._toBBox=e=>e,this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),t&&("function"==typeof t?this._toBBox=t:this._initFormat(t)),this.clear()}destroy(){this.clear(),g.prune(),v.prune(),P.prune(),w.prune()}all(e){this._all(this._data,e)}search(e,t){let n=this._data;const i=this._toBBox;if(x(e,n))for(g.clear();n;){for(let o=0,s=n.children.length;o<s;o++){const s=n.children[o],r=n.leaf?i(s):s;x(e,r)&&(n.leaf?t(s):_(e,r)?this._all(s,t):g.push(s))}n=g.pop()}}collides(e){let t=this._data;const n=this._toBBox;if(!x(e,t))return!1;for(g.clear();t;){for(let i=0,o=t.children.length;i<o;i++){const o=t.children[i],s=t.leaf?n(o):o;if(x(e,s)){if(t.leaf||_(e,s))return!0;g.push(o)}}t=g.pop()}return!1}load(e){if(!e.length)return this;if(e.length<this._minEntries){for(let t=0,n=e.length;t<n;t++)this.insert(e[t]);return this}let t=this._build(e.slice(0,e.length),0,e.length-1,0);if(this._data.children.length)if(this._data.height===t.height)this._splitRoot(this._data,t);else{if(this._data.height<t.height){const e=this._data;this._data=t,t=e}this._insert(t,this._data.height-t.height-1,!0)}else this._data=t;return this}insert(e){return e&&this._insert(e,this._data.height-1),this}clear(){return this._data=new I([]),this}remove(e){if(!e)return this;let t,n=this._data,o=null,s=0,r=!1;const l=this._toBBox(e);for(P.clear(),w.clear();n||P.length>0;){if(n||(n=P.pop(),o=P.data[P.length-1],s=w.pop()??0,r=!0),n.leaf&&(t=(0,i.cq)(n.children,e,n.children.length,n.indexHint),-1!==t))return n.children.splice(t,1),P.push(n),this._condense(P),this;r||n.leaf||!_(n,l)?o?(s++,n=o.children[s],r=!1):n=null:(P.push(n),w.push(s),s=0,o=n,n=n.children[0])}return this}toJSON(){return this._data}fromJSON(e){return this._data=e,this}_all(e,t){let n=e;for(v.clear();n;){if(!0===n.leaf)for(const e of n.children)t(e);else v.pushArray(n.children);n=v.pop()??null}}_build(e,t,n,i){const o=n-t+1;let s=this._maxEntries;if(o<=s){const i=new I(e.slice(t,n+1));return l(i,this._toBBox),i}i||(i=Math.ceil(Math.log(o)/Math.log(s)),s=Math.ceil(o/s**(i-1)));const r=new R([]);r.height=i;const a=Math.ceil(o/s),h=a*Math.ceil(Math.sqrt(s));y(e,t,n,h,this._compareMinX);for(let l=t;l<=n;l+=h){const t=Math.min(l+h-1,n);y(e,l,t,a,this._compareMinY);for(let n=l;n<=t;n+=a){const o=Math.min(n+a-1,t);r.children.push(this._build(e,n,o,i-1))}}return l(r,this._toBBox),r}_chooseSubtree(e,t,n,i){for(;i.push(t),!0!==t.leaf&&i.length-1!==n;){let n,i=1/0,o=1/0;for(let s=0,r=t.children.length;s<r;s++){const r=t.children[s],l=d(r),a=m(e,r)-l;a<o?(o=a,i=l<i?l:i,n=r):a===o&&l<i&&(i=l,n=r)}t=n||t.children[0]}return t}_insert(e,t,n){const i=this._toBBox,o=n?e:i(e);P.clear();const s=this._chooseSubtree(o,this._data,t,P);for(s.children.push(e),h(s,o);t>=0&&P.data[t].children.length>this._maxEntries;)this._split(P,t),t--;this._adjustParentBBoxes(o,P,t)}_split(e,t){const n=e.data[t],i=n.children.length,o=this._minEntries;this._chooseSplitAxis(n,o,i);const s=this._chooseSplitIndex(n,o,i);if(!s)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const r=n.children.splice(s,n.children.length-s),a=n.leaf?new I(r):new R(r);a.height=n.height,l(n,this._toBBox),l(a,this._toBBox),t?e.data[t-1].children.push(a):this._splitRoot(n,a)}_splitRoot(e,t){this._data=new R([e,t]),this._data.height=e.height+1,l(this._data,this._toBBox)}_chooseSplitIndex(e,t,n){let i,o,s;i=o=1/0;for(let r=t;r<=n-t;r++){const t=a(e,0,r,this._toBBox),l=a(e,r,n,this._toBBox),h=f(t,l),c=d(t)+d(l);h<i?(i=h,s=r,o=c<o?c:o):h===i&&c<o&&(o=c,s=r)}return s}_chooseSplitAxis(e,t,n){const i=e.leaf?this._compareMinX:c,o=e.leaf?this._compareMinY:u;this._allDistMargin(e,t,n,i)<this._allDistMargin(e,t,n,o)&&e.children.sort(i)}_allDistMargin(e,t,n,i){e.children.sort(i);const o=this._toBBox,s=a(e,0,t,o),r=a(e,n-t,n,o);let l=p(s)+p(r);for(let a=t;a<n-t;a++){const t=e.children[a];h(s,e.leaf?o(t):t),l+=p(s)}for(let a=n-t-1;a>=t;a--){const t=e.children[a];h(r,e.leaf?o(t):t),l+=p(r)}return l}_adjustParentBBoxes(e,t,n){for(let i=n;i>=0;i--)h(t.data[i],e)}_condense(e){for(let t=e.length-1;t>=0;t--){const n=e.data[t];if(0===n.children.length)if(t>0){const o=e.data[t-1],s=o.children;s.splice((0,i.cq)(s,n,s.length,o.indexHint),1)}else this.clear();else l(n,this._toBBox)}}_initFormat(e){const t=["return a"," - b",";"];this._compareMinX=new Function("a","b",t.join(e[0])),this._compareMinY=new Function("a","b",t.join(e[1])),this._toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}function l(e,t){a(e,0,e.children.length,t,e)}function a(e,t,n,i,o){o||(o=new I([])),o.minX=1/0,o.minY=1/0,o.maxX=-1/0,o.maxY=-1/0;for(let s,r=t;r<n;r++)s=e.children[r],h(o,e.leaf?i(s):s);return o}function h(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function c(e,t){return e.minX-t.minX}function u(e,t){return e.minY-t.minY}function d(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function p(e){return e.maxX-e.minX+(e.maxY-e.minY)}function m(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function f(e,t){const n=Math.max(e.minX,t.minX),i=Math.max(e.minY,t.minY),o=Math.min(e.maxX,t.maxX),s=Math.min(e.maxY,t.maxY);return Math.max(0,o-n)*Math.max(0,s-i)}function _(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function x(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function y(e,t,n,i,o){const r=[t,n];for(;r.length;){const t=r.pop(),n=r.pop();if(t-n<=i)continue;const l=n+Math.ceil((t-n)/i/2)*i;(0,s.q)(e,l,n,t,o),r.push(n,l,l,t)}}const g=new o.Z,v=new o.Z,P=new o.Z,w=new o.Z({deallocator:void 0});class b{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class M extends b{constructor(){super(...arguments),this.height=1,this.indexHint=new i.SO}}class I extends M{constructor(e){super(),this.children=e,this.leaf=!0}}class R extends M{constructor(e){super(),this.children=e,this.leaf=!1}}},67593:(e,t,n)=>{n.d(t,{E:()=>d,H:()=>u});var i=n(29303),o=n(21389),s=n(13611),r=n(32035);const l=(0,n(12400).Ue)(),a=(0,o.Ue)(),h=(0,o.Ue)(),c=(0,o.Ue)();function u(e,t,n){return(0,r.s)(l,t[0],t[1],1),(0,r.t)(l,l,(0,i.p4)(a,n)),0===l[2]?(0,s.t8)(e,l[0],l[1]):(0,s.t8)(e,l[0]/l[2],l[1]/l[2])}function d(e,t,n){return p(h,t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]),p(c,n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7]),(0,i.Jp)(e,(0,i.uj)(h,h),c),0!==e[8]&&(e[0]/=e[8],e[1]/=e[8],e[2]/=e[8],e[3]/=e[8],e[4]/=e[8],e[5]/=e[8],e[6]/=e[8],e[7]/=e[8],e[8]/=e[8]),e}function p(e,t,n,o,s,h,c,u,d){(0,i.t8)(e,t,o,h,n,s,c,1,1,1),(0,r.s)(l,u,d,1),(0,i.uj)(a,e);const[p,m,f]=(0,r.t)(l,l,(0,i.p4)(a,a));return(0,i.t8)(a,p,0,0,0,m,0,0,0,f),(0,i.Jp)(e,a,e)}},47991:(e,t,n)=>{n.d(t,{SR:()=>u,Ui:()=>c});var i=n(46784),o=n(65156),s=n(376),r=n(69662),l=n(77981),a=n(76335),h=n(92975);function c(e){return d(e,!0)}function u(e){return d(e,!1)}function d(e,t){if(null==e)return null;const n=e.spatialReference,o=(0,h.C5)(n),r=(0,i.AK)(e)?e.toJSON():e;if(!o)return r;const c=(0,h.sS)(n)?102100:4326,u=a.UZ[c].maxX,d=a.UZ[c].minX;if((0,l.wp)(r))return m(r,u,d);if((0,l.aW)(r))return r.points=r.points.map((e=>m(e,u,d))),r;if((0,l.YX)(r))return p(r,o);if((0,l.oU)(r)||(0,l.l9)(r)){const e=(0,s.$P)(v,r),n={xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3]},i=(0,a.XZ)(n.xmin,d)*(2*u),o=0===i?r:(0,a.Sy)(r,i);return n.xmin+=i,n.xmax+=i,n.xmax>u?y(o,u,t):n.xmin<d?y(o,d,t):o}return r}function p(e,t){if(!t)return e;const n=function(e,t){const n=[],{ymin:i,ymax:o,xmin:s,xmax:r}=e,l=e.xmax-e.xmin,[a,h]=t.valid,{x:c,frameId:u}=f(e.xmin,t),{x:d,frameId:p}=f(e.xmax,t),m=c===d&&l>0;if(l>2*h){const e={xmin:s<r?c:d,ymin:i,xmax:h,ymax:o},t={xmin:a,ymin:i,xmax:s<r?d:c,ymax:o},l={xmin:0,ymin:i,xmax:h,ymax:o},m={xmin:a,ymin:i,xmax:0,ymax:o},f=[],x=[];_(e,l)&&f.push(u),_(e,m)&&x.push(u),_(t,l)&&f.push(p),_(t,m)&&x.push(p);for(let n=u+1;n<p;n++)f.push(n),x.push(n);n.push(new g(e,[u]),new g(t,[p]),new g(l,f),new g(m,x))}else c>d||m?n.push(new g({xmin:c,ymin:i,xmax:h,ymax:o},[u]),new g({xmin:a,ymin:i,xmax:d,ymax:o},[p])):n.push(new g({xmin:c,ymin:i,xmax:d,ymax:o},[u]));return n}(e,t).map((e=>e.extent));return n.length<2?n[0]||e:n.length>2?(e.xmin=t.valid[0],e.xmax=t.valid[1],e):{rings:n.map((e=>[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]))}}function m(e,t,n){if(Array.isArray(e)){const i=e[0];if(i>t){const n=(0,a.XZ)(i,t);e[0]=i+n*(-2*t)}else if(i<n){const t=(0,a.XZ)(i,n);e[0]=i+t*(-2*n)}}else{const i=e.x;if(i>t){const n=(0,a.XZ)(i,t);e.x+=n*(-2*t)}else if(i<n){const t=(0,a.XZ)(i,n);e.x+=t*(-2*n)}}return e}function f(e,t){const[n,i]=t.valid,o=2*i;let s,r=0;return e>i?(s=Math.ceil(Math.abs(e-i)/o),e-=s*o,r=s):e<n&&(s=Math.ceil(Math.abs(e-n)/o),e+=s*o,r=-s),{x:e,frameId:r}}function _(e,t){const{xmin:n,ymin:i,xmax:o,ymax:s}=t;return x(e,n,i)&&x(e,n,s)&&x(e,o,s)&&x(e,o,i)}function x(e,t,n){return t>=e.xmin&&t<=e.xmax&&n>=e.ymin&&n<=e.ymax}function y(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const i=!(0,l.l9)(e);if(i&&(0,r.Zy)(e),n)return(new P).cut(e,t);const o=i?e.rings:e.paths,s=i?4:2,a=o.length,h=-2*t;for(let r=0;r<a;r++){const e=o[r];if(e&&e.length>=s){const t=[];for(const n of e)t.push([n[0]+h,n[1]]);o.push(t)}}return i?e.rings=o:e.paths=o,e}class g{constructor(e,t){this.extent=e,this.frameIds=t}}const v=(0,o.Ue)();class P{constructor(){this._linesIn=[],this._linesOut=[]}cut(e,t){let n;if(this._xCut=t,e.rings)this._closed=!0,n=e.rings,this._minPts=4;else{if(!e.paths)return null;this._closed=!1,n=e.paths,this._minPts=2}for(const o of n){if(!o||o.length<this._minPts)continue;let e=!0;for(const t of o)e?(this.moveTo(t),e=!1):this.lineTo(t);this._closed&&this.close()}this._pushLineIn(),this._pushLineOut(),n=[];for(const o of this._linesIn)o&&o.length>=this._minPts&&n.push(o);const i=-2*this._xCut;for(const o of this._linesOut)if(o&&o.length>=this._minPts){for(const e of o)e[0]+=i;n.push(o)}return this._closed?e.rings=n:e.paths=n,e}moveTo(e){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(e[0]),this._moveTo(e[0],e[1],this._prevSide),this._prevPt=e,this._firstPt=e}lineTo(e){const t=this._side(e[0]);if(t*this._prevSide==-1){const n=this._intersect(this._prevPt,e);this._lineTo(this._xCut,n,0),this._prevSide=0,this._lineTo(e[0],e[1],t)}else this._lineTo(e[0],e[1],t);this._prevSide=t,this._prevPt=e}close(){const e=this._firstPt,t=this._prevPt;e[0]===t[0]&&e[1]===t[1]||this.lineTo(e),this._checkClosingPt(this._lineIn),this._checkClosingPt(this._lineOut)}_moveTo(e,t,n){this._closed?(this._lineIn.push([n<=0?e:this._xCut,t]),this._lineOut.push([n>=0?e:this._xCut,t])):(n<=0&&this._lineIn.push([e,t]),n>=0&&this._lineOut.push([e,t]))}_lineTo(e,t,n){this._closed?(this._addPolyVertex(this._lineIn,n<=0?e:this._xCut,t),this._addPolyVertex(this._lineOut,n>=0?e:this._xCut,t)):n<0?(0===this._prevSide&&this._pushLineOut(),this._lineIn.push([e,t])):n>0?(0===this._prevSide&&this._pushLineIn(),this._lineOut.push([e,t])):this._prevSide<0?(this._lineIn.push([e,t]),this._lineOut.push([e,t])):this._prevSide>0&&(this._lineOut.push([e,t]),this._lineIn.push([e,t]))}_addPolyVertex(e,t,n){const i=e.length;i>1&&e[i-1][0]===t&&e[i-2][0]===t?e[i-1][1]=n:e.push([t,n])}_checkClosingPt(e){const t=e.length;t>3&&e[0][0]===this._xCut&&e[t-2][0]===this._xCut&&e[1][0]===this._xCut&&(e[0][1]=e[t-2][1],e.pop())}_side(e){return e<this._xCut?-1:e>this._xCut?1:0}_intersect(e,t){const n=(this._xCut-e[0])/(t[0]-e[0]);return e[1]+n*(t[1]-e[1])}_pushLineIn(){this._lineIn&&this._lineIn.length>=this._minPts&&this._linesIn.push(this._lineIn),this._lineIn=[]}_pushLineOut(){this._lineOut&&this._lineOut.length>=this._minPts&&this._linesOut.push(this._lineOut),this._lineOut=[]}}},62544:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Je});var i=n(27366),o=n(80987),s=n(10064),r=n(32718),l=n(97642),a=n(66978),h=n(49861),c=n(89125),u=(n(84936),n(93169),n(38511)),d=n(69912),p=n(31201),m=n(25265),f=n(30651),_=n(6693),x=n(6061),y=n(29598),g=n(56811),v=n(76200),P=n(51e3),w=n(35995),b=n(71907),M=n(79056),I=n(54472),R=n(7138),C=n(46784),B=n(67593),O=n(17842),S=n(29303),L=n(21389),Z=n(13611),j=n(6644),E=n(585),X=n(80885),T=n(79803),Y=n(78952),H=n(11582);let U=class extends H.j{projectOrWarn(e,t){if(null==e)return e;const{geometry:n,pending:i}=(0,T.projectOrLoad)(e,t);return i?null:i||n?n:(r.Z.getLogger(this).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:e,sourceSpatialReference:e.spatialReference,targetSpatialReference:t}),null)}};U=(0,i._)([(0,d.j)("esri.layers.support.GeoreferenceBase")],U);const A=U,W=(0,L.Ue)(),V=(0,j.Ue)();let z=class extends R.Z{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null}};(0,i._)([(0,h.Cb)()],z.prototype,"sourcePoint",void 0),(0,i._)([(0,h.Cb)({type:E.Z})],z.prototype,"mapPoint",void 0),z=(0,i._)([(0,d.j)("esri.layers.support.ControlPoint")],z);let N=class extends((0,C.eC)(A)){constructor(e){super(e),this.controlPoints=null,this.height=0,this.type="control-points",this.width=0}readControlPoints(e,t){const n=Y.Z.fromJSON(t.spatialReference),i=(0,L.al)(...t.coefficients,1);return e.map((e=>((0,Z.t8)(V,e.x,e.y),(0,B.H)(V,V,i),{sourcePoint:e,mapPoint:new E.Z({x:V[0],y:V[1],spatialReference:n})})))}writeControlPoints(e,t,n,i){if(null!=this.transform)null!=e&&J(e[0])&&(t.controlPoints=e.map((e=>{const t=e.sourcePoint;return{x:t.x,y:t.y}})),t.spatialReference=e[0].mapPoint.spatialReference.toJSON(),t.coefficients=this.transform.slice(0,8));else{const e=new s.Z("web-document-write:invalid-georeference","Invalid 'controlPoints', 'width', 'height' configuration.",{layer:i?.layer,georeference:this});i?.messages?i.messages.push(e):r.Z.getLogger(this).error(e.name,e.message)}}get coords(){if(null==this.controlPoints)return null;const e=this._updateTransform(W);if(null==e||!J(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return function(e,t,n,i){const o=(0,j.al)(0,n),s=(0,j.al)(0,0),r=(0,j.al)(t,0),l=(0,j.al)(t,n);return(0,B.H)(o,o,e),(0,B.H)(s,s,e),(0,B.H)(r,r,e),(0,B.H)(l,l,e),new X.Z({rings:[[o,s,r,l,o]],spatialReference:i})}(e,this.width,this.height,t)}set coords(e){if(null==this.controlPoints||!J(this.controlPoints[0]))return;const t=this.controlPoints[0].mapPoint.spatialReference;if(null==(e=this.projectOrWarn(e,t)))return;const{width:n,height:i}=this,{rings:[[o,s,r,l]]}=e,a={sourcePoint:(0,O.vW)(0,i),mapPoint:new E.Z({x:o[0],y:o[1],spatialReference:t})},h={sourcePoint:(0,O.vW)(0,0),mapPoint:new E.Z({x:s[0],y:s[1],spatialReference:t})},c={sourcePoint:(0,O.vW)(n,0),mapPoint:new E.Z({x:r[0],y:r[1],spatialReference:t})},u={sourcePoint:(0,O.vW)(n,i),mapPoint:new E.Z({x:l[0],y:l[1],spatialReference:t})};J(a)&&J(h)&&J(c)&&J(u)&&(ne(W,a,h,c,u),this.controlPoints=this.controlPoints.map((e=>{let{sourcePoint:n}=e;return(0,Z.t8)(V,n.x,n.y),(0,B.H)(V,V,W),{sourcePoint:n,mapPoint:new E.Z({x:V[0],y:V[1],spatialReference:t})}})))}get inverseTransform(){return null==this.transform?null:(0,S.U_)((0,L.Ue)(),this.transform)}get transform(){return this._updateTransform()}toMap(e){if(null==e||null==this.transform||null==this.controlPoints||!J(this.controlPoints[0]))return null;(0,Z.t8)(V,e.x,e.y);const t=this.controlPoints[0].mapPoint.spatialReference;return(0,B.H)(V,V,this.transform),new E.Z({x:V[0],y:V[1],spatialReference:t})}toSource(e){if(null==e||null==this.inverseTransform||null==this.controlPoints||!J(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return e=e.normalize(),null==(e=(0,T.projectOrLoad)(e,t).geometry)?null:((0,Z.t8)(V,e.x,e.y),(0,B.H)(V,V,this.inverseTransform),(0,O.vW)(V[0],V[1]))}toSourceNormalized(e){const t=this.toSource(e);return null!=t&&(t.x/=this.width,t.y/=this.height),t}_updateTransform(e){const{controlPoints:t,width:n,height:i}=this;if(!(null!=t&&n>0&&i>0))return null;const[o,s,r,l]=t;if(!J(o))return null;const a=o.mapPoint.spatialReference,h=this._projectControlPoint(s,a),c=this._projectControlPoint(r,a),u=this._projectControlPoint(l,a);if(!h.valid||!c.valid||!u.valid)return null;if(!J(h.controlPoint))return null;null==e&&(e=(0,L.Ue)());let d=null;return d=J(c.controlPoint)&&J(u.controlPoint)?ne(e,o,h.controlPoint,c.controlPoint,u.controlPoint):J(c.controlPoint)?function(e,t,n,i){return te(k,D,t),te(F,K,n),te(q,$,i),(0,Z.t7)(G,k,F,.5),(0,Z.U1)(G,q,G,Math.PI),(0,Z.t7)(Q,D,K,.5),(0,Z.U1)(Q,$,Q,Math.PI),re(e,k,F,q,G,D,K,$,Q)}(e,o,h.controlPoint,c.controlPoint):function(e,t,n){return te(k,D,t),te(F,K,n),(0,Z.U1)(q,F,k,ee),(0,Z.U1)(G,k,F,ee),(0,Z.U1)($,K,D,-ee),(0,Z.U1)(Q,D,K,-ee),re(e,k,F,q,G,D,K,$,Q)}(e,o,h.controlPoint),d.every((e=>0===e))?null:d}_projectControlPoint(e,t){if(!J(e))return{valid:!0,controlPoint:e};const{sourcePoint:n,mapPoint:i}=e,{geometry:o,pending:s}=(0,T.projectOrLoad)(i,t);return s?{valid:!1,controlPoint:null}:s||o?{valid:!0,controlPoint:{sourcePoint:n,mapPoint:o}}:(r.Z.getLogger(this).warn("map point could not be projected to the spatial reference",{georeference:this,controlPoint:e,sourceSpatialReference:i.spatialReference,targetSpatialReference:t}),{valid:!1,controlPoint:null})}};function J(e){return null!=e?.sourcePoint&&null!=e.mapPoint}(0,i._)([(0,h.Cb)({type:[z],json:{write:{allowNull:!1,isRequired:!0}}})],N.prototype,"controlPoints",void 0),(0,i._)([(0,u.r)("controlPoints")],N.prototype,"readControlPoints",null),(0,i._)([(0,p.c)("controlPoints")],N.prototype,"writeControlPoints",null),(0,i._)([(0,h.Cb)()],N.prototype,"coords",null),(0,i._)([(0,h.Cb)({json:{write:!0}})],N.prototype,"height",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],N.prototype,"inverseTransform",null),(0,i._)([(0,h.Cb)({readOnly:!0})],N.prototype,"transform",null),(0,i._)([(0,h.Cb)({json:{write:!0}})],N.prototype,"width",void 0),N=(0,i._)([(0,d.j)("esri.layers.support.ControlPointsGeoreference")],N);const k=(0,j.Ue)(),F=(0,j.Ue)(),q=(0,j.Ue)(),G=(0,j.Ue)(),D=(0,j.Ue)(),K=(0,j.Ue)(),$=(0,j.Ue)(),Q=(0,j.Ue)(),ee=Math.PI/2;function te(e,t,n){(0,Z.t8)(e,n.sourcePoint.x,n.sourcePoint.y),(0,Z.t8)(t,n.mapPoint.x,n.mapPoint.y)}function ne(e,t,n,i,o){return te(k,D,t),te(F,K,n),te(q,$,i),te(G,Q,o),re(e,k,F,q,G,D,K,$,Q)}const ie=new Array(8).fill(0),oe=new Array(8).fill(0);function se(e,t,n,i,o){return e[0]=t[0],e[1]=t[1],e[2]=n[0],e[3]=n[1],e[4]=i[0],e[5]=i[1],e[6]=o[0],e[7]=o[1],e}function re(e,t,n,i,o,s,r,l,a){return(0,B.E)(e,se(ie,t,n,i,o),se(oe,s,r,l,a))}const le=N,ae=(0,j.Ue)();let he=class extends A{constructor(e){super(e),this.bottomLeft=null,this.bottomRight=null,this.topLeft=null,this.topRight=null,this.type="corners"}get coords(){let{topLeft:e,topRight:t,bottomLeft:n,bottomRight:i}=this;if(null==e||null==t||null==n||null==i)return null;const o=e.spatialReference;return t=this.projectOrWarn(t,o),n=this.projectOrWarn(n,o),i=this.projectOrWarn(i,o),null==t||null==n||null==i?null:new X.Z({rings:[[[n.x,n.y],[e.x,e.y],[t.x,t.y],[i.x,i.y],[n.x,n.y]]],spatialReference:o})}set coords(e){const{topLeft:t}=this;if(null==t)return;const n=t.spatialReference;if(null==(e=this.projectOrWarn(e,n)))return;const{rings:[[i,o,s,r]]}=e;this.bottomLeft=new E.Z({x:i[0],y:i[1],spatialReference:n}),this.topLeft=new E.Z({x:o[0],y:o[1],spatialReference:n}),this.topRight=new E.Z({x:s[0],y:s[1],spatialReference:n}),this.bottomRight=new E.Z({x:r[0],y:r[1],spatialReference:n})}toSourceNormalized(e){const{topLeft:t,topRight:n,bottomRight:i,bottomLeft:o}=this;if(null==e||null==t||null==n||null==i||null==o)return null;const s=t.spatialReference;e=e.normalize();const r=(0,T.projectOrLoad)(e,s).geometry;if(null==r)return null;(0,Z.t8)(ae,r.x,r.y);const l=(0,B.E)((0,L.Ue)(),[t.x,t.y,o.x,o.y,n.x,n.y,i.x,i.y],[0,0,0,1,1,0,1,1]);return(0,B.H)(ae,ae,l),(0,O.vW)(ae[0],ae[1])}};(0,i._)([(0,h.Cb)()],he.prototype,"coords",null),(0,i._)([(0,h.Cb)({type:E.Z})],he.prototype,"bottomLeft",void 0),(0,i._)([(0,h.Cb)({type:E.Z})],he.prototype,"bottomRight",void 0),(0,i._)([(0,h.Cb)({type:E.Z})],he.prototype,"topLeft",void 0),(0,i._)([(0,h.Cb)({type:E.Z})],he.prototype,"topRight",void 0),he=(0,i._)([(0,d.j)("esri.layers.support.CornersGeoreference")],he);const ce=he;var ue=n(16889),de=n(24204),pe=n(53866);let me=class extends A{constructor(e){super(e),this.extent=null,this.rotation=0,this.type="extent-and-rotation"}get coords(){if(null==this.extent)return null;const{xmin:e,ymin:t,xmax:n,ymax:i,spatialReference:o}=this.extent;let s;if(this.rotation){const{x:o,y:r}=this.extent.center,l=fe(o,r,this.rotation);s=[l(e,t),l(e,i),l(n,i),l(n,t)],s.push(s[0])}else s=[[e,t],[e,i],[n,i],[n,t],[e,t]];return new X.Z({rings:[s],spatialReference:o})}set coords(e){if(null==e||null==this.extent)return;const t=this.extent.spatialReference;if(e=this.projectOrWarn(e,t),null==e?.extent)return;const{rings:[[n,i,o]],extent:{center:{x:s,y:r}}}=e,l=(0,ue.BV)(Math.PI/2-Math.atan2(i[1]-n[1],i[0]-n[0])),a=fe(s,r,-l),[h,c]=a(n[0],n[1]),[u,d]=a(o[0],o[1]);this.extent=new pe.Z({xmin:h,ymin:c,xmax:u,ymax:d,spatialReference:t}),this.rotation=l}toSourceNormalized(e){const{extent:t,rotation:n}=this;if(null==e||null==t)return null;const{xmin:i,ymin:o,xmax:s,ymax:r,center:l,spatialReference:a}=t;e=e.normalize();const h=(0,T.projectOrLoad)(e,a).geometry;if(null==h)return null;let c=h.x,u=h.y;return n&&([c,u]=fe(l.x,l.y,-n)(c,u)),(0,O.vW)((0,ue.bA)(c,i,s,0,1),(0,ue.bA)(u,r,o,0,1))}};function fe(e,t,n){const i=(0,de.c$)(n),o=Math.cos(i),s=Math.sin(i);return(n,i)=>[o*(n-e)+s*(i-t)+e,o*(i-t)-s*(n-e)+t]}(0,i._)([(0,h.Cb)()],me.prototype,"coords",null),(0,i._)([(0,h.Cb)({type:pe.Z})],me.prototype,"extent",void 0),(0,i._)([(0,h.Cb)({type:Number})],me.prototype,"rotation",void 0),me=(0,i._)([(0,d.j)("esri.layers.support.ExtentAndRotationGeoreference")],me);const _e={key:"type",base:A,typeMap:{"control-points":le,corners:ce,"extent-and-rotation":me}},xe={key:"type",base:A,typeMap:{"control-points":le}};let ye=class extends((0,M.iv)((0,l.R)(I.Z))){constructor(e){super(e),this.georeference=null,this.opacity=1}readGeoreference(e){return le.fromJSON(e)}get contentWidth(){return 0}get contentHeight(){return 0}toSource(e){const{georeference:t,contentWidth:n,contentHeight:i}=this;if(null==e||null==t||0===n||0===i)return null;const o=t.toSourceNormalized(e);return null==o?null:(o.x*=n,o.y*=i,o)}};(0,i._)([(0,h.Cb)({types:_e,json:{write:!0,types:xe}})],ye.prototype,"georeference",void 0),(0,i._)([(0,u.r)("georeference")],ye.prototype,"readGeoreference",null),(0,i._)([(0,h.Cb)({json:{read:!1,write:!1}})],ye.prototype,"opacity",void 0),ye=(0,i._)([(0,d.j)("esri.layers.support.MediaElementBase")],ye);const ge=ye;n(59486);var ve=n(92975);function Pe(e,t){const n=(0,m.M9)(t);return i=e,"media"===i?.type&&!!e.portalItem&&null!=n&&n>m.s3.PORTAL_ITEM;var i}var we=n(22892),be=n(53283);let Me=class extends ge{constructor(e){super(e),this.animationOptions=null,this.content=null,this.image=null,this.type="image",this.image=null}load(){const e=this.image;if("string"==typeof e){const t=(0,P.n$)(e).then((e=>{this._set("content",e)}));this.addResolvingPromise(t)}else if(e instanceof HTMLImageElement){const t=e.decode().then((()=>{this._set("content",e)}));this.addResolvingPromise(t)}else e?this._set("content",e):this.addResolvingPromise(Promise.reject(new s.Z("image-element:invalid-image-type","Invalid image type",{image:e})));return Promise.resolve(this)}get contentWidth(){return null==this.content?0:this.content instanceof HTMLImageElement?this.content.naturalWidth:this.content.width}get contentHeight(){return null==this.content?0:this.content instanceof HTMLImageElement?this.content.naturalHeight:this.content.height}readImage(e,t,n){return(0,be.f)(t.url,n)}writeImage(e,t,n,i){if(null==e)return;const o=i?.portalItem,s=i?.resources;if(!o||!s)return void("string"==typeof e&&(t[n]=(0,be.t)(e,i)));const r=function(e){return"string"==typeof e&&!(0,w.HK)(e)&&!(0,w.jc)(e)}(e)?e:null;if(r){if(null==(0,be.i)(r))return void(t[n]=r);const e=(0,be.t)(r,{...i,verifyItemRelativeUrls:i?.verifyItemRelativeUrls?{writtenUrls:i.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},be.M.NO);if(o&&e&&!(0,w.YP)(e))return s.toKeep.push({resource:o.resourceFromPath(e),compress:!1}),void(t[n]=e)}t[n]="<pending>",s.pendingOperations.push(async function(e){if("string"==typeof e)return(0,w.HK)(e)?(0,w.fw)(e):(await(0,v.Z)(e,{responseType:"blob"})).data;return new Promise((t=>function(e){if(e instanceof HTMLCanvasElement)return e;const t=e instanceof HTMLImageElement?e.naturalWidth:e.width,n=e instanceof HTMLImageElement?e.naturalHeight:e.height,i=document.createElement("canvas"),o=i.getContext("2d");return i.width=t,i.height=n,e instanceof HTMLImageElement?o.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&o.putImageData(e,0,0),i}(e).toBlob(t)))}(e).then((e=>{const i=function(e,t){const n=(0,b.DO)(),i=`${(0,w.v_)("media",n)}.${(0,we.B)({type:"blob",blob:e})}`;return t.resourceFromPath(i)}(e,o);t[n]=i.itemRelativeUrl,s.toAdd.push({resource:i,content:{type:"blob",blob:e},compress:!1,finish:e=>{this.image=e.url}})})))}write(e,t){const n=super.write(e,t);return"mediaType"in n&&!n.url&&delete n.mediaType,n}};(0,i._)([(0,h.Cb)()],Me.prototype,"animationOptions",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],Me.prototype,"content",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],Me.prototype,"contentWidth",null),(0,i._)([(0,h.Cb)({readOnly:!0})],Me.prototype,"contentHeight",null),(0,i._)([(0,h.Cb)({json:{name:"url",type:String,write:{overridePolicy:(e,t,n)=>({enabled:!Pe(n?.layer,n?.origin)})}}})],Me.prototype,"image",void 0),(0,i._)([(0,u.r)("image",["url"])],Me.prototype,"readImage",null),(0,i._)([(0,p.c)("image")],Me.prototype,"writeImage",null),(0,i._)([(0,h.Cb)({readOnly:!0,json:{read:!1,write:{target:"mediaType",ignoreOrigin:!0}}})],Me.prototype,"type",void 0),Me=(0,i._)([(0,d.j)("esri.layers.support.ImageElement")],Me);const Ie=Me;var Re=n(60354),Ce=n(91505),Be=n(67426),Oe=n(94172),Se=n(65156),Le=n(66504),Ze=n(66020),je=n(59568),Ee=n(98928);let Xe=class extends ge{constructor(e){super(e),this.autoplay=!0,this.content=null,this.type="video"}load(){const e=this.video;if("string"==typeof e){const t=document.createElement("video");t.src=e,t.crossOrigin="anonymous",t.autoplay=!0,t.muted=!0,t.loop=!0,this.addResolvingPromise(this._loadVideo(t).then((()=>{this._set("content",t)})))}else e instanceof HTMLVideoElement?this.addResolvingPromise(this._loadVideo(e).then((()=>{this._set("content",e)}))):this.addResolvingPromise(Promise.reject(new s.Z("video-element:invalid-video-type","Invalid video type",{video:e})));return Promise.resolve(this)}get contentWidth(){return this.content?.videoWidth??0}get contentHeight(){return this.content?.videoHeight??0}set video(e){"not-loaded"===this.loadStatus?this._set("video",e):r.Z.getLogger(this).error("#video","video cannot be changed after the element is loaded.")}_loadVideo(e){return new Promise(((t,n)=>{const i=(0,Ee.IH)(e,"canplay",(()=>{this.removeHandles("canplay"),this.autoplay?e.play().then(t,n):t()}));this.addHandles(i,"canplay"),"anonymous"!==e.crossOrigin&&(e.crossOrigin="anonymous",e.src?.includes("blob:")||(e.src=e.src))}))}};(0,i._)([(0,h.Cb)()],Xe.prototype,"autoplay",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],Xe.prototype,"content",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],Xe.prototype,"contentWidth",null),(0,i._)([(0,h.Cb)({readOnly:!0})],Xe.prototype,"contentHeight",null),(0,i._)([(0,h.Cb)()],Xe.prototype,"video",null),Xe=(0,i._)([(0,d.j)("esri.layers.support.VideoElement")],Xe);const Te=Xe,Ye={key:"type",defaultKeyValue:"image",base:ge,typeMap:{image:Ie,video:Te}},He=o.Z.ofType(Ye);let Ue=class extends(I.Z.LoadableMixin((0,Be.v)(Ce.Z.EventedAccessor))){constructor(e){super(e),this._index=new Ze.H,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=e=>{for(const n of e.removed){const e=this._elementViewsMap.get(n);this._elementViewsMap.delete(n),this._index.delete(e),this.removeHandles(e),e.destroy(),this.notifyChange("fullExtent")}const{spatialReference:t}=this;for(const n of e.added){if(this._elementViewsMap.get(n))continue;const e=new je.L({spatialReference:t,element:n});this._elementViewsMap.set(n,e);const i=(0,Oe.YP)((()=>e.coords),(()=>this._updateIndexForElement(e,!1)));this._updateIndexForElement(e,!0),this.addHandles(i,e)}this._elementsIndexes.clear(),this.elements.forEach(((e,t)=>this._elementsIndexes.set(e,t))),this.emit("refresh")},this.elements=new He}async load(e){if((0,a.k_)(e),!this.spatialReference){const e=this.elements.find((e=>null!=e.georeference?.coords));this._set("spatialReference",e?e.georeference.coords.spatialReference:Y.Z.WGS84)}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.addHandles(this.elements.on("change",this._elementsChangedHandler)),this}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear()}set elements(e){this._set("elements",(0,Re.Z)(e,this._get("elements"),He))}get fullExtent(){if("not-loaded"===this.loadStatus)return null;const e=this._index.fullBounds;return null==e?null:new pe.Z({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:this.spatialReference})}set spatialReference(e){"not-loaded"===this.loadStatus?this._set("spatialReference",e):r.Z.getLogger(this).error("#spatialReference","spatialReference cannot be changed after the source is loaded.")}async queryElements(e,t){await this.load(),await(0,T.initializeProjection)(e.spatialReference,this.spatialReference,null,t);const n=(0,ve.fS)(e.spatialReference,this.spatialReference)?e:(0,T.project)(e,this.spatialReference);if(!n)return[];const i=n.normalize(),o=[];for(const s of i)this._index.forEachInBounds((0,Se.oJ)(s),(e=>{let{normalizedCoords:t,element:n}=e;null!=t&&(0,Le.Nl)(s,t)&&o.push(n)}));return o.sort(((e,t)=>this._elementsIndexes.get(e)-this._elementsIndexes.get(t))),o}_updateIndexForElement(e,t){const n=e.normalizedBounds,i=this._index.has(e),o=null!=n;this._index.delete(e),o&&this._index.set(e,n),this.notifyChange("fullExtent"),t||(i!==o?this.emit("refresh"):this.emit("change",{element:e.element}))}};(0,i._)([(0,h.Cb)()],Ue.prototype,"elements",null),(0,i._)([(0,h.Cb)({readOnly:!0})],Ue.prototype,"fullExtent",null),(0,i._)([(0,h.Cb)()],Ue.prototype,"spatialReference",null),Ue=(0,i._)([(0,d.j)("esri.layers.support.LocalMediaElementSource")],Ue);const Ae=Ue;var We=n(84933);function Ve(e){return"object"==typeof e&&null!=e&&"type"in e}function ze(e){return Ve(e)&&"image"===e.type}let Ne=class extends((0,_.h)((0,g.M)((0,x.q)((0,y.I)((0,l.R)(f.Z)))))){constructor(e){super(e),this.effectiveSource=null,this.georeference=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this._debouncedSaveOperations=(0,a.Ds)((async(e,t,i)=>{const{save:o,saveAs:s}=await n.e(24452).then(n.bind(n,24452));switch(e){case We.x.SAVE:return o(this,t);case We.x.SAVE_AS:return s(this,i,t)}})),this.source=new Ae}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){await this.loadFromPortal({supportedTypes:["Media Layer"]},e);let t=this.source;if(!t)throw new s.Z("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer.");const n=this._getSourceOverride(t,this.georeference);n&&(this.setAtOrigin("source",n,"web-map"),t=n);const i=Ve(t)?new Ae({elements:new o.Z([t])}):t;this._set("effectiveSource",i),this.spatialReference&&(i.spatialReference=this.spatialReference),await i.load(e),this.spatialReference=i.spatialReference}destroy(){this.effectiveSource?.destroy(),this.source?.destroy()}readGeoreference(e,t){return e&&"itemId"in t&&t.itemId?e:void 0}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}set source(e){"loaded"!==this.loadStatus&&"failed"!==this.loadStatus?this._set("source",e):r.Z.getLogger(this).error("#source","source cannot be changed after the layer is loaded.")}castSource(e){return e?Array.isArray(e)?new Ae({elements:new o.Z(e)}):e instanceof o.Z?new Ae({elements:e}):e:null}readSource(e,t,n){if("itemId"in t&&t.itemId)return;const i=this._createSource(t);return i?.read(t,n),i}writeSource(e,t,n,i){ze(e)?e.write(t,i):i?.messages&&i?.messages?.push(new s.Z("media-layer:unsupported-source","source must be an 'ImageElement'"))}async save(e){return this._debouncedSaveOperations(We.x.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(We.x.SAVE_AS,t,e)}_createSource(e){if("mediaType"in e)switch(e.mediaType){case"image":return new Ie;case"video":return new Te}return null}_getSourceOverride(e,t){if(Ve(e)&&this.originIdOf("source")===m.s3.PORTAL_ITEM&&t&&this.originIdOf("georeference")===m.s3.WEB_MAP){const n=e.toJSON(),i=this._createSource(n);return i.read({...n},{origin:"portal-item"}),i.read({georeference:t},{origin:"web-map"}),i}return null}};(0,i._)([(0,h.Cb)({readOnly:!0})],Ne.prototype,"effectiveSource",void 0),(0,i._)([(0,h.Cb)({readOnly:!0,json:{read:!1,write:!1,origins:{"web-map":{read:!0,write:!1}}}})],Ne.prototype,"georeference",void 0),(0,i._)([(0,u.r)("web-map","georeference")],Ne.prototype,"readGeoreference",null),(0,i._)([(0,h.Cb)({type:String})],Ne.prototype,"copyright",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],Ne.prototype,"fullExtent",null),(0,i._)([(0,h.Cb)({type:["MediaLayer"]})],Ne.prototype,"operationalLayerType",void 0),(0,i._)([(0,h.Cb)({type:["show","hide"]})],Ne.prototype,"listMode",void 0),(0,i._)([(0,h.Cb)({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1,overridePolicy(e,t,n){return{enabled:!0,allowNull:!1,ignoreOrigin:Pe(this,n?.origin)&&ze(e)&&!!e.georeference&&e.originIdOf("georeference")>m.s3.PORTAL_ITEM}}}}})],Ne.prototype,"source",null),(0,i._)([(0,c.p)("source")],Ne.prototype,"castSource",null),(0,i._)([(0,u.r)("source",["url"])],Ne.prototype,"readSource",null),(0,i._)([(0,p.c)("source")],Ne.prototype,"writeSource",null),(0,i._)([(0,h.Cb)()],Ne.prototype,"spatialReference",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],Ne.prototype,"type",void 0),Ne=(0,i._)([(0,d.j)("esri.layers.MediaLayer")],Ne);const Je=Ne},66020:(e,t,n)=>{n.d(t,{H:()=>a});var i=n(93169),o=n(13491),s=n(65156);const r={minX:0,minY:0,maxX:0,maxY:0};function l(e,t,n){(function(e){r.minX=e[0],r.minY=e[1],r.maxX=e[2],r.maxY=e[3]})(t),e.search(r,n)}class a{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new o.Q(9,(0,i.Z)("esri-csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach(((n,i)=>{e[t++]=i})),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(Array.from(new Set(this._boundsToLoad.filter((e=>this._idByBounds.has(e)))))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const e=(0,s.cS)();for(const t of this._boundsById.values())t&&(e[0]=Math.min(t[0],e[0]),e[1]=Math.min(t[1],e[1]),e[2]=Math.max(t[2],e[2]),e[3]=Math.max(t[3],e[3]));return e}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex(),l(this._index,e,(e=>t(this._idByBounds.get(e))))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},59568:(e,t,n)=>{n.d(t,{L:()=>u});var i=n(27366),o=n(7138),s=n(49861),r=(n(93169),n(32718),n(84936),n(69912)),l=n(80885),a=n(79803),h=n(65156),c=n(47991);let u=class extends o.Z{constructor(e){super(e)}get bounds(){const e=this.coords;return null==e?.extent?null:(0,h.oJ)(e.extent)}get coords(){const e=this.element.georeference?.coords;return(0,a.projectOrLoad)(e,this.spatialReference).geometry}get normalizedCoords(){return l.Z.fromJSON((0,c.Ui)(this.coords))}get normalizedBounds(){const e=null!=this.normalizedCoords?this.normalizedCoords.extent:null;return null!=e?(0,h.oJ)(e):null}};(0,i._)([(0,s.Cb)()],u.prototype,"spatialReference",void 0),(0,i._)([(0,s.Cb)()],u.prototype,"element",void 0),(0,i._)([(0,s.Cb)()],u.prototype,"bounds",null),(0,i._)([(0,s.Cb)()],u.prototype,"coords",null),(0,i._)([(0,s.Cb)()],u.prototype,"normalizedCoords",null),(0,i._)([(0,s.Cb)()],u.prototype,"normalizedBounds",null),u=(0,i._)([(0,r.j)("esri.layers.support.MediaElementView")],u)}}]);
//# sourceMappingURL=62544.5ac1651b.chunk.js.map