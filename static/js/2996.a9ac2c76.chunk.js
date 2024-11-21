"use strict";(self.webpackChunkn2_compile=self.webpackChunkn2_compile||[]).push([[2996],{42307:(e,t,i)=>{i.d(t,{X:()=>o});var r=i(32035),s=i(96334),n=i(22186),a=i(92975);function o(e,t,i,o){if(null==t||null==o)return!1;const l=(0,s.eT)(t,s.Jz),c=(0,s.eT)(o,s.sp);if(l===c&&l!==s.Ej.UNKNOWN||(0,a.fS)(t,o))return i[0]=1,i[1]=1,i[2]=1,!0;if(l===s.Ej.SPHERICAL_ECEF){const t=(0,r.l)(e),a=t/Math.sqrt(e[0]*e[0]+e[1]*e[1]),o=t/n.sv.radius;if(c===s.Ej.WEB_MERCATOR)return i[0]=a*o,i[1]=a*o,i[2]=1,!0;if(c===s.Ej.WGS84||c===s.Ej.CGCS2000){const e=s.Ms;return i[0]=e*a*o,i[1]=e*o,i[2]=1,!0}}else if(l===s.Ej.PLATE_CARREE){if(c===s.Ej.WGS84||c===s.Ej.CGCS2000)return i[0]=s.Ms,i[1]=s.Ms,i[2]=1,!0;if(c===s.Ej.WEB_MERCATOR){const t=e[1]/n.sv.radius;return i[0]=1,i[1]=1/Math.cos(t),i[2]=1,!0}}return!1}},51066:(e,t,i)=>{i.d(t,{s:()=>o});var r=i(16889),s=i(12400),n=i(96334),a=i(22186);function o(e,t,i,r){if(null==t||null==r)return!1;const s=(0,n.Bg)(t,r,d);if(s.projector===n.iq)return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],!0;if(null==s.projector)return!1;const{source:o,dest:u}=s;if(u.spatialReferenceId===n.Ej.WEB_MERCATOR){const t=n.rf[o.spatialReferenceId][n.Ej.WGS84];return null!=t&&(t(e,0,c,0),(0,n.uT)(c,0,i,0),i[3]=l(c[1],e[2],e[3],a.sv.radius),!0)}if(o.spatialReferenceId!==n.Ej.WGS84&&o.spatialReferenceId!==n.Ej.CGCS2000||u.spatialReferenceId!==n.Ej.PLATE_CARREE){s.projector(e,0,i,0);const t=o.metersPerUnit??1,r=u.metersPerUnit??1;i[3]=e[3]*t/r}else{const t=n.rf[o.spatialReferenceId][n.Ej.SPHERICAL_ECEF],r=n.rf[n.Ej.SPHERICAL_ECEF][n.Ej.PLATE_CARREE];let c=e[3];null!=t&&null!=r&&(c=l(e[1],e[2],e[3],a.sv.radius)),s.projector(e,0,i,0),i[3]=c}return!0}function l(e,t,i,r){const s=r+t;if(s<r/2||i>s)return Number.MAX_VALUE;const n=Math.abs(u*e)+Math.asin(i/s);return n>=Math.PI/2?Number.MAX_VALUE:i/Math.cos(n)}const c=(0,s.Ue)(),d=(0,n.sw)(),u=(0,r.Vl)(1)},54907:(e,t,i)=>{var r,s,n,a,o,l,c,d,u,h,p,m,g,f,y;i.d(t,{$1:()=>d,AQ:()=>c,Em:()=>v,Lz:()=>a,MB:()=>r,Nl:()=>y,Q3:()=>b,Qd:()=>g,aw:()=>n,jE:()=>f,l7:()=>s,xL:()=>o}),function(e){e.U8="U8",e.I8="I8",e.U16="U16",e.I16="I16",e.U32="U32",e.I32="I32",e.F32="F32",e.F64="F64",e.Utf8String="Utf8String",e.NotSet="NotSet"}(r||(r={})),function(e){e.Png="Png",e.Jpeg="Jpeg",e.Dds="Dds",e.Raw="Raw",e.Dxt1="Dxt1",e.Dxt5="Dxt5",e.Etc2="Etc2",e.Astc="Astc",e.Pvrtc="Pvrtc",e.NotSet="NotSet"}(s||(s={})),function(e){e.Rgb8="Rgb8",e.Rgba8="Rgba8",e.R8="R8",e.Bgr8="Bgr8",e.Bgra8="Bgra8",e.Rg8="Rg8",e.NotSet="NotSet"}(n||(n={})),function(e){e.Position="Position",e.Normal="Normal",e.TexCoord="TexCoord",e.Color="Color",e.Tangent="Tangent",e.FeatureIndex="FeatureIndex",e.UvRegion="UvRegion",e.NotSet="NotSet"}(a||(a={})),function(e){e.Opaque="Opaque",e.Mask="Mask",e.Blend="Blend"}(o||(o={})),function(e){e.None="None",e.Mask="Mask",e.Alpha="Alpha",e.PreMultAlpha="PreMultAlpha",e.NotSet="NotSet"}(l||(l={})),function(e){e.Points="Points",e.Lines="Lines",e.LineStrip="LineStrip",e.Triangles="Triangles",e.TriangleStrip="TriangleStrip",e.NotSet="NotSet"}(c||(c={})),function(e){e.None="None",e.WrapXBit="WrapXBit",e.WrapYBit="WrapYBit",e.WrapXy="WrapXy",e.NotSet="NotSet"}(d||(d={})),function(e){e.Linear="Linear",e.Nearest="Nearest",e.NotSet="NotSet"}(u||(u={})),function(e){e.Linear="Linear",e.Nearest="Nearest",e.NearestMipmapNearest="NearestMipmapNearest",e.LinearMipmapNearest="LinearMipmapNearest",e.NearestMipmapLinear="NearestMipmapLinear",e.LinearMipmapLinear="LinearMipmapLinear",e.NotSet="NotSet"}(h||(h={})),function(e){e.FeatureId="FeatureId",e.GlobalUid="GlobalUid",e.UnspecifiedDateTime="UnspecifiedDateTime",e.EcmaIso8601DateTime="EcmaIso8601DateTime",e.EcmaIso8601DateOnly="EcmaIso8601DateOnly",e.TimeOnly="TimeOnly",e.TimeStamp="TimeStamp",e.ColorRgb="ColorRgb",e.ColorRgba="ColorRgba",e.Unrecognized="Unrecognized",e.NotSet="NotSet"}(p||(p={})),function(e){e.Texture="Texture",e.VertexAtrb="VertexAtrb",e.Implicit="Implicit",e.NotSet="NotSet"}(m||(m={})),function(e){e.Front="Front",e.Back="Back",e.None="None",e.NotSet="NotSet"}(g||(g={})),function(e){e.Pbr="Pbr",e.Unlit="Unlit"}(f||(f={})),function(e){e[e.Succeeded=0]="Succeeded",e[e.Failed=1]="Failed",e[e.MissingInputs=2]="MissingInputs"}(y||(y={}));const b=-1,v=-2},12996:(e,t,i)=>{i.r(t),i.d(t,{default:()=>me});var r=i(27366),s=i(10064),n=i(93169),a=i(32718),o=i(92026),l=i(94172),c=i(99346),d=i(49861),u=(i(84936),i(69912)),h=i(29303),p=i(21389),m=i(29134),g=i(7025),f=i(50894),y=i(32035),b=i(12400),v=i(86361),_=i(83448),w=i(37998),E=i(42307),C=i(5986),M=i(25158),x=i(54907),T=i(74509),R=i(50951),S=i(20488);class P extends S.W{constructor(e,t,i,r,s,n,a){super(e,0,0,0,t),this.nodesCached=i,this.vboMB=r,this.textureMB=s,this.vboMBCached=n,this.textureMBCached=a}}var U=i(26279),O=i(42069),A=i(76241),I=i(55763),N=i(68401),L=i(8548);const B={[x.AQ.Points]:null,[x.AQ.Lines]:null,[x.AQ.LineStrip]:null,[x.AQ.Triangles]:L.MX.TRIANGLES,[x.AQ.TriangleStrip]:L.MX.TRIANGLE_STRIP,[x.AQ.NotSet]:null},j={[x.xL.Opaque]:N.JJ.Opaque,[x.xL.Mask]:N.JJ.Mask,[x.xL.Blend]:N.JJ.Blend},F={[x.Qd.Back]:N.Vr.Back,[x.Qd.Front]:N.Vr.Front,[x.Qd.None]:N.Vr.None,[x.Qd.NotSet]:N.Vr.Back},H={[x.$1.WrapYBit]:{s:L.e8.CLAMP_TO_EDGE,t:L.e8.REPEAT},[x.$1.WrapXBit]:{s:L.e8.REPEAT,t:L.e8.CLAMP_TO_EDGE},[x.$1.WrapXy]:{s:L.e8.REPEAT,t:L.e8.REPEAT},[x.$1.None]:{s:L.e8.CLAMP_TO_EDGE,t:L.e8.CLAMP_TO_EDGE},[x.$1.NotSet]:{s:L.e8.CLAMP_TO_EDGE,t:L.e8.CLAMP_TO_EDGE}},V={[x.MB.U8]:1,[x.MB.I8]:1,[x.MB.U16]:2,[x.MB.I16]:2,[x.MB.U32]:4,[x.MB.I32]:4,[x.MB.F32]:4,[x.MB.F64]:8,[x.MB.Utf8String]:1,[x.MB.NotSet]:1};var D=i(52639),k=i(85312),G=i(88153),W=i(54463),z=i(42235);class Z{constructor(e){this.layerUid=[],this.type=W.q7.TILES3D,this.slicePlaneEnabled=!1,this.isGround=!0,this.layerView=e,this.layerUid.push(e.layer.uid)}intersect(e,t,i,r,s,n){const a=e.results,o=e.options.store===W.eC.ALL;if(e.options.filteredLayerUids.includes(this.layerView.layer.uid))return;const l=this.layerView.view._stage.renderView.componentObjectCollection,c=new z.sT(n??!1,e.options.normalRequired);this.layerView.objects.forEach((s=>{s.visible&&s.intersectionGeometry&&l.intersect(s,i,r,e.tolerance,null,c,((s,n,l,c)=>{if(n>=0){if(null!=t&&!t(i,r,n))return;const s=e=>{const t=new k.lt(this.layerView.layer.uid,(()=>this._createTiles3DGraphic(this.layerView.layer,{})));e.set(this.type,t,n,l)};if(this.isGround&&(null==a.ground.dist||n<a.ground.dist)&&s(a.ground),e.options.isFiltered)return;if((null==a.min.dist||n<a.min.dist)&&s(a.min),(null==a.max.dist||n>a.max.dist)&&s(a.max),o){const t=(0,G.LP)(e.ray);s(t),e.results.all.push(t)}}}))}))}_createTiles3DGraphic(e,t){return new D.Z({layer:e,sourceLayer:e,attributes:t})}}var J,Q,q=i(2985),$=i(89414),X=i(35160),Y=i(92911),K=i(51594),ee=i(46987),te=i(89261),ie=i(60113),re=i(86097),se=i(91526),ne=i(52920),ae=i(1487),oe=i(4760),le=i(33236),ce=i(67581),de=i(69787);(Q=J||(J={}))[Q.API=1]="API",Q[Q.VerboseAPI=2]="VerboseAPI",Q[Q.Error=3]="Error";class ue{constructor(){this.handle=0,this.isVisible=!1,this.components=[],this.texMemoryUsage=0,this.vboMemoryUsage=0,this.cpuMemoryUsage=0,this.textures=[]}totalMemory(){return this.texMemoryUsage+this.vboMemoryUsage+this.cpuMemoryUsage}}function he(e){return Math.round(e/1048.576)/1e3}let pe=class extends((0,O.A)(ce.Z)){constructor(){super(...arguments),this.type="integrated-mesh-3dtiles",this._visibleGeometryChangedSchedulerHandle=null,this._wasmLayerId=-1,this.ignoresMemoryFactor=!1,this.drapeTargetType=U.al.WithoutRasterImage,this._lyrHandleToObjects=new Map,this._initialCullFace=new Map,this._suspendedHandle=null,this._dbgFlags=new Set}initialize(){if(this._dbgFlags.add(J.Error),this._dbg(J.VerboseAPI,"Tiles3DLayerView3D initialize() called"),!this._canProjectWithoutEngine())throw new s.Z("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});const e=(0,A.JF)(this).then((e=>{this._intersectionHandler=new Z(this),this.view.sceneIntersectionHelper.addIntersectionHandler(this._intersectionHandler),this._updatingHandles.add((()=>this.slicePlaneEnabled),(e=>this._slicePlaneEnabledChange(e))),this._elevationProvider=new I.u({view:this.view,layerElevationSource:this,intersectionHandler:this._intersectionHandler}),this.view.elevationProvider.register("im",this._elevationProvider),this.view.basemapTerrain.overlayManager.registerDrapeTarget(this),this._wasmLayerId=e;const t=this.view.resourceController.memoryController.newCache(`t3d-${this.uid}`,(e=>this._onRemoveFromCache(e)));this._memCache=t,this.addHandles([(0,l.YP)((()=>this.layer.elevationInfo),(e=>this._elevationInfoChanged(e)))]),this._suspendedHandle=(0,l.YP)((()=>this.suspended),(e=>{const t=(0,A.WM)(this.view);t&&t.setEnabled(this,!e)}),l.nn)})).catch((e=>{if((0,A.mq)(this),this._wasmLayerId=-1,e===x.Q3)throw new s.Z("tiles3d:addLayer-failure","The 3d tiles layer description was invalid.",{});if(e===x.Em)throw new s.Z("tiles3d:addLayer-failure","The 3d tiles layer web assembly module failed to download.",{})}));this.addResolvingPromise(e)}destroy(){this._dbg(J.VerboseAPI,"Tiles3DLayerView3D destroy() called"),(0,A.mq)(this),this._suspendedHandle&&(this._suspendedHandle.remove(),this._suspendedHandle=null),this._intersectionHandler&&(this.view.sceneIntersectionHelper.removeIntersectionHandler(this._intersectionHandler),this._intersectionHandler=null),this._elevationProvider&&(this._elevationProvider.objectsChanged(this._obbs),this.view.elevationProvider.unregister(this._elevationProvider),this._elevationProvider=null),this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this),this._lyrHandleToObjects.forEach((e=>this.freeObject(e))),this._lyrHandleToObjects.clear(),this._initialCullFace.clear(),this._memCache=(0,o.SC)(this._memCache),this._updatingHandles=(0,o.SC)(this._updatingHandles),this.emit("visible-geometry-changed"),this._visibleGeometryChangedSchedulerHandle&&(this._visibleGeometryChangedSchedulerHandle.remove(),this._visibleGeometryChangedSchedulerHandle=null)}_visibleGeometryChanged(){null==this._visibleGeometryChangedSchedulerHandle&&(this._visibleGeometryChangedSchedulerHandle=(0,c.Os)((()=>{this.emit("visible-geometry-changed"),this._visibleGeometryChangedSchedulerHandle=null})))}_slicePlaneEnabledChange(e){this._intersectionHandler&&(this._intersectionHandler.slicePlaneEnabled=e),this.objects.forEach((t=>{const i=this._collection.getMaterial(t);i.commonMaterialParameters.hasSlicePlane=e,i.commonMaterialParameters.cullFace=e?N.Vr.None:this._initialCullFace.get(t)}))}_elevationInfoChanged(e){const t=(0,A.WM)(this.view);t&&t.setLayerOffset(this,(0,T.fm)(e))}get _obbs(){return this.objects.map((e=>this._collection.getComponentObb(e)))}get wasmLayerId(){return this._wasmLayerId}get usedMemory(){let e=0;return this._lyrHandleToObjects.forEach((t=>{t.isVisible&&(e+=t.totalMemory())})),e}get unloadedMemory(){let e=0;return this._lyrHandleToObjects.forEach((t=>{t.isVisible||(e+=t.totalMemory())})),e}get visibleAtCurrentScale(){return(0,de.GB)(this.layer.effectiveScaleRange,this.view.terrainScale)}get performanceInfo(){let e=0,t=0,i=0,r=0,s=0,n=0;return this._lyrHandleToObjects.forEach((a=>{a.isVisible?(e+=a.texMemoryUsage,t+=a.vboMemoryUsage,s++):(i+=a.texMemoryUsage,r+=a.vboMemoryUsage,n++)})),new P(this.usedMemory,s,n,he(t),he(e),he(r),he(i))}_canProjectWithoutEngine(){if(this.view.state.viewingMode===R.JY.Local){const e=this.view.renderSpatialReference?.isWebMercator?3857:this.view.renderSpatialReference?.wkid??-1;if(3857!==e&&32662!==e)return!1}return!0}get _stage(){return this.view._stage}get _collection(){return this._stage.renderView.componentObjectCollection}get elevationOffset(){return(0,T.fm)(this.layer.elevationInfo)}get elevationRange(){const e=this.fullExtent;return e?.zmin&&e?.zmax?new q.r(e.zmin,e.zmax):null}getElevationRange(e){return null}get fullExtent(){return this.layer.fullExtent}get objects(){return Array.from(this._lyrHandleToObjects.values()).reduce(((e,t)=>e.concat(t.components)),new Array)}isUpdating(){const e=(0,A.WM)(this.view);return!(this._wasmLayerId<0||null==e)&&e.isUpdating(this._wasmLayerId)}updatingFlagChanged(){this.notifyChange("updating")}async createRenderable(e){const t=e.meshData;if(null==t.data)throw new Error("meshData.data undefined");if(t.desc=JSON.parse(t.desc),null==t.desc)throw new Error("meshData.desc undefined");const i=(0,b.nI)(t.desc.origin),r=new Array,s=new Map,a=new ue;a.handle=e.handle,this._lyrHandleToObjects.set(e.handle,a);const o=this.view.basemapTerrain.spatialReference;let l,c;if("global"===this.view.viewingMode){const e=(0,g.Ue)();(0,w.B)(_.kU,i,e,o),l=(0,h.xO)((0,p.Ue)(),e),c=(0,h.U_)((0,p.Ue)(),l)}else l=p.Wd,c=p.Wd;const d=(0,g.Ue)();(0,m.Iu)(d,d,i);const u=(0,m.i0)((0,b.Ue)(),d);let M=null;const T=(0,b.Ue)();if(t.desc.obb){const e=t.desc.obb.quaternion;M=new $.Oo(t.desc.obb.center,t.desc.obb.halfSize,(0,f.al)(e[0],e[1],e[2],e[3]))}for(let h=0;h<t.desc.prims.length;h++){const e=t.desc.prims[h];if(this._dbg(J.VerboseAPI,JSON.stringify(e)),e.ptype===x.AQ.Lines)continue;if(null==B[e.ptype]||null==t.data){this._dbg(J.VerboseAPI,"[Unsupported Feature] Unsupported primitive mode ("+e.ptype+"). Skipping primitive.");continue}const d=t.desc?.materials&&null!=e.materialId?t.desc.materials[e.materialId]:null,m=null!=d?d.lightingModel:x.jE.Unlit,g=!(0,n.Z)("disable-feature:im-shading"),{positionView:f,positionAttr:_,normalsView:w,normalsAttr:R,colorAttr:S,texCoord0Attr:P,indicesView:U}=this.getBufferViews(e,t.data.buffer,l,g);if(null==_||null==f||null==U)continue;const O={colors:null!=S,textureCoordinates:null!=P?ie.N.Default:ie.N.None,hasNormals:null!=w,needsNormals:g},A=_.data.length/_.size,I=(e,t)=>!e||e.data.length/e.size===A||(this._dbg(J.Error,`${t} !== numPos. Skipping primitive.`),!1);if(!I(P,"numTexcoord")||!I(S,"numColors")||!I(R,"normals"))continue;const L=(0,Y.N)(O);if(null!=M?M=M.clone():(M=(0,$.Qb)(_),(0,y.g)(T,M.center,i),M.center=T),l!==p.Wd)for(let t=0;t<f.count;t++)f.getVec(t,T),(0,y.t)(T,T,l),f.setVec(t,T);const H=L.createBuffer(_.data.length),V=new Map([[oe.T.POSITION,_]]);null!=P&&V.set(oe.T.UV0,P),null!=S&&V.set(oe.T.COLOR,S),null!=R&&V.set(oe.T.NORMALCOMPRESSED,R),V.forEach(((e,t)=>{null!=e&&(0,le.i9)(t,e,null,null,H,0)}));const D=new Uint32Array([0,U.typedBuffer.length]),k={vertices:{data:H.buffer,count:H.byteLength/L.stride,layoutParameters:O},positionData:{positions:f.typedBuffer,indices:U.typedBuffer},indices:U.typedBuffer,componentOffsets:D};a.cpuMemoryUsage+=f.count,a.cpuMemoryUsage+=U.count;const G=this.view.renderSpatialReference,W=(0,b.Ue)(),z=[1,1,1];(0,E.X)(u,G,z,o)||this._dbg(J.Error,"Unsupported coordinate system for IM overlay"),(0,C.S)(u,G,W,o);const Z=this._collection.createObject(new X.G((0,v.al)(W[0],W[1],z[0],z[1]),new K.w(u,c),M,k));d&&this._collection.updateMaterial(Z,(e=>{e.baseColor=d.baseColorFactor,e.usePBR=m===x.jE.Pbr,e.hasParametersFromSource=!1,e.baseColorTexture=this._getTexture(d.baseColorTex,t,s),e.usePBR&&(e.mrrFactors=[d.metallicFactor,d.roughnessFactor,0],e.emissiveFactor=d.emissiveFactor??[0,0,0],e.metallicRoughnessTexture=this._getTexture(d.metalTex,t,s),e.emissionTexture=this._getTexture(d.emissiveTex,t,s),e.occlusionTexture=this._getTexture(d.occlusionTex,t,s),e.normalTexture=this._getTexture(d.normalTex,t,s)),e.objectOpacity=0,e.alphaDiscardMode=N.JJ.Mask;const i=[];e.baseColorTexture&&i.push(e.baseColorTexture.loadPromise),e.usePBR&&e.metallicRoughnessTexture&&i.push(e.metallicRoughnessTexture.loadPromise),e.usePBR&&e.emissionTexture&&i.push(e.emissionTexture.loadPromise),e.usePBR&&e.occlusionTexture&&i.push(e.occlusionTexture.loadPromise),e.usePBR&&e.normalTexture&&i.push(e.normalTexture.loadPromise);const n=Promise.all(i);r.push(n),n.then((()=>{e.alphaDiscardMode=j[d.alphaMode],e.objectOpacity=1,a.texMemoryUsage+=e.baseColorTexture?.glTexture?.usedMemory||0,e.usePBR&&(a.texMemoryUsage+=e.metallicRoughnessTexture?.glTexture?.usedMemory||0,a.texMemoryUsage+=e.emissionTexture?.glTexture?.usedMemory||0,a.texMemoryUsage+=e.occlusionTexture?.glTexture?.usedMemory||0,a.texMemoryUsage+=e.normalTexture?.glTexture?.usedMemory||0)})),e.commonMaterialParameters.doubleSided=d.isDoubleSided,e.commonMaterialParameters.cullFace=d.faceCulling?F[d.faceCulling]:N.Vr.Back,this._initialCullFace.set(Z,e.commonMaterialParameters.cullFace),e.commonMaterialParameters.hasSlicePlane=this.slicePlaneEnabled,e.componentParameters.castShadows=ee.ws.All,e.textureAlphaCutoff=d.alphaCutoff??.1,e.alphaDiscardMode=j[d.alphaMode],e.isIntegratedMesh=!0,e.polygonOffsetEnabled=!1,e.hasOccludees=!1,e.ellipsoidMode=(0,re.j)(this.view.spatialReference)})),a.components.push(Z),a.vboMemoryUsage+=this._collection.getObjectGPUMemoryUsage(Z)}if(await Promise.all(r),s.forEach((e=>{a.textures.push(e)})),!this._memCache)throw new Error("no memCache");return this._memCache.put(`${a.handle}`,a,a.totalMemory()),{memUsageBytes:a.totalMemory()}}freeRenderable(e){const t=this._lyrHandleToObjects.get(e);t&&(this.freeObject(t),this._lyrHandleToObjects.delete(e))}freeObject(e){this._memCache&&this._memCache.pop(`${e.handle}`),e.components.forEach((t=>{e.textures.forEach((e=>{this._stage.remove(e)})),this._collection.destroyObject(t),this._initialCullFace.delete(t)}))}setRenderableVisibility(e,t,i){if(this._memCache){for(let r=0;r<i;++r){const i=e[r],s=t[r];if(!s)continue;const n=this._lyrHandleToObjects.get(i);n&&(this._visibleGeometryChanged(),n.isVisible=s,n.components.forEach((e=>{this._collection.setObjectVisibility(e,s),this._elevationProvider.objectChanged(this._collection.getComponentObb(e))})),this._memCache.pop(`${i}`))}for(let r=0;r<i;++r){const i=e[r],s=t[r];if(s)continue;const n=this._lyrHandleToObjects.get(i);n&&(this._visibleGeometryChanged(),n.isVisible=s,n.components.forEach((e=>{this._collection.setObjectVisibility(e,s),this._elevationProvider.objectChanged(this._collection.getComponentObb(e))})),this._memCache.put(`${i}`,n,n.totalMemory()))}}}_getTexture(e,t,i){let r=null;if(e&&t.desc?.images&&t.data?.buffer){const s=t.desc.images[e?.imageId];if(r=i.get(s),!r&&s){const n=this._stage.renderView.renderingContext.parameters.maxMaxAnisotropy,a=n>1,o=H[e.wrapMode??x.$1.None];let l=s.alpha?4:3;const c=new Uint8Array(t.data.buffer,s.data.byteOffset,s.data.byteCount);let d=null,u=null,h=null;switch(s.format){case x.l7.Raw:s.pixelFormat===x.aw.R8?(d=c.buffer,l=1,u=""):s.pixelFormat===x.aw.Rgb8?(d=c.buffer,l=3,u=""):s.pixelFormat===x.aw.Rgba8&&(d=c.buffer,l=4,u="");break;case x.l7.Dxt1:d=c.buffer,l=3,u=N.Ti.DDS_ENCODING;break;case x.l7.Dxt5:d=c.buffer,l=4,u=N.Ti.DDS_ENCODING;break;case x.l7.Png:u="image/png",h=document.createElement("img");break;case x.l7.Jpeg:u="image/jpeg",h=document.createElement("img");break;case x.l7.Etc2:u="image/ktx",h=document.createElement("img");break;case x.l7.Astc:this._dbg(J.Error,"Astc texture not supported");break;case x.l7.Pvrtc:this._dbg(J.Error,"Pvrtc texture not supported")}if(h&&u){const e=new Blob([c],{type:u});h.src=URL.createObjectURL(e),d=h}d&&null!=u&&(r=new ae.x(d,{mipmap:a,maxAnisotropy:n,encoding:u,wrap:o,components:l,noUnpackFlip:!0,width:s.mip0Width,height:s.mip0Height}),this._stage.add(r),i.set(s,r))}}return r?new te.T(this.view._stage.renderView.textures,r.id):null}getBufferViews(e,t,i,r){let s,n,a,o,l,c,d,u=null;for(let p=0;p<e.atrbs.length;p++){const d=e.atrbs[p],m=d.view,g=void 0,f=m.byteOffset+m.byteCount,y=m.byteCount/V[m.type],b=[...Array(y).keys()].map((e=>e));try{switch(d.sem){case x.Lz.Position:3!==m.ncomp||m.type!==x.MB.F32?this._dbg(J.Error,"[Unsupported Feature] Unsupported view for Position ("+m+")"):(s=new M.ct(t,m.byteOffset,g,f),n=new se.a(s.typedBuffer,b,3));break;case x.Lz.Normal:if(3!==m.ncomp||m.type!==x.MB.F32)this._dbg(J.Error,"[Unsupported Feature] Unsupported view for Normal ("+m+")");else if(r){const e=new M.ct(t,m.byteOffset,g,f),r=(0,ne.Pj)(e.typedBuffer,i);l=new M.o7(r),c=new se.a(l.typedBuffer,b,2)}break;case x.Lz.TexCoord:2!==m.ncomp||m.type!==x.MB.F32?this._dbg(J.Error,"[Unsupported Feature] Unsupported view for Texcoord ("+m+")"):void 0===o&&(o=new se.a(new M.Eu(t,m.byteOffset,g,f).typedBuffer,b,2));break;case x.Lz.Color:4===m.ncomp?(m.type===x.MB.F32&&(u=new M.ek(t,m.byteOffset,g,f)),m.type===x.MB.U8&&(u=new M.mc(t,m.byteOffset,g,f)),m.type===x.MB.U16&&(u=new M.v6(t,m.byteOffset,g,f))):3===m.ncomp&&(m.type===x.MB.F32&&(u=new M.ct(t,m.byteOffset,g,f)),m.type===x.MB.U8&&(u=new M.ne(t,m.byteOffset,g,f)),m.type===x.MB.U16&&(u=new M.mw(t,m.byteOffset,g,f))),null==u?this._dbg(J.VerboseAPI,"[Unsupported Feature] Unsupported view for Color ("+m+")"):a=new se.a(u.typedBuffer,b,m.ncomp);break;case x.Lz.FeatureIndex:break;default:this._dbg(J.VerboseAPI,"[Unsupported Feature] Unsupported semantic ("+d.sem+"). Skipping vertex attribute.")}}catch(h){this._dbg(J.VerboseAPI,"Error Creating buffer ("+h+"). Skipping vertex attribute.")}}if(e.index){const i=e.index.view,r=void 0,s=i.byteOffset+i.byteCount;switch(e.index.view.type){case x.MB.U16:d=new M.av(t,i.byteOffset,r,s);break;case x.MB.U32:d=new M.Nu(t,i.byteOffset,r,s);break;case x.MB.U8:default:this._dbg(J.Error,"[Unsupported Feature] index type not supported ("+i.type+").")}}if(null==d&&null!=s){const e=s.count;if(e<65535){const t=new Uint16Array(e);d=new M.av(t)}else{const t=new Uint32Array(e);d=new M.Nu(t)}for(let t=0;t<e;t++)d.set(t,t)}return{positionView:s,positionAttr:n,colorAttr:a,texCoord0Attr:o,indicesView:d,normalsView:l,normalsAttr:c}}_onRemoveFromCache(e){const t=(0,A.WM)(this.view);t&&t.onRenderableEvicted(this,e.handle,e.totalMemory()),this.freeRenderable(e.handle)}_dbg(e,t){this._dbgFlags.has(e)&&(e===J.Error?a.Z.getLogger(this).error(t):a.Z.getLogger(this).warn(t))}};(0,r._)([(0,d.Cb)()],pe.prototype,"_visibleGeometryChangedSchedulerHandle",void 0),(0,r._)([(0,d.Cb)()],pe.prototype,"layer",void 0),(0,r._)([(0,d.Cb)({readOnly:!0})],pe.prototype,"visibleAtCurrentScale",null),(0,r._)([(0,d.Cb)()],pe.prototype,"elevationOffset",null),pe=(0,r._)([(0,u.j)("esri.views.3d.layers.IntegratedMesh3DTilesLayerView3D")],pe);const me=pe},42069:(e,t,i)=>{i.d(t,{A:()=>d});var r=i(27366),s=i(42537),n=i(66978),a=i(94172),o=i(49861),l=(i(93169),i(32718),i(84936),i(69912)),c=i(5354);const d=e=>{let t=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(){super.postscript(),(0,c.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,t=e.signal;this.addHandles((0,s.kB)((()=>e.abort()))),await(0,a.N1)((()=>this.view.defaultsFromMap?.heightModelInfoReady),t),(0,n.k_)(t);const i=(0,c.Wt)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}};return(0,r._)([(0,o.Cb)()],t.prototype,"view",void 0),(0,r._)([(0,o.Cb)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,r._)([(0,l.j)("esri.views.3d.layers.LayerView3D")],t),t}},55763:(e,t,i)=>{i.d(t,{u:()=>_});var r=i(27366),s=i(7138),n=i(91505),a=i(32718),o=i(49861),l=(i(93169),i(84936),i(69912)),c=i(29134),d=i(7025),u=i(32035),h=i(12400),p=i(51066),m=i(65156),g=i(23470),f=i(2985),y=i(4035),b=i(88153),v=i(54463);let _=class extends(n.Z.EventedMixin(s.Z)){constructor(e){super(e),this._tmpEvent=new y.c,this._renderCoordsHelper=e.view.renderCoordsHelper,this._renderSR=this._renderCoordsHelper.spatialReference,this._layerElevationSource=e.layerElevationSource}initialize(){this._intersector=(0,b.Z8)(this.view.state.viewingMode),this._intersector.options.store=v.eC.MIN,this._intersector.options.normalRequired=!1,this._tmpEvent.context=this.intersectionHandler.isGround?"ground":"scene"}get spatialReference(){return this.view?.elevationProvider?.spatialReference}getElevation(e,t,i,r){const s=this._renderCoordsHelper,n=(0,u.s)(C,e,t,i);if(!s.toRenderCoords(n,r,n))return a.Z.getLogger(this).error("could not project point to compute elevation"),null;const{layerElevationSource:o,_intersector:l,intersectionHandler:c}=this,d=o.fullExtent,h=null!=d&&Number.isFinite(d.xmin)&&Number.isFinite(d.xmax)&&Number.isFinite(d.ymin)&&Number.isFinite(d.ymax)&&Number.isFinite(d.zmin)&&Number.isFinite(d.zmax)?new f.r(d.zmin,d.zmax):o.elevationRange;if(null==h)return null;const p=o.elevationOffset,m=h.elevationRangeMin+p,g=h.elevationRangeMax+p,y=s.setAltitude(M,g,n),b=s.setAltitude(x,m,n);return l.reset(y,b,null),c.intersect(l,null,y,b,null,!0),l.results.min.getIntersectionPoint(n)?s.getAltitude(n):null}getSphereElevationBounds(e,t){return(0,p.s)(e,t,E,this._renderSR),this._layerElevationSource.getElevationRange(E)}getRootElevationBounds(){const e=this.layerElevationSource.fullExtent;return e?.hasZ?new f.r(e.zmin,e.zmax):null}objectsChanged(e){this.spatialReference&&(this._computeLayerExtent(e,this._tmpEvent.extent),this._tmpEvent.spatialReference=this.spatialReference,this.emit("elevation-change",this._tmpEvent))}objectChanged(e){this.spatialReference&&(this._computeObjectExtent(e,this._tmpEvent.extent),this._tmpEvent.spatialReference=this.spatialReference,this.emit("elevation-change",this._tmpEvent))}_computeObjectExtent(e,t){(0,m.cS)(t),this._expandExtent(e,t)}_computeLayerExtent(e,t){(0,m.cS)(t);for(const i of e)this._expandExtent(i,t)}_expandExtent(e,t){const i=this.spatialReference;if(null==i)return;if(null==e)return;(0,c.en)(w,e.quaternion),w[12]=e.center[0],w[13]=e.center[1],w[14]=e.center[2];const r=e.halfSize;for(let s=0;s<8;++s)C[0]=1&s?r[0]:-r[0],C[1]=2&s?r[1]:-r[1],C[2]=4&s?r[2]:-r[2],(0,u.h)(C,C,w),this._renderCoordsHelper.fromRenderCoords(C,C,i),(0,m.jn)(t,C,t)}};(0,r._)([(0,o.Cb)({constructOnly:!0})],_.prototype,"layerElevationSource",void 0),(0,r._)([(0,o.Cb)({constructOnly:!0})],_.prototype,"intersectionHandler",void 0),(0,r._)([(0,o.Cb)({constructOnly:!0})],_.prototype,"view",void 0),(0,r._)([(0,o.Cb)()],_.prototype,"spatialReference",null),_=(0,r._)([(0,l.j)("esri.views.3d.layers.i3s.LayerElevationProvider")],_);const w=(0,d.Ue)(),E=(0,g.f)(0,0,0,0),C=(0,h.Ue)(),M=(0,h.Ue)(),x=(0,h.Ue)()},35160:(e,t,i)=>{i.d(t,{G:()=>r});class r{constructor(e,t,i,r){this.toMapSpace=e,this.transform=t,this.obb=i,this.geometry=r}}},51594:(e,t,i)=>{i.d(t,{w:()=>r});class r{constructor(e,t){this.position=e,this.rotationScale=t,this.origin=void 0}}},89261:(e,t,i)=>{i.d(t,{T:()=>n});var r=i(92026),s=i(66978);class n{constructor(e,t){this._textures=e,this.loadPromise=null,this._disposed=!1;const i=this._textures.acquire(t);(0,s.y8)(i)?(i.then((e=>{this._disposed?(0,r.RY)(e):this._textureRef=e})),this.loadPromise=i):this._textureRef=i}dispose(){this._textureRef=(0,r.RY)(this._textureRef),this._disposed=!0}get glTexture(){return null!=this._textureRef?this._textureRef.glTexture:null}}},67581:(e,t,i)=>{i.d(t,{Z:()=>g});var r=i(27366),s=i(7138),n=i(91505),a=i(79056),o=i(32718),l=i(92026),c=i(67426),d=i(49861),u=(i(93169),i(84936),i(69912)),h=i(46634),p=i(69787);let m=class extends((0,a.IG)((0,c.v)(n.Z.EventedMixin(s.Z)))){constructor(e){super(e),this._updatingHandles=new h.R,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer?.title||"no title";o.Z.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e)}}))}destroy(){this._updatingHandles=(0,l.SC)(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){return!0===this.layer?.visible}set visible(e){this._overrideIfSome("visible",e)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){const e=this.view.timeExtent,t=this.layer?.visibilityTimeExtent;return!e||!t||!e.intersection(t).isEmpty}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready&&(0,p.Cy)(e)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){const e=this.parent?.suspended?this.parent.suspendInfo:{};this.view?.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0);const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return(0,p.Cy)(t)&&this.visibleAtCurrentScale||(e.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(e.outsideVisibilityTimeExtent=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,r._)([(0,d.Cb)()],m.prototype,"view",void 0),(0,r._)([(0,d.Cb)()],m.prototype,"fullOpacity",null),(0,r._)([(0,d.Cb)()],m.prototype,"layer",void 0),(0,r._)([(0,d.Cb)()],m.prototype,"parent",void 0),(0,r._)([(0,d.Cb)({readOnly:!0})],m.prototype,"suspended",null),(0,r._)([(0,d.Cb)({readOnly:!0})],m.prototype,"suspendInfo",null),(0,r._)([(0,d.Cb)({readOnly:!0})],m.prototype,"legendEnabled",null),(0,r._)([(0,d.Cb)({type:Boolean,readOnly:!0})],m.prototype,"updating",null),(0,r._)([(0,d.Cb)({readOnly:!0})],m.prototype,"updatingProgress",null),(0,r._)([(0,d.Cb)()],m.prototype,"updateSuspended",null),(0,r._)([(0,d.Cb)()],m.prototype,"visible",null),(0,r._)([(0,d.Cb)({readOnly:!0})],m.prototype,"visibleAtCurrentScale",null),(0,r._)([(0,d.Cb)({readOnly:!0})],m.prototype,"visibleAtCurrentTimeExtent",null),m=(0,r._)([(0,u.j)("esri.views.layers.LayerView")],m);const g=m}}]);
//# sourceMappingURL=2996.a9ac2c76.chunk.js.map