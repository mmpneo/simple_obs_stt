(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{TG6D:function(t,e,n){"use strict";n.d(e,"a",function(){return p}),n.d(e,"b",function(){return b});var s=n("ofXK"),o=n("zHT3"),i=n("fXoL"),l=n("cLXs"),c=n("hBBj");const r=["boxElement"],a=["textElement"];function u(t,e){if(1&t&&(i.Pb(0,"span",6),i.uc(1),i.Ob()),2&t){const t=e.$implicit;i.Bb("opacity-60",!t.finalized),i.yb(1),i.vc(t.value)}}let p=(()=>{class t{constructor(t,e,n){this.speechQuery=t,this.styleQuery=e,this.detector=n,this.sentences=[],this.track=(t,e)=>e.id&&e.value}ApplyElementStyleDAta(t,e){for(const n in e)t.style[n]=e[n].value+(e[n].type===o.b.string?"":"px")}ApplyCompositeElementStyleData(t,e){for(const n in e)t.style[n]=Object.values(e[n]).map(t=>t.value+(t.type===o.b.string?"":"px")).join(" ")}ApplyStyles(t){this.ApplyElementStyleDAta(this.boxElement.nativeElement,t.boxStyle),this.ApplyElementStyleDAta(this.textElement.nativeElement,t.textStyle),this.ApplyCompositeElementStyleData(this.textElement.nativeElement,t.textStyleComposite)}ngAfterViewInit(){this.styleQuery.current$.subscribe(t=>this.ApplyStyles(t))}ngOnInit(){this.speechQuery.sentences$.subscribe(t=>{var e,n,s,o;this.sentences=t,this.detector.markForCheck(),null===(s=null===(n=null===(e=this.boxElement)||void 0===e?void 0:e.nativeElement)||void 0===n?void 0:n.scrollTo)||void 0===s||s.call(n,{top:null===(o=this.boxElement.nativeElement)||void 0===o?void 0:o.scrollHeight,behavior:"smooth"})})}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(l.a),i.Jb(c.a),i.Jb(i.h))},t.\u0275cmp=i.Db({type:t,selectors:[["app-stt-renderer"]],viewQuery:function(t,e){if(1&t&&(i.xc(r,1),i.xc(a,1)),2&t){let t;i.jc(t=i.Yb())&&(e.boxElement=t.first),i.jc(t=i.Yb())&&(e.textElement=t.first)}},decls:7,vars:4,consts:[[1,"stt-container","overflow-hidden"],[1,"stt-box","flex","flex-col","w-96","h-24","bg-secondary","text-secondary-content","overflow-y-scroll",2,"scroll-behavior","smooth"],["boxElement",""],[1,"p-4","stt-box-text","w-full","min-h-full",2,"flex","0 0 auto"],["textElement",""],["class","mr-2",3,"opacity-60",4,"ngFor","ngForOf","ngForTrackBy"],[1,"mr-2"]],template:function(t,e){1&t&&(i.Pb(0,"div",0),i.Pb(1,"div",1,2),i.Pb(3,"div",3,4),i.sc(5,u,2,3,"span",5),i.cc(6,"async"),i.Ob(),i.Ob(),i.Ob()),2&t&&(i.yb(5),i.hc("ngForOf",i.dc(6,2,e.speechQuery.sentences$))("ngForTrackBy",e.track))},directives:[s.j],pipes:[s.b],encapsulation:2,changeDetection:0}),t})(),b=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({imports:[[s.c]]}),t})()},hBBj:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var s=n("4ZtF"),o=n("fXoL"),i=n("zHT3");let l=(()=>{class t extends s.a{constructor(t){super(t),this.store=t,this.current$=this.select("currentStyle")}}return t.\u0275fac=function(e){return new(e||t)(o.Tb(i.a))},t.\u0275prov=o.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);