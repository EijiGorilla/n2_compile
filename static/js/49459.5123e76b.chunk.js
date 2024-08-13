"use strict";(self.webpackChunkn2_compile=self.webpackChunkn2_compile||[]).push([[49459],{49459:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Se});var s=r(27366),i=r(80987),o=r(77178),a=r(10064),l=r(84652),n=r(93002),p=r(32718),y=r(97642),d=r(66978),u=r(35995),c=r(49861),h=(r(93169),r(38511)),b=r(69912),g=r(78952),f=r(30651),v=r(59147),m=r(15801),_=r(27961),w=r(11936),S=r(46671),C=r(6061),j=r(29598),O=r(56811),x=r(81118),I=r(84076),L=r(46784),F=r(71907);r(84936);let T=class extends L.wq{constructor(){super(...arguments),this.type=null}};(0,s._)([(0,c.Cb)({type:String,readOnly:!0,json:{write:!0}})],T.prototype,"type",void 0),T=(0,s._)([(0,b.j)("esri.layers.support.BuildingFilterAuthoringInfo")],T);const Z=T;var q;let B=q=class extends L.wq{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new q({filterType:this.filterType,filterValues:(0,l.d9)(this.filterValues)})}};(0,s._)([(0,c.Cb)({type:String,json:{write:!0}})],B.prototype,"filterType",void 0),(0,s._)([(0,c.Cb)({type:[String],json:{write:!0}})],B.prototype,"filterValues",void 0),B=q=(0,s._)([(0,b.j)("esri.layers.support.BuildingFilterAuthoringInfoType")],B);const A=B;var E;const P=i.Z.ofType(A);let R=E=class extends L.wq{clone(){return new E({filterTypes:(0,l.d9)(this.filterTypes)})}};(0,s._)([(0,c.Cb)({type:P,json:{write:!0}})],R.prototype,"filterTypes",void 0),R=E=(0,s._)([(0,b.j)("esri.layers.support.BuildingFilterAuthoringInfoBlock")],R);const N=R;var k;const M=i.Z.ofType(N);let U=k=class extends Z{constructor(){super(...arguments),this.type="checkbox"}clone(){return new k({filterBlocks:(0,l.d9)(this.filterBlocks)})}};(0,s._)([(0,c.Cb)({type:["checkbox"]})],U.prototype,"type",void 0),(0,s._)([(0,c.Cb)({type:M,json:{write:!0}})],U.prototype,"filterBlocks",void 0),U=k=(0,s._)([(0,b.j)("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],U);const Q=U;let V=class extends L.wq{};(0,s._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],V.prototype,"type",void 0),V=(0,s._)([(0,b.j)("esri.layers.support.BuildingFilterMode")],V);const D=V;var K;let J=K=class extends D{constructor(){super(...arguments),this.type="solid"}clone(){return new K}};(0,s._)([(0,c.Cb)({type:["solid"],readOnly:!0,json:{write:!0}})],J.prototype,"type",void 0),J=K=(0,s._)([(0,b.j)("esri.layers.support.BuildingFilterModeSolid")],J);const G=J;var H,$=r(27135),z=r(68901);let X=H=class extends D{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new H({edges:(0,l.d9)(this.edges)})}};(0,s._)([(0,$.J)({wireFrame:"wire-frame"})],X.prototype,"type",void 0),(0,s._)([(0,c.Cb)(z.Z)],X.prototype,"edges",void 0),X=H=(0,s._)([(0,b.j)("esri.layers.support.BuildingFilterModeWireFrame")],X);const Y=X;var W;let ee=W=class extends D{constructor(){super(...arguments),this.type="x-ray"}clone(){return new W}};(0,s._)([(0,c.Cb)({type:["x-ray"],readOnly:!0,json:{write:!0}})],ee.prototype,"type",void 0),ee=W=(0,s._)([(0,b.j)("esri.layers.support.BuildingFilterModeXRay")],ee);const te=ee;var re;const se={nonNullable:!0,types:{key:"type",base:D,typeMap:{solid:G,"wire-frame":Y,"x-ray":te}},json:{read:e=>{switch(e?.type){case"solid":return G.fromJSON(e);case"wireFrame":return Y.fromJSON(e);case"x-ray":return te.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let ie=re=class extends L.wq{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new G,this.title=""}clone(){return new re({filterExpression:this.filterExpression,filterMode:(0,l.d9)(this.filterMode),title:this.title})}};(0,s._)([(0,c.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],ie.prototype,"filterExpression",void 0),(0,s._)([(0,c.Cb)(se)],ie.prototype,"filterMode",void 0),(0,s._)([(0,c.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],ie.prototype,"title",void 0),ie=re=(0,s._)([(0,b.j)("esri.layers.support.BuildingFilterBlock")],ie);const oe=ie;var ae;const le=i.Z.ofType(oe);let ne=ae=class extends L.wq{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=(0,F.DO)(),this.name=null}clone(){return new ae({description:this.description,filterBlocks:(0,l.d9)(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:(0,l.d9)(this.filterAuthoringInfo)})}};(0,s._)([(0,c.Cb)({type:String,json:{write:!0}})],ne.prototype,"description",void 0),(0,s._)([(0,c.Cb)({type:le,json:{write:{enabled:!0,isRequired:!0}}})],ne.prototype,"filterBlocks",void 0),(0,s._)([(0,c.Cb)({types:{key:"type",base:Z,typeMap:{checkbox:Q}},json:{read:e=>"checkbox"===e?.type?Q.fromJSON(e):null,write:!0}})],ne.prototype,"filterAuthoringInfo",void 0),(0,s._)([(0,c.Cb)({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],ne.prototype,"id",void 0),(0,s._)([(0,c.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],ne.prototype,"name",void 0),ne=ae=(0,s._)([(0,b.j)("esri.layers.support.BuildingFilter")],ne);const pe=ne;var ye=r(76200),de=r(54472),ue=r(67426);let ce=class extends L.wq{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};(0,s._)([(0,c.Cb)({type:String})],ce.prototype,"fieldName",void 0),(0,s._)([(0,c.Cb)({type:String})],ce.prototype,"modelName",void 0),(0,s._)([(0,c.Cb)({type:String})],ce.prototype,"label",void 0),(0,s._)([(0,c.Cb)({type:Number})],ce.prototype,"min",void 0),(0,s._)([(0,c.Cb)({type:Number})],ce.prototype,"max",void 0),(0,s._)([(0,c.Cb)({json:{read:e=>Array.isArray(e)&&(e.every((e=>"string"==typeof e))||e.every((e=>"number"==typeof e)))?e.slice():null}})],ce.prototype,"mostFrequentValues",void 0),(0,s._)([(0,c.Cb)({type:[Number]})],ce.prototype,"subLayerIds",void 0),ce=(0,s._)([(0,b.j)("esri.layers.support.BuildingFieldStatistics")],ce);let he=class extends(de.Z.LoadableMixin((0,ue.v)(L.wq))){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(p.Z.getLogger(this).error("building summary statistics are not loaded"),null)}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}async _fetchService(e){const t=(await(0,ye.Z)(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service"})}};(0,s._)([(0,c.Cb)({constructOnly:!0,type:String})],he.prototype,"url",void 0),(0,s._)([(0,c.Cb)({readOnly:!0,type:[ce],json:{read:{source:"summary"}}})],he.prototype,"fields",null),he=(0,s._)([(0,b.j)("esri.layers.support.BuildingSummaryStatistics")],he);const be=he;var ge=r(45948),fe=r(74509);const ve=i.Z.ofType(pe),me=(0,l.d9)(m.Z.sublayersProperty),_e=me.json?.origins;_e&&(_e["web-scene"]={type:[v.Z],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},_e["portal-item"]={type:[v.Z],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}});let we=class extends((0,x.Vt)((0,w.Y)((0,C.q)((0,j.I)((0,O.M)((0,y.R)((0,S.N)((0,_.V)(f.Z))))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new o.Z({getCollections:()=>[this.sublayers],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this._sublayerOverrides=null,this.filters=new ve,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.legendEnabled=!0,this.type="building-scene"}normalizeCtorArgs(e){return"string"==typeof e?{url:e}:e??{}}destroy(){this.allSublayers.destroy()}readSublayers(e,t,r){const s=m.Z.readSublayers(e,t,r);return m.Z.forEachSublayer(s,(e=>e.layer=this)),this._sublayerOverrides&&(this.applySublayerOverrides(s,this._sublayerOverrides),this._sublayerOverrides=null),s}applySublayerOverrides(e,t){let{overrides:r,context:s}=t;m.Z.forEachSublayer(e,(e=>e.read(r.get(e.id),s)))}readSublayerOverrides(e,t){const r=new Map;for(const s of e)null!=s&&"object"==typeof s&&"number"==typeof s.id?r.set(s.id,s):t.messages?.push(new a.Z("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:s}));return{overrides:r,context:t}}writeSublayerOverrides(e,t,r){const s=[];m.Z.forEachSublayer(this.sublayers,(e=>{const t=e.write({},r);Object.keys(t).length>1&&s.push(t)})),s.length>0&&(t.sublayers=s)}writeUnappliedOverrides(e,t){t.sublayers=[],e.overrides.forEach((e=>{t.sublayers.push((0,l.d9)(e))}))}write(e,t){return e=super.write(e,t),!t||"web-scene"!==t.origin&&"portal-item"!==t.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,t):this._sublayerOverrides&&this.writeUnappliedOverrides(this._sublayerOverrides,e)),e}read(e,t){if(super.read(e,t),t&&("web-scene"===t.origin||"portal-item"===t.origin)&&null!=e&&Array.isArray(e.sublayers)){const r=this.readSublayerOverrides(e.sublayers,t);this.sublayers?this.applySublayerOverrides(this.sublayers,r):this._sublayerOverrides=r}}readSummaryStatistics(e,t){if("string"==typeof t.statisticsHRef){const e=(0,u.v_)(this.parsedUrl?.path,t.statisticsHRef);return new be({url:e})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const t=null!=e?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(d.r9).then((()=>this._fetchService(t))).then((()=>this._fetchAssociatedFeatureService(t)));return this.addResolvingPromise(r),Promise.resolve(this)}loadAll(){return(0,n.G)(this,(e=>{m.Z.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)})),this.summaryStatistics&&e(this.summaryStatistics)}))}async saveAs(e,t){return this._debouncedSaveOperations(x.xp.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(x.xp.SAVE,e)}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new a.Z("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}async _fetchAssociatedFeatureService(e){try{const{portalItem:t}=await(0,I.w)(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:e});this.associatedFeatureServiceItem=t}catch(t){p.Z.getLogger(this).warn("Associated feature service item could not be loaded",t)}}_validateElevationInfo(){const e=this.elevationInfo,t="Building scene layers";(0,fe.LR)(p.Z.getLogger(this),(0,fe.Uy)(t,"absolute-height",e)),(0,fe.LR)(p.Z.getLogger(this),(0,fe.kf)(t,e))}};(0,s._)([(0,c.Cb)({type:["BuildingSceneLayer"]})],we.prototype,"operationalLayerType",void 0),(0,s._)([(0,c.Cb)({readOnly:!0})],we.prototype,"allSublayers",void 0),(0,s._)([(0,c.Cb)(me)],we.prototype,"sublayers",void 0),(0,s._)([(0,h.r)("service","sublayers")],we.prototype,"readSublayers",null),(0,s._)([(0,c.Cb)({type:ve,nonNullable:!0,json:{write:!0}})],we.prototype,"filters",void 0),(0,s._)([(0,c.Cb)({type:String,json:{write:!0}})],we.prototype,"activeFilterId",void 0),(0,s._)([(0,c.Cb)({readOnly:!0,type:be})],we.prototype,"summaryStatistics",void 0),(0,s._)([(0,h.r)("summaryStatistics",["statisticsHRef"])],we.prototype,"readSummaryStatistics",null),(0,s._)([(0,c.Cb)({type:[String],json:{read:!1}})],we.prototype,"outFields",void 0),(0,s._)([(0,c.Cb)(ge.vg)],we.prototype,"fullExtent",void 0),(0,s._)([(0,c.Cb)(ge.rn)],we.prototype,"legendEnabled",void 0),(0,s._)([(0,c.Cb)({type:["show","hide","hide-children"]})],we.prototype,"listMode",void 0),(0,s._)([(0,c.Cb)((0,ge.Lx)(g.Z))],we.prototype,"spatialReference",void 0),(0,s._)([(0,c.Cb)(ge.PV)],we.prototype,"elevationInfo",null),(0,s._)([(0,c.Cb)({json:{read:!1},readOnly:!0})],we.prototype,"type",void 0),(0,s._)([(0,c.Cb)()],we.prototype,"associatedFeatureServiceItem",void 0),we=(0,s._)([(0,b.j)("esri.layers.BuildingSceneLayer")],we);const Se=we},59147:(e,t,r)=>{r.d(t,{Z:()=>P});var s=r(27366),i=r(52639),o=r(44055),a=(r(94931),r(15126),r(98689),r(57823),r(32066),r(49018),r(34999),r(28189),r(9014),r(40464)),l=r(76200),n=r(10064),p=r(43404),y=r(54472),d=r(32718),u=r(67426),c=r(49861),h=(r(93169),r(84936),r(27135)),b=r(38511),g=r(69912),f=r(53866),v=r(78952),m=r(64326),_=r(58550),w=r(41992),S=r(96978),C=r(45948),j=r(25610),O=r(52410),x=r(37270),I=r(30494),L=r(34207),F=r(21149),T=r(81085),Z=r(64575),q=r(44011),B=r(24405);const A=(0,j.v)();let E=class extends((0,w.G)(y.Z.LoadableMixin((0,u.v)(_.Z)))){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl?.path}/sublayers/${this.id}`,query:this.layer.parsedUrl?.query}:{path:""}}get fieldsIndex(){return new O.Z(this.fields)}readAssociatedLayer(e,t){const r=this.layer.associatedFeatureServiceItem,s=t.associatedLayerID;return null!=r&&"number"==typeof s?new m.default({portalItem:r,customParameters:this.customParameters,layerId:s}):null}get objectIdField(){if(null!=this.fields)for(const e of this.fields)if("oid"===e.type)return e.name;return null}get displayField(){return null!=this.associatedLayer?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get customParameters(){return this.layer.customParameters}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const t=null!=e?e.signal:null,r=this._fetchService(t).then((()=>{this.indexInfo=(0,I.T)(this.parsedUrl.path,this.rootNode,this.nodePages,this.customParameters,this.apiKey,d.Z.getLogger(this),t)}));return this.addResolvingPromise(r),Promise.resolve(this)}createPopupTemplate(e){return(0,T.eZ)(this,e)}async _fetchService(e){const t=(await(0,l.Z)(this.parsedUrl.path,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){const r=this.getFeatureType(t?.feature)?.domains?.[e];return r&&"inherited"!==r.type?r:this.getField(e)?.domain??null}getFeatureType(e){return e&&null!=this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){return null!=this.associatedLayer?this.associatedLayer.types??[]:[]}get typeIdField(){return null!=this.associatedLayer?this.associatedLayer.typeIdField:null}get geometryType(){return"3d-object"===this.layerType?"mesh":"point"}get profile(){return"3d-object"===this.layerType?"mesh-pyramids":"points"}get capabilities(){const e=null!=this.associatedLayer&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:S.C,{query:t,data:{supportsZ:r,supportsM:s,isVersioned:i}}=e;return{query:t,data:{supportsZ:r,supportsM:s,isVersioned:i}}}createQuery(){const e=new F.Z;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=this.layer,t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}async queryCachedAttributes(e,t){const r=(0,x.Lk)(this.fieldsIndex,await(0,B.e7)(this,(0,B.V5)(this)));return(0,q.xe)(this.parsedUrl.path,this.attributeStorageInfo,e,t,r,this.apiKey,this.customParameters)}async queryCachedFeature(e,t){const r=await this.queryCachedAttributes(e,[t]);if(!r||0===r.length)throw new n.Z("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const s=new i.Z;return s.attributes=r[0],s.layer=this,s.sourceLayer=this,s}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:null!=this.associatedLayer}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return null!=e&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),null==this.associatedLayer)throw new n.Z("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new n.Z("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};(0,s._)([(0,c.Cb)({readOnly:!0})],E.prototype,"parsedUrl",null),(0,s._)([(0,c.Cb)({type:L.U4,readOnly:!0})],E.prototype,"nodePages",void 0),(0,s._)([(0,c.Cb)({type:[L.QI],readOnly:!0})],E.prototype,"materialDefinitions",void 0),(0,s._)([(0,c.Cb)({type:[L.Yh],readOnly:!0})],E.prototype,"textureSetDefinitions",void 0),(0,s._)([(0,c.Cb)({type:[L.H3],readOnly:!0})],E.prototype,"geometryDefinitions",void 0),(0,s._)([(0,c.Cb)({readOnly:!0})],E.prototype,"serviceUpdateTimeStamp",void 0),(0,s._)([(0,c.Cb)({readOnly:!0})],E.prototype,"store",void 0),(0,s._)([(0,c.Cb)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],E.prototype,"rootNode",void 0),(0,s._)([(0,c.Cb)({readOnly:!0})],E.prototype,"attributeStorageInfo",void 0),(0,s._)([(0,c.Cb)(A.fields)],E.prototype,"fields",void 0),(0,s._)([(0,c.Cb)({readOnly:!0})],E.prototype,"fieldsIndex",null),(0,s._)([(0,c.Cb)({readOnly:!0,type:m.default})],E.prototype,"associatedLayer",void 0),(0,s._)([(0,b.r)("service","associatedLayer",["associatedLayerID"])],E.prototype,"readAssociatedLayer",null),(0,s._)([(0,c.Cb)(A.outFields)],E.prototype,"outFields",void 0),(0,s._)([(0,c.Cb)({type:String,readOnly:!0})],E.prototype,"objectIdField",null),(0,s._)([(0,c.Cb)({readOnly:!0,type:String,json:{read:!1}})],E.prototype,"displayField",null),(0,s._)([(0,c.Cb)({readOnly:!0,type:String})],E.prototype,"apiKey",null),(0,s._)([(0,c.Cb)({readOnly:!0,type:String})],E.prototype,"customParameters",null),(0,s._)([(0,c.Cb)({readOnly:!0,type:f.Z})],E.prototype,"fullExtent",null),(0,s._)([(0,c.Cb)({readOnly:!0,type:v.Z})],E.prototype,"spatialReference",null),(0,s._)([(0,c.Cb)({readOnly:!0})],E.prototype,"version",null),(0,s._)([(0,c.Cb)({readOnly:!0,type:Z.Z})],E.prototype,"elevationInfo",null),(0,s._)([(0,c.Cb)({readOnly:!0,type:Number})],E.prototype,"minScale",null),(0,s._)([(0,c.Cb)({readOnly:!0,type:Number})],E.prototype,"maxScale",null),(0,s._)([(0,c.Cb)({readOnly:!0,type:Number})],E.prototype,"effectiveScaleRange",null),(0,s._)([(0,c.Cb)({type:["hide","show"],json:{write:!0}})],E.prototype,"listMode",void 0),(0,s._)([(0,c.Cb)({types:a.o,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],E.prototype,"renderer",void 0),(0,s._)([(0,c.Cb)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],E.prototype,"definitionExpression",void 0),(0,s._)([(0,c.Cb)(C.C_)],E.prototype,"popupEnabled",void 0),(0,s._)([(0,c.Cb)({type:o.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],E.prototype,"popupTemplate",void 0),(0,s._)([(0,c.Cb)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],E.prototype,"normalReferenceFrame",void 0),(0,s._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],E.prototype,"defaultPopupTemplate",null),(0,s._)([(0,c.Cb)()],E.prototype,"types",null),(0,s._)([(0,c.Cb)()],E.prototype,"typeIdField",null),(0,s._)([(0,c.Cb)({json:{write:!1}}),(0,h.J)(new p.X({"3DObject":"3d-object",Point:"point"}))],E.prototype,"layerType",void 0),(0,s._)([(0,c.Cb)()],E.prototype,"geometryType",null),(0,s._)([(0,c.Cb)()],E.prototype,"profile",null),(0,s._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],E.prototype,"capabilities",null),E=(0,s._)([(0,g.j)("esri.layers.buildingSublayers.BuildingComponentSublayer")],E);const P=E},15801:(e,t,r)=>{r.d(t,{Z:()=>g});var s,i=r(27366),o=r(80987),a=r(93002),l=r(51370),n=r(49861),p=(r(93169),r(32718),r(84936),r(69912)),y=r(59147),d=r(58550);const u={type:o.Z,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:c}}},read:!1}};function c(e,t,r){if(e&&Array.isArray(e))return new o.Z(e.map((e=>{const t=function(e){return"group"===e.layerType?h:y.Z}(e);if(t){const s=new t;return s.read(e,r),s}return r?.messages&&e&&r.messages.push(new l.Z("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r})),null})))}let h=s=class extends d.Z{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return(0,a.w)(this,(e=>s.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)}))))}};var b;(0,i._)([(0,n.Cb)({type:["hide","show","hide-children"],json:{write:!0}})],h.prototype,"listMode",void 0),(0,i._)([(0,n.Cb)(u)],h.prototype,"sublayers",void 0),h=s=(0,i._)([(0,p.j)("esri.layers.buildingSublayers.BuildingGroupSublayer")],h),(b=h||(h={})).sublayersProperty=u,b.readSublayers=c,b.forEachSublayer=function e(t,r){t.forEach((t=>{r(t),"building-group"===t.type&&e(t.sublayers,r)}))};const g=h},58550:(e,t,r)=>{r.d(t,{Z:()=>u});var s=r(27366),i=r(79056),o=r(97642),a=r(49861),l=r(25243),n=(r(84936),r(93169),r(38511)),p=r(69912),y=r(45948);let d=class extends((0,i.IG)(o.w)){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.legendEnabled=!0,this.visible=!0,this.opacity=1}readTitle(e,t){return"string"==typeof t.alias?t.alias:"string"==typeof t.name?t.name:""}readIdOnlyOnce(e){return-1!==this.id?this.id:"number"==typeof e?e:-1}};(0,s._)([(0,a.Cb)({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],d.prototype,"title",void 0),(0,s._)([(0,n.r)("service","title",["alias","name"])],d.prototype,"readTitle",null),(0,s._)([(0,a.Cb)()],d.prototype,"layer",void 0),(0,s._)([(0,a.Cb)({type:l.z8,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],d.prototype,"id",void 0),(0,s._)([(0,n.r)("service","id")],d.prototype,"readIdOnlyOnce",null),(0,s._)([(0,a.Cb)((0,y.Lx)(String))],d.prototype,"modelName",void 0),(0,s._)([(0,a.Cb)((0,y.Lx)(Boolean))],d.prototype,"isEmpty",void 0),(0,s._)([(0,a.Cb)({type:Boolean,nonNullable:!0})],d.prototype,"legendEnabled",void 0),(0,s._)([(0,a.Cb)({type:Boolean,json:{name:"visibility",write:!0}})],d.prototype,"visible",void 0),(0,s._)([(0,a.Cb)({type:Number,json:{write:!0}})],d.prototype,"opacity",void 0),d=(0,s._)([(0,p.j)("esri.layers.buildingSublayers.BuildingSublayer")],d);const u=d}}]);
//# sourceMappingURL=49459.5123e76b.chunk.js.map