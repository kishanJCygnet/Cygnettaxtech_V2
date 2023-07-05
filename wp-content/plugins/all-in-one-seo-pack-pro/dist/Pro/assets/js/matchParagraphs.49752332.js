import{f as T,i as j}from"./isUndefined.5ce78b0c.js";import{K as A,J as S,b as W,a as m,L as M,N,O as C,g as $}from"./isArrayLikeObject.7c69e632.js";import{W as y}from"./_getTag.a4119be8.js";import{a as F}from"./toString.9a2ec6a1.js";import{b as q}from"./_baseIteratee.d1db8c72.js";import{k as G}from"./_getAllKeys.d4dd627a.js";var I=y&&new y;const v=I;function b(){}var z=4294967295;function _(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=z,this.__views__=[]}_.prototype=A(b.prototype);_.prototype.constructor=_;function D(){}var H=v?function(e){return v.get(e)}:D;const E=H;var U={};const w=U;var B=Object.prototype,Y=B.hasOwnProperty;function g(e){for(var r=e.name+"",n=w[r],s=Y.call(w,r)?n.length:0;s--;){var i=n[s],a=i.func;if(a==null||a==e)return i.name}return r}function t(e,r){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=void 0}t.prototype=A(b.prototype);t.prototype.constructor=t;function X(e){if(e instanceof _)return e.clone();var r=new t(e.__wrapped__,e.__chain__);return r.__actions__=S(e.__actions__),r.__index__=e.__index__,r.__values__=e.__values__,r}var J=Object.prototype,K=J.hasOwnProperty;function f(e){if(W(e)&&!m(e)&&!(e instanceof _)){if(e instanceof t)return e;if(K.call(e,"__wrapped__"))return X(e)}return new t(e)}f.prototype=b.prototype;f.prototype.constructor=f;function R(e){var r=g(e),n=f[r];if(typeof n!="function"||!(r in _.prototype))return!1;if(e===n)return!0;var s=E(n);return!!s&&e===s[0]}function Q(e){return M(N(e,void 0,T),e+"")}function V(e,r){return e&&C(e,r,G)}function Z(e,r){return function(n,s){if(n==null)return n;if(!$(n))return e(n,s);for(var i=n.length,a=r?i:-1,o=Object(n);(r?a--:++a<i)&&s(o[a],a,o)!==!1;);return n}}var x=Z(V);const ee=x;function re(e,r){var n=-1,s=$(e)?Array(e.length):[];return ee(e,function(i,a,o){s[++n]=r(i,a,o)}),s}function ne(e,r){var n=m(e)?F:re;return n(e,q(r))}var ae="Expected a function",se=8,oe=32,ie=128,pe=256;function ce(e){return Q(function(r){var n=r.length,s=n,i=t.prototype.thru;for(e&&r.reverse();s--;){var a=r[s];if(typeof a!="function")throw new TypeError(ae);if(i&&!o&&g(a)=="wrapper")var o=new t([],!0)}for(s=o?s:n;++s<n;){a=r[s];var p=g(a),c=p=="wrapper"?E(a):void 0;c&&R(c[0])&&c[1]==(ie|se|oe|pe)&&!c[4].length&&c[9]==1?o=o[g(c[0])].apply(o,c[3]):o=a.length==1&&R(a)?o[p]():o.thru(a)}return function(){var l=arguments,u=l[0];if(o&&l.length==1&&m(u))return o.plant(u).value();for(var h=0,d=n?r[h].apply(this,l):u;++h<n;)d=r[h].call(this,d);return d}})}var te=ce();const O=te,le=(()=>{const e="!(?:-(?!->)[^\\-]*)*(?:-->)?",r="!\\[CDATA\\[[^\\]]*(?:](?!]>)[^\\]]*)*?(?:]]>)?",s="(<("+("(?=!--|!\\[CDATA\\[)((?=!-)"+e+"|"+r+")")+"|[^>]*>?))";return new RegExp(s)})();function ue(e){const r=[];let n=e,s;for(;s=n.match(le);){const i=s.index;r.push(n.slice(0,i)),r.push(s[0]),n=n.slice(i+s[0].length)}return n.length&&r.push(n),r}function _e(e,r){const n=ue(e);let s=!1;const i=Object.keys(r);for(let a=1;a<n.length;a+=2)for(let o=0;o<i.length;o++){const p=i[o];if(n[a].indexOf(p)!==-1){n[a]=n[a].replace(new RegExp(p,"g"),r[p]),s=!0;break}}return s&&(e=n.join("")),e}function ge(e,r=!0){const n=[];if(e.trim()==="")return"";if(e=e+`
`,e.indexOf("<pre")!==-1){const a=e.split("</pre>"),o=a.pop();e="";for(let p=0;p<a.length;p++){const c=a[p],l=c.indexOf("<pre");if(l===-1){e+=c;continue}const u="<pre wp-pre-tag-"+p+"></pre>";n.push([u,c.substr(l)+"</pre>"]),e+=c.substr(0,l)+u}e+=o}e=e.replace(/<br\s*\/?>\s*<br\s*\/?>/g,`

`);const s="(?:table|thead|tfoot|caption|col|colgroup|tbody|tr|td|th|div|dl|dd|dt|ul|ol|li|pre|form|map|area|blockquote|address|math|style|p|h[1-6]|hr|fieldset|legend|section|article|aside|hgroup|header|footer|nav|figure|figcaption|details|menu|summary)";e=e.replace(new RegExp("(<"+s+"[\\s/>])","g"),`

$1`),e=e.replace(new RegExp("(</"+s+">)","g"),`$1

`),e=e.replace(/\r\n|\r/g,`
`),e=_e(e,{"\n":" <!-- wpnl --> "}),e.indexOf("<option")!==-1&&(e=e.replace(/\s*<option/g,"<option"),e=e.replace(/<\/option>\s*/g,"</option>")),e.indexOf("</object>")!==-1&&(e=e.replace(/(<object[^>]*>)\s*/g,"$1"),e=e.replace(/\s*<\/object>/g,"</object>"),e=e.replace(/\s*(<\/?(?:param|embed)[^>]*>)\s*/g,"$1")),(e.indexOf("<source")!==-1||e.indexOf("<track")!==-1)&&(e=e.replace(/([<\[](?:audio|video)[^>\]]*[>\]])\s*/g,"$1"),e=e.replace(/\s*([<\[]\/(?:audio|video)[>\]])/g,"$1"),e=e.replace(/\s*(<(?:source|track)[^>]*>)\s*/g,"$1")),e.indexOf("<figcaption")!==-1&&(e=e.replace(/\s*(<figcaption[^>]*>)/,"$1"),e=e.replace(/<\/figcaption>\s*/,"</figcaption>")),e=e.replace(/\n\n+/g,`

`);const i=e.split(/\n\s*\n/).filter(Boolean);return e="",i.forEach(a=>{e+="<p>"+a.replace(/^\n*|\n*$/g,"")+`</p>
`}),e=e.replace(/<p>\s*<\/p>/g,""),e=e.replace(/<p>([^<]+)<\/(div|address|form)>/g,"<p>$1</p></$2>"),e=e.replace(new RegExp("<p>\\s*(</?"+s+"[^>]*>)\\s*</p>","g"),"$1"),e=e.replace(/<p>(<li.+?)<\/p>/g,"$1"),e=e.replace(/<p><blockquote([^>]*)>/gi,"<blockquote$1><p>"),e=e.replace(/<\/blockquote><\/p>/g,"</p></blockquote>"),e=e.replace(new RegExp("<p>\\s*(</?"+s+"[^>]*>)","g"),"$1"),e=e.replace(new RegExp("(</?"+s+"[^>]*>)\\s*</p>","g"),"$1"),r&&(e=e.replace(/<(script|style).*?<\/\\1>/g,a=>a[0].replace(/\n/g,"<WPPreserveNewline />")),e=e.replace(/<br>|<br\/>/g,"<br />"),e=e.replace(/(<br \/>)?\s*\n/g,(a,o)=>o?a:`<br />
`),e=e.replace(/<WPPreserveNewline \/>/g,`
`)),e=e.replace(new RegExp("(</?"+s+"[^>]*>)\\s*<br />","g"),"$1"),e=e.replace(/<br \/>(\s*<\/?(?:p|li|div|dl|dd|dt|th|pre|td|ul|ol)[^>]*>)/g,"$1"),e=e.replace(/\n<\/p>$/g,"</p>"),n.forEach(a=>{const[o,p]=a;e=e.replace(o,p)}),e.indexOf("<!-- wpnl -->")!==-1&&(e=e.replace(/\s?<!-- wpnl -->\s?/g,`
`)),e}const fe=e=>e.replace(/<\/?[a-z][^>]*?>/gi,`
`),he=e=>e.replace(/<style[^>]*>.*?<\/style>/gi,""),de=e=>e.replace(/&nbsp;|&#160;/gi," ").replace(/\s{2,}/g," ").replace(/\s\./g,".").replace(/^\s+/g,"").replace(/\s+$/g,""),me=e=>e.replace(/<script[^>]*>.*?<\/script>/gi,""),be=e=>e.replace(/[‘’‛`]/g,"'").replace(/[“”〝〞〟‟„]/g,'"'),P=e=>e.replace(/<!--[\s\S]*?-->/g,""),ye=e=>e.replace(/&\S+?;/g,"");function L(e){return j(e)?"":O([he,me,fe,P,ye,de,be])(e)}const k="[^<>&/\\[\\]\0- =]+?",ve=new RegExp("\\["+k+"( [^\\]]+?)?\\]","g"),we=new RegExp("\\[/"+k+"\\]","g"),Re=e=>e.replace(ve,"").replace(we,""),Ae=(e,r)=>{const n=/<p(?:[^>]+)?>(.*?)<\/p>/ig,s=[];let i;for(;(i=n.exec(e))!==null;)s.push(i);return ne(s,a=>r?L(a[1]):a[1])},Te=(e,r)=>{e=O([Re,P,ge])(e),r=r||!1;const n=Ae(e,r);return 0<n.length?n:[r?L(e):e]};export{ne as a,ee as b,re as c,O as d,Q as f,Te as m,D as n};
