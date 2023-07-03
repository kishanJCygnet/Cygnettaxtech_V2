import{C as c}from"./Index.af67901e.js";import{r as u,o as p,d as _,w as r,B as i,x as a}from"./vue.runtime.esm-bundler.ab2e0e41.js";import{_ as d}from"./_plugin-vue_export-helper.0e38850e.js";const b={computed:{objectTypeOptions(){return[{groupLabel:this.$t.__("Default",this.$td),options:[{label:this.$t.__("Default Object Type (Set in Social Networks)",this.$td),value:"default"}]}].concat(this.$constants.OG_TYPE_OPTIONS)}},methods:{getObjectTypeLabelByOption(t){let e="";return this.objectTypeOptions.forEach(s=>{const n=s.options.find(o=>o.value===t);n&&(e=(n==null?void 0:n.label)||"")}),e}}},v={computed:{twitterCardOptions(){return[{label:this.$t.__("Default (Set under Social Networks)",this.$td),value:"default"},{label:this.$t.__("Summary",this.$td),value:"summary"},{label:this.$t.__("Summary with Large Image",this.$td),value:"summary_large_image"}]}},methods:{getTwitterCardLabelByOption(t){var e;return((e=this.twitterCardOptions.find(s=>s.value===t))==null?void 0:e.label)||""}}},f={components:{Cta:c},props:{parentComponentContext:String},data(){return{strings:{ctaHeader:this.$t.sprintf(this.$t.__("SEO Revisions is only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro"),ctaDescription:this.$t.__("Our powerful revisions feature provides a valuable record of SEO updates, allowing you to monitor the effectiveness of your SEO efforts and make informed decisions.",this.$td),ctaFeatures:[this.$t.__("Improved SEO strategy",this.$td),this.$t.__("Easy to manage revisions",this.$td),this.$t.__("Greater transparency and accountability",this.$td),this.$t.__("Historical record of optimization efforts",this.$td)],ctaButtonText:this.$t.sprintf(this.$t.__("Upgrade to %1$s and Unlock SEO Revisions",this.$td),"Pro")}}}};function m(t,e,s,n,o,h){const l=u("cta");return p(),_(l,{"cta-link":t.$links.getPricingUrl("seo-revisions","seo-revisions",s.parentComponentContext),"button-text":o.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("seo-revisions",s.parentComponentContext,"home"),"feature-list":o.strings.ctaFeatures},{"header-text":r(()=>[i(a(o.strings.ctaHeader),1)]),description:r(()=>[i(a(o.strings.ctaDescription),1)]),_:1},8,["cta-link","button-text","learn-more-link","feature-list"])}const O=d(f,[["render",m]]);export{O as S,b as o,v as t};
