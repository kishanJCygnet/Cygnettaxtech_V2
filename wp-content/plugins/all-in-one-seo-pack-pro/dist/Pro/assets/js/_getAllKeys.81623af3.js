import{x as l,E as i,g as c}from"./isArrayLikeObject.d5975086.js";import{b as p}from"./_getTag.06b10d2d.js";function f(n){return l(n)?i(n):p(n)}function y(n,t){for(var r=-1,e=t.length,s=n.length;++r<e;)n[s+r]=t[r];return n}function g(n,t){for(var r=-1,e=n==null?0:n.length,s=0,o=[];++r<e;){var u=n[r];t(u,r,n)&&(o[s++]=u)}return o}function m(){return[]}var _=Object.prototype,h=_.propertyIsEnumerable,a=Object.getOwnPropertySymbols,x=a?function(n){return n==null?[]:(n=Object(n),g(a(n),function(t){return h.call(n,t)}))}:m;const A=x;function b(n,t,r){var e=t(n);return c(n)?e:y(e,r(n))}function k(n){return b(n,f,A)}export{y as a,A as b,b as c,g as d,k as g,f as k,m as s};