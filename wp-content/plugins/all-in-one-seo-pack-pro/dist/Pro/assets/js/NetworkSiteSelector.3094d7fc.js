import{u as a}from"./links.64a86a6c.js";import{r as l,o as u,c,g as p}from"./vue.runtime.esm-bundler.ab2e0e41.js";import{_ as m}from"./_plugin-vue_export-helper.0e38850e.js";import"./index.61edcc6f.js";import"./Caret.08be6d0c.js";/* empty css                                            *//* empty css                                              */import"./default-i18n.cc9dbff0.js";import"./constants.c7984802.js";import{N as _}from"./Network.e1debaf4.js";/* empty css                                              */const d={setup(){return{rootStore:a()}},emits:["selected-site"],mixins:[_],props:{showNetwork:Boolean},data(){return{site:null,network:{value:"network",label:this.$t.__("Network Admin (no site)",this.$td)}}},watch:{site(e){let t=this.rootStore.aioseo.data.network.sites.sites.find(o=>this.getUniqueSiteId(o)===e.value);e.value==="network"&&(t={blog_id:"network"}),this.$emit("selected-site",t)}},computed:{sites(){const e=this.getSites.filter(t=>!t.parentDomain).map(t=>({value:this.getUniqueSiteId(t),label:`${t.domain}${t.path}`}));return this.showNetwork?[this.network].concat(e):e}},created(){this.showNetwork&&(this.site=this.network)}},f={class:"aioseo-network-site-selector"};function h(e,t,o,w,s,r){const n=l("base-select");return u(),c("div",f,[p(n,{size:"medium",modelValue:s.site,"onUpdate:modelValue":t[0]||(t[0]=i=>s.site=i),options:r.sites},null,8,["modelValue","options"])])}const B=m(d,[["render",h]]);export{B as C};
