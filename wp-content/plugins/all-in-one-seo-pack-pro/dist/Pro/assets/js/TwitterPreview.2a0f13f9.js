import{b as h,u as f}from"./links.64a86a6c.js";import{t as v}from"./html.3b24bee7.js";import{B as S}from"./Img.ef9f8247.js";import{C as w}from"./Caret.08be6d0c.js";import{S as y}from"./Book.6c2caac6.js";import{S as C}from"./Profile.208697db.js";import{r as a,o as i,c as b,a as e,g as c,x as r,n as I,y as k,d,b as l,I as B,M as x,e as N,B as A,K as L,L as P}from"./vue.runtime.esm-bundler.ab2e0e41.js";import{_ as T}from"./_plugin-vue_export-helper.0e38850e.js";const V={setup(){return{optionsStore:h(),rootStore:f()}},components:{BaseImg:S,CoreLoader:w,SvgBook:y,SvgDannieProfile:C},props:{card:String,description:{type:String,required:!0},image:String,loading:{type:Boolean,default:!1},title:{type:String,required:!0}},data(){return{canShowImage:!1}},computed:{appName(){return"All in One SEO"},getCard(){return this.card==="default"?this.optionsStore.options.social.twitter.general.defaultCardType:this.card}},methods:{maybeCanShow(o){this.canShowImage=o},truncate:v}},D=o=>(L("data-v-4b78a9ed"),o=o(),P(),o),O={class:"aioseo-twitter-preview"},q={class:"twitter-post"},z={class:"twitter-header"},E={class:"profile-photo"},R={class:"poster"},K={class:"poster-name"},M=D(()=>e("div",{class:"poster-username"}," @aioseopack ",-1)),U={class:"twitter-content"},j={class:"twitter-site-description"},F={class:"site-domain"},G={class:"site-title"},H={class:"site-description"};function J(o,Q,t,_,n,s){const m=a("svg-dannie-profile"),u=a("svg-book"),p=a("core-loader"),g=a("base-img");return i(),b("div",O,[e("div",q,[e("div",z,[e("div",E,[c(m)]),e("div",R,[e("div",K,r(s.appName),1),M])]),e("div",{class:I(["twitter-container",t.image?s.getCard:"summary"])},[e("div",U,[e("div",{class:"twitter-image-preview",style:k({backgroundImage:s.getCard==="summary"&&n.canShowImage?`url('${t.image}')`:""})},[!t.loading&&(!t.image||!n.canShowImage)?(i(),d(u,{key:0})):l("",!0),t.loading?(i(),d(p,{key:1})):l("",!0),B(c(g,{src:t.image,debounce:!1,onCanShow:s.maybeCanShow},null,8,["src","onCanShow"]),[[x,s.getCard==="summary_large_image"&&n.canShowImage]])],4),e("div",j,[e("div",F,[N(o.$slots,"site-url",{},()=>[A(r(_.rootStore.aioseo.urls.domain),1)],!0)]),e("div",G,r(s.truncate(t.title,70)),1),e("div",H,r(s.truncate(t.description,105)),1)])])],2)])])}const se=T(V,[["render",J],["__scopeId","data-v-4b78a9ed"]]);export{se as C};