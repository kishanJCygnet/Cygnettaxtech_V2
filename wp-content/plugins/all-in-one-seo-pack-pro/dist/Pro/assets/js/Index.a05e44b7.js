import{_ as n,o as c,c as a,a as o,B as i}from"./_plugin-vue_export-helper.a2c961b3.js";const l={props:{scoreColor:String,score:{type:Number,required:!0},strokeWidth:{type:Number,default(){return 2}}},computed:{getClass(){let s="",e="";switch(!0){case 33>=this.score:s="fast",e="stroke-red";break;case 66>=this.score:s="medium",e="stroke-orange";break;default:s="slow",e="stroke-green"}return this.scoreColor!==void 0&&(e=`stroke-${this.scoreColor}`),`${s} ${e}`}}},u={class:"aioseo-seo-site-score-svg",viewBox:"0 0 34 34",xmlns:"http://www.w3.org/2000/svg"},_=["stroke-width","r"],d=["stroke-width","stroke-dasharray","r"];function h(s,e,t,k,f,r){return c(),a("svg",u,[o("circle",{class:"aioseo-seo-site-score__background","stroke-width":t.strokeWidth,fill:"none",cx:"17",cy:"17",r:17-t.strokeWidth/2},null,8,_),o("circle",{class:i(["aioseo-seo-site-score__circle",r.getClass]),"stroke-width":t.strokeWidth,"stroke-dasharray":`${t.score},100`,"stroke-linecap":"round",fill:"none",cx:"17",cy:"17",r:17-t.strokeWidth/2},null,10,d)])}const g=n(l,[["render",h]]);export{g as S};
