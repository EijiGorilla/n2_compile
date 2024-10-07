"use strict";(self.webpackChunkn2_compile=self.webpackChunkn2_compile||[]).push([[4452],{24452:(e,t,r)=>{r.d(t,{save:()=>w,saveAs:()=>v});var a=r(65286),n=r(32698),o=r(73117),i=r(40739);const s="Media Layer",l="media-layer-save",p="media-layer-save-as",c=["media-layer:unsupported-source"];function u(e){return{isValid:"media"===e.type,errorMessage:"Layer.type should be 'media'"}}function m(e){return(0,n.Y)(e,"portal-item",!0)}function d(e){return e.layerJSON}async function y(e,t){t.extent=e.fullExtent?await(0,o.$o)(e.fullExtent):null}async function f(e,t){t.title||=e.title,await y(e,t),(0,o.ck)(t,o.hz.METADATA)}async function w(e,t){return(0,a.a1)({layer:e,itemType:s,validateLayer:u,createJSONContext:e=>m(e),createItemData:d,errorNamePrefix:l,supplementalUnsupportedErrors:c,setItemProperties:y,saveResources:(t,r)=>(0,i.H)(e.resourceReferences,r)},t)}async function v(e,t,r){return(0,a.po)({layer:e,itemType:s,validateLayer:u,createJSONContext:e=>m(e),createItemData:d,errorNamePrefix:p,supplementalUnsupportedErrors:c,newItem:t,setItemProperties:f,saveResources:(t,r)=>(0,i.H)(e.resourceReferences,r)},r)}},65286:(e,t,r)=>{r.d(t,{a1:()=>h,po:()=>x});var a=r(10064),n=r(15909),o=r(7575),i=r(98995),s=r(32698),l=r(73117),p=r(76926),c=r(9634);async function u(e){const{layer:t,errorNamePrefix:r,validateLayer:n}=e;await t.load(),function(e,t,r){const n=r(e);if(!n.isValid)throw new a.Z(`${t}:invalid-parameters`,n.errorMessage,{layer:e})}(t,r,n)}function m(e,t){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`}function d(e){const{item:t,errorNamePrefix:r,layer:n,validateItem:o}=e;if((0,p.w)(t),function(e){const{item:t,itemType:r,additionalItemType:n,errorNamePrefix:o,layer:i}=e,s=[r];if(n&&s.push(n),!s.includes(t.type)){const e=s.map((e=>`'${e}'`)).join(", ");throw new a.Z(`${o}:portal-item-wrong-type`,`Portal item type should be one of: "${e}"`,{item:t,layer:i})}}(e),o){const e=o(t);if(!e.isValid)throw new a.Z(`${r}:invalid-parameters`,e.errorMessage,{layer:n})}}function y(e){const{layer:t,errorNamePrefix:r}=e,{portalItem:n}=t;if(!n)throw new a.Z(`${r}:portal-item-not-set`,m(t,"requires the portalItem property to be set"));if(!n.loaded)throw new a.Z(`${r}:portal-item-not-loaded`,m(t,"cannot be saved to a portal item that does not exist or is inaccessible"));d({...e,item:n})}function f(e){const{newItem:t,itemType:r}=e;let a=i.default.from(t);return a.id&&(a=a.clone(),a.id=null),a.type??=r,a.portal??=o.Z.getDefault(),d({...e,item:a}),a}function w(e){return(0,s.Y)(e,"portal-item")}async function v(e,t,r){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const a=e.write({},t);return await Promise.all(t.resources?.pendingOperations??[]),(0,c.z)(t,{errorName:"layer-write:unsupported"},r),a}function I(e){(0,l.qj)(e,l.hz.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)))}async function h(e,t){const{layer:r,createItemData:a,createJSONContext:o,setItemProperties:i,saveResources:s,supplementalUnsupportedErrors:l}=e;await u(e),y(e);const p=r.portalItem,c=o?o(p):w(p),m=await v(r,c,{...t,supplementalUnsupportedErrors:l}),d=await a({layer:r,layerJSON:m},p);return await(i?.(r,p)),I(p),await p.update({data:d}),(0,n.D)(c),await(s?.(p,c)),p}async function x(e,t){const{layer:r,createItemData:a,createJSONContext:o,setItemProperties:i,saveResources:s,supplementalUnsupportedErrors:l}=e;await u(e);const p=f(e),c=o?o(p):w(p),m=await v(r,c,{...t,supplementalUnsupportedErrors:l}),d=await a({layer:r,layerJSON:m},p);return await i(r,p),I(p),await async function(e,t,r){const a=e.portal;await a.signIn(),await(a.user?.addItem({item:e,data:t,folder:r?.folder}))}(p,d,t),r.portalItem=p,(0,n.D)(c),await(s?.(p,c)),p}}}]);
//# sourceMappingURL=4452.cb43e880.chunk.js.map