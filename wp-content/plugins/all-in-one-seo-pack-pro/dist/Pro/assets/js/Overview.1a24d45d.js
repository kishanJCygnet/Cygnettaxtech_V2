import{a as v,m as g}from"./vuex.esm-bundler.2b955043.js";import{C as T}from"./index.24cd8e71.js";import{C as f}from"./DonutChartWithLegend.60631020.js";import{_ as b,q as u,o as i,c as n,t as c,b as l,a as h,j as d,G as w,H as P,F as k,E as $,z as A,B as C}from"./_plugin-vue_export-helper.a2c961b3.js";const D={components:{CoreAlert:T,CoreDonutChartWithLegend:f},props:{isWpDashboard:{type:Boolean,default(){return!1}},toHide:{type:Array,default(){return[]}},showDescription:{type:Boolean,default(){return!0}}},data(){return{strings:{description:this.$t.__("Below are the TruSEO scores of your published posts. Take some time to improve your TruSEO score to help increase your rankings.",this.$td),choosePostType:this.$t.__("Choose a Post Type",this.$td),upgradeToPro:this.$t.sprintf(this.$t.__("Get additional keyphrases and many more modules! %1$s",this.$td),this.$links.getUpsellLink("dashboard-overview",this.$t.__("Upgrade to Pro Today!",this.$td),"liteUpgrade",!0))},postTypeInitial:!0,postType:{},parts:[{slug:"needsImprovement",name:this.$t.__("Needs Improvement",this.$td),color:"#DF2A4A"},{slug:"okay",name:this.$t.__("Okay",this.$td),color:"#F18200"},{slug:"good",name:this.$t.__("Good",this.$td),color:"#00AA63"},{slug:"withoutFocusKeyphrase",name:this.$t.__("Without a Focus Keyphrase",this.$td),color:"#E8E8EB"}]}},watch:{postType(t){if(this.postTypeInitial){this.postTypeInitial=!1;return}this.toggleRadio({slug:"overviewPostType",value:t.value})}},methods:{...v(["toggleRadio"])},computed:{...g(["settings"]),postTypes(){const t=[];return this.$aioseo.postData.postTypes.forEach(e=>{this.$aioseo.seoOverview[e.name]&&t.push({value:e.name,label:e.label})}),t},totalPosts(){return this.$aioseo.seoOverview[this.postType.value].total},totalPostsLabel(){return this.$t.sprintf(this.$t.__("Total %1$s",this.$td),this.postType.label)},sortedParts(){const t=this.parts;return t.forEach((e,s)=>{t[s].count=this.$aioseo.seoOverview[this.postType.value][e.slug],t[s].ratio=s===0?100:e.count/this.totalPosts*100,t[s].link=`${this.$aioseo.urls.editScreen}?post_status=publish&post_type=${this.postType.value}&aioseo-filter=${e.slug}`}),t.filter(e=>e.count!==0),t.forEach((e,s)=>(s===0||t.forEach((p,o)=>(s<o&&(e.ratio=e.ratio+p.ratio),e)),e)),t}},mounted(){this.$nextTick(()=>{var s;const t=(s=this.settings.toggledRadio)==null?void 0:s.overviewPostType,e=this.postTypes.findIndex(p=>t===p.value);this.postType=this.postTypes[e]||this.postTypes[0]})}},E={key:0,class:"aioseo-overview-description"},B={class:"aioseo-overview-selector"},L=["value"];function O(t,e,s,p,o,a){const y=u("base-select"),_=u("core-donut-chart-with-legend"),m=u("core-alert");return o.postType.value?(i(),n("div",{key:0,class:C(["aioseo-overview",s.isWpDashboard?"aioseo-overview--wp-styles":""])},[s.toHide.includes("description")?l("",!0):(i(),n("p",E,c(o.strings.description),1)),h("div",B,[h("strong",null,c(o.strings.choosePostType),1),s.isWpDashboard?l("",!0):(i(),d(y,{key:0,size:"medium",placeholder:o.strings.choosePostType,options:a.postTypes,modelValue:o.postType,"onUpdate:modelValue":e[0]||(e[0]=r=>o.postType=r)},null,8,["placeholder","options","modelValue"])),s.isWpDashboard?w((i(),n("select",{key:1,"onUpdate:modelValue":e[1]||(e[1]=r=>o.postType=r)},[(i(!0),n(k,null,$(a.postTypes,r=>(i(),n("option",{key:r.value,value:r},c(r.label),9,L))),128))],512)),[[P,o.postType]]):l("",!0)]),A(_,{parts:a.sortedParts,total:a.totalPosts,label:a.totalPostsLabel,animatedNumber:!s.isWpDashboard},null,8,["parts","total","label","animatedNumber"]),!s.toHide.includes("upgradeAlert")&&!t.$isPro?(i(),d(m,{key:1,type:"yellow",innerHTML:o.strings.upgradeToPro},null,8,["innerHTML"])):l("",!0)],2)):l("",!0)}const H=b(D,[["render",O]]);export{H as C};
