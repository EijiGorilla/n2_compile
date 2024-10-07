"use strict";(self.webpackChunkn2_compile=self.webpackChunkn2_compile||[]).push([[6143],{46143:(e,i,s)=>{s.r(i),s.d(i,{default:()=>_});var t=s(27366),n=s(14921),a=s(10064),l=s(92026),r=s(66978),o=s(94172),y=s(49861),d=s(69912),h=s(42069),u=s(80987);s(93169),s(32718),s(84936);const p=e=>{let i=class extends e{constructor(){super(...arguments),this.layer=null}get interactive(){return null!=this.analysisView&&this.analysisView.interactive}set interactive(e){null!=this.analysisView&&(this.analysisView.interactive=e)}get results(){return null!=this.analysisView?this.analysisView.results:new u.Z}get selectedDimension(){return null!=this.analysisView?this.analysisView.selectedDimension:null}set selectedDimension(e){null!=this.analysisView&&(this.analysisView.selectedDimension=e)}async createLengthDimensions(e){if(null==this.analysisView)throw(0,r.zE)();await this.analysisView.createLengthDimensions(e)}};return(0,t._)([(0,y.Cb)()],i.prototype,"layer",void 0),(0,t._)([(0,y.Cb)()],i.prototype,"interactive",null),(0,t._)([(0,y.Cb)({readOnly:!0})],i.prototype,"results",null),(0,t._)([(0,y.Cb)()],i.prototype,"selectedDimension",null),i=(0,t._)([(0,d.j)("esri.views.layers.DimensionLayerView")],i),i};var c=s(67581);const w="analysis-view-handles";let v=class extends((0,h.A)(p(c.Z))){constructor(e){super(e),this.type="dimension-3d",this._analysisModule=null}initialize(){this.addHandles((0,o.YP)((()=>this.layer.source),(e=>{this._destroyAnalysisView(),null!=e&&this._createAnalysisView(e)}),o.tX),w)}destroy(){this.removeHandles(w),this._destroyAnalysisView()}isUpdating(){return null!=this._createAnalysisViewTask||null!=this.analysisView&&this.analysisView.updating}async whenAnalysisView(){if(null!=this.analysisView)return this.analysisView;if(null!=this._createAnalysisViewTask)return this._createAnalysisViewTask.promise;throw new a.Z("layerview:no-analysisview-for-analysis","The analysis has not been set on the DimensionLayer of this layer view")}_createAnalysisView(e){const i=(0,n.vr)((async s=>(this.analysisView=await this._createAnalysisViewPromise(e,s),this._createAnalysisViewTask===i&&(this._createAnalysisViewTask=null),this.analysisView)));this.addResolvingPromise(i.promise),this._createAnalysisViewTask=i}_destroyAnalysisView(){this.analysisView=(0,l.SC)(this.analysisView),this._createAnalysisViewTask=(0,l.IM)(this._createAnalysisViewTask)}async _createAnalysisViewPromise(e,i){let s=this._analysisModule;if(null==s){const e=await this._loadAnalysisModule();this._analysisModule=e,s=e}const t=new s.default({analysis:e,view:this.view,parent:this});if(await t.when(),(0,r.Hc)(i))throw t.destroy(),(0,r.zE)();return t}_loadAnalysisModule(){return Promise.all([s.e(9058),s.e(7877),s.e(121),s.e(8103),s.e(4285),s.e(6026),s.e(7585),s.e(3093),s.e(6326),s.e(9290)]).then(s.bind(s,89290))}};(0,t._)([(0,y.Cb)()],v.prototype,"type",void 0),(0,t._)([(0,y.Cb)()],v.prototype,"analysisView",void 0),(0,t._)([(0,y.Cb)()],v.prototype,"_createAnalysisViewTask",void 0),v=(0,t._)([(0,d.j)("esri.views.3d.layers.DimensionLayerView3D")],v);const _=v},42069:(e,i,s)=>{s.d(i,{A:()=>d});var t=s(27366),n=s(42537),a=s(66978),l=s(94172),r=s(49861),o=(s(93169),s(32718),s(84936),s(69912)),y=s(5354);const d=e=>{let i=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(){super.postscript(),(0,y.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,i=e.signal;this.addHandles((0,n.kB)((()=>e.abort()))),await(0,l.N1)((()=>this.view.defaultsFromMap?.heightModelInfoReady),i),(0,a.k_)(i);const s=(0,y.Wt)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(s)throw s}};return(0,t._)([(0,r.Cb)()],i.prototype,"view",void 0),(0,t._)([(0,r.Cb)()],i.prototype,"slicePlaneEnabled",void 0),i=(0,t._)([(0,o.j)("esri.views.3d.layers.LayerView3D")],i),i}},67581:(e,i,s)=>{s.d(i,{Z:()=>w});var t=s(27366),n=s(7138),a=s(91505),l=s(79056),r=s(32718),o=s(92026),y=s(67426),d=s(49861),h=(s(93169),s(84936),s(69912)),u=s(46634),p=s(69787);let c=class extends((0,l.IG)((0,y.v)(a.Z.EventedMixin(n.Z)))){constructor(e){super(e),this._updatingHandles=new u.R,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const i=this.layer&&this.layer.id||"no id",s=this.layer?.title||"no title";r.Z.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${s}', id: '${i}')`,e)}}))}destroy(){this._updatingHandles=(0,o.SC)(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){return!0===this.layer?.visible}set visible(e){this._overrideIfSome("visible",e)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){const e=this.view.timeExtent,i=this.layer?.visibilityTimeExtent;return!e||!i||!e.intersection(i).isEmpty}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready&&(0,p.Cy)(e)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){const e=this.parent?.suspended?this.parent.suspendInfo:{};this.view?.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0);const i=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return(0,p.Cy)(i)&&this.visibleAtCurrentScale||(e.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(e.outsideVisibilityTimeExtent=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,t._)([(0,d.Cb)()],c.prototype,"view",void 0),(0,t._)([(0,d.Cb)()],c.prototype,"fullOpacity",null),(0,t._)([(0,d.Cb)()],c.prototype,"layer",void 0),(0,t._)([(0,d.Cb)()],c.prototype,"parent",void 0),(0,t._)([(0,d.Cb)({readOnly:!0})],c.prototype,"suspended",null),(0,t._)([(0,d.Cb)({readOnly:!0})],c.prototype,"suspendInfo",null),(0,t._)([(0,d.Cb)({readOnly:!0})],c.prototype,"legendEnabled",null),(0,t._)([(0,d.Cb)({type:Boolean,readOnly:!0})],c.prototype,"updating",null),(0,t._)([(0,d.Cb)({readOnly:!0})],c.prototype,"updatingProgress",null),(0,t._)([(0,d.Cb)()],c.prototype,"updateSuspended",null),(0,t._)([(0,d.Cb)()],c.prototype,"visible",null),(0,t._)([(0,d.Cb)({readOnly:!0})],c.prototype,"visibleAtCurrentScale",null),(0,t._)([(0,d.Cb)({readOnly:!0})],c.prototype,"visibleAtCurrentTimeExtent",null),c=(0,t._)([(0,h.j)("esri.views.layers.LayerView")],c);const w=c}}]);
//# sourceMappingURL=6143.3f6ad81b.chunk.js.map