import{d as h,m as y}from"./vuex.esm-bundler.97e30e47.js";import{C as S}from"./Tooltip.754dc940.js";import{e as k,S as b}from"./Caret.09e548f3.js";import{S as p}from"./index.d59f905b.js";import{T as B}from"./Slide.dcb3da9d.js";import{_ as T,c as l,n as c,f as r,x as a,g as w,h as d,w as u,a as n,r as i,o,t as A,d as q}from"./_plugin-vue_export-helper.49ea0e68.js";const N={emits:["close-card"],components:{CoreTooltip:S,SvgCaret:k,SvgCircleQuestionMark:p,SvgClose:b,TransitionSlide:B},props:{slug:{type:String,required:!0},headerText:String,toggles:{type:Boolean,default(){return!0}},hideHeader:Boolean,noSlide:Boolean,closes:Boolean,saveToggleStatus:{type:Boolean,default(){return!0}},disabled:Boolean,cardClass:{type:Object,default(){return{}}}},watch:{toggles(e){const s=this.slug;e&&!this.settings.toggledCards[s]&&this.toggleCard({slug:s,shouldSave:!0})}},computed:{...h(["settings"])},methods:{...y(["toggleCard"])}},V={class:"text"},H={class:"header-icon"},L={class:"header-extra"},M={key:1,class:"content"},j={key:0,class:"content"},z={key:1,class:"content"};function D(e,s,t,E,G,O){const g=i("svg-circle-question-mark"),m=i("core-tooltip"),_=i("svg-caret"),f=i("svg-close"),v=i("transition-slide");return o(),l("div",{class:c(["aioseo-card",{disabled:t.disabled,...t.cardClass}])},[t.hideHeader?n("",!0):(o(),l("div",{key:0,class:c(["header",[{toggles:t.toggles}]]),onClick:s[2]||(s[2]=C=>e.toggleCard({slug:t.slug,shouldSave:t.saveToggleStatus}))},[r("div",V,[r("div",H,[a(e.$slots,"header-icon")]),r("div",{class:"header-title",onClick:s[0]||(s[0]=w(()=>{},["stop"]))},[a(e.$slots,"header",{},()=>[r("span",null,A(t.headerText),1)])]),e.$slots.tooltip?(o(),d(m,{key:0},{tooltip:u(()=>[a(e.$slots,"tooltip")]),default:u(()=>[q(g)]),_:3})):n("",!0),r("div",L,[a(e.$slots,"header-extra")])]),!t.closes&&t.toggles&&e.settings.toggledCards&&!t.noSlide&&!t.disabled?(o(),d(_,{key:0,class:c({rotated:!e.settings.toggledCards[t.slug]})},null,8,["class"])):n("",!0),t.closes?(o(),d(f,{key:1,onClick:s[1]||(s[1]=C=>e.$emit("close-card",!0))})):n("",!0)],2)),e.$slots.disabled&&t.disabled?(o(),l("div",M,[a(e.$slots,"disabled")])):n("",!0),(e.settings.toggledCards||t.noSlide)&&!t.disabled?(o(),d(v,{key:2,active:e.settings.toggledCards[t.slug]&&t.toggles||t.noSlide},{default:u(()=>[e.$slots["before-tabs"]?(o(),l("div",j,[a(e.$slots,"before-tabs")])):n("",!0),a(e.$slots,"tabs"),e.$slots.default?(o(),l("div",z,[a(e.$slots,"default")])):n("",!0)]),_:3},8,["active"])):n("",!0)],2)}const J=T(N,[["render",D]]);export{J as C};