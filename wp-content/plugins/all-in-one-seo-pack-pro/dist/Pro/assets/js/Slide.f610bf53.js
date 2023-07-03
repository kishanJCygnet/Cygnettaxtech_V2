import{o as a,d as o,w as r,e as l,b as h,y as c,A as u}from"./vue.runtime.esm-bundler.ab2e0e41.js";import{_ as d}from"./_plugin-vue_export-helper.0e38850e.js";const p={emits:["open-start","open-end","close-start","close-end"],props:{active:Boolean,duration:{type:Number,default:500},tag:{type:String,default:"div"},useHidden:{type:Boolean,default:!0}},data(){return{style:{},initial:!1,hidden:!1}},watch:{active(){this.$nextTick(()=>{this.layout()})}},mounted(){this.layout(),this.initial=!0},created(){this.hidden=!this.active},computed:{el(){return this.$refs.container&&this.$refs.container.$el?this.$refs.container.$el:this.$refs.container||null}},methods:{layout(){this.active?(this.hidden=!1,this.$emit("open-start"),this.initial&&this.setHeight("0px",()=>this.el.scrollHeight+"px")):(this.$emit("close-start"),this.setHeight(this.el.scrollHeight+"px",()=>"0px"))},asap(t){this.initial?this.$nextTick(t):t()},setHeight(t,i){this.style={height:t},this.asap(()=>{this.__=this.el.scrollHeight,this.style={height:i(),overflow:"hidden","transition-property":"all","transition-duration":this.duration+"ms"}})},onTransitionEnd(t){t.target===this.el&&(this.active?(this.style={},this.$emit("open-end")):(this.style={height:"0",overflow:"hidden"},this.hidden=!0,this.$emit("close-end")))}}};function f(t,i,e,y,n,s){return a(),o(u(e.tag),{style:c(n.style),ref:"container",onTransitionend:s.onTransitionEnd,"aria-hidden":!e.active||null,"aria-expanded":e.active||null},{default:r(()=>[n.hidden?h("",!0):l(t.$slots,"default",{key:0})]),_:3},40,["style","onTransitionend","aria-hidden","aria-expanded"])}const g=d(p,[["render",f]]);export{g as T};
