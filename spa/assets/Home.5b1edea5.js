import{f as N,Q as De,g as ft,a as ht,d as mt,b as bt,c as gt,e as yt}from"./format.d3287626.js";import{l as ae,H as u,u as L,v as $e,U as ge,aJ as pt,V as ye,aK as _t,r as k,x as ce,K as St,z as Je,ax as wt,ai as zt,a1 as ie,av as Ct,aD as kt,Y as me,aE as ke,X as Qe,aL as qe,aF as Pe,Z as xe,aM as qt,T as M,n as xt,q as Mt,I as He,M as Ze,J as ue,aN as Me,aO as Fe,a3 as Bt,a5 as At,S as Lt,D as et,F as te,aw as tt,a7 as Tt,aP as Ot,s as Dt,A as Ve,W as Ie,aQ as Pt,au as $t,_ as Ht,c as Re,o as B,d as V,f as A,w as z,e as $,am as G,an as J,ap as Q,t as Z,aR as We,aS as be,aT as ne,Q as Et,k as Be,g as re,ar as Qt,p as Ft,h as Vt,R as je}from"./index.032997c5.js";import{g as Ne,s as Ke,c as It}from"./selection.9bac90c1.js";var ee=ae({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:c}){const d=u(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>L("div",{class:d.value},$e(c.default))}}),Ae=ae({name:"QItem",props:{...ge,...pt,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:c,emit:d}){const{proxy:{$q:m}}=ce(),t=ye(e,m),{hasLink:o,linkAttrs:n,linkClass:a,linkTag:s,navigateOnClick:f}=_t(),l=k(null),S=k(null),h=u(()=>e.clickable===!0||o.value===!0||e.tag==="label"),C=u(()=>e.disable!==!0&&h.value===!0),y=u(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(o.value===!0&&e.active===null?a.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(C.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),x=u(()=>{if(e.insetLevel===void 0)return null;const w=m.lang.rtl===!0?"Right":"Left";return{["padding"+w]:16+e.insetLevel*56+"px"}});function q(w){C.value===!0&&(S.value!==null&&(w.qKeyEvent!==!0&&document.activeElement===l.value?S.value.focus():document.activeElement===S.value&&l.value.focus()),f(w))}function _(w){if(C.value===!0&&St(w,13)===!0){Je(w),w.qKeyEvent=!0;const F=new MouseEvent("click",w);F.qKeyEvent=!0,l.value.dispatchEvent(F)}d("keyup",w)}function I(){const w=wt(c.default,[]);return C.value===!0&&w.unshift(L("div",{class:"q-focus-helper",tabindex:-1,ref:S})),w}return()=>{const w={ref:l,class:y.value,style:x.value,role:"listitem",onClick:q,onKeyup:_};return C.value===!0?(w.tabindex=e.tabindex||"0",Object.assign(w,n.value)):h.value===!0&&(w["aria-disabled"]="true"),L(s.value,w,I())}}}),Le=ae({name:"QList",props:{...ge,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:c}){const d=ce(),m=ye(e,d.proxy.$q),t=u(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(m.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>L(e.tag,{class:t.value},$e(c.default))}});function Te(e,c,d){const m=Pe(e);let t,o=m.left-c.event.x,n=m.top-c.event.y,a=Math.abs(o),s=Math.abs(n);const f=c.direction;f.horizontal===!0&&f.vertical!==!0?t=o<0?"left":"right":f.horizontal!==!0&&f.vertical===!0?t=n<0?"up":"down":f.up===!0&&n<0?(t="up",a>s&&(f.left===!0&&o<0?t="left":f.right===!0&&o>0&&(t="right"))):f.down===!0&&n>0?(t="down",a>s&&(f.left===!0&&o<0?t="left":f.right===!0&&o>0&&(t="right"))):f.left===!0&&o<0?(t="left",a<s&&(f.up===!0&&n<0?t="up":f.down===!0&&n>0&&(t="down"))):f.right===!0&&o>0&&(t="right",a<s&&(f.up===!0&&n<0?t="up":f.down===!0&&n>0&&(t="down")));let l=!1;if(t===void 0&&d===!1){if(c.event.isFirst===!0||c.event.lastDir===void 0)return{};t=c.event.lastDir,l=!0,t==="left"||t==="right"?(m.left-=o,a=0,o=0):(m.top-=n,s=0,n=0)}return{synthetic:l,payload:{evt:e,touch:c.event.mouse!==!0,mouse:c.event.mouse===!0,position:m,direction:t,isFirst:c.event.isFirst,isFinal:d===!0,duration:Date.now()-c.event.time,distance:{x:a,y:s},offset:{x:o,y:n},delta:{x:m.left-c.event.lastX,y:m.top-c.event.lastY}}}}let Rt=0;var se=zt({name:"touch-pan",beforeMount(e,{value:c,modifiers:d}){if(d.mouse!==!0&&ie.has.touch!==!0)return;function m(o,n){d.mouse===!0&&n===!0?Je(o):(d.stop===!0&&qe(o),d.prevent===!0&&Qe(o))}const t={uid:"qvtp_"+Rt++,handler:c,modifiers:d,direction:Ne(d),noop:Ct,mouseStart(o){Ke(o,t)&&kt(o)&&(me(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(o,!0))},touchStart(o){if(Ke(o,t)){const n=o.target;me(t,"temp",[[n,"touchmove","move","notPassiveCapture"],[n,"touchcancel","end","passiveCapture"],[n,"touchend","end","passiveCapture"]]),t.start(o)}},start(o,n){if(ie.is.firefox===!0&&ke(e,!0),t.lastEvt=o,n===!0||d.stop===!0){if(t.direction.all!==!0&&(n!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const f=o.type.indexOf("mouse")>-1?new MouseEvent(o.type,o):new TouchEvent(o.type,o);o.defaultPrevented===!0&&Qe(f),o.cancelBubble===!0&&qe(f),Object.assign(f,{qKeyEvent:o.qKeyEvent,qClickOutside:o.qClickOutside,qAnchorHandled:o.qAnchorHandled,qClonedBy:o.qClonedBy===void 0?[t.uid]:o.qClonedBy.concat(t.uid)}),t.initialEvent={target:o.target,event:f}}qe(o)}const{left:a,top:s}=Pe(o);t.event={x:a,y:s,time:Date.now(),mouse:n===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:a,lastY:s}},move(o){if(t.event===void 0)return;const n=Pe(o),a=n.left-t.event.x,s=n.top-t.event.y;if(a===0&&s===0)return;t.lastEvt=o;const f=t.event.mouse===!0,l=()=>{m(o,f);let C;d.preserveCursor!==!0&&d.preservecursor!==!0&&(C=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),f===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),It(),t.styleCleanup=y=>{if(t.styleCleanup=void 0,C!==void 0&&(document.documentElement.style.cursor=C),document.body.classList.remove("non-selectable"),f===!0){const x=()=>{document.body.classList.remove("no-pointer-events--children")};y!==void 0?setTimeout(()=>{x(),y()},50):x()}else y!==void 0&&y()}};if(t.event.detected===!0){t.event.isFirst!==!0&&m(o,t.event.mouse);const{payload:C,synthetic:y}=Te(o,t,!1);C!==void 0&&(t.handler(C)===!1?t.end(o):(t.styleCleanup===void 0&&t.event.isFirst===!0&&l(),t.event.lastX=C.position.left,t.event.lastY=C.position.top,t.event.lastDir=y===!0?void 0:C.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||f===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){l(),t.event.detected=!0,t.move(o);return}const S=Math.abs(a),h=Math.abs(s);S!==h&&(t.direction.horizontal===!0&&S>h||t.direction.vertical===!0&&S<h||t.direction.up===!0&&S<h&&s<0||t.direction.down===!0&&S<h&&s>0||t.direction.left===!0&&S>h&&a<0||t.direction.right===!0&&S>h&&a>0?(t.event.detected=!0,t.move(o)):t.end(o,!0))},end(o,n){if(t.event!==void 0){if(xe(t,"temp"),ie.is.firefox===!0&&ke(e,!1),n===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Te(o===void 0?t.lastEvt:o,t).payload);const{payload:a}=Te(o===void 0?t.lastEvt:o,t,!0),s=()=>{t.handler(a)};t.styleCleanup!==void 0?t.styleCleanup(s):s()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,d.mouse===!0){const o=d.mouseCapture===!0||d.mousecapture===!0?"Capture":"";me(t,"main",[[e,"mousedown","mouseStart",`passive${o}`]])}ie.has.touch===!0&&me(t,"main",[[e,"touchstart","touchStart",`passive${d.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,c){const d=e.__qtouchpan;d!==void 0&&(c.oldValue!==c.value&&(typeof value!="function"&&d.end(),d.handler=c.value),d.direction=Ne(c.modifiers))},beforeUnmount(e){const c=e.__qtouchpan;c!==void 0&&(c.event!==void 0&&c.end(),xe(c,"main"),xe(c,"temp"),ie.is.firefox===!0&&ke(e,!1),c.styleCleanup!==void 0&&c.styleCleanup(),delete e.__qtouchpan)}});const Xe=["vertical","horizontal"],Oe={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Ye={prevent:!0,mouse:!0,mouseAllDir:!0},Ue=e=>e>=250?50:Math.ceil(e/5);var Wt=ae({name:"QScrollArea",props:{...ge,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:c,emit:d}){const m=k(!1),t=k(!1),o=k(!1),n={vertical:k(0),horizontal:k(0)},a={vertical:{ref:k(null),position:k(0),size:k(0)},horizontal:{ref:k(null),position:k(0),size:k(0)}},{proxy:s}=ce(),f=ye(e,s.$q);let l=null,S;const h=k(null),C=u(()=>"q-scrollarea"+(f.value===!0?" q-scrollarea--dark":""));a.vertical.percentage=u(()=>{const r=a.vertical.size.value-n.vertical.value;if(r<=0)return 0;const v=N(a.vertical.position.value/r,0,1);return Math.round(v*1e4)/1e4}),a.vertical.thumbHidden=u(()=>(e.visible===null?o.value:e.visible)!==!0&&m.value===!1&&t.value===!1||a.vertical.size.value<=n.vertical.value+1),a.vertical.thumbStart=u(()=>a.vertical.percentage.value*(n.vertical.value-a.vertical.thumbSize.value)),a.vertical.thumbSize=u(()=>Math.round(N(n.vertical.value*n.vertical.value/a.vertical.size.value,Ue(n.vertical.value),n.vertical.value))),a.vertical.style=u(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${a.vertical.thumbStart.value}px`,height:`${a.vertical.thumbSize.value}px`})),a.vertical.thumbClass=u(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.vertical.barClass=u(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),a.horizontal.percentage=u(()=>{const r=a.horizontal.size.value-n.horizontal.value;if(r<=0)return 0;const v=N(Math.abs(a.horizontal.position.value)/r,0,1);return Math.round(v*1e4)/1e4}),a.horizontal.thumbHidden=u(()=>(e.visible===null?o.value:e.visible)!==!0&&m.value===!1&&t.value===!1||a.horizontal.size.value<=n.horizontal.value+1),a.horizontal.thumbStart=u(()=>a.horizontal.percentage.value*(n.horizontal.value-a.horizontal.thumbSize.value)),a.horizontal.thumbSize=u(()=>Math.round(N(n.horizontal.value*n.horizontal.value/a.horizontal.size.value,Ue(n.horizontal.value),n.horizontal.value))),a.horizontal.style=u(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[s.$q.lang.rtl===!0?"right":"left"]:`${a.horizontal.thumbStart.value}px`,width:`${a.horizontal.thumbSize.value}px`})),a.horizontal.thumbClass=u(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.horizontal.barClass=u(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const y=u(()=>a.vertical.thumbHidden.value===!0&&a.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),x=[[se,r=>{X(r,"vertical")},void 0,{vertical:!0,...Ye}]],q=[[se,r=>{X(r,"horizontal")},void 0,{horizontal:!0,...Ye}]];function _(){const r={};return Xe.forEach(v=>{const p=a[v];r[v+"Position"]=p.position.value,r[v+"Percentage"]=p.percentage.value,r[v+"Size"]=p.size.value,r[v+"ContainerSize"]=n[v].value}),r}const I=qt(()=>{const r=_();r.ref=s,d("scroll",r)},0);function w(r,v,p){if(Xe.includes(r)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(r==="vertical"?Fe:Me)(h.value,v,p)}function F({height:r,width:v}){let p=!1;n.vertical.value!==r&&(n.vertical.value=r,p=!0),n.horizontal.value!==v&&(n.horizontal.value=v,p=!0),p===!0&&E()}function b({position:r}){let v=!1;a.vertical.position.value!==r.top&&(a.vertical.position.value=r.top,v=!0),a.horizontal.position.value!==r.left&&(a.horizontal.position.value=r.left,v=!0),v===!0&&E()}function T({height:r,width:v}){a.horizontal.size.value!==v&&(a.horizontal.size.value=v,E()),a.vertical.size.value!==r&&(a.vertical.size.value=r,E())}function X(r,v){const p=a[v];if(r.isFirst===!0){if(p.thumbHidden.value===!0)return;S=p.position.value,t.value=!0}else if(t.value!==!0)return;r.isFinal===!0&&(t.value=!1);const D=Oe[v],U=n[v].value,pe=(p.size.value-U)/(U-p.thumbSize.value),_e=r.distance[D.dist],fe=S+(r.direction===D.dir?1:-1)*_e*pe;le(fe,v)}function ve(r,v){const p=a[v];if(p.thumbHidden.value!==!0){const D=r[Oe[v].offset];if(D<p.thumbStart.value||D>p.thumbStart.value+p.thumbSize.value){const U=D-p.thumbSize.value/2;le(U/n[v].value*p.size.value,v)}p.ref.value!==null&&p.ref.value.dispatchEvent(new MouseEvent(r.type,r))}}function Y(r){ve(r,"vertical")}function H(r){ve(r,"horizontal")}function E(){m.value=!0,l!==null&&clearTimeout(l),l=setTimeout(()=>{l=null,m.value=!1},e.delay),e.onScroll!==void 0&&I()}function le(r,v){h.value[Oe[v].scroll]=r}function R(){o.value=!0}function oe(){o.value=!1}let K=null;return M(()=>s.$q.lang.rtl,r=>{h.value!==null&&Me(h.value,Math.abs(a.horizontal.position.value)*(r===!0?-1:1))}),xt(()=>{K={top:a.vertical.position.value,left:a.horizontal.position.value}}),Mt(()=>{if(K===null)return;const r=h.value;r!==null&&(Me(r,K.left),Fe(r,K.top))}),He(I.cancel),Object.assign(s,{getScrollTarget:()=>h.value,getScroll:_,getScrollPosition:()=>({top:a.vertical.position.value,left:a.horizontal.position.value}),getScrollPercentage:()=>({top:a.vertical.percentage.value,left:a.horizontal.percentage.value}),setScrollPosition:w,setScrollPercentage(r,v,p){w(r,v*(a[r].size.value-n[r].value)*(r==="horizontal"&&s.$q.lang.rtl===!0?-1:1),p)}}),()=>L("div",{class:C.value,onMouseenter:R,onMouseleave:oe},[L("div",{ref:h,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[L("div",{class:"q-scrollarea__content absolute",style:y.value},Ze(c.default,[L(De,{debounce:0,onResize:T})])),L(ft,{axis:"both",onScroll:b})]),L(De,{debounce:0,onResize:F}),L("div",{class:a.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:Y}),L("div",{class:a.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:H}),ue(L("div",{ref:a.vertical.ref,class:a.vertical.thumbClass.value,style:a.vertical.style.value,"aria-hidden":"true"}),x),ue(L("div",{ref:a.horizontal.ref,class:a.horizontal.thumbClass.value,style:a.horizontal.style.value,"aria-hidden":"true"}),q)])}});const Ge=150;var jt=ae({name:"QDrawer",inheritAttrs:!1,props:{...Bt,...ge,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...At,"onLayout","miniState"],setup(e,{slots:c,emit:d,attrs:m}){const t=ce(),{proxy:{$q:o}}=t,n=ye(e,o),{preventBodyScroll:a}=Pt(),{registerTimeout:s,removeTimeout:f}=Lt(),l=et(tt,te);if(l===te)return console.error("QDrawer needs to be child of QLayout"),te;let S,h=null,C;const y=k(e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint),x=u(()=>e.mini===!0&&y.value!==!0),q=u(()=>x.value===!0?e.miniWidth:e.width),_=k(e.showIfAbove===!0&&y.value===!1?!0:e.modelValue===!0),I=u(()=>e.persistent!==!0&&(y.value===!0||U.value===!0));function w(i,g){if(X(),i!==!1&&l.animate(),P(0),y.value===!0){const O=l.instances[r.value];O!==void 0&&O.belowBreakpoint===!0&&O.hide(!1),W(1),l.isContainer.value!==!0&&a(!0)}else W(0),i!==!1&&we(!1);s(()=>{i!==!1&&we(!0),g!==!0&&d("show",i)},Ge)}function F(i,g){ve(),i!==!1&&l.animate(),W(0),P(E.value*q.value),ze(),g!==!0?s(()=>{d("hide",i)},Ge):f()}const{show:b,hide:T}=Tt({showing:_,hideOnRouteChange:I,handleShow:w,handleHide:F}),{addToHistory:X,removeFromHistory:ve}=Ot(_,T,I),Y={belowBreakpoint:y,hide:T},H=u(()=>e.side==="right"),E=u(()=>(o.lang.rtl===!0?-1:1)*(H.value===!0?1:-1)),le=k(0),R=k(!1),oe=k(!1),K=k(q.value*E.value),r=u(()=>H.value===!0?"left":"right"),v=u(()=>_.value===!0&&y.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:q.value:0),p=u(()=>e.overlay===!0||e.miniToOverlay===!0||l.view.value.indexOf(H.value?"R":"L")>-1||o.platform.is.ios===!0&&l.isContainer.value===!0),D=u(()=>e.overlay===!1&&_.value===!0&&y.value===!1),U=u(()=>e.overlay===!0&&_.value===!0&&y.value===!1),pe=u(()=>"fullscreen q-drawer__backdrop"+(_.value===!1&&R.value===!1?" hidden":"")),_e=u(()=>({backgroundColor:`rgba(0,0,0,${le.value*.4})`})),fe=u(()=>H.value===!0?l.rows.value.top[2]==="r":l.rows.value.top[0]==="l"),at=u(()=>H.value===!0?l.rows.value.bottom[2]==="r":l.rows.value.bottom[0]==="l"),lt=u(()=>{const i={};return l.header.space===!0&&fe.value===!1&&(p.value===!0?i.top=`${l.header.offset}px`:l.header.space===!0&&(i.top=`${l.header.size}px`)),l.footer.space===!0&&at.value===!1&&(p.value===!0?i.bottom=`${l.footer.offset}px`:l.footer.space===!0&&(i.bottom=`${l.footer.size}px`)),i}),ot=u(()=>{const i={width:`${q.value}px`,transform:`translateX(${K.value}px)`};return y.value===!0?i:Object.assign(i,lt.value)}),it=u(()=>"q-drawer__content fit "+(l.isContainer.value!==!0?"scroll":"overflow-auto")),nt=u(()=>`q-drawer q-drawer--${e.side}`+(oe.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(n.value===!0?" q-drawer--dark q-dark":"")+(R.value===!0?" no-transition":_.value===!0?"":" q-layout--prevent-focus")+(y.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${x.value===!0?"mini":"standard"}`+(p.value===!0||D.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(fe.value===!0?" q-drawer--top-padding":""))),rt=u(()=>{const i=o.lang.rtl===!0?e.side:r.value;return[[se,dt,void 0,{[i]:!0,mouse:!0}]]}),st=u(()=>{const i=o.lang.rtl===!0?r.value:e.side;return[[se,Ee,void 0,{[i]:!0,mouse:!0}]]}),ut=u(()=>{const i=o.lang.rtl===!0?r.value:e.side;return[[se,Ee,void 0,{[i]:!0,mouse:!0,mouseAllDir:!0}]]});function Se(){vt(y,e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint)}M(y,i=>{i===!0?(S=_.value,_.value===!0&&T(!1)):e.overlay===!1&&e.behavior!=="mobile"&&S!==!1&&(_.value===!0?(P(0),W(0),ze()):b(!1))}),M(()=>e.side,(i,g)=>{l.instances[g]===Y&&(l.instances[g]=void 0,l[g].space=!1,l[g].offset=0),l.instances[i]=Y,l[i].size=q.value,l[i].space=D.value,l[i].offset=v.value}),M(l.totalWidth,()=>{(l.isContainer.value===!0||document.qScrollPrevented!==!0)&&Se()}),M(()=>e.behavior+e.breakpoint,Se),M(l.isContainer,i=>{_.value===!0&&a(i!==!0),i===!0&&Se()}),M(l.scrollbarWidth,()=>{P(_.value===!0?0:void 0)}),M(v,i=>{j("offset",i)}),M(D,i=>{d("onLayout",i),j("space",i)}),M(H,()=>{P()}),M(q,i=>{P(),Ce(e.miniToOverlay,i)}),M(()=>e.miniToOverlay,i=>{Ce(i,q.value)}),M(()=>o.lang.rtl,()=>{P()}),M(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(ct(),l.animate())}),M(x,i=>{d("miniState",i)});function P(i){i===void 0?Ve(()=>{i=_.value===!0?0:q.value,P(E.value*i)}):(l.isContainer.value===!0&&H.value===!0&&(y.value===!0||Math.abs(i)===q.value)&&(i+=E.value*l.scrollbarWidth.value),K.value=i)}function W(i){le.value=i}function we(i){const g=i===!0?"remove":l.isContainer.value!==!0?"add":"";g!==""&&document.body.classList[g]("q-body--drawer-toggle")}function ct(){h!==null&&clearTimeout(h),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),oe.value=!0,h=setTimeout(()=>{h=null,oe.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function dt(i){if(_.value!==!1)return;const g=q.value,O=N(i.distance.x,0,g);if(i.isFinal===!0){O>=Math.min(75,g)===!0?b():(l.animate(),W(0),P(E.value*g)),R.value=!1;return}P((o.lang.rtl===!0?H.value!==!0:H.value)?Math.max(g-O,0):Math.min(0,O-g)),W(N(O/g,0,1)),i.isFirst===!0&&(R.value=!0)}function Ee(i){if(_.value!==!0)return;const g=q.value,O=i.direction===e.side,he=(o.lang.rtl===!0?O!==!0:O)?N(i.distance.x,0,g):0;if(i.isFinal===!0){Math.abs(he)<Math.min(75,g)===!0?(l.animate(),W(1),P(0)):T(),R.value=!1;return}P(E.value*he),W(N(1-he/g,0,1)),i.isFirst===!0&&(R.value=!0)}function ze(){a(!1),we(!0)}function j(i,g){l.update(e.side,i,g)}function vt(i,g){i.value!==g&&(i.value=g)}function Ce(i,g){j("size",i===!0?e.miniWidth:g)}return l.instances[e.side]=Y,Ce(e.miniToOverlay,q.value),j("space",D.value),j("offset",v.value),e.showIfAbove===!0&&e.modelValue!==!0&&_.value===!0&&e["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!0),Dt(()=>{d("onLayout",D.value),d("miniState",x.value),S=e.showIfAbove===!0;const i=()=>{(_.value===!0?w:F)(!1,!0)};if(l.totalWidth.value!==0){Ve(i);return}C=M(l.totalWidth,()=>{C(),C=void 0,_.value===!1&&e.showIfAbove===!0&&y.value===!1?b(!1):i()})}),He(()=>{C!==void 0&&C(),h!==null&&(clearTimeout(h),h=null),_.value===!0&&ze(),l.instances[e.side]===Y&&(l.instances[e.side]=void 0,j("size",0),j("offset",0),j("space",!1))}),()=>{const i=[];y.value===!0&&(e.noSwipeOpen===!1&&i.push(ue(L("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),rt.value)),i.push(Ie("div",{ref:"backdrop",class:pe.value,style:_e.value,"aria-hidden":"true",onClick:T},void 0,"backdrop",e.noSwipeBackdrop!==!0&&_.value===!0,()=>ut.value)));const g=x.value===!0&&c.mini!==void 0,O=[L("div",{...m,key:""+g,class:[it.value,m.class]},g===!0?c.mini():$e(c.default))];return e.elevated===!0&&_.value===!0&&O.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),i.push(Ie("aside",{ref:"content",class:nt.value,style:ot.value},O,"contentclose",e.noSwipeClose!==!0&&y.value===!0,()=>st.value)),L("div",{class:"q-drawer-container"},i)}}}),Nt=ae({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:c,emit:d}){const{proxy:{$q:m}}=ce(),t=et(tt,te);if(t===te)return console.error("QFooter needs to be child of QLayout"),te;const o=k(parseInt(e.heightHint,10)),n=k(!0),a=k($t.value===!0||t.isContainer.value===!0?0:window.innerHeight),s=u(()=>e.reveal===!0||t.view.value.indexOf("F")>-1||m.platform.is.ios&&t.isContainer.value===!0),f=u(()=>t.isContainer.value===!0?t.containerHeight.value:a.value),l=u(()=>{if(e.modelValue!==!0)return 0;if(s.value===!0)return n.value===!0?o.value:0;const b=t.scroll.value.position+f.value+o.value-t.height.value;return b>0?b:0}),S=u(()=>e.modelValue!==!0||s.value===!0&&n.value!==!0),h=u(()=>e.modelValue===!0&&S.value===!0&&e.reveal===!0),C=u(()=>"q-footer q-layout__section--marginal "+(s.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(S.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(s.value!==!0?" hidden":""):"")),y=u(()=>{const b=t.rows.value.bottom,T={};return b[0]==="l"&&t.left.space===!0&&(T[m.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),b[2]==="r"&&t.right.space===!0&&(T[m.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),T});function x(b,T){t.update("footer",b,T)}function q(b,T){b.value!==T&&(b.value=T)}function _({height:b}){q(o,b),x("size",b)}function I(){if(e.reveal!==!0)return;const{direction:b,position:T,inflectionPoint:X}=t.scroll.value;q(n,b==="up"||T-X<100||t.height.value-f.value-T-o.value<300)}function w(b){h.value===!0&&q(n,!0),d("focusin",b)}M(()=>e.modelValue,b=>{x("space",b),q(n,!0),t.animate()}),M(l,b=>{x("offset",b)}),M(()=>e.reveal,b=>{b===!1&&q(n,e.modelValue)}),M(n,b=>{t.animate(),d("reveal",b)}),M([o,t.scroll,t.height],I),M(()=>m.screen.height,b=>{t.isContainer.value!==!0&&q(a,b)});const F={};return t.instances.footer=F,e.modelValue===!0&&x("size",o.value),x("space",e.modelValue),x("offset",l.value),He(()=>{t.instances.footer===F&&(t.instances.footer=void 0,x("size",0),x("offset",0),x("space",!1))}),()=>{const b=Ze(c.default,[L(De,{debounce:0,onResize:_})]);return e.elevated===!0&&b.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),L("footer",{class:C.value,style:y.value,onFocusin:w},b)}}}),Kt="/assets/Logo-NoBg.bbf9124b.png";const Xt={name:"OilAndGas",setup(){const e=k(!1);return{leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value},toggleList(c){var d=document.querySelector(`[refers-to="${c}"]`);d.dataset.height;var m=d.classList.contains("viewed");m==!1?(document.querySelector(`#${c}`).style.height="fit-content",d.classList.add("view"),d.classList.add("viewed")):(document.querySelector(`#${c}`).style.height="0",d.classList.remove("view"),d.classList.remove("viewed"))}}},data(){return{routes:[{text:"Home",to:"/oil-and-gas/home",hasChildMenu:!1,icon:"home"},{text:"About Us",to:"/oil-and-gas/about-us",hasChildMenu:!0,id:"ab",disabled:!0,icon:"help_outline",childMenuIndex:"one",childs:[{text:"Our Company",to:"/oil-and-gas/about-us/our-company"},{text:"Our Policy",to:"/oil-and-gas/about-us/our-policy"}]},{text:"Services",to:"/oil-and-gas/services",hasChildMenu:!0,id:"sr",icon:"next_week",disabled:!0,childMenuIndex:"three",childs:[{text:"Drilling Services",to:"/oil-and-gas/services/drilling"},{text:"Mud Logging Services",to:"/oil-and-gas/services/mud-logging"},{text:"Down Hole Rental Equipment",to:"/oil-and-gas/services/down-hole"},{text:"Well Completion Planning Services",to:"/oil-and-gas/services/well-completion-planning-services"},{text:"Piping Service",to:"/oil-and-gas/services/piping-service"},{text:"Columns And Vessels",to:"/oil-and-gas/services/columns-and-vessels"},{text:"Heat Exchangers",to:"/oil-and-gas/services/heat-exchangers"},{text:"Seismic Survey And Data Processing-Onshore/Offshore",to:"/oil-and-gas/services/ssadpoo"},{text:"Reactors / Turbines / Boilers Furnace / Heaters",to:"/oil-and-gas/services/rtbfh"}]},{text:"Products",to:"/oil-and-gas/about-us",hasChildMenu:!0,disabled:!0,id:"pr",icon:"work_outline",childMenuIndex:"two",childs:[{text:"Chemicals",hasAnAnotherChild:!0,to:"/oil-and-gas/products/chemicals",id:"chem",childs:[{text:"Corrosion Inhibitor Oil Phase",to:"/oil-and-gas/products/chemicals/corrosion-inhibitor-oil"},{text:"Corrosion Inhibitor Water Phase",to:"/oil-and-gas/products/chemicals/corrosion-inhibitor-water"},{text:"Demulsifier",to:"/oil-and-gas/products/chemicals/demulsifier"},{text:"H2S Scavenger",to:"/oil-and-gas/products/chemicals/h2s-scavenger"},{text:"Biocide",to:"/oil-and-gas/products/chemicals/biocide"},{text:"Asphaltene Dispersant",to:"/oil-and-gas/products/chemicals/asphaltene-dispersant"},{text:"Wax Dispersant",to:"/oil-and-gas/products/chemicals/wax-dispersant"},{text:"Antifoam Agent",to:"/oil-and-gas/products/chemicals/antifoam-agent"}]}]},{text:"News",to:"/oil-and-gas/news",hasChildMenu:!1,icon:"feed"},{text:"Partners",to:"/oil-and-gas/partners",hasChildMenu:!1,icon:"phone"},{text:"Contact Us",to:"/oil-and-gas/contact-us",hasChildMenu:!1,icon:"handshake"}]}},mounted(){this.leftDrawerOpen=!1,console.log(this.$api)}},de=e=>(Ft("data-v-579ac960"),e=e(),Vt(),e),Yt={class:"oil-and-gas"},Ut=de(()=>$("div",{class:"for-mob"},null,-1)),Gt={class:"container",style:{padding:"0 !important"}},Jt=de(()=>$("img",{src:Kt,style:{cursor:"pointer"},alt:"",onclick:"document.location.reload()"},null,-1)),Zt={class:"menu flex-center"},ea={class:"link anek"},ta={class:"flex-center"},aa={key:0,class:"another-child-menu"},la={class:"link anek"},oa={class:"absolute-top drawer-back"},ia=de(()=>$("div",{class:"drawer-image"},null,-1)),na=de(()=>$("div",{class:"absolute-bottom bg-transparent flex-center drawer-title"},null,-1)),ra=de(()=>$("a",{href:"http://xmohamed.com",target:"_blank"},"Mohamed",-1));function sa(e,c,d,m,t,o){const n=Re("router-link"),a=Re("router-view");return B(),V("div",Yt,[Ut,A(ht,{view:"hHh Lpr fff"},{default:z(()=>[A(mt,{elevated:"",class:"bg-white text-white header"},{default:z(()=>[$("div",Gt,[A(bt,{style:{height:"100%"}},{default:z(()=>[A(gt,{style:{display:"flex","align-items":"center"}},{default:z(()=>[Jt]),_:1}),$("div",Zt,[(B(!0),V(G,null,J(t.routes,(s,f)=>(B(),Q(be(s.disabled?"div":"router-link"),{key:f,to:s.to,class:"link main flex-center anek has-child-menu"},{default:z(()=>[$("div",null,Z(s.text),1),s.hasChildMenu?(B(),V("div",{key:0,class:We(`child-menu ${s.childMenuIndex}`)},[(B(!0),V(G,null,J(s.childs,(l,S)=>(B(),Q(be(l.hasAnAnotherChild?"div":"router-link"),{key:S,to:l.to,class:We(l.hasAnAnotherChild?"has-an-another-child":"")},{default:z(()=>[$("div",ea,[$("p",ta,Z(l.text),1)]),l.hasAnAnotherChild?(B(),V("div",aa,[(B(!0),V(G,null,J(l.childs,h=>(B(),Q(n,{key:h.to,to:h.to},{default:z(()=>[$("div",la,Z(h.text),1)]),_:2},1032,["to"]))),128))])):ne("",!0)]),_:2},1032,["to","class"]))),128))],2)):ne("",!0)]),_:2},1032,["to"]))),128))]),A(Et,{dense:"",flat:"",round:"",icon:"menu",style:{display:"none"},onClick:m.toggleLeftDrawer,class:"menu-btn",color:"primary"},null,8,["onClick"])]),_:1})])]),_:1}),A(jt,{"show-if-above":"",overlay:"",modelValue:m.leftDrawerOpen,"onUpdate:modelValue":c[0]||(c[0]=s=>m.leftDrawerOpen=s),side:"left",bordered:"",class:"bg-secondary drawer",style:{position:"fixed","z-index":"102"}},{default:z(()=>[$("div",oa,[ia,na,A(Wt,{style:{height:"calc(100vh - 110px)"}},{default:z(()=>[A(Le,null,{default:z(()=>[(B(!0),V(G,null,J(t.routes,(s,f)=>(B(),V("div",{key:f},[ue((B(),Q(Ae,{clickable:""},{default:z(()=>[A(ee,{avatar:""},{default:z(()=>[A(Be,{color:"primary",name:s.icon},null,8,["name"])]),_:2},1024),A(ee,{class:"cairo nav-link"},{default:z(()=>[(B(),Q(be(s.disabled?"div":"router-link"),{to:s.to},{default:z(()=>[re(Z(s.text),1)]),_:2},1032,["to"]))]),_:2},1024),s.hasChildMenu?(B(),Q(ee,{key:0,avatar:"",class:"expand-icon",onClick:l=>m.toggleList(`${s.id}`),"refers-to":s.id,"data-height":s.childs.length*47},{default:z(()=>[A(Be,{color:"primary",name:"expand_more"})]),_:2},1032,["onClick","refers-to","data-height"])):ne("",!0)]),_:2},1024)),[[je]]),A(Le,{class:"list",id:s.id,"route.hasChildMenu":""},{default:z(()=>[(B(!0),V(G,null,J(s.childs,(l,S)=>(B(),Q(be(l.hasAnAnotherChild?"div":"router-link"),{key:S,to:l.to},{default:z(()=>[ue((B(),Q(Ae,{clickable:"",class:"q-item"},{default:z(()=>[A(ee,{class:"flex-center nav-link"},{default:z(()=>[re(Z(l.text),1)]),_:2},1024),l.hasAnAnotherChild?(B(),Q(ee,{key:0,class:"expand-icon",avatar:"",onClick:h=>m.toggleList(`${l.id}`),"refers-to":l.id,"data-height":l.childs.length*47},{default:z(()=>[A(Be,{color:"primary",name:"expand_more"})]),_:2},1032,["onClick","refers-to","data-height"])):ne("",!0)]),_:2},1024)),[[je]]),A(Qt,{style:{"background-color":"#f1891b"}}),l.hasAnAnotherChild?(B(),Q(Le,{key:0,id:l.id,class:"list",style:{overflow:"hidden"}},{default:z(()=>[(B(!0),V(G,null,J(l.childs,h=>(B(),Q(n,{key:h.text,to:h.to},{default:z(()=>[A(Ae,null,{default:z(()=>[A(ee,{class:"flex-center nav-link"},{default:z(()=>[re(Z(h.text),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:2},1032,["id"])):ne("",!0)]),_:2},1032,["to"]))),128))]),_:2},1032,["id"])]))),128))]),_:1})]),_:1})])]),_:1},8,["modelValue"]),A(yt,null,{default:z(()=>[A(a)]),_:1}),A(Nt,{class:"footer bg-primary mont-font"},{default:z(()=>[re(" Copyright \xA9 2023 Al-Taraf Group Trading LLC (TGT). Website by\xA0"),ra,re(". ")]),_:1})]),_:1})])}var fa=Ht(Xt,[["render",sa],["__scopeId","data-v-579ac960"]]);export{fa as default};