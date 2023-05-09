import{d}from"./helpers.871dba46.js";import{a as x,m as C}from"./vuex.esm-bundler.97e30e47.js";import{G as L,a as q}from"./Row.87dd14fc.js";import{_ as R,r as m,o as r,h as n,w as i,f as s,t as c,a as l,c as _,i as f,n as g,F as w,g as M,e as V,d as A}from"./_plugin-vue_export-helper.49ea0e68.js";const B={emits:["update:separator"],components:{GridColumn:L,GridRow:q},props:{optionsSeparator:{type:String,required:!0},showMoreSlug:{type:String,required:!0}},data(){return{strings:{custom:this.$t.__("Custom separator:",this.$td),showMore:this.$t.__("Show More",this.$td),showLess:this.$t.__("Show Less",this.$td)},showMoreSeparators:!1,showMoreInitial:!0,customSeparator:null,separators:["&ndash;","&raquo;","&rsaquo;","&#x2023;","&rarr;","&bull;","&#47;","&#124;"],moreSeparators:["&#45;","&mdash;","&laquo;","&larr;","&gt;","&ge;","&#92;","&#43;","&#9658;"]}},watch:{showMoreSeparators(e){if(this.showMoreInitial){this.showMoreInitial=!1;return}this.toggleRadio({slug:this.showMoreSlug,value:e})},customSeparator(e){e!==null&&(this.$emit("update:separator",d(e)),this.separators.concat(this.moreSeparators).concat(this.decodedSeparators).concat(this.decodedMoreSeparators).includes(e)&&(this.customSeparator=null))}},computed:{...x(["options","settings"]),hiddenSeparator(){return this.optionsSeparator===this.customSeparator||this.decodedMoreSeparators.includes(this.optionsSeparator)?this.optionsSeparator:null},decodedSeparators(){return this.separators.map(e=>d(e))},decodedMoreSeparators(){return this.moreSeparators.map(e=>d(e))},decodedCustomSeparator(){return d(this.hiddenSeparator)}},methods:{...C(["toggleRadio"]),setSeparator(e){this.customSeparator=null,this.$emit("update:separator",e)}},mounted(){this.showMoreSeparators=this.settings.toggledRadio[this.showMoreSlug],this.customSeparator=this.decodedSeparators.concat(this.decodedMoreSeparators).includes(this.optionsSeparator)?null:this.optionsSeparator}},N={class:"active separator"},b=["onClick"],G=["onClick"],I={class:"show-more"},z={class:"custom-separator"},E={class:"show-more"};function F(e,u,S,T,t,a){const p=m("grid-column"),v=m("base-input"),y=m("grid-row");return r(),n(y,{class:"aioseo-separators"},{default:i(()=>[!t.showMoreSeparators&&a.hiddenSeparator?(r(),n(p,{key:0,xs:"2",sm:"1"},{default:i(()=>[s("div",N,c(a.decodedCustomSeparator),1)]),_:1})):l("",!0),(r(!0),_(w,null,f(a.decodedSeparators,(o,h)=>(r(),n(p,{xs:"2",sm:"1",key:h},{default:i(()=>[s("div",{onClick:k=>a.setSeparator(o),class:g(["separator",{active:S.optionsSeparator===o}])},c(o),11,b)]),_:2},1024))),128)),t.showMoreSeparators?(r(!0),_(w,{key:1},f(a.decodedMoreSeparators,(o,h)=>(r(),n(p,{xs:"2",sm:"1",key:`m_${h}`},{default:i(()=>[s("div",{onClick:k=>a.setSeparator(o),class:g(["separator",{active:S.optionsSeparator===o}])},c(o),11,G)]),_:2},1024))),128)):l("",!0),t.showMoreSeparators?l("",!0):(r(),n(p,{key:2,xs:a.hiddenSeparator?"3":"4"},{default:i(()=>[s("div",I,[s("a",{href:"#",onClick:u[0]||(u[0]=M(o=>t.showMoreSeparators=!0,["prevent"]))},c(t.strings.showMore)+"… ",1)])]),_:1},8,["xs"])),t.showMoreSeparators?(r(),n(p,{key:3,class:"custom-separator-col"},{default:i(()=>[s("div",z,[V(c(t.strings.custom)+" ",1),A(v,{spellcheck:!1,size:"medium",modelValue:t.customSeparator,"onUpdate:modelValue":u[1]||(u[1]=o=>t.customSeparator=o)},null,8,["modelValue"])])]),_:1})):l("",!0),t.showMoreSeparators?(r(),n(p,{key:4,xs:"2"},{default:i(()=>[s("div",E,[s("a",{href:"#",onClick:u[2]||(u[2]=M(o=>t.showMoreSeparators=!1,["prevent"]))},c(t.strings.showLess)+"… ",1)])]),_:1})):l("",!0)]),_:1})}const j=R(B,[["render",F]]);export{j as C};