"use strict";(self.webpackChunkn2_compile=self.webpackChunkn2_compile||[]).push([[1080],{11080:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Ge});var o=i(27366),r=i(44055),s=i(80987),n=i(10064),l=i(32718),a=i(97642),p=i(66978),u=i(49861),c=i(25243),d=(i(63780),i(93169),i(38511)),y=i(69912),h=i(11186),b=i(71353),v=i(53866),m=i(30651),g=i(27961),f=i(11936),S=i(6061),_=i(29598),w=i(56811),x=i(81118),V=i(25899),C=i(45948),j=i(83040),z=i(11582),q=i(17768),R=i(46784),I=i(96866),N=i(48976),Z=i(98131),T=i(26277);const D=(0,b.c)(),A=(0,Z.a)(),F=(0,Z.a)(),L=(0,Z.a)(),B=(0,b.f)(0,0,1),P=(0,b.f)(0,1,0),M=(0,b.f)(1,0,0);function E(e){(0,h.c)(D,e),(0,h.n)(D,D);const t=Math.atan2(D[1],D[0]),i=(0,N.s)((0,Z.a)(),B,-t);(0,h.v)(D,D,i);const o=-1*Math.atan2(D[2],D[0]);return[(0,T.a)(t)+270,(0,T.a)(o)+90]}function O(e,t){return(0,N.s)(F,B,(0,T.t)(e-270)),(0,N.s)(L,P,(0,T.t)(t-90)),(0,N.m)(A,F,L),(0,h.c)(D,M),(0,h.v)(D,D,A),(0,h.n)(D,D),[D[0],D[1],D[2]]}var k=i(89125);let J=class extends((0,z.J)(R.wq)){constructor(e){super(e),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[e,t]=E(this.normal);return q.BV.normalize((0,c.q9)(e),0,!0)}set orientation(e){const t=O(e,this.tilt);this._set("normal",t),this._set("orientation",e)}get tilt(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[e,t]=E(this.normal);return q.BV.normalize((0,c.q9)(t),0,!0)}set tilt(e){const t=O(this.orientation,e);this._set("normal",t),this._set("tilt",e)}};(0,o._)([(0,u.Cb)({type:Boolean,json:{write:!0}})],J.prototype,"enabled",void 0),(0,o._)([(0,u.Cb)({type:String,json:{write:!0}})],J.prototype,"label",void 0),(0,o._)([(0,u.Cb)({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),(0,k.p)((e=>q.BV.normalize((0,c.q9)(e),0,!0)))],J.prototype,"orientation",null),(0,o._)([(0,u.Cb)({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),(0,k.p)((e=>q.BV.normalize((0,c.q9)(e),0,!0)))],J.prototype,"tilt",null),(0,o._)([(0,u.Cb)({type:[Number],json:{write:!0}})],J.prototype,"normal",void 0),(0,o._)([(0,u.Cb)({type:[Number],json:{write:!0}})],J.prototype,"point",void 0),J=(0,o._)([(0,y.j)("esri.layers.voxel.VoxelSlice")],J);const U=J;var W=i(53283);let Y=class extends((0,z.J)(R.wq)){constructor(){super(...arguments),this.enabled=!0,this.href=null,this.id=null,this.label="",this.normal=null,this.point=null,this.sizeInPixel=null,this.slices=null,this.timeId=0,this.variableId=null}get orientation(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[e,t]=E(this.normal);return q.BV.normalize((0,c.q9)(e),0,!0)}get tilt(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[e,t]=E(this.normal);return q.BV.normalize((0,c.q9)(t),0,!0)}};(0,o._)([(0,u.Cb)({type:Boolean,json:{default:!0,write:!0}})],Y.prototype,"enabled",void 0),(0,o._)([(0,u.Cb)({type:String,json:{origins:{service:{read:W.r}},write:{enabled:!0,isRequired:!0}}}),(0,I.B)({origins:["web-scene"],type:"resource",prefix:"sections",compress:!0})],Y.prototype,"href",void 0),(0,o._)([(0,u.Cb)({type:c.z8,json:{write:{enabled:!0,isRequired:!0}}})],Y.prototype,"id",void 0),(0,o._)([(0,u.Cb)({type:String,json:{write:!0}})],Y.prototype,"label",void 0),(0,o._)([(0,u.Cb)({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],Y.prototype,"orientation",null),(0,o._)([(0,u.Cb)({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],Y.prototype,"tilt",null),(0,o._)([(0,u.Cb)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],Y.prototype,"normal",void 0),(0,o._)([(0,u.Cb)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],Y.prototype,"point",void 0),(0,o._)([(0,u.Cb)({type:[c.z8],json:{write:{enabled:!0,isRequired:!0}}})],Y.prototype,"sizeInPixel",void 0),(0,o._)([(0,u.Cb)({type:[U],json:{write:!0}})],Y.prototype,"slices",void 0),(0,o._)([(0,u.Cb)({type:c.z8,json:{default:0,write:!0}})],Y.prototype,"timeId",void 0),(0,o._)([(0,u.Cb)({type:c.z8,json:{write:{enabled:!0,isRequired:!0}}})],Y.prototype,"variableId",void 0),Y=(0,o._)([(0,y.j)("esri.layers.voxel.VoxelSection")],Y);const G=Y;let H=class extends R.wq{constructor(){super(...arguments),this.diffuseFactor=.5,this.specularFactor=.5}};(0,o._)([(0,u.Cb)({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],H.prototype,"diffuseFactor",void 0),(0,o._)([(0,u.Cb)({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],H.prototype,"specularFactor",void 0),H=(0,o._)([(0,y.j)("esri.layers.voxel.VoxelSimpleShading")],H);const Q=H;let X=class extends R.wq{constructor(){super(...arguments),this.continuity=null,this.hasNoData=!1,this.noData=0,this.offset=0,this.scale=1,this.type=null}};(0,o._)([(0,u.Cb)({type:["discrete","continuous"],json:{write:!0}})],X.prototype,"continuity",void 0),(0,o._)([(0,u.Cb)({type:Boolean,json:{write:!0}})],X.prototype,"hasNoData",void 0),(0,o._)([(0,u.Cb)({type:Number,json:{write:!0}})],X.prototype,"noData",void 0),(0,o._)([(0,u.Cb)({type:Number,json:{write:!0}})],X.prototype,"offset",void 0),(0,o._)([(0,u.Cb)({type:Number,json:{write:!0}})],X.prototype,"scale",void 0),(0,o._)([(0,u.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],X.prototype,"type",void 0),X=(0,o._)([(0,y.j)("esri.layers.voxel.VoxelFormat")],X);const K=X;let $=class extends R.wq{constructor(){super(...arguments),this.id=null,this.description="",this.name=null,this.originalFormat=null,this.renderingFormat=null,this.unit="",this.volumeId=0,this.type=null}};(0,o._)([(0,u.Cb)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],$.prototype,"id",void 0),(0,o._)([(0,u.Cb)({type:String,json:{write:!0}})],$.prototype,"description",void 0),(0,o._)([(0,u.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],$.prototype,"name",void 0),(0,o._)([(0,u.Cb)({type:K,json:{write:!0}})],$.prototype,"originalFormat",void 0),(0,o._)([(0,u.Cb)({type:K,json:{write:{enabled:!0,isRequired:!0}}})],$.prototype,"renderingFormat",void 0),(0,o._)([(0,u.Cb)({type:String,json:{write:!0}})],$.prototype,"unit",void 0),(0,o._)([(0,u.Cb)({type:Number,json:{write:!0}})],$.prototype,"volumeId",void 0),(0,o._)([(0,u.Cb)({type:["stc-hot-spot-results","stc-cluster-outlier-results","stc-estimated-bin","generic-nearest-interpolated"],json:{write:!0}})],$.prototype,"type",void 0),$=(0,o._)([(0,y.j)("esri.layers.voxel.VoxelVariable")],$);const ee=$;var te=i(84652),ie=i(51995);let oe=class extends((0,z.J)(R.wq)){constructor(){super(...arguments),this.color=ie.Z.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label="",this.colorLocked=!1}};(0,o._)([(0,u.Cb)({type:ie.Z,json:{type:[c.z8],write:{enabled:!0,isRequired:!0}}})],oe.prototype,"color",void 0),(0,o._)([(0,u.Cb)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],oe.prototype,"value",void 0),(0,o._)([(0,u.Cb)({type:Boolean,json:{default:!0,write:!0}})],oe.prototype,"enabled",void 0),(0,o._)([(0,u.Cb)({type:String,json:{write:!0}})],oe.prototype,"label",void 0),(0,o._)([(0,u.Cb)({type:Boolean,json:{default:!1,write:!0}})],oe.prototype,"colorLocked",void 0),oe=(0,o._)([(0,y.j)("esri.layers.voxel.VoxelIsosurface")],oe);const re=oe;var se=i(60354),ne=i(16889);let le=class extends((0,z.J)(R.wq)){constructor(){super(...arguments),this.color=null,this.position=0}};(0,o._)([(0,u.Cb)({type:ie.Z,json:{type:[c.z8],write:{enabled:!0,isRequired:!0}}})],le.prototype,"color",void 0),(0,o._)([(0,u.Cb)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],le.prototype,"position",void 0),le=(0,o._)([(0,y.j)("esri.layers.voxel.VoxelColorStop")],le);const ae=le;let pe=class extends((0,z.J)(R.wq)){constructor(){super(...arguments),this.opacity=1,this.position=0}};(0,o._)([(0,u.Cb)({type:Number,json:{name:"alpha",write:{enabled:!0,isRequired:!0}}})],pe.prototype,"opacity",void 0),(0,o._)([(0,u.Cb)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],pe.prototype,"position",void 0),pe=(0,o._)([(0,y.j)("esri.layers.voxel.VoxelOpacityStop")],pe);const ue=pe;let ce=class extends((0,z.J)(R.wq)){constructor(){super(...arguments),this.enabled=!1,this.range=null}};(0,o._)([(0,u.Cb)({type:Boolean,json:{default:!1,write:!0}})],ce.prototype,"enabled",void 0),(0,o._)([(0,u.Cb)({type:[Number],json:{write:!0}})],ce.prototype,"range",void 0),ce=(0,o._)([(0,y.j)("esri.layers.voxel.VoxelRangeFilter")],ce);const de=ce;var ye,he;(he=ye||(ye={}))[he.Color=1]="Color",he[he.Alpha=2]="Alpha",he[he.Both=3]="Both";let be=class extends((0,z.J)(R.wq)){constructor(e){super(e),this.interpolation=null,this.stretchRange=null,this.rangeFilter=null,this._colorMapSize=256,this.colorStops=new(s.Z.ofType(ae)),this.opacityStops=new(s.Z.ofType(ue))}set colorStops(e){this._set("colorStops",(0,se.Z)(e,this._get("colorStops"),s.Z.ofType(ae)))}set opacityStops(e){this._set("opacityStops",(0,se.Z)(e,this._get("opacityStops"),s.Z.ofType(ue)))}getPreviousNext(e,t,i){let o=e;for(;--o>0&&t[o].type!==i&&t[o].type!==ye.Both;);let r=e;const s=t.length;for(;++r<s&&t[r].type!==i&&t[r].type!==ye.Both;);return[o,r]}get rasterizedTransferFunction(){const e=[];if(this.colorStops.length<2)return e;const t=[],i=[];for(const s of this.colorStops){if(!s.color)return e;i.push({color:{r:s.color.r,g:s.color.g,b:s.color.b,a:Math.round(255*(1-s.color.a))},position:s.position,type:ye.Color})}if(0===this.opacityStops.length)for(const s of i)t.push({color:s.color,position:s.position});else{for(const t of this.opacityStops){const e=(0,ne.uZ)(t.position,0,1),o=Math.round(255*(0,ne.uZ)(1-t.opacity,0,1));let r=!1;for(const t of i)if(t.type===ye.Color&&Math.abs(t.position-e)<1e-5){t.color.a=o,t.type=ye.Both,r=!0;break}r||i.push({color:{r:0,g:0,b:0,a:o},position:t.position,type:ye.Alpha})}i.sort(((e,t)=>e.position<t.position?-1:1));const e=i.length;for(let t=0;t<e;++t){const o=i[t];if(o.type!==ye.Both)if(o.type===ye.Color){const[r,s]=this.getPreviousNext(t,i,ye.Alpha);if(-1!==r&&s!==e){const e=(o.position-i[r].position)/(i[s].position-i[r].position);o.color.a=Math.round((0,ne.t7)(i[r].color.a,i[s].color.a,e))}else o.color.a=-1!==r?i[r].color.a:i[s].color.a}else{const[r,s]=this.getPreviousNext(t,i,ye.Color);if(-1!==r&&s!==e){const e=(o.position-i[r].position)/(i[s].position-i[r].position),t=i[r].color,n=i[s].color;me.forEach((i=>{o.color[i]=Math.round((0,ne.t7)(t[i],n[i],e))}))}else-1!==r?me.forEach((e=>{o.color[e]=i[r].color[e]})):me.forEach((e=>{o.color[e]=i[s].color[e]}))}}for(const o of i)t.push({color:o.color,position:o.position})}t[0].position=0,t[t.length-1].position=1;let o=0,r=1;for(let s=0;s<this._colorMapSize;++s){const i=s/this._colorMapSize;for(;i>t[r].position;)o=r++;const n=(i-t[o].position)/(t[r].position-t[o].position),l=t[o].color,a=t[r].color,p=new ie.Z;me.forEach((e=>{p[e]=Math.round((0,ne.t7)(l[e],a[e],n))})),p.a=(0,ne.uZ)(1-(0,ne.t7)(l.a,a.a,n)/255,0,1),e.push(p)}return e}getColorForContinuousDataValue(e,t){const i=this.rasterizedTransferFunction;if(this.colorStops.length<2||!Array.isArray(this.stretchRange)||this.stretchRange.length<2||i.length<256)return null;let o=this.stretchRange[0],r=this.stretchRange[1];if(o>r){const e=o;o=r,r=e}e=(0,ne.uZ)(e,o,r);const s=i[Math.round((e-o)/(r-o)*(this._colorMapSize-1))].clone();return t||(s.a=1),s}};(0,o._)([(0,u.Cb)({type:["linear","nearest"],json:{write:!0}})],be.prototype,"interpolation",void 0),(0,o._)([(0,u.Cb)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],be.prototype,"stretchRange",void 0),(0,o._)([(0,u.Cb)({type:s.Z.ofType(ae),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.colorStops&&this.colorStops.length>0}}}}})],be.prototype,"colorStops",null),(0,o._)([(0,u.Cb)({type:s.Z.ofType(ue),json:{read:{source:"alphaStops"},write:{enabled:!0,target:"alphaStops",overridePolicy(){return{enabled:!!this.opacityStops&&this.opacityStops.length>0}}}}})],be.prototype,"opacityStops",null),(0,o._)([(0,u.Cb)({type:de,json:{write:!0}})],be.prototype,"rangeFilter",void 0),(0,o._)([(0,u.Cb)({type:[ie.Z],clonable:!1,json:{read:!1}})],be.prototype,"rasterizedTransferFunction",null),be=(0,o._)([(0,y.j)("esri.layers.voxel.VoxelTransferFunctionStyle")],be);const ve=be,me=["r","g","b"];let ge=class extends((0,z.J)(R.wq)){constructor(){super(...arguments),this.color=ie.Z.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label=""}};(0,o._)([(0,u.Cb)({type:ie.Z,json:{type:[c.z8],write:{enabled:!0,isRequired:!0}}})],ge.prototype,"color",void 0),(0,o._)([(0,u.Cb)({type:c.z8,json:{write:{enabled:!0,isRequired:!0}}})],ge.prototype,"value",void 0),(0,o._)([(0,u.Cb)({type:Boolean,json:{default:!0,write:!0}})],ge.prototype,"enabled",void 0),(0,o._)([(0,u.Cb)({type:String,json:{write:!0}})],ge.prototype,"label",void 0),ge=(0,o._)([(0,y.j)("esri.layers.voxel.VoxelUniqueValue")],ge);const fe=ge;var Se;let _e=Se=class extends R.wq{constructor(e){super(e),this.variableId=0,this.label="",this.transferFunction=null,this.uniqueValues=null,this.isosurfaces=null,this.uniqueValues=new(s.Z.ofType(fe)),this.isosurfaces=new(s.Z.ofType(re))}clone(){return new Se({variableId:this.variableId,label:this.label,transferFunction:(0,te.d9)(this.transferFunction),uniqueValues:(0,te.d9)(this.uniqueValues),isosurfaces:(0,te.d9)(this.isosurfaces)})}};(0,o._)([(0,u.Cb)({type:c.z8,json:{write:{enabled:!0,isRequired:!0}}})],_e.prototype,"variableId",void 0),(0,o._)([(0,u.Cb)({type:String,json:{write:!0}})],_e.prototype,"label",void 0),(0,o._)([(0,u.Cb)({type:ve,json:{write:{enabled:!0,overridePolicy(){return{enabled:!this.uniqueValues||this.uniqueValues.length<1}}}}})],_e.prototype,"transferFunction",void 0),(0,o._)([(0,u.Cb)({type:s.Z.ofType(fe),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.uniqueValues&&this.uniqueValues.length>0}}}}})],_e.prototype,"uniqueValues",void 0),(0,o._)([(0,u.Cb)({type:s.Z.ofType(re),json:{write:{enabled:!0,overridePolicy(){const e=!this.uniqueValues||this.uniqueValues.length<1,t=!!this.isosurfaces&&this.isosurfaces.length>0;return{enabled:e&&t}}}}})],_e.prototype,"isosurfaces",void 0),_e=Se=(0,o._)([(0,y.j)("esri.layers.voxel.VoxelVariableStyle")],_e);const we=_e;var xe=i(585),Ve=i(78952),Ce=i(92975);let je=class extends R.wq{constructor(){super(...arguments),this.values=null}};(0,o._)([(0,u.Cb)({type:[Number],json:{write:!0}})],je.prototype,"values",void 0),je=(0,o._)([(0,y.j)("esri.layers.voxel.VoxelIrregularSpacing")],je);const ze=je;let qe=class extends R.wq{constructor(){super(...arguments),this.scale=1,this.offset=0}};(0,o._)([(0,u.Cb)({type:Number,json:{write:!0}})],qe.prototype,"scale",void 0),(0,o._)([(0,u.Cb)({type:Number,json:{write:!0}})],qe.prototype,"offset",void 0),qe=(0,o._)([(0,y.j)("esri.layers.voxel.VoxelRegularSpacing")],qe);const Re=qe;let Ie=class extends R.wq{constructor(){super(...arguments),this.irregularSpacing=null,this.isPositiveUp=!0,this.isWrappedDateLine=!1,this.label=null,this.name=null,this.quantity=null,this.regularSpacing=null,this.size=0,this.unit=null}get isRegular(){return(null==this.irregularSpacing||void 0===this.irregularSpacing)&&null!==this.regularSpacing}getRange(){var e;return this.isRegular?[this.regularSpacing.offset,this.regularSpacing.offset+this.regularSpacing.scale*(this.size-1)]:Array.isArray(null===(e=this.irregularSpacing)||void 0===e?void 0:e.values)&&this.irregularSpacing.values.length>1?[this.irregularSpacing.values[0],this.irregularSpacing.values[this.irregularSpacing.values.length-1]]:[0,0]}};(0,o._)([(0,u.Cb)({type:ze,json:{write:!0}})],Ie.prototype,"irregularSpacing",void 0),(0,o._)([(0,u.Cb)({type:Boolean,json:{write:!0}})],Ie.prototype,"isPositiveUp",void 0),(0,o._)([(0,u.Cb)({type:Boolean,json:{write:!0}})],Ie.prototype,"isWrappedDateLine",void 0),(0,o._)([(0,u.Cb)({type:String,json:{write:!0}})],Ie.prototype,"label",void 0),(0,o._)([(0,u.Cb)({type:String,json:{write:!0}})],Ie.prototype,"name",void 0),(0,o._)([(0,u.Cb)({type:String,json:{write:!0}})],Ie.prototype,"quantity",void 0),(0,o._)([(0,u.Cb)({type:Re,json:{write:!0}})],Ie.prototype,"regularSpacing",void 0),(0,o._)([(0,u.Cb)({type:Number,json:{write:!0}})],Ie.prototype,"size",void 0),(0,o._)([(0,u.Cb)({type:String,json:{write:!0}})],Ie.prototype,"unit",void 0),(0,o._)([(0,u.Cb)({type:Boolean,json:{read:!1}})],Ie.prototype,"isRegular",null),Ie=(0,o._)([(0,y.j)("esri.layers.voxel.VoxelDimension")],Ie);const Ne=Ie,Ze="esri.layers.voxel.VoxelVolume",Te=l.Z.getLogger(Ze);let De=class extends R.wq{constructor(e){super(e),this.id=0,this.dimensions=null,this.spatialReference=Ve.Z.WGS84}get zDimension(){if(!this.dimensions)return-1;if(!Array.isArray(this.dimensions))return-1;if(4!==this.dimensions.length)return-1;for(let e=2;e<4;++e)if(this.dimensions[e].size>0)return e;return-1}get isValid(){return!!this.dimensions&&!!Array.isArray(this.dimensions)&&4===this.dimensions.length&&!(this.dimensions[0].size<1||this.dimensions[1].size<1)&&!(-1===this.zDimension||this.dimensions[this.zDimension].size<1)}get originInLayerSpace3D(){if(!this.isValid||"xyt"===this.volumeType)return[0,0,0];const e=this.dimensions[0].getRange(),t=this.dimensions[1].getRange(),i=this.dimensions[2],o=i.isRegular?i.getRange():[0,i.size];return[e[0],t[0],o[0]]}get voxelSizeInLayerSpaceSigned(){if(!this.isValid||"xyt"===this.volumeType)return[0,0,0];const e=this.dimensions[0].getRange(),t=this.dimensions[1].getRange(),i=this.dimensions[2],o=i.isRegular?i.getRange():[0,i.size],r=[this.sizeInVoxels[0],this.sizeInVoxels[1],this.sizeInVoxels[2]];for(let s=0;s<3;++s)r[s]<2?r[s]=1:r[s]-=1;return i.isRegular&&!i.isPositiveUp&&(r[2]*=-1),[(e[1]-e[0])/r[0],(t[1]-t[0])/r[1],(o[1]-o[0])/r[2]]}get volumeType(){if(this.isValid){const e=this.dimensions[2].size>0,t=this.dimensions[3].size>0;if(!e&&t)return"xyt";if(e&&t)return"xyzt"}return"xyz"}get sizeInVoxels(){if(!this.isValid)return[0,0,0];const e=this.zDimension;return[this.dimensions[0].size,this.dimensions[1].size,this.dimensions[e].size]}computeVoxelSpaceLocation(e){var t,i;if(!this.isValid)return[0,0,0];if("xyt"===this.volumeType)return Te.error("computeVoxelSpacePosition cannot be used with XYT volumes."),[0,0,0];if(!(0,Ce.fS)(this.spatialReference,e.spatialReference))return Te.error("pos argument should have the same spatial reference as the VoxelLayer."),[0,0,0];const o=(0,b.f)(e.x,e.y,null!==(t=e.z)&&void 0!==t?t:0);(0,h.f)(o,o,this.originInLayerSpace3D),(0,h.B)(o,o,this.voxelSizeInLayerSpaceSigned);const r=this.dimensions[this.zDimension];if(!r.isRegular&&Array.isArray(null===(i=r.irregularSpacing)||void 0===i?void 0:i.values)&&r.irregularSpacing.values.length>1){var s;const t=null!==(s=e.z)&&void 0!==s?s:0,i=r.irregularSpacing.values,n=r.isPositiveUp?1:-1,l=i.reduce(((e,i)=>Math.abs(n*i-t)<Math.abs(n*e-t)?i:e));for(let e=0;e<i.length;++e)if(i[e]===l){o[2]=e;break}}return[o[0],o[1],o[2]]}computeLayerSpaceLocation(e){var t;if(!this.isValid)return new xe.Z({x:0,y:0,spatialReference:this.spatialReference});const i=(0,b.e)(e);if((0,h.A)(i,i,this.voxelSizeInLayerSpaceSigned),(0,h.g)(i,i,this.originInLayerSpace3D),"xyt"===this.volumeType)return new xe.Z({x:i[0],y:i[1],spatialReference:this.spatialReference});const o=this.dimensions[this.zDimension];return o.isRegular||Array.isArray(null===(t=o.irregularSpacing)||void 0===t?void 0:t.values)&&(e[2]<0?i[2]=o.irregularSpacing.values[0]:e[2]<o.irregularSpacing.values.length?i[2]=o.irregularSpacing.values[e[2]]:i[2]=o.irregularSpacing.values[o.irregularSpacing.values.length-1],o.isPositiveUp||(i[2]*=-1)),new xe.Z({x:i[0],y:i[1],z:i[2],spatialReference:this.spatialReference})}};(0,o._)([(0,u.Cb)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],De.prototype,"id",void 0),(0,o._)([(0,u.Cb)({type:[Ne],json:{write:{enabled:!0,isRequired:!0}}})],De.prototype,"dimensions",void 0),(0,o._)([(0,u.Cb)({type:Ve.Z,json:{read:{enabled:!1}}})],De.prototype,"spatialReference",void 0),(0,o._)([(0,u.Cb)({type:Number,json:{read:!1}})],De.prototype,"zDimension",null),(0,o._)([(0,u.Cb)({type:[Boolean],json:{read:!1}})],De.prototype,"isValid",null),(0,o._)([(0,u.Cb)({type:[Number],json:{read:!1}})],De.prototype,"originInLayerSpace3D",null),(0,o._)([(0,u.Cb)({type:[Number],json:{read:!1}})],De.prototype,"voxelSizeInLayerSpaceSigned",null),(0,o._)([(0,u.Cb)({type:["xyz","xyzt","xyt"],json:{read:{enabled:!1}}})],De.prototype,"volumeType",null),(0,o._)([(0,u.Cb)({type:[Number],json:{read:!1}})],De.prototype,"sizeInVoxels",null),De=(0,o._)([(0,y.j)(Ze)],De);const Ae=De;var Fe;let Le=Fe=class extends R.wq{constructor(){super(...arguments),this.apronWidth=1,this.brickSize=[32,32,32],this.maxLodLevel=0,this.nodeSize=[4,4,4]}isValid(){const e=new Fe;return e.apronWidth===this.apronWidth&&e.maxLodLevel===this.maxLodLevel&&!!this.brickSize&&!!this.nodeSize&&!(!Array.isArray(this.brickSize)||!Array.isArray(this.nodeSize))&&3===this.brickSize.length&&3===this.nodeSize.length&&32===this.brickSize[0]&&32===this.brickSize[1]&&32===this.brickSize[2]&&4===this.nodeSize[0]&&4===this.nodeSize[1]&&4===this.nodeSize[2]}};(0,o._)([(0,u.Cb)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],Le.prototype,"apronWidth",void 0),(0,o._)([(0,u.Cb)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],Le.prototype,"brickSize",void 0),(0,o._)([(0,u.Cb)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],Le.prototype,"maxLodLevel",void 0),(0,o._)([(0,u.Cb)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],Le.prototype,"nodeSize",void 0),Le=Fe=(0,o._)([(0,y.j)("esri.layers.voxel.VoxelVolumeIndex")],Le);const Be=Le;let Pe=class extends((0,z.J)(R.wq)){constructor(e){super(e),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[e,t]=E(this.normal);return q.BV.normalize((0,c.q9)(e),0,!0)}set orientation(e){const t=O(e,this.tilt);this._set("normal",t),this._set("orientation",e)}get tilt(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[e,t]=E(this.normal);return q.BV.normalize((0,c.q9)(t),0,!0)}set tilt(e){const t=O(this.orientation,e);this._set("normal",t),this._set("tilt",e)}};(0,o._)([(0,u.Cb)({type:Boolean,json:{default:!0,write:!0}})],Pe.prototype,"enabled",void 0),(0,o._)([(0,u.Cb)({type:String,json:{write:!0}})],Pe.prototype,"label",void 0),(0,o._)([(0,u.Cb)({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),(0,k.p)((e=>q.BV.normalize((0,c.q9)(e),0,!0)))],Pe.prototype,"orientation",null),(0,o._)([(0,u.Cb)({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),(0,k.p)((e=>q.BV.normalize((0,c.q9)(e),0,!0)))],Pe.prototype,"tilt",null),(0,o._)([(0,u.Cb)({type:[Number],json:{write:!0}})],Pe.prototype,"normal",void 0),(0,o._)([(0,u.Cb)({type:[Number],json:{write:!0}})],Pe.prototype,"point",void 0),Pe=(0,o._)([(0,y.j)("esri.layers.voxel.VoxelDynamicSection")],Pe);const Me=Pe;var Ee;let Oe=Ee=class extends R.wq{constructor(e){super(e),this.volumeId=0,this.verticalExaggeration=1,this.exaggerationMode="scale-height",this.verticalOffset=0,this.slices=new(s.Z.ofType(U)),this.dynamicSections=new(s.Z.ofType(Me))}set slices(e){this._set("slices",(0,se.Z)(e,this._get("slices"),s.Z.ofType(U)))}set dynamicSections(e){this._set("dynamicSections",(0,se.Z)(e,this._get("dynamicSections"),s.Z.ofType(Me)))}clone(){return new Ee({volumeId:this.volumeId,verticalExaggeration:this.verticalExaggeration,exaggerationMode:this.exaggerationMode,verticalOffset:this.verticalOffset,slices:(0,te.d9)(this.slices),dynamicSections:(0,te.d9)(this.dynamicSections)})}};(0,o._)([(0,u.Cb)({type:c.z8,json:{write:{enabled:!0,isRequired:!0}}})],Oe.prototype,"volumeId",void 0),(0,o._)([(0,u.Cb)({type:Number,json:{default:1,write:!0}})],Oe.prototype,"verticalExaggeration",void 0),(0,o._)([(0,u.Cb)({type:["scale-position","scale-height"],json:{default:"scale-height",write:!0}})],Oe.prototype,"exaggerationMode",void 0),(0,o._)([(0,u.Cb)({type:Number,json:{default:0,write:!0}})],Oe.prototype,"verticalOffset",void 0),(0,o._)([(0,u.Cb)({type:s.Z.ofType(U),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.slices&&this.slices.length>0}}}}})],Oe.prototype,"slices",null),(0,o._)([(0,u.Cb)({type:s.Z.ofType(Me),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.dynamicSections&&this.dynamicSections.length>0}}}}})],Oe.prototype,"dynamicSections",null),Oe=Ee=(0,o._)([(0,y.j)("esri.layers.voxel.VoxelVolumeStyle")],Oe);const ke=Oe;var Je=i(81085);const Ue="esri.layers.VoxelLayer",We=l.Z.getLogger(Ue);let Ye=class extends((0,x.Vt)((0,f.Y)((0,S.q)((0,_.I)((0,w.M)((0,a.R)((0,g.V)(m.Z)))))))){constructor(e){super(e),this.serviceRoot="",this.operationalLayerType="Voxel",this.legendEnabled=!0,this.title=null,this.sections=null,this.currentVariableId=0,this.volumeStyles=null,this.renderMode="volume",this.variableStyles=null,this.enableSlices=!0,this.enableSections=!0,this.enableDynamicSections=!0,this.enableIsosurfaces=!0,this.shading=new Q,this.opacity=1,this.variables=new s.Z,this.volumes=new s.Z,this.index=null,this.minScale=0,this.maxScale=0,this.type="voxel",this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.fullExtent=null,this.popupEnabled=!1,this.test=null,this.volumeStyles=new(s.Z.ofType(ke)),this.variableStyles=new(s.Z.ofType(we)),this.sections=new(s.Z.ofType(G))}normalizeCtorArgs(e){return null!==e&&void 0!==e&&e.constantUpscaling&&(this.test={constantUpscaling:!0},delete e.constantUpscaling),e}set url(e){this._set("url",(0,V.Nm)(e,We))}load(e){const t=null!=e?e.signal:null,i=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(p.r9).then((()=>this._fetchService(t))).then((()=>this.serviceRoot=this.url));return this.addResolvingPromise(i),Promise.resolve(this)}read(e,t){super.read(e,t);for(const i of this.volumes)i.spatialReference=this.spatialReference}readVersion(e,t){return super.parseVersionString(e)}validateLayer(e){if(e.layerType&&e.layerType!==this.operationalLayerType)throw new n.Z("voxel-layer:layer-type-not-supported","VoxelLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor)||this.version.major<3)throw new n.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"});if(this.version.major>3)throw new n.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"})}readFullExtent(e,t,i){if(null!=e&&"object"==typeof e){const o=v.Z.fromJSON(e,i);if(0===o.zmin&&0===o.zmax&&Array.isArray(t.volumes)){const e=Ae.fromJSON(t.volumes[0]);if(e.isValid&&"xyt"!==e.volumeType){const t=e.dimensions[2];if(t.isRegular){let e=t.regularSpacing.offset,i=t.regularSpacing.offset+t.regularSpacing.scale*(t.size-1);if(e>i){const t=e;e=i,i=t}o.zmin=e,o.zmax=i}}}return o}return null}get voxelFields(){const e=[new j.Z({name:"Voxel.ServiceValue",alias:"Value",domain:null,editable:!1,length:128,type:"string"}),new j.Z({name:"Voxel.ServiceVariableLabel",alias:"Variable",domain:null,editable:!1,length:128,type:"string"}),new j.Z({name:"Voxel.Position",alias:"Voxel Position",domain:null,editable:!1,length:128,type:"string"})],t=this.getVolume(null);if(null!=t){if("xyzt"===t.volumeType||"xyt"===t.volumeType){const t=new j.Z({name:"Voxel.ServiceLocalTime",alias:"Local Time",domain:null,editable:!1,length:128,type:"string"});e.push(t);const i=new j.Z({name:"Voxel.ServiceNativeTime",alias:"Native Time",domain:null,editable:!1,length:128,type:"string"});e.push(i)}if("xyt"!==t.volumeType){const t=new j.Z({name:"Voxel.ServiceDepth",alias:"Depth",domain:null,editable:!1,length:128,type:"string"});e.push(t)}}return e}get popupTemplate(){return this.loaded?this.createPopupTemplate():null}get defaultPopupTemplate(){return this.createPopupTemplate()}createPopupTemplate(e){const t=this.voxelFields,i=this.title;return(0,Je.eZ)({fields:t,title:i},e)}getConfiguration(){var e,t;const i={layerType:this.operationalLayerType,version:this.version.versionString,name:this.title,spatialReference:this.spatialReference,fullExtent:this.fullExtent,volumes:this.volumes.toJSON(),variables:this.variables.toJSON(),index:null===(e=this.index)||void 0===e?void 0:e.toJSON(),sections:this.getSections(),style:{volumeStyles:this.getVolumeStyles(),currentVariableId:this.currentVariableId,renderMode:this.renderMode,variableStyles:this.getVariableStyles(),enableSections:this.enableSections,enableDynamicSections:this.enableDynamicSections,enableIsosurfaces:this.enableIsosurfaces,enableSlices:this.enableSlices,shading:this.shading}};return i.index&&null!==(t=this.index)&&void 0!==t&&t.isValid()?JSON.stringify(i):""}getVariableStyle(e){let t=-1;if(t=null!=e?e:this.currentVariableId,!this.variableStyles||-1===t)return null;const i=this.variableStyles.findIndex((e=>e.variableId===t));return i<0?null:this.variableStyles.at(i)}getVariable(e){let t=-1;if(t=null!=e?e:this.currentVariableId,!this.variables||-1===t)return null;const i=this.variables.findIndex((e=>e.id===t));return i<0?null:this.variables.at(i)}getVolume(e){const t=this.getVariable(e);return null!=t?this.volumes.find((e=>{let{id:i}=e;return i===t.volumeId})):null}getVolumeStyle(e){const t=this.getVariable(e);return null!=t?this.volumeStyles.find((e=>{let{volumeId:i}=e;return i===t.volumeId})):null}getColorForContinuousDataValue(e,t,i){var o;const r=this.getVariable(e);if(null==r||"continuous"!==(null===(o=r.renderingFormat)||void 0===o?void 0:o.continuity))return null;if(!this.variableStyles)return null;const s=this.variableStyles.findIndex((t=>t.variableId===e));if(s<0)return null;const n=this.variableStyles.at(s);return null!==n&&void 0!==n&&n.transferFunction?n.transferFunction.getColorForContinuousDataValue(t,i):null}getSections(){const e=[];for(const t of this.sections)e.push(new G({enabled:t.enabled,href:t.href,id:t.id,label:t.label,normal:t.normal,point:t.point,sizeInPixel:t.sizeInPixel,slices:t.slices,timeId:t.timeId,variableId:t.variableId}));return e}getVariableStyles(){const e=[];for(const t of this.variableStyles){const i=this._getVariable(t);if(null!=i){const o=t.clone();o.isosurfaces.length>4&&(o.isosurfaces=o.isosurfaces.slice(0,3),We.error("A maximum of 4 isosurfaces are supported for Voxel Layers."));for(const e of o.isosurfaces)if(!e.colorLocked){const t=this.getColorForContinuousDataValue(o.variableId,e.value,!1);null===t||t.equals(e.color)||(e.color=t)}if("continuous"===i.renderingFormat.continuity)(null===o.transferFunction||o.transferFunction.colorStops.length<2)&&We.error("VoxelVariableStyle for variable ".concat(i.id," is invalid. At least 2 color stops are required in the transferFunction for continuous Voxel Layer variables.")),null!==o.transferFunction&&(Array.isArray(o.transferFunction.stretchRange)&&2===o.transferFunction.stretchRange.length||(We.error("VoxelVariableStyle for variable ".concat(i.id," is invalid. The stretchRange of the transferFunction for continuous Voxel Layer variables must be of the form [minimumDataValue, maximumDataValue].")),o.transferFunction.stretchRange=[0,1],o.transferFunction.colorStops.removeAll()));else if("discrete"===i.renderingFormat.continuity)if(0===t.uniqueValues.length)We.error("VoxelVariableStyle for variable ".concat(i.id," is invalid. Unique values are required for discrete Voxel Layer variables."));else for(const e of t.uniqueValues)null!==e.label&&void 0!==e.label||null===e.value||void 0===e.value||(e.label=e.value.toString());e.push(o)}else We.error("VoxelVariable ID=".concat(t.variableId," doesn't exist, VoxelVariableStyle for this VoxelVariable will be ignored."))}return e}getVolumeStyles(){const e=[];for(const t of this.volumeStyles){const i=this._getVolumeFromVolumeId(t.volumeId);if(null!=i){const o=t.clone();for(const e of o.slices)this._isPlaneValid(e,[0,1,i.zDimension],i.dimensions)||(e.enabled=!1,e.label="invalid");for(const e of o.dynamicSections)this._isPlaneValid(e,[0,1,i.zDimension],i.dimensions)||(e.enabled=!1,e.label="invalid");e.push(o)}else We.error("VoxelVolume ID=".concat(t.volumeId," doesn't exist, VoxelVolumeStyle for this VoxelVolume will be ignored."))}return e}_getVariable(e){const t=e.variableId;for(const i of this.variables)if(i.id===t)return i;return null}_getVolumeFromVolumeId(e){for(const t of this.volumes)if(t.id===e)return t;return null}_isPlaneValid(e,t,i){if(!e.point)return!1;if(!Array.isArray(e.point)||3!==e.point.length)return!1;if(!e.normal)return!1;if(!Array.isArray(e.normal)||3!==e.normal.length)return!1;const o=(0,b.f)(e.normal[0],e.normal[1],e.normal[2]);(0,h.n)(o,o);return!(Math.abs(o[0])+Math.abs(o[1])+Math.abs(o[2])<1e-6)&&(e.normal[0]=o[0],e.normal[1]=o[1],e.normal[2]=o[2],!0)}};(0,o._)([(0,u.Cb)({type:["Voxel"]})],Ye.prototype,"operationalLayerType",void 0),(0,o._)([(0,u.Cb)(C.rn)],Ye.prototype,"legendEnabled",void 0),(0,o._)([(0,u.Cb)({json:{write:!0}})],Ye.prototype,"title",void 0),(0,o._)([(0,u.Cb)(C.HQ)],Ye.prototype,"url",null),(0,o._)([(0,u.Cb)({type:s.Z.ofType(G),json:{origins:{"web-scene":{name:"layerDefinition.sections",write:!0}}}})],Ye.prototype,"sections",void 0),(0,o._)([(0,u.Cb)({type:c.z8,json:{origins:{"web-scene":{name:"layerDefinition.style.currentVariableId",write:{enabled:!0,isRequired:!0,ignoreOrigin:!0}},service:{name:"style.currentVariableId"}}}})],Ye.prototype,"currentVariableId",void 0),(0,o._)([(0,u.Cb)({type:s.Z.ofType(ke),json:{origins:{"web-scene":{name:"layerDefinition.style.volumeStyles",write:!0},service:{name:"style.volumeStyles"}}}})],Ye.prototype,"volumeStyles",void 0),(0,o._)([(0,u.Cb)({type:["volume","surfaces"],json:{origins:{"web-scene":{name:"layerDefinition.style.renderMode",write:!0},service:{name:"style.renderMode"}}}})],Ye.prototype,"renderMode",void 0),(0,o._)([(0,u.Cb)({type:s.Z.ofType(we),json:{origins:{"web-scene":{name:"layerDefinition.style.variableStyles",write:!0},service:{name:"style.variableStyles"}}}})],Ye.prototype,"variableStyles",void 0),(0,o._)([(0,u.Cb)({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSlices",write:!0},service:{name:"style.enableSlices"}}}})],Ye.prototype,"enableSlices",void 0),(0,o._)([(0,u.Cb)({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSections",write:!0},service:{name:"style.enableSections"}}}})],Ye.prototype,"enableSections",void 0),(0,o._)([(0,u.Cb)({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableDynamicSections",write:!0},service:{name:"style.enableDynamicSections"}}}})],Ye.prototype,"enableDynamicSections",void 0),(0,o._)([(0,u.Cb)({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableIsosurfaces",write:!0},service:{name:"style.enableIsosurfaces"}}}})],Ye.prototype,"enableIsosurfaces",void 0),(0,o._)([(0,u.Cb)({type:Q,json:{origins:{"web-scene":{name:"layerDefinition.style.shading",write:!0},service:{name:"style.shading"}}}})],Ye.prototype,"shading",void 0),(0,o._)([(0,u.Cb)({type:["show","hide"]})],Ye.prototype,"listMode",void 0),(0,o._)([(0,u.Cb)({type:Number,range:{min:0,max:1},nonNullable:!0,json:{read:!1,write:!1,origins:{"web-scene":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],Ye.prototype,"opacity",void 0),(0,o._)([(0,u.Cb)({type:s.Z.ofType(ee)})],Ye.prototype,"variables",void 0),(0,o._)([(0,u.Cb)({type:s.Z.ofType(Ae)})],Ye.prototype,"volumes",void 0),(0,o._)([(0,u.Cb)({type:Be})],Ye.prototype,"index",void 0),(0,o._)([(0,u.Cb)({type:Number,json:{name:"layerDefinition.minScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],Ye.prototype,"minScale",void 0),(0,o._)([(0,u.Cb)({type:Number,json:{name:"layerDefinition.maxScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],Ye.prototype,"maxScale",void 0),(0,o._)([(0,u.Cb)({json:{read:!1},readOnly:!0})],Ye.prototype,"type",void 0),(0,o._)([(0,u.Cb)({readOnly:!0,json:{name:"serviceVersion"}})],Ye.prototype,"version",void 0),(0,o._)([(0,d.r)("service","version")],Ye.prototype,"readVersion",null),(0,o._)([(0,u.Cb)({type:v.Z})],Ye.prototype,"fullExtent",void 0),(0,o._)([(0,d.r)("service","fullExtent",["fullExtent"])],Ye.prototype,"readFullExtent",null),(0,o._)([(0,u.Cb)({readOnly:!0,clonable:!1,json:{read:!1}})],Ye.prototype,"voxelFields",null),(0,o._)([(0,u.Cb)({type:Boolean,json:{name:"disablePopup",read:{reader:(e,t)=>!t.disablePopup},write:{enabled:!0,ignoreOrigin:!0,writer(e,t,i){t[i]=!e}},origins:{"portal-item":{default:!0},"web-scene":{default:!0}}}})],Ye.prototype,"popupEnabled",void 0),(0,o._)([(0,u.Cb)({type:r.Z,json:{read:!1}})],Ye.prototype,"popupTemplate",null),(0,o._)([(0,u.Cb)({readOnly:!0})],Ye.prototype,"defaultPopupTemplate",null),Ye=(0,o._)([(0,y.j)(Ue)],Ye);const Ge=Ye}}]);
//# sourceMappingURL=1080.249b689f.chunk.js.map