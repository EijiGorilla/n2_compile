"use strict";(self.webpackChunkn2_compile=self.webpackChunkn2_compile||[]).push([[4292],{94292:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var i=a(72791),r=a(93510),l=a(74149),n=a(18661),s=a(21149),o=a(36801),c=a(59181),u=a(66817),d=a(70565),f=a(97304),h=a(54797),v=a(27663),m=a(82308),p=a(80659),g=a(91934),w=a(44520),y=(a(93508),a(80184));function b(e){o.S6(c.i_.rootElements,(function(t){t.dom.id===e&&t.dispose()}))}const x=e=>{const t=(0,i.useRef)({}),a=(0,i.useRef)({}),o=(0,i.useRef)({}),[c,x]=(0,i.useState)([{category:String,value:Number,sliceSettings:{fill:u.$_("#00c5ff")}}]),A="pie-cut",k=(0,i.useRef)({}),R=(0,i.useRef)({}),T=(0,i.useRef)({}),[E,L]=(0,i.useState)([{category:String,value:Number,sliceSettings:{fill:u.$_("#00c5ff")}}]),S="pie-compen",[B,_]=(0,i.useState)([]),j="CP = '"+e.contractp+"'";"All"===e.contractp?(r.PX.definitionExpression="1=1",r.Hf.definitionExpression="1=1"):(r.PX.definitionExpression=j,r.Hf.definitionExpression=j);const I=d.aQ(53);return(0,i.useEffect)((()=>{(0,w.EI)().then((e=>{x(e)})),(0,w.o1)().then((e=>{L(e)})),(0,w.iA)().then((e=>{_(e)}))}),[e.contractp]),(0,i.useEffect)((()=>{var e;b(A);var i=f.f.new(A);i.container.children.clear(),null===(e=i._logo)||void 0===e||e.dispose(),i.setThemes([p.Z.new(i),g.Z.new(i)]);var y=i.container.children.push(v.u.new(i,{y:d.aQ(-25),layout:i.horizontalLayout}));o.current=y;var x=y.series.push(m.f.new(i,{name:"Series",categoryField:"category",valueField:"value",legendValueText:"{valuePercentTotal.formatNumber('#.')}% ({value})",radius:d.aQ(45),innerRadius:d.aQ(20),marginBottom:-10}));t.current=x,y.series.push(x),x.slices.template.setAll({fillOpacity:.9,stroke:u.$_("#ffffff"),strokeWidth:1,strokeOpacity:1,templateField:"sliceSettings"}),x.labels.template.set("visible",!1),x.ticks.template.set("visible",!1),x.slices.template.events.on("click",(e=>{var t;const a=(null===(t=e.target.dataItem)||void 0===t?void 0:t.dataContext).category,i=w.Is.find((e=>e.category===a)),o=null===i||void 0===i?void 0:i.value;var c,u=r.PX.createQuery();l.ei.when((function(){l.ei.whenLayerView(r.PX).then((e=>{r.PX.queryFeatures(u).then((t=>{const a=t.features.length;let i=[];for(var o=0;o<a;o++){var u=t.features[o].attributes.OBJECTID;i.push(u)}var d=new s.Z({objectIds:i});r.PX.queryExtent(d).then((e=>{e.extent&&l.ei.goTo(e.extent)})),c&&c.remove(),c=e.highlight(i),l.ei.on("click",(function(){e.filter=new n.Z({where:void 0}),c.remove()}))})),e.filter=new n.Z({where:"Status = "+o}),l.ei.on("click",(()=>{e.filter=new n.Z({where:void 0}),void 0!==c?c.remove():console.log("")}))}))}))})),x.data.setAll(c);var k=i.container.children.push(h.D.new(i,{centerX:d.aQ(50),x:d.aQ(50),y:I,layout:i.verticalLayout}));return a.current=k,k.data.setAll(x.dataItems),k.markers.template.setAll({width:18,height:18}),k.markerRectangles.template.setAll({cornerRadiusTL:10,cornerRadiusTR:10,cornerRadiusBL:10,cornerRadiusBR:10}),y.onPrivate("width",(function(e){var t=Math.max(e-y.height()-220,220);k.labels.template.setAll({width:t,maxWidth:t})})),k.labels.template.setAll({oversizedBehavior:"truncate",fill:u.$_("#ffffff")}),k.valueLabels.template.setAll({textAlign:"right",fill:u.$_("#ffffff")}),k.itemContainers.template.setAll({paddingTop:1.1,paddingBottom:2}),x.appear(1e3,100),()=>{i.dispose()}}),[A,c]),(0,i.useEffect)((()=>{var e,i;null===(e=t.current)||void 0===e||e.data.setAll(c),null===(i=a.current)||void 0===i||i.data.setAll(t.current.dataItems)})),(0,i.useEffect)((()=>{var e;b(S);var t=f.f.new(S);t.container.children.clear(),null===(e=t._logo)||void 0===e||e.dispose(),t.setThemes([p.Z.new(t),g.Z.new(t)]);var a=t.container.children.push(v.u.new(t,{y:d.aQ(-25),layout:t.horizontalLayout}));T.current=a;var i=a.series.push(m.f.new(t,{name:"Series",categoryField:"category",valueField:"value",legendValueText:"{valuePercentTotal.formatNumber('#.')}% ({value})",radius:d.aQ(45),innerRadius:d.aQ(20),marginBottom:-10}));k.current=i,a.series.push(i),i.slices.template.setAll({fillOpacity:.9,stroke:u.$_("#ffffff"),strokeWidth:1,strokeOpacity:1,templateField:"sliceSettings"}),i.labels.template.set("visible",!1),i.ticks.template.set("visible",!1),i.slices.template.events.on("click",(e=>{var t;const a=(null===(t=e.target.dataItem)||void 0===t?void 0:t.dataContext).category,i=w.uc.find((e=>e.category===a)),o=null===i||void 0===i?void 0:i.value;var c,u=r.Hf.createQuery();l.ei.when((function(){l.ei.whenLayerView(r.Hf).then((e=>{r.Hf.queryFeatures(u).then((t=>{const a=t.features.length;let i=[];for(var o=0;o<a;o++){var u=t.features[o].attributes.OBJECTID;i.push(u)}var d=new s.Z({objectIds:i});r.Hf.queryExtent(d).then((e=>{e.extent&&l.ei.goTo(e.extent)})),c&&c.remove(),c=e.highlight(i),l.ei.on("click",(function(){e.filter=new n.Z({where:void 0}),c.remove()}))})),e.filter=new n.Z({where:"Compensation = "+o}),l.ei.on("click",(()=>{e.filter=new n.Z({where:void 0}),void 0!==c?c.remove():console.log("")}))}))}))})),i.data.setAll(E);var o=t.container.children.push(h.D.new(t,{centerX:d.aQ(50),x:d.aQ(50),y:I,layout:t.verticalLayout}));return R.current=o,o.data.setAll(i.dataItems),o.markers.template.setAll({width:18,height:18}),o.markerRectangles.template.setAll({cornerRadiusTL:10,cornerRadiusTR:10,cornerRadiusBL:10,cornerRadiusBR:10}),a.onPrivate("width",(function(e){var t=Math.max(e-a.height()-220,220);o.labels.template.setAll({width:t,maxWidth:t})})),o.labels.template.setAll({oversizedBehavior:"truncate",fill:u.$_("#ffffff")}),o.valueLabels.template.setAll({textAlign:"right",fill:u.$_("#ffffff")}),o.itemContainers.template.setAll({paddingTop:1.1,paddingBottom:2}),i.appear(1e3,100),()=>{t.dispose()}}),[S,E]),(0,i.useEffect)((()=>{var e,t;null===(e=k.current)||void 0===e||e.data.setAll(E),null===(t=R.current)||void 0===t||t.data.setAll(k.current.dataItems)})),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("div",{className:"treesNumberImage",children:[(0,y.jsxs)("div",{children:[(0,y.jsx)("div",{className:"totalTreesLabel",children:"TOTAL TREES"}),(0,y.jsx)("br",{}),(0,y.jsx)("br",{}),(0,y.jsxs)("b",{className:"totalTreesNumber",children:[(0,w.oc)(B[0])," "]})]}),(0,y.jsx)("img",{src:"https://EijiGorilla.github.io/Symbols/Tree_Logo.svg",alt:"Land Logo",height:"20%",width:"20%",style:{padding:"10px",margin:"auto",marginRight:"40px"}})]}),(0,y.jsx)("div",{id:A,style:{height:"45vh",backgroundColor:"rgb(0,0,0,0)",color:"white",marginBottom:"-7vh"}}),(0,y.jsx)("div",{id:S,style:{height:"45vh",backgroundColor:"rgb(0,0,0,0)",color:"white",marginBottom:"-1.5vh"}})]})}}}]);
//# sourceMappingURL=4292.fe22b5fb.chunk.js.map