"use strict";(self.webpackChunkn2_compile=self.webpackChunkn2_compile||[]).push([[1863],{41863:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var i=r(27366),a=r(10064),s=r(49861),l=(r(25243),r(63780),r(93169),r(69912)),o=r(79803),n=r(37933),p=r(28554),c=r(86925);let u=class extends c.Z{constructor(){super(...arguments),this.type="feature-3d",this.direct3DObjectFeatureLayerDisplayEnabled=(0,p.Vi)()}initialize(){var e;const{layer:t,view:r}=this;null!==(e=(0,n.S1)(t))&&void 0!==e&&e.operations.supportsQuery||this.addResolvingPromise(Promise.reject(new a.Z("featurelayerview:query-not-supported","layer view requires a layer with query capability",{layer:t}))),null!=t.infoFor3D&&(this.direct3DObjectFeatureLayerDisplayEnabled?this._set("suspendResumeExtentMode","computed"):this.addResolvingPromise(Promise.reject(new a.Z("featurelayerview3d:unsupported-geometry-type","Unsupported geometry type ".concat(t.geometryType))))),"mesh"!==t.geometryType||(0,o.canProjectWithoutEngine)(t.spatialReference,r.spatialReference)||this.addResolvingPromise(Promise.reject(new a.Z("layerview:spatial-reference-incompatible","The spatial references of the feature layer is incompatible with the spatial reference of the view")))}get featureSpatialReference(){var e;return null===(e=this.view.featureTiles)||void 0===e||null===(e=e.tilingScheme)||void 0===e?void 0:e.spatialReference}};(0,i._)([(0,s.Cb)({constructOnly:!0})],u.prototype,"direct3DObjectFeatureLayerDisplayEnabled",void 0),(0,i._)([(0,s.Cb)()],u.prototype,"layer",void 0),u=(0,i._)([(0,l.j)("esri.views.3d.layers.FeatureLayerView3D")],u);const y=u}}]);
//# sourceMappingURL=1863.6af8b1f2.chunk.js.map