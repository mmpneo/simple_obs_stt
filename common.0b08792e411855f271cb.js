(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{TG6D:function(e,t,n){"use strict";n.d(t,"a",function(){return v}),n.d(t,"b",function(){return m});var l=n("ofXK"),i=n("zHT3"),a=n("fXoL"),s=n("cLXs"),c=n("hBBj");const o=["avatarElement"],r=["boxElement"],u=["textElement"];function b(e,t){if(1&e&&(a.Pb(0,"span",9),a.xc(1),a.Ob()),2&e){const e=t.$implicit;a.Bb("opacity-70",!e.finalized),a.yb(1),a.zc("",e.value," ")}}function y(e,t){if(1&e&&(a.Nb(0),a.Pb(1,"div",1),a.cc(2,"async"),a.Kb(3,"div",2,3),a.Pb(5,"div",4,5),a.Pb(7,"div",6,7),a.vc(9,b,2,3,"span",8),a.Ob(),a.Ob(),a.Ob(),a.Mb()),2&e){const e=t.ngIf,n=a.bc().ngIf,l=a.bc();a.yb(1),a.Bb("show",a.dc(2,8,l.speechQuery.showBubble$)),a.yb(2),a.Bb("hidden",!n.avatarStyle.backgroundImage.value),a.yb(4),a.Bb("host",2===e.speechServiceState),a.yb(2),a.hc("ngForOf",e.sentences)("ngForTrackBy",l.track)}}function p(e,t){if(1&e&&(a.Nb(0),a.vc(1,y,10,10,"ng-container",0),a.cc(2,"async"),a.Mb()),2&e){const e=a.bc();a.yb(1),a.hc("ngIf",a.dc(2,1,e.speechQuery.state$))}}let v=(()=>{class e{constructor(e,t,n){this.speechQuery=e,this.styleQuery=t,this.detector=n,this.track=(e,t)=>t.id&&t.value}BuildTypedValue(e){switch(e.type){case i.c.pixels:return e.value+"px";case i.c.ms:return e.value+"ms";case i.c.url:return`url(${e.value})`;case i.c.translateX:return`translateX(${e.value}px)`;case i.c.translateY:return`translateY(${e.value}px)`;default:return e.value}}ApplyElementStyleDAta(e,t,n,l){var a;for(const s in l){if(l[s].type===i.c.logic)continue;const c=null===(a=i.a[t])||void 0===a?void 0:a[s];c?c(e,n.style,this.BuildTypedValue(l[s])):n.style[s]=this.BuildTypedValue(l[s])}}ApplyCompositeElementStyleData(e,t){for(const n in t)e.style[n]=Object.values(t[n]).map(e=>this.BuildTypedValue(e)).join(" ")}ApplyStyles(e){this.ApplyElementStyleDAta(e,"avatarStyle",this.avatarElement.nativeElement,e.avatarStyle),this.ApplyElementStyleDAta(e,"boxStyle",this.boxElement.nativeElement,e.boxStyle),this.ApplyElementStyleDAta(e,"textStyle",this.textElement.nativeElement,e.textStyle),this.ApplyCompositeElementStyleData(this.textElement.nativeElement,e.textStyleComposite),this.ApplyCompositeElementStyleData(this.avatarElement.nativeElement,e.avatarStyleComposite)}ngAfterViewInit(){this.styleQuery.current$.subscribe(e=>this.ApplyStyles(e))}ngOnInit(){this.speechQuery.sentences$.subscribe(e=>{this.detector.detectChanges(),setTimeout(()=>{var e,t,n,l;return null===(n=null===(t=null===(e=this.textElement)||void 0===e?void 0:e.nativeElement)||void 0===t?void 0:t.scrollTo)||void 0===n?void 0:n.call(t,{top:null===(l=this.textElement.nativeElement)||void 0===l?void 0:l.scrollHeight,behavior:"smooth"})},50)})}}return e.\u0275fac=function(t){return new(t||e)(a.Jb(s.a),a.Jb(c.a),a.Jb(a.h))},e.\u0275cmp=a.Db({type:e,selectors:[["app-stt-renderer"]],viewQuery:function(e,t){if(1&e&&(a.Ac(o,1),a.Ac(r,1),a.Ac(u,1)),2&e){let e;a.mc(e=a.Yb())&&(t.avatarElement=e.first),a.mc(e=a.Yb())&&(t.boxElement=e.first),a.mc(e=a.Yb())&&(t.textElement=e.first)}},decls:2,vars:3,consts:[[4,"ngIf"],[1,"flex","stt-container","flex","items-end","relative"],[1,"pointer-events-none","z-50","w-36","h-36","bg-contain","bg-center","bg-no-repeat",2,"animation-iteration-count","infinite","animation-timing-function","ease-in-out"],["avatarElement",""],[1,"box-content","relative","stt-box","flex","flex-col","bg-cover","bg-center"],["boxElement",""],[1,"stt-box-text","absolute","overflow-y-scroll","overflow-x-hidden"],["textElement",""],["class","break-words",3,"opacity-70",4,"ngFor","ngForOf","ngForTrackBy"],[1,"break-words"]],template:function(e,t){1&e&&(a.vc(0,p,3,3,"ng-container",0),a.cc(1,"async")),2&e&&a.hc("ngIf",a.dc(1,1,t.styleQuery.current$))},directives:[l.m,l.l],pipes:[l.b],encapsulation:2,changeDetection:0}),e})(),m=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.Hb({type:e}),e.\u0275inj=a.Gb({imports:[[l.c]]}),e})()}}]);