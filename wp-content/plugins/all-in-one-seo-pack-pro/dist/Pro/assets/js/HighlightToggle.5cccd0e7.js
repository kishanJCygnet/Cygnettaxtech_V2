import{B as r}from"./Checkbox.cfe07718.js";import{B as s}from"./Radio.f010d96d.js";import{o as l,c as i,d as u,w as c,e as g,A as m,n as d}from"./vue.runtime.esm-bundler.ab2e0e41.js";import{_}from"./_plugin-vue_export-helper.0e38850e.js";const f={components:{BaseCheckbox:r,BaseRadio:s},props:{type:{type:String,required:!0},name:{type:String,required:!0},modelValue:{type:[Boolean,String,Event],required:!0},active:Boolean,size:String,round:Boolean},methods:{toggleCheckbox(){this.$refs.toggle.labelToggle()}}};function p(n,t,e,y,B,a){return l(),i("div",{class:d(["aioseo-highlight-toggle",[{active:e.active},{[e.size]:e.size}]]),onClick:t[1]||(t[1]=(...o)=>a.toggleCheckbox&&a.toggleCheckbox(...o))},[(l(),u(m(`base-${e.type}`),{ref:"toggle",name:e.name,modelValue:e.modelValue,size:e.size,round:e.round,"onUpdate:modelValue":t[0]||(t[0]=o=>n.$emit("update:modelValue",o))},{default:c(()=>[g(n.$slots,"default")]),_:3},8,["name","modelValue","size","round"]))],2)}const C=_(f,[["render",p]]);export{C as B};
