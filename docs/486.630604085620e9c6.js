"use strict";(self.webpackChunkangfiretest=self.webpackChunkangfiretest||[]).push([[486],{6486:(y,l,s)=>{s.r(l),s.d(l,{AuthModule:()=>A});var p=s(9808),c=s(4410),h=s(5861),r=s(2382),t=s(5e3),m=s(1205);let d=(()=>{class n{constructor(e,i){this.firebaseAuth=e,this.router=i,this.isLoggedIn=!1}signIn(e,i){var o=this;return(0,h.Z)(function*(){return yield o.firebaseAuth.signInWithEmailAndPassword(e,i).then(a=>{a&&(o.isLoggedIn=!0,localStorage.setItem("user",JSON.stringify(a.user)),o.router.navigate(["main"]))})})()}signUp(e,i){var o=this;return(0,h.Z)(function*(){return yield o.firebaseAuth.createUserWithEmailAndPassword(e,i).then(a=>{var g;a&&(null===(g=a.user)||void 0===g||g.sendEmailVerification(),o.isLoggedIn=!0,localStorage.setItem("user",JSON.stringify(a.user)),o.router.navigate(["main"]))})})()}logout(){return this.firebaseAuth.signOut().then(()=>{this.router.navigate(["auth"]).then(()=>localStorage.removeItem("user"))})}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(m.zQ),t.LFG(c.F0))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const f=[{path:"",component:(()=>{class n{constructor(e,i){this.fb=e,this.authService=i,this.signType="sign In"}ngOnInit(){this.initForm()}initForm(){return this.credentialsForm=this.fb.group({email:new r.NI(""),pass:new r.NI("")})}onSubmit(){var e=this;return(0,h.Z)(function*(){const{email:i,pass:o}=e.credentialsForm.value;switch(e.signType){case"sign In":yield e.authService.signIn(i,o);break;case"sign Up":yield e.authService.signUp(i,o)}})()}onChangeMethod(e){this.signType=e}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.qu),t.Y36(d))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-auth"]],decls:12,vars:6,consts:[[1,"sign-title",3,"click"],[3,"formGroup","ngSubmit"],["formControlName","email","type","email",1,"input"],["formControlName","pass","type","password",1,"input"],["type","submit",1,"button"]],template:function(e,i){1&e&&(t.TgZ(0,"div")(1,"h2")(2,"span",0),t.NdJ("click",function(){return i.onChangeMethod("sign In")}),t._uU(3,"Sign In"),t.qZA(),t._uU(4," / "),t.TgZ(5,"span",0),t.NdJ("click",function(){return i.onChangeMethod("sign Up")}),t._uU(6,"Sign Up"),t.qZA()(),t.TgZ(7,"form",1),t.NdJ("ngSubmit",function(){return i.onSubmit()}),t._UZ(8,"input",2)(9,"input",3),t.TgZ(10,"button",4),t._uU(11),t.qZA()()()),2&e&&(t.xp6(2),t.ekj("active","sign In"===i.signType),t.xp6(3),t.ekj("active","sign Up"===i.signType),t.xp6(2),t.Q6J("formGroup",i.credentialsForm),t.xp6(4),t.Oqu(i.signType))},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u],styles:["[_nghost-%COMP%]{height:100%;display:grid;justify-items:center;align-items:center}[_nghost-%COMP%]   .active[_ngcontent-%COMP%]{color:#00f}[_nghost-%COMP%]   .sign-title[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .input[_ngcontent-%COMP%]{border-radius:5px}[_nghost-%COMP%]   .button[_ngcontent-%COMP%]{width:100%;height:3rem;text-transform:capitalize;border:.5px solid #cccccc;border-radius:5px;font-size:1.5rem;cursor:pointer}"]}),n})()}];let v=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[c.Bz.forChild(f)],c.Bz]}),n})(),A=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[p.ez,v,r.UX]]}),n})()}}]);