"use strict";(self.webpackChunkn2_compile=self.webpackChunkn2_compile||[]).push([[9887],{91340:(e,t,a)=>{a.d(t,{aX:()=>A});var r=a(42265),n=a(10064),s=a(32718),i=a(80885),o=a(29909),l=a(76335),u=a(92975),d=a(81753),p=(a(59486),a(76200)),c=a(77981),f=a(23084);var h=a(35995),y=a(35594);const m=()=>s.Z.getLogger("esri.geometry.support.normalizeUtils");function g(e){return"polygon"===e[0].type}function b(e){return"polyline"===e[0].type}function w(e,t,a){if(t){const t=function(e,t){if(!(e instanceof o.Z||e instanceof i.Z)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw m().error(e),new n.Z(e)}const a=(0,l.x3)(e),r=[];for(const n of a){const e=[];r.push(e),e.push([n[0][0],n[0][1]]);for(let a=0;a<n.length-1;a++){const r=n[a][0],s=n[a][1],i=n[a+1][0],o=n[a+1][1],l=Math.sqrt((i-r)*(i-r)+(o-s)*(o-s)),u=(o-s)/l,d=(i-r)/l,p=l/t;if(p>1){for(let o=1;o<=p-1;o++){const a=o*t,n=d*a+r,i=u*a+s;e.push([n,i])}const a=(l+Math.floor(p-1)*t)/2,n=d*a+r,i=u*a+s;e.push([n,i])}e.push([i,o])}}return function(e){return"polygon"===e.type}(e)?new i.Z({rings:r,spatialReference:e.spatialReference}):new o.Z({paths:r,spatialReference:e.spatialReference})}(e,1e6);e=(0,d.Sx)(t,!0)}return a&&(e=(0,l.Sy)(e,a)),e}function F(e,t,a){if(Array.isArray(e)){const r=e[0];if(r>t){const a=(0,l.XZ)(r,t);e[0]=r+a*(-2*t)}else if(r<a){const t=(0,l.XZ)(r,a);e[0]=r+t*(-2*a)}}else{const r=e.x;if(r>t){const a=(0,l.XZ)(r,t);e=e.clone().offset(a*(-2*t),0)}else if(r<a){const t=(0,l.XZ)(r,a);e=e.clone().offset(t*(-2*a),0)}}return e}function Z(e,t){let a=-1;for(let r=0;r<t.cutIndexes.length;r++){const n=t.cutIndexes[r],s=t.geometries[r],i=(0,l.x3)(s);for(let e=0;e<i.length;e++){const t=i[e];t.some((a=>{if(a[0]<180)return!0;{let a=0;for(let e=0;e<t.length;e++){const r=t[e][0];a=r>a?r:a}a=Number(a.toFixed(9));const r=-360*(0,l.XZ)(a,180);for(let n=0;n<t.length;n++){const t=s.getPoint(e,n);s.setPoint(e,n,t.clone().offset(r,0))}return!0}}))}if(n===a){if(g(e))for(const t of(0,l.x3)(s))e[n]=e[n].addRing(t);else if(b(e))for(const t of(0,l.x3)(s))e[n]=e[n].addPath(t)}else a=n,e[n]=s}return e}async function A(e,t,a){if(!Array.isArray(e))return A([e],t);t&&"string"!=typeof t&&m().warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const n="string"==typeof t?t:t?.url??r.default.geometryServiceUrl;let s,g,b,v,I,S,R,$,E=0;const x=[],O=[];for(const r of e)if(null!=r)if(s||(s=r.spatialReference,g=(0,u.C5)(s),b=s.isWebMercator,S=b?102100:4326,v=l.UZ[S].maxX,I=l.UZ[S].minX,R=l.UZ[S].plus180Line,$=l.UZ[S].minus180Line),g)if("mesh"===r.type)O.push(r);else if("point"===r.type)O.push(F(r.clone(),v,I));else if("multipoint"===r.type){const e=r.clone();e.points=e.points.map((e=>F(e,v,I))),O.push(e)}else if("extent"===r.type){const e=r.clone()._normalize(!1,!1,g);O.push(e.rings?new i.Z(e):e)}else if(r.extent){const e=r.extent,t=(0,l.XZ)(e.xmin,I)*(2*v);let a=0===t?r.clone():(0,l.Sy)(r.clone(),t);e.offset(t,0);let{xmin:n,xmax:s}=e;n=Number(n.toFixed(9)),s=Number(s.toFixed(9)),e.intersects(R)&&s!==v?(E=s>E?s:E,a=w(a,b),x.push(a),O.push("cut")):e.intersects($)&&n!==I?(E=s*(2*v)>E?s*(2*v):E,a=w(a,b,360),x.push(a),O.push("cut")):O.push(a)}else O.push(r.clone());else O.push(r);else O.push(r);let k=(0,l.XZ)(E,v),L=-90;const U=k,X=new o.Z;for(;k>0;){const e=360*k-180;X.addPath([[e,L],[e,-1*L]]),L*=-1,k--}if(x.length>0&&U>0){const t=Z(x,await async function(e,t,a,r){const n=(0,f.en)(e),s=t[0].spatialReference,i={...r,responseType:"json",query:{...n.query,f:"json",sr:(0,u.B9)(s),target:JSON.stringify({geometryType:(0,c.Ji)(t[0]),geometries:t}),cutter:JSON.stringify(a)}},o=await(0,p.Z)(n.path+"/cut",i),{cutIndexes:l,geometries:d=[]}=o.data;return{cutIndexes:l,geometries:d.map((e=>{const t=(0,c.im)(e);return t.spatialReference=s,t}))}}(n,x,X,a)),r=[],s=[];for(let a=0;a<O.length;a++){const n=O[a];if("cut"!==n)s.push(n);else{const n=t.shift(),i=e[a];null!=i&&"polygon"===i.type&&i.rings&&i.rings.length>1&&n.rings.length>=i.rings.length?(r.push(n),s.push("simplify")):s.push(b?(0,d.$)(n):n)}}if(!r.length)return s;const i=await async function(e,t,a){const r="string"==typeof e?(0,h.mN)(e):e,n=t[0].spatialReference,s=(0,c.Ji)(t[0]),i={...a,query:{...r.query,f:"json",sr:(0,u.B9)(n),geometries:JSON.stringify((0,y.F)(t))}},{data:o}=await(0,p.Z)(r.path+"/simplify",i);return(0,y.o)(o.geometries,s,n)}(n,r,a),o=[];for(let e=0;e<s.length;e++){const t=s[e];"simplify"!==t?o.push(t):o.push(b?(0,d.$)(i.shift()):i.shift())}return o}const j=[];for(let r=0;r<O.length;r++){const e=O[r];if("cut"!==e)j.push(e);else{const e=x.shift();j.push(!0===b?(0,d.$)(e):e)}}return j}},76335:(e,t,a)=>{a.d(t,{Sy:()=>l,UZ:()=>i,XZ:()=>o,x3:()=>u});var r=a(29909),n=a(78952),s=a(77981);const i={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new r.Z({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:n.Z.WebMercator}),minus180Line:new r.Z({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:n.Z.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new r.Z({paths:[[[180,-180],[180,180]]],spatialReference:n.Z.WGS84}),minus180Line:new r.Z({paths:[[[-180,-180],[-180,180]]],spatialReference:n.Z.WGS84})}};function o(e,t){return Math.ceil((e-t)/(2*t))}function l(e,t){const a=u(e);for(const r of a)for(const e of r)e[0]+=t;return e}function u(e){return(0,s.oU)(e)?e.rings:e.paths}},29887:(e,t,a)=>{a.d(t,{Ey:()=>Z,applyEdits:()=>A,aw:()=>w,uploadAssets:()=>x});var r=a(52639),n=a(80987),s=a(10064),i=a(84652),o=a(32718),l=a(66978),u=a(35995),d=a(71907),p=a(91340),c=a(92975),f=a(56601),h=a(37270),y=a(18277),m=a(37933);function g(e){return null!=e?.applyEdits}function b(e){return"object"==typeof e&&null!=e&&"objectId"in e&&!!e.objectId}function w(e){return e.every(b)}function F(e){return"object"==typeof e&&null!=e&&"globalId"in e&&!!e.globalId}function Z(e){return e.every(F)}async function A(e,t,a){let r,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const p="gdbVersion"in e?e.gdbVersion:null,c=u.gdbVersion??p;if((0,f.lQ)(e)&&e.url)r=(0,f.jF)(e.url,e.layerId,c,"original-and-current-features"===u.returnServiceEditsOption);else{r=(0,l.hh)(),r.promise.then((t=>{(t.addedFeatures.length||t.updatedFeatures.length||t.deletedFeatures.length||t.addedAttachments.length||t.updatedAttachments.length||t.deletedAttachments.length)&&e.emit("edits",t)}));const t={result:r.promise};e.emit("apply-edits",t)}try{const{results:l,edits:p}=await async function(e,t,a,r){if(await e.load(),!g(t))throw new s.Z(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!(0,m.ln)(e))throw new s.Z(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:i,options:l}=await async function(e,t,a){const r=(0,m.S1)(e),i=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),l=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),u=null!=e.infoFor3D;if(function(e,t,a,r,n,i){if(!e||!r&&!n)throw new s.Z(`${i}:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!t.editing.supportsGlobalId&&a?.globalIdUsed)throw new s.Z(`${i}:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!t.editing.supportsGlobalId&&n)throw new s.Z(`${i}:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!a?.globalIdUsed&&n)throw new s.Z(`${i}:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true")}(t,r,a,!!i,!!l,`${e.type}-layer`),!r.data.isVersioned&&a?.gdbVersion)throw new s.Z(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!r.editing.supportsRollbackOnFailure&&a?.rollbackOnFailureEnabled)throw new s.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");const p={...a};if(null!=p.rollbackOnFailureEnabled||r.editing.supportsRollbackOnFailure||(p.rollbackOnFailureEnabled=!0),p.rollbackOnFailureEnabled||"original-and-current-features"!==p.returnServiceEditsOption||(!1===p.rollbackOnFailureEnabled&&o.Z.getLogger("esri.layers.graphics.editingSupport").warn(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwritten and set to true."),p.rollbackOnFailureEnabled=!0),!r.editing.supportsReturnServiceEditsInSourceSpatialReference&&p.returnServiceEditsInSourceSR)throw new s.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(p.returnServiceEditsInSourceSR&&"original-and-current-features"!==p.returnServiceEditsOption)throw new s.Z(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const c=function(e,t,a){const r=function(e){return{addFeatures:Array.from(e?.addFeatures??[]),updateFeatures:Array.from(e?.updateFeatures??[]),deleteFeatures:e&&n.Z.isCollection(e.deleteFeatures)?e.deleteFeatures.toArray():e.deleteFeatures||[],addAttachments:e.addAttachments||[],updateAttachments:e.updateAttachments||[],deleteAttachments:e.deleteAttachments||[]}}(e);if(r.addFeatures?.length&&!t.operations.supportsAdd)throw new s.Z(`${a}:unsupported-operation`,"Layer does not support adding features.");if(r.updateFeatures?.length&&!t.operations.supportsUpdate)throw new s.Z(`${a}:unsupported-operation`,"Layer does not support updating features.");if(r.deleteFeatures?.length&&!t.operations.supportsDelete)throw new s.Z(`${a}:unsupported-operation`,"Layer does not support deleting features.");return r.addFeatures=r.addFeatures.map($),r.updateFeatures=r.updateFeatures.map($),r.addAssetFeatures=[],r}(t,r,`${e.type}-layer`),f=a?.globalIdUsed||u,h=e.fields.filter((e=>"big-integer"===e.type||"oid"===e.type&&(e.length||0)>=8));if(f){const{globalIdField:t}=e;if(null==t)throw new s.Z(`${e.type}-layer:invalid-parameter`,"Layer does not specify a global id field.");c.addFeatures.forEach((e=>function(e,t){const{attributes:a}=e;null==a[t]&&(a[t]=(0,d.zS)())}(e,t)))}return c.addFeatures.forEach((t=>function(e,t,a,r){v(e,t,a,r),I(e,t)}(t,e,f,h))),c.updateFeatures.forEach((t=>function(e,t,a,r){v(e,t,a,r),I(e,t);const n=(0,m.S1)(t);if("geometry"in e&&null!=e.geometry&&!n?.editing.supportsGeometryUpdate)throw new s.Z(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}(t,e,f,h))),c.deleteFeatures.forEach((t=>function(e,t,a,r){v(e,t,a,r)}(t,e,f,h))),c.addAttachments.forEach((t=>S(t,e))),c.updateAttachments.forEach((t=>S(t,e))),u&&await async function(e,t){if(null==t.infoFor3D)return;const{infoFor3D:a}=t,r=(0,y.S0)("model/gltf-binary",a.supportedFormats)??(0,y.Ow)("glb",a.supportedFormats);if(!r||!a.editFormats.includes(r))throw new s.Z(`${t.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");e.addAssetFeatures??=[];const{addAssetFeatures:n}=e;for(const s of e.addFeatures??[])E(s)&&n.push(s);for(const s of e.updateFeatures??[])E(s)&&n.push(s)}(c,e),{edits:await R(c),options:p}}(e,a,r);return i.addFeatures?.length||i.updateFeatures?.length||i.deleteFeatures?.length||i.addAttachments?.length||i.updateAttachments?.length||i.deleteAttachments?.length?{edits:i,results:await t.applyEdits(i,l)}:{edits:i,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}(e,t,a,u),c=e=>e.filter((e=>!e.error)).map(i.d9),f={edits:p,addedFeatures:c(l.addFeatureResults),updatedFeatures:c(l.updateFeatureResults),deletedFeatures:c(l.deleteFeatureResults),addedAttachments:c(l.addAttachmentResults),updatedAttachments:c(l.updateAttachmentResults),deletedAttachments:c(l.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:l.editMoment?new Date(l.editMoment):null,globalIdToObjectId:u.globalIdToObjectId};return l.editedFeatureResults?.length&&(f.editedFeatures=l.editedFeatureResults),r.resolve(f),l}catch(h){throw r.reject(h),h}}function v(e,t,a,r){if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new s.Z(`${t.type}-layer:invalid-parameter`,`Feature should have '${t.globalIdField}' when 'globalIdUsed' is true`);if(!("attributes"in e)&&!e.globalId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"`'globalId' of the feature should be passed when 'globalIdUsed' is true")}if(r.length&&"attributes"in e)for(const n of r){const a=e.attributes[n.name];if(void 0!==a&&!(0,h.d2)(n,a))throw new s.Z(`${t.type}-layer:invalid-parameter`,`Big-integer field '${n.name}' of the feature must be less than ${Number.MAX_SAFE_INTEGER}`,{feature:e})}if("geometry"in e&&null!=e.geometry){if(e.geometry.hasZ&&!1===t.capabilities?.data.supportsZ)throw new s.Z(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities?.data.supportsM)throw new s.Z(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function I(e,t){if("geometry"in e&&"mesh"===e.geometry?.type&&null!=t.infoFor3D&&null!=t.spatialReference){const{geometry:a}=e,{spatialReference:r,vertexSpace:n}=a,i=t.spatialReference,o="local"===n.type,l=(0,c.sT)(i),u=(0,c.fS)(i,r),d=u||(0,c.oR)(i)&&((0,c.oR)(r)||(0,c.sS)(r));if(!(o&&l&&d||!o&&!l&&u))throw new s.Z(`${t.type}-layer:mesh-unsupported`,`Uploading a mesh with a ${n.type} vertex space and a spatial reference wkid:${r.wkid} to a layer with a spatial reference wkid:${i.wkid} is not supported.`)}}function S(e,t){const{feature:a,attachment:r}=e;if(!a||"attributes"in a&&!a.attributes[t.globalIdField])throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in a)&&!a.globalId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!r.globalId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!r.data&&!r.uploadId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(r.data instanceof File&&r.data.name)&&!r.name)throw new s.Z(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities?.editing.supportsUploadWithItemId&&r.uploadId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof r.data){const e=(0,u.sJ)(r.data);if(e&&!e.isBase64)throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function R(e){const t=e.addFeatures??[],a=e.updateFeatures??[],r=t.concat(a).map((e=>e.geometry)),n=await(0,p.aX)(r),s=t.length,i=a.length;return n.slice(0,s).forEach(((e,a)=>t[a].geometry=e)),n.slice(s,s+i).forEach(((e,t)=>a[t].geometry=e)),e}function $(e){const t=new r.Z;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}function E(e){return"mesh"===e?.geometry?.type}function x(e,t,a,r){if(!g(t))throw new s.Z(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new s.Z(`${e.type}-layer:no-asset-upload-support`,"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(a,r)}}}]);
//# sourceMappingURL=9887.71ed424a.chunk.js.map