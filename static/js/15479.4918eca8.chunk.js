"use strict";(self.webpackChunkn2_compile=self.webpackChunkn2_compile||[]).push([[15479],{15479:(e,t,r)=>{r.r(t),r.d(t,{registerFunctions:()=>R});var n=r(42265),o=(r(59486),r(72741)),i=r(62357),a=r(22564),s=r(44715),l=r(93249),p=r(32238),u=r(79803),c=r(81753),d=r(7575),f=r(98995),h=r(45362),y=r(14725),w=r(5924),g=r(2736),m=r(11933),v=r(49074),b=r(81943),Z=r(78952);let S=null;async function _(e,t){const n=new f.default({portal:e,id:t});return await n.load(),null===S&&(S=await r.e(92848).then(r.bind(r,92848))),await S.fetchKnowledgeGraph(n.url)}function j(e,t,r,n,o){if(null===e)return null;if((0,s.c)(e)||(0,s.b)(e))return e;if((0,s.k)(e))return e.toJSDate();if((0,s.k)(e))return e.toJSDate();if((0,s.m)(e))return e.toStorageFormat();if((0,s.n)(e))return e.toStorageString();if((0,s.v)(e)){const i={};for(const a of e.keys())i[a]=j(e.field(a),t,r,n,o),i[a]instanceof p.Z&&o.push({container:i,indexer:a});return i}if((0,s.o)(e)){const i=e.map((e=>j(e,t,r,n,o)));for(let e=0;e<i.length;e++)i[e]instanceof p.Z&&o.push({container:i,indexer:e});return i}if((0,s.p)(e)){if(e.spatialReference.isWGS84)return e;if(e.spatialReference.isWebMercator&&t)return(0,c.Sx)(e);if(!t||!r)return e;throw new a.aV(n,a.rH.WrongSpatialReference,null)}}function G(e,t){if(!e)return null;const r={};for(const n in e)r[n]=x(e[n],t);return r}function x(e,t){return null===e?null:(0,s.o)(e)?e.map((e=>x(e,t))):e instanceof y.Z?{graphTypeName:e.typeName,id:e.id,graphType:"entity",properties:G(e.properties,t)}:e instanceof g.Z?{graphType:"object",properties:G(e.properties,t)}:e instanceof v.Z?{graphTypeName:e.typeName,id:e.id,graphType:"relationship",originId:e.originId??null,destinationId:e.destinationId??null,properties:G(e.properties,t)}:e instanceof m.Z?{graphType:"path",path:e.path?e.path.map((e=>x(e,t))):null}:(0,s.p)(e)?function(e,t){if(!e)return e;if(e.spatialReference.isWGS84&&t.spatialReference.isWebMercator)return(0,c.$)(e);if(e.spatialReference.equals(t.spatialReference))return e;throw new a.aV(t,a.rH.WrongSpatialReference,null)}(e,t):(0,s.c)(e)||(0,s.b)(e)||(0,s.a7)(e)?e:null}function R(e){"async"===e.mode&&(e.functions.knowledgegraphbyportalitem=function(t,r){return e.standardFunctionAsync(t,r,((e,n,i)=>{if((0,s.H)(i,2,2,t,r),null===i[0])throw new a.aV(t,a.rH.PortalRequired,r);if(i[0]instanceof o.Z){const e=(0,s.j)(i[1]);let r=null;return r=t.services?.portal?t.services.portal:d.Z.getDefault(),_((0,l._)(i[0],r),e)}if(!1===(0,s.c)(i[0]))throw new a.aV(t,a.rH.InvalidParameter,r);const p=(0,s.j)(i[0]);return _(t.services?.portal??d.Z.getDefault(),p)}))},e.signatures.push({name:"knowledgegraphbyportalitem",min:2,max:2}),e.functions.querygraph=function(t,o){return e.standardFunctionAsync(t,o,(async(e,l,p)=>{(0,s.H)(p,2,4,t,o);const c=p[0];if(!(0,s.w)(c))throw new a.aV(t,a.rH.InvalidParameter,o);const d=p[1];if(!(0,s.c)(d))throw new a.aV(t,a.rH.InvalidParameter,o);null===S&&(S=await r.e(92848).then(r.bind(r,92848)));let f=null;const y=(0,s.K)(p[2],null);if(!(y instanceof i.Z||null===y))throw new a.aV(t,a.rH.InvalidParameter,o);if(y){let e=[];f=j(y,!0,!1,t,e),e=e.filter((e=>!e.container[e.indexer].spatialReference.isWGS84)),e.length>0&&await async function(e){const t=n.default.geometryServiceUrl??"";if(!t){(0,u.isLoaded)()||await(0,u.load)();for(const t of e)t.container[t.indexer]=(0,u.project)(t.container[t.indexer],Z.Z.WGS84);return}const r=e.map((e=>e.container[e.indexer])),o=new b.Z({geometries:r,outSpatialReference:Z.Z.WGS84}),i=await(0,h.i)(t,o);for(let n=0;n<i.length;n++){const t=e[n];t.container[t.indexer]=i[n]}}(e)}const g=new w.Z({openCypherQuery:d,bindParameters:f});(c?.serviceDefinition?.currentVersion??11.3)>11.2&&(g.outputSpatialReference=t.spatialReference);const m=(await S.executeQueryStreaming(c,g)).resultRowsStream.getReader(),v=[];try{for(;;){const{done:e,value:r}=await m.read();if(e)break;if((0,s.o)(r))for(const n of r)v.push(x(n,t));else{const e=[];for(const n of r)e.push(x(r[n],t));v.push(e)}}}catch(_){throw _}return i.Z.convertJsonToArcade(v,(0,s.N)(t),!1,!0)}))},e.signatures.push({name:"querygraph",min:2,max:4}))}},93249:(e,t,r)=>{r.d(t,{_:()=>o});var n=r(7575);function o(e,t){return null===e?t:new n.Z({url:e.field("url")})}},14725:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(27366),o=(r(59486),r(49861)),i=(r(93169),r(32718),r(84936),r(69912)),a=r(25695),s=r(585);let l=class extends a.Z{constructor(e){super(e),this.layoutGeometry=null}};(0,n._)([(0,o.Cb)({type:s.Z,json:{write:!0}})],l.prototype,"layoutGeometry",void 0),l=(0,n._)([(0,i.j)("esri.rest.knowledgeGraph.Entity")],l);const p=l},25695:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(27366),o=r(49861),i=(r(93169),r(32718),r(84936),r(69912)),a=r(92364);let s=class extends a.Z{constructor(e){super(e),this.typeName=null,this.id=null}};(0,n._)([(0,o.Cb)({type:String,json:{write:!0}})],s.prototype,"typeName",void 0),(0,n._)([(0,o.Cb)({type:String,json:{write:!0}})],s.prototype,"id",void 0),s=(0,n._)([(0,i.j)("esri.rest.knowledgeGraph.GraphNamedObject")],s);const l=s},92364:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(27366),o=r(46784),i=r(49861),a=(r(93169),r(32718),r(84936),r(69912));let s=class extends o.wq{constructor(e){super(e),this.properties=null}};(0,n._)([(0,i.Cb)({json:{write:!0}})],s.prototype,"properties",void 0),s=(0,n._)([(0,a.j)("esri.rest.knowledgeGraph.GraphObject")],s);const l=s},5924:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(27366),o=r(49861),i=(r(93169),r(32718),r(84936),r(69912)),a=r(7138);let s=class extends a.Z{constructor(e){super(e),this.openCypherQuery=""}};(0,n._)([(0,o.Cb)()],s.prototype,"openCypherQuery",void 0),s=(0,n._)([(0,i.j)("esri.rest.knowledgeGraph.GraphQuery")],s);const l=s;let p=class extends l{constructor(e){super(e),this.bindParameters=null,this.bindGeometryQuantizationParameters=null,this.outputQuantizationParameters=null,this.outputSpatialReference=null}};(0,n._)([(0,o.Cb)()],p.prototype,"bindParameters",void 0),(0,n._)([(0,o.Cb)()],p.prototype,"bindGeometryQuantizationParameters",void 0),(0,n._)([(0,o.Cb)()],p.prototype,"outputQuantizationParameters",void 0),(0,n._)([(0,o.Cb)()],p.prototype,"outputSpatialReference",void 0),p=(0,n._)([(0,i.j)("esri.rest.knowledgeGraph.GraphQueryStreaming")],p);const u=p},2736:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(27366),o=(r(32718),r(93169),r(84936),r(10064),r(69912)),i=r(92364);let a=class extends i.Z{constructor(e){super(e)}};a=(0,n._)([(0,o.j)("esri.rest.knowledgeGraph.ObjectValue")],a);const s=a},11933:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(27366),o=r(46784),i=r(49861),a=(r(93169),r(32718),r(84936),r(69912)),s=r(92364);let l=class extends o.wq{constructor(e){super(e),this.path=null}};(0,n._)([(0,i.Cb)({type:[s.Z],json:{write:!0}})],l.prototype,"path",void 0),l=(0,n._)([(0,a.j)("esri.rest.knowledgeGraph.Path")],l);const p=l},49074:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(27366),o=(r(59486),r(49861)),i=(r(93169),r(32718),r(84936),r(69912)),a=r(25695),s=r(29909);let l=class extends a.Z{constructor(e){super(e),this.originId=null,this.destinationId=null,this.layoutGeometry=null}};(0,n._)([(0,o.Cb)({type:String,json:{write:!0}})],l.prototype,"originId",void 0),(0,n._)([(0,o.Cb)({type:String,json:{write:!0}})],l.prototype,"destinationId",void 0),(0,n._)([(0,o.Cb)({type:s.Z,json:{write:!0}})],l.prototype,"layoutGeometry",void 0),l=(0,n._)([(0,i.j)("esri.rest.Relationship.Relationship")],l);const p=l}}]);
//# sourceMappingURL=15479.4918eca8.chunk.js.map