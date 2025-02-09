"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var d=v(function(z,f){
function j(e,r,a,q){var n,u,i,t,s;if(e<=0)return NaN;if(e===1||a===0)return r[q];for(u=q,n=0,t=0,s=0;s<e;s++)i=r[u],i===i&&(t+=1,n+=(i-n)/t),u+=a;return t===0?NaN:n}f.exports=j
});var c=v(function(A,m){
var l=require('@stdlib/strided-base-stride2offset/dist'),R=d();function _(e,r,a){return R(e,r,a,l(e,a))}m.exports=_
});var w=v(function(B,y){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=c(),N=d();E(p,"ndarray",N);y.exports=p
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=w(),o,x=b(O(__dirname,"./native.js"));g(x)?o=h:o=x;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
