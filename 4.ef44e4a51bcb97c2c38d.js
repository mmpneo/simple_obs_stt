(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+Vp6":function(t,e,n){"use strict";n.r(e),n.d(e,"ClientModule",function(){return l});var c=n("ofXK"),i=n("fXoL"),s=n("Dvf2"),o=n("w9xF"),a=n("cLXs"),r=n("tyNb");function u(t,e){1&t&&(i.Nb(0,"div"),i.jc(1,"Connecting"),i.Mb())}let p=(()=>{class t{constructor(t,e,n,c){this.networkService=t,this.networkQuery=e,this.speechQuery=n,this.activatedRoute=c}ngOnInit(){console.log(this.activatedRoute.snapshot.params.id),this.networkService.InitClient(this.activatedRoute.snapshot.params.id)}}return t.\u0275fac=function(e){return new(e||t)(i.Ib(s.a),i.Ib(o.a),i.Ib(a.a),i.Ib(r.a))},t.\u0275cmp=i.Cb({type:t,selectors:[["app-client"]],decls:5,vars:6,consts:[[4,"ngIf"]],template:function(t,e){if(1&t&&(i.ic(0,u,2,0,"div",0),i.ac(1,"async"),i.Nb(2,"div"),i.jc(3),i.ac(4,"async"),i.Mb()),2&t){let t=null;i.dc("ngIf",1===(null==(t=i.bc(1,2,e.networkQuery.state$))?null:t.peerConnectionState)),i.yb(3),i.kc(i.bc(4,4,e.speechQuery.value$))}},directives:[c.j],pipes:[c.b],encapsulation:2,changeDetection:0}),t})(),l=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Gb({type:t}),t.\u0275inj=i.Fb({imports:[[c.c,r.b.forChild([{path:":id",component:p}])]]}),t})()}}]);