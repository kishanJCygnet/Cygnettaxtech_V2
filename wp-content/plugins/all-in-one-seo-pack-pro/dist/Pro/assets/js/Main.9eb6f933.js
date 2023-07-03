import{o as a,c as l,a as n,r as h,B as v,x as _,f,F as x,C as P,I as C,M as U,g as p,y as j,e as F,b as u,N as K,H,n as z,K as k,L as E,d as $,w as b,Q as W,u as y,D as q}from"./vue.runtime.esm-bundler.ab2e0e41.js";import{j as S,c as G,K as D,d as X}from"./links.64a86a6c.js";import{F as B}from"./isArrayLikeObject.2110cf7d.js";import{g as Q}from"./params.597cd0f5.js";import{_ as g}from"./_plugin-vue_export-helper.0e38850e.js";import{C as M}from"./index.61edcc6f.js";import{C as L}from"./Caret.08be6d0c.js";import{U as O,R as Y}from"./UserAvatar.30f25fca.js";import{t as Z}from"./html.3b24bee7.js";import{a as I}from"./strings.06308d73.js";/* empty css                                            *//* empty css                                              */import"./default-i18n.cc9dbff0.js";import"./constants.c7984802.js";import{I as J}from"./Image.b75398ff.js";import{o as ee,t as te,S as se}from"./Upsell.c386c0c5.js";/* empty css                                              */import{C as ie}from"./Blur.5051545a.js";import"./Profile.208697db.js";import"./isString.b272242d.js";import"./postContent.3bf9d0ba.js";import"./cleanForSlug.1336d2fa.js";import"./toString.6606707f.js";import"./get.fca157c1.js";import"./_stringToArray.4de3b1f3.js";import"./deburr.8932d979.js";import"./Index.af67901e.js";import"./Row.53f210bf.js";const oe={},ne={viewBox:"0 0 24 25",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-slider-handle",fill:"none"},re=n("ellipse",{cx:"12.157",cy:"12.5",rx:"11.657",ry:"12",fill:"#B4B5B7"},null,-1),ae=n("circle",{cx:"12.157",cy:"12.157",r:"10.971",fill:"#F4F6F6"},null,-1),de=n("path",{d:"m13.529 15.586v-7.2l4.68 3.6-4.68 3.6z",fill:"#33353A"},null,-1),le=n("path",{d:"m11.009 8.3858v7.2l-4.68-3.6 4.68-3.6z",fill:"#33353A"},null,-1),ce=[re,ae,de,le];function _e(e,t){return a(),l("svg",ne,ce)}const V=g(oe,[["render",_e]]);const me={setup(){return{seoRevisionsStore:S()}},components:{SvgSliderHandle:V},computed:{activeSliderHandleNode(){return this.activeSliderHandle==="from"?this.$refs.sliderHandleFrom:this.$refs.sliderHandleTo},btnHandleDisabled(){return this.$parent.isFetchingDiff},btnNextDisabled(){return this.$parent.seoRevisionsStore.items[0].id===this.itemTo.id||this.$parent.isFetchingDiff},btnPreviousDisabled(){return this.$parent.seoRevisionsStore.items[this.$parent.seoRevisionsStore.items.length-1].id===this.itemTo.id||this.$parent.isFetchingDiff},checkboxCompareModeDisabled(){return this.$parent.seoRevisionsStore.items[this.$parent.seoRevisionsStore.items.length-1].id===this.itemTo.id||this.$parent.isFetchingDiff},sliderMaxWidth(){const e=Math.min(1e3,this.$parent.seoRevisionsStore.items.length);let t=100;return 1<e&&(t=Math.min(1920,e*49)),`${t}px`}},methods:{abstractFetchDiff(e,t){this.$parent.isFetchingDiff=!0,this.seoRevisionsStore.fetchDiff({fromId:(e==null?void 0:e.id)||0,toId:t.id}).finally(()=>{this.$parent.isFetchingDiff=!1}),this.setHandlePositionByItem(),this.replaceHistoryState()},getMarks(){const e=[];for(const t of this.$refs.marks.querySelectorAll("div"))e.push({left:t.offsetLeft,id:parseInt(t.dataset.id)});return e},onClickBtnNext(){const e=this.$parent.getNextItemById(this.itemTo.id);if(!e)return!1;this.$parent.itemToId=e.id},onClickBtnPrevious(){const e=this.$parent.getPreviousItemById(this.itemTo.id);if(!e)return!1;this.$parent.itemToId=e.id},onClickMarks(e){if(this.$parent.isFetchingDiff)return!1;this.setItemIdByHandlePosition(this.parseHandlePosition(e.offsetX))},onInputCompareMode(){this.showSliderHandleFrom=!this.showSliderHandleFrom,this.showSliderHandleFrom||(this.activeSliderHandle="to")},onMousedownSliderHandle(){this.isSliderHandleActive=!0,document.addEventListener("mousemove",this.onMousemoveSlider)},onMousemoveSlider(e){const t=this.$refs.slider,i=this.$refs.slider.getBoundingClientRect();let r=Math.max(0,e.clientX-i.left);r=this.parseHandlePosition(r>t.offsetWidth?t.offsetWidth:r),this.activeSliderHandleNode.style.left=`${r}px`},parseHandlePosition(e){if(this.showSliderHandleFrom){const t=this.activeSliderHandleNode.offsetWidth/2;if(this.activeSliderHandle==="from"){const i=this.$refs.sliderHandleTo.offsetLeft;i-t<e&&(e=i-t)}else if(this.activeSliderHandle==="to"){const i=this.$refs.sliderHandleFrom.offsetLeft;e<i+t&&(e=i+t)}}return e},replaceHistoryState(){var e;if(window!=null&&window.history.replaceState){const t=new URL(window.location.href),i=t.searchParams;i.delete("from"),i.delete("to"),this.showSliderHandleFrom&&i.append("from",((e=this.itemFrom)==null?void 0:e.id)||0),i.append("to",this.itemTo.id),t.search=i.toString(),window.history.replaceState({},"",t.toString())}},setItemIdByHandlePosition(e){var r,o,s;const i=this.getMarks().reduce((c,d)=>Math.abs(d.left-e)<Math.abs(c.left-e)?d:c);if(this.activeSliderHandle==="from")return i.id>=this.itemTo.id&&(i.id=((r=this.$parent.getPreviousItemById(i.id))==null?void 0:r.id)||0),i.id===(((o=this.itemFrom)==null?void 0:o.id)||0)&&this.setHandlePositionByItem("from"),this.$parent.itemFromId=i.id,!1;this.showSliderHandleFrom&&i.id<=(((s=this.itemFrom)==null?void 0:s.id)||0)&&(i.id=this.$parent.getNextItemById(i.id).id),i.id===this.itemTo.id&&this.setHandlePositionByItem("to"),this.$parent.itemToId=i.id},setHandlePositionByItem(e=null){var o,s;let t=this.activeSliderHandle==="from"?((o=this.itemFrom)==null?void 0:o.id)||0:this.itemTo.id,i=this.activeSliderHandleNode;e==="from"?(t=((s=this.itemFrom)==null?void 0:s.id)||0,i=this.$refs.sliderHandleFrom):e==="to"&&(t=this.itemTo.id,i=this.$refs.sliderHandleTo);const r=this.$refs[`mark-${t}`][0];i.style.left=`${r.offsetLeft}px`}},props:{itemFrom:Object,itemTo:{type:[Object],required:!0}},watch:{itemTo(e){let t=this.itemFrom;this.showSliderHandleFrom||(t=this.$parent.getPreviousItemById(e.id)||null),t!==this.itemFrom&&(this.$parent.itemFromId=(t==null?void 0:t.id)||0),this.abstractFetchDiff(t,e)},itemFrom(e){if(!this.showSliderHandleFrom)return!1;this.$parent.itemFromId=(e==null?void 0:e.id)||0,this.abstractFetchDiff(e,this.itemTo)},showSliderHandleFrom(e){e&&this.setHandlePositionByItem("from");const t=this.$parent.getPreviousItemById(this.itemTo.id);this.$parent.itemFromId=(t==null?void 0:t.id)||0,this.abstractFetchDiff(t,this.itemTo)}},data(){return{activeSliderHandle:"to",isSliderHandleActive:!1,showSliderHandleFrom:!!Q().from,strings:{compareTwoRevisions:this.$t.__("Compare any two revisions",this.$tdPro),next:this.$t.__("Next",this.$tdPro),previous:this.$t.__("Previous",this.$tdPro)}}},mounted(){this.setHandlePositionByItem("to"),this.showSliderHandleFrom&&this.setHandlePositionByItem("from"),document.addEventListener("mouseup",()=>{if(!this.isSliderHandleActive)return!1;this.isSliderHandleActive=!1,document.removeEventListener("mousemove",this.onMousemoveSlider),this.setItemIdByHandlePosition(this.activeSliderHandleNode.offsetLeft)})}},he={class:"aioseo-seo-revisions-comparison__controls"},pe={class:"aioseo-seo-revisions-comparison__controls__compare-mode"},ue=["checked","disabled"],ve={class:"aioseo-seo-revisions-comparison__controls__previous"},fe=["disabled"],be=["aria-disabled"],ge=["data-id"],ye=["disabled"],$e=["disabled"],Se={class:"aioseo-seo-revisions-comparison__controls__next"},Ie=["disabled"];function xe(e,t,i,r,o,s){const c=h("svg-slider-handle");return a(),l("div",he,[n("div",pe,[n("input",{type:"checkbox",checked:o.showSliderHandleFrom,disabled:s.checkboxCompareModeDisabled,onInput:t[0]||(t[0]=d=>s.onInputCompareMode())},null,40,ue),v(" "+_(o.strings.compareTwoRevisions),1)]),n("div",ve,[n("button",{class:"button",type:"button",disabled:s.btnPreviousDisabled||o.showSliderHandleFrom,onClick:t[1]||(t[1]=f(d=>s.onClickBtnPrevious(),["stop","exact"]))},_(o.strings.previous),9,fe)]),n("div",{ref:"slider",class:"aioseo-seo-revisions-comparison__controls__slider",style:j({"max-width":s.sliderMaxWidth})},[n("div",{ref:"marks",class:"marks",role:"button","aria-disabled":s.btnHandleDisabled,onClick:t[2]||(t[2]=f(d=>s.onClickMarks(d),["stop","exact"]))},[(a(!0),l(x,null,P(e.$parent.seoRevisionsStore.items,d=>(a(),l("div",{"data-id":d.id,ref_for:!0,ref:`mark-${d.id}`,key:d.id},null,8,ge))),128))],8,be),C(n("button",{ref:"sliderHandleFrom",class:"aioseo-seo-revisions-comparison__controls__slider__handle from",tabindex:"0",onMousedown:t[3]||(t[3]=f(d=>{o.activeSliderHandle="from",s.onMousedownSliderHandle()},["prevent"])),disabled:s.btnHandleDisabled},[p(c)],40,ye),[[U,o.showSliderHandleFrom]]),n("button",{ref:"sliderHandleTo",class:"aioseo-seo-revisions-comparison__controls__slider__handle to",tabindex:"0",onMousedown:t[4]||(t[4]=f(d=>{o.activeSliderHandle="to",s.onMousedownSliderHandle()},["prevent"])),disabled:s.btnHandleDisabled},[p(c)],40,$e)],4),n("div",Se,[n("button",{class:"button",type:"button",disabled:s.btnNextDisabled||o.showSliderHandleFrom,onClick:t[5]||(t[5]=f(d=>s.onClickBtnNext(),["stop","exact"]))},_(o.strings.next),9,Ie)])])}const we=g(me,[["render",xe],["__scopeId","data-v-cc6402b8"]]);const Re={setup(){return{seoRevisionsStore:S()}},components:{CoreLoader:L,UtilUserAvatar:O},methods:{truncate:Z,focusInputNote(){setTimeout(()=>{this.$refs.itemWrapper.querySelector("input").focus()},50)},onBlurInputNote(){this.noteElements.input.value!==this.revision.note?this.updateNote():this.onKeyUpEscInputNote()},onKeyUpEnterInputNote(){this.noteElements.input.value!==this.revision.note&&this.updateNote()},onKeyUpEscInputNote(){this.noteElements.input.value=this.revision.note,this.setNoteElementVisibility("input",!1)},onClickBtnAddNote(){this.setNoteElementVisibility("input",!0),this.setNoteElementVisibility("btnAdd",!1),this.focusInputNote()},onClickBtnEditNote(){this.setNoteElementVisibility("input",!0),this.setNoteElementVisibility("btnEdit",!1),this.focusInputNote()},onFocusItem(){this.onMouseEnterItem()},onMouseEnterItem(){this.isNoteElementVisible("input")||(this.revision.note?this.setNoteElementVisibility("btnEdit",!0):this.setNoteElementVisibility("btnAdd",!0))},onMouseLeaveItem(){this.setNoteElementVisibility("btnAdd",!1),this.setNoteElementVisibility("btnEdit",!1)},isNoteElementVisible(e){return this.noteElements[e].visible},setNoteElementVisibility(e,t){this.noteElements[e].visible=t},updateNote(){this.isUpdating=!0,this.seoRevisionsStore.update({id:this.revision.id,payload:{note:this.noteElements.input.value}}).then(e=>{const t=this.seoRevisionsStore.items.findIndex(i=>i.id===e.body.item.id);this.seoRevisionsStore.items.splice(t,1,e.body.item),this.setNoteElementVisibility("input",!1)}).finally(()=>{this.isUpdating=!1})}},mixins:[Y],props:{revision:{type:Object,default(){return{}}},isCurrentVersion:Boolean},watch:{revision(e){this.noteElements.input.value=e.note}},data(){return{isUpdating:!1,noteElements:{input:{maxlength:this.seoRevisionsStore.noteMaxlength,visible:!1,value:this.revision.note},btnAdd:{visible:!1},btnEdit:{visible:!1}},strings:{currentRevisionBy:this.$t.__("Current Revision by",this.$tdPro),revisionBy:this.$t.__("Revision by",this.$tdPro),addNote:this.$t.__("Add Note",this.$tdPro),editNote:this.$t.__("Edit Note",this.$tdPro),typeToAddNote:this.$t.__("Type to add note",this.$tdPro)}}}},Te=e=>(k("data-v-c4ca7f9c"),e=e(),E(),e),Ne={key:0,class:"aioseo-seo-revisions-comparison__item-meta__col"},He={class:"aioseo-seo-revisions-comparison__item-meta__title"},Fe={class:"aioseo-seo-revisions-comparison__item-meta__col"},Pe={class:"aioseo-seo-revisions-comparison__item-meta__author-avatar"},ke={class:"aioseo-seo-revisions-comparison__item-meta__col"},Ee={class:"aioseo-wrapper"},Ce=["title"],De=["textContent"],Be=["textContent"],Me=Te(()=>n("span",null," ",-1)),Le=["textContent"],Oe={key:0,class:"aioseo-seo-revisions-comparison__item-meta__note"},Ve={class:"text-truncate"},Ae=["maxlength","placeholder"],Ue={class:"aioseo-seo-revisions-comparison__item-meta__date"},je={key:1,class:"aioseo-seo-revisions-comparison__item-meta__col"},Ke={key:2,class:"loader"};function ze(e,t,i,r,o,s){const c=h("util-user-avatar"),d=h("core-loader");return i.revision?(a(),l("div",{key:0,class:z(["aioseo-seo-revisions-comparison__item-meta",{"aioseo-seo-revisions-comparison__item-meta--title-empty":!e.$slots.title}]),tabindex:"0",ref:"itemWrapper",onFocus:t[7]||(t[7]=m=>s.onFocusItem()),onMouseenter:t[8]||(t[8]=m=>s.onMouseEnterItem()),onMouseleave:t[9]||(t[9]=m=>s.onMouseLeaveItem())},[e.$slots.title?(a(),l("div",Ne,[n("div",He,[F(e.$slots,"title",{},void 0,!0)])])):u("",!0),n("div",Fe,[n("div",Pe,[p(c,{src:i.revision.author.avatar.url,size:i.revision.author.avatar.size},null,8,["src","size"])])]),n("div",ke,[n("div",Ee,[n("div",{title:e.getAuthorEmailAndLogin(i.revision),class:"aioseo-seo-revisions-comparison__item-meta__author"},[i.isCurrentVersion?(a(),l("span",{key:0,textContent:_(o.strings.currentRevisionBy)},null,8,De)):(a(),l("span",{key:1,textContent:_(o.strings.revisionBy)},null,8,Be)),Me,n("span",{textContent:_(s.truncate(i.revision.author.display_name,30))},null,8,Le)],8,Ce),i.revision.note&&!s.isNoteElementVisible("input")?(a(),l("div",Oe,[n("span",Ve,_(i.revision.note),1)])):u("",!0),s.isNoteElementVisible("input")?C((a(),l("input",{key:1,type:"text",maxlength:o.noteElements.input.maxlength,placeholder:o.strings.typeToAddNote,"onUpdate:modelValue":t[0]||(t[0]=m=>o.noteElements.input.value=m),onBlur:t[1]||(t[1]=f(m=>s.onBlurInputNote(),["prevent"])),onKeyup:[t[2]||(t[2]=H(f(m=>s.onKeyUpEnterInputNote(),["prevent"]),["enter"])),t[3]||(t[3]=H(f(m=>s.onKeyUpEscInputNote(),["prevent"]),["esc"]))],onKeydown:t[4]||(t[4]=H(f(()=>{},["prevent"]),["enter"]))},null,40,Ae)),[[K,o.noteElements.input.value]]):u("",!0),s.isNoteElementVisible("btnEdit")?(a(),l("button",{key:2,class:"aioseo-seo-revisions-comparison__item-meta__btn-edit-note",onClick:t[5]||(t[5]=f(m=>s.onClickBtnEditNote(),["prevent"]))},_(o.strings.editNote),1)):u("",!0),s.isNoteElementVisible("btnAdd")?(a(),l("button",{key:3,class:"aioseo-seo-revisions-comparison__item-meta__btn-add-note",onClick:t[6]||(t[6]=f(m=>s.onClickBtnAddNote(),["prevent"]))},_(o.strings.addNote),1)):u("",!0)]),n("div",Ue,_(i.revision.date.created_formatted),1)]),e.$slots["btn-restore"]?(a(),l("div",je,[F(e.$slots,"btn-restore",{},void 0,!0)])):u("",!0),o.isUpdating?(a(),l("div",Ke,[p(d)])):u("",!0)],34)):u("",!0)}const We=g(Re,[["render",ze],["__scopeId","data-v-c4ca7f9c"]]);const qe={setup(){return{seoRevisionsStore:S(),tagsStore:G()}},components:{CoreAlert:M},computed:{hasDiff(){return 0<this.seoRevisionsStore.seoRevisionsDiff.length?0<B(this.seoRevisionsStore.seoRevisionsDiff,"diff").filter(e=>e).length:!0}},methods:{insertImageSourceLabel(e){const t=e.match(/\{optionValue\|[^}]+/g);return Object.values(t??{}).forEach(i=>{var c;const r=i.split("|")[1],o=I(r);let s=((c=this.getImageSourceOptionFiltered(o))==null?void 0:c.label)||"";s=r.indexOf("<ins>")!==-1?`<ins>${s}</ins>`:s,e=e.replace(`{optionValue|${r}}`,s)}),e},insertImagePreview(e,t=""){let i="img-preview--url",r=this.strings.imgPreviewBasedOnUrl;t.indexOf("twitter")!==-1?(i=" img-preview--twitter",r=this.strings.imgPreviewBasedOnSettings):t.indexOf("og")!==-1&&(i=" img-preview--facebook",r=this.strings.imgPreviewBasedOnSettings);const o=e.match(/\{imageUrl\|[^}]*/g);return Object.values(o??{}).forEach(s=>{const c=s.split("|")[1]||"",d=I(c),m=`<div class="img-preview ${i}"><img src="${d}" loading="lazy" alt="${r}" title="${r}" /></div>`;e=e.replace(`{imageUrl|${c}}`,c?m:"")}),e},insertObjectTypeLabel(e){const t=e.match(/\{optionValue\|[^}]+/g);return Object.values(t??{}).forEach(i=>{const r=i.split("|")[1],o=I(r),s=this.getObjectTypeLabelByOption(o);e=e.replace(`{optionValue|${r}}`,s)}),e},insertTwitterCardLabel(e){const t=e.match(/\{optionValue\|[^}]+/g);return Object.values(t??{}).forEach(i=>{const r=i.split("|")[1],o=I(r),s=this.getTwitterCardLabelByOption(o);e=e.replace(`{optionValue|${r}}`,s)}),e},buildCustomRobotsSetting(e){const t=e.match(/\{.[^}]+}/g);return Object.values(t??{}).forEach(i=>{const[r,o]=i.split("|"),s=r.replace("{",""),c=o.replace("}",""),d=this.strings[`robots${s}`];if(s.match(/maxsnippet|maxvideopreview|maximagepreview/)){e=e.replace(i,`${d}: ${c}`);return}const m=`<input style="opacity:1" type="checkbox" disabled="disabled" ${c?'checked="checked"':""} />`;e=e.replace(i,`<span>${d}:</span> ${m}`)}),e},replaceSmartTags(e){let t=e.match(/#[a-zA-Z0-9_-]{3,}/g);return t&&(t=[...new Set(t)],t.forEach(i=>{const r=this.globalSmartTags.find(o=>o.id===i.replace("#",""));r!=null&&r.name&&(e=e.replaceAll(i,`<span class="tag">${r.name}</span>`))})),e},parseFieldDiff(e,t){return e.indexOf("#")!==-1&&(e=this.replaceSmartTags(e)),(t==="og_image_type"||t==="twitter_image_type")&&(e=this.insertImageSourceLabel(e),e=this.insertImagePreview(e,t)),(t==="og_image_custom_url"||t==="twitter_image_custom_url")&&(e=this.insertImagePreview(e)),t==="og_object_type"&&(e=this.insertObjectTypeLabel(e)),t==="twitter_card"&&(e=this.insertTwitterCardLabel(e)),t==="robots_all_settings"&&(e=this.buildCustomRobotsSetting(e)),e}},mixins:[J,ee,te],props:{itemFromId:Number,itemToId:Number},data(){return{globalSmartTags:this.tagsStore.tags,strings:{imgPreviewBasedOnSettings:this.$t.__("Image preview based on your current settings",this.$tdPro),imgPreviewBasedOnUrl:this.$t.__("Image URL preview",this.$tdPro),noDifference:this.$t.__("There are no differences between these two revisions.",this.$tdPro),robotsdefault:this.$t.__("Use Default Settings",this.$tdPro),robotsnoindex:this.$t.__("No Index",this.$tdPro),robotsnofollow:this.$t.__("No Follow",this.$tdPro),robotsnoarchive:this.$t.__("No Archive",this.$tdPro),robotsnotranslate:this.$t.__("No Translate",this.$tdPro),robotsnoimageindex:this.$t.__("No Image Index",this.$tdPro),robotsnosnippet:this.$t.__("No Snippet",this.$tdPro),robotsnoodp:this.$t.__("No ODP",this.$tdPro),robotsmaxsnippet:this.$t.__("Max Snippet",this.$tdPro),robotsmaxvideopreview:this.$t.__("Max Video Preview",this.$tdPro),robotsmaximagepreview:this.$t.__("Max Image Preview",this.$tdPro)}}},mounted(){this.$parent.isFetchingDiff=!0,this.seoRevisionsStore.fetchDiff({fromId:this.itemFromId,toId:this.itemToId}).finally(()=>{this.$parent.isFetchingDiff=!1})}},Ge={class:"aioseo-seo-revisions-item-diff"},Xe=["innerHTML"],Qe=["innerHTML"];function Ye(e,t,i,r,o,s){const c=h("core-alert");return a(),l("div",Ge,[s.hasDiff?u("",!0):(a(),$(c,{key:0,type:"yellow"},{default:b(()=>[v(_(o.strings.noDifference),1)]),_:1})),(a(!0),l(x,null,P(r.seoRevisionsStore.seoRevisionsDiff,(d,m)=>(a(),l(x,null,[d.diff||!s.hasDiff?(a(),l("h3",{key:"label-"+m},_(d.label),1)):u("",!0),s.hasDiff?(a(),l("div",{innerHTML:s.parseFieldDiff(d.diff,d.key),key:"diff-"+m},null,8,Xe)):u("",!0),s.hasDiff?u("",!0):(a(),l("div",{innerHTML:s.parseFieldDiff(d.raw,d.key),key:"diff-"+m},null,8,Qe))],64))),256))])}const Ze=g(qe,[["render",Ye],["__scopeId","data-v-97512db6"]]);const Je={setup(){return{seoRevisionsStore:S()}},components:{Controls:we,CoreAlert:M,CoreLoader:L,ItemMeta:We,ItemsDiff:Ze},data(){var e,t;return{btnRestoreLoading:!1,error:this.seoRevisionsStore.error||null,isFetchingDiff:!1,itemFromId:((e=this.seoRevisionsStore.itemFrom)==null?void 0:e.id)||0,itemToId:(t=this.seoRevisionsStore.itemTo)==null?void 0:t.id,restoreFailed:!1,strings:{compareRevisionsOf:this.$t.__("Compare Revisions of",this.$tdPro),from:this.$t.__("From:",this.$tdPro),goToEditor:this.$t.__("Go to editor",this.$tdPro),pleaseReload:this.$t.__("Something went wrong. Please, reload the page and try again.",this.$tdPro),restoreRevision:this.$t.__("Restore This Revision",this.$tdPro),to:this.$t.__("To:",this.$tdPro)}}},computed:{btnRestoreDisabled(){return this.seoRevisionsStore.items[0].id===this.itemToId},itemIds(){return B(this.seoRevisionsStore.items,"id")},itemFrom(){return this.seoRevisionsStore.items.find(e=>e.id===this.itemFromId)},itemTo(){return this.seoRevisionsStore.items.find(e=>e.id===this.itemToId)}},methods:{getNextItemById(e){const t=this.itemIds.indexOf(e);return this.seoRevisionsStore.items[t-1]||null},getPreviousItemById(e){const t=this.itemIds.indexOf(e);return this.seoRevisionsStore.items[t+1]||null},initRestore(){this.btnRestoreLoading=!0,this.seoRevisionsStore.restore({id:this.itemToId}).then(()=>(window.location.href=this.itemTo.urls.edit_object+"&aioseo-tab=seoRevisions",!1)).catch(()=>{this.restoreFailed=!0,this.btnRestoreLoading=!1})}}},et={key:1,class:"aioseo-seo-revisions-comparison"},tt={class:"long-header"},st={class:"text-truncate"},it=["href"],ot=["href"],nt={class:"aioseo-seo-revisions-comparison__item-meta-wrapper"},rt={class:"aioseo-seo-revisions-comparison__diff"},at={key:0,class:"loader"};function dt(e,t,i,r,o,s){const c=h("core-alert"),d=h("controls"),m=h("item-meta"),R=h("base-button"),T=h("items-diff"),N=h("core-loader");return o.error?(a(),$(c,{key:0,type:"red"},{default:b(()=>[v(_(o.error),1)]),_:1})):(a(),l("div",et,[n("h1",tt,[v(_(o.strings.compareRevisionsOf)+" ",1),n("span",st,[v("  “"),n("a",{href:s.itemTo.urls.edit_object},_(s.itemTo.object.title),9,it),v("” ")])]),n("a",{href:s.itemTo.urls.edit_object},"← "+_(o.strings.goToEditor),9,ot),p(d,{"item-to":s.itemTo,"item-from":s.itemFrom},null,8,["item-to","item-from"]),n("div",nt,[s.itemFrom?(a(),$(m,{key:0,revision:s.itemFrom},{title:b(()=>[v(_(o.strings.from),1)]),_:1},8,["revision"])):u("",!0),p(m,{"is-current-version":o.itemToId===r.seoRevisionsStore.items[0].id,revision:s.itemTo},W({"btn-restore":b(()=>[p(R,{size:"small-table",type:"blue",disabled:s.btnRestoreDisabled,loading:o.btnRestoreLoading,onClick:t[0]||(t[0]=f(A=>s.initRestore(),["exact"]))},{default:b(()=>[v(_(o.strings.restoreRevision),1)]),_:1},8,["disabled","loading"])]),_:2},[s.itemFrom?{name:"title",fn:b(()=>[v(_(o.strings.to),1)]),key:"0"}:void 0]),1032,["is-current-version","revision"])]),o.restoreFailed?(a(),$(c,{key:0,type:"yellow","show-close":"",onCloseAlert:t[1]||(t[1]=A=>o.restoreFailed=!1)},{default:b(()=>[v(_(o.strings.pleaseReload),1)]),_:1})):u("",!0),n("div",rt,[p(T,{"item-from-id":o.itemFromId,"item-to-id":o.itemToId},null,8,["item-from-id","item-to-id"]),o.isFetchingDiff?(a(),l("div",at,[p(N)])):u("",!0)])]))}const lt=g(Je,[["render",dt],["__scopeId","data-v-8f774480"]]);const ct={components:{SvgSliderHandle:V},data(){return{strings:{compareTwoRevisions:this.$t.__("Compare any two revisions",this.$td),next:this.$t.__("Next",this.$td),previous:this.$t.__("Previous",this.$td)}}}},_t=e=>(k("data-v-28d60966"),e=e(),E(),e),mt={class:"aioseo-seo-revisions-comparison__controls"},ht={class:"aioseo-seo-revisions-comparison__controls__compare-mode"},pt=_t(()=>n("input",{type:"checkbox"},null,-1)),ut={class:"aioseo-seo-revisions-comparison__controls__previous"},vt={class:"button",disabled:""},ft={class:"aioseo-seo-revisions-comparison__controls__slider"},bt={class:"marks"},gt={class:"aioseo-seo-revisions-comparison__controls__slider__handle to",disabled:""},yt={class:"aioseo-seo-revisions-comparison__controls__next"},$t={class:"button",disabled:""};function St(e,t,i,r,o,s){const c=h("svg-slider-handle");return a(),l("div",mt,[n("div",ht,[pt,v(" "+_(o.strings.compareTwoRevisions),1)]),n("div",ut,[n("button",vt,_(o.strings.previous),1)]),n("div",ft,[n("div",bt,[(a(),l(x,null,P(15,d=>n("div",{key:d})),64))]),n("button",gt,[p(c)])]),n("div",yt,[n("button",$t,_(o.strings.next),1)])])}const It=g(ct,[["render",St],["__scopeId","data-v-28d60966"]]);const w=e=>(k("data-v-2c5e7d56"),e=e(),E(),e),xt={class:"aioseo-seo-revisions-comparison__item-meta"},wt={class:"aioseo-seo-revisions-comparison__item-meta__col"},Rt={class:"aioseo-seo-revisions-comparison__item-meta__author-avatar"},Tt={class:"aioseo-seo-revisions-comparison__item-meta__col"},Nt={class:"aioseo-wrapper"},Ht={class:"aioseo-seo-revisions-comparison__item-meta__author"},Ft=w(()=>n("span",null," Revision by ",-1)),Pt=w(()=>n("div",{class:"aioseo-seo-revisions-comparison__item-meta__note"}," SEO Revision note ",-1)),kt=w(()=>n("button",{class:"aioseo-seo-revisions-comparison__item-meta__btn-edit-note"}," Edit Note ",-1)),Et=w(()=>n("div",{class:"aioseo-seo-revisions-comparison__item-meta__date"}," 1 week ago (2 Dec, 2022 @ 18:28:57) ",-1)),Ct={class:"aioseo-seo-revisions-comparison__item-meta__col"},Dt={__name:"ItemMeta",setup(e){const{currentUser:t}=D(S());return(i,r)=>(a(),l("div",xt,[n("div",wt,[n("div",Rt,[p(y(O),{src:y(t).avatar.url,size:y(t).avatar.size},null,8,["src","size"])])]),n("div",Tt,[n("div",Nt,[n("div",Ht,[Ft,n("span",null,_(y(t).display_name),1)]),Pt,kt]),Et]),n("div",Ct,[F(i.$slots,"btn-restore",{},void 0,!0)])]))}},Bt=g(Dt,[["__scopeId","data-v-2c5e7d56"]]);const Mt={},Lt={class:"aioseo-seo-revisions-item-diff"},Ot=q('<h3 data-v-3d55fc94>SEO Title</h3><div data-v-3d55fc94><table class="diff is-split-view" data-v-3d55fc94><tbody data-v-3d55fc94><tr data-v-3d55fc94><td class="diff-deletedline" data-v-3d55fc94><span aria-hidden="true" class="dashicons dashicons-minus" data-v-3d55fc94></span><span class="tag" data-v-3d55fc94>Post Title</span><span class="tag" data-v-3d55fc94>Separator</span><del data-v-3d55fc94><span class="tag" data-v-3d55fc94>Site Title</span></del></td><td class="diff-addedline" data-v-3d55fc94><span aria-hidden="true" class="dashicons dashicons-plus" data-v-3d55fc94></span><span class="tag" data-v-3d55fc94>Post Title</span><span class="tag" data-v-3d55fc94>Separator</span><ins data-v-3d55fc94><span class="tag" data-v-3d55fc94>Tagline</span></ins></td></tr></tbody></table></div><h3 data-v-3d55fc94>SEO Description</h3><div data-v-3d55fc94><table class="diff is-split-view" data-v-3d55fc94><tbody data-v-3d55fc94><tr data-v-3d55fc94><td class="diff-deletedline" data-v-3d55fc94><span aria-hidden="true" class="dashicons dashicons-minus" data-v-3d55fc94></span><del data-v-3d55fc94><span data-v-3d55fc94>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s.</span></del></td><td class="diff-addedline" data-v-3d55fc94><span aria-hidden="true" class="dashicons dashicons-plus" data-v-3d55fc94></span><ins data-v-3d55fc94><span data-v-3d55fc94>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s.</span></ins></td></tr></tbody></table></div><h3 data-v-3d55fc94>Focus Keyphrase</h3><div data-v-3d55fc94><table class="diff is-split-view" data-v-3d55fc94><tbody data-v-3d55fc94><tr data-v-3d55fc94><td class="diff-deletedline" data-v-3d55fc94><span aria-hidden="true" class="dashicons dashicons-minus" data-v-3d55fc94></span><del data-v-3d55fc94><span data-v-3d55fc94>Apple Pie</span></del></td><td class="diff-addedline" data-v-3d55fc94><span aria-hidden="true" class="dashicons dashicons-plus" data-v-3d55fc94></span><ins data-v-3d55fc94><span data-v-3d55fc94>Apple Pie</span></ins></td></tr></tbody></table></div><h3 data-v-3d55fc94>Additional Keyphrases</h3><div data-v-3d55fc94><table class="diff is-split-view" data-v-3d55fc94><tbody data-v-3d55fc94><tr data-v-3d55fc94><td class="diff-deletedline" data-v-3d55fc94><span aria-hidden="true" class="dashicons dashicons-minus" data-v-3d55fc94></span><del data-v-3d55fc94><span data-v-3d55fc94>Assistance</span></del><br data-v-3d55fc94><del data-v-3d55fc94><span data-v-3d55fc94>Explanation</span></del><br data-v-3d55fc94><del data-v-3d55fc94><span data-v-3d55fc94>Inspector</span></del><br data-v-3d55fc94><del data-v-3d55fc94><span data-v-3d55fc94>Championship</span></del><br data-v-3d55fc94><span data-v-3d55fc94>Smile</span></td><td class="diff-addedline" data-v-3d55fc94><span aria-hidden="true" class="dashicons dashicons-plus" data-v-3d55fc94></span><ins data-v-3d55fc94><span data-v-3d55fc94>Perspective</span></ins><br data-v-3d55fc94><ins data-v-3d55fc94><span data-v-3d55fc94>Family</span></ins><br data-v-3d55fc94><ins data-v-3d55fc94><span data-v-3d55fc94>Priority</span></ins><br data-v-3d55fc94><ins data-v-3d55fc94><span data-v-3d55fc94>Independence</span></ins><br data-v-3d55fc94><span data-v-3d55fc94>Smile</span></td></tr></tbody></table></div>',8),Vt=[Ot];function At(e,t){return a(),l("div",Lt,Vt)}const Ut=g(Mt,[["render",At],["__scopeId","data-v-3d55fc94"]]);const jt={components:{Controls:It,CoreBlur:ie,ItemMeta:Bt,ItemsDiff:Ut,SeoRevisionsUpsell:se},data(){return{strings:{compareRevisionsOf:this.$t.__("Compare Revisions of",this.$td),goToEditor:this.$t.__("Go to editor",this.$td)}}}},Kt={class:"aioseo-seo-revisions-comparison"},zt={class:"long-header"},Wt={class:"aioseo-seo-revisions-comparison__item-meta-wrapper"},qt={class:"aioseo-seo-revisions-comparison__diff"};function Gt(e,t,i,r,o,s){const c=h("controls"),d=h("base-button"),m=h("item-meta"),R=h("items-diff"),T=h("core-blur"),N=h("seo-revisions-upsell");return a(),l("div",Kt,[n("h1",zt,[v(_(o.strings.compareRevisionsOf)+" “ ",1),n("a",{href:"#",onClick:t[0]||(t[0]=f(()=>{},["prevent"]))}," 8 Link Building Strategies You Need to Know "),v(" ” ")]),n("a",{href:"#",onClick:t[1]||(t[1]=f(()=>{},["prevent"]))}," ← "+_(o.strings.goToEditor),1),p(c),p(T,null,{default:b(()=>[n("div",Wt,[p(m,null,{"btn-restore":b(()=>[p(d,{size:"small-table",disabled:!0},{default:b(()=>[v(" Restore This Revision ")]),_:1})]),_:1})]),n("div",qt,[p(R)])]),_:1}),p(N,{"parent-component-context":"comparison-ui"})])}const Xt=g(jt,[["render",Gt],["__scopeId","data-v-4dbffcec"]]),Qt={class:"wrap"},ws={__name:"Main",setup(e){const{isUnlicensed:t}=D(X());return(i,r)=>(a(),l("div",Qt,[y(t)?(a(),$(y(Xt),{key:1})):(a(),$(y(lt),{key:0}))]))}};export{ws as default};
