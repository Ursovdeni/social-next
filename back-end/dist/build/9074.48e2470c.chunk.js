(self.webpackChunkback_end=self.webpackChunkback_end||[]).push([[9074],{3414:(C,g,e)=>{"use strict";e.d(g,{Z:()=>T});var t=e(67294),d=e(90731),o=e(96987),a=e(12473),s=e(3911),r=e(18226),u=e(97695),h=e(45697),n=e.n(h),A=e(86896),P=e(75975),v=e(29204);const c=(U,L,D,I)=>{const[R,S]=(0,t.useState)(!1),k=(0,s.lm)(),{post:l}=(0,s.kY)(),{formatAPIError:$}=(0,s.So)();return{regenerateData:async()=>{try{const{data:{data:{accessKey:N}}}=await l(`${U}${L}/regenerate`);S(!1),D(N)}catch(N){S(!1),I?I(N):N instanceof v.d7&&k({type:"warning",message:$(N)})}},isLoadingConfirmation:R}},i=({onRegenerate:U,idToRegenerate:L,backUrl:D,onError:I})=>{const{formatMessage:R}=(0,A.Z)(),[S,k]=(0,t.useState)(!1),{regenerateData:l,isLoadingConfirmation:$}=c(D,L,U,I),Y=async()=>{l(),k(!1)};return t.createElement(t.Fragment,null,t.createElement(a.z,{startIcon:t.createElement(P.Z,null),type:"button",size:"S",variant:"tertiary",onClick:()=>k(!0),name:"regenerate"},R({id:"Settings.tokens.regenerate",defaultMessage:"Regenerate"})),t.createElement(s.QH,{bodyText:{id:"Settings.tokens.popUpWarning.message",defaultMessage:"Are you sure you want to regenerate this token?"},iconRightButton:t.createElement(P.Z,null),isConfirmButtonLoading:$,isOpen:S,onToggleDialog:()=>k(!1),onConfirm:Y,leftButtonText:{id:"Settings.tokens.Button.cancel",defaultMessage:"Cancel"},rightButtonText:{id:"Settings.tokens.Button.regenerate",defaultMessage:"Regenerate"},title:{id:"Settings.tokens.RegenerateDialog.title",defaultMessage:"Regenerate token"}}))};i.defaultProps={onRegenerate(){},onError:void 0},i.propTypes={onRegenerate:n().func,idToRegenerate:n().oneOfType([n().number,n().string]).isRequired,backUrl:n().string.isRequired,onError:n().func};const E=i,m=({title:U,token:L,setToken:D,canEditInputs:I,canRegenerate:R,isSubmitting:S,backUrl:k,regenerateUrl:l,onErrorRegenerate:$})=>{const{formatMessage:Y}=(0,A.Z)(),N=J=>{D({...L,accessKey:J})};return t.createElement(d.T,{title:L?.name||Y(U),primaryAction:I?t.createElement(o.k,{gap:2},R&&L?.id&&t.createElement(E,{backUrl:l,onRegenerate:N,idToRegenerate:L?.id,onError:$}),t.createElement(a.z,{disabled:S,loading:S,startIcon:t.createElement(r.Z,null),type:"submit",size:"S"},Y({id:"global.save",defaultMessage:"Save"}))):R&&L?.id&&t.createElement(E,{onRegenerate:N,idToRegenerate:L?.id,backUrl:l}),navigationAction:t.createElement(s.rU,{startIcon:t.createElement(u.Z,null),to:k},Y({id:"global.back",defaultMessage:"Back"})),ellipsis:!0})};m.propTypes={token:n().shape({id:n().oneOfType([n().number,n().string]),type:n().string,lifespan:n().oneOfType([n().number,n().string]),name:n().string,accessKey:n().string,permissions:n().array,description:n().string,createdAt:n().string}),canEditInputs:n().bool.isRequired,canRegenerate:n().bool.isRequired,setToken:n().func.isRequired,isSubmitting:n().bool.isRequired,backUrl:n().string.isRequired,title:n().shape({id:n().string,label:n().string}).isRequired,regenerateUrl:n().string.isRequired,onErrorRegenerate:n().func},m.defaultProps={token:void 0,onErrorRegenerate:void 0};const T=m},89982:(C,g,e)=>{"use strict";e.d(g,{Z:()=>A});var t=e(67294),d=e(59586),o=e(40933),a=e(10574),s=e(45697),r=e.n(s),u=e(86896),h=e(51352);const n=({token:P,errors:v,values:c,onChange:i,isCreating:E})=>{const{formatMessage:m}=(0,u.Z)();return t.createElement(t.Fragment,null,t.createElement(d.P,{name:"lifespan",label:m({id:"Settings.tokens.form.duration",defaultMessage:"Token duration"}),value:c.lifespan!==null?c.lifespan:"0",error:v.lifespan?m(v.lifespan?.id?v.lifespan:{id:v.lifespan,defaultMessage:v.lifespan}):null,onChange:T=>{i({target:{name:"lifespan",value:T}})},required:!0,disabled:!E,placeholder:"Select"},t.createElement(o.W,{value:"604800000"},m({id:"Settings.tokens.duration.7-days",defaultMessage:"7 days"})),t.createElement(o.W,{value:"2592000000"},m({id:"Settings.tokens.duration.30-days",defaultMessage:"30 days"})),t.createElement(o.W,{value:"7776000000"},m({id:"Settings.tokens.duration.90-days",defaultMessage:"90 days"})),t.createElement(o.W,{value:"0"},m({id:"Settings.tokens.duration.unlimited",defaultMessage:"Unlimited"}))),t.createElement(a.Z,{variant:"pi",textColor:"neutral600"},!E&&`${m({id:"Settings.tokens.duration.expiration-date",defaultMessage:"Expiration date"})}: ${(0,h.IX)(P?.createdAt,parseInt(c.lifespan,10))}`))};n.propTypes={errors:r().shape({lifespan:r().string}),onChange:r().func.isRequired,values:r().shape({lifespan:r().oneOfType([r().number,r().string])}).isRequired,isCreating:r().bool.isRequired,token:r().shape({id:r().oneOfType([r().number,r().string]),type:r().string,lifespan:r().string,name:r().string,accessKey:r().string,permissions:r().array,description:r().string,createdAt:r().string})},n.defaultProps={errors:{},token:{}};const A=n},81384:(C,g,e)=>{"use strict";e.d(g,{Z:()=>A});var t=e(67294),d=e(96208),o=e(3911),a=e(43838),s=e(46374),r=e(45697),u=e.n(r),h=e(86896);const n=({token:P,tokenType:v})=>{const{formatMessage:c}=(0,h.Z)(),i=(0,o.lm)(),{trackUsage:E}=(0,o.rS)(),{copy:m}=(0,o.VP)(),T=U=>async()=>{await m(U)&&(E("didCopyTokenKey",{tokenType:v}),i({type:"success",message:{id:"Settings.tokens.notification.copied"}}))};return t.createElement(o.Y_,{endAction:P&&t.createElement("span",{style:{alignSelf:"start"}},t.createElement(d.h,{label:c({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),onClick:T(P),noBorder:!0,icon:t.createElement(a.Z,null),style:{padding:0,height:"1rem"}})),title:P||c({id:"Settings.tokens.copy.editTitle",defaultMessage:"This token isn\u2019t accessible anymore."}),subtitle:c(P?{id:"Settings.tokens.copy.lastWarning",defaultMessage:"Make sure to copy this token, you won\u2019t be able to see it again!"}:{id:"Settings.tokens.copy.editMessage",defaultMessage:"For security reasons, you can only see your token once."}),icon:t.createElement(s.Z,null),iconBackground:"neutral100"})};n.defaultProps={token:null},n.propTypes={token:u().string,tokenType:u().string.isRequired};const A=n},37651:(C,g,e)=>{"use strict";e.d(g,{Z:()=>u});var t=e(67294),d=e(457),o=e(45697),a=e.n(o),s=e(86896);const r=({errors:h,values:n,onChange:A,canEditInputs:P})=>{const{formatMessage:v}=(0,s.Z)();return t.createElement(d.g,{label:v({id:"Settings.tokens.form.description",defaultMessage:"Description"}),id:"description",error:h.description?v(h.description?.id?h.description:{id:h.description,defaultMessage:h.description}):null,onChange:A,disabled:!P},n.description)};r.propTypes={errors:a().shape({description:a().string}),onChange:a().func.isRequired,canEditInputs:a().bool.isRequired,values:a().shape({description:a().string}).isRequired},r.defaultProps={errors:{}};const u=r},72028:(C,g,e)=>{"use strict";e.d(g,{Z:()=>u});var t=e(67294),d=e(38670),o=e(45697),a=e.n(o),s=e(86896);const r=({errors:h,values:n,onChange:A,canEditInputs:P})=>{const{formatMessage:v}=(0,s.Z)();return t.createElement(d.o,{name:"name",error:h.name?v(h.name?.id?h.name:{id:h.name,defaultMessage:h.name}):null,label:v({id:"Settings.tokens.form.name",defaultMessage:"Name"}),onChange:A,value:n.name,disabled:!P,required:!0})};r.propTypes={errors:a().shape({name:a().string}),onChange:a().func.isRequired,canEditInputs:a().bool.isRequired,values:a().shape({name:a().string}).isRequired},r.defaultProps={errors:{}};const u=r},32381:(C,g,e)=>{"use strict";e.d(g,{Z:()=>h});var t=e(67294),d=e(59586),o=e(40933),a=e(45697),s=e.n(a),r=e(86896);const u=({name:n,errors:A,values:P,onChange:v,canEditInputs:c,options:i,label:E})=>{const{formatMessage:m}=(0,r.Z)();return t.createElement(d.P,{name:n,label:m({id:E.id,defaultMessage:E.defaultMessage}),value:P&&P[n],error:A[n]?m(A[n]?.id?A[n]:{id:A[n],defaultMessage:A[n]}):null,onChange:v,placeholder:"Select",required:!0,disabled:!c},i&&i.map(({value:T,label:U})=>t.createElement(o.W,{key:T,value:T},m(U))))};u.propTypes={name:s().string,options:s().arrayOf(s().shape({label:s().shape({id:s().string,defaultMessage:s().string}),value:s().string})),errors:s().shape({type:s().string}),onChange:s().func.isRequired,canEditInputs:s().bool.isRequired,values:s().shape({type:s().string}).isRequired,label:s().shape({id:s().string,defaultMessage:s().string}).isRequired},u.defaultProps={name:"type",errors:{},options:[]};const h=u},81966:(C,g,e)=>{"use strict";e.d(g,{Z:()=>t,f:()=>d});const t="api-token",d="transfer-token"},29074:(C,g,e)=>{"use strict";e.d(g,{Z:()=>Ge});var t=e(67294),d=e(40720),o=e(34726),a=e(96987),s=e(3911),r=e(41054),u=e(86896),h=e(88767),n=e(70743),A=e(16550),P=e(85893);const v=t.createContext({selectedAction:null,routes:[],selectedActions:[],data:{allActionsIds:[],permissions:[]},onChange:()=>{},onChangeSelectAll:()=>{},setSelectedAction:()=>{}}),c=({children:p,...f})=>(0,P.jsx)(v.Provider,{value:f,children:p}),i=()=>t.useContext(v);var E=e(42678),m=e(36364),T=e(81966),U=e(3414),L=e(81384),D=e(16607),I=e(10574),R=e(31988),S=e(6498),k=e(45697),l=e.n(k),$=e(89982),Y=e(37651),N=e(72028),J=e(32381);const X=({errors:p,onChange:f,canEditInputs:y,isCreating:B,values:x,apiToken:Z,onDispatch:O,setHasChangedPermissions:G})=>{const{formatMessage:H}=(0,u.Z)(),z=({target:{value:V}})=>{G(!1),V==="full-access"&&O({type:"SELECT_ALL_ACTIONS"}),V==="read-only"&&O({type:"ON_CHANGE_READ_ONLY"})},w=[{value:"read-only",label:{id:"Settings.tokens.types.read-only",defaultMessage:"Read-only"}},{value:"full-access",label:{id:"Settings.tokens.types.full-access",defaultMessage:"Full access"}},{value:"custom",label:{id:"Settings.tokens.types.custom",defaultMessage:"Custom"}}];return t.createElement(D.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(a.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(I.Z,{variant:"delta",as:"h2"},H({id:"global.details",defaultMessage:"Details"})),t.createElement(R.r,{gap:5},t.createElement(S.P,{key:"name",col:6,xs:12},t.createElement(N.Z,{errors:p,values:x,canEditInputs:y,onChange:f})),t.createElement(S.P,{key:"description",col:6,xs:12},t.createElement(Y.Z,{errors:p,values:x,canEditInputs:y,onChange:f})),t.createElement(S.P,{key:"lifespan",col:6,xs:12},t.createElement($.Z,{isCreating:B,errors:p,values:x,onChange:f,token:Z})),t.createElement(S.P,{key:"type",col:6,xs:12},t.createElement(J.Z,{values:x,errors:p,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:V=>{z({target:{value:V}}),f({target:{name:"type",value:V}})},options:w,canEditInputs:y})))))};X.propTypes={errors:l().shape({name:l().string,description:l().string,lifespan:l().string,type:l().string}),onChange:l().func.isRequired,canEditInputs:l().bool.isRequired,values:l().shape({name:l().string,description:l().string,lifespan:l().oneOfType([l().number,l().string]),type:l().string}).isRequired,isCreating:l().bool.isRequired,apiToken:l().shape({id:l().oneOfType([l().number,l().string]),type:l().string,lifespan:l().string,name:l().string,accessKey:l().string,permissions:l().array,description:l().string,createdAt:l().string}),onDispatch:l().func.isRequired,setHasChangedPermissions:l().func.isRequired},X.defaultProps={errors:{},apiToken:{}};const ne=X;var le=e(90731),Ae=e(12473),de=e(18226);const _=({apiTokenName:p})=>{const{formatMessage:f}=(0,u.Z)();return(0,s.go)(),t.createElement(d.o,{"aria-busy":"true"},t.createElement(s.SL,{name:"API Tokens"}),t.createElement(le.T,{primaryAction:t.createElement(Ae.z,{disabled:!0,startIcon:t.createElement(de.Z,null),type:"button",size:"L"},f({id:"global.save",defaultMessage:"Save"})),title:p||f({id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"})}),t.createElement(o.D,null,t.createElement(s.dO,null)))};_.defaultProps={apiTokenName:null},_.propTypes={apiTokenName:l().string};const ce=_;var se=e(35161),ae=e.n(se),oe=e(13217),Me=e.n(oe),re=e(71997);const xe=p=>{switch(p){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},Oe=(0,re.ZP)(D.x)`
  margin: -1px;
  border-radius: ${({theme:p})=>p.spaces[1]} 0 0 ${({theme:p})=>p.spaces[1]};
`;function pe({route:p}){const{formatMessage:f}=(0,u.Z)(),{method:y,handler:B,path:x}=p,Z=x?Me()(x.split("/")):[],[O="",G=""]=B?B.split("."):[],H=xe(p.method);return t.createElement(a.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(I.Z,{variant:"delta",as:"h3"},f({id:"Settings.apiTokens.createPage.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",t.createElement("span",null,O),t.createElement(I.Z,{variant:"delta",textColor:"primary600"},".",G)),t.createElement(a.k,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0},t.createElement(Oe,{background:H.background,borderColor:H.border,padding:2},t.createElement(I.Z,{fontWeight:"bold",textColor:H.text},y)),t.createElement(D.x,{paddingLeft:2,paddingRight:2},ae()(Z,z=>t.createElement(I.Z,{key:z,textColor:z.includes(":")?"neutral600":"neutral900"},"/",z)))))}pe.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}},pe.propTypes={route:l().shape({handler:l().string,method:l().string,path:l().string})};const Re=pe,Ie=()=>{const{value:{selectedAction:p,routes:f}}=i(),{formatMessage:y}=(0,u.Z)(),B=p?.split(".")[0];return t.createElement(S.P,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"}},p?t.createElement(a.k,{direction:"column",alignItems:"stretch",gap:2},f[B]?.map(x=>x.config.auth?.scope?.includes(p)||x.handler===p?t.createElement(Re,{key:x.handler,route:x}):null)):t.createElement(a.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(I.Z,{variant:"delta",as:"h3"},y({id:"Settings.apiTokens.createPage.permissions.header.title",defaultMessage:"Advanced settings"})),t.createElement(I.Z,{as:"p",textColor:"neutral600"},y({id:"Settings.apiTokens.createPage.permissions.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"}))))};var De=e(63122),Se=e(1744),Le=e(68889),ve=e(22546),ke=e(40989),Be=e(48403),Ue=e.n(Be);const Ce=(0,re.iv)`
  background: ${p=>p.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,Ze=(0,re.ZP)(D.x)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${p=>p.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${p=>p.isActive&&Ce}
  &:hover {
    ${Ce}
  }
`,We=re.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:p})=>p.colors.neutral150};
`,ue=({controllers:p,label:f,orderNumber:y,disabled:B,onExpanded:x,indexExpandendCollapsedContent:Z})=>{const{value:{onChangeSelectAll:O,onChange:G,selectedActions:H,setSelectedAction:z,selectedAction:w}}=i(),[V,ie]=(0,t.useState)(!1),{formatMessage:Ee}=(0,u.Z)(),q=()=>{ie(W=>!W),x(y)};(0,t.useEffect)(()=>{Z!==null&&Z!==y&&V&&ie(!1)},[Z,y,V]);const K=W=>W===w;return t.createElement(De.U,{expanded:V,onToggle:q,variant:y%2?"primary":"secondary"},t.createElement(Se.B,{title:Ue()(f)}),t.createElement(Le.v,null,p?.map(W=>{const ee=W.actions.every(j=>H.includes(j.actionId)),fe=W.actions.some(j=>H.includes(j.actionId));return t.createElement(D.x,{key:`${f}.${W?.controller}`},t.createElement(a.k,{justifyContent:"space-between",alignItems:"center",padding:4},t.createElement(D.x,{paddingRight:4},t.createElement(I.Z,{variant:"sigma",textColor:"neutral600"},W?.controller)),t.createElement(We,null),t.createElement(D.x,{paddingLeft:4},t.createElement(ve.X,{value:ee,indeterminate:!ee&&fe,onValueChange:()=>{O({target:{value:[...W.actions]}})},disabled:B},Ee({id:"app.utils.select-all",defaultMessage:"Select all"})))),t.createElement(R.r,{gap:4,padding:4},W?.actions&&W?.actions.map(j=>t.createElement(S.P,{col:6,key:j.actionId},t.createElement(Ze,{isActive:K(j.actionId),padding:2,hasRadius:!0},t.createElement(ve.X,{value:H.includes(j.actionId),name:j.actionId,onValueChange:()=>{G({target:{value:j.actionId}})},disabled:B},j.action),t.createElement("button",{type:"button","data-testid":"action-cog",onClick:()=>z({target:{value:j.actionId}}),style:{display:"inline-flex",alignItems:"center"}},t.createElement(ke.Z,null)))))))})))};ue.defaultProps={controllers:[],orderNumber:0,disabled:!1,onExpanded:()=>null,indexExpandendCollapsedContent:null},ue.propTypes={controllers:l().array,orderNumber:l().number,label:l().string.isRequired,disabled:l().bool,onExpanded:l().func,indexExpandendCollapsedContent:l().number};const be=ue,ge=({section:p,...f})=>{const[y,B]=(0,t.useState)(null),x=Z=>B(Z);return t.createElement(D.x,{padding:4,background:"neutral0"},p&&p.map((Z,O)=>t.createElement(be,{key:Z.apiId,label:Z.label,controllers:Z.controllers,orderNumber:O,indexExpandendCollapsedContent:y,onExpanded:x,name:Z.apiId,...f})))};ge.defaultProps={section:null},ge.propTypes={section:l().arrayOf(l().object)};const Ke=ge,$e=({...p})=>{const{value:{data:f}}=i(),{formatMessage:y}=(0,u.Z)();return t.createElement(R.r,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0"},t.createElement(S.P,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(a.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(I.Z,{variant:"delta",as:"h2"},y({id:"Settings.apiTokens.createPage.permissions.title",defaultMessage:"Permissions"})),t.createElement(I.Z,{as:"p",textColor:"neutral600"},y({id:"Settings.apiTokens.createPage.permissions.description",defaultMessage:"Only actions bound by a route are listed below."}))),f?.permissions&&t.createElement(Ke,{section:f?.permissions,...p})),t.createElement(Ie,null))},Ne=(0,t.memo)($e);var me=e(51352);const je=(p,f=[])=>({...p,selectedAction:null,routes:[],selectedActions:[],data:(0,me.mk)(f)});var Fe=e(18172),He=e(97019),Pe=e.n(He);const ze={data:{},selectedActions:[]},Ve=(p,f)=>(0,Fe.ZP)(p,y=>{switch(f.type){case"ON_CHANGE":{y.selectedActions.includes(f.value)?Pe()(y.selectedActions,f.value):y.selectedActions.push(f.value);break}case"SELECT_ALL_IN_PERMISSION":{f.value.every(x=>y.selectedActions.includes(x.actionId))?f.value.forEach(x=>{Pe()(y.selectedActions,x.actionId)}):f.value.forEach(x=>{y.selectedActions.push(x.actionId)});break}case"SELECT_ALL_ACTIONS":{y.selectedActions=[...y.data.allActionsIds];break}case"ON_CHANGE_READ_ONLY":{const B=y.data.allActionsIds.filter(x=>x.includes("find")||x.includes("findOne"));y.selectedActions=[...B];break}case"UPDATE_PERMISSIONS_LAYOUT":{y.data=(0,me.mk)(f.value);break}case"UPDATE_ROUTES":{y.routes={...f.value};break}case"UPDATE_PERMISSIONS":{y.selectedActions=[...f.value];break}case"SET_SELECTED_ACTION":{y.selectedAction=f.value;break}default:return y}}),Ye="Name already taken",Ge=()=>{(0,s.go)();const{formatMessage:p}=(0,u.Z)(),{lockApp:f,unlockApp:y}=(0,s.o1)(),B=(0,s.lm)(),x=(0,A.k6)(),Z=(0,n.v9)(m._),[O,G]=(0,t.useState)(x.location.state?.apiToken.accessKey?{...x.location.state.apiToken}:null),{trackUsage:H}=(0,s.rS)(),z=(0,t.useRef)(H),{setCurrentStep:w}=(0,s.c1)(),{allowedActions:{canCreate:V,canUpdate:ie,canRegenerate:Ee}}=(0,s.ss)(Z.settings["api-tokens"]),[q,K]=(0,t.useReducer)(Ve,ze,M=>je(M,{})),{params:{id:W}}=(0,A.$B)("/settings/api-tokens/:id"),{get:ee,post:fe,put:j}=(0,s.kY)(),F=W==="create";(0,h.useQuery)("content-api-permissions",async()=>{const[M,Q]=await Promise.all(["/admin/content-api/permissions","/admin/content-api/routes"].map(async te=>{const{data:b}=await ee(te);return b.data}));K({type:"UPDATE_PERMISSIONS_LAYOUT",value:M}),K({type:"UPDATE_ROUTES",value:Q}),O&&(O?.type==="read-only"&&K({type:"ON_CHANGE_READ_ONLY"}),O?.type==="full-access"&&K({type:"SELECT_ALL_ACTIONS"}),O?.type==="custom"&&K({type:"UPDATE_PERMISSIONS",value:O?.permissions}))},{onError(){B({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),(0,t.useEffect)(()=>{z.current(F?"didAddTokenFromList":"didEditTokenFromList",{tokenType:T.Z})},[F]);const{status:Xe}=(0,h.useQuery)(["api-token",W],async()=>{const{data:{data:M}}=await ee(`/admin/api-tokens/${W}`);return G({...M}),M?.type==="read-only"&&K({type:"ON_CHANGE_READ_ONLY"}),M?.type==="full-access"&&K({type:"SELECT_ALL_ACTIONS"}),M?.type==="custom"&&K({type:"UPDATE_PERMISSIONS",value:M?.permissions}),M},{enabled:!F&&!O,onError(){B({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Qe=async(M,Q)=>{z.current(F?"willCreateToken":"willEditToken",{tokenType:T.Z}),f();const te=M.lifespan&&parseInt(M.lifespan,10)&&M.lifespan!=="0"?parseInt(M.lifespan,10):null;try{const{data:{data:b}}=F?await fe("/admin/api-tokens",{...M,lifespan:te,permissions:M.type==="custom"?q.selectedActions:null}):await j(`/admin/api-tokens/${W}`,{name:M.name,description:M.description,type:M.type,permissions:M.type==="custom"?q.selectedActions:null});F&&(x.replace(`/settings/api-tokens/${b.id}`,{apiToken:b}),w("apiTokens.success")),y(),G({...b}),B({type:"success",message:p(F?{id:"notification.success.apitokencreated",defaultMessage:"API Token successfully created"}:{id:"notification.success.apitokenedited",defaultMessage:"API Token successfully edited"})}),z.current(F?"didCreateToken":"didEditToken",{type:O.type,tokenType:T.Z})}catch(b){const Te=(0,E.I)(b.response.data);Q.setErrors(Te),b?.response?.data?.error?.message===Ye?B({type:"warning",message:b.response.data.message||"notification.error.tokennamenotunique"}):B({type:"warning",message:b?.response?.data?.message||"notification.error"}),y()}},[Je,ye]=(0,t.useState)(!1),_e={...q,onChange:({target:{value:M}})=>{ye(!0),K({type:"ON_CHANGE",value:M})},onChangeSelectAll:({target:{value:M}})=>{ye(!0),K({type:"SELECT_ALL_IN_PERMISSION",value:M})},setSelectedAction:({target:{value:M}})=>{K({type:"SET_SELECTED_ACTION",value:M})}},he=ie&&!F||V&&F;return!F&&!O&&Xe!=="success"?t.createElement(ce,{apiTokenName:O?.name}):t.createElement(c,{value:_e},t.createElement(d.o,null,t.createElement(s.SL,{name:"API Tokens"}),t.createElement(r.J9,{validationSchema:me.fK,validateOnChange:!1,initialValues:{name:O?.name||"",description:O?.description||"",type:O?.type,lifespan:O?.lifespan?O.lifespan.toString():O?.lifespan},enableReinitialize:!0,onSubmit:(M,Q)=>Qe(M,Q)},({errors:M,handleChange:Q,isSubmitting:te,values:b,setFieldValue:Te})=>(Je&&b?.type!=="custom"&&Te("type","custom"),t.createElement(s.l0,null,t.createElement(U.Z,{backUrl:"/settings/api-tokens",title:{id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"},token:O,setToken:G,canEditInputs:he,canRegenerate:Ee,isSubmitting:te,regenerateUrl:"/admin/api-tokens/"}),t.createElement(o.D,null,t.createElement(a.k,{direction:"column",alignItems:"stretch",gap:6},Boolean(O?.name)&&t.createElement(L.Z,{token:O?.accessKey,tokenType:T.Z}),t.createElement(ne,{errors:M,onChange:Q,canEditInputs:he,isCreating:F,values:b,apiToken:O,onDispatch:K,setHasChangedPermissions:ye}),t.createElement(Ne,{disabled:!he||b?.type==="read-only"||b?.type==="full-access"}))))))))}},51352:(C,g,e)=>{"use strict";e.d(g,{IX:()=>s,fK:()=>n,mk:()=>P});var t=e(66115),d=e(77349),o=e(51991);const s=(v,c,i="en")=>{if(c&&typeof c=="number"){const E=c/24/60/60/1e3;return(0,t.Z)((0,d.Z)(new Date(v),E),"PPP",{locale:o[i]})}return"Unlimited"};var r=e(3911),u=e(87561);const n=u.Ry().shape({name:u.Z_(r.I0.string).max(100).required(r.I0.required),type:u.Z_(r.I0.string).oneOf(["read-only","full-access","custom"]).required(r.I0.required),description:u.Z_().nullable(),lifespan:u.Rx().integer().min(0).nullable().defined(r.I0.required)}),P=v=>{const c={allActionsIds:[],permissions:[]};return c.permissions=Object.keys(v).map(i=>({apiId:i,label:i.split("::")[1],controllers:Object.keys(v[i].controllers).map(E=>({controller:E,actions:v[i].controllers[E].map(m=>{const T=`${i}.${E}.${m}`;return i.includes("api::")&&c.allActionsIds.push(T),{action:m,actionId:T}}).flat()})).flat()})),c}},41848:C=>{function g(e,t,d,o){for(var a=e.length,s=d+(o?1:-1);o?s--:++s<a;)if(t(e[s],s,e))return s;return-1}C.exports=g},42118:(C,g,e)=>{var t=e(41848),d=e(62722),o=e(42351);function a(s,r,u){return r===r?o(s,r,u):t(s,d,u)}C.exports=a},74221:C=>{function g(e,t,d,o){for(var a=d-1,s=e.length;++a<s;)if(o(e[a],t))return a;return-1}C.exports=g},62722:C=>{function g(e){return e!==e}C.exports=g},65464:(C,g,e)=>{var t=e(29932),d=e(42118),o=e(74221),a=e(7518),s=e(278),r=Array.prototype,u=r.splice;function h(n,A,P,v){var c=v?o:d,i=-1,E=A.length,m=n;for(n===A&&(A=s(A)),P&&(m=t(n,a(P)));++i<E;)for(var T=0,U=A[i],L=P?P(U):U;(T=c(m,L,T,v))>-1;)m!==n&&u.call(m,T,1),u.call(n,T,1);return n}C.exports=h},42351:C=>{function g(e,t,d){for(var o=d-1,a=e.length;++o<a;)if(e[o]===t)return o;return-1}C.exports=g},35161:(C,g,e)=>{var t=e(29932),d=e(67206),o=e(69199),a=e(1469);function s(r,u){var h=a(r)?t:o;return h(r,d(u,3))}C.exports=s},97019:(C,g,e)=>{var t=e(5976),d=e(45604),o=t(d);C.exports=o},45604:(C,g,e)=>{var t=e(65464);function d(o,a){return o&&o.length&&a&&a.length?t(o,a):o}C.exports=d},13217:(C,g,e)=>{var t=e(14259);function d(o){var a=o==null?0:o.length;return a?t(o,1,a):[]}C.exports=d},63122:(C,g,e)=>{"use strict";e.d(g,{U:()=>v,y:()=>A});var t=e(85893),d=e(67294),o=e(71997),a=e(31254),s=e(92058),r=e(10574),u=e(96987),h=e(16607);const n=({theme:c,expanded:i,variant:E,disabled:m,error:T})=>T?`1px solid ${c.colors.danger600} !important`:m?`1px solid ${c.colors.neutral150}`:i?`1px solid ${c.colors.primary600}`:E==="primary"?`1px solid ${c.colors.neutral0}`:`1px solid ${c.colors.neutral100}`,A=(0,o.ZP)(r.Z)``,P=(0,o.ZP)(h.x)`
  border: ${n};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:c})=>c.colors.primary600};

    ${A} {
      color: ${({theme:c,expanded:i})=>i?void 0:c.colors.primary700};
    }

    ${r.Z} {
      color: ${({theme:c,expanded:i})=>i?void 0:c.colors.primary600};
    }

    & > ${u.k} {
      background: ${({theme:c})=>c.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:c})=>c.colors.primary200};
    }
  }
`,v=({children:c,disabled:i=!1,error:E,expanded:m=!1,hasErrorMessage:T=!0,id:U,onToggle:L,toggle:D,size:I="M",variant:R="primary",shadow:S})=>{const k=(0,s.M)(U),l=d.useMemo(()=>({expanded:m,onToggle:L,toggle:D,id:k,size:I,variant:R,disabled:i}),[i,m,k,L,I,D,R]);return(0,t.jsxs)(a.S.Provider,{value:l,children:[(0,t.jsx)(P,{"data-strapi-expanded":m,disabled:i,"aria-disabled":i,expanded:m,hasRadius:!0,variant:R,error:E,shadow:S,children:c}),E&&T&&(0,t.jsx)(h.x,{paddingTop:1,children:(0,t.jsx)(r.Z,{variant:"pi",textColor:"danger600",children:E})})]})}},68889:(C,g,e)=>{"use strict";e.d(g,{v:()=>a});var t=e(85893),d=e(31254),o=e(16607);const a=({children:s,...r})=>{const{expanded:u,id:h}=(0,d.A)();if(!u)return null;const n=`accordion-content-${h}`,A=`accordion-label-${h}`,P=`accordion-desc-${h}`;return(0,t.jsx)(o.x,{role:"region",id:n,"aria-labelledby":A,"aria-describedby":P,...r,children:s})}},31254:(C,g,e)=>{"use strict";e.d(g,{A:()=>o,S:()=>d});var t=e(67294);const d=(0,t.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),o=()=>(0,t.useContext)(d)},1744:(C,g,e)=>{"use strict";e.d(g,{B:()=>c});var t=e(85893),d=e(58471),o=e(71997),a=e(63122),s=e(31254);const r=({expanded:i,disabled:E,variant:m})=>{let T="neutral100";return i?T="primary100":E?T="neutral150":m==="primary"&&(T="neutral0"),T};var u=e(58753),h=e(85200),n=e(96987),A=e(10574);const P=(0,o.ZP)(u.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:i,expanded:E})=>E?i.colors.primary600:i.colors.neutral500};
    }
  }
`,v=(0,o.ZP)(n.k)`
  min-height: ${({theme:i,size:E})=>i.sizes.accordions[E]};
  border-radius: ${({theme:i,expanded:E})=>E?`${i.borderRadius} ${i.borderRadius} 0 0`:i.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:i})=>i.colors.primary600};
      }
    }
  }
`,c=({title:i,description:E,as:m="span",togglePosition:T="right",action:U,...L})=>{const{onToggle:D,toggle:I,expanded:R,id:S,size:k,variant:l,disabled:$}=(0,s.A)(),Y=`accordion-content-${S}`,N=`accordion-label-${S}`,J=`accordion-desc-${S}`,X=k==="M"?6:4,ne=k==="M"?X:X-2,le=r({expanded:R,disabled:$,variant:l}),de={as:m,fontWeight:k==="S"?"bold":void 0,id:N,textColor:R?"primary600":"neutral700",ellipsis:!0,variant:k==="M"?"delta":void 0},_=R?"primary600":"neutral600",ce=R?"primary200":"neutral200",se=k==="M"?`${32/16}rem`:`${24/16}rem`,ae=()=>{$||(I&&!D?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),I()):D&&D())},oe=(0,t.jsx)(n.k,{justifyContent:"center",borderRadius:"50%",height:se,width:se,transform:R?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:ce,cursor:$?"not-allowed":"pointer",onClick:ae,shrink:0,children:(0,t.jsx)(h.J,{as:d.Z,width:k==="M"?`${11/16}rem`:`${8/16}rem`,color:R?"primary600":"neutral600"})});return(0,t.jsx)(v,{paddingBottom:ne,paddingLeft:X,paddingRight:X,paddingTop:ne,background:le,expanded:R,size:k,justifyContent:"space-between",cursor:$?"not-allowed":"",children:(0,t.jsxs)(n.k,{gap:3,flex:1,maxWidth:"100%",children:[T==="left"&&oe,(0,t.jsx)(P,{onClick:ae,"aria-disabled":$,"aria-expanded":R,"aria-controls":Y,"aria-labelledby":N,"data-strapi-accordion-toggle":!0,expanded:R,type:"button",flex:1,minWidth:0,...L,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.y,{...de,children:i}),E&&(0,t.jsx)(A.Z,{as:"p",id:J,textColor:_,children:E})]})}),T==="right"&&(0,t.jsxs)(n.k,{gap:3,children:[oe,U]}),T==="left"&&U]})})}}}]);
