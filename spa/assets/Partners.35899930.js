import{_ as c,o as r,d as n,e,am as l,an as m,aY as p,ap as _,w as a,f as t,ar as u,t as g,aq as h,Q as v,as as w,ao as f}from"./index.032997c5.js";import{T as y}from"./core.484b0ab0.js";const x={name:"PartnersComponent",data(){return{partners:[{name:"Medco Energi",image:"https://i.imgur.com/kqj8Ln2.jpg",link:"http://www.medcoenergi.com/"},{name:"CAYAN Oil Company Limited",image:"https://i.imgur.com/4Zipwaa.jpg",link:"https://www.cayan-co.com/"},{name:"Shaleem Petroleum",image:"https://i.imgur.com/RfylYLA.jpg",link:"https://www.shaleem.co/"}]}},async mounted(){await new Promise(i=>setTimeout(i,1e3)),new y(".partners .landing #writer",{autoStart:!0,loop:!0,speed:1e3,deleteSpeed:20}).typeString("Partners").pauseFor(1e3).deleteChars(8).typeString("Partners").pauseFor(2e4).start()}},k={class:"partners chem-service"},C=p('<div class="landing" data-v-78d518aa><div class="img landing-img" data-v-78d518aa><img src="https://i.imgur.com/bVhgONT.jpg" alt="" data-v-78d518aa></div><div class="text flex-center poppins" id="writer" data-v-78d518aa> Partners </div></div><div class="introduction" data-v-78d518aa><div class="container" data-v-78d518aa> Our Partners </div></div>',2),P={class:"cards"},S={class:"container flex-center"},Q=["src"],j={class:"text-h6 flex-center",style:{"text-align":"center"}},B=["href"];function N(i,V,q,A,o,L){return r(),n("div",k,[C,e("div",P,[e("div",S,[(r(!0),n(l,null,m(o.partners,(s,d)=>(r(),_(f,{class:"my-card",key:d},{default:a(()=>[e("img",{src:s.image,style:{width:"300px",height:"300px"}},null,8,Q),t(u),t(h,null,{default:a(()=>[e("div",j,g(s.name),1)]),_:2},1024),t(w,{vertical:"",class:"q-pa-md q-gutter-sm"},{default:a(()=>[t(v,{color:"primary"},{default:a(()=>[e("a",{href:s.link,target:"_blank",style:{color:"white"}},"Visit Company Website",8,B)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))])])])}var F=c(x,[["render",N],["__scopeId","data-v-78d518aa"]]);export{F as default};