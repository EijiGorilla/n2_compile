"use strict";(self.webpackChunkn2_compile=self.webpackChunkn2_compile||[]).push([[2200],{82200:(t,e,n)=>{n.r(e),n.d(e,{executeTopFeaturesQuery:()=>i});var r=n(23084),o=n(88031),l=n(49818),u=n(54307);async function i(t,e,n,i){const s=(0,r.en)(t),d={...i},{data:y}=await(0,o.IJ)(s,u.Z.from(e),n,d);return l.Z.fromJSON(y)}},88031:(t,e,n)=>{n.d(e,{IJ:()=>c,m5:()=>m,vB:()=>F,w7:()=>p});var r=n(76200),o=n(35995),l=n(77981),u=n(91340),i=n(92975),s=n(22585),d=n(68620);const y="Layer does not support extent calculation.";function a(t,e){var n,r;const o=t.geometry,u=t.toJSON(),s=u;if(null!=o&&(s.geometry=JSON.stringify(o),s.geometryType=(0,l.Ji)(o),s.inSR=(0,i.B9)(o.spatialReference)),null!==(n=u.topFilter)&&void 0!==n&&n.groupByFields&&(s.topFilter.groupByFields=u.topFilter.groupByFields.join(",")),null!==(r=u.topFilter)&&void 0!==r&&r.orderByFields&&(s.topFilter.orderByFields=u.topFilter.orderByFields.join(",")),u.topFilter&&(s.topFilter=JSON.stringify(s.topFilter)),u.objectIds&&(s.objectIds=u.objectIds.join(",")),u.orderByFields&&(s.orderByFields=u.orderByFields.join(",")),u.outFields&&!(null!==e&&void 0!==e&&e.returnCountOnly||null!==e&&void 0!==e&&e.returnExtentOnly||null!==e&&void 0!==e&&e.returnIdsOnly)?u.outFields.includes("*")?s.outFields="*":s.outFields=u.outFields.join(","):delete s.outFields,u.outSR?s.outSR=(0,i.B9)(u.outSR):o&&u.returnGeometry&&(s.outSR=s.inSR),u.returnGeometry&&delete u.returnGeometry,u.timeExtent){const t=u.timeExtent,{start:e,end:n}=t;null==e&&null==n||(s.time=e===n?e:"".concat(null!==e&&void 0!==e?e:"null",",").concat(null!==n&&void 0!==n?n:"null")),delete u.timeExtent}return s}async function c(t,e,n,r){const o=await f(t,e,"json",r);return(0,d.p)(e,n,o.data),o}async function p(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:f(t,e,"json",n,{returnIdsOnly:!0})}async function m(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:f(t,e,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(y);if(e.hasOwnProperty("count"))throw new Error(y);return t}))}function F(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):f(t,e,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function f(t,e,n){let l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};const d="string"==typeof t?(0,o.mN)(t):t,y=e.geometry?[e.geometry]:[];return l.responseType="pbf"===n?"array-buffer":"json",(0,u.aX)(y,null,l).then((t=>{const u=null===t||void 0===t?void 0:t[0];null!=u&&((e=e.clone()).geometry=u);const y=(0,s.A)({...d.query,f:n,...i,...a(e,i)});return(0,r.Z)((0,o.v_)(d.path,"queryTopFeatures"),{...l,query:{...y,...l.query}})}))}}}]);
//# sourceMappingURL=2200.8f123e48.chunk.js.map