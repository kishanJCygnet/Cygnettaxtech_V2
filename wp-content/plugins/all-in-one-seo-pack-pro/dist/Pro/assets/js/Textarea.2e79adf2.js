import{I as a,N as o,o as l,c as h,y as u}from"./vue.runtime.esm-bundler.ab2e0e41.js";import{_ as m}from"./_plugin-vue_export-helper.0e38850e.js";const p={props:{modelValue:{type:[String,Number],default:""},autosize:{type:Boolean,default:!0},minHeight:{type:[Number],default:null},maxHeight:{type:[Number],default:null},important:{type:[Boolean,Array],default:!1}},data(){return{val:null,maxHeightScroll:!1,height:"auto"}},computed:{computedStyles(){return this.autosize?{resize:this.isResizeImportant?"none !important":"none",height:this.height,overflow:this.maxHeightScroll?"auto":this.isOverflowImportant?"hidden !important":"hidden"}:{height:this.minHeight?this.minHeight+"px":""}},isResizeImportant(){const t=this.important;return t===!0||Array.isArray(t)&&t.includes("resize")},isOverflowImportant(){const t=this.important;return t===!0||Array.isArray(t)&&t.includes("overflow")},isHeightImportant(){const t=this.important;return t===!0||Array.isArray(t)&&t.includes("height")}},watch:{value(t){this.val=t},val(t){this.$nextTick(this.resize),this.$emit("update:modelValue",t)},minHeight(){this.$nextTick(this.resize)},maxHeight(){this.$nextTick(this.resize)},autosize(t){t&&this.resize()}},methods:{resize(){const t=this.isHeightImportant?"important":"";return this.height=`auto${t?" !important":""}`,this.$nextTick(()=>{let e=this.$el.scrollHeight+1;this.minHeight&&(e=e<this.minHeight?this.minHeight:e),this.maxHeight&&(e>this.maxHeight?(e=this.maxHeight,this.maxHeightScroll=!0):this.maxHeightScroll=!1);const s=e+"px";this.height=`${s}${t?" !important":""}`}),this}},created(){this.val=this.modelValue},mounted(){this.resize()}};function c(t,e,s,g,n,i){return a((l(),h("textarea",{class:"aioseo-textarea-autosize",style:u(i.computedStyles),"onUpdate:modelValue":e[0]||(e[0]=r=>n.val=r),onFocus:e[1]||(e[1]=(...r)=>i.resize&&i.resize(...r))},null,36)),[[o,n.val]])}const x=m(p,[["render",c]]);export{x as B};
