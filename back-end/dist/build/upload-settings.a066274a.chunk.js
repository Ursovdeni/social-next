"use strict";(self.webpackChunkback_end=self.webpackChunkback_end||[]).push([[695],{56752:(C,m,t)=>{t.r(m),t.d(m,{SettingsPage:()=>T,default:()=>K});var e=t(67294),i=t(40720),f=t(90731),h=t(12473),v=t(34726),E=t(71590),s=t(96987),p=t(16607),y=t(10574),L=t(31988),M=t(6498),b=t(17705),n=t(3911),o=t(18226),d=t(18446),l=t.n(d),c=t(64593),g=t(86896),x=t(88767),P=t(11727),u=t(63955);const A=a=>a;var Z=t(18172),W=t(36968),k=t.n(W);const U={initialData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1},modifiedData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1}},H=(a,O)=>(0,Z.ZP)(a,D=>{switch(O.type){case"GET_DATA_SUCCEEDED":{D.initialData=O.data,D.modifiedData=O.data;break}case"ON_CHANGE":{k()(D,["modifiedData",...O.keys.split(".")],O.value);break}default:return a}}),T=()=>{const{formatMessage:a}=(0,g.Z)(),{lockApp:O,unlockApp:D}=(0,n.o1)(),G=(0,n.lm)(),{get:F,put:N}=(0,n.kY)();(0,n.go)();const[{initialData:$,modifiedData:B},R]=(0,e.useReducer)(H,U,A),{data:z,isLoading:V,refetch:Q}=(0,x.useQuery)({queryKey:["upload","settings"],async queryFn(){const{data:{data:r}}=await F("/upload/settings");return r}});e.useEffect(()=>{z&&R({type:"GET_DATA_SUCCEEDED",data:z})},[z]);const I=l()($,B),{mutateAsync:X,isLoading:Y}=(0,x.useMutation)({async mutationFn(r){return N("/upload/settings",r)},onSuccess(){Q(),G({type:"success",message:{id:"notification.form.success.fields"}})},onError(r){console.error(r)}}),J=async r=>{r.preventDefault(),!I&&(O(),await X(B),D())},S=({target:{name:r,value:w}})=>{R({type:"ON_CHANGE",keys:r,value:w})};return e.createElement(i.o,{tabIndex:-1},e.createElement(c.q,{title:a({id:(0,u.OB)("page.title"),defaultMessage:"Settings - Media Libray"})}),e.createElement("form",{onSubmit:J},e.createElement(f.T,{title:a({id:(0,u.OB)("settings.header.label"),defaultMessage:"Media Library"}),primaryAction:e.createElement(h.z,{disabled:I,loading:Y,type:"submit",startIcon:e.createElement(o.Z,null),size:"S"},a({id:"global.save",defaultMessage:"Save"})),subtitle:a({id:(0,u.OB)("settings.sub-header.label"),defaultMessage:"Configure the settings for the Media Library"})}),e.createElement(v.D,null,V?e.createElement(n.dO,null):e.createElement(E.A,null,e.createElement(s.k,{direction:"column",alignItems:"stretch",gap:12},e.createElement(p.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(s.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(s.k,null,e.createElement(y.Z,{variant:"delta",as:"h2"},a({id:(0,u.OB)("settings.blockTitle"),defaultMessage:"Asset management"}))),e.createElement(L.r,{gap:6},e.createElement(M.P,{col:6,s:12},e.createElement(b.s,{"aria-label":"responsiveDimensions",checked:B.responsiveDimensions,hint:a({id:(0,u.OB)("settings.form.responsiveDimensions.description"),defaultMessage:"Enabling this option will generate multiple formats (small, medium and large) of the uploaded asset."}),label:a({id:(0,u.OB)("settings.form.responsiveDimensions.label"),defaultMessage:"Responsive friendly upload"}),name:"responsiveDimensions",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:r=>{S({target:{name:"responsiveDimensions",value:r.target.checked}})}})),e.createElement(M.P,{col:6,s:12},e.createElement(b.s,{"aria-label":"sizeOptimization",checked:B.sizeOptimization,hint:a({id:(0,u.OB)("settings.form.sizeOptimization.description"),defaultMessage:"Enabling this option will reduce the image size and slightly reduce its quality."}),label:a({id:(0,u.OB)("settings.form.sizeOptimization.label"),defaultMessage:"Size optimization"}),name:"sizeOptimization",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:r=>{S({target:{name:"sizeOptimization",value:r.target.checked}})}})),e.createElement(M.P,{col:6,s:12},e.createElement(b.s,{"aria-label":"autoOrientation",checked:B.autoOrientation,hint:a({id:(0,u.OB)("settings.form.autoOrientation.description"),defaultMessage:"Enabling this option will automatically rotate the image according to EXIF orientation tag."}),label:a({id:(0,u.OB)("settings.form.autoOrientation.label"),defaultMessage:"Auto orientation"}),name:"autoOrientation",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:r=>{S({target:{name:"autoOrientation",value:r.target.checked}})}}))))))))))},K=()=>e.createElement(n.O4,{permissions:P._I.settings},e.createElement(T,null))},34726:(C,m,t)=>{t.d(m,{D:()=>f});var e=t(85893),i=t(16607);const f=({children:h})=>(0,e.jsx)(i.x,{paddingLeft:10,paddingRight:10,children:h})},90731:(C,m,t)=>{t.d(m,{T:()=>L});var e=t(85893),i=t(67294),f=t(71997);const h=n=>{const o=(0,i.useRef)(null),[d,l]=(0,i.useState)(!0),c=([g])=>{l(g.isIntersecting)};return(0,i.useEffect)(()=>{const g=o.current,x=new IntersectionObserver(c,n);return g&&x.observe(o.current),()=>{g&&x.disconnect()}},[o,n]),[o,d]};var v=t(79698);const E=(n,o)=>{const d=(0,v.W)(o);(0,i.useLayoutEffect)(()=>{const l=new ResizeObserver(d);return Array.isArray(n)?n.forEach(c=>{c.current&&l.observe(c.current)}):n.current&&l.observe(n.current),()=>{l.disconnect()}},[n,d])};var s=t(16607),p=t(96987),y=t(10574);const L=n=>{const o=(0,i.useRef)(null),[d,l]=(0,i.useState)(null),[c,g]=h({root:null,rootMargin:"0px",threshold:0});return E(c,()=>{c.current&&l(c.current.getBoundingClientRect())}),(0,i.useEffect)(()=>{o.current&&l(o.current.getBoundingClientRect())},[o]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:d?.height},ref:c,children:g&&(0,e.jsx)(b,{ref:o,...n})}),!g&&(0,e.jsx)(b,{...n,sticky:!0,width:d?.width})]})};L.displayName="HeaderLayout";const M=(0,f.ZP)(s.x)`
  width: ${({width:n})=>n?`${n/16}rem`:void 0};
  z-index: ${({theme:n})=>n.zIndices[1]};
`,b=i.forwardRef(({navigationAction:n,primaryAction:o,secondaryAction:d,subtitle:l,title:c,sticky:g,width:x,...P},u)=>{const j=typeof l=="string";return g?(0,e.jsx)(M,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:x,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(p.k,{justifyContent:"space-between",children:[(0,e.jsxs)(p.k,{children:[n&&(0,e.jsx)(s.x,{paddingRight:3,children:n}),(0,e.jsxs)(s.x,{children:[(0,e.jsx)(y.Z,{variant:"beta",as:"h1",...P,children:c}),j?(0,e.jsx)(y.Z,{variant:"pi",textColor:"neutral600",children:l}):l]}),d?(0,e.jsx)(s.x,{paddingLeft:4,children:d}):null]}),(0,e.jsx)(p.k,{children:o?(0,e.jsx)(s.x,{paddingLeft:2,children:o}):void 0})]})}):(0,e.jsxs)(s.x,{ref:u,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:n?6:8,background:"neutral100","data-strapi-header":!0,children:[n?(0,e.jsx)(s.x,{paddingBottom:2,children:n}):null,(0,e.jsxs)(p.k,{justifyContent:"space-between",children:[(0,e.jsxs)(p.k,{minWidth:0,children:[(0,e.jsx)(y.Z,{as:"h1",variant:"alpha",...P,children:c}),d?(0,e.jsx)(s.x,{paddingLeft:4,children:d}):null]}),o]}),j?(0,e.jsx)(y.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:l}):l]})})},71590:(C,m,t)=>{t.d(m,{A:()=>E});var e=t(85893),i=t(71997),f=t(16607);const h=(0,i.ZP)(f.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:s})=>s?"auto 1fr":"1fr"};
`,v=(0,i.ZP)(f.x)`
  overflow-x: hidden;
`,E=({sideNav:s,children:p})=>(0,e.jsxs)(h,{hasSideNav:Boolean(s),children:[s,(0,e.jsx)(v,{paddingBottom:10,children:p})]})},40720:(C,m,t)=>{t.d(m,{o:()=>v});var e=t(85893),i=t(71997),f=t(16607);const h=(0,i.ZP)(f.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,v=({labelledBy:E="main-content-title",...s})=>(0,e.jsx)(h,{"aria-labelledby":E,as:"main",id:"main-content",tabIndex:-1,...s})}}]);
