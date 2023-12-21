"use strict";(self.webpackChunkn2_compile=self.webpackChunkn2_compile||[]).push([[3826],{80573:(t,e,i)=>{i.d(e,{Z:()=>c});var s=i(27366),n=i(7138),a=i(63780),o=i(11582),r=i(79056),l=i(46784),h=i(49861),u=(i(25243),i(93169),i(69912));let p=0,d=class extends((0,l.eC)((0,o.J)((0,r.IG)(n.Z)))){constructor(t){super(t),this.id="".concat(Date.now().toString(16),"-analysis-").concat(p++),this.title=null}get parent(){return this._get("parent")}set parent(t){const e=this.parent;if(null!=e)switch(e.type){case"line-of-sight":case"dimension":e.releaseAnalysis(this);break;case"2d":case"3d":e.analyses.includes(this)&&e.analyses.remove(this)}this._set("parent",t)}get isEditable(){return this.requiredPropertiesForEditing.every(a.pC)}};(0,s._)([(0,h.Cb)({type:String,constructOnly:!0,clonable:!1})],d.prototype,"id",void 0),(0,s._)([(0,h.Cb)({type:String})],d.prototype,"title",void 0),(0,s._)([(0,h.Cb)({constructOnly:!0})],d.prototype,"type",void 0),(0,s._)([(0,h.Cb)({clonable:!1,value:null})],d.prototype,"parent",null),(0,s._)([(0,h.Cb)({readOnly:!0})],d.prototype,"isEditable",null),(0,s._)([(0,h.Cb)({readOnly:!0})],d.prototype,"requiredPropertiesForEditing",void 0),d=(0,s._)([(0,u.j)("esri.analysis.Analysis")],d);const c=d},48681:(t,e,i)=>{i.d(e,{D1:()=>g,UG:()=>y,Ue:()=>c,Zy:()=>w,fq:()=>m,hO:()=>v,l:()=>_,wE:()=>b,y1:()=>V});var s=i(11186),n=i(71353),a=i(2170),o=i(80885),r=i(78952),l=i(68859),h=i(67751),u=i(94393),p=i(15559),d=i(80064);function c(t,e){const i=e.center;(0,s.s)(i,0,0,0);for(let a=0;a<t.length;++a)(0,s.g)(i,i,t[a]);(0,s.i)(i,i,1/t.length);let n=0;for(let a=0;a<t.length;++a)n=Math.max(n,(0,s.a)(i,t[a]));e.radius=Math.sqrt(n)}function _(t,e){if(t.length<3)throw new Error("need at least 3 points to fit a plane");(0,d.pG)(t[0],t[1],t[2],e)}function g(t,e){return(0,s.j)(t,e)+t[3]}function y(t,e,i){return(0,l.K)(t,f,i)&&(0,l.K)(e,C,i)?(0,s.o)(f,C):0}function w(t,e){if(!(0,h.U)(t,f)||!(0,h.U)(e,C))return 0;const i=new p._q;return(0,p.cA)(i,[f[0],f[1]],[C[0],C[1]]),i.distance}function v(t,e,i){const s=new p._q;return(0,p.cA)(s,[t[0],t[1]],[e[0],e[1]],i),s.distance}function m(t,e,i,s){const n=M;return(0,u.k)(t,s,f)&&(0,u.k)(e,s,C)&&(0,u.k)(i,s,P)?(n.setPoint(0,0,f),n.setPoint(0,1,C),n.setPoint(0,2,P),Math.abs((0,a.geodesicArea)(n,"square-meters"))):0}function b(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const n=(t,e)=>{if(0===e[0]&&0===e[1]&&0===e[2])return!1;for(let i=0;i<t.length;++i)if((0,s.j)(e,t[i])<-1e-6)return!1;return!0};if(0===t.length)return!1;if(1===t.length)return e&&(0,s.c)(e,t[0]),!0;(0,s.s)(D,0,0,0);for(let a=0;a<t.length;++a)(0,s.g)(D,D,t[a]);if((0,s.n)(D,D),n(t,D))return e&&(0,s.c)(e,D),!0;if(!i)return!1;for(let a=0;a<t.length;++a)for(let i=0;i<t.length;++i)if(a!==i&&((0,s.b)(D,t[a],t[i]),(0,s.n)(D,D),n(t,D)))return e&&(0,s.c)(e,D),!0;return!1}function V(t){return"mouse"!==t.pointerType||0===t.button}const f=(0,n.c)(),C=(0,n.c)(),P=(0,n.c)(),M=new o.Z({rings:[[f,C,P]],spatialReference:r.Z.WGS84}),D=(0,n.c)()},71040:(t,e,i)=>{i.d(e,{y:()=>u});var s=i(27366),n=i(7138),a=i(92026),o=i(66978),r=i(49861),l=(i(25243),i(63780),i(93169),i(69912)),h=i(93463);let u=class extends n.Z{constructor(t){super(t),this.constrainResult=t=>t,this._snapPoints=null,this._frameTask=null,this._abortController=null,this._stagedPoint=null,this._snap=(0,o.Ds)((async(t,e,i,s)=>{const n=this._frameTask;if(null==n)return;const a=await n.schedule((()=>e.snap({...t,context:i,signal:s})),s);a.valid&&await n.schedule((()=>{this.stagedPoint=a.apply(),t!==this._snapPoints&&null!=this._snapPoints&&(this.stagedPoint=e.update({...this._snapPoints,context:i}))}),s)}))}get stagedPoint(){return this._stagedPoint}set stagedPoint(t){this._stagedPoint=this.constrainResult(t)}initialize(){var t;const e="3d"===this.view.type?null===(t=this.view)||void 0===t||null===(t=t.resourceController)||void 0===t?void 0:t.scheduler:null;this._frameTask=null!=e?e.registerTask(h.T8.SNAPPING):h.sq}destroy(){this._abortController=(0,a.IM)(this._abortController),this._frameTask=(0,a.hw)(this._frameTask)}update(t,e,i){this._snapPoints=t;const{point:s,scenePoint:n}=t,a=e.update({point:s,scenePoint:n,context:i});return this.stagedPoint=a,a}async snap(t,e,i){const{point:s,scenePoint:n}=t;return this.stagedPoint=e.update({point:s,scenePoint:n,context:i}),this._snapPoints=t,null==this._abortController&&(this._abortController=new AbortController),this._snap(t,e,i,this._abortController.signal)}async resnap(t,e){null!=this._snapPoints&&await this.snap(this._snapPoints,t,e)}abort(){this._abortController=(0,a.IM)(this._abortController),this._snapPoints=null}};(0,s._)([(0,r.Cb)({constructOnly:!0})],u.prototype,"view",void 0),(0,s._)([(0,r.Cb)()],u.prototype,"stagedPoint",null),(0,s._)([(0,r.Cb)()],u.prototype,"constrainResult",void 0),(0,s._)([(0,r.Cb)()],u.prototype,"_stagedPoint",void 0),u=(0,s._)([(0,l.j)("esri.views.interactive.snapping.SnappingOperation")],u)},33826:(t,e,i)=>{i.r(e),i.d(e,{default:()=>yt});var s=i(27366),n=i(66978),a=i(49861),o=(i(25243),i(63780)),r=(i(93169),i(69912)),l=i(33565),h=i(80573),u=i(32718),p=i(68860),d=i(80885);let c=class extends h.Z{constructor(t){super(t),this.type="area-measurement",this.unit=null}set geometry(t){null!=t?(t.rings.length>1&&u.Z.getLogger(this).warn("Measuring polygons with multiple rings is not supported."),this._set("geometry",t.clone())):this._set("geometry",null)}get requiredPropertiesForEditing(){if(null!=this.geometry&&1===this.geometry.rings.length){const t=this.geometry.rings[0];if(t.length<=2||!(0,o.fS)(t[0],t[t.length-1]))return[null]}return[this.geometry]}clear(){this.geometry=null}};(0,s._)([(0,a.Cb)({type:["area-measurement"]})],c.prototype,"type",void 0),(0,s._)([(0,a.Cb)({value:null,type:d.Z})],c.prototype,"geometry",null),(0,s._)([(0,a.Cb)({type:p.fN,value:null})],c.prototype,"unit",void 0),(0,s._)([(0,a.Cb)({readOnly:!0})],c.prototype,"requiredPropertiesForEditing",null),c=(0,s._)([(0,r.j)("esri.analysis.AreaMeasurementAnalysis")],c);const _=c;var g=i(94172),y=i(77671),w=i(92026),v=i(97942),m=i(46634),b=i(585),V=i(37818),f=i(48681),C=i(62815),P=i(51328),M=i(51995),D=i(86950),O=i(100),S=i(17842),A=i(71353),x=i(35284),T=i(83639),U=i(40508);class k{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.screenPoint=t,this.result=e}}class E{constructor(t,e){this.scenePoint=t,this.mapPoint=e}}var I=i(62389),R=i(70619),H=i(88153),L=i(54463),N=i(92853);class F{constructor(t){this.vertexManipulators=[],this._destroyed=!1,this._isManipulatorsOwner=!0,this._visible=!0,this._listenerHandles=null,this._tempHandlePosition=(0,A.c)();const{analysisViewData:e,manipulators:i,toolState:s,view:n,visible:a}=t;this._analysisViewData=e,this._toolState=s,null!=i?(this._manipulators=i,this._isManipulatorsOwner=!1):this._manipulators=new N.D,this._view=n,this._intersector=(0,H.Z8)(n.state.viewingMode),this._intersector.options.store=L.eC.MIN;const o=(0,T.EA)(this._handleColor),r=[new U.r((0,R.PI)(o,1,32,32))],l=new x.Z({view:n,renderObjects:r});l.available=!1,l.radius=Y,l.interactive=!1,this._manipulators.add(l),this._cursorManipulator=l,this._cursorManipulatorMaterial=o,this._laserLine=new I.W({view:n,attached:!0,style:{glowWidth:Z,glowFalloff:G,innerWidth:W},isDecoration:!0}),this._updateVisibility(null===a||void 0===a||a)}destroy(){this._listenerHandles=(0,w.SC)(this._listenerHandles),this._isManipulatorsOwner?this._manipulators=(0,w.SC)(this._manipulators):this._manipulators=null,this._laserLine=(0,w.SC)(this._laserLine),this._destroyed=!0}get destroyed(){return this._destroyed}get visible(){return this._visible}set visible(t){t?this.show():this.hide()}get testData(){const t=this._laserLine.testData;return{laserLineRenderer:null!=t?{heightManifoldEnabled:t.heightManifoldEnabled,heightManifoldTarget:t.heightManifoldTarget,pointDistanceEnabled:t.pointDistanceEnabled,pointDistanceOrigin:t.pointDistanceOrigin,pointDistanceTarget:t.pointDistanceTarget,lineVerticalPlaneEnabled:t.lineVerticalPlaneEnabled}:{heightManifoldEnabled:!1,heightManifoldTarget:null,pointDistanceEnabled:!1,pointDistanceOrigin:null,pointDistanceTarget:null,lineVerticalPlaneEnabled:!1}}}show(){this._setVisibility(!0)}hide(){this._setVisibility(!1)}_setVisibility(t){this._destroyed||this._visible===t||this._updateVisibility(t)}_updateVisibility(t){this._visible=t,this._laserLine.visible=t,t?(this._initializeListeners(),this._updateAll()):(this._destroyListeners(),this.vertexManipulators.forEach((t=>{let{manipulator:e}=t;return this._removeVertexManipulator(e)})),this.vertexManipulators=[],this._view.cursor=null)}vertexHandleAt(t,e){const i=this._manipulators.intersect(t,e);return null===i||void 0===i?void 0:i.metadata}pick(t){const e=this._view.spatialReference,i=(0,S.md)(t.screenPoint);this._view.sceneIntersectionHelper.intersectToolIntersectorScreen(i,this._intersector);const s=this._intersector.results.min,n=(0,A.c)();if(!s.getIntersectionPoint(n))return null;const a=this._view.renderCoordsHelper.fromRenderCoords(n,e);return null==a?null:new E(n,a)}_updateAll(){this._visible&&(this._updateVertexManipulators(),this._updateLaserLine())}_createVertexManipulator(){const t=(0,T.EA)(this._handleColor),e=[new U.r((0,R.PI)(t,1,32,32))],i=new x.Z({view:this._view,renderObjects:e});return i.radius=Y,this._manipulators.add(i),{manipulator:i,material:t}}_removeVertexManipulator(t){this._manipulators.remove(t)}_updateVertexManipulators(){const{viewData:t}=this._analysisViewData,e=this._analysisViewData.path?this._analysisViewData.path.vertices:[],i=this.vertexManipulators;(function(t,e,i,s){for(;t.length<e;)t.push(i());if(s)for(;t.length>e;)s(t.pop());else t.length=e})(i,e.length,(()=>this._createVertexManipulator()),(t=>{let{manipulator:e}=t;return this._removeVertexManipulator(e)})),i.forEach(((i,s)=>{let{manipulator:n}=i;n.metadata=e[s],n.renderLocation=t.positionsRenderCoords[s],n.cursor=0===s&&"drawing"===this._toolState.polygonState?"crosshair":null})),"drawing"===this._toolState.polygonState&&null!=this._analysisViewData.stagedPoint?(this._cursorManipulator.available=!0,this._cursorManipulator.location=this._analysisViewData.stagedPoint):this._cursorManipulator.available=!1}get _handleColor(){return(0,D.Ch)(this._view.effectiveTheme.accentColor,.5)}_getFocusPoint(){const{lastDraggedVertex:t}=this._analysisViewData;switch(this._toolState.polygonState){case"drawing":return null!=this._analysisViewData.stagedPoint?this._analysisViewData.stagedPoint:null!=t?this._analysisViewData.path.getVertexPositionAsPoint(t):this._analysisViewData.path.lastPoint;case"editing":return null!=t?this._analysisViewData.path.getVertexPositionAsPoint(t):null;default:return this._analysisViewData.stagedPoint}}_updateLaserLine(){const t="measured"!==this._toolState.polygonState&&this._toolState.active,e=this._getFocusPoint();if(t&&null!=e){const t=this._tempHandlePosition;this._view.renderCoordsHelper.toRenderCoords(e,t),this._laserLine.heightManifoldTarget=t}else this._laserLine.heightManifoldTarget=null}_initializeListeners(){this._listenerHandles=new O.Z,this._listenerHandles.add([(0,g.YP)((()=>this._toolState.polygonState),(()=>this._updateLaserLine())),(0,g.YP)((()=>this._analysisViewData.viewData),(()=>this._updateAll()),g.Z_),(0,g.YP)((()=>({lastDraggedVertex:this._analysisViewData.lastDraggedVertex,cursorPoint:this._analysisViewData.stagedPoint})),(()=>this._updateLaserLine())),(0,g.YP)((()=>this._toolState.active),(()=>this._updateAll())),(0,g.YP)((()=>this._view.effectiveTheme.accentColor),(t=>{const e=(0,D.Ch)(t,.5);for(const{material:r}of this.vertexManipulators)r.setParameters({color:e});this._cursorManipulatorMaterial.setParameters({color:e});const i=M.Z.toUnitRGB(t),s=M.Z.toUnitRGB((0,D.mj)(t)),n=.75*t.a,a=this._laserLine,o=a.style;a.style={...o,glowColor:i,innerColor:s,globalAlpha:n}}),{initial:!0,equals:D.WC})])}_destroyListeners(){this._listenerHandles=(0,w.SC)(this._listenerHandles)}}const Z=8,G=8,W=1,Y=5;var j=i(86509),z=i(14813),q=i(5693),B=i(84954),X=i(95172),K=i(92839),J=i(34019),Q=i(80151),$=i(71040),tt=i(64674),et=i(72612);let it=class extends j.f{constructor(t){super(t),this._updatingHandles=new m.R,this.polygonState="initial",this.manipulators=new N.D,this._getSnappingContext=(0,v.H)((t=>new J.N({elevationInfo:{mode:"absolute-height",offset:0},pointer:t,editGeometryOperations:new X.c(new B.XE("point",(0,z.Y6)(!0,!1,this.view.spatialReference))),visualizer:new C._})))}initialize(){const{view:t,analysisViewData:e,manipulators:i,visible:s}=this;this.measurementView=new F({view:t,analysisViewData:e,toolState:this,manipulators:i,visible:s});const a=(0,K.u)(t);this._snappingManagerResult=a,this.addHandles(a),this._snappingOperation=new $.y({view:t}),this._updatingHandles.add((()=>this.stagedPoint),(t=>{this.analysisViewData.stagedPoint=null!=t?(0,V.WG)(t,new b.Z):null}),g.tX),(0,tt.Ob)(this,(()=>{var t;const e=null!==(t=this.view.inputManager.latestPointerType)&&void 0!==t?t:"mouse",i=this._getSnappingContext(e);this._updatingHandles.addPromise((0,n.R8)(this._snappingOperation.resnap(this._snappingManager,i)))})),this._setupManipulators(),this.addHandles([(0,g.YP)((()=>this.state),(t=>{"measured"===t&&this.finishToolCreation()}),g.tX),this.analysisViewData.path.on("change",(()=>{const t=this.analysisViewData.path;"initial"!==this.polygonState||t.isEmptyPolygon||(t.isValidPolygon?this.polygonState="measured":this.polygonState="drawing")}))])}destroy(){this.measurementView.destroy(),this._set("measurementView",null),this._updatingHandles=(0,w.SC)(this._updatingHandles)}get _snappingManager(){return this._snappingManagerResult.snappingManager}get state(){return 0===this.analysisViewData.path.numVertices?"ready":this.analysisViewData.path.isValidPolygon&&"editing"!==this.polygonState?"measured":"measuring"}get cursor(){return"ready"===this.state||"drawing"===this.polygonState?"crosshair":null}get updating(){return this._updatingHandles.updating||this._snappingManager.updating}get stagedPoint(){return this._snappingOperation.stagedPoint}set stagedPoint(t){this._snappingOperation.stagedPoint=t}get snappingOptions(){return this._snappingManager.options}finishMeasurement(){const{path:t}=this.analysisViewData;t.numVertices<3?(t.clear(),this.polygonState="initial"):(t.close(),this.polygonState="measured"),this._resetSnappingState()}onShow(){this.measurementView.show()}onHide(){this.measurementView.hide()}onDeactivate(){this._resetSnappingState()}onInputEvent(t){switch(t.type){case"immediate-double-click":this._handleImmediateDoubleClick(t);break;case"immediate-click":this._handleImmediateClick(t);break;case"pointer-move":this._handlePointerMove(t);break;case"drag":this._handleDrag(t);break;case"key-down":this._handleKeyDown(t)}}_setupManipulators(){const t=t=>t.events.on("grab-changed",(()=>{if(this.analysisViewData.path.isValidPolygon){const t=this.manipulators.some((t=>t.manipulator.grabbing));this.polygonState=t?"editing":"measured"}})),e=e=>{this.addHandles([(0,q.Xd)(e,((t,e,i,s)=>{const n=(0,P.J4)(t),a=t.metadata,o=this._snappingManager,r=this._getSnappingContext(s),l=this._updatingHandles,{snappingStep:h,cancelSnapping:u}=(0,Q.W)({snappingManager:o,snappingContext:r,updatingHandles:l});i=i.next(n).next((e=>(this.analysisViewData.lastDraggedVertex=null,this.analysisViewData.path.setVertexPosition(a,p),t.location=p,e))).next(u),e.next(n).next((0,P.gv)(this.view)).next(...h).next((e=>{t.location=e.mapEnd,this.analysisViewData.lastDraggedVertex="end"===e.action?null:a,this.analysisViewData.path.setVertexPosition(a,(0,V.WG)(e.mapEnd))}));const p=(0,V.WG)(this.analysisViewData.path.getVertexPositionAsPoint(a))})),t(e)],e)};this.manipulators.forEach((t=>{let{manipulator:i}=t;e(i)})),this.addHandles([this.manipulators.on("after-add",(t=>{let{item:{manipulator:i}}=t;e(i)})),this.manipulators.on("after-remove",(t=>{let{item:{manipulator:e}}=t;return this.removeHandles(e)}))])}_handleImmediateDoubleClick(t){(0,f.y1)(t)&&("drawing"===this.polygonState&&this.finishMeasurement(),t.stopPropagation())}_handleDrag(t){"editing"===this.polygonState&&t.stopPropagation()}_handleImmediateClick(t){if(!(0,f.y1)(t))return;const e=(0,et.vT)(t),{pointerType:i}=t;if(this.active)switch(this.polygonState){case"initial":if(this._addVertexAt(e,i))return this.stagedPoint=null,this.polygonState="drawing",void t.stopPropagation();break;case"drawing":{const s=this.measurementView.vertexHandleAt(e,i);if(null==s){if(this._addVertexAt(e,i))return this.stagedPoint=null,void t.stopPropagation()}else 0===s.index&&(this.finishMeasurement(),t.stopPropagation());break}}"mouse"===t.pointerType&&this._hoverAt(e)}_handlePointerMove(t){if("mouse"===t.pointerType){const e=(0,et.vT)(t);this._hoverAt(e)}}_handleKeyDown(t){const{path:e}=this.analysisViewData;"Enter"===t.key&&"drawing"===this.polygonState&&e.numVertices>=3&&(this.stagedPoint=null,this.finishMeasurement(),t.stopPropagation())}_hoverAt(t){const{polygonState:e}=this;if(!this.active||"initial"!==e&&"drawing"!==e)this.stagedPoint=null;else{const e=this._pick(t);if(null!=(null===e||void 0===e?void 0:e.mapPoint)){const t=this._getSnappingContext("mouse");this._updatingHandles.addPromise((0,n.R8)(this._snappingOperation.snap({point:e.mapPoint},this._snappingManager,t)))}}}_addVertexAt(t,e){const i=this._pick(t);if(null!=(null===i||void 0===i?void 0:i.mapPoint)){const{mapPoint:t}=i,s=this._getSnappingContext(e),n=this._snappingOperation.update({point:t},this._snappingManager,s),a=(0,V.WG)(n,new b.Z);return this.analysisViewData.path.add(a),!0}return!1}_pick(t){const e=new k(t);return this.measurementView.pick(e)}_resetSnappingState(){this._snappingManager.doneSnapping(),this._snappingOperation.abort(),this._snappingOperation.stagedPoint=null}get test(){return{snappingManager:this._snappingManager}}};(0,s._)([(0,a.Cb)({readOnly:!0})],it.prototype,"state",null),(0,s._)([(0,a.Cb)()],it.prototype,"polygonState",void 0),(0,s._)([(0,a.Cb)({readOnly:!0})],it.prototype,"cursor",null),(0,s._)([(0,a.Cb)()],it.prototype,"measurementView",void 0),(0,s._)([(0,a.Cb)({constructOnly:!0})],it.prototype,"view",void 0),(0,s._)([(0,a.Cb)({constructOnly:!0})],it.prototype,"analysis",void 0),(0,s._)([(0,a.Cb)({constructOnly:!0})],it.prototype,"analysisViewData",void 0),(0,s._)([(0,a.Cb)({readOnly:!0})],it.prototype,"manipulators",void 0),(0,s._)([(0,a.Cb)()],it.prototype,"updating",null),(0,s._)([(0,a.Cb)()],it.prototype,"stagedPoint",null),(0,s._)([(0,a.Cb)()],it.prototype,"snappingOptions",null),it=(0,s._)([(0,r.j)("esri.views.3d.interactive.measurementTools.areaMeasurement3D.AreaMeasurement3DTool")],it);const st=it;var nt=i(40085);let at=class extends nt.O{constructor(t){super(t),this.analysis=null,this.supportedViewType="3d",this.unsupportedErrorMessage="AreaMeasurement3DViewModel is only supported in 3D views.",this._userUnitOptions=null,this._userUnit=null}initialize(){this.addHandles((0,g.YP)((()=>({analysis:this.analysis,unit:this.unit})),(t=>{let{analysis:e,unit:i}=t;null!=e&&(e.unit=i)}),g.tX))}get state(){return this.disabled||!this.ready?"disabled":null==this.tool?"ready":this.tool.state}get measurement(){if(null==this.tool||this.disabled||this.tool.destroyed)return null;const{analysisView:t}=this;if(null==t)return null;const e=t.analysisVisualization,i=e.viewData,s=i.measurementData,n=s.validMeasurement,a="euclidean"===i.mode,o=0===(a?s.intersectingSegments:s.geodesicIntersectingSegments).size,r=o?n?"available":"unavailable":"invalid";return{mode:a?"euclidean":"geodesic",area:{text:o&&n?e.areaLabel:null,state:r},perimeterLength:{text:o&&n?e.perimeterLengthLabel:null,state:r}}}set unitOptions(t){this._userUnitOptions=t,this._set("unitOptions",this._filteredOrAllUnits(this._userUnitOptions))}get unitOptions(){return this._filteredOrAllUnits(this._userUnitOptions)}set unit(t){this._userUnit=t?this._findSelectableUnit(t,this._userUnit):null}get unit(){return null!=this._userUnit?(this._userUnit=this._findSelectableUnit(this._userUnit,this.defaultUnit),this._userUnit):this._findSelectableUnit(this.defaultUnit)}constructAnalysis(){return new _}constructTool(){return new st({view:this.view,analysis:this.analysis,analysisViewData:this.analysisView,visible:this.visible})}_findSelectableUnit(t,e){const{unitOptions:i}=this;return i.includes(t)?t:null!=e?this._findSelectableUnit(e):i[0]}_filteredOrAllUnits(t){if(null==t)return p.fN.slice();const e=t.filter((t=>p.fN.includes(t)));return 0===e.length?p.fN.slice():e}};(0,s._)([(0,a.Cb)({type:_})],at.prototype,"analysis",void 0),(0,s._)([(0,a.Cb)({readOnly:!0})],at.prototype,"state",null),(0,s._)([(0,a.Cb)({readOnly:!0})],at.prototype,"measurement",null),(0,s._)([(0,a.Cb)()],at.prototype,"unitOptions",null),(0,s._)([(0,a.Cb)()],at.prototype,"unit",null),(0,s._)([(0,a.Cb)(y.Y)],at.prototype,"defaultUnit",void 0),(0,s._)([(0,a.Cb)()],at.prototype,"_userUnit",void 0),at=(0,s._)([(0,r.j)("esri.widgets.AreaMeasurement3D.AreaMeasurement3DViewModel")],at);const ot=at;var rt=i(7021),lt=i(33095),ht=i(82052),ut=(i(80975),i(80532)),pt=i(67005);const dt="esri-area-measurement-3d",ct={base:dt,newMeasurementButton:"".concat(dt,"__clear-button"),widgetIcon:lt.W.measureArea};let _t=class extends l.Z{constructor(t,e){super(t,e),this.iconClass=ct.widgetIcon,this.icon=null,this.messages=null,this.messagesCommon=null,this.messagesUnits=null,this.viewModel=new ot}get view(){return this.viewModel.view}set view(t){this.viewModel.view=t}get visible(){return this.viewModel.visible}set visible(t){this.viewModel.visible=t}get active(){return this.viewModel.active}get analysis(){return this.viewModel.analysis}set analysis(t){this.viewModel.analysis=t}get label(){var t,e;return null!==(t=null===(e=this.messages)||void 0===e?void 0:e.widgetLabel)&&void 0!==t?t:""}set label(t){this._overrideIfSome("label",t)}get unitOptions(){return this.viewModel.unitOptions}set unitOptions(t){this.viewModel.unitOptions=t}get unit(){return this.viewModel.unit}set unit(t){this.viewModel.unit=t}render(){const{messages:t,messagesCommon:e,messagesUnits:i,unit:s,unitOptions:a,viewModel:o}=this,{active:r,measurement:l,state:h,supported:u}=o;return(0,pt.u)("div",{"aria-label":this.messages.widgetLabel,class:this.classes(ct.base,rt.z.widget,rt.z.panel),key:this,role:"presentation"},this.visible?(0,pt.u)(ht.s,{active:r,measurementItems:[{key:"direct",title:i.measures.area,value:gt(null===l||void 0===l?void 0:l.area)},{key:"perimeter",title:t.perimeterLength,value:gt(null===l||void 0===l?void 0:l.perimeterLength)}],messages:{...t,notApplicable:e.notApplicable},newMeasurementButtonClass:ct.newMeasurementButton,state:h,supported:u,unit:s,unitOptions:a,onNewMeasurementClick:()=>{(0,n.R8)(this.viewModel.start())},onUnitChange:t=>{this.unit=t}}):null)}};function gt(t){return"available"===(null===t||void 0===t?void 0:t.state)?t.text:null}(0,s._)([(0,a.Cb)()],_t.prototype,"view",null),(0,s._)([(0,a.Cb)()],_t.prototype,"visible",null),(0,s._)([(0,a.Cb)()],_t.prototype,"active",null),(0,s._)([(0,a.Cb)({constructOnly:!0,nonNullable:!0})],_t.prototype,"analysis",null),(0,s._)([(0,a.Cb)()],_t.prototype,"iconClass",void 0),(0,s._)([(0,a.Cb)()],_t.prototype,"icon",void 0),(0,s._)([(0,a.Cb)()],_t.prototype,"label",null),(0,s._)([(0,a.Cb)(),(0,ut.H)("esri/widgets/AreaMeasurement3D/t9n/AreaMeasurement3D")],_t.prototype,"messages",void 0),(0,s._)([(0,a.Cb)(),(0,ut.H)("esri/t9n/common")],_t.prototype,"messagesCommon",void 0),(0,s._)([(0,a.Cb)(),(0,ut.H)("esri/core/t9n/Units")],_t.prototype,"messagesUnits",void 0),(0,s._)([(0,a.Cb)()],_t.prototype,"uiStrings",void 0),(0,s._)([(0,a.Cb)({type:ot})],_t.prototype,"viewModel",void 0),(0,s._)([(0,a.Cb)()],_t.prototype,"unitOptions",null),(0,s._)([(0,a.Cb)()],_t.prototype,"unit",null),_t=(0,s._)([(0,r.j)("esri.widgets.AreaMeasurement3D")],_t);const yt=_t},40085:(t,e,i)=>{i.d(e,{O:()=>c});var s,n,a=i(27366),o=i(14921),r=i(92026),l=i(66978),h=i(94172),u=i(49861),p=(i(25243),i(63780),i(93169),i(69912)),d=i(32845);(n=s||(s={}))[n.PENDING=0]="PENDING",n[n.WAIT_FOR_VIEW_READY=1]="WAIT_FOR_VIEW_READY",n[n.RUNNING=2]="RUNNING";let c=class extends d.V{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(t),this.analysisView=null,this._reconnectViewTask=null,this._parentChangeFromReconnect=!1,this._startUserOperation=null;const e=null===t||void 0===t?void 0:t.analysis;null!=e?this.analysis=e:(this._set("analysis",this.constructAnalysis()),this._set("isAnalysisOwner",!0))}normalizeCtorArgs(t){const{analysis:e,...i}=t;return i}initialize(){this.addHandles([(0,h.YP)((()=>{var t;return null===(t=this.analysis)||void 0===t?void 0:t.parent}),(t=>{this._parentChangeFromReconnect||t===this.view||this._set("isAnalysisOwner",!1);const e=!this._parentChangeFromReconnect;this._parentChangeFromReconnect=!1,e&&this._scheduleViewReconnect()}),h.Z_),(0,h.YP)((()=>({view:this.view,ready:null!=this.view&&this.view.ready,supported:this.supported})),((t,e)=>{let{view:i}=t;const s=null===e||void 0===e?void 0:e.view;i!==s&&(this._startUserOperation=(0,r.IM)(this._startUserOperation),this._disconnectFromView(s)),this._scheduleViewReconnect()}),h.tX),(0,h.YP)((()=>this.analysis.isEditable),((t,e)=>{null!=this.analysisView&&(t&&!e&&null==this.tool?this.createTool():t||!e||null==this.tool||this.tool.active||this.removeTool())}))])}destroy(){this._reconnectViewTask=(0,r.IM)(this._reconnectViewTask),this._startUserOperation=(0,r.IM)(this._startUserOperation),null!=this.analysisView&&(this.analysisView.visible=void 0),this._disconnectFromView(this.view),null!=this.analysis&&this.isAnalysisOwner&&(this.analysis.destroy(),this._set("analysis",null))}set analysis(t){t!==this._get("analysis")&&(this._startUserOperation=(0,r.IM)(this._startUserOperation),this._disconnectFromView(this.view),this._setExternalAnalysis(t),this._scheduleViewReconnect())}get ready(){return null!=this.analysisView&&!this.connectingToView}get connectingToView(){return null!=this._reconnectViewTask}get isAnalysisOwner(){return this._get("isAnalysisOwner")}set visible(t){this._set("visible",t),null!=this.analysisView&&(this.analysisView.visible=t)}async start(){this.clear();const t={task:null,abort:null,state:s.PENDING},e=(0,o.vr)((async e=>{t.state=s.WAIT_FOR_VIEW_READY,await(0,h.N1)((()=>this.ready),e),t.state=s.RUNNING,this.createTool({interactive:!0})}));return t.task=e,t.abort=()=>e.abort(),this._startUserOperation=t,e.promise}clear(){this._startUserOperation=(0,r.IM)(this._startUserOperation),this.removeTool(),this.analysis.clear()}onConnectToAnalysisView(t){}onDisconnectFromAnalysisView(){}_scheduleViewReconnect(){this._reconnectViewTask=(0,r.IM)(this._reconnectViewTask);const t=(0,o.vr)((async e=>{try{await this._reconnectView(e)}catch(i){if((0,l.k_)(e),!(0,l.D_)(i))return void this.logger.warn("Failed to use analysis in view model",i);throw i}finally{t===this._reconnectViewTask&&(this._reconnectViewTask=null)}}));this._reconnectViewTask=t}async _reconnectView(t){const{view:e}=this,i=null!=e&&e.ready&&this.supported,s=this.analysis;if(this._startUserOperation=_(this._startUserOperation),this._disconnectFromView(e),i&&null!=e&&null!=s){if(this.isAnalysisOwner){if(null!=s.parent)return void this.logError("expected owned analysis to have null parent when connecting to view");this._parentChangeFromReconnect=!0,e.analyses.add(s)}this.analysisView=await e.whenAnalysisView(s),(0,l.Hc)(t)?this._startUserOperation=_(this._startUserOperation):(this.analysisView.visible=this.visible,this.onConnectToAnalysisView(this.analysisView),this.createTool())}}_disconnectFromView(t){this.removeTool(),null!=t&&this.isAnalysisOwner&&(this._parentChangeFromReconnect=!0,t.analyses.remove(this.analysis),this.analysis.clear()),this.analysisView=null,this.onDisconnectFromAnalysisView()}_setExternalAnalysis(t){null==this.analysisView||this.isAnalysisOwner||(this.analysisView.visible=!0),this.analysisView=null,this._set("isAnalysisOwner",!1),this._set("analysis",t),this._parentChangeFromReconnect=!1}get testInfo(){return{analysisView:this.analysisView}}};function _(t){return null!=t&&t.state>=s.RUNNING?(t.abort(),null):t}(0,a._)([(0,u.Cb)({nonNullable:!0})],c.prototype,"analysis",null),(0,a._)([(0,u.Cb)()],c.prototype,"analysisView",void 0),(0,a._)([(0,u.Cb)()],c.prototype,"ready",null),(0,a._)([(0,u.Cb)()],c.prototype,"connectingToView",null),(0,a._)([(0,u.Cb)({readOnly:!0})],c.prototype,"isAnalysisOwner",null),(0,a._)([(0,u.Cb)({type:Boolean,value:!0})],c.prototype,"visible",null),(0,a._)([(0,u.Cb)()],c.prototype,"_reconnectViewTask",void 0),c=(0,a._)([(0,p.j)("esri.widgets.support.InteractiveAnalysisViewModel")],c)}}]);
//# sourceMappingURL=3826.387aec14.chunk.js.map