var L=(P)=>typeof P==="function",D=(P)=>L(P)&&/^async\s+/.test(P.toString()),E=(P)=>(x)=>x instanceof P,y=E(Error),G=E(Promise);class O{P;sinks=new Set;value=void 0;error=null;stale=!0;memo=!1;async=!1;constructor(P,x){this.fn=P;this.async=D(P),this.memo=x??this.async}static of(P,x){return new O(P,x)}static isComputed=(P)=>P instanceof O;get(){if(k(this.sinks),!this.memo||this.stale)w(()=>{let P=()=>{try{return this.fn()}catch(B){return y(B)?B:new Error(`Error during reactive computation: ${B}`)}},x=(B)=>{this.stale=j==null,this.value=B,this.error=null},I=(B)=>{this.stale=!0,this.error=B},z=(B)=>y(B)?I(B):x(B),j=P();G(j)?j.then((B)=>z(B)).catch(I):z(j)},()=>{if(this.stale=!0,this.memo)q(this.sinks)});if(this.error)throw this.error;return this.value}}var T,k=(P)=>{if(T)P.add(T)},q=(P)=>P.forEach((x)=>x()),w=(P,x)=>{let I=T;T=x,P(),T=I};class U{P;sinks=new Set;constructor(P){this.value=P}static of(P){return new U(P)}static isState=(P)=>P instanceof U;get(){return k(this.sinks),this.value}set(P){let x=L(P)?P(this.value):P;if(!Object.is(this.value,x))this.value=x,q(this.sinks)}}var H=(P)=>{let x=()=>w(()=>{try{let I=P();if(I&&L(I))setTimeout(()=>I(),0)}catch(I){console.error(I)}},x);x()};export{H as effect,U as State,O as Computed};
