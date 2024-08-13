"use strict";(self.webpackChunkn2_compile=self.webpackChunkn2_compile||[]).push([[15421],{42069:(e,t,i)=>{i.d(t,{A:()=>d});var a=i(27366),r=i(42537),l=i(66978),s=i(94172),n=i(49861),o=(i(93169),i(32718),i(84936),i(69912)),h=i(5354);const d=e=>{let t=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(e){super.postscript(e),(0,h.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,t=e.signal;this.addHandles((0,r.kB)((()=>e.abort()))),await(0,s.N1)((()=>this.view.defaultsFromMap?.heightModelInfoReady),t),(0,l.k_)(t);const i=(0,h.Wt)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!e?.minScale||!e.maxScale||e.minScale>=e.maxScale)}getSuspendInfo(){const e=super.getSuspendInfo(),t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return t&&t.minScale&&t.maxScale&&t.minScale<t.maxScale&&(e.outsideScaleRange=!0),e}};return(0,a._)([(0,n.Cb)()],t.prototype,"view",void 0),(0,a._)([(0,n.Cb)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,a._)([(0,o.j)("esri.views.3d.layers.LayerView3D")],t),t}},77385:(e,t,i)=>{i.d(t,{r:()=>p});var a=i(27366),r=i(10064),l=i(94172),s=i(49861),n=(i(93169),i(32718),i(84936),i(69912)),o=i(20488),h=i(58890),d=i(53379);const p=e=>{let t=class extends e{get imageFormatIsOpaque(){return!1}get fullExtent(){return this.layer.fullExtent}get isOpaque(){return this.fullOpacity>=1&&this.imageFormatIsOpaque}get dataScaleRange(){const e=this.tileInfo.lods;let t=e[0].scale,i=e[e.length-1].scale;if("tilemapCache"in this.layer&&this.layer.tilemapCache){const{effectiveMinLOD:e,effectiveMaxLOD:a}=this.layer.tilemapCache;t=this.tileInfo.lodAt(e).scale,i=this.tileInfo.lodAt(a).scale}return{minScale:t,maxScale:i}}get dataLevelRange(){const{minScale:e,maxScale:t}=this.dataScaleRange;return this.levelRangeFromScaleRange(e,t)}get displayLevelRange(){const e=this.layer.minScale||this.dataScaleRange.minScale,t=this.layer.maxScale||this.dataScaleRange.maxScale,i=this.levelRangeFromScaleRange(e,t);return this.layer.maxScale&&i.maxLevel++,i}get performanceInfo(){return new o.W(this.view.basemapTerrain.getUsedMemoryForLayerView(this))}getTileUrl(e,t,i){return this.layer.getTileUrl(e,t,i)}_addTilingSchemeMatchPromise(){if(null==this.fullExtent)return this.addResolvingPromise(Promise.reject(new r.Z("tilingscheme:extent-not-defined","This layer doesn't define a fullExtent.")));const e=this._getTileInfoSupportError(this.tileInfo,this.fullExtent);if(e)return this.addResolvingPromise(Promise.reject(e));const t=(0,l.N1)((()=>this.view?.basemapTerrain?.tilingSchemeLocked)).then((()=>{const e=this.view.basemapTerrain.tilingScheme,t=this._getTileInfoCompatibilityError(this.tileInfo,e);if(t)throw t}));this.addResolvingPromise(t)}_getTileInfoSupportError(e,t){const i=(0,d.er)(e,t,this.view.spatialReference,this.view.state.viewingMode);if(i){const e={layer:this.layer,error:i};let t;switch(i.name){case"tilingscheme:spatial-reference-mismatch":case"tilingscheme:global-unsupported-spatial-reference":case"tilingscheme:local-unsupported-spatial-reference":t=new r.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",e);break;default:t=new r.Z("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",e)}return t}return null}_getTileInfoCompatibilityError(e,t){return null!=e&&t.compatibleWith(e)?null:new r.Z("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface")}levelRangeFromScaleRange(e,t){const i={minLevel:0,maxLevel:1/0},a=this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.tilingScheme;if(!a)return i;const r=a.levels[0],l=e=>{const t=Math.log(r.scale/e)/Math.LN2;return.5-Math.abs(.5-t%1)<1e-9?Math.round(t):Math.ceil(t)};return null!=e&&e>0&&(i.minLevel=Math.max(0,l(e))),null!=t&&t>0&&(i.maxLevel=Math.max(0,l(t))),i}isUpdating(){return!!(this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.updating)}};return(0,a._)([(0,s.Cb)({readOnly:!0})],t.prototype,"imageFormatIsOpaque",null),(0,a._)([(0,s.Cb)({readOnly:!0})],t.prototype,"updating",void 0),(0,a._)([(0,s.Cb)(h.q)],t.prototype,"updatingProgress",void 0),(0,a._)([(0,s.Cb)(h.V)],t.prototype,"updatingProgressValue",void 0),(0,a._)([(0,s.Cb)()],t.prototype,"fullExtent",null),(0,a._)([(0,s.Cb)({readOnly:!0})],t.prototype,"isOpaque",null),(0,a._)([(0,s.Cb)()],t.prototype,"dataScaleRange",null),(0,a._)([(0,s.Cb)({readOnly:!0})],t.prototype,"dataLevelRange",null),(0,a._)([(0,s.Cb)({readOnly:!0})],t.prototype,"displayLevelRange",null),(0,a._)([(0,s.Cb)()],t.prototype,"layer",void 0),t=(0,a._)([(0,n.j)("esri.views.3d.layers.TiledLayerView3D")],t),t}},15421:(e,t,i)=>{i.r(t),i.d(t,{default:()=>y});var a=i(27366),r=i(80987),l=i(32718),s=i(94172),n=i(49861),o=(i(93169),i(84936),i(69912)),h=i(37933),d=i(42069),p=i(77385),c=i(67581),u=i(13107);let g=class extends((0,u.Z)((0,p.r)((0,d.A)(c.Z)))){constructor(){super(...arguments),this.type="wmts-3d"}initialize(){this._getCompatibleTileInfoMatrixSet((e=>this._getTileInfoSupportError(e.tileInfo,e.fullExtent)));const e=(0,s.N1)((()=>this.view?.basemapTerrain?.tilingSchemeLocked)).then((()=>{const e=this._getCompatibleTileInfoMatrixSet((e=>this._getTileInfoError(e.tileInfo,e.fullExtent)));null!=e&&(null!==e.id&&this.layer.activeLayer.tileMatrixSetId!==e.id&&(this.layer.activeLayer.tileMatrixSetId=e.id),e.tileInfo&&(this.tileInfo=e.tileInfo),this.layer.fullExtent=e.fullExtent)}));this.addResolvingPromise(e),this.when((()=>this._postInitialize()))}get hasMixedImageFormats(){return!0}refresh(){this.emit("data-changed")}canResume(){if(!super.canResume())return!1;const e=this.layer.activeLayer.tileMatrixSet;return null!=e&&!this._getTileInfoError(e.tileInfo,e.fullExtent)}async doRefresh(){this.suspended||this.emit("data-changed")}_postInitialize(){this._updatingHandles.add((()=>this.layer?.activeLayer?.styleId),(()=>this.refresh())),this._updatingHandles.add((()=>this.layer?.activeLayer),(e=>{const t=this._getCompatibleTileInfoMatrixSet((e=>this._getTileInfoError(e.tileInfo,e.fullExtent)),!0);t&&null!=t.id&&e.tileMatrixSetId!==t.id&&(this.layer.activeLayer.tileMatrixSetId=t.id),this.notifyChange("suspended"),this.canResume()&&this.refresh()}))}_getCompatibleTileInfoMatrixSet(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const i=(0,h.mt)(this.layer);if(null!=i){if(r.Z.isCollection(i)){return i.find((i=>{const a=e(i);return null!=a&&(t?l.Z.getLogger(this).error("The selected tile matrix set is not compatible with the view",a):this.addResolvingPromise(Promise.reject(a))),null==a}))}const a=e(i);return null!=a&&(t?l.Z.getLogger(this).error("The selected tile matrix set is not compatible with the view",a):this.addResolvingPromise(Promise.reject(a))),i}return null}_getTileInfoError(e,t){return this._getTileInfoSupportError(e,t)||this._getTileInfoCompatibilityError(e,this.view.basemapTerrain.tilingScheme)}};(0,a._)([(0,n.Cb)({readOnly:!0})],g.prototype,"hasMixedImageFormats",null),(0,a._)([(0,n.Cb)()],g.prototype,"layer",void 0),(0,a._)([(0,n.Cb)()],g.prototype,"suspended",void 0),(0,a._)([(0,n.Cb)()],g.prototype,"tileInfo",void 0),g=(0,a._)([(0,o.j)("esri.views.3d.layers.WMTSLayerView3d")],g);const y=g},67581:(e,t,i)=>{i.d(t,{Z:()=>g});var a=i(27366),r=i(7138),l=i(91505),s=i(79056),n=i(32718),o=i(92026),h=i(67426),d=i(49861),p=(i(93169),i(84936),i(69912)),c=i(46634);let u=class extends((0,s.IG)((0,h.v)(l.Z.EventedMixin(r.Z)))){constructor(e){super(e),this._updatingHandles=new c.R,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer?.title||"no title";n.Z.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e)}}))}destroy(){this._updatingHandles=(0,o.SC)(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(e){this._overrideIfSome("visible",e)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const e=this.parent?.suspended?this.parent.suspendInfo:{};return this.view?.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,a._)([(0,d.Cb)()],u.prototype,"fullOpacity",null),(0,a._)([(0,d.Cb)()],u.prototype,"layer",void 0),(0,a._)([(0,d.Cb)()],u.prototype,"parent",void 0),(0,a._)([(0,d.Cb)({readOnly:!0})],u.prototype,"suspended",null),(0,a._)([(0,d.Cb)({readOnly:!0})],u.prototype,"suspendInfo",null),(0,a._)([(0,d.Cb)({readOnly:!0})],u.prototype,"legendEnabled",null),(0,a._)([(0,d.Cb)({type:Boolean,readOnly:!0})],u.prototype,"updating",null),(0,a._)([(0,d.Cb)({readOnly:!0})],u.prototype,"updatingProgress",null),(0,a._)([(0,d.Cb)()],u.prototype,"visible",null),(0,a._)([(0,d.Cb)()],u.prototype,"view",void 0),u=(0,a._)([(0,p.j)("esri.views.layers.LayerView")],u);const g=u},13107:(e,t,i)=>{i.d(t,{Z:()=>o});var a=i(27366),r=i(32718),l=i(66978),s=i(94172),n=(i(93169),i(84936),i(10064),i(69912));const o=e=>{let t=class extends e{initialize(){this.addHandles((0,s.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,l.D_)(e)||r.Z.getLogger(this).error(e)}))})),"RefreshableLayerView")}};return t=(0,a._)([(0,n.j)("esri.layers.mixins.RefreshableLayerView")],t),t}}}]);
//# sourceMappingURL=15421.64787dfd.chunk.js.map