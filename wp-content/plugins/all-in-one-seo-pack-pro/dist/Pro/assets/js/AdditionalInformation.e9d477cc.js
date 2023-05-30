import{W as O}from"./WpTable.4156f8c9.js";import"./default-i18n.ab92175e.js";import"./constants.145da60f.js";import{_ as P,c as d,z as a,k as r,q as l,o as m,a as i,x as g,t,b as p}from"./_plugin-vue_export-helper.a2c961b3.js";import{U}from"./Image.3c70e881.js";import{M as L}from"./MaxCounts.12b45bab.js";import"./SaveChanges.6857467d.js";import{m as y,a as $}from"./vuex.esm-bundler.2b955043.js";import{B as R}from"./Img.8aa01665.js";import{B as A}from"./Phone.95353724.js";import{B as W}from"./RadioToggle.3b298d3e.js";import{C as B}from"./SocialProfiles.fd056d48.js";import{S as M}from"./Plus.3c570233.js";import{W as J,a as Y,b as D}from"./Header.b3b592d9.js";import{W as E,a as G}from"./Steps.89b7a1d2.js";import"./index.24cd8e71.js";import"./Caret.8213645d.js";import"./Index.d2a7b6fb.js";import"./Row.f8e3a585.js";import"./helpers.ad3850ca.js";import"./RequiresUpdate.fe231e49.js";import"./postContent.ce215f52.js";import"./index.a915b491.js";import"./isArrayLikeObject.5b92a7d2.js";import"./cleanForSlug.d1b7ba11.js";import"./html.c2b89264.js";import"./Index.e14a5090.js";import"./_commonjsHelpers.f84db168.js";import"./preload-helper.b149fa8b.js";import"./Checkbox.8db0d2b3.js";import"./Checkmark.1fb57726.js";import"./Textarea.33898a18.js";import"./SettingsRow.010c4bbe.js";import"./Twitter.ddf62270.js";import"./Logo.772357e2.js";const q={components:{BaseImg:R,BasePhone:A,BaseRadioToggle:W,CoreSocialProfiles:B,SvgCirclePlus:M,WizardBody:J,WizardCloseAndExit:E,WizardContainer:Y,WizardHeader:D,WizardSteps:G},mixins:[L,U,O],data(){return{loaded:!1,loading:!1,stage:"additional-information",strings:{additionalSiteInformation:this.$t.__("Additional Site Information",this.$td),personOrOrganization:this.$t.__("Person or Organization",this.$td),choosePerson:this.$t.__("Choose a Person",this.$td),person:this.$t.__("Person",this.$td),organization:this.$t.__("Organization",this.$td),personOrOrganizationDescription:this.$t.__("Choose whether the site represents a person or an organization.",this.$td),name:this.$t.__("Name",this.$td),organizationName:this.$t.__("Organization Name",this.$td),phone:this.$t.__("Phone Number",this.$td),chooseContactType:this.$t.__("Choose a Contact Type",this.$td),contactType:this.$t.__("Contact Type",this.$td),contactTypeDescription:this.$t.__("Select which team or department the phone number belongs to.",this.$td),logo:this.$t.__("Logo",this.$td),uploadOrSelectImage:this.$t.__("Upload or Select Image",this.$td),pasteYourImageUrl:this.$t.__("Paste your image URL or select a new image",this.$td),minimumSize:this.$t.__("Minimum size: 112px x 112px, The image must be in JPG, PNG, GIF, SVG, or WEBP format.",this.$td),remove:this.$t.__("Remove",this.$td),defaultSocialShareImage:this.$t.__("Default Social Share Image",this.$td),yourSocialProfiles:this.$t.__("Your Social Profiles",this.$td)}}},watch:{"options.social.profiles":{deep:!0,handler(o){this.additionalInformation.social.profiles=o}}},computed:{...y(["options"]),...y("wizard",["additionalInformation"]),users(){return[{label:this.$t.__("Manually Enter Person",this.$td),value:"manual"}].concat(this.$aioseo.users.map(o=>({label:`${o.displayName} (${o.email})`,gravatar:o.gravatar,value:o.id})))}},methods:{...$("wizard",["saveWizard"]),getPersonOptions(o){return this.users.find(e=>e.value===o)},getContactTypeOptions(o){return this.$constants.CONTACT_TYPES.find(e=>e.value===o)},saveAndContinue(){this.loading=!0,this.saveWizard("additionalInformation").then(()=>{this.$router.push(this.getNextLink)})}},mounted(){this.$nextTick(()=>{const o=JSON.parse(JSON.stringify(this.options.searchAppearance)),e=JSON.parse(JSON.stringify(this.options.social));this.additionalInformation.social.profiles=JSON.parse(JSON.stringify(e.profiles)),this.additionalInformation.socialShareImage=e.facebook.general.defaultImagePosts,this.additionalInformation.siteRepresents=o.global.schema.siteRepresents,this.additionalInformation.person=o.global.schema.person,this.additionalInformation.organizationName=o.global.schema.organizationName,this.additionalInformation.organizationLogo=o.global.schema.organizationLogo,this.additionalInformation.personName=o.global.schema.personName,this.additionalInformation.personLogo=o.global.schema.personLogo,this.additionalInformation.phone=o.global.schema.phone,this.additionalInformation.contactType=o.global.schema.contactType,this.additionalInformation.contactTypeManual=o.global.schema.contactTypeManual,this.loaded=!0})}},F={class:"aioseo-wizard-additional-information"},H={class:"header"},j={class:"person-or-organization aioseo-settings-row no-border no-margin"},K={class:"settings-name"},Q={class:"name small-margin"},X={class:"aioseo-description"},Z={key:0,class:"aioseo-settings-row no-border no-margin"},x={class:"settings-name"},oo={class:"name small-margin"},io={class:"person-label"},eo={key:0,class:"person-avatar"},no=["src"],so={class:"person-name"},ao={class:"person-label"},to={key:0,class:"person-avatar"},ro=["src"],lo={class:"person-name"},mo={key:1,class:"schema-graph-name aioseo-settings-row no-border no-margin"},po={class:"settings-name"},go={class:"name small-margin"},co={key:2,class:"schema-graph-name aioseo-settings-row no-border no-margin"},uo={class:"settings-name"},ho={class:"name small-margin"},_o={key:3,class:"schema-graph-phone aioseo-settings-row no-border no-margin"},fo={class:"settings-name"},vo={class:"name small-margin"},Io={key:4,class:"schema-graph-contact-type aioseo-settings-row no-border no-margin"},zo={class:"settings-name"},yo={class:"name small-margin"},bo={class:"aioseo-description"},So={key:5,class:"schema-graph-contact-type-manual aioseo-settings-row no-border no-margin"},Vo={class:"settings-name"},ko={class:"name small-margin"},Co={key:6,class:"schema-graph-image aioseo-settings-row no-border no-margin"},To={class:"settings-name"},wo={class:"name small-margin"},No={class:"image-upload"},Oo={class:"aioseo-description"},Po={key:7,class:"schema-graph-image aioseo-settings-row no-border no-margin"},Uo={class:"settings-name"},Lo={class:"name small-margin"},$o={class:"image-upload"},Ro={class:"aioseo-description"},Ao={class:"schema-graph-image aioseo-settings-row"},Wo={class:"settings-name"},Bo={class:"name small-margin"},Mo={class:"image-upload"},Jo={class:"aioseo-description"},Yo={class:"header social"},Do={key:8,class:"social-profiles"},Eo={class:"go-back"},Go=i("div",{class:"spacer"},null,-1);function qo(o,e,Fo,Ho,n,_){const b=l("wizard-header"),S=l("wizard-steps"),V=l("base-radio-toggle"),I=l("base-select"),u=l("base-input"),k=l("base-phone"),f=l("svg-circle-plus"),c=l("base-button"),v=l("base-img"),C=l("core-social-profiles"),z=l("router-link"),T=l("wizard-body"),w=l("wizard-close-and-exit"),N=l("wizard-container");return m(),d("div",F,[a(b),a(N,null,{default:r(()=>[a(T,null,{footer:r(()=>[i("div",Eo,[a(z,{to:o.getPrevLink,class:"no-underline"},{default:r(()=>[g("←")]),_:1},8,["to"]),g("   "),a(z,{to:o.getPrevLink},{default:r(()=>[g(t(n.strings.goBack),1)]),_:1},8,["to"])]),Go,a(c,{type:"blue",loading:n.loading,onClick:_.saveAndContinue},{default:r(()=>[g(t(n.strings.saveAndContinue)+" →",1)]),_:1},8,["loading","onClick"])]),default:r(()=>[a(S),i("div",H,t(n.strings.additionalSiteInformation),1),i("div",j,[i("div",K,[i("div",Q,t(n.strings.personOrOrganization),1)]),a(V,{modelValue:o.additionalInformation.siteRepresents,"onUpdate:modelValue":e[0]||(e[0]=s=>o.additionalInformation.siteRepresents=s),name:"siteRepresents",options:[{label:n.strings.person,value:"person"},{label:n.strings.organization,value:"organization"}]},null,8,["modelValue","options"]),i("div",X,t(n.strings.personOrOrganizationDescription),1)]),o.additionalInformation.siteRepresents==="person"?(m(),d("div",Z,[i("div",x,[i("div",oo,t(n.strings.choosePerson),1)]),a(I,{class:"person-chooser",options:_.users,modelValue:_.getPersonOptions(o.additionalInformation.person),"onUpdate:modelValue":e[1]||(e[1]=s=>o.additionalInformation.person=s.value)},{singleLabel:r(({option:s})=>[i("div",io,[s.gravatar?(m(),d("div",eo,[i("img",{alt:"User Gravatar",src:s.gravatar},null,8,no)])):p("",!0),i("div",so,t(s.label),1)])]),option:r(({option:s})=>[i("div",ao,[s.gravatar?(m(),d("div",to,[i("img",{alt:"User Gravatar",src:s.gravatar},null,8,ro)])):p("",!0),i("div",lo,t(s.label),1)])]),_:1},8,["options","modelValue"])])):p("",!0),o.additionalInformation.siteRepresents==="organization"?(m(),d("div",mo,[i("div",po,[i("div",go,t(n.strings.organizationName),1)]),a(u,{size:"medium",modelValue:o.additionalInformation.organizationName,"onUpdate:modelValue":e[2]||(e[2]=s=>o.additionalInformation.organizationName=s)},null,8,["modelValue"])])):p("",!0),o.additionalInformation.siteRepresents!=="organization"&&o.additionalInformation.person==="manual"?(m(),d("div",co,[i("div",uo,[i("div",ho,t(n.strings.name),1)]),a(u,{size:"medium",modelValue:o.additionalInformation.personName,"onUpdate:modelValue":e[3]||(e[3]=s=>o.additionalInformation.personName=s)},null,8,["modelValue"])])):p("",!0),o.additionalInformation.siteRepresents==="organization"?(m(),d("div",_o,[i("div",fo,[i("div",vo,t(n.strings.phone),1)]),a(k,{modelValue:o.additionalInformation.phone,"onUpdate:modelValue":e[4]||(e[4]=s=>o.additionalInformation.phone=s)},null,8,["modelValue"])])):p("",!0),o.additionalInformation.siteRepresents==="organization"?(m(),d("div",Io,[i("div",zo,[i("div",yo,t(n.strings.contactType),1)]),a(I,{size:"medium",options:o.$constants.CONTACT_TYPES,placeholder:n.strings.chooseContactType,modelValue:_.getContactTypeOptions(o.additionalInformation.contactType),"onUpdate:modelValue":e[5]||(e[5]=s=>o.additionalInformation.contactType=s.value)},null,8,["options","placeholder","modelValue"]),i("div",bo,t(n.strings.contactTypeDescription),1)])):p("",!0),o.additionalInformation.siteRepresents==="organization"&&o.additionalInformation.contactType==="manual"?(m(),d("div",So,[i("div",Vo,[i("div",ko,t(n.strings.contactType),1)]),a(u,{size:"medium",modelValue:o.additionalInformation.contactTypeManual,"onUpdate:modelValue":e[6]||(e[6]=s=>o.additionalInformation.contactTypeManual=s)},null,8,["modelValue"])])):p("",!0),o.additionalInformation.siteRepresents==="organization"?(m(),d("div",Co,[i("div",To,[i("div",wo,t(n.strings.logo),1)]),i("div",No,[a(u,{size:"medium",modelValue:o.additionalInformation.organizationLogo,"onUpdate:modelValue":e[7]||(e[7]=s=>o.additionalInformation.organizationLogo=s),placeholder:n.strings.pasteYourImageUrl},null,8,["modelValue","placeholder"]),a(c,{class:"insert-image",onClick:e[8]||(e[8]=s=>o.openUploadModal("organizationLogo",h=>o.additionalInformation.organizationLogo=h)),size:"medium",type:"black"},{default:r(()=>[a(f),g(" "+t(n.strings.uploadOrSelectImage),1)]),_:1}),a(c,{class:"remove-image",onClick:e[9]||(e[9]=s=>o.additionalInformation.organizationLogo=null),size:"medium",type:"gray"},{default:r(()=>[g(t(n.strings.remove),1)]),_:1})]),i("div",Oo,t(n.strings.minimumSize),1),a(v,{src:o.additionalInformation.organizationLogo},null,8,["src"])])):p("",!0),o.additionalInformation.siteRepresents!=="organization"&&o.additionalInformation.person==="manual"?(m(),d("div",Po,[i("div",Uo,[i("div",Lo,t(n.strings.logo),1)]),i("div",$o,[a(u,{size:"medium",modelValue:o.additionalInformation.personLogo,"onUpdate:modelValue":e[10]||(e[10]=s=>o.additionalInformation.personLogo=s),placeholder:n.strings.pasteYourImageUrl},null,8,["modelValue","placeholder"]),a(c,{class:"insert-image",onClick:e[11]||(e[11]=s=>o.openUploadModal("personLogo",h=>o.additionalInformation.personLogo=h)),size:"medium",type:"black"},{default:r(()=>[a(f),g(" "+t(n.strings.uploadOrSelectImage),1)]),_:1}),a(c,{class:"remove-image",onClick:e[12]||(e[12]=s=>o.additionalInformation.personLogo=null),size:"medium",type:"gray"},{default:r(()=>[g(t(n.strings.remove),1)]),_:1})]),i("div",Ro,t(n.strings.minimumSize),1),a(v,{src:o.additionalInformation.personLogo},null,8,["src"])])):p("",!0),i("div",Ao,[i("div",Wo,[i("div",Bo,t(n.strings.defaultSocialShareImage),1)]),i("div",Mo,[a(u,{size:"medium",modelValue:o.additionalInformation.socialShareImage,"onUpdate:modelValue":e[13]||(e[13]=s=>o.additionalInformation.socialShareImage=s),placeholder:n.strings.pasteYourImageUrl},null,8,["modelValue","placeholder"]),a(c,{class:"insert-image",onClick:e[14]||(e[14]=s=>o.openUploadModal("socialShareImage",h=>o.additionalInformation.socialShareImage=h)),size:"medium",type:"black"},{default:r(()=>[a(f),g(" "+t(n.strings.uploadOrSelectImage),1)]),_:1}),a(c,{class:"remove-image",onClick:e[15]||(e[15]=s=>o.additionalInformation.socialShareImage=null),size:"medium",type:"gray"},{default:r(()=>[g(t(n.strings.remove),1)]),_:1})]),i("div",Jo,t(n.strings.minimumSize),1),a(v,{src:o.additionalInformation.socialShareImage},null,8,["src"])]),i("div",Yo,t(n.strings.yourSocialProfiles),1),n.loaded?(m(),d("div",Do,[a(C,{options:o.additionalInformation,leftSize:"4",rightSize:"8",sameUsernameWidth:"4",hideAdditionalProfiles:""},null,8,["options"])])):p("",!0)]),_:1}),a(w)]),_:1})])}const Ni=P(q,[["render",qo]]);export{Ni as default};
