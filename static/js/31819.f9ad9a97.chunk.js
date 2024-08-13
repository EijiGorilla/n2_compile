"use strict";(self.webpackChunkn2_compile=self.webpackChunkn2_compile||[]).push([[31819],{42069:(e,t,i)=>{i.d(t,{A:()=>p});var a=i(27366),l=i(42537),r=i(66978),s=i(94172),n=i(49861),o=(i(93169),i(32718),i(84936),i(69912)),h=i(5354);const p=e=>{let t=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(e){super.postscript(e),(0,h.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,t=e.signal;this.addHandles((0,l.kB)((()=>e.abort()))),await(0,s.N1)((()=>this.view.defaultsFromMap?.heightModelInfoReady),t),(0,r.k_)(t);const i=(0,h.Wt)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!e?.minScale||!e.maxScale||e.minScale>=e.maxScale)}getSuspendInfo(){const e=super.getSuspendInfo(),t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return t&&t.minScale&&t.maxScale&&t.minScale<t.maxScale&&(e.outsideScaleRange=!0),e}};return(0,a._)([(0,n.Cb)()],t.prototype,"view",void 0),(0,a._)([(0,n.Cb)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,a._)([(0,o.j)("esri.views.3d.layers.LayerView3D")],t),t}},31819:(e,t,i)=>{i.r(t),i.d(t,{default:()=>y});var a=i(27366),l=i(10064),r=i(49861),s=(i(93169),i(32718),i(84936),i(69912)),n=i(79803),o=i(42069),h=i(77385),p=i(67581),d=i(13107),u=i(32645),c=i(45008);let g=class extends((0,d.Z)((0,h.r)((0,o.A)(p.Z)))){constructor(){super(...arguments),this.type="tile-3d",this._popupHighlightHelper=null}get imageFormatIsOpaque(){return"jpg"===this.layer.tileInfo.format}get hasMixedImageFormats(){return"mixed"===this.layer.tileInfo.format}get tileInfo(){return this.layer.tileInfo}initialize(){if("web-tile"===this.layer.type){const e=this.layer.fullExtent?.spatialReference,t=this.layer.tileInfo?.spatialReference;if(null==e||null==t||!(0,n.canProjectWithoutEngine)(e,t)){const e="defaults"===this.layer.originOf("fullExtent")||null==this.layer.fullExtent?"SceneView requires fullExtent to be specified by the user on WebTileLayer":"SceneView requires fullExtent to be specified in the same spatial reference as tileInfo on WebTileLayer";this.addResolvingPromise(Promise.reject(new l.Z("layerview:incompatible-fullextent",e)))}}(0,u.Uf)(this,this.layer)&&(this._popupHighlightHelper=new u.VF({createFetchPopupFeaturesQueryGeometry:(e,t)=>(0,c.K)(e,t,this.view),layerView:this,updatingHandles:this._updatingHandles})),this._addTilingSchemeMatchPromise()}destroy(){this._popupHighlightHelper?.destroy()}async fetchPopupFeaturesAtLocation(e,t){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeaturesAtLocation(e,t):[]}async doRefresh(){this.suspended||this.emit("data-changed")}};(0,a._)([(0,r.Cb)()],g.prototype,"imageFormatIsOpaque",null),(0,a._)([(0,r.Cb)()],g.prototype,"hasMixedImageFormats",null),(0,a._)([(0,r.Cb)()],g.prototype,"layer",void 0),(0,a._)([(0,r.Cb)()],g.prototype,"tileInfo",null),g=(0,a._)([(0,s.j)("esri.views.3d.layers.TileLayerView3D")],g);const y=g},77385:(e,t,i)=>{i.d(t,{r:()=>d});var a=i(27366),l=i(10064),r=i(94172),s=i(49861),n=(i(93169),i(32718),i(84936),i(69912)),o=i(20488),h=i(58890),p=i(53379);const d=e=>{let t=class extends e{get imageFormatIsOpaque(){return!1}get fullExtent(){return this.layer.fullExtent}get isOpaque(){return this.fullOpacity>=1&&this.imageFormatIsOpaque}get dataScaleRange(){const e=this.tileInfo.lods;let t=e[0].scale,i=e[e.length-1].scale;if("tilemapCache"in this.layer&&this.layer.tilemapCache){const{effectiveMinLOD:e,effectiveMaxLOD:a}=this.layer.tilemapCache;t=this.tileInfo.lodAt(e).scale,i=this.tileInfo.lodAt(a).scale}return{minScale:t,maxScale:i}}get dataLevelRange(){const{minScale:e,maxScale:t}=this.dataScaleRange;return this.levelRangeFromScaleRange(e,t)}get displayLevelRange(){const e=this.layer.minScale||this.dataScaleRange.minScale,t=this.layer.maxScale||this.dataScaleRange.maxScale,i=this.levelRangeFromScaleRange(e,t);return this.layer.maxScale&&i.maxLevel++,i}get performanceInfo(){return new o.W(this.view.basemapTerrain.getUsedMemoryForLayerView(this))}getTileUrl(e,t,i){return this.layer.getTileUrl(e,t,i)}_addTilingSchemeMatchPromise(){if(null==this.fullExtent)return this.addResolvingPromise(Promise.reject(new l.Z("tilingscheme:extent-not-defined","This layer doesn't define a fullExtent.")));const e=this._getTileInfoSupportError(this.tileInfo,this.fullExtent);if(e)return this.addResolvingPromise(Promise.reject(e));const t=(0,r.N1)((()=>this.view?.basemapTerrain?.tilingSchemeLocked)).then((()=>{const e=this.view.basemapTerrain.tilingScheme,t=this._getTileInfoCompatibilityError(this.tileInfo,e);if(t)throw t}));this.addResolvingPromise(t)}_getTileInfoSupportError(e,t){const i=(0,p.er)(e,t,this.view.spatialReference,this.view.state.viewingMode);if(i){const e={layer:this.layer,error:i};let t;switch(i.name){case"tilingscheme:spatial-reference-mismatch":case"tilingscheme:global-unsupported-spatial-reference":case"tilingscheme:local-unsupported-spatial-reference":t=new l.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",e);break;default:t=new l.Z("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",e)}return t}return null}_getTileInfoCompatibilityError(e,t){return null!=e&&t.compatibleWith(e)?null:new l.Z("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface")}levelRangeFromScaleRange(e,t){const i={minLevel:0,maxLevel:1/0},a=this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.tilingScheme;if(!a)return i;const l=a.levels[0],r=e=>{const t=Math.log(l.scale/e)/Math.LN2;return.5-Math.abs(.5-t%1)<1e-9?Math.round(t):Math.ceil(t)};return null!=e&&e>0&&(i.minLevel=Math.max(0,r(e))),null!=t&&t>0&&(i.maxLevel=Math.max(0,r(t))),i}isUpdating(){return!!(this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.updating)}};return(0,a._)([(0,s.Cb)({readOnly:!0})],t.prototype,"imageFormatIsOpaque",null),(0,a._)([(0,s.Cb)({readOnly:!0})],t.prototype,"updating",void 0),(0,a._)([(0,s.Cb)(h.q)],t.prototype,"updatingProgress",void 0),(0,a._)([(0,s.Cb)(h.V)],t.prototype,"updatingProgressValue",void 0),(0,a._)([(0,s.Cb)()],t.prototype,"fullExtent",null),(0,a._)([(0,s.Cb)({readOnly:!0})],t.prototype,"isOpaque",null),(0,a._)([(0,s.Cb)()],t.prototype,"dataScaleRange",null),(0,a._)([(0,s.Cb)({readOnly:!0})],t.prototype,"dataLevelRange",null),(0,a._)([(0,s.Cb)({readOnly:!0})],t.prototype,"displayLevelRange",null),(0,a._)([(0,s.Cb)()],t.prototype,"layer",void 0),t=(0,a._)([(0,n.j)("esri.views.3d.layers.TiledLayerView3D")],t),t}},67581:(e,t,i)=>{i.d(t,{Z:()=>g});var a=i(27366),l=i(7138),r=i(91505),s=i(79056),n=i(32718),o=i(92026),h=i(67426),p=i(49861),d=(i(93169),i(84936),i(69912)),u=i(46634);let c=class extends((0,s.IG)((0,h.v)(r.Z.EventedMixin(l.Z)))){constructor(e){super(e),this._updatingHandles=new u.R,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer?.title||"no title";n.Z.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e)}}))}destroy(){this._updatingHandles=(0,o.SC)(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(e){this._overrideIfSome("visible",e)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const e=this.parent?.suspended?this.parent.suspendInfo:{};return this.view?.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,a._)([(0,p.Cb)()],c.prototype,"fullOpacity",null),(0,a._)([(0,p.Cb)()],c.prototype,"layer",void 0),(0,a._)([(0,p.Cb)()],c.prototype,"parent",void 0),(0,a._)([(0,p.Cb)({readOnly:!0})],c.prototype,"suspended",null),(0,a._)([(0,p.Cb)({readOnly:!0})],c.prototype,"suspendInfo",null),(0,a._)([(0,p.Cb)({readOnly:!0})],c.prototype,"legendEnabled",null),(0,a._)([(0,p.Cb)({type:Boolean,readOnly:!0})],c.prototype,"updating",null),(0,a._)([(0,p.Cb)({readOnly:!0})],c.prototype,"updatingProgress",null),(0,a._)([(0,p.Cb)()],c.prototype,"visible",null),(0,a._)([(0,p.Cb)()],c.prototype,"view",void 0),c=(0,a._)([(0,d.j)("esri.views.layers.LayerView")],c);const g=c},13107:(e,t,i)=>{i.d(t,{Z:()=>o});var a=i(27366),l=i(32718),r=i(66978),s=i(94172),n=(i(93169),i(84936),i(10064),i(69912));const o=e=>{let t=class extends e{initialize(){this.addHandles((0,s.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,r.D_)(e)||l.Z.getLogger(this).error(e)}))})),"RefreshableLayerView")}};return t=(0,a._)([(0,n.j)("esri.layers.mixins.RefreshableLayerView")],t),t}}}]);
//# sourceMappingURL=31819.f9ad9a97.chunk.js.map