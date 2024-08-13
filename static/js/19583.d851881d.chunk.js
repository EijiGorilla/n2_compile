"use strict";(self.webpackChunkn2_compile=self.webpackChunkn2_compile||[]).push([[19583],{19583:(e,r,t)=>{t.r(r),t.d(r,{default:()=>V});var i=t(27366),s=t(76200),a=t(62044),o=t(10064),n=t(93002),l=t(97642),y=t(66978),p=t(49861),h=t(25243),c=(t(84936),t(93169),t(38511)),u=t(69912),m=t(31201),d=t(25265),b=t(53866),f=t(82582),g=t(92975),v=t(30651),S=t(27961),_=t(6741),x=t(11936),I=t(6693),C=t(46671),w=t(6061),L=t(29598),O=t(71684),E=t(56811),P=t(18870),T=t(99063),D=t(45948),F=t(44041),N=t(83690),M=t(77990),R=t(58132),Z=t(26704),j=t(6701);let J=class extends((0,I.h)((0,T.n)((0,E.M)((0,P.x)((0,_.O)((0,x.Y)((0,w.q)((0,L.I)((0,l.R)((0,O.Q)((0,S.V)((0,C.N)(v.Z))))))))))))){constructor(){super(...arguments),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}load(e){const r=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(y.r9).then((()=>this._fetchService(r)))),Promise.resolve(this)}readImageFormat(e,r){const t=r.supportedImageFormatTypes;return t&&t.includes("PNG32")?"png32":"png24"}writeSublayers(e,r,t,i){if(!this.loaded||!e)return;const s=e.slice().reverse().flatten((e=>{let{sublayers:r}=e;return r&&r.toArray().reverse()})).toArray();let a=!1;if(this.capabilities?.operations.supportsExportMap&&this.capabilities?.exportMap?.supportsDynamicLayers){const e=(0,d.M9)(i.origin);if(e===d.s3.PORTAL_ITEM){const e=this.createSublayersForOrigin("service").sublayers;a=(0,R.QV)(s,e,d.s3.SERVICE)}else if(e>d.s3.PORTAL_ITEM){const e=this.createSublayersForOrigin("portal-item");a=(0,R.QV)(s,e.sublayers,(0,d.M9)(e.origin))}}const o=[],n={writeSublayerStructure:a,...i};let l=a;s.forEach((e=>{const r=e.write({},n);o.push(r),l=l||"user"===e.originOf("visible")})),o.some((e=>Object.keys(e).length>1))&&(r.layers=o),l&&(r.visibleLayers=s.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,r,t,i){const s=i?.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const a=new F.R({layer:this,floors:i?.floors,scale:(0,f.yZ)({extent:e,width:r})*s}),o=a.toJSON();a.destroy();const n=!i?.rotation||this.version<10.3?{}:{rotation:-i.rotation},l=e?.spatialReference,y=(0,g.B9)(l);o.dpi*=s;const p={};if(i?.timeExtent){const{start:e,end:r}=i.timeExtent.toJSON();p.time=e&&r&&e===r?""+e:`${e??"null"},${r??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(p.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:y,imageSR:y,size:r+","+t,...o,...n,...p}}async fetchImage(e,r,t,i){const{data:s}=await this._fetchImage("image",e,r,t,i);return s}async fetchImageBitmap(e,r,t,i){const{data:s,url:a}=await this._fetchImage("blob",e,r,t,i);return(0,N.g)(s,a,i?.signal)}async fetchRecomputedExtents(){const e={...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:r}=await(0,s.Z)(this.url,e),{extent:t,fullExtent:i,timeExtent:o}=r,n=t||i;return{fullExtent:n&&b.Z.fromJSON(n),timeExtent:o&&a.Z.fromJSON({start:o[0],end:o[1]})}}loadAll(){return(0,n.G)(this,(e=>{e(this.allSublayers)}))}serviceSupportsSpatialReference(e){return(0,Z.D)(this,e)}async _fetchImage(e,r,t,i,a){const n={responseType:e,signal:a?.signal??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(r,t,i,a),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},l=this.parsedUrl.path+"/export";if(null!=n.query?.dynamicLayers&&!this.capabilities?.exportMap?.supportsDynamicLayers)throw new o.Z("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:n.query});try{const{data:e}=await(0,s.Z)(l,n);return{data:e,url:l}}catch(p){if((0,y.D_)(p))throw p;throw new o.Z("mapimagelayer:image-fetch-error",`Unable to load image: ${l}`,{error:p})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:r,ssl:t}=await(0,s.Z)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});t&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r,this.read(r,{origin:"service",url:this.parsedUrl})}};(0,i._)([(0,p.Cb)((0,j.mi)("dateFieldsTimeReference"))],J.prototype,"dateFieldsTimeZone",void 0),(0,i._)([(0,p.Cb)({type:Boolean})],J.prototype,"datesInUnknownTimezone",void 0),(0,i._)([(0,p.Cb)()],J.prototype,"dpi",void 0),(0,i._)([(0,p.Cb)()],J.prototype,"gdbVersion",void 0),(0,i._)([(0,p.Cb)()],J.prototype,"imageFormat",void 0),(0,i._)([(0,c.r)("imageFormat",["supportedImageFormatTypes"])],J.prototype,"readImageFormat",null),(0,i._)([(0,p.Cb)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],J.prototype,"imageMaxHeight",void 0),(0,i._)([(0,p.Cb)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],J.prototype,"imageMaxWidth",void 0),(0,i._)([(0,p.Cb)()],J.prototype,"imageTransparency",void 0),(0,i._)([(0,p.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],J.prototype,"isReference",void 0),(0,i._)([(0,p.Cb)({json:{read:!1,write:!1}})],J.prototype,"labelsVisible",void 0),(0,i._)([(0,p.Cb)({type:["ArcGISMapServiceLayer"]})],J.prototype,"operationalLayerType",void 0),(0,i._)([(0,p.Cb)({json:{read:!1,write:!1}})],J.prototype,"popupEnabled",void 0),(0,i._)([(0,p.Cb)((0,j.mi)("preferredTimeReference"))],J.prototype,"preferredTimeZone",void 0),(0,i._)([(0,p.Cb)()],J.prototype,"sourceJSON",void 0),(0,i._)([(0,p.Cb)({json:{write:{ignoreOrigin:!0}}})],J.prototype,"sublayers",void 0),(0,i._)([(0,m.c)("sublayers",{layers:{type:[M.Z]},visibleLayers:{type:[h.z8]}})],J.prototype,"writeSublayers",null),(0,i._)([(0,p.Cb)({type:["show","hide","hide-children"]})],J.prototype,"listMode",void 0),(0,i._)([(0,p.Cb)({json:{read:!1},readOnly:!0,value:"map-image"})],J.prototype,"type",void 0),(0,i._)([(0,p.Cb)(D.HQ)],J.prototype,"url",void 0),J=(0,i._)([(0,u.j)("esri.layers.MapImageLayer")],J);const V=J},44041:(e,r,t)=>{t.d(r,{R:()=>u});var i=t(27366),s=t(7138),a=t(76672),o=t(49861),n=(t(93169),t(32718),t(84936),t(69912)),l=t(82582),y=t(45948),p=t(87072),h=t(58132);const c={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let u=class extends s.Z{constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const r=(0,p.f)(this.floors,e);return e.toExportImageJSON(r)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,h.FN)(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(c[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){const e=!!this.floors?.length,r=this.visibleSublayers.filter((r=>null!=r.definitionExpression||e&&null!=r.floorInfo));return r.length?JSON.stringify(r.reduce(((e,r)=>{const t=(0,p.f)(this.floors,r),i=(0,a._)(t,r.definitionExpression);return null!=i&&(e[r.id]=i),e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const r=this.layer.sublayers,t=this.scale,i=r=>{r.visible&&(0===t||(0,l.o2)(t,r.minScale,r.maxScale))&&(r.sublayers?r.sublayers.forEach(i):e.unshift(r))};r&&r.forEach(i);const s=this._get("visibleSublayers");return!s||s.length!==e.length||s.some(((r,t)=>e[t]!==r))?e:s}toJSON(){const e=this.layer;let r={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?r.dynamicLayers=this.dynamicLayers:r={...r,layers:this.layers,layerDefs:this.layerDefs},r}};(0,i._)([(0,o.Cb)({readOnly:!0})],u.prototype,"dynamicLayers",null),(0,i._)([(0,o.Cb)()],u.prototype,"floors",void 0),(0,i._)([(0,o.Cb)({readOnly:!0})],u.prototype,"hasDynamicLayers",null),(0,i._)([(0,o.Cb)()],u.prototype,"layer",null),(0,i._)([(0,o.Cb)({readOnly:!0})],u.prototype,"layers",null),(0,i._)([(0,o.Cb)({readOnly:!0})],u.prototype,"layerDefs",null),(0,i._)([(0,o.Cb)({type:Number})],u.prototype,"scale",void 0),(0,i._)([(0,o.Cb)(y.qG)],u.prototype,"timeExtent",void 0),(0,i._)([(0,o.Cb)({readOnly:!0})],u.prototype,"version",null),(0,i._)([(0,o.Cb)({readOnly:!0})],u.prototype,"visibleSublayers",null),u=(0,i._)([(0,n.j)("esri.layers.mixins.ExportImageParameters")],u)},87072:(e,r,t)=>{function i(e){const r=e.layer;return"floorInfo"in r&&r.floorInfo?.floorField&&"floors"in e.view?a(e.view.floors,r.floorInfo.floorField):null}function s(e,r){return"floorInfo"in r&&r.floorInfo?.floorField?a(e,r.floorInfo.floorField):null}function a(e,r){if(!e?.length)return null;const t=e.filter((e=>""!==e)).map((e=>`'${e}'`));return t.push("''"),`${r} IN (${t.join(",")}) OR ${r} IS NULL`}t.d(r,{c:()=>i,f:()=>s})}}]);
//# sourceMappingURL=19583.d851881d.chunk.js.map