import{_ as s}from"./js/_plugin-vue_export-helper.0e38850e.js";import{c as a,x as r,f as c,b as l,o as p,E as u}from"./js/vue.runtime.esm-bundler.ab2e0e41.js";import{l as f}from"./js/links.64a86a6c.js";import{t as m}from"./js/translations.93cb7f26.js";import"./js/default-i18n.cc9dbff0.js";import"./js/isArrayLikeObject.2110cf7d.js";const d={data(){return{interval:null,display:!1,strings:{newNotifications:this.$t.__("You have new notifications!",this.$td)}}},methods:{showNotificationsPopup(){if(this.interval&&window.aioseoNotifications&&parseInt(window.aioseoNotifications.newNotifications)){this.display=!0;const o=document.querySelector("#wp-admin-bar-aioseo-main");o&&o.classList.add("new-notifications")}},hideNotificationsPopup(){this.interval=null,setTimeout(()=>{this.display=!1;const o=document.querySelector("#wp-admin-bar-aioseo-main");o&&o.classList.remove("new-notifications")},500)}},created(){this.interval=setInterval(this.showNotificationsPopup,500),this.showNotificationsPopup(),setTimeout(()=>{this.interval=null,this.display=!1},5e3)}};function _(o,i,y,N,e,t){return e.display?(p(),a("div",{key:0,onClick:i[0]||(i[0]=c((...n)=>t.hideNotificationsPopup&&t.hideNotificationsPopup(...n),["stop"])),onMouseover:i[1]||(i[1]=(...n)=>t.hideNotificationsPopup&&t.hideNotificationsPopup(...n)),class:"aioseo-menu-new-notifications"},r(e.strings.newNotifications),33)):l("",!0)}const w=s(d,[["render",_]]),h=document.querySelector("#aioseo-menu-new-notifications");if(h){const o=u({...w,name:"Standalone/Notifications"});f(o),o.config.globalProperties.$t=m,o.config.globalProperties.$td="all-in-one-seo-pack",o.config.globalProperties.$tdPro="aioseo-pro",o.mount("#aioseo-menu-new-notifications")}
