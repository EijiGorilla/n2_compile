"use strict";(self.webpackChunkn2_compile=self.webpackChunkn2_compile||[]).push([[2224],{2224:(e,t,a)=>{a.d(t,{save:()=>N,saveAs:()=>O});var r=a(63780),n=(a(10064),a(65286)),o=a(25899),s=a(74368),i=a(37933),l=a(19610),c=a(73117);const u="Feature Service",y="feature-layer-utils",f=`${y}-save`,d=`${y}-save-as`;function p(e){return{isValid:(0,i.fP)(e)&&("feature"!==e.type||!e.dynamicDataSource),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function m(e){const t=[],a=[];for(const{layer:r,layerJSON:n}of e)r.isTable?a.push(n):t.push(n);return{layers:t,tables:a}}function w(e){return m([e])}async function h(e,t){return/\/\d+\/?$/.test(e.url)?w(t[0]):b(t,e)}async function b(e,t){if(e.reverse(),!t)return m(e);const a=await async function(e,t){let a=await e.fetchData("json");if(function(e){return!!(e&&Array.isArray(e.layers)&&Array.isArray(e.tables))}(a))return a;a||={},function(e){e.layers||=[],e.tables||=[]}(a);const{layer:{url:r,customParameters:n,apiKey:o}}=t[0];return await async function(e,t,a){const{url:r,customParameters:n,apiKey:o}=t,{serviceJSON:i,layersJSON:c}=await(0,s.V)(r,{customParameters:n,apiKey:o}),u=T(e.layers,i.layers,a),y=T(e.tables,i.tables,a);e.layers=u.itemResources,e.tables=y.itemResources;const f=[...u.added,...y.added],d=c?[...c.layers,...c.tables]:[];await async function(e,t,a,r){const n=await async function(e){const t=[];e.forEach((e=>{let{type:a}=e;const r=function(e){let t;switch(e){case"Feature Layer":case"Table":t="FeatureLayer";break;case"Oriented Imagery Layer":t="OrientedImageryLayer";break;case"Catalog Layer":t="CatalogLayer"}return t}(a),n=l.T[r];t.push(n())}));const a=await Promise.all(t),r=new Map;return e.forEach(((e,t)=>{let{type:n}=e;r.set(n,a[t])})),r}(t),o=t.map((e=>{let{id:t,type:o}=e;return new(n.get(o))({url:a,layerId:t,sourceJSON:r.find((e=>{let{id:a}=e;return a===t}))})}));await Promise.allSettled(o.map((e=>e.load()))),o.forEach((t=>{const{layerId:a,loaded:r,defaultPopupTemplate:n}=t;if(!r||null==n)return;const o={id:a,popupInfo:n.toJSON()};"ArcGISFeatureLayer"!==t.operationalLayerType&&(o.layerType=t.operationalLayerType),S(t,o,e)}))}(e,f,r,d)}(a,{url:r??"",customParameters:n,apiKey:o},t.map((e=>e.layer.layerId))),a}(t,e);for(const r of e)S(r.layer,r.layerJSON,a);return function(e,t){const a=[],r=[];for(const{layer:n}of t){const{isTable:e,layerId:t}=n;e?r.push(t):a.push(t)}v(e.layers,a),v(e.tables,r)}(a,e),a}function v(e,t){if(e.length<2)return;const a=[];for(const{id:r}of e)a.push(r);(0,r.fS)(a.sort(I),t.slice().sort(I))&&e.sort(((e,a)=>{const r=t.indexOf(e.id),n=t.indexOf(a.id);return r<n?-1:r>n?1:0}))}function I(e,t){return e<t?-1:e>t?1:0}function T(e,t,a){const n=(0,r.e5)(e,t,((e,t)=>e.id===t.id));e=e.filter((e=>!n.removed.some((t=>t.id===e.id))));const o=n.added;return o.forEach((t=>{let{id:a}=t;e.push({id:a})})),{itemResources:e,added:o.filter((e=>{let{id:t}=e;return!a.includes(t)}))}}function S(e,t,a){e.isTable?L(a.tables,t):L(a.layers,t)}function L(e,t){const a=e.findIndex((e=>{let{id:a}=e;return a===t.id}));-1===a?e.push(t):e[a]=t}async function P(e,t){const{url:a,layerId:r,title:n,fullExtent:s,isTable:i}=e,l=(0,o.Qc)(a);t.url="FeatureServer"===l?.serverType?a:`${a}/${r}`,t.title||=n,t.extent=null,i||null==s||(t.extent=await(0,c.$o)(s)),(0,c.ck)(t,c.hz.METADATA),(0,c.ck)(t,c.hz.MULTI_LAYER),(0,c.qj)(t,c.hz.SINGLE_LAYER),i&&(0,c.qj)(t,c.hz.TABLE)}async function N(e,t){return(0,n.a1)({layer:e,itemType:u,validateLayer:p,createItemData:(e,t)=>h(t,[e]),errorNamePrefix:f},t)}async function O(e,t,a){return(0,n.po)({layer:e,itemType:u,validateLayer:p,createItemData:(e,t)=>Promise.resolve(w(e)),errorNamePrefix:d,newItem:t,setItemProperties:P},a)}},65286:(e,t,a)=>{a.d(t,{a1:()=>v,po:()=>I});var r=a(10064),n=a(15909),o=a(7575),s=a(98995),i=a(32698),l=a(73117),c=a(76926),u=a(9634);async function y(e){const{layer:t,errorNamePrefix:a,validateLayer:n}=e;await t.load(),function(e,t,a){const n=a(e);if(!n.isValid)throw new r.Z(`${t}:invalid-parameters`,n.errorMessage,{layer:e})}(t,a,n)}function f(e,t){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`}function d(e){const{item:t,errorNamePrefix:a,layer:n,validateItem:o}=e;if((0,c.w)(t),function(e){const{item:t,itemType:a,additionalItemType:n,errorNamePrefix:o,layer:s}=e,i=[a];if(n&&i.push(n),!i.includes(t.type)){const e=i.map((e=>`'${e}'`)).join(", ");throw new r.Z(`${o}:portal-item-wrong-type`,`Portal item type should be one of: "${e}"`,{item:t,layer:s})}}(e),o){const e=o(t);if(!e.isValid)throw new r.Z(`${a}:invalid-parameters`,e.errorMessage,{layer:n})}}function p(e){const{layer:t,errorNamePrefix:a}=e,{portalItem:n}=t;if(!n)throw new r.Z(`${a}:portal-item-not-set`,f(t,"requires the portalItem property to be set"));if(!n.loaded)throw new r.Z(`${a}:portal-item-not-loaded`,f(t,"cannot be saved to a portal item that does not exist or is inaccessible"));d({...e,item:n})}function m(e){const{newItem:t,itemType:a}=e;let r=s.default.from(t);return r.id&&(r=r.clone(),r.id=null),r.type??=a,r.portal??=o.Z.getDefault(),d({...e,item:r}),r}function w(e){return(0,i.Y)(e,"portal-item")}async function h(e,t,a){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const r=e.write({},t);return await Promise.all(t.resources?.pendingOperations??[]),(0,u.z)(t,{errorName:"layer-write:unsupported"},a),r}function b(e){(0,l.qj)(e,l.hz.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,a)=>a.indexOf(e)===t)))}async function v(e,t){const{layer:a,createItemData:r,createJSONContext:o,saveResources:s,supplementalUnsupportedErrors:i}=e;await y(e),p(e);const l=a.portalItem,c=o?o(l):w(l),u=await h(a,c,{...t,supplementalUnsupportedErrors:i}),f=await r({layer:a,layerJSON:u},l);return b(l),await l.update({data:f}),(0,n.D)(c),await(s?.(l,c)),l}async function I(e,t){const{layer:a,createItemData:r,createJSONContext:o,setItemProperties:s,saveResources:i,supplementalUnsupportedErrors:l}=e;await y(e);const c=m(e),u=o?o(c):w(c),f=await h(a,u,{...t,supplementalUnsupportedErrors:l}),d=await r({layer:a,layerJSON:f},c);return await s(a,c),b(c),await async function(e,t,a){const r=e.portal;await r.signIn(),await(r.user?.addItem({item:e,data:t,folder:a?.folder}))}(c,d,t),a.portalItem=c,(0,n.D)(u),await(i?.(c,u)),c}},74368:(e,t,a)=>{a.d(t,{V:()=>n});var r=a(41226);async function n(e,t){const{loadContext:a,...n}=t||{},o=a?await a.fetchServiceMetadata(e,n):await(0,r.T)(e,n);u(o),i(o);const s={serviceJSON:o};if((o.currentVersion??0)<10.5)return s;const l=`${e}/layers`,c=a?await a.fetchServiceMetadata(l,n):await(0,r.T)(l,n);return u(c),i(c),s.layersJSON={layers:c.layers,tables:c.tables},s}function o(e){return"Feature Layer"===e.type||"Oriented Imagery Layer"===e.type}function s(e){return"Table"===e.type}function i(e){e.layers=e.layers?.filter(o),e.tables=e.tables?.filter(s)}function l(e){e.type||="Feature Layer"}function c(e){e.type||="Table"}function u(e){e.layers?.forEach(l),e.tables?.forEach(c)}},41226:(e,t,a)=>{a.d(t,{T:()=>n});var r=a(76200);async function n(e,t){const{data:a}=await(0,r.Z)(e,{responseType:"json",query:{f:"json",...t?.customParameters,token:t?.apiKey}});return a}}}]);
//# sourceMappingURL=2224.f3883181.chunk.js.map