import{_,c as f,o as a,d as o,ap as g,aT as y,e,am as u,an as m,f as r,Q as h,aY as b,k as S,t as w,p as k,h as P}from"./index.3f28bbbf.js";import{L as x}from"./Landing.ff2a4c82.js";const T={name:"OurPolicy",components:{Landing:x},data(){return{items:["Understanding the requirements of our customers and provide Quality servicesto exceed customersatisfaction.","Provide our customers with the best value for ourservices.","Strive for Continual Improvement by setting quality objectives and targets.","Lead the employeesto work as a team and create an environment to obtain better businessresults.","Comply with applicable statutory and regulatory requirementsrelated to products and services."],images:["https://i.imgur.com/QaBSisN.png","https://i.imgur.com/kPBSozI.png","https://i.imgur.com/tnT9bYh.png","https://i.imgur.com/ZiB2q9H.png","https://i.imgur.com/rzytLjp.png","https://i.imgur.com/1bGVzvz.png"]}},methods:{carouselNavigate(t){document.querySelector(`.our-policy .carousel .list .slick-${t}`).click()}},async mounted(){$(".our-policy .carousel .list").slick({arrows:!0,dots:!0,slidesToShow:3,centerPadding:"60px",autoplay:!0,autoplaySpeed:3e3,infinite:!0,responsive:[{breakpoint:1199,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),await new Promise(t=>setTimeout(t,1e3)),AOS.init()},props:["show"]},c=t=>(k("data-v-59cbe3fa"),t=t(),P(),t),I={class:"our-policy"},C={class:"sec-1"},O={class:"container row"},N=b('<div class="hse col-12 col-md-6" data-v-59cbe3fa><div class="title flex-center mont-font" data-v-59cbe3fa>HSE Policy</div><div class="text" data-v-59cbe3fa><p class="poppins" data-aos="fade-right" data-aos-duration="800" data-aos-easing="ease-in-out" data-aos-once="true" data-v-59cbe3fa> TGT is an ISO 9001\u22122008, ISO 14001:2015, ISO 45001:2018, OHSAS 18001:2007 CERTIFIED COMPANY. The purpose of this Project Health, Safety and Environmental Plan (HSE Plan) is to ensure that all company andsubcontractors employees are safeguarded as far as, frompotential hazards in the performance of their duties and all practicable measures are taken to safeguard the environments. </p><p class="poppins" data-aos="fade-right" data-aos-duration="800" data-aos-easing="ease-in-out" data-aos-once="true" data-v-59cbe3fa> TGT is dedicated for improvements in safety and health standards and is also determined to maintain good environ\u2212 mental controls during all activities on the Project. </p><p class="poppins" data-aos="fade-right" data-aos-duration="800" data-aos-easing="ease-in-out" data-aos-once="true" data-v-59cbe3fa> The company requires employees, at all levels, to support and strictly implement its health, Safety and Environmental Policy to which end this plan is guidance in theaim to achieve the target of \u201CZero Accidents\u201C on this projects. </p><p class="poppins" data-aos="fade-right" data-aos-duration="800" data-aos-easing="ease-in-out" data-aos-once="true" data-v-59cbe3fa> The HSE plan is applicable to all situations where the Project Manager is responsible for the Project. The Project consists of work as listed below with supply of labour, tools, equipment and plan as necessary to execute the tasks during the performance of the contract. </p></div></div>',1),j={class:"policy col-12 col-md-6"},B=c(()=>e("div",{class:"title flex-center mont-font"},"QA & QC Policy",-1)),E=c(()=>e("p",{class:"kanit"},"We Are Commited To :",-1)),q={class:"items"},A=["data-aos-delay"],L={class:"icon"},Q={class:"text poppins"},z={class:"certificates"},H={class:"container service"},V=c(()=>e("div",{class:"title flex-center"},[e("span"),e("h4",null,"Certificates & Approvals"),e("span")],-1)),G={class:"carousel"},Y={class:"list"},D=["src"],F={class:"arrows flex-center"};function M(t,i,d,Z,l,p){const v=f("Landing");return a(),o("div",I,[d.show==!0||d.show==null?(a(),g(v,{key:0,text:"Policy"})):y("",!0),e("div",C,[e("div",O,[N,e("div",j,[B,E,e("div",q,[(a(!0),o(u,null,m(l.items,(s,n)=>(a(),o("div",{class:"item",key:n,"data-aos":"zoom-in-right","data-aos-duration":"800","data-aos-easing":"ease-in-out","data-aos-delay":`${n}00`,"data-aos-once":"true"},[e("div",L,[r(S,{name:"done",color:"secondary"})]),e("div",Q,w(s),1)],8,A))),128))])])])]),e("div",z,[e("div",H,[V,e("div",G,[e("div",Y,[(a(!0),o(u,null,m(l.images,(s,n)=>(a(),o("div",{class:"img flex-center",key:n},[e("img",{src:s,alt:""},null,8,D)]))),128))]),e("div",F,[r(h,{icon:"navigate_before",round:"",color:"secondary",class:"prev-arrow",onClick:i[0]||(i[0]=s=>p.carouselNavigate("prev"))}),r(h,{icon:"navigate_next",round:"",color:"secondary",class:"next-arrow",onClick:i[1]||(i[1]=s=>p.carouselNavigate("next"))})])])])])])}var W=_(T,[["render",M],["__scopeId","data-v-59cbe3fa"]]);export{W as default};
